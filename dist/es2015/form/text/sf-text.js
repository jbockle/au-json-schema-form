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
let SfText = class SfText {
    constructor(configuration, rules) {
        this.configuration = configuration;
        this.rules = rules;
        this.id = Guid.newGuid();
        this.kind = "string";
    }
    bind() {
        this.rules.bind(this);
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfText.prototype, "schema", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfText.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfText.prototype, "required", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfText.prototype, "title", void 0);
SfText = __decorate([
    inject(SchemaFormConfiguration, RulesFactory),
    customElement("sf-text"),
    __metadata("design:paramtypes", [SchemaFormConfiguration,
        RulesFactory])
], SfText);
export { SfText };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFLekQsSUFBYSxNQUFNLEdBQW5CO0lBVUUsWUFDUyxhQUFzQyxFQUN0QyxLQUFtQjtRQURuQixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztRQU41QixPQUFFLEdBQVcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLFNBQUksR0FBRyxRQUFRLENBQUM7SUFLWixDQUFDO0lBRUwsSUFBSTtRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7Q0FDRixDQUFBO0FBakJXO0lBQVQsUUFBUTs7c0NBQWE7QUFDWjtJQUFULFFBQVE7O3FDQUFZO0FBQ1g7SUFBVCxRQUFROzt3Q0FBa0I7QUFDakI7SUFBVCxRQUFROztxQ0FBZTtBQUpiLE1BQU07SUFGbEIsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFlBQVksQ0FBQztJQUM3QyxhQUFhLENBQUMsU0FBUyxDQUFDO3FDQVlDLHVCQUF1QjtRQUMvQixZQUFZO0dBWmpCLE1BQU0sQ0FrQmxCO1NBbEJZLE1BQU0iLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xuaW1wb3J0IHsgSUZvcm1Db250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1jb250cm9sbGVyXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIFJ1bGVzRmFjdG9yeSlcbkBjdXN0b21FbGVtZW50KFwic2YtdGV4dFwiKVxuZXhwb3J0IGNsYXNzIFNmVGV4dCB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnk7XG4gIEBiaW5kYWJsZSByZXF1aXJlZDogc3RyaW5nO1xuICBAYmluZGFibGUgdGl0bGU6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwic3RyaW5nXCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5XG4gICkgeyB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
