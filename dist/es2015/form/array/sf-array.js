var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, bindable, inject, InlineViewStrategy, Optional } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { FormService } from "../../services/form-service";
import { Validator, ValidationController } from "aurelia-validation";
import { EventAggregator } from "aurelia-event-aggregator";
import { ArrayRules } from "../../rules/array-rules";
let SfArray = class SfArray {
    constructor(arrayRules, configuration, formService, logger, validator) {
        this.arrayRules = arrayRules;
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.validator = validator;
        this.id = Guid.newGuid();
        this.kind = "array";
    }
    created(owningView, myView) {
        this.validationController = myView.container.get(Optional.of(ValidationController));
    }
    bind() {
        this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
        this.bindRules();
        this.createView();
        this.determineViewStrategy();
    }
    determineViewStrategy() {
        let strategy;
        if (this.form.$altTemplate) {
            strategy = this.form.$altTemplate;
        }
        else if (this.schema.items.type === "string" && this.schema.items.enum) {
            strategy = this.configuration.templates.arrayStringEnum;
        }
        else {
            strategy = this.configuration.templates.array;
        }
        this.viewStrategy = strategy;
    }
    createView() {
        let template = this.formService.buildArrayForm(this.schema, this.form, this.key, this.model);
        template = `<template>${template}</template>`;
        this.view = new InlineViewStrategy(template);
    }
    bindRules() {
        this.arrayRules.bind(this);
        this.validationController.addObject(this.model);
    }
    getFormController(overrideContext) {
        return overrideContext.__parentOverrideContext.bindingContext;
    }
    validate() {
        this.validationController.validate({ object: this.model });
    }
    add() {
        this.model.push(this.formService.getArrayItemDefault(this.schema, null));
        this.validationController.validate({ object: this.model });
        if (this.configuration.validationRenderer) {
            this.logger.warn("validating");
            this.validationController.validate();
        }
    }
    remove(index) {
        this.model.splice(index, 1);
        this.validationController.validate({ object: this.model });
    }
    get isDisabled() {
        return this.form.$arraySchema.readOnly || !!this.form.$arraySchema.const;
    }
    get atCapacity() {
        return Number.isInteger(this.form.$arraySchema.maxItems)
            ? this.model.length >= this.form.$arraySchema.maxItems : false;
    }
    get atMinimumCapacity() {
        return Number.isInteger(this.form.$arraySchema.minItems)
            ? this.model.length === this.form.$arraySchema.minItems : false;
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfArray.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfArray.prototype, "key", void 0);
__decorate([
    bindable,
    __metadata("design:type", Array)
], SfArray.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfArray.prototype, "schema", void 0);
SfArray = __decorate([
    inject(ArrayRules, SchemaFormConfiguration, FormService, SchemaFormLogger, Validator, EventAggregator),
    customElement("sf-array"),
    __metadata("design:paramtypes", [ArrayRules,
        SchemaFormConfiguration,
        FormService,
        SchemaFormLogger,
        Validator])
], SfArray);
export { SfArray };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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cnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3ksIFZpZXcsIE9wdGlvbmFsIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBWYWxpZGF0ZVJlc3VsdCwgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tIFwiYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yXCI7XG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSBcIi4uLy4uL3J1bGVzL2FycmF5LXJ1bGVzXCI7XG5cbkBpbmplY3QoXG4gIEFycmF5UnVsZXMsXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBGb3JtU2VydmljZSxcbiAgU2NoZW1hRm9ybUxvZ2dlcixcbiAgVmFsaWRhdG9yLFxuICBFdmVudEFnZ3JlZ2F0b3JcbilcbkBjdXN0b21FbGVtZW50KFwic2YtYXJyYXlcIilcbmV4cG9ydCBjbGFzcyBTZkFycmF5IHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBrZXk6IHN0cmluZztcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcbiAgQGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb247XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcImFycmF5XCI7XG5cbiAgdmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIHZpZXdTdHJhdGVneTogc3RyaW5nO1xuXG4gIHJlc3VsdHM6IFZhbGlkYXRlUmVzdWx0W107XG4gIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXJyYXlSdWxlczogQXJyYXlSdWxlcyxcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwdWJsaWMgdmFsaWRhdG9yOiBWYWxpZGF0b3JcbiAgKSB7XG5cbiAgfVxuXG4gIGNyZWF0ZWQob3duaW5nVmlldzogVmlldywgbXlWaWV3OiBWaWV3KSB7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IG15Vmlldy5jb250YWluZXIuZ2V0KE9wdGlvbmFsLm9mKFZhbGlkYXRpb25Db250cm9sbGVyKSk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1hcnJheVwiLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwsIHNjaGVtYTogdGhpcy5zY2hlbWEuaXRlbXMgfSwgYXJndW1lbnRzKTtcbiAgICB0aGlzLmJpbmRSdWxlcygpO1xuICAgIHRoaXMuY3JlYXRlVmlldygpO1xuICAgIHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBkZXRlcm1pbmVWaWV3U3RyYXRlZ3koKSB7XG4gICAgbGV0IHN0cmF0ZWd5O1xuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS5pdGVtcy50eXBlID09PSBcInN0cmluZ1wiICYmIHRoaXMuc2NoZW1hLml0ZW1zLmVudW0pIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheVN0cmluZ0VudW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheTtcbiAgICB9XG4gICAgdGhpcy52aWV3U3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVmlldygpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmZvcm1TZXJ2aWNlLmJ1aWxkQXJyYXlGb3JtKHRoaXMuc2NoZW1hLCB0aGlzLmZvcm0sIHRoaXMua2V5LCB0aGlzLm1vZGVsKTtcbiAgICB0ZW1wbGF0ZSA9IGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZX08L3RlbXBsYXRlPmA7XG4gICAgdGhpcy52aWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneSh0ZW1wbGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGJpbmRSdWxlcygpIHtcbiAgICB0aGlzLmFycmF5UnVsZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZE9iamVjdCh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIGdldEZvcm1Db250cm9sbGVyKG92ZXJyaWRlQ29udGV4dDogYW55KSB7XG4gICAgcmV0dXJuIG92ZXJyaWRlQ29udGV4dC5fX3BhcmVudE92ZXJyaWRlQ29udGV4dC5iaW5kaW5nQ29udGV4dDtcbiAgfVxuXG4gIHZhbGlkYXRlKCkge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5tb2RlbC5wdXNoKHRoaXMuZm9ybVNlcnZpY2UuZ2V0QXJyYXlJdGVtRGVmYXVsdCh0aGlzLnNjaGVtYSwgbnVsbCkpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oXCJ2YWxpZGF0aW5nXCIpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMubW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEucmVhZE9ubHkgfHwgISF0aGlzLmZvcm0uJGFycmF5U2NoZW1hLmNvbnN0O1xuICB9XG5cbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRhcnJheVNjaGVtYS5tYXhJdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPj0gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWluSXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID09PSB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
