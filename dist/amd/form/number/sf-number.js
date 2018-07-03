var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory", "../../resources/logger"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfNumber = /** @class */ (function () {
        function SfNumber(configuration, rules, logger) {
            this.configuration = configuration;
            this.rules = rules;
            this.logger = logger;
            this.id = guid_1.Guid.newGuid();
            this.kind = "number";
            this.view = configuration.templates.number;
        }
        SfNumber.prototype.bind = function () {
            this.logger.info("sf-number", this.form, this.model, arguments);
            this.schema = this.form.$schema;
            this.rules.bind(this);
            this.form.$step = this.form.$step || 1;
            this.determineViewStrategy();
        };
        SfNumber.prototype.determineViewStrategy = function () {
            if (this.minimum !== undefined && this.maximum !== undefined) {
                this.view = this.configuration.templates.numberRange;
            }
        };
        Object.defineProperty(SfNumber.prototype, "minimum", {
            get: function () {
                if (Number.isInteger(this.schema.minimum)) {
                    return this.schema.minimum;
                }
                else if (Number.isInteger(this.schema.exclusiveMinimum)) {
                    return this.schema.exclusiveMinimum + this.form.$step;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SfNumber.prototype, "maximum", {
            get: function () {
                if (Number.isInteger(this.schema.maximum)) {
                    return this.schema.maximum;
                }
                else if (Number.isInteger(this.schema.exclusiveMaximum)) {
                    return this.schema.exclusiveMaximum - this.form.$step;
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
        SfNumber = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger),
            aurelia_framework_1.customElement("sf-number"),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                rules_factory_1.RulesFactory,
                logger_1.SchemaFormLogger])
        ], SfNumber);
        return SfNumber;
    }());
    exports.SfNumber = SfNumber;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFVQTtRQVlFLGtCQUNTLGFBQXNDLEVBQ3RDLEtBQW1CLEVBQ2xCLE1BQXdCO1lBRnpCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtZQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFjO1lBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBVGxDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFJNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztZQU9kLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDN0MsQ0FBQztRQUVELHVCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFzQyxDQUFDO1lBQy9ELElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztZQUN2QyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBRUQsd0NBQXFCLEdBQXJCO1lBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDNUQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUM7YUFDdEQ7UUFDSCxDQUFDO1FBRUQsc0JBQUksNkJBQU87aUJBQVg7Z0JBQ0UsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ3pDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQzVCO3FCQUFNLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7b0JBQ3pELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDdkQ7WUFDSCxDQUFDOzs7V0FBQTtRQUVELHNCQUFJLDZCQUFPO2lCQUFYO2dCQUNFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUM1QjtxQkFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO29CQUN6RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3ZEO1lBQ0gsQ0FBQzs7O1dBQUE7UUEvQ1M7WUFBVCw0QkFBUTs7OENBQXFCO1FBQ3BCO1lBQVQsNEJBQVE7OytDQUFlO1FBRmIsUUFBUTtZQUZwQiwwQkFBTSxDQUFDLG1EQUF1QixFQUFFLDRCQUFZLEVBQUUseUJBQWdCLENBQUM7WUFDL0QsaUNBQWEsQ0FBQyxXQUFXLENBQUM7NkNBY0QsbURBQXVCO2dCQUMvQiw0QkFBWTtnQkFDVix5QkFBZ0I7V0FmdkIsUUFBUSxDQWlEcEI7UUFBRCxlQUFDO0tBakRELEFBaURDLElBQUE7SUFqRFksNEJBQVEiLCJmaWxlIjoiZm9ybS9udW1iZXIvc2YtbnVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgUnVsZXNGYWN0b3J5LCBTY2hlbWFGb3JtTG9nZ2VyKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1udW1iZXJcIilcbmV4cG9ydCBjbGFzcyBTZk51bWJlciB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBAYmluZGFibGUgbW9kZWw6IG51bWJlcjtcblxuICBzY2hlbWE6IElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbjtcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAgdmlldztcblxuICBraW5kID0gXCJudW1iZXJcIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnksXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcbiAgKSB7XG4gICAgdGhpcy52aWV3ID0gY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMubnVtYmVyO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtbnVtYmVyXCIsIHRoaXMuZm9ybSwgdGhpcy5tb2RlbCwgYXJndW1lbnRzKTtcbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMuZm9ybS4kc2NoZW1hIGFzIElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbjtcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb3JtLiRzdGVwID0gdGhpcy5mb3JtLiRzdGVwIHx8IDE7XG4gICAgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcbiAgICBpZiAodGhpcy5taW5pbXVtICE9PSB1bmRlZmluZWQgJiYgdGhpcy5tYXhpbXVtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMubnVtYmVyUmFuZ2U7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1pbmltdW0oKSB7XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5zY2hlbWEubWluaW11bSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5taW5pbXVtO1xuICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gKyB0aGlzLmZvcm0uJHN0ZXA7XG4gICAgfVxuICB9XG5cbiAgZ2V0IG1heGltdW0oKSB7XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5zY2hlbWEubWF4aW11bSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5tYXhpbXVtO1xuICAgIH0gZWxzZSBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0gLSB0aGlzLmZvcm0uJHN0ZXA7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
