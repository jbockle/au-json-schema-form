var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customElement, bindable, inject, InlineViewStrategy } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { FormService } from "../../services/form-service";
let SfObject = class SfObject {
    constructor(configuration, formService, logger) {
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.id = Guid.newGuid();
        this.kind = "object";
    }
    bind() {
        this.logger.info("sf-object", { form: this.form, model: this.model, schema: this.schema }, arguments);
        this.view = new InlineViewStrategy(`<template>${this.formService.buildObjectForm(this.schema, this.form, this.model)}</template>`);
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
    __metadata("design:type", Object)
], SfObject.prototype, "schema", void 0);
SfObject = __decorate([
    inject(SchemaFormConfiguration, FormService, SchemaFormLogger),
    customElement("sf-object"),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        FormService,
        SchemaFormLogger])
], SfObject);
export { SfObject };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUV4RixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSTFELElBQWEsUUFBUSxHQUFyQjtJQVdFLFlBQ1MsYUFBc0MsRUFDdEMsV0FBd0IsRUFDdkIsTUFBd0I7UUFGekIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBVGxDLE9BQUUsR0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQVFaLENBQUM7SUFFTCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksa0JBQWtCLENBQ2hDLGFBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDcEcsQ0FBQztDQUNGLENBQUE7QUFyQlc7SUFBVCxRQUFROztzQ0FBcUI7QUFDcEI7SUFBVCxRQUFROzt1Q0FBZTtBQUNkO0lBQVQsUUFBUTs7d0NBQXFDO0FBSG5DLFFBQVE7SUFGcEIsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztJQUM5RCxhQUFhLENBQUMsV0FBVyxDQUFDO3FDQWFELHVCQUF1QjtRQUN6QixXQUFXO1FBQ2YsZ0JBQWdCO0dBZHZCLFFBQVEsQ0FzQnBCO1NBdEJZLFFBQVEiLCJmaWxlIjoiZm9ybS9vYmplY3Qvc2Ytb2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgRm9ybVNlcnZpY2UsIFNjaGVtYUZvcm1Mb2dnZXIpXG5AY3VzdG9tRWxlbWVudChcInNmLW9iamVjdFwiKVxuZXhwb3J0IGNsYXNzIFNmT2JqZWN0IHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBtb2RlbDogb2JqZWN0O1xuICBAYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb247XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcIm9iamVjdFwiO1xuXG4gIHZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgKSB7IH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1vYmplY3RcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsLCBzY2hlbWE6IHRoaXMuc2NoZW1hIH0sIGFyZ3VtZW50cyk7XG4gICAgdGhpcy52aWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShcbiAgICAgIGA8dGVtcGxhdGU+JHt0aGlzLmZvcm1TZXJ2aWNlLmJ1aWxkT2JqZWN0Rm9ybSh0aGlzLnNjaGVtYSwgdGhpcy5mb3JtLCB0aGlzLm1vZGVsKX08L3RlbXBsYXRlPmApO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
