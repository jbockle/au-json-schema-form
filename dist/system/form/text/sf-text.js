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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFrQkUsZ0JBQ1MsYUFBc0MsRUFDdEMsS0FBbUI7b0JBRG5CLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtvQkFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztvQkFONUIsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztnQkFLWixDQUFDO2dCQUVMLHFCQUFJLEdBQUo7b0JBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3hCLENBQUM7Z0JBaEJTO29CQUFULDRCQUFROztzREFBYTtnQkFDWjtvQkFBVCw0QkFBUTs7cURBQVk7Z0JBQ1g7b0JBQVQsNEJBQVE7O3dEQUFrQjtnQkFDakI7b0JBQVQsNEJBQVE7O3FEQUFlO2dCQUpiLE1BQU07b0JBRmxCLDBCQUFNLENBQUMsbURBQXVCLEVBQUUsNEJBQVksQ0FBQztvQkFDN0MsaUNBQWEsQ0FBQyxTQUFTLENBQUM7cURBWUMsbURBQXVCO3dCQUMvQiw0QkFBWTttQkFaakIsTUFBTSxDQWtCbEI7Z0JBQUQsYUFBQzthQWxCRCxBQWtCQzs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vdGV4dC9zZi10ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcbmltcG9ydCB7IElGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tY29udHJvbGxlclwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBSdWxlc0ZhY3RvcnkpXG5AY3VzdG9tRWxlbWVudChcInNmLXRleHRcIilcbmV4cG9ydCBjbGFzcyBTZlRleHQge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55O1xuICBAYmluZGFibGUgcmVxdWlyZWQ6IHN0cmluZztcbiAgQGJpbmRhYmxlIHRpdGxlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcInN0cmluZ1wiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeVxuICApIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
