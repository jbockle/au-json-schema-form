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
                    // uniqueItems
                };
                ArrayRules.prototype.bind = function (ctrl) {
                    var rule = aurelia_validation_1.ValidationRules
                        .ensureObject()
                        .displayName(ctrl.form.$schema.title)
                        .satisfies(function () { return true; });
                    if (ctrl.form.$required) {
                        rule = rule.required();
                    }
                    if (Number.isInteger(ctrl.form.$schema.maxItems)) {
                        rule = rule.maxItems(ctrl.form.$schema.maxItems);
                    }
                    if (Number.isInteger(ctrl.form.$schema.minItems)) {
                        rule = rule.minItems(ctrl.form.$schema.minItems);
                    }
                    if (ctrl.form.$schema.uniqueItems) {
                        // TODO: add unique items rule
                    }
                    rule.on(ctrl.model);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFPRSxvQkFBb0IsYUFBc0M7b0JBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtnQkFBSSxDQUFDO2dCQUUvRCw2QkFBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDYixDQUFDO2dCQUVELHdCQUFHLEdBQUg7b0JBQ0UsY0FBYztnQkFDaEIsQ0FBQztnQkFFRCx5QkFBSSxHQUFKLFVBQUssSUFBYTtvQkFDaEIsSUFBSSxJQUFJLEdBQUcsb0NBQWU7eUJBQ3ZCLFlBQVksRUFBRTt5QkFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO3lCQUNwQyxTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztvQkFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDeEI7b0JBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDbEQ7b0JBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDbEQ7b0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUU7d0JBQ2pDLDhCQUE4QjtxQkFDL0I7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBN0JVLFVBQVU7b0JBRHRCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7cURBRUssbURBQXVCO21CQUQvQyxVQUFVLENBOEJ0QjtnQkFBRCxpQkFBQzthQTlCRCxBQThCQzs7UUFDRCxDQUFDIiwiZmlsZSI6InJ1bGVzL2FycmF5LXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgU2ZBcnJheSB9IGZyb20gXCIuLi9mb3JtL2FycmF5L3NmLWFycmF5XCI7XHJcblxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxyXG5leHBvcnQgY2xhc3MgQXJyYXlSdWxlcyB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XHJcblxyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgdGhpcy5hZGQoKTtcclxuICB9XHJcblxyXG4gIGFkZCgpIHtcclxuICAgIC8vIHVuaXF1ZUl0ZW1zXHJcbiAgfVxyXG5cclxuICBiaW5kKGN0cmw6IFNmQXJyYXkpIHtcclxuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5lbnN1cmVPYmplY3QoKVxyXG4gICAgICAuZGlzcGxheU5hbWUoY3RybC5mb3JtLiRzY2hlbWEudGl0bGUpXHJcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XHJcbiAgICBpZiAoY3RybC5mb3JtLiRyZXF1aXJlZCkge1xyXG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoY3RybC5mb3JtLiRzY2hlbWEubWF4SXRlbXMpKSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlLm1heEl0ZW1zKGN0cmwuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKTtcclxuICAgIH1cclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zKSkge1xyXG4gICAgICBydWxlID0gcnVsZS5taW5JdGVtcyhjdHJsLmZvcm0uJHNjaGVtYS5taW5JdGVtcyk7XHJcbiAgICB9XHJcbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEudW5pcXVlSXRlbXMpIHtcclxuICAgICAgLy8gVE9ETzogYWRkIHVuaXF1ZSBpdGVtcyBydWxlXHJcbiAgICB9XHJcbiAgICBydWxlLm9uKGN0cmwubW9kZWwpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
