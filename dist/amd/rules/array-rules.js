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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1BO1FBQ0Usb0JBQW9CLGFBQXNDO1lBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUFJLENBQUM7UUFFL0QsNkJBQVEsR0FBUjtZQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNiLENBQUM7UUFFRCx3QkFBRyxHQUFIO1lBQ0UsY0FBYztRQUNoQixDQUFDO1FBRUQseUJBQUksR0FBSixVQUFLLElBQWE7WUFDaEIsSUFBSSxJQUFJLEdBQUcsb0NBQWU7aUJBQ3ZCLFlBQVksRUFBRTtpQkFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUNwQyxTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsRDtZQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDaEQsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRTtnQkFDakMsOEJBQThCO2FBQy9CO1lBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsQ0FBQztRQTdCVSxVQUFVO1lBRHRCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7NkNBRUssbURBQXVCO1dBRC9DLFVBQVUsQ0E4QnRCO1FBQUQsaUJBQUM7S0E5QkQsQUE4QkMsSUFBQTtJQTlCWSxnQ0FBVSIsImZpbGUiOiJydWxlcy9hcnJheS1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFNmQXJyYXkgfSBmcm9tIFwiLi4vZm9ybS9hcnJheS9zZi1hcnJheVwiO1xyXG5cclxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcclxuZXhwb3J0IGNsYXNzIEFycmF5UnVsZXMge1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxyXG5cclxuICByZWdpc3RlcigpIHtcclxuICAgIHRoaXMuYWRkKCk7XHJcbiAgfVxyXG5cclxuICBhZGQoKSB7XHJcbiAgICAvLyB1bmlxdWVJdGVtc1xyXG4gIH1cclxuXHJcbiAgYmluZChjdHJsOiBTZkFycmF5KSB7XHJcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuZW5zdXJlT2JqZWN0KClcclxuICAgICAgLmRpc3BsYXlOYW1lKGN0cmwuZm9ybS4kc2NoZW1hLnRpdGxlKVxyXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xyXG4gICAgaWYgKGN0cmwuZm9ybS4kcmVxdWlyZWQpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcclxuICAgIH1cclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKSkge1xyXG4gICAgICBydWxlID0gcnVsZS5tYXhJdGVtcyhjdHJsLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLmZvcm0uJHNjaGVtYS5taW5JdGVtcykpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUubWluSXRlbXMoY3RybC5mb3JtLiRzY2hlbWEubWluSXRlbXMpO1xyXG4gICAgfVxyXG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLnVuaXF1ZUl0ZW1zKSB7XHJcbiAgICAgIC8vIFRPRE86IGFkZCB1bmlxdWUgaXRlbXMgcnVsZVxyXG4gICAgfVxyXG4gICAgcnVsZS5vbihjdHJsLm1vZGVsKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
