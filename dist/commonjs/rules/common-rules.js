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
            .customRule("enum", function (val, obj, allowedValues) { return val !== undefined ? allowedValues.indexOf(val) >= 0 : true; }, this.configuration.messages.enum || "${$displayName} has an invalid selection.", function (allowedValues) { return ({ allowedValues: allowedValues }); });
    };
    CommonRules.prototype.bind = function (ctrl) {
        var rule = aurelia_validation_1.ValidationRules
            .ensure("model")
            .displayName(ctrl.form.$schema.title)
            .satisfies(function () { return true; });
        if (ctrl.form.$schema.const) {
            rule = rule.equals(ctrl.form.$schema.const);
        }
        if (ctrl.form.$schema.enum) {
            rule = rule.satisfiesRule("enum", ctrl.form.$schema.enum);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVEQUEyQztBQUMzQyxtRkFBZ0Y7QUFDaEYseURBQStGO0FBRy9GO0lBQ0UscUJBQW9CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUUxRCxTQUFJLEdBQUcsUUFBUSxDQUFDO0lBRjhDLENBQUM7SUFJL0QsOEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCx1Q0FBaUIsR0FBakI7UUFDRSx1Q0FBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSx1Q0FBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQseUJBQUcsR0FBSDtRQUNFLE9BQU87UUFDUCxvQ0FBZTthQUNaLFVBQVUsQ0FDVCxNQUFNLEVBQ04sVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGFBQW9CLElBQUssT0FBQSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUExRCxDQUEwRCxFQUM5RixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksMkNBQTJDLEVBQy9FLFVBQUMsYUFBYSxJQUFLLE9BQUEsQ0FBQyxFQUFFLGFBQWEsZUFBQSxFQUFFLENBQUMsRUFBbkIsQ0FBbUIsQ0FDdkMsQ0FBQztJQUNOLENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQUssSUFBUztRQUNaLElBQUksSUFBSSxHQUFHLG9DQUFlO2FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3BDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQzNCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzdDO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7WUFDMUIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBdkNVLFdBQVc7UUFEdkIsMEJBQU0sQ0FBQyxtREFBdUIsQ0FBQzt5Q0FFSyxtREFBdUI7T0FEL0MsV0FBVyxDQXdDdkI7SUFBRCxrQkFBQztDQXhDRCxBQXdDQyxJQUFBO0FBeENZLGtDQUFXIiwiZmlsZSI6InJ1bGVzL2NvbW1vbi1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSdWxlcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3J1bGVzXCI7XHJcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgdmFsaWRhdGlvbk1lc3NhZ2VzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcclxuXHJcbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXHJcbmV4cG9ydCBjbGFzcyBDb21tb25SdWxlcyBpbXBsZW1lbnRzIElSdWxlcyB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XHJcblxyXG4gIHR5cGUgPSBcImNvbW1vblwiO1xyXG5cclxuICByZWdpc3RlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuYWRkKCk7XHJcbiAgfVxyXG5cclxuICBzZXRDdXN0b21NZXNzYWdlcygpIHtcclxuICAgIHZhbGlkYXRpb25NZXNzYWdlc1tcImNvbnN0XCJdID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzW1wiY29uc3RcIl0gfHwgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiZXF1YWxzXCJdO1xyXG4gIH1cclxuXHJcbiAgYWRkKCk6IHZvaWQge1xyXG4gICAgLy8gZW51bVxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgIFwiZW51bVwiLFxyXG4gICAgICAgICh2YWwsIG9iaiwgYWxsb3dlZFZhbHVlczogYW55W10pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gYWxsb3dlZFZhbHVlcy5pbmRleE9mKHZhbCkgPj0gMCA6IHRydWUsXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmVudW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gaGFzIGFuIGludmFsaWQgc2VsZWN0aW9uLlwiLFxyXG4gICAgICAgIChhbGxvd2VkVmFsdWVzKSA9PiAoeyBhbGxvd2VkVmFsdWVzIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBiaW5kKGN0cmw6IGFueSk6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+IHtcclxuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5lbnN1cmUoXCJtb2RlbFwiKVxyXG4gICAgICAuZGlzcGxheU5hbWUoY3RybC5mb3JtLiRzY2hlbWEudGl0bGUpXHJcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XHJcbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEuY29uc3QpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUuZXF1YWxzKGN0cmwuZm9ybS4kc2NoZW1hLmNvbnN0KTtcclxuICAgIH1cclxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS5lbnVtKSB7XHJcbiAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUoXCJlbnVtXCIsIGN0cmwuZm9ybS4kc2NoZW1hLmVudW0pO1xyXG4gICAgfVxyXG4gICAgaWYgKGN0cmwuZm9ybS4kcmVxdWlyZWQpIHtcclxuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBydWxlO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
