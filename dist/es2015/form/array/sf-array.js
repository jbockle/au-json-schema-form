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
let SfArray = class SfArray {
    constructor(arrayRules, configuration, formService, logger, defaultsService, formInstances) {
        this.arrayRules = arrayRules;
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.defaultsService = defaultsService;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.kind = "array";
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("sf-array", { form: this.form, model: this.model });
            this.formCtrl = this.formInstances.get(this.formInstance);
            this.bindRules();
            this.form.$arrayItem.$schema = this.form.$schema.items;
            yield this.determineViewStrategy();
        });
    }
    initializeArray() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.form.$arrayStartEmpty || this.formCtrl.formOptions.arrayStartEmpty) {
                return;
            }
            yield this.add(!!this.formCtrl.formOptions.validateOnRender);
        });
    }
    attached() {
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
            else if (this.form.$schema.items.type === "string" && this.form.$schema.items.enum) {
                strategy = this.configuration.templates.arrayStringEnum;
            }
            else {
                strategy = this.configuration.templates.array;
                yield this.createView();
                yield this.initializeArray();
            }
            this.viewStrategy = strategy;
        });
    }
    createView() {
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
            this.model.push(item);
            if (validate) {
                yield this.validate();
            }
        });
    }
    remove(index, validate) {
        return __awaiter(this, void 0, void 0, function* () {
            this.model.splice(index, 1);
            if (validate) {
                yield this.validate();
            }
        });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQWtCLE1BQU0sbUJBQW1CLENBQUM7QUFDeEcsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVk5RCxJQUFhLE9BQU8sR0FBcEI7SUFtQkUsWUFDUyxVQUFzQixFQUN0QixhQUFzQyxFQUNyQyxXQUF3QixFQUN4QixNQUF3QixFQUN4QixlQUFnQyxFQUNoQyxhQUE0QjtRQUw3QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUNyQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFwQnRDLE9BQUUsR0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLE9BQU8sQ0FBQztJQXFCZixDQUFDO0lBRUssSUFBSTs7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFB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QUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1lBQ3pGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU87aUJBQ3pCLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDM0IsT0FBTyxNQUFNLENBQUM7UUFDaEIsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQWxIVztJQUFULFFBQVE7O3FDQUFxQjtBQUNwQjtJQUFULFFBQVE7O3NDQUFjO0FBQ2I7SUFBVCxRQUFROzs2Q0FBc0I7QUFIcEIsT0FBTztJQVRuQixNQUFNLENBQ0wsVUFBVSxFQUNWLHVCQUF1QixFQUN2QixXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2hCLGVBQWUsRUFDZixhQUFhLENBQ2Q7SUFDQSxhQUFhLENBQUMsVUFBVSxDQUFDO3FDQXFCSCxVQUFVO1FBQ1AsdUJBQXVCO1FBQ3hCLFdBQVc7UUFDaEIsZ0JBQWdCO1FBQ1AsZUFBZTtRQUNqQixhQUFhO0dBekIzQixPQUFPLENBbUhuQjtTQW5IWSxPQUFPIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3ksIFZpZXcsIE9wdGlvbmFsIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcbmltcG9ydCB7IFZhbGlkYXRlUmVzdWx0IH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgQXJyYXlSdWxlcyB9IGZyb20gXCIuLi8uLi9ydWxlcy9hcnJheS1ydWxlc1wiO1xuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2VcIjtcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXNcIjtcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XG5cbkBpbmplY3QoXG4gIEFycmF5UnVsZXMsXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBGb3JtU2VydmljZSxcbiAgU2NoZW1hRm9ybUxvZ2dlcixcbiAgRGVmYXVsdHNTZXJ2aWNlLFxuICBGb3JtSW5zdGFuY2VzXG4pXG5AY3VzdG9tRWxlbWVudChcInNmLWFycmF5XCIpXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBAYmluZGFibGUgbW9kZWw6IGFueVtdO1xuICBAYmluZGFibGUgZm9ybUluc3RhbmNlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcImFycmF5XCI7XG5cbiAgdmlld1N0cmF0ZWd5OiBzdHJpbmc7XG5cbiAgaXRlbVZpZXdTdHJhdGVneTogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdO1xuXG4gIGVycm9yczogVmFsaWRhdGVSZXN1bHRbXTtcblxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzLFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwcml2YXRlIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xuICApIHtcblxuICB9XG5cbiAgYXN5bmMgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXlcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xuICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcbiAgICB0aGlzLmJpbmRSdWxlcygpO1xuICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcztcblxuICAgIGF3YWl0IHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBhc3luYyBpbml0aWFsaXplQXJyYXkoKSB7XG4gICAgaWYgKHRoaXMuZm9ybS4kYXJyYXlTdGFydEVtcHR5IHx8IHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMuYXJyYXlTdGFydEVtcHR5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuYWRkKCEhdGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICh0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBkZXRlcm1pbmVWaWV3U3RyYXRlZ3koKSB7XG4gICAgbGV0IHN0cmF0ZWd5O1xuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy50eXBlID09PSBcInN0cmluZ1wiICYmIHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLmVudW0pIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheVN0cmluZ0VudW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheTtcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlVmlldygpO1xuICAgICAgYXdhaXQgdGhpcy5pbml0aWFsaXplQXJyYXkoKTtcbiAgICB9XG4gICAgdGhpcy52aWV3U3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVZpZXcoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImNyZWF0ZVZpZXdcIiwgeyBmb3JtOiB0aGlzLmZvcm0uJGFycmF5SXRlbSB9KTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZm9ybVNlcnZpY2VcbiAgICAgIC5nZXRUZW1wbGF0ZShcIm1vZGVsWyRpbmRleF1cIiwgXCJmb3JtLiRhcnJheUl0ZW1cIiwgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYS50eXBlLCB0aGlzLmZvcm1JbnN0YW5jZSk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImNyZWF0ZVZpZXctdGVtcGxhdGVcIiwgeyB0ZW1wbGF0ZSB9KTtcbiAgICB0aGlzLml0ZW1WaWV3U3RyYXRlZ3kgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZX08L3RlbXBsYXRlPmApO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kUnVsZXMoKSB7XG4gICAgdGhpcy5hcnJheVJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XG4gIH1cblxuICBhc3luYyBhZGQodmFsaWRhdGU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgdGhpcy5kZWZhdWx0c1NlcnZpY2UuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLCBudWxsKTtcbiAgICB0aGlzLm1vZGVsLnB1c2goaXRlbSk7XG4gICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVtb3ZlKGluZGV4OiBudW1iZXIsIHZhbGlkYXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kc2NoZW1hLmNvbnN0O1xuICB9XG5cbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWF4SXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID49IHRoaXMuZm9ybS4kc2NoZW1hLm1heEl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBnZXQgYXRNaW5pbXVtQ2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID09PSB0aGlzLmZvcm0uJHNjaGVtYS5taW5JdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidmFsaWRhdGVkIGFycmF5XCIsIHJlc3VsdCk7XG4gICAgdGhpcy5lcnJvcnMgPSByZXN1bHQucmVzdWx0c1xuICAgICAgLmZpbHRlcigocikgPT4gIXIudmFsaWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
