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
        this.schema = this.form.$schema;
        this.rules.bind(this);
        this.form.$step = this.form.$step || 1;
        this.determineViewStrategy();
    };
    SfNumber.prototype.determineViewStrategy = function () {
        if (this.minimum !== undefined && this.maximum !== undefined) {
            this.view = this.configuration.templates.numberRange;
        }
    };
    Object.defineProperty(SfNumber.prototype, "minimum", {
        get: function () {
            if (Number.isInteger(this.schema.minimum)) {
                return this.schema.minimum;
            }
            else if (Number.isInteger(this.schema.exclusiveMinimum)) {
                return this.schema.exclusiveMinimum + this.form.$step;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SfNumber.prototype, "maximum", {
        get: function () {
            if (Number.isInteger(this.schema.maximum)) {
                return this.schema.maximum;
            }
            else if (Number.isInteger(this.schema.exclusiveMaximum)) {
                return this.schema.exclusiveMaximum - this.form.$step;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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Q29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBSdWxlc0ZhY3RvcnksIFNjaGVtYUZvcm1Mb2dnZXIpXG5AY3VzdG9tRWxlbWVudChcInNmLW51bWJlclwiKVxuZXhwb3J0IGNsYXNzIFNmTnVtYmVyIHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBtb2RlbDogbnVtYmVyO1xuXG4gIHNjaGVtYTogSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICB2aWV3O1xuXG4gIGtpbmQgPSBcIm51bWJlclwiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxuICApIHtcbiAgICB0aGlzLnZpZXcgPSBjb25maWd1cmF0aW9uLnRlbXBsYXRlcy5udW1iZXI7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1udW1iZXJcIiwgdGhpcy5mb3JtLCB0aGlzLm1vZGVsLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEgYXMgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uO1xuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvcm0uJHN0ZXAgPSB0aGlzLmZvcm0uJHN0ZXAgfHwgMTtcbiAgICB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xuICAgIGlmICh0aGlzLm1pbmltdW0gIT09IHVuZGVmaW5lZCAmJiB0aGlzLm1heGltdW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy52aWV3ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5udW1iZXJSYW5nZTtcbiAgICB9XG4gIH1cblxuICBnZXQgbWluaW11bSgpIHtcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLnNjaGVtYS5taW5pbXVtKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1pbmltdW07XG4gICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1pbmltdW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWluaW11bSArIHRoaXMuZm9ybS4kc3RlcDtcbiAgICB9XG4gIH1cblxuICBnZXQgbWF4aW11bSgpIHtcbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcih0aGlzLnNjaGVtYS5tYXhpbXVtKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2NoZW1hLm1heGltdW07XG4gICAgfSBlbHNlIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuc2NoZW1hLmV4Y2x1c2l2ZU1heGltdW0pKSB7XG4gICAgICByZXR1cm4gdGhpcy5zY2hlbWEuZXhjbHVzaXZlTWF4aW11bSAtIHRoaXMuZm9ybS4kc3RlcDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
