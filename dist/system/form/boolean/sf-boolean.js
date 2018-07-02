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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1, SfBoolean;
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
            SfBoolean = /** @class */ (function () {
                function SfBoolean(configuration, rules, logger) {
                    this.configuration = configuration;
                    this.rules = rules;
                    this.logger = logger;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = "boolean";
                }
                SfBoolean.prototype.bind = function () {
                    this.logger.info("sf-boolean", this.form, this.model, arguments);
                    this.schema = this.form.$schema;
                    this.rules.bind(this);
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfBoolean.prototype, "form", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Boolean)
                ], SfBoolean.prototype, "model", void 0);
                SfBoolean = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger),
                    aurelia_framework_1.customElement("sf-boolean"),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                        rules_factory_1.RulesFactory,
                        logger_1.SchemaFormLogger])
                ], SfBoolean);
                return SfBoolean;
            }());
            exports_1("SfBoolean", SfBoolean);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFvQkUsbUJBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0I7b0JBRnpCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtvQkFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztvQkFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBUGxDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBRTVCLFNBQUksR0FBRyxTQUFTLENBQUM7Z0JBTWIsQ0FBQztnQkFFTCx3QkFBSSxHQUFKO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ2pFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUF1QyxDQUFDO29CQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFuQlM7b0JBQVQsNEJBQVE7O3VEQUFxQjtnQkFDcEI7b0JBQVQsNEJBQVE7O3dEQUFnQjtnQkFGZCxTQUFTO29CQUZyQiwwQkFBTSxDQUFDLG1EQUF1QixFQUFFLDRCQUFZLEVBQUUseUJBQWdCLENBQUM7b0JBQy9ELGlDQUFhLENBQUMsWUFBWSxDQUFDO3FEQVlGLG1EQUF1Qjt3QkFDL0IsNEJBQVk7d0JBQ1YseUJBQWdCO21CQWJ2QixTQUFTLENBcUJyQjtnQkFBRCxnQkFBQzthQXJCRCxBQXFCQzs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIFJ1bGVzRmFjdG9yeSwgU2NoZW1hRm9ybUxvZ2dlcilcbkBjdXN0b21FbGVtZW50KFwic2YtYm9vbGVhblwiKVxuZXhwb3J0IGNsYXNzIFNmQm9vbGVhbiB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBAYmluZGFibGUgbW9kZWw6IGJvb2xlYW47XG5cbiAgc2NoZW1hOiBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBraW5kID0gXCJib29sZWFuXCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyXG4gICkgeyB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYm9vbGVhblwiLCB0aGlzLmZvcm0sIHRoaXMubW9kZWwsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYSBhcyBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uO1xuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
