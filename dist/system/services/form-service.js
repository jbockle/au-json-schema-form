System.register(["aurelia-framework", "../resources/logger"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_framework_1, logger_1, FormService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            }
        ],
        execute: function () {
            FormService = /** @class */ (function () {
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
            exports_1("FormService", FormService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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THZCO2dCQUFELGtCQUFDO2FBOUxELEFBOExDOztRQUNELENBQUMiLCJmaWxlIjoic2VydmljZXMvZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLCBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IElGb3JtLCBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybVwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcblxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuICByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSBcIkBcIjtcbiAgcmVhZG9ubHkgb3ZlcnJpZGVNYXJrZXIgPSBcIiRcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XG5cbiAgYnVpbGRBcnJheUZvcm0oc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiwgZm9ybTogSUZvcm1PdmVycmlkZSwgZm9ybUtleTogc3RyaW5nLCBtb2RlbDogYW55W10pOiBzdHJpbmcge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZEFycmF5Rm9ybVwiLCB7IHNjaGVtYSwgZm9ybSwgbW9kZWwgfSk7XG5cbiAgICBmb3JtW1wiJHNjaGVtYVwiXSA9IHNjaGVtYS5pdGVtcztcbiAgICBmb3JtW1wiJGFycmF5U2NoZW1hXCJdID0gc2NoZW1hO1xuXG4gICAgc2NoZW1hLml0ZW1zLnRpdGxlID0gc2NoZW1hLml0ZW1zLnRpdGxlIHx8IHRoaXMuZ2V0VGl0bGUoZm9ybUtleSk7XG4gICAgbGV0IHRlbXBsYXRlID1cbiAgICAgIGA8c2YtJHtzY2hlbWEuaXRlbXMudHlwZX0gbW9kZWwudHdvLXdheT1cIm1vZGVsWyRpbmRleF1cIiBmb3JtLmJpbmQ9XCJmb3JtXCJgO1xuICAgIGlmIChmb3JtW1wiJHNjaGVtYVwiXS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0ZW1wbGF0ZSArPSBgIHNjaGVtYS5iaW5kPVwiZm9ybVsnJHNjaGVtYSddXCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtzY2hlbWEuaXRlbXMudHlwZX0+YDtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXktaXRlbSB0ZW1wbGF0ZVwiLCB7IHRlbXBsYXRlLCBzY2hlbWEsIGZvcm0sIG1vZGVsIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGJ1aWxkT2JqZWN0Rm9ybShzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgZm9ybTogSUZvcm0sIG1vZGVsOiBvYmplY3QsIHNlZ21lbnQgPSBcIlwiKTogc3RyaW5nIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYnVpbGRPYmplY3RGb3JtXCIsIGFyZ3VtZW50cyk7XG4gICAgbGV0IHRlbXBsYXRlID0gXCJcIjtcbiAgICB0cnkge1xuICAgICAgdGVtcGxhdGUgPSB0aGlzLmdldE9iamVjdEZvcm1UZW1wbGF0ZShmb3JtLCB0ZW1wbGF0ZSwgc2VnbWVudCwgc2NoZW1hLCBtb2RlbCk7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiY3JlYXRlZCB0ZW1wbGF0ZVwiLCB7IHRlbXBsYXRlLCBzY2hlbWEgfSk7XG4gICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfSBjYXRjaCAoZXgpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiYW4gZXJyb3Igb2NjdXJyZWQgYnVpbGRpbmcgb2JqZWN0IHZpZXcgc3RyYXRlZ3lcIiwgZXgsIHNjaGVtYSwgZm9ybSwgbW9kZWwsIHNlZ21lbnQpO1xuICAgICAgdGhyb3cgZXg7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPYmplY3RGb3JtVGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm0sIHRlbXBsYXRlOiBzdHJpbmcsIHNlZ21lbnQ6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIG1vZGVsOiBvYmplY3RcbiAgKSB7XG4gICAgbGV0IHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmcsIGVuZD86IHN0cmluZyB9O1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgIGZvciAoY29uc3QgZm9ybUtleSBpbiBmb3JtKSB7XG4gICAgICB3cmFwcGVyID0gdGhpcy5nZXRFbW1ldFdyYXBwZXIoZm9ybUtleSwgd3JhcHBlcik7XG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMuYXBwbHlFbW1ldFN0YXJ0KHdyYXBwZXIsIHRlbXBsYXRlKTtcbiAgICAgIGlmICh0aGlzLmlzT3ZlcnJpZGUoZm9ybUtleSkpIHtcbiAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQ29udGFpbmVyKGZvcm1LZXkpKSB7XG4gICAgICAgIC8vIGlubmVyIGVtbWV0IGNvbnRhaW5lclxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuZ2V0Q29udGFpbmVyVGVtcGxhdGUoc2VnbWVudCwgZm9ybUtleSwgZm9ybSwgdGVtcGxhdGUsIHNjaGVtYSwgbW9kZWwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gb2JqZWN0IHByb3BlcnR5XG4gICAgICAgIHRlbXBsYXRlID0gdGhpcy5nZXRPYmplY3RQcm9wZXJ0eVRlbXBsYXRlKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgbW9kZWwsIHRlbXBsYXRlLCBzZWdtZW50KTtcbiAgICAgIH1cbiAgICAgIHRlbXBsYXRlID0gdGhpcy5hcHBseUVtbWV0RW5kKHdyYXBwZXIsIHRlbXBsYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0Q29udGFpbmVyVGVtcGxhdGUoXG4gICAgc2VnbWVudDogc3RyaW5nLCBmb3JtS2V5OiBzdHJpbmcsIGZvcm06IElGb3JtLCB0ZW1wbGF0ZTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgbW9kZWw6IG9iamVjdFxuICApIHtcbiAgICBzZWdtZW50ICs9IGBbJyR7Zm9ybUtleX0nXWA7XG4gICAgY29uc3QgaW5uZXJGb3JtcyA9IGZvcm1bZm9ybUtleV0gYXMgSUZvcm1bXTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5uZXJGb3Jtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIHRlbXBsYXRlICs9IHRoaXMuYnVpbGRPYmplY3RGb3JtKHNjaGVtYSwgaW5uZXJGb3Jtc1tpbmRleF0sIG1vZGVsLCBzZWdtZW50ICsgYFske2luZGV4fV1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2V0QXJyYXlJdGVtRGVmYXVsdChzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLCBtb2RlbCkge1xuICAgIHN3aXRjaCAoc2NoZW1hLml0ZW1zLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhcnJheVwiOlxuICAgICAgICByZXR1cm4gbW9kZWwgfHwgW107XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHJldHVybiBtb2RlbCB8fCBzY2hlbWEuaXRlbXMuY29uc3QgfHwgc2NoZW1hLml0ZW1zLmRlZmF1bHQgfHwgXCJcIjtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5pdGVtcy5jb25zdCB8fCBzY2hlbWEuaXRlbXMuZGVmYXVsdCB8fCBcIlwiO1xuICAgICAgY2FzZSBcImJvb2xlYW5cIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IGZhbHNlO1xuICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RNb2RlbERlZmF1bHRzKHt9LCAoc2NoZW1hLml0ZW1zIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9iamVjdFByb3BlcnR5VGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm0sIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIG1vZGVsOiBvYmplY3QsIHRlbXBsYXRlOiBzdHJpbmcsIHNlZ21lbnQ6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBvdmVycmlkZSA9IHRoaXMuZ2V0T3ZlcnJpZGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hKTtcbiAgICBtb2RlbCA9IHRoaXMuZ2V0T2JqZWN0TW9kZWxEZWZhdWx0cyhtb2RlbCwgc2NoZW1hKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGVtcGxhdGUgKz0gYDxzZi0ke292ZXJyaWRlLiRzY2hlbWEudHlwZX0gbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7Zm9ybUtleX1cIiBmb3JtLmJpbmQ9XCJmb3JtJHtzZWdtZW50fS4ke2Zvcm1LZXl9XCJgO1xuICAgIGlmIChvdmVycmlkZS4kc2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgbW9kZWxbZm9ybUtleV0gPSBtb2RlbFtmb3JtS2V5XSB8fCBbXTtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCIga2V5PVwiJHtmb3JtS2V5fVwiYDtcbiAgICB9XG4gICAgaWYgKG92ZXJyaWRlLiRzY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbW9kZWxbZm9ybUtleV0gPSBtb2RlbFtmb3JtS2V5XSB8fCB7fTtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtvdmVycmlkZS4kc2NoZW1hLnR5cGV9PlxcclxcbmA7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgaXNPdmVycmlkZShrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpc092ZXJyaWRlXCIsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGtleS5jaGFyQXQoMCkgPT09IHRoaXMub3ZlcnJpZGVNYXJrZXI7XG4gIH1cblxuICBpc0NvbnRhaW5lcihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpc0NvbnRhaW5lclwiLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLmNvbnRhaW5lck1hcmtlcjtcbiAgfVxuXG4gIGdldE92ZXJyaWRlKGZvcm06IElGb3JtLCBmb3JtS2V5OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldE92ZXJyaWRlXCIsIHsgZm9ybUtleSwgZm9ybSwgc2NoZW1hIH0pO1xuICAgIGNvbnN0IG92ZXJyaWRlID0gZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlO1xuICAgIG92ZXJyaWRlLiRzY2hlbWEgPSBzY2hlbWEucHJvcGVydGllc1tmb3JtS2V5XTtcbiAgICBvdmVycmlkZS4kc2NoZW1hLnRpdGxlID0gb3ZlcnJpZGUuJHNjaGVtYS50aXRsZSB8fCB0aGlzLmdldFRpdGxlKGZvcm1LZXkpO1xuICAgIG92ZXJyaWRlLiRyZXF1aXJlZCA9IEFycmF5LmlzQXJyYXkoc2NoZW1hLnJlcXVpcmVkKSA/IHNjaGVtYS5yZXF1aXJlZC5pbmRleE9mKGZvcm1LZXkpICE9PSAtMSA6IGZhbHNlO1xuICAgIHJldHVybiBvdmVycmlkZTtcbiAgfVxuXG4gIGdldFRpdGxlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldFRpdGxlXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIGtleVxuICAgICAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKVxuICAgICAgICAucmVwbGFjZSgvXi4vLCAoc3RyKSA9PiBzdHIudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0T2JqZWN0TW9kZWxEZWZhdWx0cyhtb2RlbDogb2JqZWN0LCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRPYmplY3RNb2RlbERlZmF1bHRzXCIsIGFyZ3VtZW50cyk7XG4gICAgbW9kZWwgPSBtb2RlbCB8fCB7fTtcbiAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5jb25zdCAhPT0gdW5kZWZpbmVkIHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5kZWZhdWx0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBtb2RlbFtwcm9wZXJ0eV0gPSBtb2RlbFtwcm9wZXJ0eV0gfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmNvbnN0IHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5kZWZhdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIGdldEVtbWV0Q29udGFpbmVyKGtleTogc3RyaW5nKTogeyBzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyB9IHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0RW1tZXRDb250YWluZXJcIiwgYXJndW1lbnRzKTtcbiAgICBjb25zdCByZWdleCA9IC9eQChbYS16LV0rKSg/Oig/Oig/OiMoXFx3KykpPykoPzooKD86XFwuKD86W2EtelxcZC1dKykpKyk/KSkkLztcblxuICAgIGNvbnN0IG1hdGNoZXMgPSBrZXkubWF0Y2gocmVnZXgpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBmb3JtIGtleSBcIiR7a2V5fVwiIGRvZXMgbm90IG1hdGNoIFwiXihAZWxlbWVudCkoI2lkKT8oKC5jbGFzcykrKT8kXCJgKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gbWF0Y2hlc1sxXTtcbiAgICBjb25zdCBpZCA9ICFtYXRjaGVzWzJdID8gXCJcIiA6IGBpZD1cIiR7bWF0Y2hlc1syXX1cImA7XG4gICAgY29uc3QgY2xhc3NlcyA9ICFtYXRjaGVzWzNdID8gXCJcIiA6IGBjbGFzcz1cIiR7bWF0Y2hlc1szXS5zcGxpdChcIi5cIikuam9pbihcIiBcIikudHJpbSgpfVwiYDtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogYDwke2VsZW1lbnR9ICR7aWR9ICR7Y2xhc3Nlc30+YC5yZXBsYWNlKC9cXHMrLywgXCIgXCIpLnRyaW0oKSxcbiAgICAgIGVuZDogYDwvJHtlbGVtZW50fT5gXG4gICAgfTtcbiAgfVxuXG4gIGdldEVtbWV0V3JhcHBlcihrZXk6IHN0cmluZywgd3JhcHBlcjogeyBzdGFydD86IHN0cmluZzsgZW5kPzogc3RyaW5nOyB9KSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEVtbWV0V3JhcHBlclwiLCBhcmd1bWVudHMpO1xuICAgIGlmICh0aGlzLmlzQ29udGFpbmVyKGtleSkpIHtcbiAgICAgIHdyYXBwZXIgPSB0aGlzLmdldEVtbWV0Q29udGFpbmVyKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBwZXIgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH1cblxuICBhcHBseUVtbWV0RW5kKHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBseUVtbWV0RW5kXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHdyYXBwZXIuZW5kKSB7XG4gICAgICB0ZW1wbGF0ZSArPSB3cmFwcGVyLmVuZDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgYXBwbHlFbW1ldFN0YXJ0KHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBseUVtbWV0U3RhcnRcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAod3JhcHBlci5zdGFydCkge1xuICAgICAgdGVtcGxhdGUgKz0gd3JhcHBlci5zdGFydDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
