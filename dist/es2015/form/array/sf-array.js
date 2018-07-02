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
        this.determineViewStrategy();
        this.createView();
    }
    determineViewStrategy() {
        const strategy = this.form.$altTemplate || this.configuration.templates.array;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDO1lBQ3RELENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNwRSxDQUFDO0NBQ0YsQ0FBQTtBQXBGVztJQUFULFFBQVE7O3FDQUFxQjtBQUNwQjtJQUFULFFBQVE7O29DQUFhO0FBQ1o7SUFBVCxRQUFROztzQ0FBYztBQUNiO0lBQVQsUUFBUTs7dUNBQW9DO0FBSmxDLE9BQU87SUFUbkIsTUFBTSxDQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsV0FBVyxFQUNYLGdCQUFnQixFQUNoQixTQUFTLEVBQ1QsZUFBZSxDQUNoQjtJQUNBLGFBQWEsQ0FBQyxVQUFVLENBQUM7cUNBbUJILFVBQVU7UUFDUCx1QkFBdUI7UUFDekIsV0FBVztRQUNmLGdCQUFnQjtRQUNkLFNBQVM7R0F0QmxCLE9BQU8sQ0FxRm5CO1NBckZZLE9BQU8iLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSwgVmlldywgT3B0aW9uYWwgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIFZhbGlkYXRlUmVzdWx0LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjtcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tIFwiLi4vLi4vcnVsZXMvYXJyYXktcnVsZXNcIjtcblxuQGluamVjdChcbiAgQXJyYXlSdWxlcyxcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIEZvcm1TZXJ2aWNlLFxuICBTY2hlbWFGb3JtTG9nZ2VyLFxuICBWYWxpZGF0b3IsXG4gIEV2ZW50QWdncmVnYXRvclxuKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIGtleTogc3RyaW5nO1xuICBAYmluZGFibGUgbW9kZWw6IGFueVtdO1xuICBAYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbjtcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwiYXJyYXlcIjtcblxuICB2aWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgdmlld1N0cmF0ZWd5OiBzdHJpbmc7XG5cbiAgcmVzdWx0czogVmFsaWRhdGVSZXN1bHRbXTtcbiAgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzLFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHB1YmxpYyB2YWxpZGF0b3I6IFZhbGlkYXRvclxuICApIHtcblxuICB9XG5cbiAgY3JlYXRlZChvd25pbmdWaWV3OiBWaWV3LCBteVZpZXc6IFZpZXcpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyID0gbXlWaWV3LmNvbnRhaW5lci5nZXQoT3B0aW9uYWwub2YoVmFsaWRhdGlvbkNvbnRyb2xsZXIpKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5XCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCwgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyB9LCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYmluZFJ1bGVzKCk7XG4gICAgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcbiAgICB0aGlzLmNyZWF0ZVZpZXcoKTtcbiAgfVxuXG4gIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcbiAgICBjb25zdCBzdHJhdGVneSA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUgfHwgdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheTtcbiAgICB0aGlzLnZpZXdTdHJhdGVneSA9IHN0cmF0ZWd5O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVWaWV3KCkge1xuICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuZm9ybVNlcnZpY2UuYnVpbGRBcnJheUZvcm0odGhpcy5zY2hlbWEsIHRoaXMuZm9ybSwgdGhpcy5rZXksIHRoaXMubW9kZWwpO1xuICAgIHRlbXBsYXRlID0gYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlfTwvdGVtcGxhdGU+YDtcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KHRlbXBsYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgYmluZFJ1bGVzKCkge1xuICAgIHRoaXMuYXJyYXlSdWxlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkT2JqZWN0KHRoaXMubW9kZWwpO1xuICB9XG5cbiAgZ2V0Rm9ybUNvbnRyb2xsZXIob3ZlcnJpZGVDb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gb3ZlcnJpZGVDb250ZXh0Ll9fcGFyZW50T3ZlcnJpZGVDb250ZXh0LmJpbmRpbmdDb250ZXh0O1xuICB9XG5cbiAgYWRkKCkge1xuICAgIHRoaXMubW9kZWwucHVzaCh0aGlzLmZvcm1TZXJ2aWNlLmdldEFycmF5SXRlbURlZmF1bHQodGhpcy5zY2hlbWEsIG51bGwpKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKFwidmFsaWRhdGluZ1wiKTtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLm1vZGVsLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLnJlYWRPbmx5IHx8ICEhdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5jb25zdDtcbiAgfVxuXG4gIGdldCBhdENhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWF4SXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID49IHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWF4SXRlbXMgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBhdE1pbmltdW1DYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1pbkl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA9PT0gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5taW5JdGVtcyA6IGZhbHNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
