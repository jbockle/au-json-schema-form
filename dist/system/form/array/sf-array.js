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
                    this.createView();
                    this.determineViewStrategy();
                };
                SfArray.prototype.attached = function () {
                    this.getErrors();
                };
                SfArray.prototype.determineViewStrategy = function () {
                    var strategy;
                    if (this.form.$altTemplate) {
                        strategy = this.form.$altTemplate;
                    }
                    else if (this.schema.items.type === "string" && this.schema.items.enum) {
                        strategy = this.configuration.templates.arrayStringEnum;
                    }
                    else {
                        strategy = this.configuration.templates.array;
                    }
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
                        this.validate();
                    }
                };
                SfArray.prototype.remove = function (index) {
                    this.model.splice(index, 1);
                    this.validate();
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
                SfArray.prototype.validate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.validationController.validate({ object: this.model })];
                                case 1:
                                    result = _a.sent();
                                    this.logger.info("validated array", result);
                                    return [2 /*return*/, result];
                            }
                        });
                    });
                };
                SfArray.prototype.getErrors = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.validate()];
                                case 1:
                                    result = _a.sent();
                                    if (!result.valid) {
                                        this.validationErrors = result.results
                                            .filter(function (r) { return !r.valid; })
                                            .map(function (r) { return r.message; });
                                    }
                                    return [2 /*return*/, []];
                            }
                        });
                    });
                };
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBcUNFLGlCQUNTLFVBQXNCLEVBQ3RCLGFBQXNDLEVBQ3RDLFdBQXdCLEVBQ3ZCLE1BQXdCLEVBQ3pCLFNBQW9CO29CQUpwQixlQUFVLEdBQVYsVUFBVSxDQUFZO29CQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFDekIsY0FBUyxHQUFULFNBQVMsQ0FBVztvQkFoQjdCLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBRTVCLFNBQUksR0FBRyxPQUFPLENBQUM7Z0JBaUJmLENBQUM7Z0JBRUQseUJBQU8sR0FBUCxVQUFRLFVBQWdCLEVBQUUsTUFBWTtvQkFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDRCQUFRLENBQUMsRUFBRSxDQUFDLHlDQUFvQixDQUFDLENBQUMsQ0FBQztnQkFDdEYsQ0FBQztnQkFFRCxzQkFBSSxHQUFKO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO29CQUMzRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztvQkFDbEIsSUFBSSxDQUFDLHFCQUFxQixFQUFFLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsMEJBQVEs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QkFBVCw0QkFBUTs7dURBQW9DO2dCQUpsQyxPQUFPO29CQVRuQiwwQkFBTSxDQUNMLHdCQUFVLEVBQ1YsbURBQXVCLEVBQ3ZCLDBCQUFXLEVBQ1gseUJBQWdCLEVBQ2hCLDhCQUFTLEVBQ1QsMENBQWUsQ0FDaEI7b0JBQ0EsaUNBQWEsQ0FBQyxVQUFVLENBQUM7cURBbUJILHdCQUFVO3dCQUNQLG1EQUF1Qjt3QkFDekIsMEJBQVc7d0JBQ2YseUJBQWdCO3dCQUNkLDhCQUFTO21CQXRCbEIsT0FBTyxDQWdIbkI7Z0JBQUQsY0FBQzthQWhIRCxBQWdIQzs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3ksIFZpZXcsIE9wdGlvbmFsIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBWYWxpZGF0ZVJlc3VsdCwgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBFdmVudEFnZ3JlZ2F0b3IgfSBmcm9tIFwiYXVyZWxpYS1ldmVudC1hZ2dyZWdhdG9yXCI7XG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSBcIi4uLy4uL3J1bGVzL2FycmF5LXJ1bGVzXCI7XG5cbkBpbmplY3QoXG4gIEFycmF5UnVsZXMsXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBGb3JtU2VydmljZSxcbiAgU2NoZW1hRm9ybUxvZ2dlcixcbiAgVmFsaWRhdG9yLFxuICBFdmVudEFnZ3JlZ2F0b3JcbilcbkBjdXN0b21FbGVtZW50KFwic2YtYXJyYXlcIilcbmV4cG9ydCBjbGFzcyBTZkFycmF5IHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBrZXk6IHN0cmluZztcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcbiAgQGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb247XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcImFycmF5XCI7XG5cbiAgdmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIHZpZXdTdHJhdGVneTogc3RyaW5nO1xuXG4gIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdO1xuICB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFycmF5UnVsZXM6IEFycmF5UnVsZXMsXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHVibGljIHZhbGlkYXRvcjogVmFsaWRhdG9yXG4gICkge1xuXG4gIH1cblxuICBjcmVhdGVkKG93bmluZ1ZpZXc6IFZpZXcsIG15VmlldzogVmlldykge1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSBteVZpZXcuY29udGFpbmVyLmdldChPcHRpb25hbC5vZihWYWxpZGF0aW9uQ29udHJvbGxlcikpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXlcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsLCBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zIH0sIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5iaW5kUnVsZXMoKTtcbiAgICB0aGlzLmNyZWF0ZVZpZXcoKTtcbiAgICB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5nZXRFcnJvcnMoKTtcbiAgfVxuXG4gIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcbiAgICBsZXQgc3RyYXRlZ3k7XG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2NoZW1hLml0ZW1zLnR5cGUgPT09IFwic3RyaW5nXCIgJiYgdGhpcy5zY2hlbWEuaXRlbXMuZW51bSkge1xuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmFycmF5U3RyaW5nRW51bTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmFycmF5O1xuICAgIH1cbiAgICB0aGlzLnZpZXdTdHJhdGVneSA9IHN0cmF0ZWd5O1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVWaWV3KCkge1xuICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuZm9ybVNlcnZpY2UuYnVpbGRBcnJheUZvcm0odGhpcy5zY2hlbWEsIHRoaXMuZm9ybSwgdGhpcy5rZXksIHRoaXMubW9kZWwpO1xuICAgIHRlbXBsYXRlID0gYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlfTwvdGVtcGxhdGU+YDtcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KHRlbXBsYXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgYmluZFJ1bGVzKCkge1xuICAgIHRoaXMuYXJyYXlSdWxlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkT2JqZWN0KHRoaXMubW9kZWwpO1xuICB9XG5cbiAgZ2V0Rm9ybUNvbnRyb2xsZXIob3ZlcnJpZGVDb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gb3ZlcnJpZGVDb250ZXh0Ll9fcGFyZW50T3ZlcnJpZGVDb250ZXh0LmJpbmRpbmdDb250ZXh0O1xuICB9XG5cbiAgYWRkKCkge1xuICAgIHRoaXMubW9kZWwucHVzaCh0aGlzLmZvcm1TZXJ2aWNlLmdldEFycmF5SXRlbURlZmF1bHQodGhpcy5zY2hlbWEsIG51bGwpKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKSB7XG4gICAgICB0aGlzLmxvZ2dlci53YXJuKFwidmFsaWRhdGluZ1wiKTtcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLm1vZGVsLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEucmVhZE9ubHkgfHwgISF0aGlzLmZvcm0uJGFycmF5U2NoZW1hLmNvbnN0O1xuICB9XG5cbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRhcnJheVNjaGVtYS5tYXhJdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPj0gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWluSXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID09PSB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJ2YWxpZGF0ZWQgYXJyYXlcIiwgcmVzdWx0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgYXN5bmMgZ2V0RXJyb3JzKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcbiAgICBpZiAoIXJlc3VsdC52YWxpZCkge1xuICAgICAgdGhpcy52YWxpZGF0aW9uRXJyb3JzID0gcmVzdWx0LnJlc3VsdHNcbiAgICAgICAgLmZpbHRlcigocikgPT4gIXIudmFsaWQpXG4gICAgICAgIC5tYXAoKHIpID0+IHIubWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBbXTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
