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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, SfArray;
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
            SfArray = /** @class */ (function () {
                function SfArray(configuration, rules) {
                    this.configuration = configuration;
                    this.rules = rules;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = "array";
                }
                SfArray.prototype.bind = function () {
                    this.rules.bind(this);
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfArray.prototype, "schema", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Array)
                ], SfArray.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfArray.prototype, "required", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfArray.prototype, "title", void 0);
                SfArray = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory),
                    aurelia_framework_1.customElement("sf-array"),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                        rules_factory_1.RulesFactory])
                ], SfArray);
                return SfArray;
            }());
            exports_1("SfArray", SfArray);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQWlCRSxpQkFDUyxhQUFzQyxFQUN0QyxLQUFtQjtvQkFEbkIsa0JBQWEsR0FBYixhQUFhLENBQXlCO29CQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFjO29CQU41QixPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUU1QixTQUFJLEdBQUcsT0FBTyxDQUFDO2dCQUtYLENBQUM7Z0JBRUwsc0JBQUksR0FBSjtvQkFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkFoQlM7b0JBQVQsNEJBQVE7O3VEQUFhO2dCQUNaO29CQUFULDRCQUFROztzREFBYztnQkFDYjtvQkFBVCw0QkFBUTs7eURBQWtCO2dCQUNqQjtvQkFBVCw0QkFBUTs7c0RBQWU7Z0JBSmIsT0FBTztvQkFGbkIsMEJBQU0sQ0FBQyxtREFBdUIsRUFBRSw0QkFBWSxDQUFDO29CQUM3QyxpQ0FBYSxDQUFDLFVBQVUsQ0FBQztxREFZQSxtREFBdUI7d0JBQy9CLDRCQUFZO21CQVpqQixPQUFPLENBa0JuQjtnQkFBRCxjQUFDO2FBbEJELEFBa0JDOztRQUNELENBQUMiLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIFJ1bGVzRmFjdG9yeSlcbkBjdXN0b21FbGVtZW50KFwic2YtYXJyYXlcIilcbmV4cG9ydCBjbGFzcyBTZkFycmF5IHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogYW55O1xuICBAYmluZGFibGUgbW9kZWw6IGFueVtdO1xuICBAYmluZGFibGUgcmVxdWlyZWQ6IHN0cmluZztcbiAgQGJpbmRhYmxlIHRpdGxlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcImFycmF5XCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5XG4gICkgeyB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
