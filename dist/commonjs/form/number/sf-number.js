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
var aurelia_validation_1 = require("aurelia-validation");
var aurelia_framework_1 = require("aurelia-framework");
var guid_1 = require("../../resources/guid");
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var SfNumber = /** @class */ (function () {
    function SfNumber(configuration) {
        this.configuration = configuration;
        this.id = guid_1.Guid.newGuid();
    }
    SfNumber.prototype.bind = function () {
        var rule = aurelia_validation_1.ValidationRules
            .ensure("model")
            .displayName(this.title)
            .satisfies(function () { return true; });
        if (this.required) {
            rule = rule.required();
        }
        if (this.schema.minimum) {
            rule = rule.satisfiesRule("minimum", this.schema.minimum);
        }
        rule.on(this);
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
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
        aurelia_framework_1.customElement("sf-number"),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
    ], SfNumber);
    return SfNumber;
}());
exports.SfNumber = SfNumber;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlEQUFxRDtBQUNyRCx1REFBb0U7QUFDcEUsNkNBQTRDO0FBQzVDLHNGQUFtRjtBQUluRjtJQVFFLGtCQUFtQixhQUFzQztRQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFGekQsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUVpQyxDQUFDO0lBRTlELHVCQUFJLEdBQUo7UUFDRSxJQUFJLElBQUksR0FBRyxvQ0FBZTthQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDdkIsU0FBUyxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBckJTO1FBQVQsNEJBQVE7OzRDQUFhO0lBQ1o7UUFBVCw0QkFBUTs7MkNBQWU7SUFDZDtRQUFULDRCQUFROzs4Q0FBa0I7SUFDakI7UUFBVCw0QkFBUTs7MkNBQWU7SUFKYixRQUFRO1FBRnBCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7UUFDL0IsaUNBQWEsQ0FBQyxXQUFXLENBQUM7eUNBU1MsbURBQXVCO09BUjlDLFFBQVEsQ0F1QnBCO0lBQUQsZUFBQztDQXZCRCxBQXVCQyxJQUFBO0FBdkJZLDRCQUFRIiwiZmlsZSI6ImZvcm0vbnVtYmVyL3NmLW51bWJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcyB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbkBjdXN0b21FbGVtZW50KFwic2YtbnVtYmVyXCIpXG5leHBvcnQgY2xhc3MgU2ZOdW1iZXIge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG4gIEBiaW5kYWJsZSBtb2RlbDogbnVtYmVyO1xuICBAYmluZGFibGUgcmVxdWlyZWQ6IHN0cmluZztcbiAgQGJpbmRhYmxlIHRpdGxlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgYmluZCgpIHtcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmVuc3VyZShcIm1vZGVsXCIpXG4gICAgICAuZGlzcGxheU5hbWUodGhpcy50aXRsZSlcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjaGVtYS5taW5pbXVtKSB7XG4gICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKFwibWluaW11bVwiLCB0aGlzLnNjaGVtYS5taW5pbXVtKTtcbiAgICB9XG4gICAgcnVsZS5vbih0aGlzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
