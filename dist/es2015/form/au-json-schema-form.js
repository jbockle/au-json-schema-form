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
import { RulesFactory } from "../rules/rules-factory";
let AuJsonSchemaForm = class AuJsonSchemaForm {
    constructor(validationControllerFactory, configuration, rulesFactory) {
        this.loaded = false;
        this.controller = validationControllerFactory.createForCurrentScope();
        this.controller.addRenderer(configuration.validationRenderer);
        rulesFactory.register();
    }
    bind() {
        this.buildViewStrategy();
    }
    schemaChanged() {
        this.buildViewStrategy();
    }
    formChanged() {
        this.buildViewStrategy();
    }
    buildViewStrategy() {
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
        this.viewStrategy = new InlineViewStrategy(`<template>${viewStrategy}</template>`);
    }
    getSchemaTemplate(key, form, part = this.schema) {
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
    getDefaultTemplate(xtype, key, form, schema, part) {
        return;
    }
    isRequired(key, part) {
        let required = false;
        if (Array.isArray(part.required)) {
            required = part.required
                .some((x) => x === key);
        }
        return required;
    }
    toTitle(key) {
        if (key) {
            return key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());
        }
    }
    attached() {
        if (!this.options) {
            return;
        }
        if (this.options.validateOnRender) {
            this.controller.validate();
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
    inject(ValidationControllerFactory, SchemaFormConfiguration, RulesFactory),
    customElement("au-json-schema-form"),
    __metadata("design:paramtypes", [ValidationControllerFactory,
        SchemaFormConfiguration,
        RulesFactory])
], AuJsonSchemaForm);
export { AuJsonSchemaForm };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQXlDLE1BQU0sb0JBQW9CLENBQUM7QUFDeEcsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsa0JBQWtCLEVBQUUsYUFBYSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDeEYsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBUXRELElBQWEsZ0JBQWdCLEdBQTdCO0lBZUUsWUFDRSwyQkFBd0QsRUFDeEQsYUFBc0MsRUFDdEMsWUFBMEI7UUFMNUIsV0FBTSxHQUFZLEtBQUssQ0FBQztRQU90QixJQUFJLENBQUMsVUFBVSxHQUFHLDJCQUEyQixDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDdEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUQsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQ25CLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNk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QWlCSiwyQkFBMkI7UUFDekMsdUJBQXVCO1FBQ3hCLFlBQVk7R0FsQmpCLGdCQUFnQixDQXdHNUI7U0F4R1ksZ0JBQWdCIiwiZmlsZSI6ImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIsIFZhbGlkYXRpb25SdWxlcyB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcblxuQGluamVjdChcbiAgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgUnVsZXNGYWN0b3J5XG4pXG5AY3VzdG9tRWxlbWVudChcImF1LWpzb24tc2NoZW1hLWZvcm1cIilcbmV4cG9ydCBjbGFzcyBBdUpzb25TY2hlbWFGb3JtIHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogYW55O1xuXG4gIEBiaW5kYWJsZSBmb3JtO1xuXG4gIEBiaW5kYWJsZSBtb2RlbDtcblxuICBAYmluZGFibGUgb3B0aW9uczogYW55O1xuXG4gIGNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gIHZpZXdTdHJhdGVneTogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICAgIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHJ1bGVzRmFjdG9yeTogUnVsZXNGYWN0b3J5XG4gICkge1xuICAgIHRoaXMuY29udHJvbGxlciA9IHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWRkUmVuZGVyZXIoY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpO1xuICAgIHJ1bGVzRmFjdG9yeS5yZWdpc3RlcigpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBzY2hlbWFDaGFuZ2VkKCkge1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGZvcm1DaGFuZ2VkKCkge1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGJ1aWxkVmlld1N0cmF0ZWd5KCkge1xuICAgIGxldCB2aWV3U3RyYXRlZ3kgPSBcIlwiO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZvcm0pO1xuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBzd2l0Y2ggKGtleVswXSkge1xuICAgICAgICBjYXNlIFwiQFwiOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiJFwiOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5nZXRTY2hlbWFUZW1wbGF0ZShrZXksIHRoaXMuZm9ybVtrZXldKTtcbiAgICAgICAgICBpZiAodGVtcGxhdGUpIHsgdmlld1N0cmF0ZWd5ICs9IHRlbXBsYXRlOyB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy52aWV3U3RyYXRlZ3kgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt2aWV3U3RyYXRlZ3l9PC90ZW1wbGF0ZT5gKTtcbiAgfVxuXG4gIGdldFNjaGVtYVRlbXBsYXRlKGtleTogc3RyaW5nLCBmb3JtOiBhbnksIHBhcnQ6IGFueSA9IHRoaXMuc2NoZW1hKSB7XG4gICAgbGV0IHRlbXBsYXRlOiBzdHJpbmc7XG4gICAgY29uc3Qgc2NoZW1hID0gcGFydC5wcm9wZXJ0aWVzW2tleV07XG4gICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICB0ZW1wbGF0ZSA9IGA8c2YtbnVtYmVyXG4gICAgICAgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtrZXl9XCJcbiAgICAgICAgbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7a2V5fVwiXG4gICAgICAgIHRpdGxlPVwiJHtmb3JtLiR0aXRsZSB8fCBzY2hlbWEudGl0bGUgfHwgdGhpcy50b1RpdGxlKGtleSl9XCJcbiAgICAgICAgcmVxdWlyZWQuYmluZD1cIiR7dGhpcy5pc1JlcXVpcmVkKGtleSwgcGFydCl9XCI+PC9zZi1udW1iZXI+XFxyXFxuYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgIHRlbXBsYXRlID0gYDxzZi10ZXh0XG4gICAgICBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7a2V5fVwiXG4gICAgICBtb2RlbC50d28td2F5PVwibW9kZWwuJHtrZXl9XCJcbiAgICAgIHRpdGxlPVwiJHtmb3JtLiR0aXRsZSB8fCBzY2hlbWEudGl0bGUgfHwgdGhpcy50b1RpdGxlKGtleSl9XCJcbiAgICAgIHJlcXVpcmVkLmJpbmQ9XCIke3RoaXMuaXNSZXF1aXJlZChrZXksIHBhcnQpfVwiPjwvc2YtdGV4dD5cXHJcXG5gO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0VGVtcGxhdGUoeHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIGZvcm06IGFueSwgc2NoZW1hOiBhbnksIHBhcnQ6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXNSZXF1aXJlZChrZXk6IHN0cmluZywgcGFydDogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IHJlcXVpcmVkID0gZmFsc2U7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFydC5yZXF1aXJlZCkpIHtcbiAgICAgIHJlcXVpcmVkID0gcGFydC5yZXF1aXJlZFxuICAgICAgICAuc29tZSgoeCkgPT4geCA9PT0ga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVpcmVkO1xuICB9XG5cbiAgdG9UaXRsZShrZXk6IHN0cmluZykge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXlcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKHN0cikgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zKSB7IHJldHVybjsgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xuICAgICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
