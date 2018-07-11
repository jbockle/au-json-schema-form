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
import { customElement, bindable, inject, InlineViewStrategy } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { FormService } from "../../services/form-service";
import { ArrayRules } from "../../rules/array-rules";
import { DefaultsService } from "../../services/defaults-service";
import { FormInstances } from "../../services/form-instances";
import * as $ from "jquery";
let SfArray = class SfArray {
    constructor(arrayRules, configuration, formService, logger, defaultsService, formInstances) {
        this.arrayRules = arrayRules;
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.defaultsService = defaultsService;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.selectedIndex = -1;
        this.kind = "array";
        this.binded = false;
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.binded) {
                this.logger.info("sf-array", { form: this.form, model: this.model });
                this.formCtrl = this.formInstances.get(this.formInstance);
                this.bindRules();
                this.form.$arrayItem.$schema = this.form.$schema.items;
                yield this.createItemView();
                yield this.determineViewStrategy();
                yield this.initializeArray();
                this.selectedIndex = this.model ? this.model.length - 1 : -1;
                this.binded = true;
            }
        });
    }
    initializeArray() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.$arrayItem.$schema.enum ||
                (this.model && this.model.length > 0) ||
                this.form.$noEmptyArrayInitialization ||
                this.formCtrl.formOptions.noEmptyArrayInitialization) {
                return;
            }
            yield this.add(!!this.formCtrl.formOptions.validateOnRender);
        });
    }
    attached() {
        this.logger.info("sf-array-attached");
        if (this.formCtrl.formOptions.validateOnRender) {
            this.validate();
        }
    }
    determineViewStrategy() {
        return __awaiter(this, void 0, void 0, function* () {
            let strategy;
            if (this.form.$altTemplate) {
                strategy = this.form.$altTemplate;
            }
            else if (this.form.$arrayAsTabs) {
                const content = !!this.form.$tabTitle ? `${this.form.$tabTitle}` : "${'Item ' + ($index + 1)}";
                this.tabTitleTemplate = new InlineViewStrategy(`<template>${content}</template>`);
                strategy = this.configuration.templates.arrayTabs;
            }
            else if (this.form.$schema.items.type === "string" && this.form.$schema.items.enum) {
                strategy = this.configuration.templates.arrayStringEnum;
            }
            else {
                strategy = this.configuration.templates.array;
            }
            this.viewStrategy = strategy;
        });
    }
    createItemView() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("createView", { form: this.form.$arrayItem });
            const template = this.formService
                .getTemplate("model[$index]", "form.$arrayItem", this.form.$arrayItem.$schema.type, this.formInstance);
            this.logger.info("createView-template", { template });
            this.itemViewStrategy = new InlineViewStrategy(`<template>${template}</template>`);
        });
    }
    bindRules() {
        this.arrayRules.bind(this);
        this.formCtrl.validationController.addObject(this.model);
    }
    add(validate) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.defaultsService.getSchemaDefaultAsync(this.form.$schema.items, null);
            const index = this.model.push(item) - 1;
            this.selectTab(index);
            if (validate) {
                yield this.validate();
            }
        });
    }
    remove(index, validate) {
        return __awaiter(this, void 0, void 0, function* () {
            this.model.splice(index, 1);
            this.selectTab(this.model.length - 1);
            if (validate) {
                yield this.validate();
            }
        });
    }
    selectTab(index) {
        if (this.tabTitleTemplate) {
            setTimeout(() => {
                $(`a[href="#tab_${this.id}_${index}"]`).tab("show");
            }, 50);
        }
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
            const result = yield this.formCtrl.validationController.validate({ object: this.model });
            this.logger.info("validated array", result);
            this.errors = result.results
                .filter((r) => !r.valid);
            return result;
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
    inject(ArrayRules, SchemaFormConfiguration, FormService, SchemaFormLogger, DefaultsService, FormInstances),
    customElement("sf-array"),
    __metadata("design:paramtypes", [ArrayRules,
        SchemaFormConfiguration,
        FormService,
        SchemaFormLogger,
        DefaultsService,
        FormInstances])
], SfArray);
export { SfArray };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFpQjtRQUNuQixPQUFPLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO1lBQ2pELENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRCxDQUFDO0lBRUssUUFBUTs7WUFDWixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU87aUJBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQXBKVztJQUFULFFBQVE7O3FDQUFxQjtBQUNwQjtJQUFULFFBQVE7O3NDQUFjO0FBQ2I7SUFBVCxRQUFROzs2Q0FBc0I7QUFIcEIsT0FBTztJQVRuQixNQUFNLENBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixhQUFhLENBQ2Q7SUFDQSxhQUFhLENBQUMsVUFBVSxDQUFDO3FDQTJCSCxVQUFVO1FBQ1AsdUJBQXVCO1FBQ3hCLFdBQVc7UUFDaEIsZ0JBQWdCO1FBQ1AsZUFBZTtRQUNqQixhQUFhO0dBL0IzQixPQUFPLENBcUpuQjtTQXJKWSxPQUFPIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xuaW1wb3J0IHsgVmFsaWRhdGVSZXN1bHQgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSBcIi4uLy4uL3J1bGVzL2FycmF5LXJ1bGVzXCI7XG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGVmYXVsdHMtc2VydmljZVwiO1xuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlc1wiO1xuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuQGluamVjdChcbiAgQXJyYXlSdWxlcyxcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIEZvcm1TZXJ2aWNlLFxuICBTY2hlbWFGb3JtTG9nZ2VyLFxuICBEZWZhdWx0c1NlcnZpY2UsXG4gIEZvcm1JbnN0YW5jZXNcbilcbkBjdXN0b21FbGVtZW50KFwic2YtYXJyYXlcIilcbmV4cG9ydCBjbGFzcyBTZkFycmF5IHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG5cbiAga2luZCA9IFwiYXJyYXlcIjtcblxuICB2aWV3U3RyYXRlZ3k6IHN0cmluZztcblxuICBpdGVtVmlld1N0cmF0ZWd5OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgdGFiVGl0bGVUZW1wbGF0ZTogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdO1xuXG4gIGVycm9yczogVmFsaWRhdGVSZXN1bHRbXTtcblxuICBiaW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzLFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwcml2YXRlIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xuICApIHtcblxuICB9XG5cbiAgYXN5bmMgYmluZCgpIHtcbiAgICBpZiAoIXRoaXMuYmluZGVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXlcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xuICAgICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xuICAgICAgdGhpcy5iaW5kUnVsZXMoKTtcbiAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcztcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbVZpZXcoKTtcbiAgICAgIGF3YWl0IHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XG4gICAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVBcnJheSgpO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5tb2RlbCA/IHRoaXMubW9kZWwubGVuZ3RoIC0gMSA6IC0xO1xuICAgICAgdGhpcy5iaW5kZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemVBcnJheSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLmVudW0gfHxcbiAgICAgICh0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwubGVuZ3RoID4gMCkgfHxcbiAgICAgIHRoaXMuZm9ybS4kbm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb24gfHxcbiAgICAgIHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMubm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb25cbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5hZGQoISF0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5LWF0dGFjaGVkXCIpO1xuICAgIGlmICh0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBkZXRlcm1pbmVWaWV3U3RyYXRlZ3koKSB7XG4gICAgbGV0IHN0cmF0ZWd5O1xuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJGFycmF5QXNUYWJzKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gISF0aGlzLmZvcm0uJHRhYlRpdGxlID8gYCR7dGhpcy5mb3JtLiR0YWJUaXRsZX1gIDogXCIkeydJdGVtICcgKyAoJGluZGV4ICsgMSl9XCI7XG4gICAgICB0aGlzLnRhYlRpdGxlVGVtcGxhdGUgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHtjb250ZW50fTwvdGVtcGxhdGU+YCk7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlUYWJzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMudHlwZSA9PT0gXCJzdHJpbmdcIiAmJiB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy5lbnVtKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlTdHJpbmdFbnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXk7XG4gICAgfVxuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gIH1cblxuICBhc3luYyBjcmVhdGVJdGVtVmlldygpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiY3JlYXRlVmlld1wiLCB7IGZvcm06IHRoaXMuZm9ybS4kYXJyYXlJdGVtIH0pO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZVxuICAgICAgLmdldFRlbXBsYXRlKFxuICAgICAgICBcIm1vZGVsWyRpbmRleF1cIixcbiAgICAgICAgXCJmb3JtLiRhcnJheUl0ZW1cIixcbiAgICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYS50eXBlLFxuICAgICAgICB0aGlzLmZvcm1JbnN0YW5jZVxuICAgICAgKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiY3JlYXRlVmlldy10ZW1wbGF0ZVwiLCB7IHRlbXBsYXRlIH0pO1xuICAgIHRoaXMuaXRlbVZpZXdTdHJhdGVneSA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlfTwvdGVtcGxhdGU+YCk7XG4gIH1cblxuICBwcml2YXRlIGJpbmRSdWxlcygpIHtcbiAgICB0aGlzLmFycmF5UnVsZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZE9iamVjdCh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIGFzeW5jIGFkZCh2YWxpZGF0ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmModGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMsIG51bGwpO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tb2RlbC5wdXNoKGl0ZW0pIC0gMTtcbiAgICB0aGlzLnNlbGVjdFRhYihpbmRleCk7XG4gICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVtb3ZlKGluZGV4OiBudW1iZXIsIHZhbGlkYXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMubW9kZWwubGVuZ3RoIC0gMSk7XG4gICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnRhYlRpdGxlVGVtcGxhdGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkKGBhW2hyZWY9XCIjdGFiXyR7dGhpcy5pZH1fJHtpbmRleH1cIl1gKS50YWIoXCJzaG93XCIpO1xuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kc2NoZW1hLmNvbnN0O1xuICB9XG5cbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWF4SXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID49IHRoaXMuZm9ybS4kc2NoZW1hLm1heEl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBnZXQgYXRNaW5pbXVtQ2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID09PSB0aGlzLmZvcm0uJHNjaGVtYS5taW5JdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidmFsaWRhdGVkIGFycmF5XCIsIHJlc3VsdCk7XG4gICAgdGhpcy5lcnJvcnMgPSByZXN1bHQucmVzdWx0c1xuICAgICAgLmZpbHRlcigocikgPT4gIXIudmFsaWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
