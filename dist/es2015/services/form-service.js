var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from "aurelia-framework";
import { SchemaFormLogger } from "../resources/logger";
let FormService = class FormService {
    constructor(logger) {
        this.logger = logger;
        this.containerMarker = "@";
        this.overrideMarker = "$";
    }
    buildArrayForm(schema, form, formKey, model) {
        this.logger.info("buildArrayForm", { schema, form, model });
        form["$schema"] = schema.items;
        form["$arraySchema"] = schema;
        schema.items.title = schema.items.title || this.getTitle(formKey);
        let template = `<sf-${schema.items.type} model.two-way="model[$index]" form.bind="form"`;
        if (form["$schema"].type === "object") {
            template += ` schema.bind="form['$schema']"`;
        }
        template += `></sf-${schema.items.type}>`;
        this.logger.info("sf-array-item template", { template, schema, form, model });
        return template;
    }
    buildObjectForm(schema, form, model, segment = "") {
        this.logger.info("buildObjectForm", arguments);
        let template = "";
        try {
            let wrapper;
            // tslint:disable-next-line:forin
            for (const formKey in form) {
                wrapper = this.getEmmetWrapper(formKey, wrapper);
                template = this.applyEmmetStart(wrapper, template);
                if (this.isOverride(formKey)) {
                    // do nothing
                }
                else if (this.isContainer(formKey)) {
                    // inner emmet container
                    ({ segment, template } = this.getContainerTemplate(segment, formKey, form, template, schema, model));
                }
                else {
                    // object property
                    ({ model, template } = this.getObjectPropertyTemplate(form, formKey, schema, model, template, segment));
                }
                template = this.applyEmmetEnd(wrapper, template);
            }
            this.logger.info("created template", { template, schema });
            return template;
        }
        catch (ex) {
            this.logger.error("an error occurred building object view strategy", ex, schema, form, model, segment);
            throw ex;
        }
    }
    getContainerTemplate(segment, formKey, form, template, schema, model) {
        segment += `['${formKey}']`;
        const innerForms = form[formKey];
        for (let index = 0; index < innerForms.length; index++) {
            template += this.buildObjectForm(schema, innerForms[index], model, segment + `[${index}]`);
        }
        return { segment, template };
    }
    getArrayItemDefault(schema, model) {
        switch (schema.items.type) {
            case "array":
                return model || [];
            case "number":
                return model || schema.items.const || schema.items.default || "";
            case "string":
                return model || schema.items.const || schema.items.default || "";
            case "object":
                return this.getObjectModelDefaults({}, schema.items);
        }
    }
    getObjectPropertyTemplate(form, formKey, schema, model, template, segment) {
        const override = this.getOverride(form, formKey, schema);
        model = this.getObjectModelDefaults(model, schema);
        // tslint:disable-next-line:max-line-length
        template += `<sf-${override.$schema.type} model.two-way="model.${formKey}" form.bind="form${segment}.${formKey}"`;
        if (override.$schema.type === "array") {
            model[formKey] = model[formKey] || [];
            template += ` schema.bind="schema.properties.${formKey}" key="${formKey}"`;
        }
        if (override.$schema.type === "object") {
            model[formKey] = model[formKey] || {};
            template += ` schema.bind="schema.properties.${formKey}"`;
        }
        template += `></sf-${override.$schema.type}>\r\n`;
        return { model, template };
    }
    isOverride(key) {
        this.logger.info("isOverride", arguments);
        return key.charAt(0) === this.overrideMarker;
    }
    isContainer(key) {
        this.logger.info("isContainer", arguments);
        return key.charAt(0) === this.containerMarker;
    }
    getOverride(form, formKey, schema) {
        this.logger.info("getOverride", { formKey, form, schema });
        const override = form[formKey];
        override.$schema = schema.properties[formKey];
        override.$schema.title = override.$schema.title || this.getTitle(formKey);
        override.$required = Array.isArray(schema.required) ? schema.required.indexOf(formKey) !== -1 : false;
        return override;
    }
    getTitle(key) {
        this.logger.info("getTitle", arguments);
        if (key) {
            return key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());
        }
    }
    getObjectModelDefaults(model, schema) {
        this.logger.info("getObjectModelDefaults", arguments);
        model = model || {};
        if (schema.properties) {
            for (const property in schema.properties) {
                if (schema.properties[property].const || schema.properties[property].default) {
                    model[property] = model[property] || schema.properties[property].const || schema.properties[property].default;
                }
            }
        }
        return model;
    }
    getEmmetContainer(key) {
        this.logger.info("getEmmetContainer", arguments);
        const regex = /^@([a-z-]+)(?:(?:(?:#(\w+))?)(?:((?:\.(?:[a-z\d-]+))+)?))$/;
        const matches = key.match(regex);
        if (!matches) {
            throw new Error(`the form key "${key}" does not match "^(@element)(#id)?((.class)+)?$"`);
        }
        const element = matches[1];
        const id = !matches[2] ? "" : `id="${matches[2]}"`;
        const classes = !matches[3] ? "" : `class="${matches[3].split(".").join(" ").trim()}"`;
        return {
            start: `<${element} ${id} ${classes}>`.replace(/\s+/, " ").trim(),
            end: `</${element}>`
        };
    }
    getEmmetWrapper(key, wrapper) {
        this.logger.info("getEmmetWrapper", arguments);
        if (this.isContainer(key)) {
            wrapper = this.getEmmetContainer(key);
        }
        else {
            wrapper = {};
        }
        return wrapper;
    }
    applyEmmetEnd(wrapper, template) {
        this.logger.info("applyEmmetEnd", arguments);
        if (wrapper.end) {
            template += wrapper.end;
        }
        return template;
    }
    applyEmmetStart(wrapper, template) {
        this.logger.info("applyEmmetStart", arguments);
        if (wrapper.start) {
            template += wrapper.start;
        }
        return template;
    }
};
FormService = __decorate([
    inject(SchemaFormLogger),
    __metadata("design:paramtypes", [SchemaFormLogger])
], FormService);
export { FormService };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RSxDQUFDO1NBQ2Q7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQTBDLEVBQUUsUUFBZ0I7UUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUEwQyxFQUFFLFFBQWdCO1FBQzFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFBO0FBdkxZLFdBQVc7SUFEdkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDO3FDQU1LLGdCQUFnQjtHQUxqQyxXQUFXLENBdUx2QjtTQXZMWSxXQUFXIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sIElKc29uU2NoZW1hU3RyaW5nRGVmaW5pdGlvbiwgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uLCBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybSwgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm1cIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUxvZ2dlcilcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG5cbiAgcmVhZG9ubHkgY29udGFpbmVyTWFya2VyID0gXCJAXCI7XG4gIHJlYWRvbmx5IG92ZXJyaWRlTWFya2VyID0gXCIkXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxuXG4gIGJ1aWxkQXJyYXlGb3JtKHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sIGZvcm06IElGb3JtLCBmb3JtS2V5OiBzdHJpbmcsIG1vZGVsOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImJ1aWxkQXJyYXlGb3JtXCIsIHsgc2NoZW1hLCBmb3JtLCBtb2RlbCB9KTtcblxuICAgIChmb3JtIGFzIElGb3JtT3ZlcnJpZGUpW1wiJHNjaGVtYVwiXSA9IHNjaGVtYS5pdGVtcztcbiAgICAoZm9ybSBhcyBJRm9ybU92ZXJyaWRlKVtcIiRhcnJheVNjaGVtYVwiXSA9IHNjaGVtYTtcblxuICAgIHNjaGVtYS5pdGVtcy50aXRsZSA9IHNjaGVtYS5pdGVtcy50aXRsZSB8fCB0aGlzLmdldFRpdGxlKGZvcm1LZXkpO1xuICAgIGxldCB0ZW1wbGF0ZSA9XG4gICAgICBgPHNmLSR7c2NoZW1hLml0ZW1zLnR5cGV9IG1vZGVsLnR3by13YXk9XCJtb2RlbFskaW5kZXhdXCIgZm9ybS5iaW5kPVwiZm9ybVwiYDtcbiAgICBpZiAoKGZvcm0gYXMgSUZvcm1PdmVycmlkZSlbXCIkc2NoZW1hXCJdLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJmb3JtWyckc2NoZW1hJ11cImA7XG4gICAgfVxuICAgIHRlbXBsYXRlICs9IGA+PC9zZi0ke3NjaGVtYS5pdGVtcy50eXBlfT5gO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1hcnJheS1pdGVtIHRlbXBsYXRlXCIsIHsgdGVtcGxhdGUsIHNjaGVtYSwgZm9ybSwgbW9kZWwgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgYnVpbGRPYmplY3RGb3JtKHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLCBmb3JtOiBJRm9ybSwgbW9kZWw6IG9iamVjdCwgc2VnbWVudCA9IFwiXCIpOiBzdHJpbmcge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZE9iamVjdEZvcm1cIiwgYXJndW1lbnRzKTtcbiAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xuICAgIHRyeSB7XG4gICAgICBsZXQgd3JhcHBlcjogeyBzdGFydD86IHN0cmluZywgZW5kPzogc3RyaW5nIH07XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICAgIGZvciAoY29uc3QgZm9ybUtleSBpbiBmb3JtKSB7XG4gICAgICAgIHdyYXBwZXIgPSB0aGlzLmdldEVtbWV0V3JhcHBlcihmb3JtS2V5LCB3cmFwcGVyKTtcbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLmFwcGx5RW1tZXRTdGFydCh3cmFwcGVyLCB0ZW1wbGF0ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNPdmVycmlkZShmb3JtS2V5KSkge1xuICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQ29udGFpbmVyKGZvcm1LZXkpKSB7XG4gICAgICAgICAgLy8gaW5uZXIgZW1tZXQgY29udGFpbmVyXG4gICAgICAgICAgKHsgc2VnbWVudCwgdGVtcGxhdGUgfSA9IHRoaXMuZ2V0Q29udGFpbmVyVGVtcGxhdGUoc2VnbWVudCwgZm9ybUtleSwgZm9ybSwgdGVtcGxhdGUsIHNjaGVtYSwgbW9kZWwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBvYmplY3QgcHJvcGVydHlcbiAgICAgICAgICAoeyBtb2RlbCwgdGVtcGxhdGUgfSA9IHRoaXMuZ2V0T2JqZWN0UHJvcGVydHlUZW1wbGF0ZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIG1vZGVsLCB0ZW1wbGF0ZSwgc2VnbWVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLmFwcGx5RW1tZXRFbmQod3JhcHBlciwgdGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcImNyZWF0ZWQgdGVtcGxhdGVcIiwgeyB0ZW1wbGF0ZSwgc2NoZW1hIH0pO1xuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihcImFuIGVycm9yIG9jY3VycmVkIGJ1aWxkaW5nIG9iamVjdCB2aWV3IHN0cmF0ZWd5XCIsIGV4LCBzY2hlbWEsIGZvcm0sIG1vZGVsLCBzZWdtZW50KTtcbiAgICAgIHRocm93IGV4O1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRhaW5lclRlbXBsYXRlKFxuICAgIHNlZ21lbnQ6IHN0cmluZywgZm9ybUtleTogc3RyaW5nLCBmb3JtOiBJRm9ybSwgdGVtcGxhdGU6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIG1vZGVsOiBvYmplY3RcbiAgKSB7XG4gICAgc2VnbWVudCArPSBgWycke2Zvcm1LZXl9J11gO1xuICAgIGNvbnN0IGlubmVyRm9ybXMgPSBmb3JtW2Zvcm1LZXldIGFzIElGb3JtW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlubmVyRm9ybXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0ZW1wbGF0ZSArPSB0aGlzLmJ1aWxkT2JqZWN0Rm9ybShzY2hlbWEsIGlubmVyRm9ybXNbaW5kZXhdLCBtb2RlbCwgc2VnbWVudCArIGBbJHtpbmRleH1dYCk7XG4gICAgfVxuICAgIHJldHVybiB7IHNlZ21lbnQsIHRlbXBsYXRlIH07XG4gIH1cblxuICBnZXRBcnJheUl0ZW1EZWZhdWx0KHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sIG1vZGVsKSB7XG4gICAgc3dpdGNoIChzY2hlbWEuaXRlbXMudHlwZSkge1xuICAgICAgY2FzZSBcImFycmF5XCI6XG4gICAgICAgIHJldHVybiBtb2RlbCB8fCBbXTtcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5pdGVtcy5jb25zdCB8fCBzY2hlbWEuaXRlbXMuZGVmYXVsdCB8fCBcIlwiO1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICByZXR1cm4gbW9kZWwgfHwgc2NoZW1hLml0ZW1zLmNvbnN0IHx8IHNjaGVtYS5pdGVtcy5kZWZhdWx0IHx8IFwiXCI7XG4gICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdE1vZGVsRGVmYXVsdHMoe30sIHNjaGVtYS5pdGVtcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0T2JqZWN0UHJvcGVydHlUZW1wbGF0ZShcbiAgICBmb3JtOiBJRm9ybSwgZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgbW9kZWw6IG9iamVjdCwgdGVtcGxhdGU6IHN0cmluZywgc2VnbWVudDogc3RyaW5nXG4gICkge1xuICAgIGNvbnN0IG92ZXJyaWRlID0gdGhpcy5nZXRPdmVycmlkZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEpO1xuICAgIG1vZGVsID0gdGhpcy5nZXRPYmplY3RNb2RlbERlZmF1bHRzKG1vZGVsLCBzY2hlbWEpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB0ZW1wbGF0ZSArPSBgPHNmLSR7b3ZlcnJpZGUuJHNjaGVtYS50eXBlfSBtb2RlbC50d28td2F5PVwibW9kZWwuJHtmb3JtS2V5fVwiIGZvcm0uYmluZD1cImZvcm0ke3NlZ21lbnR9LiR7Zm9ybUtleX1cImA7XG4gICAgaWYgKG92ZXJyaWRlLiRzY2hlbWEudHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICBtb2RlbFtmb3JtS2V5XSA9IG1vZGVsW2Zvcm1LZXldIHx8IFtdO1xuICAgICAgdGVtcGxhdGUgKz0gYCBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7Zm9ybUtleX1cIiBrZXk9XCIke2Zvcm1LZXl9XCJgO1xuICAgIH1cbiAgICBpZiAob3ZlcnJpZGUuJHNjaGVtYS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBtb2RlbFtmb3JtS2V5XSA9IG1vZGVsW2Zvcm1LZXldIHx8IHt9O1xuICAgICAgdGVtcGxhdGUgKz0gYCBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7Zm9ybUtleX1cImA7XG4gICAgfVxuICAgIHRlbXBsYXRlICs9IGA+PC9zZi0ke292ZXJyaWRlLiRzY2hlbWEudHlwZX0+XFxyXFxuYDtcbiAgICByZXR1cm4geyBtb2RlbCwgdGVtcGxhdGUgfTtcbiAgfVxuXG4gIGlzT3ZlcnJpZGUoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiaXNPdmVycmlkZVwiLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLm92ZXJyaWRlTWFya2VyO1xuICB9XG5cbiAgaXNDb250YWluZXIoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiaXNDb250YWluZXJcIiwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4ga2V5LmNoYXJBdCgwKSA9PT0gdGhpcy5jb250YWluZXJNYXJrZXI7XG4gIH1cblxuICBnZXRPdmVycmlkZShmb3JtOiBJRm9ybSwgZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRPdmVycmlkZVwiLCB7IGZvcm1LZXksIGZvcm0sIHNjaGVtYSB9KTtcbiAgICBjb25zdCBvdmVycmlkZSA9IGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZTtcbiAgICBvdmVycmlkZS4kc2NoZW1hID0gc2NoZW1hLnByb3BlcnRpZXNbZm9ybUtleV07XG4gICAgb3ZlcnJpZGUuJHNjaGVtYS50aXRsZSA9IG92ZXJyaWRlLiRzY2hlbWEudGl0bGUgfHwgdGhpcy5nZXRUaXRsZShmb3JtS2V5KTtcbiAgICBvdmVycmlkZS4kcmVxdWlyZWQgPSBBcnJheS5pc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkgPyBzY2hlbWEucmVxdWlyZWQuaW5kZXhPZihmb3JtS2V5KSAhPT0gLTEgOiBmYWxzZTtcbiAgICByZXR1cm4gb3ZlcnJpZGU7XG4gIH1cblxuICBnZXRUaXRsZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRUaXRsZVwiLCBhcmd1bWVudHMpO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXlcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKHN0cikgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9iamVjdE1vZGVsRGVmYXVsdHMobW9kZWw6IG9iamVjdCwgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0T2JqZWN0TW9kZWxEZWZhdWx0c1wiLCBhcmd1bWVudHMpO1xuICAgIG1vZGVsID0gbW9kZWwgfHwge307XG4gICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0uY29uc3QgfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmRlZmF1bHQpIHtcbiAgICAgICAgICBtb2RlbFtwcm9wZXJ0eV0gPSBtb2RlbFtwcm9wZXJ0eV0gfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmNvbnN0IHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5kZWZhdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIGdldEVtbWV0Q29udGFpbmVyKGtleTogc3RyaW5nKTogeyBzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyB9IHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0RW1tZXRDb250YWluZXJcIiwgYXJndW1lbnRzKTtcbiAgICBjb25zdCByZWdleCA9IC9eQChbYS16LV0rKSg/Oig/Oig/OiMoXFx3KykpPykoPzooKD86XFwuKD86W2EtelxcZC1dKykpKyk/KSkkLztcblxuICAgIGNvbnN0IG1hdGNoZXMgPSBrZXkubWF0Y2gocmVnZXgpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBmb3JtIGtleSBcIiR7a2V5fVwiIGRvZXMgbm90IG1hdGNoIFwiXihAZWxlbWVudCkoI2lkKT8oKC5jbGFzcykrKT8kXCJgKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gbWF0Y2hlc1sxXTtcbiAgICBjb25zdCBpZCA9ICFtYXRjaGVzWzJdID8gXCJcIiA6IGBpZD1cIiR7bWF0Y2hlc1syXX1cImA7XG4gICAgY29uc3QgY2xhc3NlcyA9ICFtYXRjaGVzWzNdID8gXCJcIiA6IGBjbGFzcz1cIiR7bWF0Y2hlc1szXS5zcGxpdChcIi5cIikuam9pbihcIiBcIikudHJpbSgpfVwiYDtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogYDwke2VsZW1lbnR9ICR7aWR9ICR7Y2xhc3Nlc30+YC5yZXBsYWNlKC9cXHMrLywgXCIgXCIpLnRyaW0oKSxcbiAgICAgIGVuZDogYDwvJHtlbGVtZW50fT5gXG4gICAgfTtcbiAgfVxuXG4gIGdldEVtbWV0V3JhcHBlcihrZXk6IHN0cmluZywgd3JhcHBlcjogeyBzdGFydD86IHN0cmluZzsgZW5kPzogc3RyaW5nOyB9KSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEVtbWV0V3JhcHBlclwiLCBhcmd1bWVudHMpO1xuICAgIGlmICh0aGlzLmlzQ29udGFpbmVyKGtleSkpIHtcbiAgICAgIHdyYXBwZXIgPSB0aGlzLmdldEVtbWV0Q29udGFpbmVyKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBwZXIgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH1cblxuICBhcHBseUVtbWV0RW5kKHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBseUVtbWV0RW5kXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHdyYXBwZXIuZW5kKSB7XG4gICAgICB0ZW1wbGF0ZSArPSB3cmFwcGVyLmVuZDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgYXBwbHlFbW1ldFN0YXJ0KHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBseUVtbWV0U3RhcnRcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAod3JhcHBlci5zdGFydCkge1xuICAgICAgdGVtcGxhdGUgKz0gd3JhcHBlci5zdGFydDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
