System.register(["aurelia-validation", "aurelia-framework", "../services/schema-form-configuration"], function (exports_1, context_1) {
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
    var aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, ArrayRules;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            }
        ],
        execute: function () {
            ArrayRules = /** @class */ (function () {
                function ArrayRules(configuration) {
                    this.configuration = configuration;
                }
                ArrayRules.prototype.register = function () {
                    this.add();
                };
                ArrayRules.prototype.add = function () {
                    // minimum
                    aurelia_validation_1.ValidationRules
                        .customRule("minimum", function (val, obj, min) { return val !== undefined ? val >= min : true; }, this.configuration.messages.minimum || "${$displayName} must be greater than or equal to ${$config.min}", function (min) { return ({ min: min }); });
                    // exclusionMinimum
                    aurelia_validation_1.ValidationRules
                        .customRule("exclusiveMinimum", function (val, obj, min) { return val !== undefined ? val > min : true; }, this.configuration.messages.exclusiveMinimum || "${$displayName} must be greater than ${$config.min}", function (min) { return ({ min: min }); });
                    // maximum
                    aurelia_validation_1.ValidationRules
                        .customRule("maximum", function (val, obj, max) { return val !== undefined ? val <= max : true; }, this.configuration.messages.maximum || "${$displayName} must be less than or equal to ${$config.max}", function (max) { return ({ max: max }); });
                    // exclusiveMaximum
                    aurelia_validation_1.ValidationRules
                        .customRule("exclusiveMaximum", function (val, obj, max) { return val !== undefined ? val < max : true; }, this.configuration.messages.exclusiveMaximum || "${$displayName} must be less than ${$config.max}", function (max) { return ({ max: max }); });
                    // multipleOf
                    aurelia_validation_1.ValidationRules
                        .customRule("multipleOf", function (val, obj, multiple) { return val !== undefined ? ((val % multiple) / 100) === 0 : true; }, this.configuration.messages.multipleOf || "${$displayName} must be a multiple of ${$config.multiple}", function (multiple) { return ({ multiple: multiple }); });
                };
                ArrayRules.prototype.bind = function (ctrl, rule) {
                    [
                        "minimum",
                        "maximum",
                        "exclusiveMinimum",
                        "exclusiveMaximum",
                        "multipleOf"
                    ].forEach(function (r) {
                        if (Number.isInteger(ctrl.schema[r])) {
                            rule = rule.satisfiesRule(r, ctrl.schema[r]);
                        }
                    });
                };
                ArrayRules = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
                ], ArrayRules);
                return ArrayRules;
            }());
            exports_1("ArrayRules", ArrayRules);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFPRSxvQkFBb0IsYUFBc0M7b0JBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtnQkFBSSxDQUFDO2dCQUUvRCw2QkFBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDYixDQUFDO2dCQUVELHdCQUFHLEdBQUg7b0JBQ0UsVUFBVTtvQkFDVixvQ0FBZTt5QkFDWixVQUFVLENBQ1QsU0FBUyxFQUNULFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQXJDLENBQXFDLEVBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSxpRUFBaUUsRUFDeEcsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxFQUFULENBQVMsQ0FDbkIsQ0FBQztvQkFFSixtQkFBbUI7b0JBQ25CLG9DQUFlO3lCQUNaLFVBQVUsQ0FDVCxrQkFBa0IsRUFDbEIsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBcEMsQ0FBb0MsRUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLElBQUkscURBQXFELEVBQ3JHLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsRUFBVCxDQUFTLENBQ25CLENBQUM7b0JBRUosVUFBVTtvQkFDVixvQ0FBZTt5QkFDWixVQUFVLENBQ1QsU0FBUyxFQUNULFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQXJDLENBQXFDLEVBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sSUFBSSw4REFBOEQsRUFDckcsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxFQUFULENBQVMsQ0FDbkIsQ0FBQztvQkFFSixtQkFBbUI7b0JBQ25CLG9DQUFlO3lCQUNaLFVBQVUsQ0FDVCxrQkFBa0IsRUFDbEIsVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSyxPQUFBLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBcEMsQ0FBb0MsRUFDdkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLElBQUksa0RBQWtELEVBQ2xHLFVBQUMsR0FBRyxJQUFLLE9BQUEsQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsRUFBVCxDQUFTLENBQ25CLENBQUM7b0JBRUosYUFBYTtvQkFDYixvQ0FBZTt5QkFDWixVQUFVLENBQ1QsWUFBWSxFQUNaLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxRQUFRLElBQUssT0FBQSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUF6RCxDQUF5RCxFQUNqRixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksMkRBQTJELEVBQ3JHLFVBQUMsUUFBUSxJQUFLLE9BQUEsQ0FBQyxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsRUFBZCxDQUFjLENBQzdCLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCx5QkFBSSxHQUFKLFVBQUssSUFBYSxFQUFFLElBQW1DO29CQUNyRDt3QkFDRSxTQUFTO3dCQUNULFNBQVM7d0JBQ1Qsa0JBQWtCO3dCQUNsQixrQkFBa0I7d0JBQ2xCLFlBQVk7cUJBQ2IsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO3dCQUNWLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQ3BDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzlDO29CQUNILENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBbEVVLFVBQVU7b0JBRHRCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7cURBRUssbURBQXVCO21CQUQvQyxVQUFVLENBbUV0QjtnQkFBRCxpQkFBQzthQW5FRCxBQW1FQzs7UUFDRCxDQUFDIiwiZmlsZSI6InJ1bGVzL2FycmF5LXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2ZBcnJheSB9IGZyb20gXCIuLi9mb3JtL2FycmF5L3NmLWFycmF5XCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5leHBvcnQgY2xhc3MgQXJyYXlSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgLy8gbWluaW11bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwibWluaW11bVwiLFxuICAgICAgICAodmFsLCBvYmosIG1pbikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPj0gbWluIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1pbmltdW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHskY29uZmlnLm1pbn1cIixcbiAgICAgICAgKG1pbikgPT4gKHsgbWluIH0pXG4gICAgICApO1xuXG4gICAgLy8gZXhjbHVzaW9uTWluaW11bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZXhjbHVzaXZlTWluaW11bVwiLFxuICAgICAgICAodmFsLCBvYmosIG1pbikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPiBtaW4gOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZXhjbHVzaXZlTWluaW11bSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAkeyRjb25maWcubWlufVwiLFxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcbiAgICAgICk7XG5cbiAgICAvLyBtYXhpbXVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJtYXhpbXVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbWF4KSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA8PSBtYXggOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWF4aW11bSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAkeyRjb25maWcubWF4fVwiLFxuICAgICAgICAobWF4KSA9PiAoeyBtYXggfSlcbiAgICAgICk7XG5cbiAgICAvLyBleGNsdXNpdmVNYXhpbXVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJleGNsdXNpdmVNYXhpbXVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbWF4KSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA8IG1heCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5leGNsdXNpdmVNYXhpbXVtIHx8IFwiJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuICR7JGNvbmZpZy5tYXh9XCIsXG4gICAgICAgIChtYXgpID0+ICh7IG1heCB9KVxuICAgICAgKTtcblxuICAgIC8vIG11bHRpcGxlT2ZcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcIm11bHRpcGxlT2ZcIixcbiAgICAgICAgKHZhbCwgb2JqLCBtdWx0aXBsZSkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyAoKHZhbCAlIG11bHRpcGxlKSAvIDEwMCkgPT09IDAgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubXVsdGlwbGVPZiB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHskY29uZmlnLm11bHRpcGxlfVwiLFxuICAgICAgICAobXVsdGlwbGUpID0+ICh7IG11bHRpcGxlIH0pXG4gICAgICApO1xuICB9XG5cbiAgYmluZChjdHJsOiBTZkFycmF5LCBydWxlOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55Pikge1xuICAgIFtcbiAgICAgIFwibWluaW11bVwiLFxuICAgICAgXCJtYXhpbXVtXCIsXG4gICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIixcbiAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiLFxuICAgICAgXCJtdWx0aXBsZU9mXCJcbiAgICBdLmZvckVhY2goKHIpID0+IHtcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuc2NoZW1hW3JdKSkge1xuICAgICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKHIsIGN0cmwuc2NoZW1hW3JdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
