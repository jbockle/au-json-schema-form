var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { customElement, bindable, inject, InlineViewStrategy, Optional } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { FormService } from "../../services/form-service";
import { Validator, ValidationController } from "aurelia-validation";
import { ArrayRules } from "../../rules/array-rules";
import { DefaultsService } from "../../services/defaults-service";
let SfArray = class SfArray {
    constructor(arrayRules, configuration, formService, logger, validator, defaultsService) {
        this.arrayRules = arrayRules;
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.validator = validator;
        this.defaultsService = defaultsService;
        this.id = Guid.newGuid();
        this.kind = "array";
    }
    created(owningView, myView) {
        this.validationController = myView.container.get(Optional.of(ValidationController));
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("sf-array", { form: this.form, model: this.model });
            this.bindRules();
            yield this.createView();
            this.determineViewStrategy();
        });
    }
    attached() {
        this.getErrors();
    }
    determineViewStrategy() {
        let strategy;
        if (this.form.$altTemplate) {
            strategy = this.form.$altTemplate;
        }
        else if (this.form.$schema.items.type === "string" && this.form.$schema.items.enum) {
            strategy = this.configuration.templates.arrayStringEnum;
        }
        else {
            strategy = this.configuration.templates.array;
        }
        this.viewStrategy = strategy;
    }
    createView() {
        return __awaiter(this, void 0, void 0, function* () {
            const template = yield this.formService
                .getFormTemplateAsync(this.form, this.form.$schema, this.model, this.formInstance);
            this.view = new InlineViewStrategy(`<template>${template.content}</template>`);
        });
    }
    bindRules() {
        this.arrayRules.bind(this);
        this.validationController.addObject(this.model);
    }
    getFormController(overrideContext) {
        return overrideContext.__parentOverrideContext.bindingContext;
    }
    add() {
        this.model.push(this.defaultsService.getSchemaDefaultAsync(this.form.$schema.items, null));
        this.validationController.validate({ object: this.model });
        if (this.configuration.validationRenderer) {
            this.logger.warn("validating");
            this.validate();
        }
    }
    remove(index) {
        this.model.splice(index, 1);
        this.validate();
    }
    get isDisabled() {
        return this.form.$schema.readOnly || !!this.form.$schema.const;
    }
    get atCapacity() {
        return Number.isInteger(this.form.$schema.maxItems)
            ? this.model.length >= this.form.$schema.maxItems : false;
    }
    get atMinimumCapacity() {
        return Number.isInteger(this.form.$schema.minItems)
            ? this.model.length === this.form.$schema.minItems : false;
    }
    validate() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.validationController.validate({ object: this.model });
            this.logger.info("validated array", result);
            return result;
        });
    }
    getErrors() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.validate();
            if (!result.valid) {
                this.validationErrors = result.results
                    .filter((r) => !r.valid)
                    .map((r) => r.message);
            }
            return [];
        });
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfArray.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", Array)
], SfArray.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfArray.prototype, "formInstance", void 0);
SfArray = __decorate([
    inject(ArrayRules, SchemaFormConfiguration, FormService, SchemaFormLogger, Validator, DefaultsService),
    customElement("sf-array"),
    __metadata("design:paramtypes", [ArrayRules,
        SchemaFormConfiguration,
        FormService,
        SchemaFormLogger,
        Validator,
        DefaultsService])
], SfArray);
export { SfArray };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUN2QixHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUMxQjtZQUNELE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQS9HVztJQUFULFFBQVE7O3FDQUFxQjtBQUNwQjtJQUFULFFBQVE7O3NDQUFjO0FBQ2I7SUFBVCxRQUFROzs2Q0FBc0I7QUFIcEIsT0FBTztJQVRuQixNQUFNLENBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxlQUFlLENBQ2hCO0lBQ0EsYUFBYSxDQUFDLFVBQVUsQ0FBQztxQ0FrQkgsVUFBVTtRQUNQLHVCQUF1QjtRQUN6QixXQUFXO1FBQ2YsZ0JBQWdCO1FBQ2QsU0FBUztRQUNILGVBQWU7R0F0QjlCLE9BQU8sQ0FnSG5CO1NBaEhZLE9BQU8iLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSwgVmlldywgT3B0aW9uYWwgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIFZhbGlkYXRlUmVzdWx0LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tIFwiLi4vLi4vcnVsZXMvYXJyYXktcnVsZXNcIjtcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlXCI7XG5cbkBpbmplY3QoXG4gIEFycmF5UnVsZXMsXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBGb3JtU2VydmljZSxcbiAgU2NoZW1hRm9ybUxvZ2dlcixcbiAgVmFsaWRhdG9yLFxuICBEZWZhdWx0c1NlcnZpY2VcbilcbkBjdXN0b21FbGVtZW50KFwic2YtYXJyYXlcIilcbmV4cG9ydCBjbGFzcyBTZkFycmF5IHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwiYXJyYXlcIjtcblxuICB2aWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgdmlld1N0cmF0ZWd5OiBzdHJpbmc7XG5cbiAgdmFsaWRhdGlvbkVycm9yczogc3RyaW5nW107XG4gIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXJyYXlSdWxlczogQXJyYXlSdWxlcyxcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwdWJsaWMgdmFsaWRhdG9yOiBWYWxpZGF0b3IsXG4gICAgcHVibGljIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlXG4gICkge1xuXG4gIH1cblxuICBjcmVhdGVkKG93bmluZ1ZpZXc6IFZpZXcsIG15VmlldzogVmlldykge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSBteVZpZXcuY29udGFpbmVyLmdldChPcHRpb25hbC5vZihWYWxpZGF0aW9uQ29udHJvbGxlcikpO1xuICB9XG5cbiAgYXN5bmMgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXlcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xuICAgIHRoaXMuYmluZFJ1bGVzKCk7XG4gICAgYXdhaXQgdGhpcy5jcmVhdGVWaWV3KCk7XG4gICAgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuZ2V0RXJyb3JzKCk7XG4gIH1cblxuICBkZXRlcm1pbmVWaWV3U3RyYXRlZ3koKSB7XG4gICAgbGV0IHN0cmF0ZWd5O1xuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy50eXBlID09PSBcInN0cmluZ1wiICYmIHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLmVudW0pIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheVN0cmluZ0VudW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheTtcbiAgICB9XG4gICAgdGhpcy52aWV3U3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVZpZXcoKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCB0aGlzLmZvcm1TZXJ2aWNlXG4gICAgICAuZ2V0Rm9ybVRlbXBsYXRlQXN5bmModGhpcy5mb3JtLCB0aGlzLmZvcm0uJHNjaGVtYSwgdGhpcy5tb2RlbCwgdGhpcy5mb3JtSW5zdGFuY2UpO1xuICAgIHRoaXMudmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlLmNvbnRlbnR9PC90ZW1wbGF0ZT5gKTtcbiAgfVxuXG4gIHByaXZhdGUgYmluZFJ1bGVzKCkge1xuICAgIHRoaXMuYXJyYXlSdWxlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkT2JqZWN0KHRoaXMubW9kZWwpO1xuICB9XG5cbiAgZ2V0Rm9ybUNvbnRyb2xsZXIob3ZlcnJpZGVDb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gb3ZlcnJpZGVDb250ZXh0Ll9fcGFyZW50T3ZlcnJpZGVDb250ZXh0LmJpbmRpbmdDb250ZXh0O1xuICB9XG5cbiAgYWRkKCkge1xuICAgIHRoaXMubW9kZWwucHVzaCh0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmModGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMsIG51bGwpKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKFwidmFsaWRhdGluZ1wiKTtcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLm1vZGVsLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLnJlYWRPbmx5IHx8ICEhdGhpcy5mb3JtLiRzY2hlbWEuY29uc3Q7XG4gIH1cblxuICBnZXQgYXRDYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPj0gdGhpcy5mb3JtLiRzY2hlbWEubWF4SXRlbXMgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBhdE1pbmltdW1DYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5taW5JdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJ2YWxpZGF0ZWQgYXJyYXlcIiwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgZ2V0RXJyb3JzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcbiAgICBpZiAoIXJlc3VsdC52YWxpZCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JzID0gcmVzdWx0LnJlc3VsdHNcbiAgICAgICAgLmZpbHRlcigocikgPT4gIXIudmFsaWQpXG4gICAgICAgIC5tYXAoKHIpID0+IHIubWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
