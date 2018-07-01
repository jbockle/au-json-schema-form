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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1, SfArray;
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
            SfArray = /** @class */ (function () {
                function SfArray(configuration, formService, logger) {
                    this.configuration = configuration;
                    this.formService = formService;
                    this.logger = logger;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = "array";
                }
                SfArray.prototype.bind = function () {
                    this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
                    var template = "<template>" + this.formService.buildArrayForm(this.schema, this.form, this.key, this.model) + "</template>";
                    this.view = new aurelia_framework_1.InlineViewStrategy(template);
                };
                SfArray.prototype.add = function () {
                    this.model.push(this.formService.getArrayItemDefault(this.schema, null));
                };
                SfArray.prototype.remove = function (index) {
                    this.model.splice(index, 1);
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfArray.prototype, "form", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfArray.prototype, "key", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Array)
                ], SfArray.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfArray.prototype, "schema", void 0);
                SfArray = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger),
                    aurelia_framework_1.customElement("sf-array"),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                        form_service_1.FormService,
                        logger_1.SchemaFormLogger])
                ], SfArray);
                return SfArray;
            }());
            exports_1("SfArray", SfArray);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXNCRSxpQkFDUyxhQUFzQyxFQUN0QyxXQUF3QixFQUN2QixNQUF3QjtvQkFGekIsa0JBQWEsR0FBYixhQUFhLENBQXlCO29CQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBVGxDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBRTVCLFNBQUksR0FBRyxPQUFPLENBQUM7Z0JBUVgsQ0FBQztnQkFFTCxzQkFBSSxHQUFKO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUMzRyxJQUFNLFFBQVEsR0FDWixlQUFhLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWEsQ0FBQztvQkFDMUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHNDQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDO2dCQUVELHFCQUFHLEdBQUg7b0JBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLENBQUM7Z0JBRUQsd0JBQU0sR0FBTixVQUFPLEtBQUs7b0JBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM5QixDQUFDO2dCQTlCUztvQkFBVCw0QkFBUTs7cURBQWE7Z0JBQ1o7b0JBQVQsNEJBQVE7O29EQUFhO2dCQUNaO29CQUFULDRCQUFROztzREFBYztnQkFDYjtvQkFBVCw0QkFBUTs7dURBQW9DO2dCQUpsQyxPQUFPO29CQUZuQiwwQkFBTSxDQUFDLG1EQUF1QixFQUFFLDBCQUFXLEVBQUUseUJBQWdCLENBQUM7b0JBQzlELGlDQUFhLENBQUMsVUFBVSxDQUFDO3FEQWNBLG1EQUF1Qjt3QkFDekIsMEJBQVc7d0JBQ2YseUJBQWdCO21CQWZ2QixPQUFPLENBZ0NuQjtnQkFBRCxjQUFDO2FBaENELEFBZ0NDOztRQUNELENBQUMiLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybVwiO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIEZvcm1TZXJ2aWNlLCBTY2hlbWFGb3JtTG9nZ2VyKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm07XG4gIEBiaW5kYWJsZSBrZXk6IHN0cmluZztcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcbiAgQGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb247XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcImFycmF5XCI7XG5cbiAgdmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICApIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5XCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCwgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyB9LCBhcmd1bWVudHMpO1xuICAgIGNvbnN0IHRlbXBsYXRlID1cbiAgICAgIGA8dGVtcGxhdGU+JHt0aGlzLmZvcm1TZXJ2aWNlLmJ1aWxkQXJyYXlGb3JtKHRoaXMuc2NoZW1hLCB0aGlzLmZvcm0sIHRoaXMua2V5LCB0aGlzLm1vZGVsKX08L3RlbXBsYXRlPmA7XG4gICAgdGhpcy52aWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneSh0ZW1wbGF0ZSk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5tb2RlbC5wdXNoKHRoaXMuZm9ybVNlcnZpY2UuZ2V0QXJyYXlJdGVtRGVmYXVsdCh0aGlzLnNjaGVtYSwgbnVsbCkpO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
