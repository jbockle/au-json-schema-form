System.register(["aurelia-framework", "../services/schema-form-configuration", "aurelia-validation"], function (exports_1, context_1) {
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
    var aurelia_framework_1, schema_form_configuration_1, aurelia_validation_1, CommonRules;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            }
        ],
        execute: function () {
            CommonRules = /** @class */ (function () {
                function CommonRules(configuration) {
                    this.configuration = configuration;
                    this.type = "common";
                }
                CommonRules.prototype.register = function () {
                    this.add();
                };
                CommonRules.prototype.setCustomMessages = function () {
                    aurelia_validation_1.validationMessages["const"] = this.configuration.messages["const"] || aurelia_validation_1.validationMessages["equals"];
                };
                CommonRules.prototype.add = function () {
                    // enum
                    aurelia_validation_1.ValidationRules
                        .customRule("enum", function (val, obj, allowedValues) { return val !== undefined ? allowedValues.indexOf(val) >= 0 : true; }, this.configuration.messages.enum || "${$displayName} has an invalid selection", function (allowedValues) { return ({ allowedValues: allowedValues }); });
                };
                CommonRules.prototype.bind = function (ctrl) {
                    var rule = aurelia_validation_1.ValidationRules
                        .ensure("model")
                        .displayName(ctrl.schema.title)
                        .satisfies(function () { return true; });
                    if (ctrl.schema.const) {
                        rule = rule.equals(ctrl.schema.const);
                    }
                    if (ctrl.schema.enum) {
                        rule = rule.satisfiesRule("enum", ctrl.schema.enum);
                    }
                    if (ctrl.form.$required) {
                        rule = rule.required();
                    }
                    return rule;
                };
                CommonRules = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
                ], CommonRules);
                return CommonRules;
            }());
            exports_1("CommonRules", CommonRules);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT0UscUJBQW9CLGFBQXNDO29CQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBRTFELFNBQUksR0FBRyxRQUFRLENBQUM7Z0JBRjhDLENBQUM7Z0JBSS9ELDhCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNiLENBQUM7Z0JBRUQsdUNBQWlCLEdBQWpCO29CQUNFLHVDQUFrQixDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHVDQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRyxDQUFDO2dCQUVELHlCQUFHLEdBQUg7b0JBQ0UsT0FBTztvQkFDUCxvQ0FBZTt5QkFDWixVQUFVLENBQ1QsTUFBTSxFQUNOLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxhQUFvQixJQUFLLE9BQUEsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBMUQsQ0FBMEQsRUFDOUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLDBDQUEwQyxFQUM5RSxVQUFDLGFBQWEsSUFBSyxPQUFBLENBQUMsRUFBRSxhQUFhLGVBQUEsRUFBRSxDQUFDLEVBQW5CLENBQW1CLENBQ3ZDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCwwQkFBSSxHQUFKLFVBQUssSUFBUztvQkFDWixJQUFJLElBQUksR0FBRyxvQ0FBZTt5QkFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQzt5QkFDZixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7eUJBQzlCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO29CQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO3dCQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN2QztvQkFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO3dCQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztxQkFDckQ7b0JBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTt3QkFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDeEI7b0JBQ0QsT0FBTyxJQUFJLENBQUM7Z0JBQ2QsQ0FBQztnQkF2Q1UsV0FBVztvQkFEdkIsMEJBQU0sQ0FBQyxtREFBdUIsQ0FBQztxREFFSyxtREFBdUI7bUJBRC9DLFdBQVcsQ0F3Q3ZCO2dCQUFELGtCQUFDO2FBeENELEFBd0NDOztRQUNELENBQUMiLCJmaWxlIjoicnVsZXMvY29tbW9uLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJ1bGVzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcnVsZXNcIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCB2YWxpZGF0aW9uTWVzc2FnZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIENvbW1vblJ1bGVzIGltcGxlbWVudHMgSVJ1bGVzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgdHlwZSA9IFwiY29tbW9uXCI7XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG4gIHNldEN1c3RvbU1lc3NhZ2VzKCkge1xuICAgIHZhbGlkYXRpb25NZXNzYWdlc1tcImNvbnN0XCJdID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzW1wiY29uc3RcIl0gfHwgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiZXF1YWxzXCJdO1xuICB9XG5cbiAgYWRkKCk6IHZvaWQge1xuICAgIC8vIGVudW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImVudW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBhbGxvd2VkVmFsdWVzOiBhbnlbXSkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBhbGxvd2VkVmFsdWVzLmluZGV4T2YodmFsKSA+PSAwIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmVudW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gaGFzIGFuIGludmFsaWQgc2VsZWN0aW9uXCIsXG4gICAgICAgIChhbGxvd2VkVmFsdWVzKSA9PiAoeyBhbGxvd2VkVmFsdWVzIH0pXG4gICAgICApO1xuICB9XG5cbiAgYmluZChjdHJsOiBhbnkpOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55PiB7XG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5lbnN1cmUoXCJtb2RlbFwiKVxuICAgICAgLmRpc3BsYXlOYW1lKGN0cmwuc2NoZW1hLnRpdGxlKVxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcbiAgICBpZiAoY3RybC5zY2hlbWEuY29uc3QpIHtcbiAgICAgIHJ1bGUgPSBydWxlLmVxdWFscyhjdHJsLnNjaGVtYS5jb25zdCk7XG4gICAgfVxuICAgIGlmIChjdHJsLnNjaGVtYS5lbnVtKSB7XG4gICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKFwiZW51bVwiLCBjdHJsLnNjaGVtYS5lbnVtKTtcbiAgICB9XG4gICAgaWYgKGN0cmwuZm9ybS4kcmVxdWlyZWQpIHtcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XG4gICAgfVxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
