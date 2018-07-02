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
    }
    bind() {
        this.logger.info("sf-number", this.form, this.model, arguments);
        this.schema = this.form.$schema;
        this.rules.bind(this);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBSzFELElBQWEsUUFBUSxHQUFyQjtJQVVFLFlBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0I7UUFGekIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7UUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFQbEMsT0FBRSxHQUFXLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1QixTQUFJLEdBQUcsUUFBUSxDQUFDO0lBTVosQ0FBQztJQUVMLElBQUk7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFzQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBO0FBcEJXO0lBQVQsUUFBUTs7c0NBQXFCO0FBQ3BCO0lBQVQsUUFBUTs7dUNBQWU7QUFGYixRQUFRO0lBRnBCLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCLENBQUM7SUFDL0QsYUFBYSxDQUFDLFdBQVcsQ0FBQztxQ0FZRCx1QkFBdUI7UUFDL0IsWUFBWTtRQUNWLGdCQUFnQjtHQWJ2QixRQUFRLENBcUJwQjtTQXJCWSxRQUFRIiwiZmlsZSI6ImZvcm0vbnVtYmVyL3NmLW51bWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIFJ1bGVzRmFjdG9yeSwgU2NoZW1hRm9ybUxvZ2dlcilcbkBjdXN0b21FbGVtZW50KFwic2YtbnVtYmVyXCIpXG5leHBvcnQgY2xhc3MgU2ZOdW1iZXIge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBudW1iZXI7XG5cbiAgc2NoZW1hOiBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb247XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcIm51bWJlclwiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxuICApIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLW51bWJlclwiLCB0aGlzLmZvcm0sIHRoaXMubW9kZWwsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYSBhcyBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb247XG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
