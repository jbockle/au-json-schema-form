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
                        .displayName(ctrl.schema.title)
                        .satisfies(function () { return true; });
                    if (ctrl.form.$required) {
                        rule = rule.required();
                    }
                    if (Number.isInteger(ctrl.schema.maxItems)) {
                        rule = rule.maxItems(ctrl.schema.maxItems);
                    }
                    if (Number.isInteger(ctrl.schema.minItems)) {
                        rule = rule.minItems(ctrl.schema.minItems);
                    }
                    if (ctrl.schema.uniqueItems) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFPRSxvQkFBb0IsYUFBc0M7b0JBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtnQkFBSSxDQUFDO2dCQUUvRCw2QkFBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztnQkFDYixDQUFDO2dCQUVELHdCQUFHLEdBQUg7b0JBQ0UsY0FBYztnQkFDaEIsQ0FBQztnQkFFRCx5QkFBSSxHQUFKLFVBQUssSUFBYTtvQkFDaEIsSUFBSSxJQUFJLEdBQUcsb0NBQWU7eUJBQ3ZCLFlBQVksRUFBRTt5QkFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7eUJBQzlCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO29CQUN6QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN4QjtvQkFDRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztxQkFDNUM7b0JBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQzFDLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzVDO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7d0JBQzNCLDhCQUE4QjtxQkFDL0I7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RCLENBQUM7Z0JBN0JVLFVBQVU7b0JBRHRCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7cURBRUssbURBQXVCO21CQUQvQyxVQUFVLENBOEJ0QjtnQkFBRCxpQkFBQzthQTlCRCxBQThCQzs7UUFDRCxDQUFDIiwiZmlsZSI6InJ1bGVzL2FycmF5LXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2ZBcnJheSB9IGZyb20gXCIuLi9mb3JtL2FycmF5L3NmLWFycmF5XCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5leHBvcnQgY2xhc3MgQXJyYXlSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgLy8gdW5pcXVlSXRlbXNcbiAgfVxuXG4gIGJpbmQoY3RybDogU2ZBcnJheSkge1xuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuZW5zdXJlT2JqZWN0KClcbiAgICAgIC5kaXNwbGF5TmFtZShjdHJsLnNjaGVtYS50aXRsZSlcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XG4gICAgaWYgKGN0cmwuZm9ybS4kcmVxdWlyZWQpIHtcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XG4gICAgfVxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuc2NoZW1hLm1heEl0ZW1zKSkge1xuICAgICAgcnVsZSA9IHJ1bGUubWF4SXRlbXMoY3RybC5zY2hlbWEubWF4SXRlbXMpO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLnNjaGVtYS5taW5JdGVtcykpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1pbkl0ZW1zKGN0cmwuc2NoZW1hLm1pbkl0ZW1zKTtcbiAgICB9XG4gICAgaWYgKGN0cmwuc2NoZW1hLnVuaXF1ZUl0ZW1zKSB7XG4gICAgICAvLyBUT0RPOiBhZGQgdW5pcXVlIGl0ZW1zIHJ1bGVcbiAgICB9XG4gICAgcnVsZS5vbihjdHJsLm1vZGVsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
