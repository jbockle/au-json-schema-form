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
import { FormObjectController } from "./form-object-controller";
let AuJsonSchemaForm = class AuJsonSchemaForm {
    constructor(validationControllerFactory, configuration, logger) {
        this.logger = logger;
        this.log = logger.info;
        this.validationController = validationControllerFactory.createForCurrentScope();
        this.validationController.addRenderer(configuration.validationRenderer);
    }
    bind() {
        this.log("bind", arguments);
        this.buildForm();
    }
    schemaChanged() {
        this.log("schemaChanged", arguments);
        this.buildForm();
    }
    formChanged() {
        this.log("formChanged", arguments);
        this.buildForm();
    }
    buildForm() {
        if (this.formView) {
            this.formView = null;
        }
        this.log("buildForm", this.options);
        this.buildViewStrategy();
    }
    buildViewStrategy() {
        this.log("buildViewStrategy");
        let viewStrategy = "";
        const keys = Object.keys(this.form);
        keys.forEach((key) => {
            switch (key[0]) {
                case "@":
                    break;
                case "$":
                    break;
                default:
                    const template = this.getSchemaTemplate(key, this.form[key]);
                    if (template) {
                        viewStrategy += template;
                    }
                    break;
            }
        });
        this.formView = new InlineViewStrategy(`<template>${viewStrategy}</template>`);
        this.formController = new FormObjectController(this.logger, this.options, this.validationController);
    }
    getSchemaTemplate(key, form, part = this.schema) {
        this.log("getSchemaTemplate", arguments);
        let template;
        const schema = part.properties[key];
        switch (schema.type) {
            case "number":
                template = `<sf-number
        schema.bind="schema.properties.${key}"
        model.two-way="model.${key}"
        title="${form.$title || schema.title || this.toTitle(key)}"
        required.bind="${this.isRequired(key, part)}"></sf-number>\r\n`;
                break;
            case "string":
                template = `<sf-text
      schema.bind="schema.properties.${key}"
      model.two-way="model.${key}"
      title="${form.$title || schema.title || this.toTitle(key)}"
      required.bind="${this.isRequired(key, part)}"></sf-text>\r\n`;
                break;
        }
        return template;
    }
    isRequired(key, part) {
        this.log("isRequired", arguments);
        let required = false;
        if (Array.isArray(part.required)) {
            required = part.required
                .some((x) => x === key);
        }
        return required;
    }
    toTitle(key) {
        this.log("toTitle", arguments);
        if (key) {
            return key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());
        }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQXdCLE1BQU0sb0JBQW9CLENBQUM7QUFDdkYsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFhLE1BQU0sbUJBQW1CLENBQUM7QUFDbkcsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFaEYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFRaEUsSUFBYSxnQkFBZ0IsR0FBN0I7SUFpQkUsWUFDRSwyQkFBd0QsRUFDeEQsYUFBc0MsRUFDOUIsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFFaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsR0FBRywyQkFBMkIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ2hGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDMUUsQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5QixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ25CLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNkLEtBQUssR0FBRztvQkFDTixNQUFNO2dCQUNSLEtBQUssR0FBRztvQkFDTixNQUFNO2dCQUNSO29CQUNFLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxJQUFJLFFBQVEsRUFBRTt3QkFBRSxZQUFZLElBQUksUUFBUSxDQUFDO3FCQUFFO29CQUMzQyxNQUFNO2FBQ1Q7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxhQUFhLFlBQVksYUFBYSxDQUFDLENBQUM7UUFDL0UsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN2RyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsR0FBVyxFQUFFLElBQVMsRUFBRSxPQUFZLElBQUksQ0FBQyxNQUFNO1FBQy9ELElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDekMsSUFBSSxRQUFnQixDQUFDO1FBQ3JCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDcEMsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ25CLEtBQUssUUFBUTtnQkFDWCxRQUFRLEdBQUc7eUNBQ3NCLEdBQUc7K0JBQ2IsR0FBRztpQkFDakIsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO3lCQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUM7Z0JBQ2hFLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsUUFBUSxHQUFHO3VDQUNvQixHQUFHOzZCQUNiLEdBQUc7ZUFDakIsSUFBSSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDO3VCQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUM7Z0JBQzVELE1BQU07U0FDVDtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBVyxFQUFFLElBQVM7UUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEMsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3JCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDaEMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRO2lCQUNyQixJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sUUFBUSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxPQUFPLENBQUMsR0FBVztRQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQixJQUFJLEdBQUcsRUFBRTtZQUNQLE9BQU8sR0FBRztpQkFDUCxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztpQkFDMUIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0NBQ0YsQ0FBQTtBQTlHVztJQUFULFFBQVE7O2dEQUFhO0FBRVo7SUFBVCxRQUFROzs4Q0FBTTtBQUVMO0lBQVQsUUFBUTs7K0NBQU87QUFFTjtJQUFULFFBQVE7O2lEQUF1QjtBQVByQixnQkFBZ0I7SUFONUIsTUFBTSxDQUNMLDJCQUEyQixFQUMzQix1QkFBdUIsRUFDdkIsZ0JBQWdCLENBQ2pCO0lBQ0EsYUFBYSxDQUFDLHFCQUFxQixDQUFDO3FDQW1CSiwyQkFBMkI7UUFDekMsdUJBQXVCO1FBQ3RCLGdCQUFnQjtHQXBCdkIsZ0JBQWdCLENBK0c1QjtTQS9HWSxnQkFBZ0IiLCJmaWxlIjoiZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCwgQ29udGFpbmVyIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgRm9ybU9iamVjdENvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb3JtLW9iamVjdC1jb250cm9sbGVyXCI7XG5cbkBpbmplY3QoXG4gIFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIFNjaGVtYUZvcm1Mb2dnZXJcbilcbkBjdXN0b21FbGVtZW50KFwiYXUtanNvbi1zY2hlbWEtZm9ybVwiKVxuZXhwb3J0IGNsYXNzIEF1SnNvblNjaGVtYUZvcm0ge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG5cbiAgQGJpbmRhYmxlIGZvcm07XG5cbiAgQGJpbmRhYmxlIG1vZGVsO1xuXG4gIEBiaW5kYWJsZSBvcHRpb25zOiBJRm9ybU9wdGlvbnM7XG5cbiAgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gIGZvcm1WaWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgZm9ybUNvbnRyb2xsZXI6IEZvcm1PYmplY3RDb250cm9sbGVyO1xuXG4gIHByaXZhdGUgbG9nOiAobWVzc2FnZTogc3RyaW5nLCAuLi5yZXN0OiBhbnlbXSkgPT4gdm9pZDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3Rvcnk6IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgICBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxuICApIHtcbiAgICB0aGlzLmxvZyA9IGxvZ2dlci5pbmZvO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnkuY3JlYXRlRm9yQ3VycmVudFNjb3BlKCk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRSZW5kZXJlcihjb25maWd1cmF0aW9uLnZhbGlkYXRpb25SZW5kZXJlcik7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMubG9nKFwiYmluZFwiLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBzY2hlbWFDaGFuZ2VkKCkge1xuICAgIHRoaXMubG9nKFwic2NoZW1hQ2hhbmdlZFwiLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBmb3JtQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmxvZyhcImZvcm1DaGFuZ2VkXCIsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgfVxuXG4gIGJ1aWxkRm9ybSgpIHtcbiAgICBpZiAodGhpcy5mb3JtVmlldykge1xuICAgICAgdGhpcy5mb3JtVmlldyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubG9nKFwiYnVpbGRGb3JtXCIsIHRoaXMub3B0aW9ucyk7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XG4gICAgdGhpcy5sb2coXCJidWlsZFZpZXdTdHJhdGVneVwiKTtcbiAgICBsZXQgdmlld1N0cmF0ZWd5ID0gXCJcIjtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5mb3JtKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgc3dpdGNoIChrZXlbMF0pIHtcbiAgICAgICAgY2FzZSBcIkBcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIiRcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0U2NoZW1hVGVtcGxhdGUoa2V5LCB0aGlzLmZvcm1ba2V5XSk7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7IHZpZXdTdHJhdGVneSArPSB0ZW1wbGF0ZTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZm9ybVZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt2aWV3U3RyYXRlZ3l9PC90ZW1wbGF0ZT5gKTtcbiAgICB0aGlzLmZvcm1Db250cm9sbGVyID0gbmV3IEZvcm1PYmplY3RDb250cm9sbGVyKHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMsIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIpO1xuICB9XG5cbiAgZ2V0U2NoZW1hVGVtcGxhdGUoa2V5OiBzdHJpbmcsIGZvcm06IGFueSwgcGFydDogYW55ID0gdGhpcy5zY2hlbWEpIHtcbiAgICB0aGlzLmxvZyhcImdldFNjaGVtYVRlbXBsYXRlXCIsIGFyZ3VtZW50cyk7XG4gICAgbGV0IHRlbXBsYXRlOiBzdHJpbmc7XG4gICAgY29uc3Qgc2NoZW1hID0gcGFydC5wcm9wZXJ0aWVzW2tleV07XG4gICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICB0ZW1wbGF0ZSA9IGA8c2YtbnVtYmVyXG4gICAgICAgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtrZXl9XCJcbiAgICAgICAgbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7a2V5fVwiXG4gICAgICAgIHRpdGxlPVwiJHtmb3JtLiR0aXRsZSB8fCBzY2hlbWEudGl0bGUgfHwgdGhpcy50b1RpdGxlKGtleSl9XCJcbiAgICAgICAgcmVxdWlyZWQuYmluZD1cIiR7dGhpcy5pc1JlcXVpcmVkKGtleSwgcGFydCl9XCI+PC9zZi1udW1iZXI+XFxyXFxuYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgIHRlbXBsYXRlID0gYDxzZi10ZXh0XG4gICAgICBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7a2V5fVwiXG4gICAgICBtb2RlbC50d28td2F5PVwibW9kZWwuJHtrZXl9XCJcbiAgICAgIHRpdGxlPVwiJHtmb3JtLiR0aXRsZSB8fCBzY2hlbWEudGl0bGUgfHwgdGhpcy50b1RpdGxlKGtleSl9XCJcbiAgICAgIHJlcXVpcmVkLmJpbmQ9XCIke3RoaXMuaXNSZXF1aXJlZChrZXksIHBhcnQpfVwiPjwvc2YtdGV4dD5cXHJcXG5gO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgaXNSZXF1aXJlZChrZXk6IHN0cmluZywgcGFydDogYW55KTogYm9vbGVhbiB7XG4gICAgdGhpcy5sb2coXCJpc1JlcXVpcmVkXCIsIGFyZ3VtZW50cyk7XG4gICAgbGV0IHJlcXVpcmVkID0gZmFsc2U7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFydC5yZXF1aXJlZCkpIHtcbiAgICAgIHJlcXVpcmVkID0gcGFydC5yZXF1aXJlZFxuICAgICAgICAuc29tZSgoeCkgPT4geCA9PT0ga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVpcmVkO1xuICB9XG5cbiAgdG9UaXRsZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMubG9nKFwidG9UaXRsZVwiLCBhcmd1bWVudHMpO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXlcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKHN0cikgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
