var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { SchemaFormLogger } from "../../resources/logger";
let SfNumber = class SfNumber {
    constructor(configuration, rules, logger) {
        this.configuration = configuration;
        this.rules = rules;
        this.logger = logger;
        this.id = Guid.newGuid();
        this.kind = "number";
        this.view = configuration.templates.number;
    }
    bind() {
        this.logger.info("sf-number", this.form, this.model, arguments);
        this.form.$schema = this.form.$schema;
        this.rules.bind(this);
        this.form.$step = this.form.$step || 1;
        this.determineViewStrategy();
    }
    determineViewStrategy() {
        if (this.form.$altTemplate) {
            this.view = this.form.$altTemplate;
        }
        else if (this.minimum !== undefined && this.maximum !== undefined) {
            this.view = this.configuration.templates.numberRange;
        }
    }
    get minimum() {
        if (Number.isInteger(this.form.$schema.minimum)) {
            return this.form.$schema.minimum;
        }
        else if (Number.isInteger(this.form.$schema.exclusiveMinimum)) {
            return this.form.$schema.exclusiveMinimum + this.form.$step;
        }
    }
    get maximum() {
        if (Number.isInteger(this.form.$schema.maximum)) {
            return this.form.$schema.maximum;
        }
        else if (Number.isInteger(this.form.$schema.exclusiveMaximum)) {
            return this.form.$schema.exclusiveMaximum - this.form.$step;
        }
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfNumber.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", Number)
], SfNumber.prototype, "model", void 0);
SfNumber = __decorate([
    inject(SchemaFormConfiguration, RulesFactory, SchemaFormLogger),
    customElement("sf-number"),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        RulesFactory,
        SchemaFormLogger])
], SfNumber);
export { SfNumber };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSzFELElBQWEsUUFBUSxHQUFyQjtJQVVFLFlBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0I7UUFGekIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFUbEMsT0FBRSxHQUFXLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUk1QixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBT2QsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFzQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQscUJBQXFCO1FBQ25CLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNwQzthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDbEM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUFoRFc7SUFBVCxRQUFROztzQ0FBcUI7QUFDcEI7SUFBVCxRQUFROzt1Q0FBZTtBQUZiLFFBQVE7SUFGcEIsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFlBQVksRUFBRSxnQkFBZ0IsQ0FBQztJQUMvRCxhQUFhLENBQUMsV0FBVyxDQUFDO3FDQVlELHVCQUF1QjtRQUMvQixZQUFZO1FBQ1YsZ0JBQWdCO0dBYnZCLFFBQVEsQ0FpRHBCO1NBakRZLFFBQVEiLCJmaWxlIjoiZm9ybS9udW1iZXIvc2YtbnVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcclxuXHJcbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIFJ1bGVzRmFjdG9yeSwgU2NoZW1hRm9ybUxvZ2dlcilcclxuQGN1c3RvbUVsZW1lbnQoXCJzZi1udW1iZXJcIilcclxuZXhwb3J0IGNsYXNzIFNmTnVtYmVyIHtcclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuICBAYmluZGFibGUgbW9kZWw6IG51bWJlcjtcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICB2aWV3O1xyXG5cclxuICBraW5kID0gXCJudW1iZXJcIjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyXHJcbiAgKSB7XHJcbiAgICB0aGlzLnZpZXcgPSBjb25maWd1cmF0aW9uLnRlbXBsYXRlcy5udW1iZXI7XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLW51bWJlclwiLCB0aGlzLmZvcm0sIHRoaXMubW9kZWwsIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmZvcm0uJHNjaGVtYSA9IHRoaXMuZm9ybS4kc2NoZW1hIGFzIElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbjtcclxuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZm9ybS4kc3RlcCA9IHRoaXMuZm9ybS4kc3RlcCB8fCAxO1xyXG4gICAgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcclxuICB9XHJcblxyXG4gIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcclxuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubWluaW11bSAhPT0gdW5kZWZpbmVkICYmIHRoaXMubWF4aW11bSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMubnVtYmVyUmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWluaW11bSgpIHtcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1pbmltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5taW5pbXVtO1xyXG4gICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtICsgdGhpcy5mb3JtLiRzdGVwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1heGltdW0oKSB7XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhpbXVtKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEubWF4aW11bTtcclxuICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSAtIHRoaXMuZm9ybS4kc3RlcDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
