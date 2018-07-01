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
                    segment += `['${formKey}']`;
                    const innerForms = form[formKey];
                    for (let index = 0; index < innerForms.length; index++) {
                        template += this.buildObjectForm(schema, innerForms[index], model, segment + `[${index}]`);
                    }
                }
                else {
                    // object property
                    const override = this.getOverride(form, formKey, schema);
                    model = this.getObjectModelDefaults(model, schema);
                    // tslint:disable-next-line:max-line-length
                    template += `<sf-${override.$schema.type} model.two-way="model.${formKey}" form.bind="form${segment}.${formKey}"`;
                    if (override.$schema.type === "array") {
                        model[formKey] = [];
                        template += ` schema.bind="schema.properties.${formKey}"`;
                    }
                    if (override.$schema.type === "object") {
                        model[formKey] = {};
                        template += ` schema.bind="schema.properties.${formKey}"`;
                    }
                    template += `></sf-${override.$schema.type}>\r\n`;
                }
                template = this.applyEmmetEnd(wrapper, template);
            }
            this.logger.info("created template", template, schema);
            return template;
        }
        catch (ex) {
            this.logger.error("an error occurred building object view strategy", ex, schema, form, model, segment);
            throw ex;
        }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsYUFBYSxDQUFDLE9BQTBDLEVBQUUsUUFBZ0I7UUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELGVBQWUsQ0FBQyxPQUEwQyxFQUFFLFFBQWdCO1FBQzFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNqQixRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztTQUMzQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7Q0FDRixDQUFBO0FBOUlZLFdBQVc7SUFEdkIsTUFBTSxDQUFDLGdCQUFnQixDQUFDO3FDQU1LLGdCQUFnQjtHQUxqQyxXQUFXLENBOEl2QjtTQTlJWSxXQUFXIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgSUZvcm0sIElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Mb2dnZXIpXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuXG4gIHJlYWRvbmx5IGNvbnRhaW5lck1hcmtlciA9IFwiQFwiO1xuICByZWFkb25seSBvdmVycmlkZU1hcmtlciA9IFwiJFwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyKSB7IH1cblxuICBidWlsZE9iamVjdEZvcm0oc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIGZvcm06IElGb3JtLCBtb2RlbDogb2JqZWN0LCBzZWdtZW50ID0gXCJcIik6IHN0cmluZyB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImJ1aWxkT2JqZWN0Rm9ybVwiLCBhcmd1bWVudHMpO1xuICAgIGxldCB0ZW1wbGF0ZSA9IFwiXCI7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nLCBlbmQ/OiBzdHJpbmcgfTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgICAgZm9yIChjb25zdCBmb3JtS2V5IGluIGZvcm0pIHtcbiAgICAgICAgd3JhcHBlciA9IHRoaXMuZ2V0RW1tZXRXcmFwcGVyKGZvcm1LZXksIHdyYXBwZXIpO1xuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuYXBwbHlFbW1ldFN0YXJ0KHdyYXBwZXIsIHRlbXBsYXRlKTtcblxuICAgICAgICBpZiAodGhpcy5pc092ZXJyaWRlKGZvcm1LZXkpKSB7XG4gICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNDb250YWluZXIoZm9ybUtleSkpIHtcbiAgICAgICAgICAvLyBpbm5lciBlbW1ldCBjb250YWluZXJcblxuICAgICAgICAgIHNlZ21lbnQgKz0gYFsnJHtmb3JtS2V5fSddYDtcbiAgICAgICAgICBjb25zdCBpbm5lckZvcm1zID0gZm9ybVtmb3JtS2V5XSBhcyBJRm9ybVtdO1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbm5lckZvcm1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhpcy5idWlsZE9iamVjdEZvcm0oc2NoZW1hLCBpbm5lckZvcm1zW2luZGV4XSwgbW9kZWwsIHNlZ21lbnQgKyBgWyR7aW5kZXh9XWApO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG9iamVjdCBwcm9wZXJ0eVxuXG4gICAgICAgICAgY29uc3Qgb3ZlcnJpZGUgPSB0aGlzLmdldE92ZXJyaWRlKGZvcm0sIGZvcm1LZXksIHNjaGVtYSk7XG4gICAgICAgICAgbW9kZWwgPSB0aGlzLmdldE9iamVjdE1vZGVsRGVmYXVsdHMobW9kZWwsIHNjaGVtYSk7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgIHRlbXBsYXRlICs9IGA8c2YtJHtvdmVycmlkZS4kc2NoZW1hLnR5cGV9IG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2Zvcm1LZXl9XCIgZm9ybS5iaW5kPVwiZm9ybSR7c2VnbWVudH0uJHtmb3JtS2V5fVwiYDtcbiAgICAgICAgICBpZiAob3ZlcnJpZGUuJHNjaGVtYS50eXBlID09PSBcImFycmF5XCIpIHtcbiAgICAgICAgICAgIG1vZGVsW2Zvcm1LZXldID0gW107XG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtmb3JtS2V5fVwiYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG92ZXJyaWRlLiRzY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgbW9kZWxbZm9ybUtleV0gPSB7fTtcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCJgO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtvdmVycmlkZS4kc2NoZW1hLnR5cGV9PlxcclxcbmA7XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuYXBwbHlFbW1ldEVuZCh3cmFwcGVyLCB0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiY3JlYXRlZCB0ZW1wbGF0ZVwiLCB0ZW1wbGF0ZSwgc2NoZW1hKTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJhbiBlcnJvciBvY2N1cnJlZCBidWlsZGluZyBvYmplY3QgdmlldyBzdHJhdGVneVwiLCBleCwgc2NoZW1hLCBmb3JtLCBtb2RlbCwgc2VnbWVudCk7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH1cblxuICBpc092ZXJyaWRlKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzT3ZlcnJpZGVcIiwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4ga2V5LmNoYXJBdCgwKSA9PT0gdGhpcy5vdmVycmlkZU1hcmtlcjtcbiAgfVxuXG4gIGlzQ29udGFpbmVyKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzQ29udGFpbmVyXCIsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGtleS5jaGFyQXQoMCkgPT09IHRoaXMuY29udGFpbmVyTWFya2VyO1xuICB9XG5cbiAgZ2V0T3ZlcnJpZGUoZm9ybTogSUZvcm0sIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0T3ZlcnJpZGVcIiwgeyBmb3JtS2V5LCBmb3JtLCBzY2hlbWEgfSk7XG4gICAgY29uc3Qgb3ZlcnJpZGUgPSBmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGU7XG4gICAgb3ZlcnJpZGUuJHNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW2Zvcm1LZXldO1xuICAgIG92ZXJyaWRlLiRzY2hlbWEudGl0bGUgPSBvdmVycmlkZS4kc2NoZW1hLnRpdGxlIHx8IHRoaXMuZ2V0VGl0bGUoZm9ybUtleSk7XG4gICAgb3ZlcnJpZGUuJHJlcXVpcmVkID0gQXJyYXkuaXNBcnJheShzY2hlbWEucmVxdWlyZWQpID8gc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YoZm9ybUtleSkgIT09IC0xIDogZmFsc2U7XG4gICAgcmV0dXJuIG92ZXJyaWRlO1xuICB9XG5cbiAgZ2V0VGl0bGUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0VGl0bGVcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBnZXRPYmplY3RNb2RlbERlZmF1bHRzKG1vZGVsOiBvYmplY3QsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldE9iamVjdE1vZGVsRGVmYXVsdHNcIiwgYXJndW1lbnRzKTtcbiAgICBtb2RlbCA9IG1vZGVsIHx8IHt9O1xuICAgIGlmIChzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmNvbnN0IHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5kZWZhdWx0KSB7XG4gICAgICAgICAgbW9kZWxbcHJvcGVydHldID0gbW9kZWxbcHJvcGVydHldIHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5jb25zdCB8fCBzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0uZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBnZXRFbW1ldENvbnRhaW5lcihrZXk6IHN0cmluZyk6IHsgc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcgfSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEVtbWV0Q29udGFpbmVyXCIsIGFyZ3VtZW50cyk7XG4gICAgY29uc3QgcmVnZXggPSAvXkAoW2Etei1dKykoPzooPzooPzojKFxcdyspKT8pKD86KCg/OlxcLig/OlthLXpcXGQtXSspKSspPykpJC87XG5cbiAgICBjb25zdCBtYXRjaGVzID0ga2V5Lm1hdGNoKHJlZ2V4KTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgZm9ybSBrZXkgXCIke2tleX1cIiBkb2VzIG5vdCBtYXRjaCBcIl4oQGVsZW1lbnQpKCNpZCk/KCguY2xhc3MpKyk/JFwiYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IG1hdGNoZXNbMV07XG4gICAgY29uc3QgaWQgPSAhbWF0Y2hlc1syXSA/IFwiXCIgOiBgaWQ9XCIke21hdGNoZXNbMl19XCJgO1xuICAgIGNvbnN0IGNsYXNzZXMgPSAhbWF0Y2hlc1szXSA/IFwiXCIgOiBgY2xhc3M9XCIke21hdGNoZXNbM10uc3BsaXQoXCIuXCIpLmpvaW4oXCIgXCIpLnRyaW0oKX1cImA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IGA8JHtlbGVtZW50fSAke2lkfSAke2NsYXNzZXN9PmAucmVwbGFjZSgvXFxzKy8sIFwiIFwiKS50cmltKCksXG4gICAgICBlbmQ6IGA8LyR7ZWxlbWVudH0+YFxuICAgIH07XG4gIH1cblxuICBnZXRFbW1ldFdyYXBwZXIoa2V5OiBzdHJpbmcsIHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRFbW1ldFdyYXBwZXJcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAodGhpcy5pc0NvbnRhaW5lcihrZXkpKSB7XG4gICAgICB3cmFwcGVyID0gdGhpcy5nZXRFbW1ldENvbnRhaW5lcihrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwcGVyID0ge307XG4gICAgfVxuICAgIHJldHVybiB3cmFwcGVyO1xuICB9XG5cbiAgYXBwbHlFbW1ldEVuZCh3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nOyBlbmQ/OiBzdHJpbmc7IH0sIHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYXBwbHlFbW1ldEVuZFwiLCBhcmd1bWVudHMpO1xuICAgIGlmICh3cmFwcGVyLmVuZCkge1xuICAgICAgdGVtcGxhdGUgKz0gd3JhcHBlci5lbmQ7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGFwcGx5RW1tZXRTdGFydCh3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nOyBlbmQ/OiBzdHJpbmc7IH0sIHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYXBwbHlFbW1ldFN0YXJ0XCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHdyYXBwZXIuc3RhcnQpIHtcbiAgICAgIHRlbXBsYXRlICs9IHdyYXBwZXIuc3RhcnQ7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
