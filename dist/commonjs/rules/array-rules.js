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
var aurelia_validation_1 = require("aurelia-validation");
var aurelia_framework_1 = require("aurelia-framework");
var schema_form_configuration_1 = require("../services/schema-form-configuration");
var ArrayRules = /** @class */ (function () {
    function ArrayRules(configuration) {
        this.configuration = configuration;
    }
    ArrayRules.prototype.register = function () {
        this.add();
    };
    ArrayRules.prototype.add = function () {
        // minimum
        aurelia_validation_1.ValidationRules
            .customRule("minimum", function (val, obj, min) { return val !== undefined ? val >= min : true; }, this.configuration.messages.minimum || "${$displayName} must be greater than or equal to ${$config.min}", function (min) { return ({ min: min }); });
        // exclusionMinimum
        aurelia_validation_1.ValidationRules
            .customRule("exclusiveMinimum", function (val, obj, min) { return val !== undefined ? val > min : true; }, this.configuration.messages.exclusiveMinimum || "${$displayName} must be greater than ${$config.min}", function (min) { return ({ min: min }); });
        // maximum
        aurelia_validation_1.ValidationRules
            .customRule("maximum", function (val, obj, max) { return val !== undefined ? val <= max : true; }, this.configuration.messages.maximum || "${$displayName} must be less than or equal to ${$config.max}", function (max) { return ({ max: max }); });
        // exclusiveMaximum
        aurelia_validation_1.ValidationRules
            .customRule("exclusiveMaximum", function (val, obj, max) { return val !== undefined ? val < max : true; }, this.configuration.messages.exclusiveMaximum || "${$displayName} must be less than ${$config.max}", function (max) { return ({ max: max }); });
        // multipleOf
        aurelia_validation_1.ValidationRules
            .customRule("multipleOf", function (val, obj, multiple) { return val !== undefined ? ((val % multiple) / 100) === 0 : true; }, this.configuration.messages.multipleOf || "${$displayName} must be a multiple of ${$config.multiple}", function (multiple) { return ({ multiple: multiple }); });
    };
    ArrayRules.prototype.bind = function (ctrl, rule) {
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
    ArrayRules = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
    ], ArrayRules);
    return ArrayRules;
}());
exports.ArrayRules = ArrayRules;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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SixVQUFLLElBQWEsRUFBRSxJQUFtQztRQUNyRDtZQUNFLFNBQVM7WUFDVCxTQUFTO1lBQ1Qsa0JBQWtCO1lBQ2xCLGtCQUFrQjtZQUNsQixZQUFZO1NBQ2IsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFDO1lBQ1YsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDcEMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWxFVSxVQUFVO1FBRHRCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7eUNBRUssbURBQXVCO09BRC9DLFVBQVUsQ0FtRXRCO0lBQUQsaUJBQUM7Q0FuRUQsQUFtRUMsSUFBQTtBQW5FWSxnQ0FBVSIsImZpbGUiOiJydWxlcy9hcnJheS1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNmQXJyYXkgfSBmcm9tIFwiLi4vZm9ybS9hcnJheS9zZi1hcnJheVwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIEFycmF5UnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICByZWdpc3RlcigpIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIC8vIG1pbmltdW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcIm1pbmltdW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBtaW4pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsID49IG1pbiA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5taW5pbXVtIHx8IFwiJHskZGlzcGxheU5hbWV9IG11c3QgYmUgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvICR7JGNvbmZpZy5taW59XCIsXG4gICAgICAgIChtaW4pID0+ICh7IG1pbiB9KVxuICAgICAgKTtcblxuICAgIC8vIGV4Y2x1c2lvbk1pbmltdW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBtaW4pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsID4gbWluIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1pbmltdW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gJHskY29uZmlnLm1pbn1cIixcbiAgICAgICAgKG1pbikgPT4gKHsgbWluIH0pXG4gICAgICApO1xuXG4gICAgLy8gbWF4aW11bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwibWF4aW11bVwiLFxuICAgICAgICAodmFsLCBvYmosIG1heCkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPD0gbWF4IDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1heGltdW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHskY29uZmlnLm1heH1cIixcbiAgICAgICAgKG1heCkgPT4gKHsgbWF4IH0pXG4gICAgICApO1xuXG4gICAgLy8gZXhjbHVzaXZlTWF4aW11bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiLFxuICAgICAgICAodmFsLCBvYmosIG1heCkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPCBtYXggOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZXhjbHVzaXZlTWF4aW11bSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGxlc3MgdGhhbiAkeyRjb25maWcubWF4fVwiLFxuICAgICAgICAobWF4KSA9PiAoeyBtYXggfSlcbiAgICAgICk7XG5cbiAgICAvLyBtdWx0aXBsZU9mXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbXVsdGlwbGUpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gKCh2YWwgJSBtdWx0aXBsZSkgLyAxMDApID09PSAwIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm11bHRpcGxlT2YgfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7JGNvbmZpZy5tdWx0aXBsZX1cIixcbiAgICAgICAgKG11bHRpcGxlKSA9PiAoeyBtdWx0aXBsZSB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogU2ZBcnJheSwgcnVsZTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4pIHtcbiAgICBbXG4gICAgICBcIm1pbmltdW1cIixcbiAgICAgIFwibWF4aW11bVwiLFxuICAgICAgXCJleGNsdXNpdmVNaW5pbXVtXCIsXG4gICAgICBcImV4Y2x1c2l2ZU1heGltdW1cIixcbiAgICAgIFwibXVsdGlwbGVPZlwiXG4gICAgXS5mb3JFYWNoKChyKSA9PiB7XG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLnNjaGVtYVtyXSkpIHtcbiAgICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZShyLCBjdHJsLnNjaGVtYVtyXSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
