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
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
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
                function SfArray(arrayRules, configuration, formService, logger, validator, eventAggregator) {
                    this.arrayRules = arrayRules;
                    this.configuration = configuration;
                    this.formService = formService;
                    this.logger = logger;
                    this.validator = validator;
                    this.eventAggregator = eventAggregator;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = "array";
                }
                SfArray.prototype.validate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    _a = this;
                                    return [4 /*yield*/, this.validator.validateProperty(this, "model")];
                                case 1:
                                    _a.results = _b.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                SfArray.prototype.bind = function (bindingContext, overrideContext) {
                    this.arrayRules.bind(this);
                    this.controller = this.getFormController(overrideContext);
                    this.controller.validationController.addObject(this.model);
                    this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
                    var template = this.formService.buildArrayForm(this.schema, this.form, this.key, this.model);
                    template = "<template>" + template + "</template>";
                    this.view = new aurelia_framework_1.InlineViewStrategy(template);
                    this.validate();
                };
                SfArray.prototype.getFormController = function (overrideContext) {
                    return overrideContext.__parentOverrideContext.bindingContext;
                };
                SfArray.prototype.add = function () {
                    this.model.push(this.formService.getArrayItemDefault(this.schema, null));
                    this.controller.validateOnRender();
                    this.eventAggregator.publish("form-array-modified");
                };
                SfArray.prototype.remove = function (index) {
                    this.model.splice(index, 1);
                    this.validate();
                    this.eventAggregator.publish("form-array-modified");
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
                        aurelia_validation_1.Validator,
                        aurelia_event_aggregator_1.EventAggregator])
                ], SfArray);
                return SfArray;
            }());
            exports_1("SfArray", SfArray);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBK0JFLGlCQUNTLFVBQXNCLEVBQ3RCLGFBQXNDLEVBQ3RDLFdBQXdCLEVBQ3ZCLE1BQXdCLEVBQ3pCLFNBQW9CLEVBQ25CLGVBQWdDO29CQUxqQyxlQUFVLEdBQVYsVUFBVSxDQUFZO29CQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFDekIsY0FBUyxHQUFULFNBQVMsQ0FBVztvQkFDbkIsb0JBQWUsR0FBZixlQUFlLENBQWlCO29CQWhCMUMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztvQkFFNUIsU0FBSSxHQUFHLE9BQU8sQ0FBQztnQkFlWCxDQUFDO2dCQUVDLDBCQUFRLEdBQWQ7Ozs7OztvQ0FDRSxLQUFBLElBQUksQ0FBQTtvQ0FBVyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBQTs7b0NBQW5FLEdBQUssT0FBTyxHQUFHLFNBQW9ELENBQUM7Ozs7O2lCQUNyRTtnQkFFRCxzQkFBSSxHQUFKLFVBQUssY0FBc0IsRUFBRSxlQUF1QjtvQkFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBbUIsQ0FBQztvQkFDNUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FB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ZCw4QkFBUzt3QkFDRiwwQ0FBZTttQkF0Qi9CLE9BQU8sQ0FxRW5CO2dCQUFELGNBQUM7YUFyRUQsQUFxRUM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL2FycmF5L3NmLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm1cIjtcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcbmltcG9ydCB7IFZhbGlkYXRvciwgVmFsaWRhdGVSZXN1bHQgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tIFwiYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuLi9mb3JtLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tIFwiLi4vLi4vcnVsZXMvYXJyYXktcnVsZXNcIjtcblxuQGluamVjdChBcnJheVJ1bGVzLCBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgRm9ybVNlcnZpY2UsIFNjaGVtYUZvcm1Mb2dnZXIsIFZhbGlkYXRvciwgRXZlbnRBZ2dyZWdhdG9yKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIGtleTogc3RyaW5nO1xuICBAYmluZGFibGUgbW9kZWw6IGFueVtdO1xuICBAYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbjtcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwiYXJyYXlcIjtcblxuICB2aWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgcmVzdWx0czogVmFsaWRhdGVSZXN1bHRbXTtcblxuICBjb250cm9sbGVyOiBGb3JtQ29udHJvbGxlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXJyYXlSdWxlczogQXJyYXlSdWxlcyxcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwdWJsaWMgdmFsaWRhdG9yOiBWYWxpZGF0b3IsXG4gICAgcHJpdmF0ZSBldmVudEFnZ3JlZ2F0b3I6IEV2ZW50QWdncmVnYXRvclxuICApIHsgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIHRoaXMucmVzdWx0cyA9IGF3YWl0IHRoaXMudmFsaWRhdG9yLnZhbGlkYXRlUHJvcGVydHkodGhpcywgXCJtb2RlbFwiKTtcbiAgfVxuXG4gIGJpbmQoYmluZGluZ0NvbnRleHQ6IG9iamVjdCwgb3ZlcnJpZGVDb250ZXh0OiBvYmplY3QpIHtcbiAgICB0aGlzLmFycmF5UnVsZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSB0aGlzLmdldEZvcm1Db250cm9sbGVyKG92ZXJyaWRlQ29udGV4dCkgYXMgRm9ybUNvbnRyb2xsZXI7XG4gICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZE9iamVjdCh0aGlzLm1vZGVsKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXlcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsLCBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zIH0sIGFyZ3VtZW50cyk7XG4gICAgbGV0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZS5idWlsZEFycmF5Rm9ybSh0aGlzLnNjaGVtYSwgdGhpcy5mb3JtLCB0aGlzLmtleSwgdGhpcy5tb2RlbCk7XG4gICAgdGVtcGxhdGUgPSBgPHRlbXBsYXRlPiR7dGVtcGxhdGV9PC90ZW1wbGF0ZT5gO1xuICAgIHRoaXMudmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3kodGVtcGxhdGUpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIGdldEZvcm1Db250cm9sbGVyKG92ZXJyaWRlQ29udGV4dDogYW55KSB7XG4gICAgcmV0dXJuIG92ZXJyaWRlQ29udGV4dC5fX3BhcmVudE92ZXJyaWRlQ29udGV4dC5iaW5kaW5nQ29udGV4dDtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICB0aGlzLm1vZGVsLnB1c2godGhpcy5mb3JtU2VydmljZS5nZXRBcnJheUl0ZW1EZWZhdWx0KHRoaXMuc2NoZW1hLCBudWxsKSk7XG4gICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlT25SZW5kZXIoKTtcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKFwiZm9ybS1hcnJheS1tb2RpZmllZFwiKTtcbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMubW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChcImZvcm0tYXJyYXktbW9kaWZpZWRcIik7XG4gIH1cblxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kYXJyYXlTY2hlbWEuY29uc3Q7XG4gIH1cblxuICBnZXQgYXRDYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1heEl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA+PSB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1heEl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBnZXQgYXRNaW5pbXVtQ2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRhcnJheVNjaGVtYS5taW5JdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWluSXRlbXMgOiBmYWxzZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
