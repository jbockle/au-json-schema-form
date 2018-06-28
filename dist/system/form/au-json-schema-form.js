System.register(["aurelia-validation", "aurelia-framework", "../services/schema-form-configuration", "../resources/logger", "./form-object-controller"], function (exports_1, context_1) {
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
    var aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, logger_1, form_object_controller_1, AuJsonSchemaForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (form_object_controller_1_1) {
                form_object_controller_1 = form_object_controller_1_1;
            }
        ],
        execute: function () {
            AuJsonSchemaForm = /** @class */ (function () {
                function AuJsonSchemaForm(validationControllerFactory, configuration, logger) {
                    this.logger = logger;
                    this.log = logger.info;
                    this.validationController = validationControllerFactory.createForCurrentScope();
                    this.validationController.addRenderer(configuration.validationRenderer);
                }
                AuJsonSchemaForm.prototype.bind = function () {
                    this.log("bind", arguments);
                    this.buildForm();
                };
                AuJsonSchemaForm.prototype.schemaChanged = function () {
                    this.log("schemaChanged", arguments);
                    this.buildForm();
                };
                AuJsonSchemaForm.prototype.formChanged = function () {
                    this.log("formChanged", arguments);
                    this.buildForm();
                };
                AuJsonSchemaForm.prototype.buildForm = function () {
                    if (this.formView) {
                        this.formView = null;
                    }
                    this.log("buildForm", this.options);
                    this.buildViewStrategy();
                };
                AuJsonSchemaForm.prototype.buildViewStrategy = function () {
                    var _this = this;
                    this.log("buildViewStrategy");
                    var viewStrategy = "";
                    var keys = Object.keys(this.form);
                    keys.forEach(function (key) {
                        switch (key[0]) {
                            case "@":
                                break;
                            case "$":
                                break;
                            default:
                                var template = _this.getSchemaTemplate(key, _this.form[key]);
                                if (template) {
                                    viewStrategy += template;
                                }
                                break;
                        }
                    });
                    this.formView = new aurelia_framework_1.InlineViewStrategy("<template>" + viewStrategy + "</template>");
                    this.formController = new form_object_controller_1.FormObjectController(this.logger, this.options, this.validationController);
                };
                AuJsonSchemaForm.prototype.getSchemaTemplate = function (key, form, part) {
                    if (part === void 0) { part = this.schema; }
                    this.log("getSchemaTemplate", arguments);
                    var template;
                    var schema = part.properties[key];
                    switch (schema.type) {
                        case "number":
                            template = "<sf-number\n        schema.bind=\"schema.properties." + key + "\"\n        model.two-way=\"model." + key + "\"\n        title=\"" + (form.$title || schema.title || this.toTitle(key)) + "\"\n        required.bind=\"" + this.isRequired(key, part) + "\"></sf-number>\r\n";
                            break;
                        case "string":
                            template = "<sf-text\n      schema.bind=\"schema.properties." + key + "\"\n      model.two-way=\"model." + key + "\"\n      title=\"" + (form.$title || schema.title || this.toTitle(key)) + "\"\n      required.bind=\"" + this.isRequired(key, part) + "\"></sf-text>\r\n";
                            break;
                    }
                    return template;
                };
                AuJsonSchemaForm.prototype.isRequired = function (key, part) {
                    this.log("isRequired", arguments);
                    var required = false;
                    if (Array.isArray(part.required)) {
                        required = part.required
                            .some(function (x) { return x === key; });
                    }
                    return required;
                };
                AuJsonSchemaForm.prototype.toTitle = function (key) {
                    this.log("toTitle", arguments);
                    if (key) {
                        return key
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, function (str) { return str.toUpperCase(); });
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuJsonSchemaForm.prototype, "schema", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuJsonSchemaForm.prototype, "form", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuJsonSchemaForm.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuJsonSchemaForm.prototype, "options", void 0);
                AuJsonSchemaForm = __decorate([
                    aurelia_framework_1.inject(aurelia_validation_1.ValidationControllerFactory, schema_form_configuration_1.SchemaFormConfiguration, logger_1.SchemaFormLogger),
                    aurelia_framework_1.customElement("au-json-schema-form"),
                    __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory,
                        schema_form_configuration_1.SchemaFormConfiguration,
                        logger_1.SchemaFormLogger])
                ], AuJsonSchemaForm);
                return AuJsonSchemaForm;
            }());
            exports_1("AuJsonSchemaForm", AuJsonSchemaForm);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBOEJFLDBCQUNFLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUM5QixNQUF3QjtvQkFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBRWhDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLDJCQUEyQixDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ2hGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzFFLENBQUM7Z0JBRUQsK0JBQUksR0FBSjtvQkFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUVELHdDQUFhLEdBQWI7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxzQ0FBVyxHQUFYO29CQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNuQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsb0NBQVMsR0FBVDtvQkFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO3FCQUN0QjtvQkFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3BDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUMzQixDQUFD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LEdBQUcsRUFBRTt3QkFDUCxPQUFPLEdBQUc7NkJBQ1AsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7NkJBQzFCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQztxQkFDOUM7Z0JBQ0gsQ0FBQztnQkE3R1M7b0JBQVQsNEJBQVE7O2dFQUFhO2dCQUVaO29CQUFULDRCQUFROzs4REFBTTtnQkFFTDtvQkFBVCw0QkFBUTs7K0RBQU87Z0JBRU47b0JBQVQsNEJBQVE7O2lFQUF1QjtnQkFQckIsZ0JBQWdCO29CQU41QiwwQkFBTSxDQUNMLGdEQUEyQixFQUMzQixtREFBdUIsRUFDdkIseUJBQWdCLENBQ2pCO29CQUNBLGlDQUFhLENBQUMscUJBQXFCLENBQUM7cURBbUJKLGdEQUEyQjt3QkFDekMsbURBQXVCO3dCQUN0Qix5QkFBZ0I7bUJBcEJ2QixnQkFBZ0IsQ0ErRzVCO2dCQUFELHVCQUFDO2FBL0dELEFBK0dDOztRQUNELENBQUMiLCJmaWxlIjoiZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCwgQ29udGFpbmVyIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgRm9ybU9iamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb3JtLW9iamVjdC1jb250cm9sbGVyXCI7XG5cbkBpbmplY3QoXG4gIFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIFNjaGVtYUZvcm1Mb2dnZXJcbilcbkBjdXN0b21FbGVtZW50KFwiYXUtanNvbi1zY2hlbWEtZm9ybVwiKVxuZXhwb3J0IGNsYXNzIEF1SnNvblNjaGVtYUZvcm0ge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG5cbiAgQGJpbmRhYmxlIGZvcm07XG5cbiAgQGJpbmRhYmxlIG1vZGVsO1xuXG4gIEBiaW5kYWJsZSBvcHRpb25zOiBJRm9ybU9wdGlvbnM7XG5cbiAgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gIGZvcm1WaWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgZm9ybUNvbnRyb2xsZXI6IEZvcm1PYmplY3RDb250cm9sbGVyO1xuXG4gIHByaXZhdGUgbG9nOiAobWVzc2FnZTogc3RyaW5nLCAuLi5yZXN0OiBhbnlbXSkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3Rvcnk6IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgICBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxuICApIHtcbiAgICB0aGlzLmxvZyA9IGxvZ2dlci5pbmZvO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnkuY3JlYXRlRm9yQ3VycmVudFNjb3BlKCk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRSZW5kZXJlcihjb25maWd1cmF0aW9uLnZhbGlkYXRpb25SZW5kZXJlcik7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMubG9nKFwiYmluZFwiLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBzY2hlbWFDaGFuZ2VkKCkge1xuICAgIHRoaXMubG9nKFwic2NoZW1hQ2hhbmdlZFwiLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBmb3JtQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmxvZyhcImZvcm1DaGFuZ2VkXCIsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgfVxuXG4gIGJ1aWxkRm9ybSgpIHtcbiAgICBpZiAodGhpcy5mb3JtVmlldykge1xuICAgICAgdGhpcy5mb3JtVmlldyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubG9nKFwiYnVpbGRGb3JtXCIsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XG4gICAgdGhpcy5sb2coXCJidWlsZFZpZXdTdHJhdGVneVwiKTtcbiAgICBsZXQgdmlld1N0cmF0ZWd5ID0gXCJcIjtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5mb3JtKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgc3dpdGNoIChrZXlbMF0pIHtcbiAgICAgICAgY2FzZSBcIkBcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIiRcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0U2NoZW1hVGVtcGxhdGUoa2V5LCB0aGlzLmZvcm1ba2V5XSk7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7IHZpZXdTdHJhdGVneSArPSB0ZW1wbGF0ZTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZm9ybVZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt2aWV3U3RyYXRlZ3l9PC90ZW1wbGF0ZT5gKTtcbiAgICB0aGlzLmZvcm1Db250cm9sbGVyID0gbmV3IEZvcm1PYmplY3RDb250cm9sbGVyKHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMsIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIpO1xuICB9XG5cbiAgZ2V0U2NoZW1hVGVtcGxhdGUoa2V5OiBzdHJpbmcsIGZvcm06IGFueSwgcGFydDogYW55ID0gdGhpcy5zY2hlbWEpIHtcbiAgICB0aGlzLmxvZyhcImdldFNjaGVtYVRlbXBsYXRlXCIsIGFyZ3VtZW50cyk7XG4gICAgbGV0IHRlbXBsYXRlOiBzdHJpbmc7XG4gICAgY29uc3Qgc2NoZW1hID0gcGFydC5wcm9wZXJ0aWVzW2tleV07XG4gICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICB0ZW1wbGF0ZSA9IGA8c2YtbnVtYmVyXG4gICAgICAgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtrZXl9XCJcbiAgICAgICAgbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7a2V5fVwiXG4gICAgICAgIHRpdGxlPVwiJHtmb3JtLiR0aXRsZSB8fCBzY2hlbWEudGl0bGUgfHwgdGhpcy50b1RpdGxlKGtleSl9XCJcbiAgICAgICAgcmVxdWlyZWQuYmluZD1cIiR7dGhpcy5pc1JlcXVpcmVkKGtleSwgcGFydCl9XCI+PC9zZi1udW1iZXI+XFxyXFxuYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgIHRlbXBsYXRlID0gYDxzZi10ZXh0XG4gICAgICBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7a2V5fVwiXG4gICAgICBtb2RlbC50d28td2F5PVwibW9kZWwuJHtrZXl9XCJcbiAgICAgIHRpdGxlPVwiJHtmb3JtLiR0aXRsZSB8fCBzY2hlbWEudGl0bGUgfHwgdGhpcy50b1RpdGxlKGtleSl9XCJcbiAgICAgIHJlcXVpcmVkLmJpbmQ9XCIke3RoaXMuaXNSZXF1aXJlZChrZXksIHBhcnQpfVwiPjwvc2YtdGV4dD5cXHJcXG5gO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgaXNSZXF1aXJlZChrZXk6IHN0cmluZywgcGFydDogYW55KTogYm9vbGVhbiB7XG4gICAgdGhpcy5sb2coXCJpc1JlcXVpcmVkXCIsIGFyZ3VtZW50cyk7XG4gICAgbGV0IHJlcXVpcmVkID0gZmFsc2U7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFydC5yZXF1aXJlZCkpIHtcbiAgICAgIHJlcXVpcmVkID0gcGFydC5yZXF1aXJlZFxuICAgICAgICAuc29tZSgoeCkgPT4geCA9PT0ga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVpcmVkO1xuICB9XG5cbiAgdG9UaXRsZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMubG9nKFwidG9UaXRsZVwiLCBhcmd1bWVudHMpO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXlcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKHN0cikgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
