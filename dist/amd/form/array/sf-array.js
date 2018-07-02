var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../resources/logger", "../../services/form-service", "aurelia-validation", "aurelia-event-aggregator", "../../rules/array-rules"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1, aurelia_validation_1, aurelia_event_aggregator_1, array_rules_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfArray = /** @class */ (function () {
        function SfArray(arrayRules, configuration, formService, logger, validator) {
            this.arrayRules = arrayRules;
            this.configuration = configuration;
            this.formService = formService;
            this.logger = logger;
            this.validator = validator;
            this.id = guid_1.Guid.newGuid();
            this.kind = "array";
        }
        SfArray.prototype.created = function (owningView, myView) {
            this.validationController = myView.container.get(aurelia_framework_1.Optional.of(aurelia_validation_1.ValidationController));
        };
        SfArray.prototype.bind = function () {
            this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
            this.bindRules();
            this.determineViewStrategy();
            this.createView();
        };
        SfArray.prototype.determineViewStrategy = function () {
            var strategy = this.form.$altTemplate || this.configuration.templates.array;
            this.viewStrategy = strategy;
        };
        SfArray.prototype.createView = function () {
            var template = this.formService.buildArrayForm(this.schema, this.form, this.key, this.model);
            template = "<template>" + template + "</template>";
            this.view = new aurelia_framework_1.InlineViewStrategy(template);
        };
        SfArray.prototype.bindRules = function () {
            this.arrayRules.bind(this);
            this.validationController.addObject(this.model);
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
            aurelia_framework_1.inject(array_rules_1.ArrayRules, schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger, aurelia_validation_1.Validator, aurelia_event_aggregator_1.EventAggregator),
            aurelia_framework_1.customElement("sf-array"),
            __metadata("design:paramtypes", [array_rules_1.ArrayRules,
                schema_form_configuration_1.SchemaFormConfiguration,
                form_service_1.FormService,
                logger_1.SchemaFormLogger,
                aurelia_validation_1.Validator])
        ], SfArray);
        return SfArray;
    }());
    exports.SfArray = SfArray;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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VSxFQUNWLG1EQUF1QixFQUN2QiwwQkFBVyxFQUNYLHlCQUFnQixFQUNoQiw4QkFBUyxFQUNULDBDQUFlLENBQ2hCO1lBQ0EsaUNBQWEsQ0FBQyxVQUFVLENBQUM7NkNBbUJILHdCQUFVO2dCQUNQLG1EQUF1QjtnQkFDekIsMEJBQVc7Z0JBQ2YseUJBQWdCO2dCQUNkLDhCQUFTO1dBdEJsQixPQUFPLENBcUZuQjtRQUFELGNBQUM7S0FyRkQsQUFxRkMsSUFBQTtJQXJGWSwwQkFBTyIsImZpbGUiOiJmb3JtL2FycmF5L3NmLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5LCBWaWV3LCBPcHRpb25hbCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcbmltcG9ydCB7IFZhbGlkYXRvciwgVmFsaWRhdGVSZXN1bHQsIFZhbGlkYXRpb25Db250cm9sbGVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSBcImF1cmVsaWEtZXZlbnQtYWdncmVnYXRvclwiO1xuaW1wb3J0IHsgQXJyYXlSdWxlcyB9IGZyb20gXCIuLi8uLi9ydWxlcy9hcnJheS1ydWxlc1wiO1xuXG5AaW5qZWN0KFxuICBBcnJheVJ1bGVzLFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgRm9ybVNlcnZpY2UsXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXG4gIFZhbGlkYXRvcixcbiAgRXZlbnRBZ2dyZWdhdG9yXG4pXG5AY3VzdG9tRWxlbWVudChcInNmLWFycmF5XCIpXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBAYmluZGFibGUga2V5OiBzdHJpbmc7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBraW5kID0gXCJhcnJheVwiO1xuXG4gIHZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcblxuICB2aWV3U3RyYXRlZ3k6IHN0cmluZztcblxuICByZXN1bHRzOiBWYWxpZGF0ZVJlc3VsdFtdO1xuICB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFycmF5UnVsZXM6IEFycmF5UnVsZXMsXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHVibGljIHZhbGlkYXRvcjogVmFsaWRhdG9yXG4gICkge1xuXG4gIH1cblxuICBjcmVhdGVkKG93bmluZ1ZpZXc6IFZpZXcsIG15VmlldzogVmlldykge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSBteVZpZXcuY29udGFpbmVyLmdldChPcHRpb25hbC5vZihWYWxpZGF0aW9uQ29udHJvbGxlcikpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXlcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsLCBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zIH0sIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5iaW5kUnVsZXMoKTtcbiAgICB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xuICAgIHRoaXMuY3JlYXRlVmlldygpO1xuICB9XG5cbiAgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZSB8fCB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmFycmF5O1xuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVZpZXcoKSB7XG4gICAgbGV0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZS5idWlsZEFycmF5Rm9ybSh0aGlzLnNjaGVtYSwgdGhpcy5mb3JtLCB0aGlzLmtleSwgdGhpcy5tb2RlbCk7XG4gICAgdGVtcGxhdGUgPSBgPHRlbXBsYXRlPiR7dGVtcGxhdGV9PC90ZW1wbGF0ZT5gO1xuICAgIHRoaXMudmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3kodGVtcGxhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kUnVsZXMoKSB7XG4gICAgdGhpcy5hcnJheVJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XG4gIH1cblxuICBnZXRGb3JtQ29udHJvbGxlcihvdmVycmlkZUNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBvdmVycmlkZUNvbnRleHQuX19wYXJlbnRPdmVycmlkZUNvbnRleHQuYmluZGluZ0NvbnRleHQ7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5tb2RlbC5wdXNoKHRoaXMuZm9ybVNlcnZpY2UuZ2V0QXJyYXlJdGVtRGVmYXVsdCh0aGlzLnNjaGVtYSwgbnVsbCkpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oXCJ2YWxpZGF0aW5nXCIpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMubW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEucmVhZE9ubHkgfHwgISF0aGlzLmZvcm0uJGFycmF5U2NoZW1hLmNvbnN0O1xuICB9XG5cbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRhcnJheVNjaGVtYS5tYXhJdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPj0gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWluSXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID09PSB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
