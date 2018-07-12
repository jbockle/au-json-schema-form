var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../services/schema-form-configuration", "../resources/logger", "./form-controller", "../services/form-service", "../resources/guid", "../services/form-instances"], function (require, exports, aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, logger_1, form_controller_1, form_service_1, guid_1, form_instances_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuJsonSchemaForm = /** @class */ (function () {
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
    exports.AuJsonSchemaForm = AuJsonSchemaForm;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFxQkE7UUFtQkUsMEJBQ0UsMkJBQXdELEVBQ3hELGFBQXNDLEVBQzlCLE1BQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGFBQTRCO1lBRjVCLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBRXBDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsMkJBQTJCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUNoRixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQ3hFLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFRCx3Q0FBYSxHQUFiO1lBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVELHNDQUFXLEdBQVg7WUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBRUQsK0JBQUksR0FBSjtZQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBRUQsb0NBQVMsR0FBVDtZQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDakUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsa0RBQWtELENBQUMsQ0FBQztnQkFDdEUsT0FBTzthQUNSO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO2dCQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQzthQUN0QjtZQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRUQsNENBQWlCLEdBQWpCO1lBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHNDQUFrQixDQUNwQyxlQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBYSxDQUFDLENBQUM7WUFDeEcsSUFBSSxDQUFDLFlBQVksR0FBRztnQkFDbEIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2YsY0FBYyxFQUFFLElBQUksZ0NBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDO2dCQUN4RixvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO2dCQUMvQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDMUIsQ0FBQztZQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBeEVTO1lBQVQsNEJBQVE7O3dEQUErQjtRQUU5QjtZQUFULDRCQUFROztzREFBcUI7UUFFcEI7WUFBVCw0QkFBUTs7dURBQU87UUFFTjtZQUFULDRCQUFROzt5REFBdUI7UUFQckIsZ0JBQWdCO1lBUjVCLDBCQUFNLENBQ0wsZ0RBQTJCLEVBQzNCLG1EQUF1QixFQUN2Qix5QkFBZ0IsRUFDaEIsMEJBQVcsRUFDWCw4QkFBYSxDQUNkO1lBQ0EsaUNBQWEsQ0FBQyxxQkFBcUIsQ0FBQzs2Q0FxQkosZ0RBQTJCO2dCQUN6QyxtREFBdUI7Z0JBQ3RCLHlCQUFnQjtnQkFDWCwwQkFBVztnQkFDVCw4QkFBYTtXQXhCM0IsZ0JBQWdCLENBMEU1QjtRQUFELHVCQUFDO0tBMUVELEFBMEVDLElBQUE7SUExRVksNENBQWdCIiwiZmlsZSI6ImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCwgQ29udGFpbmVyIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuL2Zvcm0tY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9ndWlkXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXNcIjtcclxuXHJcbkBpbmplY3QoXHJcbiAgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybVNlcnZpY2UsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KFwiYXUtanNvbi1zY2hlbWEtZm9ybVwiKVxyXG5leHBvcnQgY2xhc3MgQXVKc29uU2NoZW1hRm9ybSB7XHJcbiAgQGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uO1xyXG5cclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuXHJcbiAgQGJpbmRhYmxlIG1vZGVsO1xyXG5cclxuICBAYmluZGFibGUgb3B0aW9uczogSUZvcm1PcHRpb25zO1xyXG5cclxuICB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XHJcblxyXG4gIGZvcm1WaWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIGZvcm1JbnN0YW5jZTogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxyXG4gICAgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxvZyA9IGxvZ2dlci5pbmZvO1xyXG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcclxuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkUmVuZGVyZXIoY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpO1xyXG4gICAgdGhpcy5pZCA9IEd1aWQubmV3R3VpZCgpO1xyXG4gIH1cclxuXHJcbiAgc2NoZW1hQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMubG9nKFwic2NoZW1hQ2hhbmdlZFwiKTtcclxuICAgIHRoaXMuYnVpbGRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMubG9nKFwiZm9ybUNoYW5nZWRcIik7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMubG9nKFwiYmluZFwiLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkRm9ybSgpIHtcclxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlICE9PSBcIm9iamVjdFwiICYmIHRoaXMuc2NoZW1hLnR5cGUgIT09IFwiYXJyYXlcIikge1xyXG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlRoZSBzY2hlbWEgbXVzdCBzdGFydCB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9ybVZpZXcpIHtcclxuICAgICAgdGhpcy5mb3JtVmlldyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZyhcImJ1aWxkRm9ybVwiLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XHJcbiAgICB0aGlzLmxvZyhcImJ1aWxkVmlld1N0cmF0ZWd5XCIpO1xyXG4gICAgdGhpcy5mb3JtLiRzY2hlbWEgPSB0aGlzLnNjaGVtYTtcclxuICAgIHRoaXMuZm9ybVZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxyXG4gICAgICBgPHRlbXBsYXRlPiR7dGhpcy5mb3JtU2VydmljZS5nZXRTZlRlbXBsYXRlKFwibW9kZWxcIiwgXCJmb3JtXCIsIHRoaXMuc2NoZW1hLnR5cGUsIHRoaXMuaWQpfTwvdGVtcGxhdGU+YCk7XHJcbiAgICB0aGlzLmZvcm1JbnN0YW5jZSA9IHtcclxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSxcclxuICAgICAgZm9ybTogdGhpcy5mb3JtLFxyXG4gICAgICBmb3JtQ29udHJvbGxlcjogbmV3IEZvcm1Db250cm9sbGVyKHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMsIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIpLFxyXG4gICAgICB2YWxpZGF0aW9uQ29udHJvbGxlcjogdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlcixcclxuICAgICAgZm9ybU9wdGlvbnM6IHRoaXMub3B0aW9uc1xyXG4gICAgfTtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJidWlsZFZpZXdTdHJhdGVneSBjb21wbGV0ZWRcIiwgdGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5mb3JtSW5zdGFuY2VzLnNldCh0aGlzLmlkLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
