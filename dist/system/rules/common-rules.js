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
                        .customRule("enum", function (val, obj, allowedValues) { return val !== undefined ? allowedValues.indexOf(val) >= 0 : true; }, this.configuration.messages.enum || "Invalid option", function (allowedValues) { return ({ allowedValues: allowedValues }); });
                };
                CommonRules.prototype.bind = function (ctrl) {
                    var rule = aurelia_validation_1.ValidationRules
                        .ensure("model")
                        .displayName(ctrl.title)
                        .satisfies(function () { return true; });
                    if (ctrl.schema.const) {
                        rule = rule.equals(ctrl.schema.const);
                    }
                    if (ctrl.schema.enum) {
                        rule = rule.satisfiesRule("enum", ctrl.schema.enum);
                    }
                    if (ctrl.required) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBT0UscUJBQW9CLGFBQXNDO29CQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBRTFELFNBQUksR0FBRyxRQUFRLENBQUM7Z0JBRjhDLENBQUM7Z0JBSS9ELDhCQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2dCQUNiLENBQUM7Z0JBRUQsdUNBQWlCLEdBQWpCO29CQUNFLHVDQUFrQixDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxJQUFJLHVDQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUNyRyxDQUFDO2dCQUVELHlCQUFHLEdBQUg7b0JBQ0UsT0FBTztvQkFDUCxvQ0FBZTt5QkFDWixVQUFVLENBQ1QsTUFBTSxFQUNOLFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxhQUFvQixJQUFLLE9BQUEsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBMUQsQ0FBMEQsRUFDOUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLGdCQUFnQixFQUNwRCxVQUFDLGFBQWEsSUFBSyxPQUFBLENBQUMsRUFBRSxhQUFhLGVBQUEsRUFBRSxDQUFDLEVBQW5CLENBQW1CLENBQ3ZDLENBQUM7Z0JBQ04sQ0FBQztnQkFFRCwwQkFBSSxHQUFKLFVBQUssSUFBUztvQkFDWixJQUFJLElBQUksR0FBRyxvQ0FBZTt5QkFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQzt5QkFDZixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDdkIsU0FBUyxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLENBQUM7b0JBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0JBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQ3ZDO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7d0JBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNyRDtvQkFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3hCO29CQUNELE9BQU8sSUFBSSxDQUFDO2dCQUNkLENBQUM7Z0JBdkNVLFdBQVc7b0JBRHZCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7cURBRUssbURBQXVCO21CQUQvQyxXQUFXLENBd0N2QjtnQkFBRCxrQkFBQzthQXhDRCxBQXdDQzs7UUFDRCxDQUFDIiwiZmlsZSI6InJ1bGVzL2NvbW1vbi1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSdWxlcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3J1bGVzXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgdmFsaWRhdGlvbk1lc3NhZ2VzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbmV4cG9ydCBjbGFzcyBDb21tb25SdWxlcyBpbXBsZW1lbnRzIElSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gIHR5cGUgPSBcImNvbW1vblwiO1xuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cblxuICBzZXRDdXN0b21NZXNzYWdlcygpIHtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXNbXCJjb25zdFwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlc1tcImNvbnN0XCJdIHx8IHZhbGlkYXRpb25NZXNzYWdlc1tcImVxdWFsc1wiXTtcbiAgfVxuXG4gIGFkZCgpOiB2b2lkIHtcbiAgICAvLyBlbnVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJlbnVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgYWxsb3dlZFZhbHVlczogYW55W10pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gYWxsb3dlZFZhbHVlcy5pbmRleE9mKHZhbCkgPj0gMCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5lbnVtIHx8IFwiSW52YWxpZCBvcHRpb25cIixcbiAgICAgICAgKGFsbG93ZWRWYWx1ZXMpID0+ICh7IGFsbG93ZWRWYWx1ZXMgfSlcbiAgICAgICk7XG4gIH1cblxuICBiaW5kKGN0cmw6IGFueSk6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+IHtcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmVuc3VyZShcIm1vZGVsXCIpXG4gICAgICAuZGlzcGxheU5hbWUoY3RybC50aXRsZSlcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XG4gICAgaWYgKGN0cmwuc2NoZW1hLmNvbnN0KSB7XG4gICAgICBydWxlID0gcnVsZS5lcXVhbHMoY3RybC5zY2hlbWEuY29uc3QpO1xuICAgIH1cbiAgICBpZiAoY3RybC5zY2hlbWEuZW51bSkge1xuICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZShcImVudW1cIiwgY3RybC5zY2hlbWEuZW51bSk7XG4gICAgfVxuICAgIGlmIChjdHJsLnJlcXVpcmVkKSB7XG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
