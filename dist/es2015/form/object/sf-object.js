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
import { FormInstances } from "../../services/form-instances";
let SfObject = class SfObject {
    constructor(configuration, formService, logger, formInstances) {
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.kind = "object";
    }
    attached() {
        this.logger.info("sf-object-attached");
    }
    bind() {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("sf-object", { form: this.form, model: this.model });
            this.formCtrl = this.formInstances.get(this.formInstance);
            const template = yield this.formService
                .getFormTemplateAsync(this.form, this.form.$schema, this.model, this.formInstance);
            this.view = new InlineViewStrategy(`<template>${template.content}</template>`);
        });
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfObject.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfObject.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfObject.prototype, "formInstance", void 0);
SfObject = __decorate([
    inject(SchemaFormConfiguration, FormService, SchemaFormLogger, FormInstances),
    customElement("sf-object"),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        FormService,
        SchemaFormLogger,
        FormInstances])
], SfObject);
export { SfObject };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXhGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUUxRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBVTlELElBQWEsUUFBUSxHQUFyQjtJQWFFLFlBQ1MsYUFBc0MsRUFDdEMsV0FBd0IsRUFDdkIsTUFBd0IsRUFDeEIsYUFBNEI7UUFIN0Isa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWnRDLE9BQUUsR0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQVdaLENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUssSUFBSTs7WUFDUixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDdEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDMUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxJQUFJLENBQUMsV0FBVztpQkFDcEMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNyRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksa0JBQWtCLENBQ2hDLGFBQWEsUUFBUSxDQUFDLE9BQU8sYUFBYSxDQUFDLENBQUM7UUFDaEQsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQS9CVztJQUFULFFBQVE7O3NDQUFxQjtBQUNwQjtJQUFULFFBQVE7O3VDQUFlO0FBQ2Q7SUFBVCxRQUFROzs4Q0FBc0I7QUFIcEIsUUFBUTtJQVBwQixNQUFNLENBQ0wsdUJBQXVCLEVBQ3ZCLFdBQVcsRUFDWCxnQkFBZ0IsRUFDaEIsYUFBYSxDQUNkO0lBQ0EsYUFBYSxDQUFDLFdBQVcsQ0FBQztxQ0FlRCx1QkFBdUI7UUFDekIsV0FBVztRQUNmLGdCQUFnQjtRQUNULGFBQWE7R0FqQjNCLFFBQVEsQ0FnQ3BCO1NBaENZLFFBQVEiLCJmaWxlIjoiZm9ybS9vYmplY3Qvc2Ytb2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlc1wiO1xyXG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xyXG5cclxuQGluamVjdChcclxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICBGb3JtU2VydmljZSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudChcInNmLW9iamVjdFwiKVxyXG5leHBvcnQgY2xhc3MgU2ZPYmplY3Qge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogb2JqZWN0O1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICBraW5kID0gXCJvYmplY3RcIjtcclxuXHJcbiAgdmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xyXG4gICkgeyB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLW9iamVjdC1hdHRhY2hlZFwiKTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGJpbmQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2Ytb2JqZWN0XCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcclxuICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIGNvbnN0IHRlbXBsYXRlID0gYXdhaXQgdGhpcy5mb3JtU2VydmljZVxyXG4gICAgICAuZ2V0Rm9ybVRlbXBsYXRlQXN5bmModGhpcy5mb3JtLCB0aGlzLmZvcm0uJHNjaGVtYSwgdGhpcy5tb2RlbCwgdGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy52aWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShcclxuICAgICAgYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlLmNvbnRlbnR9PC90ZW1wbGF0ZT5gKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
