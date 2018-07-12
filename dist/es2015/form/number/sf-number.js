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
import { FormInstances } from "../../services/form-instances";
let SfNumber = class SfNumber {
    constructor(configuration, rules, logger, formInstances) {
        this.configuration = configuration;
        this.rules = rules;
        this.logger = logger;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.kind = "number";
    }
    attached() {
        this.logger.info("sf-number-attached");
        if (this.formCtrl.formOptions.validateOnRender) {
            this.formCtrl.validationController.validate({ object: this });
        }
    }
    bind() {
        this.logger.info("sf-number", this.form, this.model, arguments);
        this.formCtrl = this.formInstances.get(this.formInstance);
        this.form.$schema = this.form.$schema;
        this.rules.bind(this);
        this.form.$step = this.form.$step || 1;
        this.determineViewStrategy();
    }
    determineViewStrategy() {
        this.view = this.configuration.templates.number;
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
__decorate([
    bindable,
    __metadata("design:type", String)
], SfNumber.prototype, "formInstance", void 0);
SfNumber = __decorate([
    inject(SchemaFormConfiguration, RulesFactory, SchemaFormLogger, FormInstances),
    customElement("sf-number"),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        RulesFactory,
        SchemaFormLogger,
        FormInstances])
], SfNumber);
export { SfNumber };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBRTFELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVU5RCxJQUFhLFFBQVEsR0FBckI7SUFhRSxZQUNTLGFBQXNDLEVBQ3RDLEtBQW1CLEVBQ2xCLE1BQXdCLEVBQ3hCLGFBQTRCO1FBSDdCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBWnRDLE9BQUUsR0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFJNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQVNaLENBQUM7SUFFTCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFzQyxDQUFDO1FBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztJQUMvQixDQUFDO0lBRUQscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ2hELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUNwQzthQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7U0FDdEQ7SUFDSCxDQUFDO0lBRUQsSUFBSSxPQUFPO1FBQ1QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQy9DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO1NBQ2xDO2FBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDL0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM3RDtJQUNILENBQUM7SUFFRCxJQUFJLE9BQU87UUFDVCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDbEM7YUFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1NBQzdEO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUEzRFc7SUFBVCxRQUFROztzQ0FBcUI7QUFDcEI7SUFBVCxRQUFROzt1Q0FBZTtBQUNkO0lBQVQsUUFBUTs7OENBQXNCO0FBSHBCLFFBQVE7SUFQcEIsTUFBTSxDQUNMLHVCQUF1QixFQUN2QixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGFBQWEsQ0FDZDtJQUNBLGFBQWEsQ0FBQyxXQUFXLENBQUM7cUNBZUQsdUJBQXVCO1FBQy9CLFlBQVk7UUFDVixnQkFBZ0I7UUFDVCxhQUFhO0dBakIzQixRQUFRLENBNERwQjtTQTVEWSxRQUFRIiwiZmlsZSI6ImZvcm0vbnVtYmVyL3NmLW51bWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXNcIjtcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcclxuXHJcbkBpbmplY3QoXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgUnVsZXNGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KFwic2YtbnVtYmVyXCIpXHJcbmV4cG9ydCBjbGFzcyBTZk51bWJlciB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBudW1iZXI7XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIHZpZXc7XHJcblxyXG4gIGtpbmQgPSBcIm51bWJlclwiO1xyXG5cclxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHsgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1udW1iZXItYXR0YWNoZWRcIik7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLW51bWJlclwiLCB0aGlzLmZvcm0sIHRoaXMubW9kZWwsIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmZvcm1DdHJsID0gdGhpcy5mb3JtSW5zdGFuY2VzLmdldCh0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICB0aGlzLmZvcm0uJHNjaGVtYSA9IHRoaXMuZm9ybS4kc2NoZW1hIGFzIElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbjtcclxuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuZm9ybS4kc3RlcCA9IHRoaXMuZm9ybS4kc3RlcCB8fCAxO1xyXG4gICAgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcclxuICB9XHJcblxyXG4gIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcclxuICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMubnVtYmVyO1xyXG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5taW5pbXVtICE9PSB1bmRlZmluZWQgJiYgdGhpcy5tYXhpbXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5udW1iZXJSYW5nZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBtaW5pbXVtKCkge1xyXG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluaW11bSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLm1pbmltdW07XHJcbiAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEuZXhjbHVzaXZlTWluaW11bSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gKyB0aGlzLmZvcm0uJHN0ZXA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4aW11bSgpIHtcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1heGltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5tYXhpbXVtO1xyXG4gICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIC0gdGhpcy5mb3JtLiRzdGVwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
