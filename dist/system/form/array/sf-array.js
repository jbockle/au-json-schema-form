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
            exports_1("SfArray", SfArray);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQXFDRSxpQkFDUyxVQUFzQixFQUN0QixhQUFzQyxFQUN0QyxXQUF3QixFQUN2QixNQUF3QixFQUN6QixTQUFvQjtvQkFKcEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtvQkFDdEIsa0JBQWEsR0FBYixhQUFhLENBQXlCO29CQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtvQkFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQVc7b0JBaEI3QixPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUU1QixTQUFJLEdBQUcsT0FBTyxDQUFDO2dCQWlCZixDQUFDO2dCQUVELHlCQUFPLEdBQVAsVUFBUSxVQUFnQixFQUFFLE1BQVk7b0JBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBUSxDQUFDLEVBQUUsQ0FBQyx5Q0FBb0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RGLENBQUM7Z0JBRUQsc0JBQUksR0FBSjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDM0csSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUNqQixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNwQixDQUFDO2dCQUVELHVDQUFxQixHQUFyQjtvQkFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENB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YTtnQkFDWjtvQkFBVCw0QkFBUTs7c0RBQWM7Z0JBQ2I7b0JBQVQsNEJBQVE7O3VEQUFvQztnQkFKbEMsT0FBTztvQkFUbkIsMEJBQU0sQ0FDTCx3QkFBVSxFQUNWLG1EQUF1QixFQUN2QiwwQkFBVyxFQUNYLHlCQUFnQixFQUNoQiw4QkFBUyxFQUNULDBDQUFlLENBQ2hCO29CQUNBLGlDQUFhLENBQUMsVUFBVSxDQUFDO3FEQW1CSCx3QkFBVTt3QkFDUCxtREFBdUI7d0JBQ3pCLDBCQUFXO3dCQUNmLHlCQUFnQjt3QkFDZCw4QkFBUzttQkF0QmxCLE9BQU8sQ0FxRm5CO2dCQUFELGNBQUM7YUFyRkQsQUFxRkM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL2FycmF5L3NmLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5LCBWaWV3LCBPcHRpb25hbCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcbmltcG9ydCB7IFZhbGlkYXRvciwgVmFsaWRhdGVSZXN1bHQsIFZhbGlkYXRpb25Db250cm9sbGVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSBcImF1cmVsaWEtZXZlbnQtYWdncmVnYXRvclwiO1xuaW1wb3J0IHsgQXJyYXlSdWxlcyB9IGZyb20gXCIuLi8uLi9ydWxlcy9hcnJheS1ydWxlc1wiO1xuXG5AaW5qZWN0KFxuICBBcnJheVJ1bGVzLFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgRm9ybVNlcnZpY2UsXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXG4gIFZhbGlkYXRvcixcbiAgRXZlbnRBZ2dyZWdhdG9yXG4pXG5AY3VzdG9tRWxlbWVudChcInNmLWFycmF5XCIpXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBAYmluZGFibGUga2V5OiBzdHJpbmc7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBraW5kID0gXCJhcnJheVwiO1xuXG4gIHZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcblxuICB2aWV3U3RyYXRlZ3k6IHN0cmluZztcblxuICByZXN1bHRzOiBWYWxpZGF0ZVJlc3VsdFtdO1xuICB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFycmF5UnVsZXM6IEFycmF5UnVsZXMsXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHVibGljIHZhbGlkYXRvcjogVmFsaWRhdG9yXG4gICkge1xuXG4gIH1cblxuICBjcmVhdGVkKG93bmluZ1ZpZXc6IFZpZXcsIG15VmlldzogVmlldykge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSBteVZpZXcuY29udGFpbmVyLmdldChPcHRpb25hbC5vZihWYWxpZGF0aW9uQ29udHJvbGxlcikpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXlcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsLCBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zIH0sIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5iaW5kUnVsZXMoKTtcbiAgICB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xuICAgIHRoaXMuY3JlYXRlVmlldygpO1xuICB9XG5cbiAgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xuICAgIGNvbnN0IHN0cmF0ZWd5ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZSB8fCB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmFycmF5O1xuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVZpZXcoKSB7XG4gICAgbGV0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZS5idWlsZEFycmF5Rm9ybSh0aGlzLnNjaGVtYSwgdGhpcy5mb3JtLCB0aGlzLmtleSwgdGhpcy5tb2RlbCk7XG4gICAgdGVtcGxhdGUgPSBgPHRlbXBsYXRlPiR7dGVtcGxhdGV9PC90ZW1wbGF0ZT5gO1xuICAgIHRoaXMudmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3kodGVtcGxhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kUnVsZXMoKSB7XG4gICAgdGhpcy5hcnJheVJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XG4gIH1cblxuICBnZXRGb3JtQ29udHJvbGxlcihvdmVycmlkZUNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBvdmVycmlkZUNvbnRleHQuX19wYXJlbnRPdmVycmlkZUNvbnRleHQuYmluZGluZ0NvbnRleHQ7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5tb2RlbC5wdXNoKHRoaXMuZm9ybVNlcnZpY2UuZ2V0QXJyYXlJdGVtRGVmYXVsdCh0aGlzLnNjaGVtYSwgbnVsbCkpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oXCJ2YWxpZGF0aW5nXCIpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMubW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEucmVhZE9ubHkgfHwgISF0aGlzLmZvcm0uJGFycmF5U2NoZW1hLmNvbnN0O1xuICB9XG5cbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRhcnJheVNjaGVtYS5tYXhJdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPj0gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWluSXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID09PSB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
