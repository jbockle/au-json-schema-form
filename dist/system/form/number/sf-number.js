System.register(["aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory", "../../resources/logger"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1, SfNumber;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (rules_factory_1_1) {
                rules_factory_1 = rules_factory_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            }
        ],
        execute: function () {
            SfNumber = /** @class */ (function () {
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
                    if (this.form.$altTemplate) {
                        this.view = this.form.$altTemplate;
                    }
                    else if (this.minimum !== undefined && this.maximum !== undefined) {
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
            exports_1("SfNumber", SfNumber);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBc0JFLGtCQUNTLGFBQXNDLEVBQ3RDLEtBQW1CLEVBQ2xCLE1BQXdCO29CQUZ6QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7b0JBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWtCO29CQVRsQyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUk1QixTQUFJLEdBQUcsUUFBUSxDQUFDO29CQU9kLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7Z0JBQzdDLENBQUM7Z0JBRUQsdUJBQUksR0FBSjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUNoRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBc0MsQ0FBQztvQkFDL0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQztvQkFDdkMsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsd0NBQXFCLEdBQXJCO29CQUNFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUU7d0JBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUM7cUJBQ3BDO3lCQUFNLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7d0JBQ25FLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDO3FCQUN0RDtnQkFDSCxDQUFDO2dCQUVELHNCQUFJLDZCQUFPO3lCQUFYO3dCQUNFLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFOzRCQUN6QyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDO3lCQUM1Qjs2QkFBTSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFOzRCQUN6RCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ3ZEO29CQUNILENBQUM7OzttQkFBQTtnQkFFRCxzQkFBSSw2QkFBTzt5QkFBWDt3QkFDRSxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTs0QkFDekMsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQzt5QkFDNUI7NkJBQU0sSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsRUFBRTs0QkFDekQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO3lCQUN2RDtvQkFDSCxDQUFDOzs7bUJBQUE7Z0JBakRTO29CQUFULDRCQUFROztzREFBcUI7Z0JBQ3BCO29CQUFULDRCQUFROzt1REFBZTtnQkFGYixRQUFRO29CQUZwQiwwQkFBTSxDQUFDLG1EQUF1QixFQUFFLDRCQUFZLEVBQUUseUJBQWdCLENBQUM7b0JBQy9ELGlDQUFhLENBQUMsV0FBVyxDQUFDO3FEQWNELG1EQUF1Qjt3QkFDL0IsNEJBQVk7d0JBQ1YseUJBQWdCO21CQWZ2QixRQUFRLENBbURwQjtnQkFBRCxlQUFDO2FBbkRELEFBbURDOztRQUNELENBQUMiLCJmaWxlIjoiZm9ybS9udW1iZXIvc2YtbnVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgUnVsZXNGYWN0b3J5LCBTY2hlbWFGb3JtTG9nZ2VyKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1udW1iZXJcIilcbmV4cG9ydCBjbGFzcyBTZk51bWJlciB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBAYmluZGFibGUgbW9kZWw6IG51bWJlcjtcblxuICBzY2hlbWE6IElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbjtcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAgdmlldztcblxuICBraW5kID0gXCJudW1iZXJcIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnksXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcbiAgKSB7XG4gICAgdGhpcy52aWV3ID0gY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMubnVtYmVyO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtbnVtYmVyXCIsIHRoaXMuZm9ybSwgdGhpcy5tb2RlbCwgYXJndW1lbnRzKTtcbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMuZm9ybS4kc2NoZW1hIGFzIElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbjtcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb3JtLiRzdGVwID0gdGhpcy5mb3JtLiRzdGVwIHx8IDE7XG4gICAgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcbiAgICBpZiAodGhpcy5mb3JtLiRhbHRUZW1wbGF0ZSkge1xuICAgICAgdGhpcy52aWV3ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMubWluaW11bSAhPT0gdW5kZWZpbmVkICYmIHRoaXMubWF4aW11bSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLm51bWJlclJhbmdlO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtaW5pbXVtKCkge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1pbmltdW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWluaW11bTtcbiAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5leGNsdXNpdmVNaW5pbXVtICsgdGhpcy5mb3JtLiRzdGVwO1xuICAgIH1cbiAgfVxuXG4gIGdldCBtYXhpbXVtKCkge1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLm1heGltdW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEubWF4aW11bTtcbiAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIC0gdGhpcy5mb3JtLiRzdGVwO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
