var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ValidationControllerFactory } from "aurelia-validation";
import { inject, bindable, InlineViewStrategy, customElement } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { SchemaFormLogger } from "../resources/logger";
import { FormController } from "./form-controller";
import { FormService } from "../services/form-service";
import { Guid } from "../resources/guid";
import { FormInstances } from "../services/form-instances";
let AuJsonSchemaForm = class AuJsonSchemaForm {
    constructor(validationControllerFactory, configuration, logger, formService, formInstances) {
        this.logger = logger;
        this.formService = formService;
        this.formInstances = formInstances;
        this.log = logger.info;
        this.validationController = validationControllerFactory.createForCurrentScope();
        this.validationController.addRenderer(configuration.validationRenderer);
        this.id = Guid.newGuid();
    }
    schemaChanged() {
        this.log("schemaChanged");
        this.buildForm();
    }
    formChanged() {
        this.log("formChanged");
        this.buildForm();
    }
    bind() {
        this.log("bind", arguments);
        this.buildForm();
    }
    buildForm() {
        if (this.schema.type !== "object" && this.schema.type !== "array") {
            this.logger.error("The schema must start with an object or an array");
            return;
        }
        if (this.formView) {
            this.formView = null;
        }
        this.log("buildForm", this.options);
        this.buildViewStrategy();
    }
    buildViewStrategy() {
        this.log("buildViewStrategy");
        this.form.$schema = this.schema;
        this.formView = new InlineViewStrategy(`<template>${this.formService.getSfTemplate("model", "form", this.schema.type, this.id)}</template>`);
        this.formInstance = {
            schema: this.schema,
            form: this.form,
            formController: new FormController(this.logger, this.options, this.validationController),
            validationController: this.validationController,
            formOptions: this.options
        };
        this.logger.warn("buildViewStrategy completed", this.formInstance);
        this.formInstances.set(this.id, this.formInstance);
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], AuJsonSchemaForm.prototype, "schema", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], AuJsonSchemaForm.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], AuJsonSchemaForm.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], AuJsonSchemaForm.prototype, "options", void 0);
AuJsonSchemaForm = __decorate([
    inject(ValidationControllerFactory, SchemaFormConfiguration, SchemaFormLogger, FormService, FormInstances),
    customElement("au-json-schema-form"),
    __metadata("design:paramtypes", [ValidationControllerFactory,
        SchemaFormConfiguration,
        SchemaFormLogger,
        FormService,
        FormInstances])
], AuJsonSchemaForm);
export { AuJsonSchemaForm };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFDbkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR25ELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFekMsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBVTNELElBQWEsZ0JBQWdCLEdBQTdCO0lBbUJFLFlBQ0UsMkJBQXdELEVBQ3hELGFBQXNDLEVBQzlCLE1BQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLGFBQTRCO1FBRjVCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRXBDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsMkJBQTJCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNoRixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNqRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFDO1lBQ3RFLE9BQU87U0FDUjtRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsaUJBQWlCO1FBQ2YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDaEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGtCQUFrQixDQUNwQyxhQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ2xCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTTtZQUNuQixJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7WUFDZixjQUFjLEVBQUUsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUN4RixvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CO1lBQy9DLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTztTQUMxQixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3JELENBQUM7Q0FDRixDQUFBO0FBekVXO0lBQVQsUUFBUTs7Z0RBQStCO0FBRTlCO0lBQVQsUUFBUTs7OENBQXFCO0FBRXBCO0lBQVQsUUFBUTs7K0NBQU87QUFFTjtJQUFULFFBQVE7O2lEQUF1QjtBQVByQixnQkFBZ0I7SUFSNUIsTUFBTSxDQUNMLDJCQUEyQixFQUMzQix1QkFBdUIsRUFDdkIsZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxhQUFhLENBQ2Q7SUFDQSxhQUFhLENBQUMscUJBQXFCLENBQUM7cUNBcUJKLDJCQUEyQjtRQUN6Qyx1QkFBdUI7UUFDdEIsZ0JBQWdCO1FBQ1gsV0FBVztRQUNULGFBQWE7R0F4QjNCLGdCQUFnQixDQTBFNUI7U0ExRVksZ0JBQWdCIiwiZmlsZSI6ImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCwgQ29udGFpbmVyIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuL2Zvcm0tY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9ndWlkXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tIFwiLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXNcIjtcclxuXHJcbkBpbmplY3QoXHJcbiAgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybVNlcnZpY2UsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KFwiYXUtanNvbi1zY2hlbWEtZm9ybVwiKVxyXG5leHBvcnQgY2xhc3MgQXVKc29uU2NoZW1hRm9ybSB7XHJcbiAgQGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uO1xyXG5cclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuXHJcbiAgQGJpbmRhYmxlIG1vZGVsO1xyXG5cclxuICBAYmluZGFibGUgb3B0aW9uczogSUZvcm1PcHRpb25zO1xyXG5cclxuICB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XHJcblxyXG4gIGZvcm1WaWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIGZvcm1JbnN0YW5jZTogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxyXG4gICAgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxvZyA9IGxvZ2dlci5pbmZvO1xyXG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcclxuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkUmVuZGVyZXIoY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpO1xyXG4gICAgdGhpcy5pZCA9IEd1aWQubmV3R3VpZCgpO1xyXG4gIH1cclxuXHJcbiAgc2NoZW1hQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMubG9nKFwic2NoZW1hQ2hhbmdlZFwiKTtcclxuICAgIHRoaXMuYnVpbGRGb3JtKCk7XHJcbiAgfVxyXG5cclxuICBmb3JtQ2hhbmdlZCgpIHtcclxuICAgIHRoaXMubG9nKFwiZm9ybUNoYW5nZWRcIik7XHJcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMubG9nKFwiYmluZFwiLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5idWlsZEZvcm0oKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkRm9ybSgpIHtcclxuICAgIGlmICh0aGlzLnNjaGVtYS50eXBlICE9PSBcIm9iamVjdFwiICYmIHRoaXMuc2NoZW1hLnR5cGUgIT09IFwiYXJyYXlcIikge1xyXG4gICAgICB0aGlzLmxvZ2dlci5lcnJvcihcIlRoZSBzY2hlbWEgbXVzdCBzdGFydCB3aXRoIGFuIG9iamVjdCBvciBhbiBhcnJheVwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuZm9ybVZpZXcpIHtcclxuICAgICAgdGhpcy5mb3JtVmlldyA9IG51bGw7XHJcbiAgICB9XHJcbiAgICB0aGlzLmxvZyhcImJ1aWxkRm9ybVwiLCB0aGlzLm9wdGlvbnMpO1xyXG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XHJcbiAgICB0aGlzLmxvZyhcImJ1aWxkVmlld1N0cmF0ZWd5XCIpO1xyXG4gICAgdGhpcy5mb3JtLiRzY2hlbWEgPSB0aGlzLnNjaGVtYTtcclxuICAgIHRoaXMuZm9ybVZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxyXG4gICAgICBgPHRlbXBsYXRlPiR7dGhpcy5mb3JtU2VydmljZS5nZXRTZlRlbXBsYXRlKFwibW9kZWxcIiwgXCJmb3JtXCIsIHRoaXMuc2NoZW1hLnR5cGUsIHRoaXMuaWQpfTwvdGVtcGxhdGU+YCk7XHJcbiAgICB0aGlzLmZvcm1JbnN0YW5jZSA9IHtcclxuICAgICAgc2NoZW1hOiB0aGlzLnNjaGVtYSxcclxuICAgICAgZm9ybTogdGhpcy5mb3JtLFxyXG4gICAgICBmb3JtQ29udHJvbGxlcjogbmV3IEZvcm1Db250cm9sbGVyKHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMsIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIpLFxyXG4gICAgICB2YWxpZGF0aW9uQ29udHJvbGxlcjogdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlcixcclxuICAgICAgZm9ybU9wdGlvbnM6IHRoaXMub3B0aW9uc1xyXG4gICAgfTtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJidWlsZFZpZXdTdHJhdGVneSBjb21wbGV0ZWRcIiwgdGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5mb3JtSW5zdGFuY2VzLnNldCh0aGlzLmlkLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
