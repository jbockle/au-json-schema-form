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
var SfArray = /** @class */ (function () {
    function SfArray(configuration, rules) {
        this.configuration = configuration;
        this.rules = rules;
        this.id = guid_1.Guid.newGuid();
        this.kind = "array";
    }
    SfArray.prototype.bind = function () {
        this.rules.bind(this);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfArray.prototype, "schema", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], SfArray.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfArray.prototype, "required", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfArray.prototype, "title", void 0);
    SfArray = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory),
        aurelia_framework_1.customElement("sf-array"),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
            rules_factory_1.RulesFactory])
    ], SfArray);
    return SfArray;
}());
exports.SfArray = SfArray;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBb0U7QUFDcEUsNkNBQTRDO0FBQzVDLHNGQUFtRjtBQUNuRiwyREFBeUQ7QUFJekQ7SUFVRSxpQkFDUyxhQUFzQyxFQUN0QyxLQUFtQjtRQURuQixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztRQU41QixPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLFNBQUksR0FBRyxPQUFPLENBQUM7SUFLWCxDQUFDO0lBRUwsc0JBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFoQlM7UUFBVCw0QkFBUTs7MkNBQWE7SUFDWjtRQUFULDRCQUFROzswQ0FBYztJQUNiO1FBQVQsNEJBQVE7OzZDQUFrQjtJQUNqQjtRQUFULDRCQUFROzswQ0FBZTtJQUpiLE9BQU87UUFGbkIsMEJBQU0sQ0FBQyxtREFBdUIsRUFBRSw0QkFBWSxDQUFDO1FBQzdDLGlDQUFhLENBQUMsVUFBVSxDQUFDO3lDQVlBLG1EQUF1QjtZQUMvQiw0QkFBWTtPQVpqQixPQUFPLENBa0JuQjtJQUFELGNBQUM7Q0FsQkQsQUFrQkMsSUFBQTtBQWxCWSwwQkFBTyIsImZpbGUiOiJmb3JtL2FycmF5L3NmLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgUnVsZXNGYWN0b3J5KVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSByZXF1aXJlZDogc3RyaW5nO1xuICBAYmluZGFibGUgdGl0bGU6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwiYXJyYXlcIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnlcbiAgKSB7IH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
