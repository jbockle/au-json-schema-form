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
var SfNumber = /** @class */ (function () {
    function SfNumber(configuration, rules) {
        this.configuration = configuration;
        this.rules = rules;
        this.id = guid_1.Guid.newGuid();
        this.kind = "number";
    }
    SfNumber.prototype.bind = function () {
        this.rules.bind(this);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfNumber.prototype, "schema", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Number)
    ], SfNumber.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfNumber.prototype, "required", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfNumber.prototype, "title", void 0);
    SfNumber = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory),
        aurelia_framework_1.customElement("sf-number"),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
            rules_factory_1.RulesFactory])
    ], SfNumber);
    return SfNumber;
}());
exports.SfNumber = SfNumber;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVEQUFvRTtBQUNwRSw2Q0FBNEM7QUFDNUMsc0ZBQW1GO0FBQ25GLDJEQUF5RDtBQUl6RDtJQVVFLGtCQUNTLGFBQXNDLEVBQ3RDLEtBQW1CO1FBRG5CLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBTjVCLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQUtaLENBQUM7SUFFTCx1QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQWhCUztRQUFULDRCQUFROzs0Q0FBYTtJQUNaO1FBQVQsNEJBQVE7OzJDQUFlO0lBQ2Q7UUFBVCw0QkFBUTs7OENBQWtCO0lBQ2pCO1FBQVQsNEJBQVE7OzJDQUFlO0lBSmIsUUFBUTtRQUZwQiwwQkFBTSxDQUFDLG1EQUF1QixFQUFFLDRCQUFZLENBQUM7UUFDN0MsaUNBQWEsQ0FBQyxXQUFXLENBQUM7eUNBWUQsbURBQXVCO1lBQy9CLDRCQUFZO09BWmpCLFFBQVEsQ0FrQnBCO0lBQUQsZUFBQztDQWxCRCxBQWtCQyxJQUFBO0FBbEJZLDRCQUFRIiwiZmlsZSI6ImZvcm0vbnVtYmVyL3NmLW51bWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIFJ1bGVzRmFjdG9yeSlcbkBjdXN0b21FbGVtZW50KFwic2YtbnVtYmVyXCIpXG5leHBvcnQgY2xhc3MgU2ZOdW1iZXIge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG4gIEBiaW5kYWJsZSBtb2RlbDogbnVtYmVyO1xuICBAYmluZGFibGUgcmVxdWlyZWQ6IHN0cmluZztcbiAgQGJpbmRhYmxlIHRpdGxlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcIm51bWJlclwiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeVxuICApIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
