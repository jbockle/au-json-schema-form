var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ValidationControllerFactory, ValidationRules } from "aurelia-validation";
import { inject, bindable, InlineViewStrategy, customElement } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
let AuJsonSchemaForm = class AuJsonSchemaForm {
    constructor(vcf, globalOptions) {
        this.globalOptions = globalOptions;
        this.loaded = false;
        this.controller = vcf.createForCurrentScope();
        this.controller.addRenderer(globalOptions.validationRenderer);
        ValidationRules
            .customRule("minimum", (val, obj, min) => val !== undefined ? val >= min : true, "${$displayName} must be greater than ${$config.min}", (min) => ({ min }));
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
    inject(ValidationControllerFactory, SchemaFormConfiguration),
    customElement("au-json-schema-form"),
    __metadata("design:paramtypes", [ValidationControllerFactory, SchemaFormConfiguration])
], AuJsonSchemaForm);
export { AuJsonSchemaForm };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsMkJBQTJCLEVBQXdCLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3hHLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLGtCQUFrQixFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3hGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBSWhGLElBQWEsZ0JBQWdCLEdBQTdCO0lBZUUsWUFBWSxHQUFnQyxFQUFVLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUY1RixXQUFNLEdBQVksS0FBSyxDQUFDO1FBR3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLHFCQUFxQixFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFOUQsZUFBZTthQUNaLFVBQVUsQ0FDVCxTQUFTLEVBQ1QsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUN4RCxxREFBcUQsRUFDckQsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUNuQixDQUFDO0lBQ04sQ0FBQztJQUVELElBQUk7UUFDRixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELGlCQUFpQjtRQUNmLElBQUks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VCxRQUFROztnREFBYTtBQUVaO0lBQVQsUUFBUTs7OENBQU07QUFFTDtJQUFULFFBQVE7OytDQUFPO0FBRU47SUFBVCxRQUFROztpREFBYztBQVBaLGdCQUFnQjtJQUY1QixNQUFNLENBQUMsMkJBQTJCLEVBQUUsdUJBQXVCLENBQUM7SUFDNUQsYUFBYSxDQUFDLHFCQUFxQixDQUFDO3FDQWdCbEIsMkJBQTJCLEVBQXlCLHVCQUF1QjtHQWZqRixnQkFBZ0IsQ0EyRzVCO1NBM0dZLGdCQUFnQiIsImZpbGUiOiJmb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIFZhbGlkYXRpb25Db250cm9sbGVyLCBWYWxpZGF0aW9uUnVsZXMgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlLCBJbmxpbmVWaWV3U3RyYXRlZ3ksIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcblxuQGluamVjdChWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuQGN1c3RvbUVsZW1lbnQoXCJhdS1qc29uLXNjaGVtYS1mb3JtXCIpXG5leHBvcnQgY2xhc3MgQXVKc29uU2NoZW1hRm9ybSB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcblxuICBAYmluZGFibGUgZm9ybTtcblxuICBAYmluZGFibGUgbW9kZWw7XG5cbiAgQGJpbmRhYmxlIG9wdGlvbnM6IGFueTtcblxuICBjb250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICB2aWV3U3RyYXRlZ3k6IElubGluZVZpZXdTdHJhdGVneTtcblxuICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih2Y2Y6IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgcHJpdmF0ZSBnbG9iYWxPcHRpb25zOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuY29udHJvbGxlciA9IHZjZi5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWRkUmVuZGVyZXIoZ2xvYmFsT3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIpO1xuXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJtaW5pbXVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbWluKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA+PSBtaW4gOiB0cnVlLFxuICAgICAgICBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAkeyRjb25maWcubWlufVwiLFxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcbiAgICAgICk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIHNjaGVtYUNoYW5nZWQoKSB7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgZm9ybUNoYW5nZWQoKSB7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XG4gICAgbGV0IHZpZXdTdHJhdGVneSA9IFwiXCI7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybSk7XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHN3aXRjaCAoa2V5WzBdKSB7XG4gICAgICAgIGNhc2UgXCJAXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIkXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFNjaGVtYVRlbXBsYXRlKGtleSwgdGhpcy5mb3JtW2tleV0pO1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZSkgeyB2aWV3U3RyYXRlZ3kgKz0gdGVtcGxhdGU7IH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnZpZXdTdHJhdGVneSA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke3ZpZXdTdHJhdGVneX08L3RlbXBsYXRlPmApO1xuICB9XG5cbiAgZ2V0U2NoZW1hVGVtcGxhdGUoa2V5OiBzdHJpbmcsIGZvcm06IGFueSwgcGFydDogYW55ID0gdGhpcy5zY2hlbWEpIHtcbiAgICBsZXQgdGVtcGxhdGU6IHN0cmluZztcbiAgICBjb25zdCBzY2hlbWEgPSBwYXJ0LnByb3BlcnRpZXNba2V5XTtcbiAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHRlbXBsYXRlID0gYDxzZi1udW1iZXJcbiAgICAgICAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2tleX1cIlxuICAgICAgICBtb2RlbC50d28td2F5PVwibW9kZWwuJHtrZXl9XCJcbiAgICAgICAgdGl0bGU9XCIke2Zvcm0uJHRpdGxlIHx8IHNjaGVtYS50aXRsZSB8fCB0aGlzLnRvVGl0bGUoa2V5KX1cIlxuICAgICAgICByZXF1aXJlZC5iaW5kPVwiJHt0aGlzLmlzUmVxdWlyZWQoa2V5LCBwYXJ0KX1cIj48L3NmLW51bWJlcj5cXHJcXG5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgdGVtcGxhdGUgPSBgPHNmLXRleHRcbiAgICAgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtrZXl9XCJcbiAgICAgIG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2tleX1cIlxuICAgICAgdGl0bGU9XCIke2Zvcm0uJHRpdGxlIHx8IHNjaGVtYS50aXRsZSB8fCB0aGlzLnRvVGl0bGUoa2V5KX1cIlxuICAgICAgcmVxdWlyZWQuYmluZD1cIiR7dGhpcy5pc1JlcXVpcmVkKGtleSwgcGFydCl9XCI+PC9zZi10ZXh0PlxcclxcbmA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHRUZW1wbGF0ZSh4dHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgZm9ybTogYW55LCBzY2hlbWE6IGFueSwgcGFydDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpc1JlcXVpcmVkKGtleTogc3RyaW5nLCBwYXJ0OiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgcmVxdWlyZWQgPSBmYWxzZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJ0LnJlcXVpcmVkKSkge1xuICAgICAgcmVxdWlyZWQgPSBwYXJ0LnJlcXVpcmVkXG4gICAgICAgIC5zb21lKCh4KSA9PiB4ID09PSBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWlyZWQ7XG4gIH1cblxuICB0b1RpdGxlKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIGtleVxuICAgICAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKVxuICAgICAgICAucmVwbGFjZSgvXi4vLCAoc3RyKSA9PiBzdHIudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMpIHsgcmV0dXJuOyB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
