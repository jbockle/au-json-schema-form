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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var schema_form_configuration_1 = require("../services/schema-form-configuration");
var aurelia_validation_1 = require("aurelia-validation");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVEQUEyQztBQUMzQyxtRkFBZ0Y7QUFDaEYseURBQStGO0FBRy9GO0lBQ0UscUJBQW9CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUUxRCxTQUFJLEdBQUcsUUFBUSxDQUFDO0lBRjhDLENBQUM7SUFJL0QsOEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCx1Q0FBaUIsR0FBakI7UUFDRSx1Q0FBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSx1Q0FBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQseUJBQUcsR0FBSDtRQUNFLE9BQU87UUFDUCxvQ0FBZTthQUNaLFVBQVUsQ0FDVCxNQUFNLEVBQ04sVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGFBQW9CLElBQUssT0FBQSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUExRCxDQUEwRCxFQUM5RixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksZ0JBQWdCLEVBQ3BELFVBQUMsYUFBYSxJQUFLLE9BQUEsQ0FBQyxFQUFFLGFBQWEsZUFBQSxFQUFFLENBQUMsRUFBbkIsQ0FBbUIsQ0FDdkMsQ0FBQztJQUNOLENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQUssSUFBUztRQUNaLElBQUksSUFBSSxHQUFHLG9DQUFlO2FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUN2QixTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3BCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3JEO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDeEI7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUF2Q1UsV0FBVztRQUR2QiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDO3lDQUVLLG1EQUF1QjtPQUQvQyxXQUFXLENBd0N2QjtJQUFELGtCQUFDO0NBeENELEFBd0NDLElBQUE7QUF4Q1ksa0NBQVciLCJmaWxlIjoicnVsZXMvY29tbW9uLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJ1bGVzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcnVsZXNcIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCB2YWxpZGF0aW9uTWVzc2FnZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIENvbW1vblJ1bGVzIGltcGxlbWVudHMgSVJ1bGVzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgdHlwZSA9IFwiY29tbW9uXCI7XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG4gIHNldEN1c3RvbU1lc3NhZ2VzKCkge1xuICAgIHZhbGlkYXRpb25NZXNzYWdlc1tcImNvbnN0XCJdID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzW1wiY29uc3RcIl0gfHwgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiZXF1YWxzXCJdO1xuICB9XG5cbiAgYWRkKCk6IHZvaWQge1xuICAgIC8vIGVudW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImVudW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBhbGxvd2VkVmFsdWVzOiBhbnlbXSkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBhbGxvd2VkVmFsdWVzLmluZGV4T2YodmFsKSA+PSAwIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmVudW0gfHwgXCJJbnZhbGlkIG9wdGlvblwiLFxuICAgICAgICAoYWxsb3dlZFZhbHVlcykgPT4gKHsgYWxsb3dlZFZhbHVlcyB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogYW55KTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4ge1xuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuZW5zdXJlKFwibW9kZWxcIilcbiAgICAgIC5kaXNwbGF5TmFtZShjdHJsLnRpdGxlKVxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcbiAgICBpZiAoY3RybC5zY2hlbWEuY29uc3QpIHtcbiAgICAgIHJ1bGUgPSBydWxlLmVxdWFscyhjdHJsLnNjaGVtYS5jb25zdCk7XG4gICAgfVxuICAgIGlmIChjdHJsLnNjaGVtYS5lbnVtKSB7XG4gICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKFwiZW51bVwiLCBjdHJsLnNjaGVtYS5lbnVtKTtcbiAgICB9XG4gICAgaWYgKGN0cmwucmVxdWlyZWQpIHtcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XG4gICAgfVxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
