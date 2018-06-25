var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../services/schema-form-configuration", "aurelia-validation"], function (require, exports, aurelia_framework_1, schema_form_configuration_1, aurelia_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommonRules = /** @class */ (function () {
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
    exports.CommonRules = CommonRules;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFPQTtRQUNFLHFCQUFvQixhQUFzQztZQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7WUFFMUQsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUY4QyxDQUFDO1FBSS9ELDhCQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDO1FBRUQsdUNBQWlCLEdBQWpCO1lBQ0UsdUNBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksdUNBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckcsQ0FBQztRQUVELHlCQUFHLEdBQUg7WUFDRSxPQUFPO1lBQ1Asb0NBQWU7aUJBQ1osVUFBVSxDQUNULE1BQU0sRUFDTixVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsYUFBb0IsSUFBSyxPQUFBLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQTFELENBQTBELEVBQzlGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxnQkFBZ0IsRUFDcEQsVUFBQyxhQUFhLElBQUssT0FBQSxDQUFDLEVBQUUsYUFBYSxlQUFBLEVBQUUsQ0FBQyxFQUFuQixDQUFtQixDQUN2QyxDQUFDO1FBQ04sQ0FBQztRQUVELDBCQUFJLEdBQUosVUFBSyxJQUFTO1lBQ1osSUFBSSxJQUFJLEdBQUcsb0NBQWU7aUJBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3ZCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkM7WUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyRDtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN4QjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQXZDVSxXQUFXO1lBRHZCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7NkNBRUssbURBQXVCO1dBRC9DLFdBQVcsQ0F3Q3ZCO1FBQUQsa0JBQUM7S0F4Q0QsQUF3Q0MsSUFBQTtJQXhDWSxrQ0FBVyIsImZpbGUiOiJydWxlcy9jb21tb24tcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUnVsZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ydWxlc1wiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIHZhbGlkYXRpb25NZXNzYWdlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLWNvbnRyb2xsZXJcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbmV4cG9ydCBjbGFzcyBDb21tb25SdWxlcyBpbXBsZW1lbnRzIElSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gIHR5cGUgPSBcImNvbW1vblwiO1xuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cblxuICBzZXRDdXN0b21NZXNzYWdlcygpIHtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXNbXCJjb25zdFwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlc1tcImNvbnN0XCJdIHx8IHZhbGlkYXRpb25NZXNzYWdlc1tcImVxdWFsc1wiXTtcbiAgfVxuXG4gIGFkZCgpOiB2b2lkIHtcbiAgICAvLyBlbnVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJlbnVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgYWxsb3dlZFZhbHVlczogYW55W10pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gYWxsb3dlZFZhbHVlcy5pbmRleE9mKHZhbCkgPj0gMCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5lbnVtIHx8IFwiSW52YWxpZCBvcHRpb25cIixcbiAgICAgICAgKGFsbG93ZWRWYWx1ZXMpID0+ICh7IGFsbG93ZWRWYWx1ZXMgfSlcbiAgICAgICk7XG4gIH1cblxuICBiaW5kKGN0cmw6IGFueSk6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+IHtcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmVuc3VyZShcIm1vZGVsXCIpXG4gICAgICAuZGlzcGxheU5hbWUoY3RybC50aXRsZSlcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XG4gICAgaWYgKGN0cmwuc2NoZW1hLmNvbnN0KSB7XG4gICAgICBydWxlID0gcnVsZS5lcXVhbHMoY3RybC5zY2hlbWEuY29uc3QpO1xuICAgIH1cbiAgICBpZiAoY3RybC5zY2hlbWEuZW51bSkge1xuICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZShcImVudW1cIiwgY3RybC5zY2hlbWEuZW51bSk7XG4gICAgfVxuICAgIGlmIChjdHJsLnJlcXVpcmVkKSB7XG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
