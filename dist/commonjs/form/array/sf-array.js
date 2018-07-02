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
var logger_1 = require("../../resources/logger");
var form_service_1 = require("../../services/form-service");
var aurelia_validation_1 = require("aurelia-validation");
var aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
var array_rules_1 = require("../../rules/array-rules");
var SfArray = /** @class */ (function () {
    function SfArray(arrayRules, configuration, formService, logger, validator, eventAggregator, vc) {
        this.arrayRules = arrayRules;
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.validator = validator;
        this.eventAggregator = eventAggregator;
        this.id = guid_1.Guid.newGuid();
        this.kind = "array";
        this.validationController = vc;
    }
    SfArray.prototype.created = function (owningView, myView) {
        // this.validationController = myView.container.get(Optional.of(ValidationController));
    };
    SfArray.prototype.bind = function (bindingContext, overrideContext) {
        this.arrayRules.bind(this);
        this.validationController.addObject(this.model);
        this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
        var template = this.formService.buildArrayForm(this.schema, this.form, this.key, this.model);
        template = "<template>" + template + "</template>";
        this.view = new aurelia_framework_1.InlineViewStrategy(template);
    };
    SfArray.prototype.getFormController = function (overrideContext) {
        return overrideContext.__parentOverrideContext.bindingContext;
    };
    SfArray.prototype.add = function () {
        this.model.push(this.formService.getArrayItemDefault(this.schema, null));
        this.validationController.validate({ object: this.model });
        if (this.configuration.validationRenderer) {
            this.logger.warn("validating");
            this.validationController.validate();
        }
    };
    SfArray.prototype.remove = function (index) {
        this.model.splice(index, 1);
        this.validationController.validate({ object: this.model });
    };
    Object.defineProperty(SfArray.prototype, "isDisabled", {
        get: function () {
            return this.form.$arraySchema.readOnly || !!this.form.$arraySchema.const;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SfArray.prototype, "atCapacity", {
        get: function () {
            return Number.isInteger(this.form.$arraySchema.maxItems)
                ? this.model.length >= this.form.$arraySchema.maxItems : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SfArray.prototype, "atMinimumCapacity", {
        get: function () {
            return Number.isInteger(this.form.$arraySchema.minItems)
                ? this.model.length === this.form.$arraySchema.minItems : false;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfArray.prototype, "form", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfArray.prototype, "key", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], SfArray.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfArray.prototype, "schema", void 0);
    SfArray = __decorate([
        aurelia_framework_1.inject(array_rules_1.ArrayRules, schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger, aurelia_validation_1.Validator, aurelia_event_aggregator_1.EventAggregator, aurelia_validation_1.ValidationController),
        aurelia_framework_1.customElement("sf-array"),
        __metadata("design:paramtypes", [array_rules_1.ArrayRules,
            schema_form_configuration_1.SchemaFormConfiguration,
            form_service_1.FormService,
            logger_1.SchemaFormLogger,
            aurelia_validation_1.Validator,
            aurelia_event_aggregator_1.EventAggregator,
            aurelia_validation_1.ValidationController])
    ], SfArray);
    return SfArray;
}());
exports.SfArray = SfArray;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QW9CO09BekJmLE9BQU8sQ0EwRW5CO0lBQUQsY0FBQztDQTFFRCxBQTBFQyxJQUFBO0FBMUVZLDBCQUFPIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3ksIE9wdGlvbmFsLCBWaWV3LCBOZXdJbnN0YW5jZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtXCI7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIFZhbGlkYXRlUmVzdWx0LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sbGVyIH0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbGxlclwiO1xuaW1wb3J0IHsgQXJyYXlSdWxlcyB9IGZyb20gXCIuLi8uLi9ydWxlcy9hcnJheS1ydWxlc1wiO1xuXG5AaW5qZWN0KFxuICBBcnJheVJ1bGVzLFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgRm9ybVNlcnZpY2UsXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXG4gIFZhbGlkYXRvcixcbiAgRXZlbnRBZ2dyZWdhdG9yLFxuICBWYWxpZGF0aW9uQ29udHJvbGxlclxuKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIGtleTogc3RyaW5nO1xuICBAYmluZGFibGUgbW9kZWw6IGFueVtdO1xuICBAYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbjtcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwiYXJyYXlcIjtcblxuICB2aWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgcmVzdWx0czogVmFsaWRhdGVSZXN1bHRbXTtcblxuICBjb250cm9sbGVyOiBGb3JtQ29udHJvbGxlcjtcblxuICB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFycmF5UnVsZXM6IEFycmF5UnVsZXMsXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHVibGljIHZhbGlkYXRvcjogVmFsaWRhdG9yLFxuICAgIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3IsXG4gICAgdmM6IFZhbGlkYXRpb25Db250cm9sbGVyXG4gICkge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSB2YztcbiAgfVxuXG4gIGNyZWF0ZWQob3duaW5nVmlldzogVmlldywgbXlWaWV3OiBWaWV3KSB7XG4gICAgLy8gdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IG15Vmlldy5jb250YWluZXIuZ2V0KE9wdGlvbmFsLm9mKFZhbGlkYXRpb25Db250cm9sbGVyKSk7XG4gIH1cblxuICBiaW5kKGJpbmRpbmdDb250ZXh0OiBhbnksIG92ZXJyaWRlQ29udGV4dDogYW55KSB7XG4gICAgdGhpcy5hcnJheVJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5XCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCwgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyB9LCBhcmd1bWVudHMpO1xuICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuZm9ybVNlcnZpY2UuYnVpbGRBcnJheUZvcm0odGhpcy5zY2hlbWEsIHRoaXMuZm9ybSwgdGhpcy5rZXksIHRoaXMubW9kZWwpO1xuICAgIHRlbXBsYXRlID0gYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlfTwvdGVtcGxhdGU+YDtcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KHRlbXBsYXRlKTtcbiAgfVxuXG4gIGdldEZvcm1Db250cm9sbGVyKG92ZXJyaWRlQ29udGV4dDogYW55KSB7XG4gICAgcmV0dXJuIG92ZXJyaWRlQ29udGV4dC5fX3BhcmVudE92ZXJyaWRlQ29udGV4dC5iaW5kaW5nQ29udGV4dDtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICB0aGlzLm1vZGVsLnB1c2godGhpcy5mb3JtU2VydmljZS5nZXRBcnJheUl0ZW1EZWZhdWx0KHRoaXMuc2NoZW1hLCBudWxsKSk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25SZW5kZXJlcikge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihcInZhbGlkYXRpbmdcIik7XG4gICAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XG4gIH1cblxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kYXJyYXlTY2hlbWEuY29uc3Q7XG4gIH1cblxuICBnZXQgYXRDYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1heEl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA+PSB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1heEl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBnZXQgYXRNaW5pbXVtQ2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRhcnJheVNjaGVtYS5taW5JdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWluSXRlbXMgOiBmYWxzZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
