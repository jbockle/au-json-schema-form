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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQW9FO0FBQ3BFLDZDQUE0QztBQUM1QyxzRkFBbUY7QUFDbkYsMkRBQXlEO0FBS3pEO0lBVUUsZ0JBQ1MsYUFBc0MsRUFDdEMsS0FBbUI7UUFEbkIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7UUFONUIsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUU1QixTQUFJLEdBQUcsUUFBUSxDQUFDO0lBS1osQ0FBQztJQUVMLHFCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBaEJTO1FBQVQsNEJBQVE7OzBDQUFhO0lBQ1o7UUFBVCw0QkFBUTs7eUNBQVk7SUFDWDtRQUFULDRCQUFROzs0Q0FBa0I7SUFDakI7UUFBVCw0QkFBUTs7eUNBQWU7SUFKYixNQUFNO1FBRmxCLDBCQUFNLENBQUMsbURBQXVCLEVBQUUsNEJBQVksQ0FBQztRQUM3QyxpQ0FBYSxDQUFDLFNBQVMsQ0FBQzt5Q0FZQyxtREFBdUI7WUFDL0IsNEJBQVk7T0FaakIsTUFBTSxDQWtCbEI7SUFBRCxhQUFDO0NBbEJELEFBa0JDLElBQUE7QUFsQlksd0JBQU0iLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xuaW1wb3J0IHsgSUZvcm1Db250cm9sbGVyIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1jb250cm9sbGVyXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIFJ1bGVzRmFjdG9yeSlcbkBjdXN0b21FbGVtZW50KFwic2YtdGV4dFwiKVxuZXhwb3J0IGNsYXNzIFNmVGV4dCB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnk7XG4gIEBiaW5kYWJsZSByZXF1aXJlZDogc3RyaW5nO1xuICBAYmluZGFibGUgdGl0bGU6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwic3RyaW5nXCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5XG4gICkgeyB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
