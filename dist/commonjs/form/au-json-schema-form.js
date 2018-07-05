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
var AuJsonSchemaForm = /** @class */ (function () {
    function AuJsonSchemaForm(validationControllerFactory, configuration, logger) {
        this.logger = logger;
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
            throw new Error("The schema must start with an object or array");
        }
        if (this.formView) {
            this.formView = null;
        }
        this.log("buildForm", this.options);
        this.buildViewStrategy();
    };
    AuJsonSchemaForm.prototype.buildViewStrategy = function () {
        this.log("buildViewStrategy");
        this.formView = new aurelia_framework_1.InlineViewStrategy("<template><sf-" + this.schema.type + " form.bind=\"form\" model.two-way=\"model\" schema.bind=\"schema\" /></template>");
        this.formController = new form_controller_1.FormController(this.logger, this.options, this.validationController);
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
exports.AuJsonSchemaForm = AuJsonSchemaForm;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlEQUF1RjtBQUN2Rix1REFBbUc7QUFDbkcsbUZBQWdGO0FBRWhGLDhDQUF1RDtBQUN2RCxxREFBbUQ7QUFVbkQ7SUFpQkUsMEJBQ0UsMkJBQXdELEVBQ3hELGFBQXNDLEVBQzlCLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBRWhDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsMkJBQTJCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNoRixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCx3Q0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHNDQUFXLEdBQVg7UUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNqRSxNQUFNLElBQUksS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7U0FDbEU7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksc0NBQWtCLENBQ3BDLG1CQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUkscUZBQTRFLENBQUMsQ0FBQztRQUNqSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksZ0NBQWMsQ0FDdEMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO0lBQzFELENBQUM7SUExRFM7UUFBVCw0QkFBUTs7b0RBQStCO0lBRTlCO1FBQVQsNEJBQVE7O2tEQUFxQjtJQUVwQjtRQUFULDRCQUFROzttREFBTztJQUVOO1FBQVQsNEJBQVE7O3FEQUF1QjtJQVByQixnQkFBZ0I7UUFONUIsMEJBQU0sQ0FDTCxnREFBMkIsRUFDM0IsbURBQXVCLEVBQ3ZCLHlCQUFnQixDQUNqQjtRQUNBLGlDQUFhLENBQUMscUJBQXFCLENBQUM7eUNBbUJKLGdEQUEyQjtZQUN6QyxtREFBdUI7WUFDdEIseUJBQWdCO09BcEJ2QixnQkFBZ0IsQ0E0RDVCO0lBQUQsdUJBQUM7Q0E1REQsQUE0REMsSUFBQTtBQTVEWSw0Q0FBZ0IiLCJmaWxlIjoiZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCwgQ29udGFpbmVyIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb3JtLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5cbkBpbmplY3QoXG4gIFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIFNjaGVtYUZvcm1Mb2dnZXJcbilcbkBjdXN0b21FbGVtZW50KFwiYXUtanNvbi1zY2hlbWEtZm9ybVwiKVxuZXhwb3J0IGNsYXNzIEF1SnNvblNjaGVtYUZvcm0ge1xuICBAYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb247XG5cbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG5cbiAgQGJpbmRhYmxlIG1vZGVsO1xuXG4gIEBiaW5kYWJsZSBvcHRpb25zOiBJRm9ybU9wdGlvbnM7XG5cbiAgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gIGZvcm1WaWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgZm9ybUNvbnRyb2xsZXI6IEZvcm1Db250cm9sbGVyO1xuXG4gIHByaXZhdGUgbG9nOiAobWVzc2FnZTogc3RyaW5nLCAuLi5yZXN0OiBhbnlbXSkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3Rvcnk6IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgICBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxuICApIHtcbiAgICB0aGlzLmxvZyA9IGxvZ2dlci5pbmZvO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnkuY3JlYXRlRm9yQ3VycmVudFNjb3BlKCk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRSZW5kZXJlcihjb25maWd1cmF0aW9uLnZhbGlkYXRpb25SZW5kZXJlcik7XG4gIH1cblxuICBzY2hlbWFDaGFuZ2VkKCkge1xuICAgIHRoaXMubG9nKFwic2NoZW1hQ2hhbmdlZFwiKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgZm9ybUNoYW5nZWQoKSB7XG4gICAgdGhpcy5sb2coXCJmb3JtQ2hhbmdlZFwiKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZyhcImJpbmRcIiwgYXJndW1lbnRzKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgYnVpbGRGb3JtKCkge1xuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlICE9PSBcIm9iamVjdFwiICYmIHRoaXMuc2NoZW1hLnR5cGUgIT09IFwiYXJyYXlcIikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHNjaGVtYSBtdXN0IHN0YXJ0IHdpdGggYW4gb2JqZWN0IG9yIGFycmF5XCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtVmlldykge1xuICAgICAgdGhpcy5mb3JtVmlldyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubG9nKFwiYnVpbGRGb3JtXCIsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XG4gICAgdGhpcy5sb2coXCJidWlsZFZpZXdTdHJhdGVneVwiKTtcbiAgICB0aGlzLmZvcm1WaWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShcbiAgICAgIGA8dGVtcGxhdGU+PHNmLSR7dGhpcy5zY2hlbWEudHlwZX0gZm9ybS5iaW5kPVwiZm9ybVwiIG1vZGVsLnR3by13YXk9XCJtb2RlbFwiIHNjaGVtYS5iaW5kPVwic2NoZW1hXCIgLz48L3RlbXBsYXRlPmApO1xuICAgIHRoaXMuZm9ybUNvbnRyb2xsZXIgPSBuZXcgRm9ybUNvbnRyb2xsZXIoXG4gICAgICB0aGlzLmxvZ2dlciwgdGhpcy5vcHRpb25zLCB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
