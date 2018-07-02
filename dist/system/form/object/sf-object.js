System.register(["aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../resources/logger", "../../services/form-service"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1, SfObject;
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
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (form_service_1_1) {
                form_service_1 = form_service_1_1;
            }
        ],
        execute: function () {
            SfObject = /** @class */ (function () {
                function SfObject(configuration, formService, logger) {
                    this.configuration = configuration;
                    this.formService = formService;
                    this.logger = logger;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = "object";
                }
                SfObject.prototype.bind = function () {
                    this.logger.info("sf-object", { form: this.form, model: this.model, schema: this.schema }, arguments);
                    this.view = new aurelia_framework_1.InlineViewStrategy("<template>" + this.formService.buildObjectForm(this.schema, this.form, this.model) + "</template>");
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfObject.prototype, "form", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfObject.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfObject.prototype, "schema", void 0);
                SfObject = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger),
                    aurelia_framework_1.customElement("sf-object"),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                        form_service_1.FormService,
                        logger_1.SchemaFormLogger])
                ], SfObject);
                return SfObject;
            }());
            exports_1("SfObject", SfObject);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBcUJFLGtCQUNTLGFBQXNDLEVBQ3RDLFdBQXdCLEVBQ3ZCLE1BQXdCO29CQUZ6QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFUbEMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztnQkFRWixDQUFDO2dCQUVMLHVCQUFJLEdBQUo7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDdEcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHNDQUFrQixDQUNoQyxlQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFhLENBQUMsQ0FBQztnQkFDcEcsQ0FBQztnQkFwQlM7b0JBQVQsNEJBQVE7O3NEQUFxQjtnQkFDcEI7b0JBQVQsNEJBQVE7O3VEQUFlO2dCQUNkO29CQUFULDRCQUFROzt3REFBcUM7Z0JBSG5DLFFBQVE7b0JBRnBCLDBCQUFNLENBQUMsbURBQXVCLEVBQUUsMEJBQVcsRUFBRSx5QkFBZ0IsQ0FBQztvQkFDOUQsaUNBQWEsQ0FBQyxXQUFXLENBQUM7cURBYUQsbURBQXVCO3dCQUN6QiwwQkFBVzt3QkFDZix5QkFBZ0I7bUJBZHZCLFFBQVEsQ0FzQnBCO2dCQUFELGVBQUM7YUF0QkQsQUFzQkM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL29iamVjdC9zZi1vYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBGb3JtU2VydmljZSwgU2NoZW1hRm9ybUxvZ2dlcilcbkBjdXN0b21FbGVtZW50KFwic2Ytb2JqZWN0XCIpXG5leHBvcnQgY2xhc3MgU2ZPYmplY3Qge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBvYmplY3Q7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbjtcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwib2JqZWN0XCI7XG5cbiAgdmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICApIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLW9iamVjdFwiLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwsIHNjaGVtYTogdGhpcy5zY2hlbWEgfSwgYXJndW1lbnRzKTtcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxuICAgICAgYDx0ZW1wbGF0ZT4ke3RoaXMuZm9ybVNlcnZpY2UuYnVpbGRPYmplY3RGb3JtKHRoaXMuc2NoZW1hLCB0aGlzLmZvcm0sIHRoaXMubW9kZWwpfTwvdGVtcGxhdGU+YCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
