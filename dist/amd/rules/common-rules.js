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
    exports.CommonRules = CommonRules;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQUNFLHFCQUFvQixhQUFzQztZQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7WUFFMUQsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUY4QyxDQUFDO1FBSS9ELDhCQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDO1FBRUQsdUNBQWlCLEdBQWpCO1lBQ0UsdUNBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksdUNBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckcsQ0FBQztRQUVELHlCQUFHLEdBQUg7WUFDRSxPQUFPO1lBQ1Asb0NBQWU7aUJBQ1osVUFBVSxDQUNULE1BQU0sRUFDTixVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsYUFBb0IsSUFBSyxPQUFBLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQTFELENBQTBELEVBQzlGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSwwQ0FBMEMsRUFDOUUsVUFBQyxhQUFhLElBQUssT0FBQSxDQUFDLEVBQUUsYUFBYSxlQUFBLEVBQUUsQ0FBQyxFQUFuQixDQUFtQixDQUN2QyxDQUFDO1FBQ04sQ0FBQztRQUVELDBCQUFJLEdBQUosVUFBSyxJQUFTO1lBQ1osSUFBSSxJQUFJLEdBQUcsb0NBQWU7aUJBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO2lCQUM5QixTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO2dCQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDckQ7WUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO2FBQ3hCO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBdkNVLFdBQVc7WUFEdkIsMEJBQU0sQ0FBQyxtREFBdUIsQ0FBQzs2Q0FFSyxtREFBdUI7V0FEL0MsV0FBVyxDQXdDdkI7UUFBRCxrQkFBQztLQXhDRCxBQXdDQyxJQUFBO0lBeENZLGtDQUFXIiwiZmlsZSI6InJ1bGVzL2NvbW1vbi1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSdWxlcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3J1bGVzXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgdmFsaWRhdGlvbk1lc3NhZ2VzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbmV4cG9ydCBjbGFzcyBDb21tb25SdWxlcyBpbXBsZW1lbnRzIElSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gIHR5cGUgPSBcImNvbW1vblwiO1xuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cblxuICBzZXRDdXN0b21NZXNzYWdlcygpIHtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXNbXCJjb25zdFwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlc1tcImNvbnN0XCJdIHx8IHZhbGlkYXRpb25NZXNzYWdlc1tcImVxdWFsc1wiXTtcbiAgfVxuXG4gIGFkZCgpOiB2b2lkIHtcbiAgICAvLyBlbnVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJlbnVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgYWxsb3dlZFZhbHVlczogYW55W10pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gYWxsb3dlZFZhbHVlcy5pbmRleE9mKHZhbCkgPj0gMCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5lbnVtIHx8IFwiJHskZGlzcGxheU5hbWV9IGhhcyBhbiBpbnZhbGlkIHNlbGVjdGlvblwiLFxuICAgICAgICAoYWxsb3dlZFZhbHVlcykgPT4gKHsgYWxsb3dlZFZhbHVlcyB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogYW55KTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4ge1xuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuZW5zdXJlKFwibW9kZWxcIilcbiAgICAgIC5kaXNwbGF5TmFtZShjdHJsLnNjaGVtYS50aXRsZSlcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XG4gICAgaWYgKGN0cmwuc2NoZW1hLmNvbnN0KSB7XG4gICAgICBydWxlID0gcnVsZS5lcXVhbHMoY3RybC5zY2hlbWEuY29uc3QpO1xuICAgIH1cbiAgICBpZiAoY3RybC5zY2hlbWEuZW51bSkge1xuICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZShcImVudW1cIiwgY3RybC5zY2hlbWEuZW51bSk7XG4gICAgfVxuICAgIGlmIChjdHJsLmZvcm0uJHJlcXVpcmVkKSB7XG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xuICAgIH1cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
