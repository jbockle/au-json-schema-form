System.register(["aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, SfText;
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
            }
        ],
        execute: function () {
            SfText = /** @class */ (function () {
                function SfText(configuration, rules) {
                    this.configuration = configuration;
                    this.rules = rules;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = "string";
                }
                SfText.prototype.bind = function () {
                    this.rules.bind(this);
                    if (["date-time", "date", "time"].indexOf(this.schema.format) > -1) {
                        throw new Error("not implemented, add datetime/date/time picker here");
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfText.prototype, "schema", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfText.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfText.prototype, "required", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfText.prototype, "title", void 0);
                SfText = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory),
                    aurelia_framework_1.customElement("sf-text"),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                        rules_factory_1.RulesFactory])
                ], SfText);
                return SfText;
            }());
            exports_1("SfText", SfText);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFpQkUsZ0JBQ1MsYUFBc0MsRUFDdEMsS0FBbUI7b0JBRG5CLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtvQkFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztvQkFONUIsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztnQkFLWixDQUFDO2dCQUVMLHFCQUFJLEdBQUo7b0JBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBRXRCLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUNsRSxNQUFNLElBQUksS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7cUJBQ3hFO2dCQUNILENBQUM7Z0JBcEJTO29CQUFULDRCQUFROztzREFBYTtnQkFDWjtvQkFBVCw0QkFBUTs7cURBQVk7Z0JBQ1g7b0JBQVQsNEJBQVE7O3dEQUFrQjtnQkFDakI7b0JBQVQsNEJBQVE7O3FEQUFlO2dCQUpiLE1BQU07b0JBRmxCLDBCQUFNLENBQUMsbURBQXVCLEVBQUUsNEJBQVksQ0FBQztvQkFDN0MsaUNBQWEsQ0FBQyxTQUFTLENBQUM7cURBWUMsbURBQXVCO3dCQUMvQiw0QkFBWTttQkFaakIsTUFBTSxDQXNCbEI7Z0JBQUQsYUFBQzthQXRCRCxBQXNCQzs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vdGV4dC9zZi10ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgUnVsZXNGYWN0b3J5KVxuQGN1c3RvbUVsZW1lbnQoXCJzZi10ZXh0XCIpXG5leHBvcnQgY2xhc3MgU2ZUZXh0IHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogYW55O1xuICBAYmluZGFibGUgbW9kZWw6IGFueTtcbiAgQGJpbmRhYmxlIHJlcXVpcmVkOiBzdHJpbmc7XG4gIEBiaW5kYWJsZSB0aXRsZTogc3RyaW5nO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBraW5kID0gXCJzdHJpbmdcIjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnlcbiAgKSB7IH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcblxuICAgIGlmIChbXCJkYXRlLXRpbWVcIiwgXCJkYXRlXCIsIFwidGltZVwiXS5pbmRleE9mKHRoaXMuc2NoZW1hLmZvcm1hdCkgPiAtMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwibm90IGltcGxlbWVudGVkLCBhZGQgZGF0ZXRpbWUvZGF0ZS90aW1lIHBpY2tlciBoZXJlXCIpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
