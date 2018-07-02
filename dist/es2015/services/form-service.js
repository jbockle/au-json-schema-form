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
            template = this.getObjectFormTemplate(form, template, segment, schema, model);
            this.logger.info("created template", { template, schema });
            return template;
        }
        catch (ex) {
            this.logger.error("an error occurred building object view strategy", ex, schema, form, model, segment);
            throw ex;
        }
    }
    getObjectFormTemplate(form, template, segment, schema, model) {
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
                template = this.getContainerTemplate(segment, formKey, form, template, schema, model);
            }
            else {
                // object property
                template = this.getObjectPropertyTemplate(form, formKey, schema, model, template, segment);
            }
            template = this.applyEmmetEnd(wrapper, template);
        }
        return template;
    }
    getContainerTemplate(segment, formKey, form, template, schema, model) {
        segment += `['${formKey}']`;
        const innerForms = form[formKey];
        for (let index = 0; index < innerForms.length; index++) {
            template += this.buildObjectForm(schema, innerForms[index], model, segment + `[${index}]`);
        }
        return template;
    }
    getArrayItemDefault(schema, model) {
        switch (schema.items.type) {
            case "array":
                return model || [];
            case "number":
                return model || schema.items.const || schema.items.default || "";
            case "string":
                return model || schema.items.const || schema.items.default || "";
            case "boolean":
                return model || false;
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
        return template;
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
                if (schema.properties[property].const !== undefined || schema.properties[property].default !== undefined) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHdkQsSUFBYSxXQUFXLEdBQXhCO0lBS0UsWUFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFIbkMsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxHQUFHLENBQUM7SUFFa0IsQ0FBQztJQUVqRCxjQUFjLENBQUMsTUFBa0MsRUFBRSxJQUFtQixFQUFFLE9BQWUsRUFBRSxLQUFZO1FBQ25HLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxNQUFNLENBQUM7UUFFOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNsRSxJQUFJLFFBQVEsR0FDVixPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxpREFBaUQsQ0FBQztRQUM1RSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ3JDLFFBQVEsSUFBSSxnQ0FBZ0MsQ0FBQztTQUM5QztRQUNELFFBQVEsSUFBSSxTQUFTLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFB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QUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQTBDLEVBQUUsUUFBZ0I7UUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUEwQyxFQUFFLFFBQWdCO1FBQzFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFBO0FBeE1ZLFdBQVc7SUFEdkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDO3FDQU1LLGdCQUFnQjtHQUxqQyxXQUFXLENBd012QjtTQXhNWSxXQUFXIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcblxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuICByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSBcIkBcIjtcbiAgcmVhZG9ubHkgb3ZlcnJpZGVNYXJrZXIgPSBcIiRcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XG5cbiAgYnVpbGRBcnJheUZvcm0oc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiwgZm9ybTogSUZvcm1PdmVycmlkZSwgZm9ybUtleTogc3RyaW5nLCBtb2RlbDogYW55W10pOiBzdHJpbmcge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZEFycmF5Rm9ybVwiLCB7IHNjaGVtYSwgZm9ybSwgbW9kZWwgfSk7XG5cbiAgICBmb3JtW1wiJHNjaGVtYVwiXSA9IHNjaGVtYS5pdGVtcztcbiAgICBmb3JtW1wiJGFycmF5U2NoZW1hXCJdID0gc2NoZW1hO1xuXG4gICAgc2NoZW1hLml0ZW1zLnRpdGxlID0gc2NoZW1hLml0ZW1zLnRpdGxlIHx8IHRoaXMuZ2V0VGl0bGUoZm9ybUtleSk7XG4gICAgbGV0IHRlbXBsYXRlID1cbiAgICAgIGA8c2YtJHtzY2hlbWEuaXRlbXMudHlwZX0gbW9kZWwudHdvLXdheT1cIm1vZGVsWyRpbmRleF1cIiBmb3JtLmJpbmQ9XCJmb3JtXCJgO1xuICAgIGlmIChmb3JtW1wiJHNjaGVtYVwiXS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0ZW1wbGF0ZSArPSBgIHNjaGVtYS5iaW5kPVwiZm9ybVsnJHNjaGVtYSddXCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtzY2hlbWEuaXRlbXMudHlwZX0+YDtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXktaXRlbSB0ZW1wbGF0ZVwiLCB7IHRlbXBsYXRlLCBzY2hlbWEsIGZvcm0sIG1vZGVsIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGJ1aWxkT2JqZWN0Rm9ybShzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgZm9ybTogSUZvcm1PdmVycmlkZSwgbW9kZWw6IG9iamVjdCwgc2VnbWVudCA9IFwiXCIpOiBzdHJpbmcge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZE9iamVjdEZvcm1cIiwgYXJndW1lbnRzKTtcbiAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xuICAgIHRyeSB7XG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMuZ2V0T2JqZWN0Rm9ybVRlbXBsYXRlKGZvcm0sIHRlbXBsYXRlLCBzZWdtZW50LCBzY2hlbWEsIG1vZGVsKTtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVkIHRlbXBsYXRlXCIsIHsgdGVtcGxhdGUsIHNjaGVtYSB9KTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJhbiBlcnJvciBvY2N1cnJlZCBidWlsZGluZyBvYmplY3QgdmlldyBzdHJhdGVneVwiLCBleCwgc2NoZW1hLCBmb3JtLCBtb2RlbCwgc2VnbWVudCk7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE9iamVjdEZvcm1UZW1wbGF0ZShcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLCB0ZW1wbGF0ZTogc3RyaW5nLCBzZWdtZW50OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLCBtb2RlbDogb2JqZWN0XG4gICkge1xuICAgIGxldCB3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nLCBlbmQ/OiBzdHJpbmcgfTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGZvcm1LZXkgaW4gZm9ybSkge1xuICAgICAgd3JhcHBlciA9IHRoaXMuZ2V0RW1tZXRXcmFwcGVyKGZvcm1LZXksIHdyYXBwZXIpO1xuICAgICAgdGVtcGxhdGUgPSB0aGlzLmFwcGx5RW1tZXRTdGFydCh3cmFwcGVyLCB0ZW1wbGF0ZSk7XG4gICAgICBpZiAodGhpcy5pc092ZXJyaWRlKGZvcm1LZXkpKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0NvbnRhaW5lcihmb3JtS2V5KSkge1xuICAgICAgICAvLyBpbm5lciBlbW1ldCBjb250YWluZXJcbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLmdldENvbnRhaW5lclRlbXBsYXRlKHNlZ21lbnQsIGZvcm1LZXksIGZvcm0sIHRlbXBsYXRlLCBzY2hlbWEsIG1vZGVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG9iamVjdCBwcm9wZXJ0eVxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuZ2V0T2JqZWN0UHJvcGVydHlUZW1wbGF0ZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIG1vZGVsLCB0ZW1wbGF0ZSwgc2VnbWVudCk7XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMuYXBwbHlFbW1ldEVuZCh3cmFwcGVyLCB0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldENvbnRhaW5lclRlbXBsYXRlKFxuICAgIHNlZ21lbnQ6IHN0cmluZyxcbiAgICBmb3JtS2V5OiBzdHJpbmcsXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICB0ZW1wbGF0ZTogc3RyaW5nLFxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLFxuICAgIG1vZGVsOiBvYmplY3RcbiAgKSB7XG4gICAgc2VnbWVudCArPSBgWycke2Zvcm1LZXl9J11gO1xuICAgIGNvbnN0IGlubmVyRm9ybXMgPSBmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGVbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5uZXJGb3Jtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRlbXBsYXRlICs9IHRoaXMuYnVpbGRPYmplY3RGb3JtKHNjaGVtYSwgaW5uZXJGb3Jtc1tpbmRleF0sIG1vZGVsLCBzZWdtZW50ICsgYFske2luZGV4fV1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0QXJyYXlJdGVtRGVmYXVsdChzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLCBtb2RlbCkge1xuICAgIHN3aXRjaCAoc2NoZW1hLml0ZW1zLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhcnJheVwiOlxuICAgICAgICByZXR1cm4gbW9kZWwgfHwgW107XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHJldHVybiBtb2RlbCB8fCBzY2hlbWEuaXRlbXMuY29uc3QgfHwgc2NoZW1hLml0ZW1zLmRlZmF1bHQgfHwgXCJcIjtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5pdGVtcy5jb25zdCB8fCBzY2hlbWEuaXRlbXMuZGVmYXVsdCB8fCBcIlwiO1xuICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IGZhbHNlO1xuICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RNb2RlbERlZmF1bHRzKHt9LCAoc2NoZW1hLml0ZW1zIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9iamVjdFByb3BlcnR5VGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICBmb3JtS2V5OiBzdHJpbmcsXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sXG4gICAgbW9kZWw6IG9iamVjdCxcbiAgICB0ZW1wbGF0ZTogc3RyaW5nLFxuICAgIHNlZ21lbnQ6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBvdmVycmlkZSA9IHRoaXMuZ2V0T3ZlcnJpZGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hKTtcbiAgICBtb2RlbCA9IHRoaXMuZ2V0T2JqZWN0TW9kZWxEZWZhdWx0cyhtb2RlbCwgc2NoZW1hKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGVtcGxhdGUgKz0gYDxzZi0ke292ZXJyaWRlLiRzY2hlbWEudHlwZX0gbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7Zm9ybUtleX1cIiBmb3JtLmJpbmQ9XCJmb3JtJHtzZWdtZW50fS4ke2Zvcm1LZXl9XCJgO1xuICAgIGlmIChvdmVycmlkZS4kc2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgbW9kZWxbZm9ybUtleV0gPSBtb2RlbFtmb3JtS2V5XSB8fCBbXTtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCIga2V5PVwiJHtmb3JtS2V5fVwiYDtcbiAgICB9XG4gICAgaWYgKG92ZXJyaWRlLiRzY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbW9kZWxbZm9ybUtleV0gPSBtb2RlbFtmb3JtS2V5XSB8fCB7fTtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtvdmVycmlkZS4kc2NoZW1hLnR5cGV9PlxcclxcbmA7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgaXNPdmVycmlkZShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpc092ZXJyaWRlXCIsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGtleS5jaGFyQXQoMCkgPT09IHRoaXMub3ZlcnJpZGVNYXJrZXI7XG4gIH1cblxuICBpc0NvbnRhaW5lcihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpc0NvbnRhaW5lclwiLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLmNvbnRhaW5lck1hcmtlcjtcbiAgfVxuXG4gIGdldE92ZXJyaWRlKGZvcm06IElGb3JtT3ZlcnJpZGUsIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0T3ZlcnJpZGVcIiwgeyBmb3JtS2V5LCBmb3JtLCBzY2hlbWEgfSk7XG4gICAgY29uc3Qgb3ZlcnJpZGUgPSBmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGU7XG4gICAgb3ZlcnJpZGUuJHNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW2Zvcm1LZXldO1xuICAgIG92ZXJyaWRlLiRzY2hlbWEudGl0bGUgPSBvdmVycmlkZS4kc2NoZW1hLnRpdGxlIHx8IHRoaXMuZ2V0VGl0bGUoZm9ybUtleSk7XG4gICAgb3ZlcnJpZGUuJHJlcXVpcmVkID0gQXJyYXkuaXNBcnJheShzY2hlbWEucmVxdWlyZWQpID8gc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YoZm9ybUtleSkgIT09IC0xIDogZmFsc2U7XG4gICAgcmV0dXJuIG92ZXJyaWRlO1xuICB9XG5cbiAgZ2V0VGl0bGUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0VGl0bGVcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBnZXRPYmplY3RNb2RlbERlZmF1bHRzKG1vZGVsOiBvYmplY3QsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldE9iamVjdE1vZGVsRGVmYXVsdHNcIiwgYXJndW1lbnRzKTtcbiAgICBtb2RlbCA9IG1vZGVsIHx8IHt9O1xuICAgIGlmIChzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmNvbnN0ICE9PSB1bmRlZmluZWQgfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmRlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG1vZGVsW3Byb3BlcnR5XSA9IG1vZGVsW3Byb3BlcnR5XSB8fCBzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0uY29uc3QgfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgZ2V0RW1tZXRDb250YWluZXIoa2V5OiBzdHJpbmcpOiB7IHN0YXJ0OiBzdHJpbmcsIGVuZDogc3RyaW5nIH0ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRFbW1ldENvbnRhaW5lclwiLCBhcmd1bWVudHMpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL15AKFthLXotXSspKD86KD86KD86IyhcXHcrKSk/KSg/OigoPzpcXC4oPzpbYS16XFxkLV0rKSkrKT8pKSQvO1xuXG4gICAgY29uc3QgbWF0Y2hlcyA9IGtleS5tYXRjaChyZWdleCk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlIGZvcm0ga2V5IFwiJHtrZXl9XCIgZG9lcyBub3QgbWF0Y2ggXCJeKEBlbGVtZW50KSgjaWQpPygoLmNsYXNzKSspPyRcImApO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBtYXRjaGVzWzFdO1xuICAgIGNvbnN0IGlkID0gIW1hdGNoZXNbMl0gPyBcIlwiIDogYGlkPVwiJHttYXRjaGVzWzJdfVwiYDtcbiAgICBjb25zdCBjbGFzc2VzID0gIW1hdGNoZXNbM10gPyBcIlwiIDogYGNsYXNzPVwiJHttYXRjaGVzWzNdLnNwbGl0KFwiLlwiKS5qb2luKFwiIFwiKS50cmltKCl9XCJgO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBgPCR7ZWxlbWVudH0gJHtpZH0gJHtjbGFzc2VzfT5gLnJlcGxhY2UoL1xccysvLCBcIiBcIikudHJpbSgpLFxuICAgICAgZW5kOiBgPC8ke2VsZW1lbnR9PmBcbiAgICB9O1xuICB9XG5cbiAgZ2V0RW1tZXRXcmFwcGVyKGtleTogc3RyaW5nLCB3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nOyBlbmQ/OiBzdHJpbmc7IH0pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0RW1tZXRXcmFwcGVyXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHRoaXMuaXNDb250YWluZXIoa2V5KSkge1xuICAgICAgd3JhcHBlciA9IHRoaXMuZ2V0RW1tZXRDb250YWluZXIoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcHBlciA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxuXG4gIGFwcGx5RW1tZXRFbmQod3JhcHBlcjogeyBzdGFydD86IHN0cmluZzsgZW5kPzogc3RyaW5nOyB9LCB0ZW1wbGF0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImFwcGx5RW1tZXRFbmRcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAod3JhcHBlci5lbmQpIHtcbiAgICAgIHRlbXBsYXRlICs9IHdyYXBwZXIuZW5kO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBhcHBseUVtbWV0U3RhcnQod3JhcHBlcjogeyBzdGFydD86IHN0cmluZzsgZW5kPzogc3RyaW5nOyB9LCB0ZW1wbGF0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImFwcGx5RW1tZXRTdGFydFwiLCBhcmd1bWVudHMpO1xuICAgIGlmICh3cmFwcGVyLnN0YXJ0KSB7XG4gICAgICB0ZW1wbGF0ZSArPSB3cmFwcGVyLnN0YXJ0O1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
