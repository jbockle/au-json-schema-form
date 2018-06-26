"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var guid_1 = require("../../resources/guid");
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var rules_factory_1 = require("../../rules/rules-factory");
var SfText = /** @class */ (function () {
    function SfText(configuration, rules) {
        this.configuration = configuration;
        this.rules = rules;
        this.id = guid_1.Guid.newGuid();
        this.kind = "string";
    }
    SfText.prototype.bind = function () {
        this.rules.bind(this);
        if (["date-time", "date", "time"].indexOf(this.schema.format) > -1) {
            throw new Error("not implemented, add datetime/date/time picker here");
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfText.prototype, "schema", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfText.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfText.prototype, "required", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfText.prototype, "title", void 0);
    SfText = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory),
        aurelia_framework_1.customElement("sf-text"),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
            rules_factory_1.RulesFactory])
    ], SfText);
    return SfText;
}());
exports.SfText = SfText;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQW9FO0FBQ3BFLDZDQUE0QztBQUM1QyxzRkFBbUY7QUFDbkYsMkRBQXlEO0FBSXpEO0lBVUUsZ0JBQ1MsYUFBc0MsRUFDdEMsS0FBbUI7UUFEbkIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7UUFONUIsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1QixTQUFJLEdBQUcsUUFBUSxDQUFDO0lBS1osQ0FBQztJQUVMLHFCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV0QixJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNsRSxNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7U0FDeEU7SUFDSCxDQUFDO0lBcEJTO1FBQVQsNEJBQVE7OzBDQUFhO0lBQ1o7UUFBVCw0QkFBUTs7eUNBQVk7SUFDWDtRQUFULDRCQUFROzs0Q0FBa0I7SUFDakI7UUFBVCw0QkFBUTs7eUNBQWU7SUFKYixNQUFNO1FBRmxCLDBCQUFNLENBQUMsbURBQXVCLEVBQUUsNEJBQVksQ0FBQztRQUM3QyxpQ0FBYSxDQUFDLFNBQVMsQ0FBQzt5Q0FZQyxtREFBdUI7WUFDL0IsNEJBQVk7T0FaakIsTUFBTSxDQXNCbEI7SUFBRCxhQUFDO0NBdEJELEFBc0JDLElBQUE7QUF0Qlksd0JBQU0iLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBSdWxlc0ZhY3RvcnkpXG5AY3VzdG9tRWxlbWVudChcInNmLXRleHRcIilcbmV4cG9ydCBjbGFzcyBTZlRleHQge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55O1xuICBAYmluZGFibGUgcmVxdWlyZWQ6IHN0cmluZztcbiAgQGJpbmRhYmxlIHRpdGxlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcInN0cmluZ1wiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeVxuICApIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKFtcImRhdGUtdGltZVwiLCBcImRhdGVcIiwgXCJ0aW1lXCJdLmluZGV4T2YodGhpcy5zY2hlbWEuZm9ybWF0KSA+IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgaW1wbGVtZW50ZWQsIGFkZCBkYXRldGltZS9kYXRlL3RpbWUgcGlja2VyIGhlcmVcIik7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
