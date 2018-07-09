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
    exports.AuJsonSchemaForm = AuJsonSchemaForm;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFxQkE7UUFtQkUsMEJBQ0UsMkJBQXdELEVBQ3hELGFBQXNDLEVBQzlCLE1BQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGFBQTRCO1lBRjVCLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBVHRDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFXMUIsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsR0FBRywyQkFBMkIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ2hGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUVELHdDQUFhLEdBQWI7WUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBRUQsc0NBQVcsR0FBWDtZQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDeEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCwrQkFBSSxHQUFKO1lBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDNUIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCxvQ0FBUyxHQUFUO1lBQ0UsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO2dCQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO2dCQUN0RSxPQUFPO2FBQ1I7WUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFRCw0Q0FBaUIsR0FBakI7WUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNoQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksc0NBQWtCLENBQ3BDLGVBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFhLENBQUMsQ0FBQztZQUN0RyxJQUFJLENBQUMsWUFBWSxHQUFHO2dCQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSTtnQkFDZixjQUFjLEVBQUUsSUFBSSxnQ0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7Z0JBQ3hGLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7Z0JBQy9DLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTzthQUMxQixDQUFDO1lBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUF2RVM7WUFBVCw0QkFBUTs7d0RBQStCO1FBRTlCO1lBQVQsNEJBQVE7O3NEQUFxQjtRQUVwQjtZQUFULDRCQUFROzt1REFBTztRQUVOO1lBQVQsNEJBQVE7O3lEQUF1QjtRQVByQixnQkFBZ0I7WUFSNUIsMEJBQU0sQ0FDTCxnREFBMkIsRUFDM0IsbURBQXVCLEVBQ3ZCLHlCQUFnQixFQUNoQiwwQkFBVyxFQUNYLDhCQUFhLENBQ2Q7WUFDQSxpQ0FBYSxDQUFDLHFCQUFxQixDQUFDOzZDQXFCSixnREFBMkI7Z0JBQ3pDLG1EQUF1QjtnQkFDdEIseUJBQWdCO2dCQUNYLDBCQUFXO2dCQUNULDhCQUFhO1dBeEIzQixnQkFBZ0IsQ0F5RTVCO1FBQUQsdUJBQUM7S0F6RUQsQUF5RUMsSUFBQTtJQXpFWSw0Q0FBZ0IiLCJmaWxlIjoiZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCwgQ29udGFpbmVyIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb3JtLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XG5cbkBpbmplY3QoXG4gIFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXG4gIEZvcm1TZXJ2aWNlLFxuICBGb3JtSW5zdGFuY2VzXG4pXG5AY3VzdG9tRWxlbWVudChcImF1LWpzb24tc2NoZW1hLWZvcm1cIilcbmV4cG9ydCBjbGFzcyBBdUpzb25TY2hlbWFGb3JtIHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uO1xuXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuXG4gIEBiaW5kYWJsZSBtb2RlbDtcblxuICBAYmluZGFibGUgb3B0aW9uczogSUZvcm1PcHRpb25zO1xuXG4gIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICBmb3JtVmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIGZvcm1JbnN0YW5jZTogSUZvcm1JbnN0YW5jZTtcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICAgIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xuICApIHtcbiAgICB0aGlzLmxvZyA9IGxvZ2dlci5pbmZvO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnkuY3JlYXRlRm9yQ3VycmVudFNjb3BlKCk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRSZW5kZXJlcihjb25maWd1cmF0aW9uLnZhbGlkYXRpb25SZW5kZXJlcik7XG4gIH1cblxuICBzY2hlbWFDaGFuZ2VkKCkge1xuICAgIHRoaXMubG9nKFwic2NoZW1hQ2hhbmdlZFwiKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgZm9ybUNoYW5nZWQoKSB7XG4gICAgdGhpcy5sb2coXCJmb3JtQ2hhbmdlZFwiKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZyhcImJpbmRcIiwgYXJndW1lbnRzKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgYnVpbGRGb3JtKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlICE9PSBcIm9iamVjdFwiICYmIHRoaXMuc2NoZW1hLnR5cGUgIT09IFwiYXJyYXlcIikge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJUaGUgc2NoZW1hIG11c3Qgc3RhcnQgd2l0aCBhbiBvYmplY3Qgb3IgYW4gYXJyYXlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm1WaWV3KSB7XG4gICAgICB0aGlzLmZvcm1WaWV3ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5sb2coXCJidWlsZEZvcm1cIiwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBidWlsZFZpZXdTdHJhdGVneSgpIHtcbiAgICB0aGlzLmxvZyhcImJ1aWxkVmlld1N0cmF0ZWd5XCIpO1xuICAgIHRoaXMuZm9ybS4kc2NoZW1hID0gdGhpcy5zY2hlbWE7XG4gICAgdGhpcy5mb3JtVmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koXG4gICAgICBgPHRlbXBsYXRlPiR7dGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZShcIm1vZGVsXCIsIFwiZm9ybVwiLCB0aGlzLnNjaGVtYS50eXBlLCB0aGlzLmlkKX08L3RlbXBsYXRlPmApO1xuICAgIHRoaXMuZm9ybUluc3RhbmNlID0ge1xuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSxcbiAgICAgIGZvcm1Db250cm9sbGVyOiBuZXcgRm9ybUNvbnRyb2xsZXIodGhpcy5sb2dnZXIsIHRoaXMub3B0aW9ucywgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciksXG4gICAgICB2YWxpZGF0aW9uQ29udHJvbGxlcjogdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlcixcbiAgICAgIGZvcm1PcHRpb25zOiB0aGlzLm9wdGlvbnNcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJidWlsZFZpZXdTdHJhdGVneSBjb21wbGV0ZWRcIiwgdGhpcy5mb3JtSW5zdGFuY2UpO1xuICAgIHRoaXMuZm9ybUluc3RhbmNlcy5zZXQodGhpcy5pZCwgdGhpcy5mb3JtSW5zdGFuY2UpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
