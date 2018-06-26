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
        if (["date-time", "date", "time"].indexOf(this.schema.format) > -1) {
            throw new Error("not implemented, add datetime/date/time picker here");
        }
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3BFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1QyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFJekQsSUFBYSxNQUFNLEdBQW5CO0lBVUUsWUFDUyxhQUFzQyxFQUN0QyxLQUFtQjtRQURuQixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztRQU41QixPQUFFLEdBQVcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLFNBQUksR0FBRyxRQUFRLENBQUM7SUFLWixDQUFDO0lBRUwsSUFBSTtRQUNGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXRCLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ2xFLE1BQU0sSUFBSSxLQUFLLENBQUMscURBQXFELENBQUMsQ0FBQztTQUN4RTtJQUNILENBQUM7Q0FDRixDQUFBO0FBckJXO0lBQVQsUUFBUTs7c0NBQWE7QUFDWjtJQUFULFFBQVE7O3FDQUFZO0FBQ1g7SUFBVCxRQUFROzt3Q0FBa0I7QUFDakI7SUFBVCxRQUFROztxQ0FBZTtBQUpiLE1BQU07SUFGbEIsTUFBTSxDQUFDLHVCQUF1QixFQUFFLFlBQVksQ0FBQztJQUM3QyxhQUFhLENBQUMsU0FBUyxDQUFDO3FDQVlDLHVCQUF1QjtRQUMvQixZQUFZO0dBWmpCLE1BQU0sQ0FzQmxCO1NBdEJZLE1BQU0iLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBSdWxlc0ZhY3RvcnkpXG5AY3VzdG9tRWxlbWVudChcInNmLXRleHRcIilcbmV4cG9ydCBjbGFzcyBTZlRleHQge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55O1xuICBAYmluZGFibGUgcmVxdWlyZWQ6IHN0cmluZztcbiAgQGJpbmRhYmxlIHRpdGxlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcInN0cmluZ1wiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeVxuICApIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKFtcImRhdGUtdGltZVwiLCBcImRhdGVcIiwgXCJ0aW1lXCJdLmluZGV4T2YodGhpcy5zY2hlbWEuZm9ybWF0KSA+IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgaW1wbGVtZW50ZWQsIGFkZCBkYXRldGltZS9kYXRlL3RpbWUgcGlja2VyIGhlcmVcIik7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
