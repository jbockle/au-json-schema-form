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
                            if (schema.properties[property].const || schema.properties[property].default) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBV0UscUJBQW9CLE1BQXdCO29CQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFIbkMsb0JBQWUsR0FBRyxHQUFHLENBQUM7b0JBQ3RCLG1CQUFjLEdBQUcsR0FBRyxDQUFDO2dCQUVrQixDQUFDO2dCQUVqRCxvQ0FBYyxHQUFkLFVBQWUsTUFBa0MsRUFBRSxJQUFXLEVBQUUsT0FBZSxFQUFFLEtBQVk7b0JBQzNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO29CQUUzRCxJQUFzQixDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pELElBQXNCLENBQUMsY0FBYyxDQUFDLEdBQUcsTUFBTSxDQUFDO29CQUVqRCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsRSxJQUFJLFFBQVEsR0FDVixTQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSx3REFBaUQsQ0FBQztvQkFDNUUsSUFBSyxJQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQ3hELFFBQVEsSUFBSSxrQ0FBZ0MsQ0FBQztxQkFDOUM7b0JBQ0QsUUFBUSxJQUFJLFdBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQUcsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9B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OUxELEFBOExDOztRQUNELENBQUMiLCJmaWxlIjoic2VydmljZXMvZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLCBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IElGb3JtLCBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybVwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcblxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcblxuICByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSBcIkBcIjtcbiAgcmVhZG9ubHkgb3ZlcnJpZGVNYXJrZXIgPSBcIiRcIjtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XG5cbiAgYnVpbGRBcnJheUZvcm0oc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiwgZm9ybTogSUZvcm0sIGZvcm1LZXk6IHN0cmluZywgbW9kZWw6IGFueVtdKTogc3RyaW5nIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYnVpbGRBcnJheUZvcm1cIiwgeyBzY2hlbWEsIGZvcm0sIG1vZGVsIH0pO1xuXG4gICAgKGZvcm0gYXMgSUZvcm1PdmVycmlkZSlbXCIkc2NoZW1hXCJdID0gc2NoZW1hLml0ZW1zO1xuICAgIChmb3JtIGFzIElGb3JtT3ZlcnJpZGUpW1wiJGFycmF5U2NoZW1hXCJdID0gc2NoZW1hO1xuXG4gICAgc2NoZW1hLml0ZW1zLnRpdGxlID0gc2NoZW1hLml0ZW1zLnRpdGxlIHx8IHRoaXMuZ2V0VGl0bGUoZm9ybUtleSk7XG4gICAgbGV0IHRlbXBsYXRlID1cbiAgICAgIGA8c2YtJHtzY2hlbWEuaXRlbXMudHlwZX0gbW9kZWwudHdvLXdheT1cIm1vZGVsWyRpbmRleF1cIiBmb3JtLmJpbmQ9XCJmb3JtXCJgO1xuICAgIGlmICgoZm9ybSBhcyBJRm9ybU92ZXJyaWRlKVtcIiRzY2hlbWFcIl0udHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgdGVtcGxhdGUgKz0gYCBzY2hlbWEuYmluZD1cImZvcm1bJyRzY2hlbWEnXVwiYDtcbiAgICB9XG4gICAgdGVtcGxhdGUgKz0gYD48L3NmLSR7c2NoZW1hLml0ZW1zLnR5cGV9PmA7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5LWl0ZW0gdGVtcGxhdGVcIiwgeyB0ZW1wbGF0ZSwgc2NoZW1hLCBmb3JtLCBtb2RlbCB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBidWlsZE9iamVjdEZvcm0oc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIGZvcm06IElGb3JtLCBtb2RlbDogb2JqZWN0LCBzZWdtZW50ID0gXCJcIik6IHN0cmluZyB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImJ1aWxkT2JqZWN0Rm9ybVwiLCBhcmd1bWVudHMpO1xuICAgIGxldCB0ZW1wbGF0ZSA9IFwiXCI7XG4gICAgdHJ5IHtcbiAgICAgIHRlbXBsYXRlID0gdGhpcy5nZXRPYmplY3RGb3JtVGVtcGxhdGUoZm9ybSwgdGVtcGxhdGUsIHNlZ21lbnQsIHNjaGVtYSwgbW9kZWwpO1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcImNyZWF0ZWQgdGVtcGxhdGVcIiwgeyB0ZW1wbGF0ZSwgc2NoZW1hIH0pO1xuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihcImFuIGVycm9yIG9jY3VycmVkIGJ1aWxkaW5nIG9iamVjdCB2aWV3IHN0cmF0ZWd5XCIsIGV4LCBzY2hlbWEsIGZvcm0sIG1vZGVsLCBzZWdtZW50KTtcbiAgICAgIHRocm93IGV4O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0T2JqZWN0Rm9ybVRlbXBsYXRlKFxuICAgIGZvcm06IElGb3JtLCB0ZW1wbGF0ZTogc3RyaW5nLCBzZWdtZW50OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLCBtb2RlbDogb2JqZWN0XG4gICkge1xuICAgIGxldCB3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nLCBlbmQ/OiBzdHJpbmcgfTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICBmb3IgKGNvbnN0IGZvcm1LZXkgaW4gZm9ybSkge1xuICAgICAgd3JhcHBlciA9IHRoaXMuZ2V0RW1tZXRXcmFwcGVyKGZvcm1LZXksIHdyYXBwZXIpO1xuICAgICAgdGVtcGxhdGUgPSB0aGlzLmFwcGx5RW1tZXRTdGFydCh3cmFwcGVyLCB0ZW1wbGF0ZSk7XG4gICAgICBpZiAodGhpcy5pc092ZXJyaWRlKGZvcm1LZXkpKSB7XG4gICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0NvbnRhaW5lcihmb3JtS2V5KSkge1xuICAgICAgICAvLyBpbm5lciBlbW1ldCBjb250YWluZXJcbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLmdldENvbnRhaW5lclRlbXBsYXRlKHNlZ21lbnQsIGZvcm1LZXksIGZvcm0sIHRlbXBsYXRlLCBzY2hlbWEsIG1vZGVsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIG9iamVjdCBwcm9wZXJ0eVxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuZ2V0T2JqZWN0UHJvcGVydHlUZW1wbGF0ZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIG1vZGVsLCB0ZW1wbGF0ZSwgc2VnbWVudCk7XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZSA9IHRoaXMuYXBwbHlFbW1ldEVuZCh3cmFwcGVyLCB0ZW1wbGF0ZSk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldENvbnRhaW5lclRlbXBsYXRlKFxuICAgIHNlZ21lbnQ6IHN0cmluZywgZm9ybUtleTogc3RyaW5nLCBmb3JtOiBJRm9ybSwgdGVtcGxhdGU6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIG1vZGVsOiBvYmplY3RcbiAgKSB7XG4gICAgc2VnbWVudCArPSBgWycke2Zvcm1LZXl9J11gO1xuICAgIGNvbnN0IGlubmVyRm9ybXMgPSBmb3JtW2Zvcm1LZXldIGFzIElGb3JtW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlubmVyRm9ybXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0ZW1wbGF0ZSArPSB0aGlzLmJ1aWxkT2JqZWN0Rm9ybShzY2hlbWEsIGlubmVyRm9ybXNbaW5kZXhdLCBtb2RlbCwgc2VnbWVudCArIGBbJHtpbmRleH1dYCk7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdldEFycmF5SXRlbURlZmF1bHQoc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiwgbW9kZWwpIHtcbiAgICBzd2l0Y2ggKHNjaGVtYS5pdGVtcy50eXBlKSB7XG4gICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IFtdO1xuICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICByZXR1cm4gbW9kZWwgfHwgc2NoZW1hLml0ZW1zLmNvbnN0IHx8IHNjaGVtYS5pdGVtcy5kZWZhdWx0IHx8IFwiXCI7XG4gICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgIHJldHVybiBtb2RlbCB8fCBzY2hlbWEuaXRlbXMuY29uc3QgfHwgc2NoZW1hLml0ZW1zLmRlZmF1bHQgfHwgXCJcIjtcbiAgICAgIGNhc2UgXCJib29sZWFuXCI6XG4gICAgICAgIHJldHVybiBtb2RlbCB8fCBmYWxzZTtcbiAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0T2JqZWN0TW9kZWxEZWZhdWx0cyh7fSwgKHNjaGVtYS5pdGVtcyBhcyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pKTtcbiAgICB9XG4gIH1cblxuICBnZXRPYmplY3RQcm9wZXJ0eVRlbXBsYXRlKFxuICAgIGZvcm06IElGb3JtLCBmb3JtS2V5OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLCBtb2RlbDogb2JqZWN0LCB0ZW1wbGF0ZTogc3RyaW5nLCBzZWdtZW50OiBzdHJpbmdcbiAgKSB7XG4gICAgY29uc3Qgb3ZlcnJpZGUgPSB0aGlzLmdldE92ZXJyaWRlKGZvcm0sIGZvcm1LZXksIHNjaGVtYSk7XG4gICAgbW9kZWwgPSB0aGlzLmdldE9iamVjdE1vZGVsRGVmYXVsdHMobW9kZWwsIHNjaGVtYSk7XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIHRlbXBsYXRlICs9IGA8c2YtJHtvdmVycmlkZS4kc2NoZW1hLnR5cGV9IG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2Zvcm1LZXl9XCIgZm9ybS5iaW5kPVwiZm9ybSR7c2VnbWVudH0uJHtmb3JtS2V5fVwiYDtcbiAgICBpZiAob3ZlcnJpZGUuJHNjaGVtYS50eXBlID09PSBcImFycmF5XCIpIHtcbiAgICAgIG1vZGVsW2Zvcm1LZXldID0gbW9kZWxbZm9ybUtleV0gfHwgW107XG4gICAgICB0ZW1wbGF0ZSArPSBgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtmb3JtS2V5fVwiIGtleT1cIiR7Zm9ybUtleX1cImA7XG4gICAgfVxuICAgIGlmIChvdmVycmlkZS4kc2NoZW1hLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIG1vZGVsW2Zvcm1LZXldID0gbW9kZWxbZm9ybUtleV0gfHwge307XG4gICAgICB0ZW1wbGF0ZSArPSBgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtmb3JtS2V5fVwiYDtcbiAgICB9XG4gICAgdGVtcGxhdGUgKz0gYD48L3NmLSR7b3ZlcnJpZGUuJHNjaGVtYS50eXBlfT5cXHJcXG5gO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGlzT3ZlcnJpZGUoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiaXNPdmVycmlkZVwiLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLm92ZXJyaWRlTWFya2VyO1xuICB9XG5cbiAgaXNDb250YWluZXIoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiaXNDb250YWluZXJcIiwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4ga2V5LmNoYXJBdCgwKSA9PT0gdGhpcy5jb250YWluZXJNYXJrZXI7XG4gIH1cblxuICBnZXRPdmVycmlkZShmb3JtOiBJRm9ybSwgZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRPdmVycmlkZVwiLCB7IGZvcm1LZXksIGZvcm0sIHNjaGVtYSB9KTtcbiAgICBjb25zdCBvdmVycmlkZSA9IGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZTtcbiAgICBvdmVycmlkZS4kc2NoZW1hID0gc2NoZW1hLnByb3BlcnRpZXNbZm9ybUtleV07XG4gICAgb3ZlcnJpZGUuJHNjaGVtYS50aXRsZSA9IG92ZXJyaWRlLiRzY2hlbWEudGl0bGUgfHwgdGhpcy5nZXRUaXRsZShmb3JtS2V5KTtcbiAgICBvdmVycmlkZS4kcmVxdWlyZWQgPSBBcnJheS5pc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkgPyBzY2hlbWEucmVxdWlyZWQuaW5kZXhPZihmb3JtS2V5KSAhPT0gLTEgOiBmYWxzZTtcbiAgICByZXR1cm4gb3ZlcnJpZGU7XG4gIH1cblxuICBnZXRUaXRsZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRUaXRsZVwiLCBhcmd1bWVudHMpO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXlcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKHN0cikgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9iamVjdE1vZGVsRGVmYXVsdHMobW9kZWw6IG9iamVjdCwgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0T2JqZWN0TW9kZWxEZWZhdWx0c1wiLCBhcmd1bWVudHMpO1xuICAgIG1vZGVsID0gbW9kZWwgfHwge307XG4gICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0uY29uc3QgfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmRlZmF1bHQpIHtcbiAgICAgICAgICBtb2RlbFtwcm9wZXJ0eV0gPSBtb2RlbFtwcm9wZXJ0eV0gfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmNvbnN0IHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5kZWZhdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIGdldEVtbWV0Q29udGFpbmVyKGtleTogc3RyaW5nKTogeyBzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyB9IHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0RW1tZXRDb250YWluZXJcIiwgYXJndW1lbnRzKTtcbiAgICBjb25zdCByZWdleCA9IC9eQChbYS16LV0rKSg/Oig/Oig/OiMoXFx3KykpPykoPzooKD86XFwuKD86W2EtelxcZC1dKykpKyk/KSkkLztcblxuICAgIGNvbnN0IG1hdGNoZXMgPSBrZXkubWF0Y2gocmVnZXgpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBmb3JtIGtleSBcIiR7a2V5fVwiIGRvZXMgbm90IG1hdGNoIFwiXihAZWxlbWVudCkoI2lkKT8oKC5jbGFzcykrKT8kXCJgKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gbWF0Y2hlc1sxXTtcbiAgICBjb25zdCBpZCA9ICFtYXRjaGVzWzJdID8gXCJcIiA6IGBpZD1cIiR7bWF0Y2hlc1syXX1cImA7XG4gICAgY29uc3QgY2xhc3NlcyA9ICFtYXRjaGVzWzNdID8gXCJcIiA6IGBjbGFzcz1cIiR7bWF0Y2hlc1szXS5zcGxpdChcIi5cIikuam9pbihcIiBcIikudHJpbSgpfVwiYDtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogYDwke2VsZW1lbnR9ICR7aWR9ICR7Y2xhc3Nlc30+YC5yZXBsYWNlKC9cXHMrLywgXCIgXCIpLnRyaW0oKSxcbiAgICAgIGVuZDogYDwvJHtlbGVtZW50fT5gXG4gICAgfTtcbiAgfVxuXG4gIGdldEVtbWV0V3JhcHBlcihrZXk6IHN0cmluZywgd3JhcHBlcjogeyBzdGFydD86IHN0cmluZzsgZW5kPzogc3RyaW5nOyB9KSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEVtbWV0V3JhcHBlclwiLCBhcmd1bWVudHMpO1xuICAgIGlmICh0aGlzLmlzQ29udGFpbmVyKGtleSkpIHtcbiAgICAgIHdyYXBwZXIgPSB0aGlzLmdldEVtbWV0Q29udGFpbmVyKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBwZXIgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH1cblxuICBhcHBseUVtbWV0RW5kKHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBseUVtbWV0RW5kXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHdyYXBwZXIuZW5kKSB7XG4gICAgICB0ZW1wbGF0ZSArPSB3cmFwcGVyLmVuZDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgYXBwbHlFbW1ldFN0YXJ0KHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBseUVtbWV0U3RhcnRcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAod3JhcHBlci5zdGFydCkge1xuICAgICAgdGVtcGxhdGUgKz0gd3JhcHBlci5zdGFydDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
