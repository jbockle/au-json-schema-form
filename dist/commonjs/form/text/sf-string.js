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
var form_instances_1 = require("../../services/form-instances");
var SfString = /** @class */ (function () {
    function SfString(configuration, rules, logger, formInstances) {
        this.configuration = configuration;
        this.rules = rules;
        this.logger = logger;
        this.formInstances = formInstances;
        this.id = guid_1.Guid.newGuid();
        this.kind = "string";
    }
    SfString.prototype.attached = function () {
        this.logger.info("sf-string-attached");
        if (this.formCtrl.formOptions.validateOnRender) {
            this.formCtrl.validationController.validate({ object: this, propertyName: "model" });
        }
    };
    SfString.prototype.bind = function () {
        this.logger.info("sf-string", { form: this.form, model: this.model }, arguments);
        this.formCtrl = this.formInstances.get(this.formInstance);
        this.rules.bind(this);
        this.determineViewStrategy();
    };
    SfString.prototype.determineViewStrategy = function () {
        this.view = this.configuration.templates.string;
        if (this.form.$altTemplate) {
            this.view = this.form.$altTemplate;
        }
        else if (this.form.$schema.enum && this.form.$schema.enum.length <= 5) {
            this.view = this.configuration.templates.stringRadioEnum;
        }
        else if (this.form.$schema.enum) {
            this.view = this.configuration.templates.stringSelectEnum;
        }
        else if (["date-time", "date", "time"].indexOf(this.form.$schema.format) > -1) {
            if (this.configuration.templates.formats
                && this.configuration.templates.formats[this.form.$schema.format]) {
                this.view = this.configuration.templates.formats[this.form.$schema.format];
            }
        }
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfString.prototype, "form", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfString.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfString.prototype, "formInstance", void 0);
    SfString = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
        aurelia_framework_1.customElement("sf-string"),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
            rules_factory_1.RulesFactory,
            logger_1.SchemaFormLogger,
            form_instances_1.FormInstances])
    ], SfString);
    return SfString;
}());
exports.SfString = SfString;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUM1RTtTQUNGO0lBQ0gsQ0FBQztJQS9DUztRQUFULDRCQUFROzswQ0FBcUI7SUFDcEI7UUFBVCw0QkFBUTs7MkNBQWU7SUFDZDtRQUFULDRCQUFROztrREFBc0I7SUFIcEIsUUFBUTtRQVBwQiwwQkFBTSxDQUNMLG1EQUF1QixFQUN2Qiw0QkFBWSxFQUNaLHlCQUFnQixFQUNoQiw4QkFBYSxDQUNkO1FBQ0EsaUNBQWEsQ0FBQyxXQUFXLENBQUM7eUNBZUQsbURBQXVCO1lBQy9CLDRCQUFZO1lBQ1YseUJBQWdCO1lBQ1QsOEJBQWE7T0FqQjNCLFFBQVEsQ0FpRHBCO0lBQUQsZUFBQztDQWpERCxBQWlEQyxJQUFBO0FBakRZLDRCQUFRIiwiZmlsZSI6ImZvcm0vdGV4dC9zZi1zdHJpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYVN0cmluZ0RlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XHJcblxyXG5AaW5qZWN0KFxyXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gIFJ1bGVzRmFjdG9yeSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudChcInNmLXN0cmluZ1wiKVxyXG5leHBvcnQgY2xhc3MgU2ZTdHJpbmcge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogc3RyaW5nO1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICBraW5kID0gXCJzdHJpbmdcIjtcclxuXHJcbiAgdmlldztcclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ3RybDogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2Ytc3RyaW5nLWF0dGFjaGVkXCIpO1xyXG4gICAgaWYgKHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xyXG4gICAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLCBwcm9wZXJ0eU5hbWU6IFwibW9kZWxcIiB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2Ytc3RyaW5nXCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9LCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xyXG4gICAgdGhpcy52aWV3ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5zdHJpbmc7XHJcbiAgICBpZiAodGhpcy5mb3JtLiRhbHRUZW1wbGF0ZSkge1xyXG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5lbnVtICYmIHRoaXMuZm9ybS4kc2NoZW1hLmVudW0ubGVuZ3RoIDw9IDUpIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5zdHJpbmdSYWRpb0VudW07XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS4kc2NoZW1hLmVudW0pIHtcclxuICAgICAgdGhpcy52aWV3ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5zdHJpbmdTZWxlY3RFbnVtO1xyXG4gICAgfSBlbHNlIGlmIChbXCJkYXRlLXRpbWVcIiwgXCJkYXRlXCIsIFwidGltZVwiXS5pbmRleE9mKHRoaXMuZm9ybS4kc2NoZW1hLmZvcm1hdCkgPiAtMSkge1xyXG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5mb3JtYXRzXHJcbiAgICAgICAgJiYgdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5mb3JtYXRzW3RoaXMuZm9ybS4kc2NoZW1hLmZvcm1hdF0pIHtcclxuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmZvcm1hdHNbdGhpcy5mb3JtLiRzY2hlbWEuZm9ybWF0XTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
