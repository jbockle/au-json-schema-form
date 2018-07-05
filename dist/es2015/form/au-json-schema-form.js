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
let AuJsonSchemaForm = class AuJsonSchemaForm {
    constructor(validationControllerFactory, configuration, logger) {
        this.logger = logger;
        this.log = logger.info;
        this.validationController = validationControllerFactory.createForCurrentScope();
        this.validationController.addRenderer(configuration.validationRenderer);
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
            throw new Error("The schema must start with an object or array");
        }
        if (this.formView) {
            this.formView = null;
        }
        this.log("buildForm", this.options);
        this.buildViewStrategy();
    }
    buildViewStrategy() {
        this.log("buildViewStrategy");
        this.formView = new InlineViewStrategy(`<template><sf-${this.schema.type} form.bind="form" model.two-way="model" schema.bind="schema" /></template>`);
        this.formController = new FormController(this.logger, this.options, this.validationController);
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
    inject(ValidationControllerFactory, SchemaFormConfiguration, SchemaFormLogger),
    customElement("au-json-schema-form"),
    __metadata("design:paramtypes", [ValidationControllerFactory,
        SchemaFormConfiguration,
        SchemaFormLogger])
], AuJsonSchemaForm);
export { AuJsonSchemaForm };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFDbkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVW5ELElBQWEsZ0JBQWdCLEdBQTdCO0lBaUJFLFlBQ0UsMkJBQXdELEVBQ3hELGFBQXNDLEVBQzlCLE1BQXdCO1FBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBRWhDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsMkJBQTJCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNoRixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUMxQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsU0FBUztRQUNQLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUNqRSxNQUFNLElBQUksS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7U0FDbEU7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksa0JBQWtCLENBQ3BDLGlCQUFpQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksNEVBQTRFLENBQUMsQ0FBQztRQUNqSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksY0FBYyxDQUN0QyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDMUQsQ0FBQztDQUNGLENBQUE7QUEzRFc7SUFBVCxRQUFROztnREFBK0I7QUFFOUI7SUFBVCxRQUFROzs4Q0FBcUI7QUFFcEI7SUFBVCxRQUFROzsrQ0FBTztBQUVOO0lBQVQsUUFBUTs7aURBQXVCO0FBUHJCLGdCQUFnQjtJQU41QixNQUFNLENBQ0wsMkJBQTJCLEVBQzNCLHVCQUF1QixFQUN2QixnQkFBZ0IsQ0FDakI7SUFDQSxhQUFhLENBQUMscUJBQXFCLENBQUM7cUNBbUJKLDJCQUEyQjtRQUN6Qyx1QkFBdUI7UUFDdEIsZ0JBQWdCO0dBcEJ2QixnQkFBZ0IsQ0E0RDVCO1NBNURZLGdCQUFnQiIsImZpbGUiOiJmb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIFZhbGlkYXRpb25Db250cm9sbGVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5qZWN0LCBiaW5kYWJsZSwgSW5saW5lVmlld1N0cmF0ZWd5LCBjdXN0b21FbGVtZW50LCBDb250YWluZXIgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuL2Zvcm0tY29udHJvbGxlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcblxuQGluamVjdChcbiAgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgU2NoZW1hRm9ybUxvZ2dlclxuKVxuQGN1c3RvbUVsZW1lbnQoXCJhdS1qc29uLXNjaGVtYS1mb3JtXCIpXG5leHBvcnQgY2xhc3MgQXVKc29uU2NoZW1hRm9ybSB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcblxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcblxuICBAYmluZGFibGUgbW9kZWw7XG5cbiAgQGJpbmRhYmxlIG9wdGlvbnM6IElGb3JtT3B0aW9ucztcblxuICB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XG5cbiAgZm9ybVZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcblxuICBmb3JtQ29udHJvbGxlcjogRm9ybUNvbnRyb2xsZXI7XG5cbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICAgIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyXG4gICkge1xuICAgIHRoaXMubG9nID0gbG9nZ2VyLmluZm87XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZFJlbmRlcmVyKGNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKTtcbiAgfVxuXG4gIHNjaGVtYUNoYW5nZWQoKSB7XG4gICAgdGhpcy5sb2coXCJzY2hlbWFDaGFuZ2VkXCIpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBmb3JtQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmxvZyhcImZvcm1DaGFuZ2VkXCIpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMubG9nKFwiYmluZFwiLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBidWlsZEZvcm0oKSB7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgIT09IFwib2JqZWN0XCIgJiYgdGhpcy5zY2hlbWEudHlwZSAhPT0gXCJhcnJheVwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2NoZW1hIG11c3Qgc3RhcnQgd2l0aCBhbiBvYmplY3Qgb3IgYXJyYXlcIik7XG4gICAgfVxuICAgIGlmICh0aGlzLmZvcm1WaWV3KSB7XG4gICAgICB0aGlzLmZvcm1WaWV3ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5sb2coXCJidWlsZEZvcm1cIiwgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBidWlsZFZpZXdTdHJhdGVneSgpIHtcbiAgICB0aGlzLmxvZyhcImJ1aWxkVmlld1N0cmF0ZWd5XCIpO1xuICAgIHRoaXMuZm9ybVZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxuICAgICAgYDx0ZW1wbGF0ZT48c2YtJHt0aGlzLnNjaGVtYS50eXBlfSBmb3JtLmJpbmQ9XCJmb3JtXCIgbW9kZWwudHdvLXdheT1cIm1vZGVsXCIgc2NoZW1hLmJpbmQ9XCJzY2hlbWFcIiAvPjwvdGVtcGxhdGU+YCk7XG4gICAgdGhpcy5mb3JtQ29udHJvbGxlciA9IG5ldyBGb3JtQ29udHJvbGxlcihcbiAgICAgIHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMsIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
