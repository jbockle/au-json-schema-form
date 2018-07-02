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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RzthQUNyQixDQUFDO1FBQ0osQ0FBQztRQUVELHFDQUFlLEdBQWYsVUFBZ0IsR0FBVyxFQUFFLE9BQTBDO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDekIsT0FBTyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCxPQUFPLEdBQUcsRUFBRSxDQUFDO2FBQ2Q7WUFDRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDO1FBRUQsbUNBQWEsR0FBYixVQUFjLE9BQTBDLEVBQUUsUUFBZ0I7WUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtnQkFDZixRQUFRLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQzthQUN6QjtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7UUFFRCxxQ0FBZSxHQUFmLFVBQWdCLE9BQTBDLEVBQUUsUUFBZ0I7WUFDMUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDL0MsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO2dCQUNqQixRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQzthQUMzQjtZQUNELE9BQU8sUUFBUSxDQUFDO1FBQ2xCLENBQUM7UUE3TFUsV0FBVztZQUR2QiwwQkFBTSxDQUFDLHlCQUFnQixDQUFDOzZDQU1LLHlCQUFnQjtXQUxqQyxXQUFXLENBOEx2QjtRQUFELGtCQUFDO0tBOUxELEFBOExDLElBQUE7SUE5TFksa0NBQVciLCJmaWxlIjoic2VydmljZXMvZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLCBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IElGb3JtLCBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybVwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcblxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuICByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSBcIkBcIjtcbiAgcmVhZG9ubHkgb3ZlcnJpZGVNYXJrZXIgPSBcIiRcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XG5cbiAgYnVpbGRBcnJheUZvcm0oc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiwgZm9ybTogSUZvcm1PdmVycmlkZSwgZm9ybUtleTogc3RyaW5nLCBtb2RlbDogYW55W10pOiBzdHJpbmcge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZEFycmF5Rm9ybVwiLCB7IHNjaGVtYSwgZm9ybSwgbW9kZWwgfSk7XG5cbiAgICBmb3JtW1wiJHNjaGVtYVwiXSA9IHNjaGVtYS5pdGVtcztcbiAgICBmb3JtW1wiJGFycmF5U2NoZW1hXCJdID0gc2NoZW1hO1xuXG4gICAgc2NoZW1hLml0ZW1zLnRpdGxlID0gc2NoZW1hLml0ZW1zLnRpdGxlIHx8IHRoaXMuZ2V0VGl0bGUoZm9ybUtleSk7XG4gICAgbGV0IHRlbXBsYXRlID1cbiAgICAgIGA8c2YtJHtzY2hlbWEuaXRlbXMudHlwZX0gbW9kZWwudHdvLXdheT1cIm1vZGVsWyRpbmRleF1cIiBmb3JtLmJpbmQ9XCJmb3JtXCJgO1xuICAgIGlmIChmb3JtW1wiJHNjaGVtYVwiXS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0ZW1wbGF0ZSArPSBgIHNjaGVtYS5iaW5kPVwiZm9ybVsnJHNjaGVtYSddXCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtzY2hlbWEuaXRlbXMudHlwZX0+YDtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXktaXRlbSB0ZW1wbGF0ZVwiLCB7IHRlbXBsYXRlLCBzY2hlbWEsIGZvcm0sIG1vZGVsIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGJ1aWxkT2JqZWN0Rm9ybShzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgZm9ybTogSUZvcm0sIG1vZGVsOiBvYmplY3QsIHNlZ21lbnQgPSBcIlwiKTogc3RyaW5nIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYnVpbGRPYmplY3RGb3JtXCIsIGFyZ3VtZW50cyk7XG4gICAgbGV0IHRlbXBsYXRlID0gXCJcIjtcbiAgICB0cnkge1xuICAgICAgdGVtcGxhdGUgPSB0aGlzLmdldE9iamVjdEZvcm1UZW1wbGF0ZShmb3JtLCB0ZW1wbGF0ZSwgc2VnbWVudCwgc2NoZW1hLCBtb2RlbCk7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiY3JlYXRlZCB0ZW1wbGF0ZVwiLCB7IHRlbXBsYXRlLCBzY2hlbWEgfSk7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiYW4gZXJyb3Igb2NjdXJyZWQgYnVpbGRpbmcgb2JqZWN0IHZpZXcgc3RyYXRlZ3lcIiwgZXgsIHNjaGVtYSwgZm9ybSwgbW9kZWwsIHNlZ21lbnQpO1xuICAgICAgdGhyb3cgZXg7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPYmplY3RGb3JtVGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm0sIHRlbXBsYXRlOiBzdHJpbmcsIHNlZ21lbnQ6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIG1vZGVsOiBvYmplY3RcbiAgKSB7XG4gICAgbGV0IHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmcsIGVuZD86IHN0cmluZyB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3QgZm9ybUtleSBpbiBmb3JtKSB7XG4gICAgICB3cmFwcGVyID0gdGhpcy5nZXRFbW1ldFdyYXBwZXIoZm9ybUtleSwgd3JhcHBlcik7XG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMuYXBwbHlFbW1ldFN0YXJ0KHdyYXBwZXIsIHRlbXBsYXRlKTtcbiAgICAgIGlmICh0aGlzLmlzT3ZlcnJpZGUoZm9ybUtleSkpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQ29udGFpbmVyKGZvcm1LZXkpKSB7XG4gICAgICAgIC8vIGlubmVyIGVtbWV0IGNvbnRhaW5lclxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuZ2V0Q29udGFpbmVyVGVtcGxhdGUoc2VnbWVudCwgZm9ybUtleSwgZm9ybSwgdGVtcGxhdGUsIHNjaGVtYSwgbW9kZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb2JqZWN0IHByb3BlcnR5XG4gICAgICAgIHRlbXBsYXRlID0gdGhpcy5nZXRPYmplY3RQcm9wZXJ0eVRlbXBsYXRlKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgbW9kZWwsIHRlbXBsYXRlLCBzZWdtZW50KTtcbiAgICAgIH1cbiAgICAgIHRlbXBsYXRlID0gdGhpcy5hcHBseUVtbWV0RW5kKHdyYXBwZXIsIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0Q29udGFpbmVyVGVtcGxhdGUoXG4gICAgc2VnbWVudDogc3RyaW5nLCBmb3JtS2V5OiBzdHJpbmcsIGZvcm06IElGb3JtLCB0ZW1wbGF0ZTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgbW9kZWw6IG9iamVjdFxuICApIHtcbiAgICBzZWdtZW50ICs9IGBbJyR7Zm9ybUtleX0nXWA7XG4gICAgY29uc3QgaW5uZXJGb3JtcyA9IGZvcm1bZm9ybUtleV0gYXMgSUZvcm1bXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5uZXJGb3Jtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRlbXBsYXRlICs9IHRoaXMuYnVpbGRPYmplY3RGb3JtKHNjaGVtYSwgaW5uZXJGb3Jtc1tpbmRleF0sIG1vZGVsLCBzZWdtZW50ICsgYFske2luZGV4fV1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0QXJyYXlJdGVtRGVmYXVsdChzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLCBtb2RlbCkge1xuICAgIHN3aXRjaCAoc2NoZW1hLml0ZW1zLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhcnJheVwiOlxuICAgICAgICByZXR1cm4gbW9kZWwgfHwgW107XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHJldHVybiBtb2RlbCB8fCBzY2hlbWEuaXRlbXMuY29uc3QgfHwgc2NoZW1hLml0ZW1zLmRlZmF1bHQgfHwgXCJcIjtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5pdGVtcy5jb25zdCB8fCBzY2hlbWEuaXRlbXMuZGVmYXVsdCB8fCBcIlwiO1xuICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IGZhbHNlO1xuICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RNb2RlbERlZmF1bHRzKHt9LCAoc2NoZW1hLml0ZW1zIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9iamVjdFByb3BlcnR5VGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm0sIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIG1vZGVsOiBvYmplY3QsIHRlbXBsYXRlOiBzdHJpbmcsIHNlZ21lbnQ6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBvdmVycmlkZSA9IHRoaXMuZ2V0T3ZlcnJpZGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hKTtcbiAgICBtb2RlbCA9IHRoaXMuZ2V0T2JqZWN0TW9kZWxEZWZhdWx0cyhtb2RlbCwgc2NoZW1hKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGVtcGxhdGUgKz0gYDxzZi0ke292ZXJyaWRlLiRzY2hlbWEudHlwZX0gbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7Zm9ybUtleX1cIiBmb3JtLmJpbmQ9XCJmb3JtJHtzZWdtZW50fS4ke2Zvcm1LZXl9XCJgO1xuICAgIGlmIChvdmVycmlkZS4kc2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgbW9kZWxbZm9ybUtleV0gPSBtb2RlbFtmb3JtS2V5XSB8fCBbXTtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCIga2V5PVwiJHtmb3JtS2V5fVwiYDtcbiAgICB9XG4gICAgaWYgKG92ZXJyaWRlLiRzY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbW9kZWxbZm9ybUtleV0gPSBtb2RlbFtmb3JtS2V5XSB8fCB7fTtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtvdmVycmlkZS4kc2NoZW1hLnR5cGV9PlxcclxcbmA7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgaXNPdmVycmlkZShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpc092ZXJyaWRlXCIsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGtleS5jaGFyQXQoMCkgPT09IHRoaXMub3ZlcnJpZGVNYXJrZXI7XG4gIH1cblxuICBpc0NvbnRhaW5lcihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpc0NvbnRhaW5lclwiLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLmNvbnRhaW5lck1hcmtlcjtcbiAgfVxuXG4gIGdldE92ZXJyaWRlKGZvcm06IElGb3JtLCBmb3JtS2V5OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldE92ZXJyaWRlXCIsIHsgZm9ybUtleSwgZm9ybSwgc2NoZW1hIH0pO1xuICAgIGNvbnN0IG92ZXJyaWRlID0gZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlO1xuICAgIG92ZXJyaWRlLiRzY2hlbWEgPSBzY2hlbWEucHJvcGVydGllc1tmb3JtS2V5XTtcbiAgICBvdmVycmlkZS4kc2NoZW1hLnRpdGxlID0gb3ZlcnJpZGUuJHNjaGVtYS50aXRsZSB8fCB0aGlzLmdldFRpdGxlKGZvcm1LZXkpO1xuICAgIG92ZXJyaWRlLiRyZXF1aXJlZCA9IEFycmF5LmlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSA/IHNjaGVtYS5yZXF1aXJlZC5pbmRleE9mKGZvcm1LZXkpICE9PSAtMSA6IGZhbHNlO1xuICAgIHJldHVybiBvdmVycmlkZTtcbiAgfVxuXG4gIGdldFRpdGxlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldFRpdGxlXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIGtleVxuICAgICAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKVxuICAgICAgICAucmVwbGFjZSgvXi4vLCAoc3RyKSA9PiBzdHIudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0T2JqZWN0TW9kZWxEZWZhdWx0cyhtb2RlbDogb2JqZWN0LCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRPYmplY3RNb2RlbERlZmF1bHRzXCIsIGFyZ3VtZW50cyk7XG4gICAgbW9kZWwgPSBtb2RlbCB8fCB7fTtcbiAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5jb25zdCAhPT0gdW5kZWZpbmVkIHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtb2RlbFtwcm9wZXJ0eV0gPSBtb2RlbFtwcm9wZXJ0eV0gfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmNvbnN0IHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5kZWZhdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIGdldEVtbWV0Q29udGFpbmVyKGtleTogc3RyaW5nKTogeyBzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyB9IHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0RW1tZXRDb250YWluZXJcIiwgYXJndW1lbnRzKTtcbiAgICBjb25zdCByZWdleCA9IC9eQChbYS16LV0rKSg/Oig/Oig/OiMoXFx3KykpPykoPzooKD86XFwuKD86W2EtelxcZC1dKykpKyk/KSkkLztcblxuICAgIGNvbnN0IG1hdGNoZXMgPSBrZXkubWF0Y2gocmVnZXgpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBmb3JtIGtleSBcIiR7a2V5fVwiIGRvZXMgbm90IG1hdGNoIFwiXihAZWxlbWVudCkoI2lkKT8oKC5jbGFzcykrKT8kXCJgKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gbWF0Y2hlc1sxXTtcbiAgICBjb25zdCBpZCA9ICFtYXRjaGVzWzJdID8gXCJcIiA6IGBpZD1cIiR7bWF0Y2hlc1syXX1cImA7XG4gICAgY29uc3QgY2xhc3NlcyA9ICFtYXRjaGVzWzNdID8gXCJcIiA6IGBjbGFzcz1cIiR7bWF0Y2hlc1szXS5zcGxpdChcIi5cIikuam9pbihcIiBcIikudHJpbSgpfVwiYDtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogYDwke2VsZW1lbnR9ICR7aWR9ICR7Y2xhc3Nlc30+YC5yZXBsYWNlKC9cXHMrLywgXCIgXCIpLnRyaW0oKSxcbiAgICAgIGVuZDogYDwvJHtlbGVtZW50fT5gXG4gICAgfTtcbiAgfVxuXG4gIGdldEVtbWV0V3JhcHBlcihrZXk6IHN0cmluZywgd3JhcHBlcjogeyBzdGFydD86IHN0cmluZzsgZW5kPzogc3RyaW5nOyB9KSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEVtbWV0V3JhcHBlclwiLCBhcmd1bWVudHMpO1xuICAgIGlmICh0aGlzLmlzQ29udGFpbmVyKGtleSkpIHtcbiAgICAgIHdyYXBwZXIgPSB0aGlzLmdldEVtbWV0Q29udGFpbmVyKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBwZXIgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH1cblxuICBhcHBseUVtbWV0RW5kKHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBseUVtbWV0RW5kXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHdyYXBwZXIuZW5kKSB7XG4gICAgICB0ZW1wbGF0ZSArPSB3cmFwcGVyLmVuZDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgYXBwbHlFbW1ldFN0YXJ0KHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBseUVtbWV0U3RhcnRcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAod3JhcHBlci5zdGFydCkge1xuICAgICAgdGVtcGxhdGUgKz0gd3JhcHBlci5zdGFydDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
