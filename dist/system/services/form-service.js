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
                    var _a, _b;
                    this.logger.info("buildObjectForm", arguments);
                    var template = "";
                    try {
                        var wrapper = void 0;
                        // tslint:disable-next-line:forin
                        for (var formKey in form) {
                            wrapper = this.getEmmetWrapper(formKey, wrapper);
                            template = this.applyEmmetStart(wrapper, template);
                            if (this.isOverride(formKey)) {
                                // do nothing
                            }
                            else if (this.isContainer(formKey)) {
                                // inner emmet container
                                (_a = this.getContainerTemplate(segment, formKey, form, template, schema, model), segment = _a.segment, template = _a.template);
                            }
                            else {
                                // object property
                                (_b = this.getObjectPropertyTemplate(form, formKey, schema, model, template, segment), model = _b.model, template = _b.template);
                            }
                            template = this.applyEmmetEnd(wrapper, template);
                        }
                        this.logger.info("created template", { template: template, schema: schema });
                        return template;
                    }
                    catch (ex) {
                        this.logger.error("an error occurred building object view strategy", ex, schema, form, model, segment);
                        throw ex;
                    }
                };
                FormService.prototype.getContainerTemplate = function (segment, formKey, form, template, schema, model) {
                    segment += "['" + formKey + "']";
                    var innerForms = form[formKey];
                    for (var index = 0; index < innerForms.length; index++) {
                        template += this.buildObjectForm(schema, innerForms[index], model, segment + ("[" + index + "]"));
                    }
                    return { segment: segment, template: template };
                };
                FormService.prototype.getArrayItemDefault = function (schema, model) {
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
                    return { model: model, template: template };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBV0UscUJBQW9CLE1BQXdCO29CQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFIbkMsb0JBQWUsR0FBRyxHQUFHLENBQUM7b0JBQ3RCLG1CQUFjLEdBQUcsR0FBRyxDQUFDO2dCQUVrQixDQUFDO2dCQUVqRCxvQ0FBYyxHQUFkLFVBQWUsTUFBa0MsRUFBRSxJQUFXLEVBQUUsT0FBZSxFQUFFLEtBQVk7b0JBQzNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsSUFBSSxNQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO29CQUUzRCxJQUFzQixDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pELElBQXNCLENBQUMsY0FBYyxDQUFDLEdBQUcsTUFBTSxDQUFDO29CQUVqRCxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNsRSxJQUFJLFFBQVEsR0FDVixTQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSx3REFBaUQsQ0FBQztvQkFDNUUsSUFBSyxJQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7d0JBQ3hELFFBQVEsSUFBSSxrQ0FBZ0MsQ0FBQztxQkFDOUM7b0JBQ0QsUUFBUSxJQUFJLFdBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQUcsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxJQUFJLE1BQUEsRUFBRSxLQUFLLE9B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LGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUN2Qzt5QkFBTTt3QkFDTCxPQUFPLEdBQUcsRUFBRSxDQUFDO3FCQUNkO29CQUNELE9BQU8sT0FBTyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELG1DQUFhLEdBQWIsVUFBYyxPQUEwQyxFQUFFLFFBQWdCO29CQUN4RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQzdDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTt3QkFDZixRQUFRLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQztxQkFDekI7b0JBQ0QsT0FBTyxRQUFRLENBQUM7Z0JBQ2xCLENBQUM7Z0JBRUQscUNBQWUsR0FBZixVQUFnQixPQUEwQyxFQUFFLFFBQWdCO29CQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFO3dCQUNqQixRQUFRLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQztxQkFDM0I7b0JBQ0QsT0FBTyxRQUFRLENBQUM7Z0JBQ2xCLENBQUM7Z0JBdExVLFdBQVc7b0JBRHZCLDBCQUFNLENBQUMseUJBQWdCLENBQUM7cURBTUsseUJBQWdCO21CQUxqQyxXQUFXLENBdUx2QjtnQkFBRCxrQkFBQzthQXZMRCxBQXVMQzs7UUFDRCxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sIElKc29uU2NoZW1hU3RyaW5nRGVmaW5pdGlvbiwgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uLCBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybSwgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm1cIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUxvZ2dlcilcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG5cbiAgcmVhZG9ubHkgY29udGFpbmVyTWFya2VyID0gXCJAXCI7XG4gIHJlYWRvbmx5IG92ZXJyaWRlTWFya2VyID0gXCIkXCI7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxuXG4gIGJ1aWxkQXJyYXlGb3JtKHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sIGZvcm06IElGb3JtLCBmb3JtS2V5OiBzdHJpbmcsIG1vZGVsOiBhbnlbXSk6IHN0cmluZyB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImJ1aWxkQXJyYXlGb3JtXCIsIHsgc2NoZW1hLCBmb3JtLCBtb2RlbCB9KTtcblxuICAgIChmb3JtIGFzIElGb3JtT3ZlcnJpZGUpW1wiJHNjaGVtYVwiXSA9IHNjaGVtYS5pdGVtcztcbiAgICAoZm9ybSBhcyBJRm9ybU92ZXJyaWRlKVtcIiRhcnJheVNjaGVtYVwiXSA9IHNjaGVtYTtcblxuICAgIHNjaGVtYS5pdGVtcy50aXRsZSA9IHNjaGVtYS5pdGVtcy50aXRsZSB8fCB0aGlzLmdldFRpdGxlKGZvcm1LZXkpO1xuICAgIGxldCB0ZW1wbGF0ZSA9XG4gICAgICBgPHNmLSR7c2NoZW1hLml0ZW1zLnR5cGV9IG1vZGVsLnR3by13YXk9XCJtb2RlbFskaW5kZXhdXCIgZm9ybS5iaW5kPVwiZm9ybVwiYDtcbiAgICBpZiAoKGZvcm0gYXMgSUZvcm1PdmVycmlkZSlbXCIkc2NoZW1hXCJdLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJmb3JtWyckc2NoZW1hJ11cImA7XG4gICAgfVxuICAgIHRlbXBsYXRlICs9IGA+PC9zZi0ke3NjaGVtYS5pdGVtcy50eXBlfT5gO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1hcnJheS1pdGVtIHRlbXBsYXRlXCIsIHsgdGVtcGxhdGUsIHNjaGVtYSwgZm9ybSwgbW9kZWwgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgYnVpbGRPYmplY3RGb3JtKHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLCBmb3JtOiBJRm9ybSwgbW9kZWw6IG9iamVjdCwgc2VnbWVudCA9IFwiXCIpOiBzdHJpbmcge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZE9iamVjdEZvcm1cIiwgYXJndW1lbnRzKTtcbiAgICBsZXQgdGVtcGxhdGUgPSBcIlwiO1xuICAgIHRyeSB7XG4gICAgICBsZXQgd3JhcHBlcjogeyBzdGFydD86IHN0cmluZywgZW5kPzogc3RyaW5nIH07XG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6Zm9yaW5cbiAgICAgIGZvciAoY29uc3QgZm9ybUtleSBpbiBmb3JtKSB7XG4gICAgICAgIHdyYXBwZXIgPSB0aGlzLmdldEVtbWV0V3JhcHBlcihmb3JtS2V5LCB3cmFwcGVyKTtcbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLmFwcGx5RW1tZXRTdGFydCh3cmFwcGVyLCB0ZW1wbGF0ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNPdmVycmlkZShmb3JtS2V5KSkge1xuICAgICAgICAgIC8vIGRvIG5vdGhpbmdcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzQ29udGFpbmVyKGZvcm1LZXkpKSB7XG4gICAgICAgICAgLy8gaW5uZXIgZW1tZXQgY29udGFpbmVyXG4gICAgICAgICAgKHsgc2VnbWVudCwgdGVtcGxhdGUgfSA9IHRoaXMuZ2V0Q29udGFpbmVyVGVtcGxhdGUoc2VnbWVudCwgZm9ybUtleSwgZm9ybSwgdGVtcGxhdGUsIHNjaGVtYSwgbW9kZWwpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBvYmplY3QgcHJvcGVydHlcbiAgICAgICAgICAoeyBtb2RlbCwgdGVtcGxhdGUgfSA9IHRoaXMuZ2V0T2JqZWN0UHJvcGVydHlUZW1wbGF0ZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIG1vZGVsLCB0ZW1wbGF0ZSwgc2VnbWVudCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGVtcGxhdGUgPSB0aGlzLmFwcGx5RW1tZXRFbmQod3JhcHBlciwgdGVtcGxhdGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcImNyZWF0ZWQgdGVtcGxhdGVcIiwgeyB0ZW1wbGF0ZSwgc2NoZW1hIH0pO1xuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH0gY2F0Y2ggKGV4KSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihcImFuIGVycm9yIG9jY3VycmVkIGJ1aWxkaW5nIG9iamVjdCB2aWV3IHN0cmF0ZWd5XCIsIGV4LCBzY2hlbWEsIGZvcm0sIG1vZGVsLCBzZWdtZW50KTtcbiAgICAgIHRocm93IGV4O1xuICAgIH1cbiAgfVxuXG4gIGdldENvbnRhaW5lclRlbXBsYXRlKFxuICAgIHNlZ21lbnQ6IHN0cmluZywgZm9ybUtleTogc3RyaW5nLCBmb3JtOiBJRm9ybSwgdGVtcGxhdGU6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIG1vZGVsOiBvYmplY3RcbiAgKSB7XG4gICAgc2VnbWVudCArPSBgWycke2Zvcm1LZXl9J11gO1xuICAgIGNvbnN0IGlubmVyRm9ybXMgPSBmb3JtW2Zvcm1LZXldIGFzIElGb3JtW107XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlubmVyRm9ybXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICB0ZW1wbGF0ZSArPSB0aGlzLmJ1aWxkT2JqZWN0Rm9ybShzY2hlbWEsIGlubmVyRm9ybXNbaW5kZXhdLCBtb2RlbCwgc2VnbWVudCArIGBbJHtpbmRleH1dYCk7XG4gICAgfVxuICAgIHJldHVybiB7IHNlZ21lbnQsIHRlbXBsYXRlIH07XG4gIH1cblxuICBnZXRBcnJheUl0ZW1EZWZhdWx0KHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sIG1vZGVsKSB7XG4gICAgc3dpdGNoIChzY2hlbWEuaXRlbXMudHlwZSkge1xuICAgICAgY2FzZSBcImFycmF5XCI6XG4gICAgICAgIHJldHVybiBtb2RlbCB8fCBbXTtcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5pdGVtcy5jb25zdCB8fCBzY2hlbWEuaXRlbXMuZGVmYXVsdCB8fCBcIlwiO1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICByZXR1cm4gbW9kZWwgfHwgc2NoZW1hLml0ZW1zLmNvbnN0IHx8IHNjaGVtYS5pdGVtcy5kZWZhdWx0IHx8IFwiXCI7XG4gICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgIHJldHVybiB0aGlzLmdldE9iamVjdE1vZGVsRGVmYXVsdHMoe30sIHNjaGVtYS5pdGVtcyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0T2JqZWN0UHJvcGVydHlUZW1wbGF0ZShcbiAgICBmb3JtOiBJRm9ybSwgZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgbW9kZWw6IG9iamVjdCwgdGVtcGxhdGU6IHN0cmluZywgc2VnbWVudDogc3RyaW5nXG4gICkge1xuICAgIGNvbnN0IG92ZXJyaWRlID0gdGhpcy5nZXRPdmVycmlkZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEpO1xuICAgIG1vZGVsID0gdGhpcy5nZXRPYmplY3RNb2RlbERlZmF1bHRzKG1vZGVsLCBzY2hlbWEpO1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICB0ZW1wbGF0ZSArPSBgPHNmLSR7b3ZlcnJpZGUuJHNjaGVtYS50eXBlfSBtb2RlbC50d28td2F5PVwibW9kZWwuJHtmb3JtS2V5fVwiIGZvcm0uYmluZD1cImZvcm0ke3NlZ21lbnR9LiR7Zm9ybUtleX1cImA7XG4gICAgaWYgKG92ZXJyaWRlLiRzY2hlbWEudHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICBtb2RlbFtmb3JtS2V5XSA9IG1vZGVsW2Zvcm1LZXldIHx8IFtdO1xuICAgICAgdGVtcGxhdGUgKz0gYCBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7Zm9ybUtleX1cIiBrZXk9XCIke2Zvcm1LZXl9XCJgO1xuICAgIH1cbiAgICBpZiAob3ZlcnJpZGUuJHNjaGVtYS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBtb2RlbFtmb3JtS2V5XSA9IG1vZGVsW2Zvcm1LZXldIHx8IHt9O1xuICAgICAgdGVtcGxhdGUgKz0gYCBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7Zm9ybUtleX1cImA7XG4gICAgfVxuICAgIHRlbXBsYXRlICs9IGA+PC9zZi0ke292ZXJyaWRlLiRzY2hlbWEudHlwZX0+XFxyXFxuYDtcbiAgICByZXR1cm4geyBtb2RlbCwgdGVtcGxhdGUgfTtcbiAgfVxuXG4gIGlzT3ZlcnJpZGUoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiaXNPdmVycmlkZVwiLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLm92ZXJyaWRlTWFya2VyO1xuICB9XG5cbiAgaXNDb250YWluZXIoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiaXNDb250YWluZXJcIiwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4ga2V5LmNoYXJBdCgwKSA9PT0gdGhpcy5jb250YWluZXJNYXJrZXI7XG4gIH1cblxuICBnZXRPdmVycmlkZShmb3JtOiBJRm9ybSwgZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRPdmVycmlkZVwiLCB7IGZvcm1LZXksIGZvcm0sIHNjaGVtYSB9KTtcbiAgICBjb25zdCBvdmVycmlkZSA9IGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZTtcbiAgICBvdmVycmlkZS4kc2NoZW1hID0gc2NoZW1hLnByb3BlcnRpZXNbZm9ybUtleV07XG4gICAgb3ZlcnJpZGUuJHNjaGVtYS50aXRsZSA9IG92ZXJyaWRlLiRzY2hlbWEudGl0bGUgfHwgdGhpcy5nZXRUaXRsZShmb3JtS2V5KTtcbiAgICBvdmVycmlkZS4kcmVxdWlyZWQgPSBBcnJheS5pc0FycmF5KHNjaGVtYS5yZXF1aXJlZCkgPyBzY2hlbWEucmVxdWlyZWQuaW5kZXhPZihmb3JtS2V5KSAhPT0gLTEgOiBmYWxzZTtcbiAgICByZXR1cm4gb3ZlcnJpZGU7XG4gIH1cblxuICBnZXRUaXRsZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRUaXRsZVwiLCBhcmd1bWVudHMpO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXlcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKHN0cikgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9iamVjdE1vZGVsRGVmYXVsdHMobW9kZWw6IG9iamVjdCwgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0T2JqZWN0TW9kZWxEZWZhdWx0c1wiLCBhcmd1bWVudHMpO1xuICAgIG1vZGVsID0gbW9kZWwgfHwge307XG4gICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIGlmIChzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0uY29uc3QgfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmRlZmF1bHQpIHtcbiAgICAgICAgICBtb2RlbFtwcm9wZXJ0eV0gPSBtb2RlbFtwcm9wZXJ0eV0gfHwgc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmNvbnN0IHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5kZWZhdWx0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIGdldEVtbWV0Q29udGFpbmVyKGtleTogc3RyaW5nKTogeyBzdGFydDogc3RyaW5nLCBlbmQ6IHN0cmluZyB9IHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0RW1tZXRDb250YWluZXJcIiwgYXJndW1lbnRzKTtcbiAgICBjb25zdCByZWdleCA9IC9eQChbYS16LV0rKSg/Oig/Oig/OiMoXFx3KykpPykoPzooKD86XFwuKD86W2EtelxcZC1dKykpKyk/KSkkLztcblxuICAgIGNvbnN0IG1hdGNoZXMgPSBrZXkubWF0Y2gocmVnZXgpO1xuXG4gICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBmb3JtIGtleSBcIiR7a2V5fVwiIGRvZXMgbm90IG1hdGNoIFwiXihAZWxlbWVudCkoI2lkKT8oKC5jbGFzcykrKT8kXCJgKTtcbiAgICB9XG5cbiAgICBjb25zdCBlbGVtZW50ID0gbWF0Y2hlc1sxXTtcbiAgICBjb25zdCBpZCA9ICFtYXRjaGVzWzJdID8gXCJcIiA6IGBpZD1cIiR7bWF0Y2hlc1syXX1cImA7XG4gICAgY29uc3QgY2xhc3NlcyA9ICFtYXRjaGVzWzNdID8gXCJcIiA6IGBjbGFzcz1cIiR7bWF0Y2hlc1szXS5zcGxpdChcIi5cIikuam9pbihcIiBcIikudHJpbSgpfVwiYDtcblxuICAgIHJldHVybiB7XG4gICAgICBzdGFydDogYDwke2VsZW1lbnR9ICR7aWR9ICR7Y2xhc3Nlc30+YC5yZXBsYWNlKC9cXHMrLywgXCIgXCIpLnRyaW0oKSxcbiAgICAgIGVuZDogYDwvJHtlbGVtZW50fT5gXG4gICAgfTtcbiAgfVxuXG4gIGdldEVtbWV0V3JhcHBlcihrZXk6IHN0cmluZywgd3JhcHBlcjogeyBzdGFydD86IHN0cmluZzsgZW5kPzogc3RyaW5nOyB9KSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEVtbWV0V3JhcHBlclwiLCBhcmd1bWVudHMpO1xuICAgIGlmICh0aGlzLmlzQ29udGFpbmVyKGtleSkpIHtcbiAgICAgIHdyYXBwZXIgPSB0aGlzLmdldEVtbWV0Q29udGFpbmVyKGtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdyYXBwZXIgPSB7fTtcbiAgICB9XG4gICAgcmV0dXJuIHdyYXBwZXI7XG4gIH1cblxuICBhcHBseUVtbWV0RW5kKHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBseUVtbWV0RW5kXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHdyYXBwZXIuZW5kKSB7XG4gICAgICB0ZW1wbGF0ZSArPSB3cmFwcGVyLmVuZDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgYXBwbHlFbW1ldFN0YXJ0KHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSwgdGVtcGxhdGU6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJhcHBseUVtbWV0U3RhcnRcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAod3JhcHBlci5zdGFydCkge1xuICAgICAgdGVtcGxhdGUgKz0gd3JhcHBlci5zdGFydDtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
