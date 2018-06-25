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
let SfNumber = class SfNumber {
    constructor(configuration, rules) {
        this.configuration = configuration;
        this.rules = rules;
        this.id = Guid.newGuid();
        this.kind = "number";
    }
    bind() {
        this.rules.bind(this);
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfNumber.prototype, "schema", void 0);
__decorate([
    bindable,
    __metadata("design:type", Number)
], SfNumber.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfNumber.prototype, "required", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfNumber.prototype, "title", void 0);
SfNumber = __decorate([
    inject(SchemaFormConfiguration, RulesFactory),
    customElement("sf-number"),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        RulesFactory])
], SfNumber);
export { SfNumber };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFbkYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBSXpELElBQWEsUUFBUSxHQUFyQjtJQVVFLFlBQ1MsYUFBc0MsRUFDdEMsS0FBbUI7UUFEbkIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7UUFONUIsT0FBRSxHQUFXLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1QixTQUFJLEdBQUcsUUFBUSxDQUFDO0lBS1osQ0FBQztJQUVMLElBQUk7UUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0NBQ0YsQ0FBQTtBQWpCVztJQUFULFFBQVE7O3dDQUFhO0FBQ1o7SUFBVCxRQUFROzt1Q0FBZTtBQUNkO0lBQVQsUUFBUTs7MENBQWtCO0FBQ2pCO0lBQVQsUUFBUTs7dUNBQWU7QUFKYixRQUFRO0lBRnBCLE1BQU0sQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENBQUM7SUFDN0MsYUFBYSxDQUFDLFdBQVcsQ0FBQztxQ0FZRCx1QkFBdUI7UUFDL0IsWUFBWTtHQVpqQixRQUFRLENBa0JwQjtTQWxCWSxRQUFRIiwiZmlsZSI6ImZvcm0vbnVtYmVyL3NmLW51bWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IElGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tY29udHJvbGxlclwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgUnVsZXNGYWN0b3J5KVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1udW1iZXJcIilcbmV4cG9ydCBjbGFzcyBTZk51bWJlciB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBudW1iZXI7XG4gIEBiaW5kYWJsZSByZXF1aXJlZDogc3RyaW5nO1xuICBAYmluZGFibGUgdGl0bGU6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwibnVtYmVyXCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5XG4gICkgeyB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
