var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../services/schema-form-configuration"], function (require, exports, aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberRules = /** @class */ (function () {
        function NumberRules(configuration) {
            this.configuration = configuration;
        }
        NumberRules.prototype.register = function () {
            this.add();
        };
        NumberRules.prototype.add = function () {
            // minimum
            aurelia_validation_1.ValidationRules
                .customRule("minimum", function (val, obj, min) { return val !== undefined ? val >= min : true; }, this.configuration.messages.minimum || "${$displayName} must be greater than or equal to ${$config.min}", function (min) { return ({ min: min }); });
            // exclusionMinimum
            aurelia_validation_1.ValidationRules
                .customRule("exclusionMinimum", function (val, obj, min) { return val !== undefined ? val > min : true; }, this.configuration.messages.exclusiveMinimum || "${$displayName} must be greater than ${$config.min}", function (min) { return ({ min: min }); });
            // maximum
            aurelia_validation_1.ValidationRules
                .customRule("maximum", function (val, obj, max) { return val !== undefined ? val <= max : true; }, this.configuration.messages.maximum || "${$displayName} must be less than or equal to ${$config.max}", function (max) { return ({ max: max }); });
            // exclusiveMaximum
            aurelia_validation_1.ValidationRules
                .customRule("exclusionMaximum", function (val, obj, max) { return val !== undefined ? val < max : true; }, this.configuration.messages.exclusiveMaximum || "${$displayName} must be less than ${$config.max}", function (max) { return ({ max: max }); });
            // multipleOf
            aurelia_validation_1.ValidationRules
                .customRule("multipleOf", function (val, obj, multiple) { return val !== undefined ? ((val % multiple) / 100) === 0 : true; }, this.configuration.messages.multipleOf || "${$displayName} must be a multiple of ${$config.multiple}", function (multiple) { return ({ multiple: multiple }); });
        };
        NumberRules.prototype.bind = function (ctrl, rule) {
            [
                "minimum",
                "maximum",
                "exclusiveMinimum",
                "exclusiveMaximum",
                "multipleOf"
            ].forEach(function (r) {
                if (Number.isInteger(ctrl.schema[r])) {
                    rule = rule.satisfiesRule(r, ctrl.schema[r]);
                }
            });
        };
        NumberRules = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
        ], NumberRules);
        return NumberRules;
    }());
    exports.NumberRules = NumberRules;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q0UsU0FBUztnQkFDVCxTQUFTO2dCQUNULGtCQUFrQjtnQkFDbEIsa0JBQWtCO2dCQUNsQixZQUFZO2FBQ2IsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO2dCQUNWLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3BDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzlDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO1FBbEVVLFdBQVc7WUFEdkIsMEJBQU0sQ0FBQyxtREFBdUIsQ0FBQzs2Q0FFSyxtREFBdUI7V0FEL0MsV0FBVyxDQW1FdkI7UUFBRCxrQkFBQztLQW5FRCxBQW1FQyxJQUFBO0lBbkVZLGtDQUFXIiwiZmlsZSI6InJ1bGVzL251bWJlci1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNmTnVtYmVyIH0gZnJvbSBcIi4uL2Zvcm0vbnVtYmVyL3NmLW51bWJlclwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIE51bWJlclJ1bGVzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICAvLyBtaW5pbXVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJtaW5pbXVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbWluKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA+PSBtaW4gOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWluaW11bSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAkeyRjb25maWcubWlufVwiLFxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcbiAgICAgICk7XG5cbiAgICAvLyBleGNsdXNpb25NaW5pbXVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJleGNsdXNpb25NaW5pbXVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbWluKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA+IG1pbiA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5leGNsdXNpdmVNaW5pbXVtIHx8IFwiJHskZGlzcGxheU5hbWV9IG11c3QgYmUgZ3JlYXRlciB0aGFuICR7JGNvbmZpZy5taW59XCIsXG4gICAgICAgIChtaW4pID0+ICh7IG1pbiB9KVxuICAgICAgKTtcblxuICAgIC8vIG1heGltdW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcIm1heGltdW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBtYXgpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDw9IG1heCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5tYXhpbXVtIHx8IFwiJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7JGNvbmZpZy5tYXh9XCIsXG4gICAgICAgIChtYXgpID0+ICh7IG1heCB9KVxuICAgICAgKTtcblxuICAgIC8vIGV4Y2x1c2l2ZU1heGltdW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImV4Y2x1c2lvbk1heGltdW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBtYXgpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDwgbWF4IDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1heGltdW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gJHskY29uZmlnLm1heH1cIixcbiAgICAgICAgKG1heCkgPT4gKHsgbWF4IH0pXG4gICAgICApO1xuXG4gICAgLy8gbXVsdGlwbGVPZlxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwibXVsdGlwbGVPZlwiLFxuICAgICAgICAodmFsLCBvYmosIG11bHRpcGxlKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/ICgodmFsICUgbXVsdGlwbGUpIC8gMTAwKSA9PT0gMCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5tdWx0aXBsZU9mIHx8IFwiJHskZGlzcGxheU5hbWV9IG11c3QgYmUgYSBtdWx0aXBsZSBvZiAkeyRjb25maWcubXVsdGlwbGV9XCIsXG4gICAgICAgIChtdWx0aXBsZSkgPT4gKHsgbXVsdGlwbGUgfSlcbiAgICAgICk7XG4gIH1cblxuICBiaW5kKGN0cmw6IFNmTnVtYmVyLCBydWxlOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55Pikge1xuICAgIFtcbiAgICAgIFwibWluaW11bVwiLFxuICAgICAgXCJtYXhpbXVtXCIsXG4gICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIixcbiAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiLFxuICAgICAgXCJtdWx0aXBsZU9mXCJcbiAgICBdLmZvckVhY2goKHIpID0+IHtcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuc2NoZW1hW3JdKSkge1xuICAgICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKHIsIGN0cmwuc2NoZW1hW3JdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
