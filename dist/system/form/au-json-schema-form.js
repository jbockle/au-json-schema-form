System.register(["aurelia-validation", "aurelia-framework", "../services/schema-form-configuration", "../resources/logger", "./form-controller", "../services/form-service", "../resources/guid", "../services/form-instances"], function (exports_1, context_1) {
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
    var aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, logger_1, form_controller_1, form_service_1, guid_1, form_instances_1, AuJsonSchemaForm;
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
            function (form_controller_1_1) {
                form_controller_1 = form_controller_1_1;
            },
            function (form_service_1_1) {
                form_service_1 = form_service_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (form_instances_1_1) {
                form_instances_1 = form_instances_1_1;
            }
        ],
        execute: function () {
            AuJsonSchemaForm = /** @class */ (function () {
                function AuJsonSchemaForm(validationControllerFactory, configuration, logger, formService, formInstances) {
                    this.logger = logger;
                    this.formService = formService;
                    this.formInstances = formInstances;
                    this.log = logger.info;
                    this.validationController = validationControllerFactory.createForCurrentScope();
                    this.validationController.addRenderer(configuration.validationRenderer);
                    this.id = guid_1.Guid.newGuid();
                }
                AuJsonSchemaForm.prototype.schemaChanged = function () {
                    this.log("schemaChanged");
                    this.buildForm();
                };
                AuJsonSchemaForm.prototype.formChanged = function () {
                    this.log("formChanged");
                    this.buildForm();
                };
                AuJsonSchemaForm.prototype.bind = function () {
                    this.log("bind", arguments);
                    this.buildForm();
                };
                AuJsonSchemaForm.prototype.buildForm = function () {
                    if (this.schema.type !== "object" && this.schema.type !== "array") {
                        this.logger.error("The schema must start with an object or an array");
                        return;
                    }
                    if (this.formView) {
                        this.formView = null;
                    }
                    this.log("buildForm", this.options);
                    this.buildViewStrategy();
                };
                AuJsonSchemaForm.prototype.buildViewStrategy = function () {
                    this.log("buildViewStrategy");
                    this.form.$schema = this.schema;
                    this.formView = new aurelia_framework_1.InlineViewStrategy("<template>" + this.formService.getSfTemplate("model", "form", this.schema.type, this.id) + "</template>");
                    this.formInstance = {
                        schema: this.schema,
                        form: this.form,
                        formController: new form_controller_1.FormController(this.logger, this.options, this.validationController),
                        validationController: this.validationController,
                        formOptions: this.options
                    };
                    this.logger.warn("buildViewStrategy completed", this.formInstance);
                    this.formInstances.set(this.id, this.formInstance);
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
                    aurelia_framework_1.inject(aurelia_validation_1.ValidationControllerFactory, schema_form_configuration_1.SchemaFormConfiguration, logger_1.SchemaFormLogger, form_service_1.FormService, form_instances_1.FormInstances),
                    aurelia_framework_1.customElement("au-json-schema-form"),
                    __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory,
                        schema_form_configuration_1.SchemaFormConfiguration,
                        logger_1.SchemaFormLogger,
                        form_service_1.FormService,
                        form_instances_1.FormInstances])
                ], AuJsonSchemaForm);
                return AuJsonSchemaForm;
            }());
            exports_1("AuJsonSchemaForm", AuJsonSchemaForm);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBd0NFLDBCQUNFLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUM5QixNQUF3QixFQUN4QixXQUF3QixFQUN4QixhQUE0QjtvQkFGNUIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFFcEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsMkJBQTJCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDaEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLEVBQUUsR0FBRyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsd0NBQWEsR0FBYjtvQkFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO29CQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsc0NBQVcsR0FBWDtvQkFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUN4QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsK0JBQUksR0FBSjtvQkFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNuQixDQUFDO2dCQUVELG9DQUFTLEdBQVQ7b0JBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO3dCQUN0RSxPQUFPO3FCQUNSO29CQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7cUJBQ3RCO29CQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsNENBQWlCLEdBQWpCO29CQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztvQkFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHNDQUFrQixDQUNwQyxlQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBYSxDQUFDLENBQUM7b0JBQ3hHLElBQUksQ0FBQyxZQUFZLEdBQUc7d0JBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTt3QkFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO3dCQUNmLGNBQWMsRUFBRSxJQUFJLGdDQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQzt3QkFDeEYsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQjt3QkFDL0MsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPO3FCQUMxQixDQUFDO29CQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQkFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3JELENBQUM7Z0JBeEVTO29CQUFULDRCQUFROztnRUFBK0I7Z0JBRTlCO29CQUFULDRCQUFROzs4REFBcUI7Z0JBRXBCO29CQUFULDRCQUFROzsrREFBTztnQkFFTjtvQkFBVCw0QkFBUTs7aUVBQXVCO2dCQVByQixnQkFBZ0I7b0JBUjVCLDBCQUFNLENBQ0wsZ0RBQTJCLEVBQzNCLG1EQUF1QixFQUN2Qix5QkFBZ0IsRUFDaEIsMEJBQVcsRUFDWCw4QkFBYSxDQUNkO29CQUNBLGlDQUFhLENBQUMscUJBQXFCLENBQUM7cURBcUJKLGdEQUEyQjt3QkFDekMsbURBQXVCO3dCQUN0Qix5QkFBZ0I7d0JBQ1gsMEJBQVc7d0JBQ1QsOEJBQWE7bUJBeEIzQixnQkFBZ0IsQ0EwRTVCO2dCQUFELHVCQUFDO2FBMUVELEFBMEVDOztRQUNELENBQUMiLCJmaWxlIjoiZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgaW5qZWN0LCBiaW5kYWJsZSwgSW5saW5lVmlld1N0cmF0ZWd5LCBjdXN0b21FbGVtZW50LCBDb250YWluZXIgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sbGVyIH0gZnJvbSBcIi4vZm9ybS1jb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2d1aWRcIjtcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlc1wiO1xyXG5cclxuQGluamVjdChcclxuICBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgU2NoZW1hRm9ybUxvZ2dlcixcclxuICBGb3JtU2VydmljZSxcclxuICBGb3JtSW5zdGFuY2VzXHJcbilcclxuQGN1c3RvbUVsZW1lbnQoXCJhdS1qc29uLXNjaGVtYS1mb3JtXCIpXHJcbmV4cG9ydCBjbGFzcyBBdUpzb25TY2hlbWFGb3JtIHtcclxuICBAYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb247XHJcblxyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG5cclxuICBAYmluZGFibGUgbW9kZWw7XHJcblxyXG4gIEBiaW5kYWJsZSBvcHRpb25zOiBJRm9ybU9wdGlvbnM7XHJcblxyXG4gIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcclxuXHJcbiAgZm9ybVZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcclxuXHJcbiAgZm9ybUluc3RhbmNlOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBpZDogc3RyaW5nO1xyXG5cclxuICBwcml2YXRlIGxvZzogKG1lc3NhZ2U6IHN0cmluZywgLi4ucmVzdDogYW55W10pID0+IHZvaWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5OiBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXHJcbiAgICBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHtcclxuICAgIHRoaXMubG9nID0gbG9nZ2VyLmluZm87XHJcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyID0gdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LmNyZWF0ZUZvckN1cnJlbnRTY29wZSgpO1xyXG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRSZW5kZXJlcihjb25maWd1cmF0aW9uLnZhbGlkYXRpb25SZW5kZXJlcik7XHJcbiAgICB0aGlzLmlkID0gR3VpZC5uZXdHdWlkKCk7XHJcbiAgfVxyXG5cclxuICBzY2hlbWFDaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5sb2coXCJzY2hlbWFDaGFuZ2VkXCIpO1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIGZvcm1DaGFuZ2VkKCkge1xyXG4gICAgdGhpcy5sb2coXCJmb3JtQ2hhbmdlZFwiKTtcclxuICAgIHRoaXMuYnVpbGRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2coXCJiaW5kXCIsIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRGb3JtKCkge1xyXG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgIT09IFwib2JqZWN0XCIgJiYgdGhpcy5zY2hlbWEudHlwZSAhPT0gXCJhcnJheVwiKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmVycm9yKFwiVGhlIHNjaGVtYSBtdXN0IHN0YXJ0IHdpdGggYW4gb2JqZWN0IG9yIGFuIGFycmF5XCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5mb3JtVmlldykge1xyXG4gICAgICB0aGlzLmZvcm1WaWV3ID0gbnVsbDtcclxuICAgIH1cclxuICAgIHRoaXMubG9nKFwiYnVpbGRGb3JtXCIsIHRoaXMub3B0aW9ucyk7XHJcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XHJcbiAgfVxyXG5cclxuICBidWlsZFZpZXdTdHJhdGVneSgpIHtcclxuICAgIHRoaXMubG9nKFwiYnVpbGRWaWV3U3RyYXRlZ3lcIik7XHJcbiAgICB0aGlzLmZvcm0uJHNjaGVtYSA9IHRoaXMuc2NoZW1hO1xyXG4gICAgdGhpcy5mb3JtVmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koXHJcbiAgICAgIGA8dGVtcGxhdGU+JHt0aGlzLmZvcm1TZXJ2aWNlLmdldFNmVGVtcGxhdGUoXCJtb2RlbFwiLCBcImZvcm1cIiwgdGhpcy5zY2hlbWEudHlwZSwgdGhpcy5pZCl9PC90ZW1wbGF0ZT5gKTtcclxuICAgIHRoaXMuZm9ybUluc3RhbmNlID0ge1xyXG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLFxyXG4gICAgICBmb3JtOiB0aGlzLmZvcm0sXHJcbiAgICAgIGZvcm1Db250cm9sbGVyOiBuZXcgRm9ybUNvbnRyb2xsZXIodGhpcy5sb2dnZXIsIHRoaXMub3B0aW9ucywgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciksXHJcbiAgICAgIHZhbGlkYXRpb25Db250cm9sbGVyOiB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLFxyXG4gICAgICBmb3JtT3B0aW9uczogdGhpcy5vcHRpb25zXHJcbiAgICB9O1xyXG4gICAgdGhpcy5sb2dnZXIud2FybihcImJ1aWxkVmlld1N0cmF0ZWd5IGNvbXBsZXRlZFwiLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICB0aGlzLmZvcm1JbnN0YW5jZXMuc2V0KHRoaXMuaWQsIHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
