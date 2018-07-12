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
let SfBoolean = class SfBoolean {
    constructor(configuration, rules, logger, formInstances) {
        this.configuration = configuration;
        this.rules = rules;
        this.logger = logger;
        this.formInstances = formInstances;
        this.id = Guid.newGuid();
        this.kind = "boolean";
    }
    attached() {
        this.logger.info("sf-string-attached");
        if (this.formCtrl.formOptions.validateOnRender) {
            this.formCtrl.validationController.validate({ object: this });
        }
    }
    bind() {
        this.logger.info("sf-boolean", this.form, this.model, arguments);
        this.formCtrl = this.formInstances.get(this.formInstance);
        this.schema = this.form.$schema;
        this.rules.bind(this);
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfBoolean.prototype, "form", void 0);
__decorate([
    bindable,
    __metadata("design:type", Boolean)
], SfBoolean.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfBoolean.prototype, "formInstance", void 0);
SfBoolean = __decorate([
    inject(SchemaFormConfiguration, RulesFactory, SchemaFormLogger, FormInstances),
    customElement("sf-boolean"),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        RulesFactory,
        SchemaFormLogger,
        FormInstances])
], SfBoolean);
export { SfBoolean };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFMUQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBVTlELElBQWEsU0FBUyxHQUF0QjtJQWFFLFlBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0IsRUFDeEIsYUFBNEI7UUFIN0Isa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFWdEMsT0FBRSxHQUFXLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1QixTQUFJLEdBQUcsU0FBUyxDQUFDO0lBU2IsQ0FBQztJQUVMLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBdUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTtBQWhDVztJQUFULFFBQVE7O3VDQUFxQjtBQUNwQjtJQUFULFFBQVE7O3dDQUFnQjtBQUNmO0lBQVQsUUFBUTs7K0NBQXNCO0FBSHBCLFNBQVM7SUFQckIsTUFBTSxDQUNMLHVCQUF1QixFQUN2QixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLGFBQWEsQ0FDZDtJQUNBLGFBQWEsQ0FBQyxZQUFZLENBQUM7cUNBZUYsdUJBQXVCO1FBQy9CLFlBQVk7UUFDVixnQkFBZ0I7UUFDVCxhQUFhO0dBakIzQixTQUFTLENBaUNyQjtTQWpDWSxTQUFTIiwiZmlsZSI6ImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXNcIjtcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcclxuXHJcbkBpbmplY3QoXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgUnVsZXNGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KFwic2YtYm9vbGVhblwiKVxyXG5leHBvcnQgY2xhc3MgU2ZCb29sZWFuIHtcclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuICBAYmluZGFibGUgbW9kZWw6IGJvb2xlYW47XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBzY2hlbWE6IElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb247XHJcblxyXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcclxuXHJcbiAga2luZCA9IFwiYm9vbGVhblwiO1xyXG5cclxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHsgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1zdHJpbmctYXR0YWNoZWRcIik7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWJvb2xlYW5cIiwgdGhpcy5mb3JtLCB0aGlzLm1vZGVsLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYSBhcyBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uO1xyXG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
