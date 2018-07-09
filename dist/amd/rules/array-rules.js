var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../services/schema-form-configuration"], function (require, exports, aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1BO1FBQ0Usb0JBQW9CLGFBQXNDO1lBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUFJLENBQUM7UUFFL0QsNkJBQVEsR0FBUjtZQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNiLENBQUM7UUFFRCx3QkFBRyxHQUFIO1lBQ0UsY0FBYztRQUNoQixDQUFDO1FBRUQseUJBQUksR0FBSixVQUFLLElBQWE7WUFDaEIsSUFBSSxJQUFJLEdBQUcsb0NBQWU7aUJBQ3ZCLFlBQVksRUFBRTtpQkFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUNwQyxTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsRDtZQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDakMsOEJBQThCO2FBQy9CO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQTdCVSxVQUFVO1lBRHRCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7NkNBRUssbURBQXVCO1dBRC9DLFVBQVUsQ0E4QnRCO1FBQUQsaUJBQUM7S0E5QkQsQUE4QkMsSUFBQTtJQTlCWSxnQ0FBVSIsImZpbGUiOiJydWxlcy9hcnJheS1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNmQXJyYXkgfSBmcm9tIFwiLi4vZm9ybS9hcnJheS9zZi1hcnJheVwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIEFycmF5UnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICByZWdpc3RlcigpIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIC8vIHVuaXF1ZUl0ZW1zXG4gIH1cblxuICBiaW5kKGN0cmw6IFNmQXJyYXkpIHtcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmVuc3VyZU9iamVjdCgpXG4gICAgICAuZGlzcGxheU5hbWUoY3RybC5mb3JtLiRzY2hlbWEudGl0bGUpXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xuICAgIGlmIChjdHJsLmZvcm0uJHJlcXVpcmVkKSB7XG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLmZvcm0uJHNjaGVtYS5tYXhJdGVtcykpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1heEl0ZW1zKGN0cmwuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKTtcbiAgICB9XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoY3RybC5mb3JtLiRzY2hlbWEubWluSXRlbXMpKSB7XG4gICAgICBydWxlID0gcnVsZS5taW5JdGVtcyhjdHJsLmZvcm0uJHNjaGVtYS5taW5JdGVtcyk7XG4gICAgfVxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS51bmlxdWVJdGVtcykge1xuICAgICAgLy8gVE9ETzogYWRkIHVuaXF1ZSBpdGVtcyBydWxlXG4gICAgfVxuICAgIHJ1bGUub24oY3RybC5tb2RlbCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
