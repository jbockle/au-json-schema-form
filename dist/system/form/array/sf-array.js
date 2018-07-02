System.register(["aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../resources/logger", "../../services/form-service", "aurelia-validation", "aurelia-event-aggregator", "../../rules/array-rules"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1, aurelia_validation_1, aurelia_event_aggregator_1, array_rules_1, SfArray;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (form_service_1_1) {
                form_service_1 = form_service_1_1;
            },
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            },
            function (aurelia_event_aggregator_1_1) {
                aurelia_event_aggregator_1 = aurelia_event_aggregator_1_1;
            },
            function (array_rules_1_1) {
                array_rules_1 = array_rules_1_1;
            }
        ],
        execute: function () {
            SfArray = /** @class */ (function () {
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
            exports_1("SfArray", SfArray);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXlDRSxpQkFDUyxVQUFzQixFQUN0QixhQUFzQyxFQUN0QyxXQUF3QixFQUN2QixNQUF3QixFQUN6QixTQUFvQixFQUNuQixlQUFnQyxFQUN4QyxFQUF3QjtvQkFOakIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtvQkFDdEIsa0JBQWEsR0FBYixhQUFhLENBQXlCO29CQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQVc7b0JBQ25CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtvQkFsQjFDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBRTVCLFNBQUksR0FBRyxPQUFPLENBQUM7b0JBbUJiLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQseUJBQU8sR0FBUCxVQUFRLFVBQWdCLEVBQUUsTUFBWTtvQkFDcEMsdUZBQXVGO2dCQUN6RixDQUFDO2dCQUVELHNCQUFJLEdBQUosVUFBSyxjQUFtQixFQUFFLGVBQW9CO29CQUM1QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ2hELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUMzRyxJQUFJLFFB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ZixPQUFPLENBMEVuQjtnQkFBRCxjQUFDO2FBMUVELEFBMEVDOztRQUNELENBQUMiLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSwgT3B0aW9uYWwsIFZpZXcsIE5ld0luc3RhbmNlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm1cIjtcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcbmltcG9ydCB7IFZhbGlkYXRvciwgVmFsaWRhdGVSZXN1bHQsIFZhbGlkYXRpb25Db250cm9sbGVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSBcImF1cmVsaWEtZXZlbnQtYWdncmVnYXRvclwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZm9ybS1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSBcIi4uLy4uL3J1bGVzL2FycmF5LXJ1bGVzXCI7XG5cbkBpbmplY3QoXG4gIEFycmF5UnVsZXMsXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBGb3JtU2VydmljZSxcbiAgU2NoZW1hRm9ybUxvZ2dlcixcbiAgVmFsaWRhdG9yLFxuICBFdmVudEFnZ3JlZ2F0b3IsXG4gIFZhbGlkYXRpb25Db250cm9sbGVyXG4pXG5AY3VzdG9tRWxlbWVudChcInNmLWFycmF5XCIpXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBAYmluZGFibGUga2V5OiBzdHJpbmc7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBraW5kID0gXCJhcnJheVwiO1xuXG4gIHZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcblxuICByZXN1bHRzOiBWYWxpZGF0ZVJlc3VsdFtdO1xuXG4gIGNvbnRyb2xsZXI6IEZvcm1Db250cm9sbGVyO1xuXG4gIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXJyYXlSdWxlczogQXJyYXlSdWxlcyxcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwdWJsaWMgdmFsaWRhdG9yOiBWYWxpZGF0b3IsXG4gICAgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvcixcbiAgICB2YzogVmFsaWRhdGlvbkNvbnRyb2xsZXJcbiAgKSB7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHZjO1xuICB9XG5cbiAgY3JlYXRlZChvd25pbmdWaWV3OiBWaWV3LCBteVZpZXc6IFZpZXcpIHtcbiAgICAvLyB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyID0gbXlWaWV3LmNvbnRhaW5lci5nZXQoT3B0aW9uYWwub2YoVmFsaWRhdGlvbkNvbnRyb2xsZXIpKTtcbiAgfVxuXG4gIGJpbmQoYmluZGluZ0NvbnRleHQ6IGFueSwgb3ZlcnJpZGVDb250ZXh0OiBhbnkpIHtcbiAgICB0aGlzLmFycmF5UnVsZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZE9iamVjdCh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXlcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsLCBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zIH0sIGFyZ3VtZW50cyk7XG4gICAgbGV0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZS5idWlsZEFycmF5Rm9ybSh0aGlzLnNjaGVtYSwgdGhpcy5mb3JtLCB0aGlzLmtleSwgdGhpcy5tb2RlbCk7XG4gICAgdGVtcGxhdGUgPSBgPHRlbXBsYXRlPiR7dGVtcGxhdGV9PC90ZW1wbGF0ZT5gO1xuICAgIHRoaXMudmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3kodGVtcGxhdGUpO1xuICB9XG5cbiAgZ2V0Rm9ybUNvbnRyb2xsZXIob3ZlcnJpZGVDb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gb3ZlcnJpZGVDb250ZXh0Ll9fcGFyZW50T3ZlcnJpZGVDb250ZXh0LmJpbmRpbmdDb250ZXh0O1xuICB9XG5cbiAgYWRkKCkge1xuICAgIHRoaXMubW9kZWwucHVzaCh0aGlzLmZvcm1TZXJ2aWNlLmdldEFycmF5SXRlbURlZmF1bHQodGhpcy5zY2hlbWEsIG51bGwpKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKFwidmFsaWRhdGluZ1wiKTtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLm1vZGVsLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLnJlYWRPbmx5IHx8ICEhdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5jb25zdDtcbiAgfVxuXG4gIGdldCBhdENhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWF4SXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID49IHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWF4SXRlbXMgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBhdE1pbmltdW1DYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1pbkl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA9PT0gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5taW5JdGVtcyA6IGZhbHNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
