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
                    this.id = guid_1.Guid.newGuid();
                    this.log = logger.info;
                    this.validationController = validationControllerFactory.createForCurrentScope();
                    this.validationController.addRenderer(configuration.validationRenderer);
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
                    this.formView = new aurelia_framework_1.InlineViewStrategy("<template>" + this.formService.getTemplate("model", "form", this.schema.type, this.id) + "</template>");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBd0NFLDBCQUNFLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUM5QixNQUF3QixFQUN4QixXQUF3QixFQUN4QixhQUE0QjtvQkFGNUIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFUdEMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFXMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsMkJBQTJCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDaEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDMUUsQ0FBQztnQkFFRCx3Q0FBYSxHQUFiO29CQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxzQ0FBVyxHQUFYO29CQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCwrQkFBSSxHQUFKO29CQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUM1QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7Z0JBQ25CLENBQUM7Z0JBRUQsb0NBQVMsR0FBVDtvQkFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7d0JBQ2pFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLGtEQUFrRCxDQUFDLENBQUM7d0JBQ3RFLE9BQU87cUJBQ1I7b0JBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO3dCQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztxQkFDdEI7b0JBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUNwQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCw0Q0FBaUIsR0FBakI7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO29CQUM5QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO29CQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksc0NBQWtCLENBQ3BDLGVBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFhLENBQUMsQ0FBQztvQkFDdEcsSUFBSSxDQUFDLFlBQVksR0FBRzt3QkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO3dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7d0JBQ2YsY0FBYyxFQUFFLElBQUksZ0NBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDO3dCQUN4RixvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO3dCQUMvQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU87cUJBQzFCLENBQUM7b0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO29CQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkF2RVM7b0JBQVQsNEJBQVE7O2dFQUErQjtnQkFFOUI7b0JBQVQsNEJBQVE7OzhEQUFxQjtnQkFFcEI7b0JBQVQsNEJBQVE7OytEQUFPO2dCQUVOO29CQUFULDRCQUFROztpRUFBdUI7Z0JBUHJCLGdCQUFnQjtvQkFSNUIsMEJBQU0sQ0FDTCxnREFBMkIsRUFDM0IsbURBQXVCLEVBQ3ZCLHlCQUFnQixFQUNoQiwwQkFBVyxFQUNYLDhCQUFhLENBQ2Q7b0JBQ0EsaUNBQWEsQ0FBQyxxQkFBcUIsQ0FBQztxREFxQkosZ0RBQTJCO3dCQUN6QyxtREFBdUI7d0JBQ3RCLHlCQUFnQjt3QkFDWCwwQkFBVzt3QkFDVCw4QkFBYTttQkF4QjNCLGdCQUFnQixDQXlFNUI7Z0JBQUQsdUJBQUM7YUF6RUQsQUF5RUM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIFZhbGlkYXRpb25Db250cm9sbGVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5qZWN0LCBiaW5kYWJsZSwgSW5saW5lVmlld1N0cmF0ZWd5LCBjdXN0b21FbGVtZW50LCBDb250YWluZXIgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuL2Zvcm0tY29udHJvbGxlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXNcIjtcblxuQGluamVjdChcbiAgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgU2NoZW1hRm9ybUxvZ2dlcixcbiAgRm9ybVNlcnZpY2UsXG4gIEZvcm1JbnN0YW5jZXNcbilcbkBjdXN0b21FbGVtZW50KFwiYXUtanNvbi1zY2hlbWEtZm9ybVwiKVxuZXhwb3J0IGNsYXNzIEF1SnNvblNjaGVtYUZvcm0ge1xuICBAYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb247XG5cbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG5cbiAgQGJpbmRhYmxlIG1vZGVsO1xuXG4gIEBiaW5kYWJsZSBvcHRpb25zOiBJRm9ybU9wdGlvbnM7XG5cbiAgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gIGZvcm1WaWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgZm9ybUluc3RhbmNlOiBJRm9ybUluc3RhbmNlO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBwcml2YXRlIGxvZzogKG1lc3NhZ2U6IHN0cmluZywgLi4ucmVzdDogYW55W10pID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5OiBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXG4gICAgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXG4gICkge1xuICAgIHRoaXMubG9nID0gbG9nZ2VyLmluZm87XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZFJlbmRlcmVyKGNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKTtcbiAgfVxuXG4gIHNjaGVtYUNoYW5nZWQoKSB7XG4gICAgdGhpcy5sb2coXCJzY2hlbWFDaGFuZ2VkXCIpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBmb3JtQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmxvZyhcImZvcm1DaGFuZ2VkXCIpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMubG9nKFwiYmluZFwiLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBidWlsZEZvcm0oKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgIT09IFwib2JqZWN0XCIgJiYgdGhpcy5zY2hlbWEudHlwZSAhPT0gXCJhcnJheVwiKSB7XG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlRoZSBzY2hlbWEgbXVzdCBzdGFydCB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheVwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybVZpZXcpIHtcbiAgICAgIHRoaXMuZm9ybVZpZXcgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmxvZyhcImJ1aWxkRm9ybVwiLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGJ1aWxkVmlld1N0cmF0ZWd5KCkge1xuICAgIHRoaXMubG9nKFwiYnVpbGRWaWV3U3RyYXRlZ3lcIik7XG4gICAgdGhpcy5mb3JtLiRzY2hlbWEgPSB0aGlzLnNjaGVtYTtcbiAgICB0aGlzLmZvcm1WaWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShcbiAgICAgIGA8dGVtcGxhdGU+JHt0aGlzLmZvcm1TZXJ2aWNlLmdldFRlbXBsYXRlKFwibW9kZWxcIiwgXCJmb3JtXCIsIHRoaXMuc2NoZW1hLnR5cGUsIHRoaXMuaWQpfTwvdGVtcGxhdGU+YCk7XG4gICAgdGhpcy5mb3JtSW5zdGFuY2UgPSB7XG4gICAgICBzY2hlbWE6IHRoaXMuc2NoZW1hLFxuICAgICAgZm9ybTogdGhpcy5mb3JtLFxuICAgICAgZm9ybUNvbnRyb2xsZXI6IG5ldyBGb3JtQ29udHJvbGxlcih0aGlzLmxvZ2dlciwgdGhpcy5vcHRpb25zLCB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyKSxcbiAgICAgIHZhbGlkYXRpb25Db250cm9sbGVyOiB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLFxuICAgICAgZm9ybU9wdGlvbnM6IHRoaXMub3B0aW9uc1xuICAgIH07XG4gICAgdGhpcy5sb2dnZXIud2FybihcImJ1aWxkVmlld1N0cmF0ZWd5IGNvbXBsZXRlZFwiLCB0aGlzLmZvcm1JbnN0YW5jZSk7XG4gICAgdGhpcy5mb3JtSW5zdGFuY2VzLnNldCh0aGlzLmlkLCB0aGlzLmZvcm1JbnN0YW5jZSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
