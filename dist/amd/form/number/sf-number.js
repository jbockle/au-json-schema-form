var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory", "../../resources/logger", "../../services/form-instances"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1, form_instances_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfNumber = /** @class */ (function () {
        function SfNumber(configuration, rules, logger, formInstances) {
            this.configuration = configuration;
            this.rules = rules;
            this.logger = logger;
            this.formInstances = formInstances;
            this.id = guid_1.Guid.newGuid();
            this.kind = "number";
        }
        SfNumber.prototype.attached = function () {
            this.logger.info("sf-number-attached");
            if (this.formCtrl.formOptions.validateOnRender) {
                this.formCtrl.validationController.validate({ object: this });
            }
        };
        SfNumber.prototype.bind = function () {
            this.logger.info("sf-number", this.form, this.model, arguments);
            this.formCtrl = this.formInstances.get(this.formInstance);
            this.form.$schema = this.form.$schema;
            this.rules.bind(this);
            this.form.$step = this.form.$step || 1;
            this.determineViewStrategy();
        };
        SfNumber.prototype.determineViewStrategy = function () {
            this.view = this.configuration.templates.number;
            if (this.form.$altTemplate) {
                this.view = this.form.$altTemplate;
            }
            else if (this.minimum !== undefined && this.maximum !== undefined) {
                this.view = this.configuration.templates.numberRange;
            }
        };
        Object.defineProperty(SfNumber.prototype, "minimum", {
            get: function () {
                if (Number.isInteger(this.form.$schema.minimum)) {
                    return this.form.$schema.minimum;
                }
                else if (Number.isInteger(this.form.$schema.exclusiveMinimum)) {
                    return this.form.$schema.exclusiveMinimum + this.form.$step;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SfNumber.prototype, "maximum", {
            get: function () {
                if (Number.isInteger(this.form.$schema.maximum)) {
                    return this.form.$schema.maximum;
                }
                else if (Number.isInteger(this.form.$schema.exclusiveMaximum)) {
                    return this.form.$schema.exclusiveMaximum - this.form.$step;
                }
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SfNumber.prototype, "form", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], SfNumber.prototype, "model", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], SfNumber.prototype, "formInstance", void 0);
        SfNumber = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
            aurelia_framework_1.customElement("sf-number"),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                rules_factory_1.RulesFactory,
                logger_1.SchemaFormLogger,
                form_instances_1.FormInstances])
        ], SfNumber);
        return SfNumber;
    }());
    exports.SfNumber = SfNumber;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFpQkE7UUFhRSxrQkFDUyxhQUFzQyxFQUN0QyxLQUFtQixFQUNsQixNQUF3QixFQUN4QixhQUE0QjtZQUg3QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7WUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztZQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtZQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQVp0QyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBSTVCLFNBQUksR0FBRyxRQUFRLENBQUM7UUFTWixDQUFDO1FBRUwsMkJBQVEsR0FBUjtZQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7WUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMvRDtRQUNILENBQUM7UUFFRCx1QkFBSSxHQUFKO1lBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNoRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQXNDLENBQUM7WUFDckUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFFRCx3Q0FBcUIsR0FBckI7WUFDRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztZQUNoRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUMxQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQ3BDO2lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7Z0JBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO2FBQ3REO1FBQ0gsQ0FBQztRQUVELHNCQUFJLDZCQUFPO2lCQUFYO2dCQUNFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDL0MsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7aUJBQ2xDO3FCQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUMvRCxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUM3RDtZQUNILENBQUM7OztXQUFBO1FBRUQsc0JBQUksNkJBQU87aUJBQVg7Z0JBQ0UsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUMvQyxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQztpQkFDbEM7cUJBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBQy9ELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQzdEO1lBQ0gsQ0FBQzs7O1dBQUE7UUExRFM7WUFBVCw0QkFBUTs7OENBQXFCO1FBQ3BCO1lBQVQsNEJBQVE7OytDQUFlO1FBQ2Q7WUFBVCw0QkFBUTs7c0RBQXNCO1FBSHBCLFFBQVE7WUFQcEIsMEJBQU0sQ0FDTCxtREFBdUIsRUFDdkIsNEJBQVksRUFDWix5QkFBZ0IsRUFDaEIsOEJBQWEsQ0FDZDtZQUNBLGlDQUFhLENBQUMsV0FBVyxDQUFDOzZDQWVELG1EQUF1QjtnQkFDL0IsNEJBQVk7Z0JBQ1YseUJBQWdCO2dCQUNULDhCQUFhO1dBakIzQixRQUFRLENBNERwQjtRQUFELGVBQUM7S0E1REQsQUE0REMsSUFBQTtJQTVEWSw0QkFBUSIsImZpbGUiOiJmb3JtL251bWJlci9zZi1udW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XHJcblxyXG5AaW5qZWN0KFxyXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gIFJ1bGVzRmFjdG9yeSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudChcInNmLW51bWJlclwiKVxyXG5leHBvcnQgY2xhc3MgU2ZOdW1iZXIge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogbnVtYmVyO1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICB2aWV3O1xyXG5cclxuICBraW5kID0gXCJudW1iZXJcIjtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ3RybDogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtbnVtYmVyLWF0dGFjaGVkXCIpO1xyXG4gICAgaWYgKHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xyXG4gICAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1udW1iZXJcIiwgdGhpcy5mb3JtLCB0aGlzLm1vZGVsLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5mb3JtLiRzY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYSBhcyBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb247XHJcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmZvcm0uJHN0ZXAgPSB0aGlzLmZvcm0uJHN0ZXAgfHwgMTtcclxuICAgIHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XHJcbiAgfVxyXG5cclxuICBkZXRlcm1pbmVWaWV3U3RyYXRlZ3koKSB7XHJcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLm51bWJlcjtcclxuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMubWluaW11bSAhPT0gdW5kZWZpbmVkICYmIHRoaXMubWF4aW11bSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMubnVtYmVyUmFuZ2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWluaW11bSgpIHtcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1pbmltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5taW5pbXVtO1xyXG4gICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNaW5pbXVtICsgdGhpcy5mb3JtLiRzdGVwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG1heGltdW0oKSB7XHJcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhpbXVtKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEubWF4aW11bTtcclxuICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSkge1xyXG4gICAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEuZXhjbHVzaXZlTWF4aW11bSAtIHRoaXMuZm9ybS4kc3RlcDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
