var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../resources/logger"], function (require, exports, aurelia_framework_1, logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormService = /** @class */ (function () {
        function FormService(logger) {
            this.logger = logger;
            this.containerMarker = "@";
            this.overrideMarker = "$";
        }
        FormService.prototype.buildArrayForm = function (schema, form, formKey, model) {
            this.logger.info("buildArrayForm", { schema: schema, form: form, model: model });
            form["$schema"] = schema.items;
            form["$arraySchema"] = schema;
            schema.items.title = schema.items.title || this.getTitle(formKey);
            var template = "<sf-" + schema.items.type + " model.two-way=\"model[$index]\" form.bind=\"form\"";
            if (form["$schema"].type === "object") {
                template += " schema.bind=\"form['$schema']\"";
            }
            template += "></sf-" + schema.items.type + ">";
            this.logger.info("sf-array-item template", { template: template, schema: schema, form: form, model: model });
            return template;
        };
        FormService.prototype.buildObjectForm = function (schema, form, model, segment) {
            if (segment === void 0) { segment = ""; }
            this.logger.info("buildObjectForm", arguments);
            var template = "";
            try {
                template = this.getObjectFormTemplate(form, template, segment, schema, model);
                this.logger.info("created template", { template: template, schema: schema });
                return template;
            }
            catch (ex) {
                this.logger.error("an error occurred building object view strategy", ex, schema, form, model, segment);
                throw ex;
            }
        };
        FormService.prototype.getObjectFormTemplate = function (form, template, segment, schema, model) {
            var wrapper;
            // tslint:disable-next-line:forin
            for (var formKey in form) {
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
        };
        FormService.prototype.getContainerTemplate = function (segment, formKey, form, template, schema, model) {
            segment += "['" + formKey + "']";
            var innerForms = form[formKey];
            for (var index = 0; index < innerForms.length; index++) {
                template += this.buildObjectForm(schema, innerForms[index], model, segment + ("[" + index + "]"));
            }
            return template;
        };
        FormService.prototype.getArrayItemDefault = function (schema, model) {
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
        };
        FormService.prototype.getObjectPropertyTemplate = function (form, formKey, schema, model, template, segment) {
            var override = this.getOverride(form, formKey, schema);
            model = this.getObjectModelDefaults(model, schema);
            // tslint:disable-next-line:max-line-length
            template += "<sf-" + override.$schema.type + " model.two-way=\"model." + formKey + "\" form.bind=\"form" + segment + "." + formKey + "\"";
            if (override.$schema.type === "array") {
                model[formKey] = model[formKey] || [];
                template += " schema.bind=\"schema.properties." + formKey + "\" key=\"" + formKey + "\"";
            }
            if (override.$schema.type === "object") {
                model[formKey] = model[formKey] || {};
                template += " schema.bind=\"schema.properties." + formKey + "\"";
            }
            template += "></sf-" + override.$schema.type + ">\r\n";
            return template;
        };
        FormService.prototype.isOverride = function (key) {
            this.logger.info("isOverride", arguments);
            return key.charAt(0) === this.overrideMarker;
        };
        FormService.prototype.isContainer = function (key) {
            this.logger.info("isContainer", arguments);
            return key.charAt(0) === this.containerMarker;
        };
        FormService.prototype.getOverride = function (form, formKey, schema) {
            this.logger.info("getOverride", { formKey: formKey, form: form, schema: schema });
            var override = form[formKey];
            override.$schema = schema.properties[formKey];
            override.$schema.title = override.$schema.title || this.getTitle(formKey);
            override.$required = Array.isArray(schema.required) ? schema.required.indexOf(formKey) !== -1 : false;
            return override;
        };
        FormService.prototype.getTitle = function (key) {
            this.logger.info("getTitle", arguments);
            if (key) {
                return key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, function (str) { return str.toUpperCase(); });
            }
        };
        FormService.prototype.getObjectModelDefaults = function (model, schema) {
            this.logger.info("getObjectModelDefaults", arguments);
            model = model || {};
            if (schema.properties) {
                for (var property in schema.properties) {
                    if (schema.properties[property].const !== undefined || schema.properties[property].default !== undefined) {
                        model[property] = model[property] || schema.properties[property].const || schema.properties[property].default;
                    }
                }
            }
            return model;
        };
        FormService.prototype.getEmmetContainer = function (key) {
            this.logger.info("getEmmetContainer", arguments);
            var regex = /^@([a-z-]+)(?:(?:(?:#(\w+))?)(?:((?:\.(?:[a-z\d-]+))+)?))$/;
            var matches = key.match(regex);
            if (!matches) {
                throw new Error("the form key \"" + key + "\" does not match \"^(@element)(#id)?((.class)+)?$\"");
            }
            var element = matches[1];
            var id = !matches[2] ? "" : "id=\"" + matches[2] + "\"";
            var classes = !matches[3] ? "" : "class=\"" + matches[3].split(".").join(" ").trim() + "\"";
            return {
                start: ("<" + element + " " + id + " " + classes + ">").replace(/\s+/, " ").trim(),
                end: "</" + element + ">"
            };
        };
        FormService.prototype.getEmmetWrapper = function (key, wrapper) {
            this.logger.info("getEmmetWrapper", arguments);
            if (this.isContainer(key)) {
                wrapper = this.getEmmetContainer(key);
            }
            else {
                wrapper = {};
            }
            return wrapper;
        };
        FormService.prototype.applyEmmetEnd = function (wrapper, template) {
            this.logger.info("applyEmmetEnd", arguments);
            if (wrapper.end) {
                template += wrapper.end;
            }
            return template;
        };
        FormService.prototype.applyEmmetStart = function (wrapper, template) {
            this.logger.info("applyEmmetStart", arguments);
            if (wrapper.start) {
                template += wrapper.start;
            }
            return template;
        };
        FormService = __decorate([
            aurelia_framework_1.inject(logger_1.SchemaFormLogger),
            __metadata("design:paramtypes", [logger_1.SchemaFormLogger])
        ], FormService);
        return FormService;
    }());
    exports.FormService = FormService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SyxPQUFPLE1BQUc7YUFDckIsQ0FBQztRQUNKLENBQUM7UUFFRCxxQ0FBZSxHQUFmLFVBQWdCLEdBQVcsRUFBRSxPQUEwQztZQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMvQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsT0FBTyxHQUFHLEVBQUUsQ0FBQzthQUNkO1lBQ0QsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQztRQUVELG1DQUFhLEdBQWIsVUFBYyxPQUEwQyxFQUFFLFFBQWdCO1lBQ3hFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM3QyxJQUFJLE9BQU8sQ0FBQyxHQUFHLEVBQUU7Z0JBQ2YsUUFBUSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUM7YUFDekI7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBRUQscUNBQWUsR0FBZixVQUFnQixPQUEwQyxFQUFFLFFBQWdCO1lBQzFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRTtnQkFDakIsUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7YUFDM0I7WUFDRCxPQUFPLFFBQVEsQ0FBQztRQUNsQixDQUFDO1FBdk1VLFdBQVc7WUFEdkIsMEJBQU0sQ0FBQyx5QkFBZ0IsQ0FBQzs2Q0FNSyx5QkFBZ0I7V0FMakMsV0FBVyxDQXdNdkI7UUFBRCxrQkFBQztLQXhNRCxBQXdNQyxJQUFBO0lBeE1ZLGtDQUFXIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcblxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuICByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSBcIkBcIjtcbiAgcmVhZG9ubHkgb3ZlcnJpZGVNYXJrZXIgPSBcIiRcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XG5cbiAgYnVpbGRBcnJheUZvcm0oc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiwgZm9ybTogSUZvcm1PdmVycmlkZSwgZm9ybUtleTogc3RyaW5nLCBtb2RlbDogYW55W10pOiBzdHJpbmcge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZEFycmF5Rm9ybVwiLCB7IHNjaGVtYSwgZm9ybSwgbW9kZWwgfSk7XG5cbiAgICBmb3JtW1wiJHNjaGVtYVwiXSA9IHNjaGVtYS5pdGVtcztcbiAgICBmb3JtW1wiJGFycmF5U2NoZW1hXCJdID0gc2NoZW1hO1xuXG4gICAgc2NoZW1hLml0ZW1zLnRpdGxlID0gc2NoZW1hLml0ZW1zLnRpdGxlIHx8IHRoaXMuZ2V0VGl0bGUoZm9ybUtleSk7XG4gICAgbGV0IHRlbXBsYXRlID1cbiAgICAgIGA8c2YtJHtzY2hlbWEuaXRlbXMudHlwZX0gbW9kZWwudHdvLXdheT1cIm1vZGVsWyRpbmRleF1cIiBmb3JtLmJpbmQ9XCJmb3JtXCJgO1xuICAgIGlmIChmb3JtW1wiJHNjaGVtYVwiXS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0ZW1wbGF0ZSArPSBgIHNjaGVtYS5iaW5kPVwiZm9ybVsnJHNjaGVtYSddXCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtzY2hlbWEuaXRlbXMudHlwZX0+YDtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXktaXRlbSB0ZW1wbGF0ZVwiLCB7IHRlbXBsYXRlLCBzY2hlbWEsIGZvcm0sIG1vZGVsIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGJ1aWxkT2JqZWN0Rm9ybShzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgZm9ybTogSUZvcm1PdmVycmlkZSwgbW9kZWw6IG9iamVjdCwgc2VnbWVudCA9IFwiXCIpOiBzdHJpbmcge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZE9iamVjdEZvcm1cIiwgYXJndW1lbnRzKTtcbiAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xuICAgIHRyeSB7XG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMuZ2V0T2JqZWN0Rm9ybVRlbXBsYXRlKGZvcm0sIHRlbXBsYXRlLCBzZWdtZW50LCBzY2hlbWEsIG1vZGVsKTtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVkIHRlbXBsYXRlXCIsIHsgdGVtcGxhdGUsIHNjaGVtYSB9KTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJhbiBlcnJvciBvY2N1cnJlZCBidWlsZGluZyBvYmplY3QgdmlldyBzdHJhdGVneVwiLCBleCwgc2NoZW1hLCBmb3JtLCBtb2RlbCwgc2VnbWVudCk7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE9iamVjdEZvcm1UZW1wbGF0ZShcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLCB0ZW1wbGF0ZTogc3RyaW5nLCBzZWdtZW50OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLCBtb2RlbDogb2JqZWN0XG4gICkge1xuICAgIGxldCB3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nLCBlbmQ/OiBzdHJpbmcgfTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGZvcm1LZXkgaW4gZm9ybSkge1xuICAgICAgd3JhcHBlciA9IHRoaXMuZ2V0RW1tZXRXcmFwcGVyKGZvcm1LZXksIHdyYXBwZXIpO1xuICAgICAgdGVtcGxhdGUgPSB0aGlzLmFwcGx5RW1tZXRTdGFydCh3cmFwcGVyLCB0ZW1wbGF0ZSk7XG4gICAgICBpZiAodGhpcy5pc092ZXJyaWRlKGZvcm1LZXkpKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0NvbnRhaW5lcihmb3JtS2V5KSkge1xuICAgICAgICAvLyBpbm5lciBlbW1ldCBjb250YWluZXJcbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLmdldENvbnRhaW5lclRlbXBsYXRlKHNlZ21lbnQsIGZvcm1LZXksIGZvcm0sIHRlbXBsYXRlLCBzY2hlbWEsIG1vZGVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG9iamVjdCBwcm9wZXJ0eVxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuZ2V0T2JqZWN0UHJvcGVydHlUZW1wbGF0ZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIG1vZGVsLCB0ZW1wbGF0ZSwgc2VnbWVudCk7XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMuYXBwbHlFbW1ldEVuZCh3cmFwcGVyLCB0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldENvbnRhaW5lclRlbXBsYXRlKFxuICAgIHNlZ21lbnQ6IHN0cmluZyxcbiAgICBmb3JtS2V5OiBzdHJpbmcsXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICB0ZW1wbGF0ZTogc3RyaW5nLFxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLFxuICAgIG1vZGVsOiBvYmplY3RcbiAgKSB7XG4gICAgc2VnbWVudCArPSBgWycke2Zvcm1LZXl9J11gO1xuICAgIGNvbnN0IGlubmVyRm9ybXMgPSBmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGVbXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5uZXJGb3Jtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRlbXBsYXRlICs9IHRoaXMuYnVpbGRPYmplY3RGb3JtKHNjaGVtYSwgaW5uZXJGb3Jtc1tpbmRleF0sIG1vZGVsLCBzZWdtZW50ICsgYFske2luZGV4fV1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0QXJyYXlJdGVtRGVmYXVsdChzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLCBtb2RlbCkge1xuICAgIHN3aXRjaCAoc2NoZW1hLml0ZW1zLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhcnJheVwiOlxuICAgICAgICByZXR1cm4gbW9kZWwgfHwgW107XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHJldHVybiBtb2RlbCB8fCBzY2hlbWEuaXRlbXMuY29uc3QgfHwgc2NoZW1hLml0ZW1zLmRlZmF1bHQgfHwgXCJcIjtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5pdGVtcy5jb25zdCB8fCBzY2hlbWEuaXRlbXMuZGVmYXVsdCB8fCBcIlwiO1xuICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IGZhbHNlO1xuICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RNb2RlbERlZmF1bHRzKHt9LCAoc2NoZW1hLml0ZW1zIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9iamVjdFByb3BlcnR5VGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICBmb3JtS2V5OiBzdHJpbmcsXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sXG4gICAgbW9kZWw6IG9iamVjdCxcbiAgICB0ZW1wbGF0ZTogc3RyaW5nLFxuICAgIHNlZ21lbnQ6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBvdmVycmlkZSA9IHRoaXMuZ2V0T3ZlcnJpZGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hKTtcbiAgICBtb2RlbCA9IHRoaXMuZ2V0T2JqZWN0TW9kZWxEZWZhdWx0cyhtb2RlbCwgc2NoZW1hKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGVtcGxhdGUgKz0gYDxzZi0ke292ZXJyaWRlLiRzY2hlbWEudHlwZX0gbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7Zm9ybUtleX1cIiBmb3JtLmJpbmQ9XCJmb3JtJHtzZWdtZW50fS4ke2Zvcm1LZXl9XCJgO1xuICAgIGlmIChvdmVycmlkZS4kc2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgbW9kZWxbZm9ybUtleV0gPSBtb2RlbFtmb3JtS2V5XSB8fCBbXTtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCIga2V5PVwiJHtmb3JtS2V5fVwiYDtcbiAgICB9XG4gICAgaWYgKG92ZXJyaWRlLiRzY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbW9kZWxbZm9ybUtleV0gPSBtb2RlbFtmb3JtS2V5XSB8fCB7fTtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtvdmVycmlkZS4kc2NoZW1hLnR5cGV9PlxcclxcbmA7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgaXNPdmVycmlkZShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpc092ZXJyaWRlXCIsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGtleS5jaGFyQXQoMCkgPT09IHRoaXMub3ZlcnJpZGVNYXJrZXI7XG4gIH1cblxuICBpc0NvbnRhaW5lcihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpc0NvbnRhaW5lclwiLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLmNvbnRhaW5lck1hcmtlcjtcbiAgfVxuXG4gIGdldE92ZXJyaWRlKGZvcm06IElGb3JtT3ZlcnJpZGUsIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0T3ZlcnJpZGVcIiwgeyBmb3JtS2V5LCBmb3JtLCBzY2hlbWEgfSk7XG4gICAgY29uc3Qgb3ZlcnJpZGUgPSBmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGU7XG4gICAgb3ZlcnJpZGUuJHNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW2Zvcm1LZXldO1xuICAgIG92ZXJyaWRlLiRzY2hlbWEudGl0bGUgPSBvdmVycmlkZS4kc2NoZW1hLnRpdGxlIHx8IHRoaXMuZ2V0VGl0bGUoZm9ybUtleSk7XG4gICAgb3ZlcnJpZGUuJHJlcXVpcmVkID0gQXJyYXkuaXNBcnJheShzY2hlbWEucmVxdWlyZWQpID8gc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YoZm9ybUtleSkgIT09IC0xIDogZmFsc2U7XG4gICAgcmV0dXJuIG92ZXJyaWRlO1xuICB9XG5cbiAgZ2V0VGl0bGUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0VGl0bGVcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBnZXRPYmplY3RNb2RlbERlZmF1bHRzKG1vZGVsOiBvYmplY3QsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldE9iamVjdE1vZGVsRGVmYXVsdHNcIiwgYXJndW1lbnRzKTtcbiAgICBtb2RlbCA9IG1vZGVsIHx8IHt9O1xuICAgIGlmIChzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmNvbnN0ICE9PSB1bmRlZmluZWQgfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmRlZmF1bHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG1vZGVsW3Byb3BlcnR5XSA9IG1vZGVsW3Byb3BlcnR5XSB8fCBzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0uY29uc3QgfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmRlZmF1bHQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgZ2V0RW1tZXRDb250YWluZXIoa2V5OiBzdHJpbmcpOiB7IHN0YXJ0OiBzdHJpbmcsIGVuZDogc3RyaW5nIH0ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRFbW1ldENvbnRhaW5lclwiLCBhcmd1bWVudHMpO1xuICAgIGNvbnN0IHJlZ2V4ID0gL15AKFthLXotXSspKD86KD86KD86IyhcXHcrKSk/KSg/OigoPzpcXC4oPzpbYS16XFxkLV0rKSkrKT8pKSQvO1xuXG4gICAgY29uc3QgbWF0Y2hlcyA9IGtleS5tYXRjaChyZWdleCk7XG5cbiAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlIGZvcm0ga2V5IFwiJHtrZXl9XCIgZG9lcyBub3QgbWF0Y2ggXCJeKEBlbGVtZW50KSgjaWQpPygoLmNsYXNzKSspPyRcImApO1xuICAgIH1cblxuICAgIGNvbnN0IGVsZW1lbnQgPSBtYXRjaGVzWzFdO1xuICAgIGNvbnN0IGlkID0gIW1hdGNoZXNbMl0gPyBcIlwiIDogYGlkPVwiJHttYXRjaGVzWzJdfVwiYDtcbiAgICBjb25zdCBjbGFzc2VzID0gIW1hdGNoZXNbM10gPyBcIlwiIDogYGNsYXNzPVwiJHttYXRjaGVzWzNdLnNwbGl0KFwiLlwiKS5qb2luKFwiIFwiKS50cmltKCl9XCJgO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXJ0OiBgPCR7ZWxlbWVudH0gJHtpZH0gJHtjbGFzc2VzfT5gLnJlcGxhY2UoL1xccysvLCBcIiBcIikudHJpbSgpLFxuICAgICAgZW5kOiBgPC8ke2VsZW1lbnR9PmBcbiAgICB9O1xuICB9XG5cbiAgZ2V0RW1tZXRXcmFwcGVyKGtleTogc3RyaW5nLCB3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nOyBlbmQ/OiBzdHJpbmc7IH0pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0RW1tZXRXcmFwcGVyXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHRoaXMuaXNDb250YWluZXIoa2V5KSkge1xuICAgICAgd3JhcHBlciA9IHRoaXMuZ2V0RW1tZXRDb250YWluZXIoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgd3JhcHBlciA9IHt9O1xuICAgIH1cbiAgICByZXR1cm4gd3JhcHBlcjtcbiAgfVxuXG4gIGFwcGx5RW1tZXRFbmQod3JhcHBlcjogeyBzdGFydD86IHN0cmluZzsgZW5kPzogc3RyaW5nOyB9LCB0ZW1wbGF0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImFwcGx5RW1tZXRFbmRcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAod3JhcHBlci5lbmQpIHtcbiAgICAgIHRlbXBsYXRlICs9IHdyYXBwZXIuZW5kO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBhcHBseUVtbWV0U3RhcnQod3JhcHBlcjogeyBzdGFydD86IHN0cmluZzsgZW5kPzogc3RyaW5nOyB9LCB0ZW1wbGF0ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImFwcGx5RW1tZXRTdGFydFwiLCBhcmd1bWVudHMpO1xuICAgIGlmICh3cmFwcGVyLnN0YXJ0KSB7XG4gICAgICB0ZW1wbGF0ZSArPSB3cmFwcGVyLnN0YXJ0O1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
