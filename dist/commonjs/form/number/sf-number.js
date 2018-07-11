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
var guid_1 = require("../../resources/guid");
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var rules_factory_1 = require("../../rules/rules-factory");
var logger_1 = require("../../resources/logger");
var SfNumber = /** @class */ (function () {
    function SfNumber(configuration, rules, logger) {
        this.configuration = configuration;
        this.rules = rules;
        this.logger = logger;
        this.id = guid_1.Guid.newGuid();
        this.kind = "number";
        this.view = configuration.templates.number;
    }
    SfNumber.prototype.bind = function () {
        this.logger.info("sf-number", this.form, this.model, arguments);
        this.form.$schema = this.form.$schema;
        this.rules.bind(this);
        this.form.$step = this.form.$step || 1;
        this.determineViewStrategy();
    };
    SfNumber.prototype.determineViewStrategy = function () {
        if (this.form.$altTemplate) {
            this.view = this.form.$altTemplate;
        }
        else if (this.minimum !== undefined && this.maximum !== undefined) {
            this.view = this.configuration.templates.numberRange;
        }
    };
    Object.defineProperty(SfNumber.prototype, "minimum", {
        get: function () {
            if (Number.isInteger(this.form.$schema.minimum)) {
                return this.form.$schema.minimum;
            }
            else if (Number.isInteger(this.form.$schema.exclusiveMinimum)) {
                return this.form.$schema.exclusiveMinimum + this.form.$step;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SfNumber.prototype, "maximum", {
        get: function () {
            if (Number.isInteger(this.form.$schema.maximum)) {
                return this.form.$schema.maximum;
            }
            else if (Number.isInteger(this.form.$schema.exclusiveMaximum)) {
                return this.form.$schema.exclusiveMaximum - this.form.$step;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfNumber.prototype, "form", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Number)
    ], SfNumber.prototype, "model", void 0);
    SfNumber = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger),
        aurelia_framework_1.customElement("sf-number"),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
            rules_factory_1.RulesFactory,
            logger_1.SchemaFormLogger])
    ], SfNumber);
    return SfNumber;
}());
exports.SfNumber = SfNumber;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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RUFBRSw0QkFBWSxFQUFFLHlCQUFnQixDQUFDO1FBQy9ELGlDQUFhLENBQUMsV0FBVyxDQUFDO3lDQVlELG1EQUF1QjtZQUMvQiw0QkFBWTtZQUNWLHlCQUFnQjtPQWJ2QixRQUFRLENBaURwQjtJQUFELGVBQUM7Q0FqREQsQUFpREMsSUFBQTtBQWpEWSw0QkFBUSIsImZpbGUiOiJmb3JtL251bWJlci9zZi1udW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5cclxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgUnVsZXNGYWN0b3J5LCBTY2hlbWFGb3JtTG9nZ2VyKVxyXG5AY3VzdG9tRWxlbWVudChcInNmLW51bWJlclwiKVxyXG5leHBvcnQgY2xhc3MgU2ZOdW1iZXIge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogbnVtYmVyO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIHZpZXc7XHJcblxyXG4gIGtpbmQgPSBcIm51bWJlclwiO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcclxuICApIHtcclxuICAgIHRoaXMudmlldyA9IGNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLm51bWJlcjtcclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtbnVtYmVyXCIsIHRoaXMuZm9ybSwgdGhpcy5tb2RlbCwgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZm9ybS4kc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEgYXMgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uO1xyXG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5mb3JtLiRzdGVwID0gdGhpcy5mb3JtLiRzdGVwIHx8IDE7XHJcbiAgICB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xyXG4gIH1cclxuXHJcbiAgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xyXG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5taW5pbXVtICE9PSB1bmRlZmluZWQgJiYgdGhpcy5tYXhpbXVtICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5udW1iZXJSYW5nZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBtaW5pbXVtKCkge1xyXG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluaW11bSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLm1pbmltdW07XHJcbiAgICB9IGVsc2UgaWYgKE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEuZXhjbHVzaXZlTWluaW11bSkpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0gKyB0aGlzLmZvcm0uJHN0ZXA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbWF4aW11bSgpIHtcclxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1heGltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5tYXhpbXVtO1xyXG4gICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5leGNsdXNpdmVNYXhpbXVtIC0gdGhpcy5mb3JtLiRzdGVwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
