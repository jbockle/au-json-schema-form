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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_validation_1 = require("aurelia-validation");
var aurelia_framework_1 = require("aurelia-framework");
var schema_form_configuration_1 = require("../services/schema-form-configuration");
var logger_1 = require("../resources/logger");
var form_controller_1 = require("./form-controller");
var form_service_1 = require("../services/form-service");
var guid_1 = require("../resources/guid");
var form_instances_1 = require("../services/form-instances");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlEQUF1RjtBQUN2Rix1REFBbUc7QUFDbkcsbUZBQWdGO0FBRWhGLDhDQUF1RDtBQUN2RCxxREFBbUQ7QUFHbkQseURBQXVEO0FBQ3ZELDBDQUF5QztBQUV6Qyw2REFBMkQ7QUFVM0Q7SUFtQkUsMEJBQ0UsMkJBQXdELEVBQ3hELGFBQXNDLEVBQzlCLE1BQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGFBQTRCO1FBRjVCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRXBDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsMkJBQTJCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNoRixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxFQUFFLEdBQUcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1lBQ3RFLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsNENBQWlCLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHNDQUFrQixDQUNwQyxlQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxnQkFBYSxDQUFDLENBQUM7UUFDdEcsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNsQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsY0FBYyxFQUFFLElBQUksZ0NBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDO1lBQ3hGLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0I7WUFDL0MsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPO1NBQzFCLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDckQsQ0FBQztJQXhFUztRQUFULDRCQUFROztvREFBK0I7SUFFOUI7UUFBVCw0QkFBUTs7a0RBQXFCO0lBRXBCO1FBQVQsNEJBQVE7O21EQUFPO0lBRU47UUFBVCw0QkFBUTs7cURBQXVCO0lBUHJCLGdCQUFnQjtRQVI1QiwwQkFBTSxDQUNMLGdEQUEyQixFQUMzQixtREFBdUIsRUFDdkIseUJBQWdCLEVBQ2hCLDBCQUFXLEVBQ1gsOEJBQWEsQ0FDZDtRQUNBLGlDQUFhLENBQUMscUJBQXFCLENBQUM7eUNBcUJKLGdEQUEyQjtZQUN6QyxtREFBdUI7WUFDdEIseUJBQWdCO1lBQ1gsMEJBQVc7WUFDVCw4QkFBYTtPQXhCM0IsZ0JBQWdCLENBMEU1QjtJQUFELHVCQUFDO0NBMUVELEFBMEVDLElBQUE7QUExRVksNENBQWdCIiwiZmlsZSI6ImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlLCBJbmxpbmVWaWV3U3RyYXRlZ3ksIGN1c3RvbUVsZW1lbnQsIENvbnRhaW5lciB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sbGVyIH0gZnJvbSBcIi4vZm9ybS1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gXCIuLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlc1wiO1xuXG5AaW5qZWN0KFxuICBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBTY2hlbWFGb3JtTG9nZ2VyLFxuICBGb3JtU2VydmljZSxcbiAgRm9ybUluc3RhbmNlc1xuKVxuQGN1c3RvbUVsZW1lbnQoXCJhdS1qc29uLXNjaGVtYS1mb3JtXCIpXG5leHBvcnQgY2xhc3MgQXVKc29uU2NoZW1hRm9ybSB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcblxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcblxuICBAYmluZGFibGUgbW9kZWw7XG5cbiAgQGJpbmRhYmxlIG9wdGlvbnM6IElGb3JtT3B0aW9ucztcblxuICB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XG5cbiAgZm9ybVZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcblxuICBmb3JtSW5zdGFuY2U6IElGb3JtSW5zdGFuY2U7XG5cbiAgaWQ6IHN0cmluZztcblxuICBwcml2YXRlIGxvZzogKG1lc3NhZ2U6IHN0cmluZywgLi4ucmVzdDogYW55W10pID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5OiBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXG4gICAgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXG4gICkge1xuICAgIHRoaXMubG9nID0gbG9nZ2VyLmluZm87XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZFJlbmRlcmVyKGNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKTtcbiAgICB0aGlzLmlkID0gR3VpZC5uZXdHdWlkKCk7XG4gIH1cblxuICBzY2hlbWFDaGFuZ2VkKCkge1xuICAgIHRoaXMubG9nKFwic2NoZW1hQ2hhbmdlZFwiKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgZm9ybUNoYW5nZWQoKSB7XG4gICAgdGhpcy5sb2coXCJmb3JtQ2hhbmdlZFwiKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZyhcImJpbmRcIiwgYXJndW1lbnRzKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgYnVpbGRGb3JtKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlICE9PSBcIm9iamVjdFwiICYmIHRoaXMuc2NoZW1hLnR5cGUgIT09IFwiYXJyYXlcIikge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJUaGUgc2NoZW1hIG11c3Qgc3RhcnQgd2l0aCBhbiBvYmplY3Qgb3IgYW4gYXJyYXlcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm1WaWV3KSB7XG4gICAgICB0aGlzLmZvcm1WaWV3ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5sb2coXCJidWlsZEZvcm1cIiwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBidWlsZFZpZXdTdHJhdGVneSgpIHtcbiAgICB0aGlzLmxvZyhcImJ1aWxkVmlld1N0cmF0ZWd5XCIpO1xuICAgIHRoaXMuZm9ybS4kc2NoZW1hID0gdGhpcy5zY2hlbWE7XG4gICAgdGhpcy5mb3JtVmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koXG4gICAgICBgPHRlbXBsYXRlPiR7dGhpcy5mb3JtU2VydmljZS5nZXRUZW1wbGF0ZShcIm1vZGVsXCIsIFwiZm9ybVwiLCB0aGlzLnNjaGVtYS50eXBlLCB0aGlzLmlkKX08L3RlbXBsYXRlPmApO1xuICAgIHRoaXMuZm9ybUluc3RhbmNlID0ge1xuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSxcbiAgICAgIGZvcm06IHRoaXMuZm9ybSxcbiAgICAgIGZvcm1Db250cm9sbGVyOiBuZXcgRm9ybUNvbnRyb2xsZXIodGhpcy5sb2dnZXIsIHRoaXMub3B0aW9ucywgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciksXG4gICAgICB2YWxpZGF0aW9uQ29udHJvbGxlcjogdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlcixcbiAgICAgIGZvcm1PcHRpb25zOiB0aGlzLm9wdGlvbnNcbiAgICB9O1xuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJidWlsZFZpZXdTdHJhdGVneSBjb21wbGV0ZWRcIiwgdGhpcy5mb3JtSW5zdGFuY2UpO1xuICAgIHRoaXMuZm9ybUluc3RhbmNlcy5zZXQodGhpcy5pZCwgdGhpcy5mb3JtSW5zdGFuY2UpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
