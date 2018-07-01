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
let SfArray = class SfArray {
    constructor(configuration, formService, logger) {
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.id = Guid.newGuid();
        this.kind = "array";
    }
    bind() {
        this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
        const template = `<template>${this.formService.buildArrayForm(this.schema, this.form, this.key, this.model)}</template>`;
        this.view = new InlineViewStrategy(template);
    }
    add() {
        this.model.push(this.formService.getArrayItemDefault(this.schema, null));
    }
    remove(index) {
        this.model.splice(index, 1);
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
    inject(SchemaFormConfiguration, FormService, SchemaFormLogger),
    customElement("sf-array"),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        FormService,
        SchemaFormLogger])
], SfArray);
export { SfArray };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFeEYsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ25GLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUkxRCxJQUFhLE9BQU8sR0FBcEI7SUFZRSxZQUNTLGFBQXNDLEVBQ3RDLFdBQXdCLEVBQ3ZCLE1BQXdCO1FBRnpCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVRsQyxPQUFFLEdBQVcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLFNBQUksR0FBRyxPQUFPLENBQUM7SUFRWCxDQUFDO0lBRUwsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzNHLE1BQU0sUUFBUSxHQUNaLGFBQWEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUM7UUFDMUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxHQUFHO1FBQ0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELE1BQU0sQ0FBQyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7Q0FDRixDQUFBO0FBL0JXO0lBQVQsUUFBUTs7cUNBQWE7QUFDWjtJQUFULFFBQVE7O29DQUFhO0FBQ1o7SUFBVCxRQUFROztzQ0FBYztBQUNiO0lBQVQsUUFBUTs7dUNBQW9DO0FBSmxDLE9BQU87SUFGbkIsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQztJQUM5RCxhQUFhLENBQUMsVUFBVSxDQUFDO3FDQWNBLHVCQUF1QjtRQUN6QixXQUFXO1FBQ2YsZ0JBQWdCO0dBZnZCLE9BQU8sQ0FnQ25CO1NBaENZLE9BQU8iLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybVwiO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIEZvcm1TZXJ2aWNlLCBTY2hlbWFGb3JtTG9nZ2VyKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm07XG4gIEBiaW5kYWJsZSBrZXk6IHN0cmluZztcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcbiAgQGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb247XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcImFycmF5XCI7XG5cbiAgdmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICApIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5XCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCwgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyB9LCBhcmd1bWVudHMpO1xuICAgIGNvbnN0IHRlbXBsYXRlID1cbiAgICAgIGA8dGVtcGxhdGU+JHt0aGlzLmZvcm1TZXJ2aWNlLmJ1aWxkQXJyYXlGb3JtKHRoaXMuc2NoZW1hLCB0aGlzLmZvcm0sIHRoaXMua2V5LCB0aGlzLm1vZGVsKX08L3RlbXBsYXRlPmA7XG4gICAgdGhpcy52aWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneSh0ZW1wbGF0ZSk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5tb2RlbC5wdXNoKHRoaXMuZm9ybVNlcnZpY2UuZ2V0QXJyYXlJdGVtRGVmYXVsdCh0aGlzLnNjaGVtYSwgbnVsbCkpO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
