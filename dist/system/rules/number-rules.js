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
    var aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, NumberRules;
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
            NumberRules = /** @class */ (function () {
                function NumberRules(configuration) {
                    this.configuration = configuration;
                }
                NumberRules.prototype.register = function () {
                    this.add();
                };
                NumberRules.prototype.add = function () {
                    // minimum
                    aurelia_validation_1.ValidationRules
                        .customRule("minimum", function (val, obj, min) { return val !== undefined ? val >= min : true; }, this.configuration.messages.minimum || "${$displayName} must be greater than or equal to ${$config.min}", function (min) { return ({ min: min }); });
                    // exclusionMinimum
                    aurelia_validation_1.ValidationRules
                        .customRule("exclusionMinimum", function (val, obj, min) { return val !== undefined ? val > min : true; }, this.configuration.messages.exclusiveMinimum || "${$displayName} must be greater than ${$config.min}", function (min) { return ({ min: min }); });
                    // maximum
                    aurelia_validation_1.ValidationRules
                        .customRule("maximum", function (val, obj, max) { return val !== undefined ? val <= max : true; }, this.configuration.messages.maximum || "${$displayName} must be less than or equal to ${$config.max}", function (max) { return ({ max: max }); });
                    // exclusiveMaximum
                    aurelia_validation_1.ValidationRules
                        .customRule("exclusionMaximum", function (val, obj, max) { return val !== undefined ? val < max : true; }, this.configuration.messages.exclusiveMaximum || "${$displayName} must be less than ${$config.max}", function (max) { return ({ max: max }); });
                    // multipleOf
                    aurelia_validation_1.ValidationRules
                        .customRule("multipleOf", function (val, obj, multiple) { return val !== undefined ? ((val % multiple) / 100) === 0 : true; }, this.configuration.messages.multipleOf || "${$displayName} must be a multiple of ${$config.multiple}", function (multiple) { return ({ multiple: multiple }); });
                };
                NumberRules.prototype.bind = function (ctrl, rule) {
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
                NumberRules = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
                ], NumberRules);
                return NumberRules;
            }());
            exports_1("NumberRules", NumberRules);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFLLElBQWMsRUFBRSxJQUFtQztvQkFDdEQ7d0JBQ0UsU0FBUzt3QkFDVCxTQUFTO3dCQUNULGtCQUFrQjt3QkFDbEIsa0JBQWtCO3dCQUNsQixZQUFZO3FCQUNiLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBQzt3QkFDVixJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUNwQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUM5QztvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDO2dCQWxFVSxXQUFXO29CQUR2QiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDO3FEQUVLLG1EQUF1QjttQkFEL0MsV0FBVyxDQW1FdkI7Z0JBQUQsa0JBQUM7YUFuRUQsQUFtRUM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJydWxlcy9udW1iZXItcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTZk51bWJlciB9IGZyb20gXCIuLi9mb3JtL251bWJlci9zZi1udW1iZXJcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbmV4cG9ydCBjbGFzcyBOdW1iZXJSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgLy8gbWluaW11bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwibWluaW11bVwiLFxuICAgICAgICAodmFsLCBvYmosIG1pbikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPj0gbWluIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1pbmltdW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHskY29uZmlnLm1pbn1cIixcbiAgICAgICAgKG1pbikgPT4gKHsgbWluIH0pXG4gICAgICApO1xuXG4gICAgLy8gZXhjbHVzaW9uTWluaW11bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZXhjbHVzaW9uTWluaW11bVwiLFxuICAgICAgICAodmFsLCBvYmosIG1pbikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPiBtaW4gOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZXhjbHVzaXZlTWluaW11bSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAkeyRjb25maWcubWlufVwiLFxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcbiAgICAgICk7XG5cbiAgICAvLyBtYXhpbXVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJtYXhpbXVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbWF4KSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA8PSBtYXggOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWF4aW11bSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiBvciBlcXVhbCB0byAkeyRjb25maWcubWF4fVwiLFxuICAgICAgICAobWF4KSA9PiAoeyBtYXggfSlcbiAgICAgICk7XG5cbiAgICAvLyBleGNsdXNpdmVNYXhpbXVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJleGNsdXNpb25NYXhpbXVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbWF4KSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA8IG1heCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5leGNsdXNpdmVNYXhpbXVtIHx8IFwiJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuICR7JGNvbmZpZy5tYXh9XCIsXG4gICAgICAgIChtYXgpID0+ICh7IG1heCB9KVxuICAgICAgKTtcblxuICAgIC8vIG11bHRpcGxlT2ZcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcIm11bHRpcGxlT2ZcIixcbiAgICAgICAgKHZhbCwgb2JqLCBtdWx0aXBsZSkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyAoKHZhbCAlIG11bHRpcGxlKSAvIDEwMCkgPT09IDAgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubXVsdGlwbGVPZiB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHskY29uZmlnLm11bHRpcGxlfVwiLFxuICAgICAgICAobXVsdGlwbGUpID0+ICh7IG11bHRpcGxlIH0pXG4gICAgICApO1xuICB9XG5cbiAgYmluZChjdHJsOiBTZk51bWJlciwgcnVsZTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4pIHtcbiAgICBbXG4gICAgICBcIm1pbmltdW1cIixcbiAgICAgIFwibWF4aW11bVwiLFxuICAgICAgXCJleGNsdXNpdmVNaW5pbXVtXCIsXG4gICAgICBcImV4Y2x1c2l2ZU1heGltdW1cIixcbiAgICAgIFwibXVsdGlwbGVPZlwiXG4gICAgXS5mb3JFYWNoKChyKSA9PiB7XG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLnNjaGVtYVtyXSkpIHtcbiAgICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZShyLCBjdHJsLnNjaGVtYVtyXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
