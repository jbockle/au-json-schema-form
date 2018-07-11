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
var schema_form_configuration_1 = require("../services/schema-form-configuration");
var ArrayRules = /** @class */ (function () {
    function ArrayRules(configuration) {
        this.configuration = configuration;
    }
    ArrayRules.prototype.register = function () {
        this.add();
    };
    ArrayRules.prototype.add = function () {
        // uniqueItems
    };
    ArrayRules.prototype.bind = function (ctrl) {
        var rule = aurelia_validation_1.ValidationRules
            .ensureObject()
            .displayName(ctrl.form.$schema.title)
            .satisfies(function () { return true; });
        if (ctrl.form.$required) {
            rule = rule.required();
        }
        if (Number.isInteger(ctrl.form.$schema.maxItems)) {
            rule = rule.maxItems(ctrl.form.$schema.maxItems);
        }
        if (Number.isInteger(ctrl.form.$schema.minItems)) {
            rule = rule.minItems(ctrl.form.$schema.minItems);
        }
        if (ctrl.form.$schema.uniqueItems) {
            // TODO: add unique items rule
        }
        rule.on(ctrl.model);
    };
    ArrayRules = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
    ], ArrayRules);
    return ArrayRules;
}());
exports.ArrayRules = ArrayRules;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseURBQTJFO0FBQzNFLHVEQUEyQztBQUMzQyxtRkFBZ0Y7QUFJaEY7SUFDRSxvQkFBb0IsYUFBc0M7UUFBdEMsa0JBQWEsR0FBYixhQUFhLENBQXlCO0lBQUksQ0FBQztJQUUvRCw2QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELHdCQUFHLEdBQUg7UUFDRSxjQUFjO0lBQ2hCLENBQUM7SUFFRCx5QkFBSSxHQUFKLFVBQUssSUFBYTtRQUNoQixJQUFJLElBQUksR0FBRyxvQ0FBZTthQUN2QixZQUFZLEVBQUU7YUFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3BDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2pDLDhCQUE4QjtTQUMvQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUE3QlUsVUFBVTtRQUR0QiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDO3lDQUVLLG1EQUF1QjtPQUQvQyxVQUFVLENBOEJ0QjtJQUFELGlCQUFDO0NBOUJELEFBOEJDLElBQUE7QUE5QlksZ0NBQVUiLCJmaWxlIjoicnVsZXMvYXJyYXktcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBTZkFycmF5IH0gZnJvbSBcIi4uL2Zvcm0vYXJyYXkvc2YtYXJyYXlcIjtcclxuXHJcbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXHJcbmV4cG9ydCBjbGFzcyBBcnJheVJ1bGVzIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cclxuXHJcbiAgcmVnaXN0ZXIoKSB7XHJcbiAgICB0aGlzLmFkZCgpO1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgLy8gdW5pcXVlSXRlbXNcclxuICB9XHJcblxyXG4gIGJpbmQoY3RybDogU2ZBcnJheSkge1xyXG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmVuc3VyZU9iamVjdCgpXHJcbiAgICAgIC5kaXNwbGF5TmFtZShjdHJsLmZvcm0uJHNjaGVtYS50aXRsZSlcclxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcclxuICAgIGlmIChjdHJsLmZvcm0uJHJlcXVpcmVkKSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XHJcbiAgICB9XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLmZvcm0uJHNjaGVtYS5tYXhJdGVtcykpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUubWF4SXRlbXMoY3RybC5mb3JtLiRzY2hlbWEubWF4SXRlbXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoY3RybC5mb3JtLiRzY2hlbWEubWluSXRlbXMpKSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlLm1pbkl0ZW1zKGN0cmwuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zKTtcclxuICAgIH1cclxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS51bmlxdWVJdGVtcykge1xyXG4gICAgICAvLyBUT0RPOiBhZGQgdW5pcXVlIGl0ZW1zIHJ1bGVcclxuICAgIH1cclxuICAgIHJ1bGUub24oY3RybC5tb2RlbCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
