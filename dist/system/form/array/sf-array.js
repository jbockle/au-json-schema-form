System.register(["aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../resources/logger", "../../services/form-service", "../../rules/array-rules", "../../services/defaults-service", "../../services/form-instances"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1, array_rules_1, defaults_service_1, form_instances_1, SfArray;
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
            function (array_rules_1_1) {
                array_rules_1 = array_rules_1_1;
            },
            function (defaults_service_1_1) {
                defaults_service_1 = defaults_service_1_1;
            },
            function (form_instances_1_1) {
                form_instances_1 = form_instances_1_1;
            }
        ],
        execute: function () {
            SfArray = /** @class */ (function () {
                function SfArray(arrayRules, configuration, formService, logger, defaultsService, formInstances) {
                    this.arrayRules = arrayRules;
                    this.configuration = configuration;
                    this.formService = formService;
                    this.logger = logger;
                    this.defaultsService = defaultsService;
                    this.formInstances = formInstances;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = "array";
                }
                SfArray.prototype.bind = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.logger.info("sf-array", { form: this.form, model: this.model });
                                    this.formCtrl = this.formInstances.get(this.formInstance);
                                    this.bindRules();
                                    this.form.$arrayItem.$schema = this.form.$schema.items;
                                    return [4 /*yield*/, this.determineViewStrategy()];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                SfArray.prototype.initializeArray = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.form.$arrayStartEmpty || this.formCtrl.formOptions.arrayStartEmpty) {
                                        return [2 /*return*/];
                                    }
                                    return [4 /*yield*/, this.add(!!this.formCtrl.formOptions.validateOnRender)];
                                case 1:
                                    _a.sent();
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                SfArray.prototype.attached = function () {
                    if (this.formCtrl.formOptions.validateOnRender) {
                        this.validate();
                    }
                };
                SfArray.prototype.determineViewStrategy = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var strategy;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!this.form.$altTemplate) return [3 /*break*/, 1];
                                    strategy = this.form.$altTemplate;
                                    return [3 /*break*/, 5];
                                case 1:
                                    if (!(this.form.$schema.items.type === "string" && this.form.$schema.items.enum)) return [3 /*break*/, 2];
                                    strategy = this.configuration.templates.arrayStringEnum;
                                    return [3 /*break*/, 5];
                                case 2:
                                    strategy = this.configuration.templates.array;
                                    return [4 /*yield*/, this.createView()];
                                case 3:
                                    _a.sent();
                                    return [4 /*yield*/, this.initializeArray()];
                                case 4:
                                    _a.sent();
                                    _a.label = 5;
                                case 5:
                                    this.viewStrategy = strategy;
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                SfArray.prototype.createView = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var template;
                        return __generator(this, function (_a) {
                            this.logger.info("createView", { form: this.form.$arrayItem });
                            template = this.formService
                                .getTemplate("model[$index]", "form.$arrayItem", this.form.$arrayItem.$schema.type, this.formInstance);
                            this.logger.info("createView-template", { template: template });
                            this.itemViewStrategy = new aurelia_framework_1.InlineViewStrategy("<template>" + template + "</template>");
                            return [2 /*return*/];
                        });
                    });
                };
                SfArray.prototype.bindRules = function () {
                    this.arrayRules.bind(this);
                    this.formCtrl.validationController.addObject(this.model);
                };
                SfArray.prototype.add = function (validate) {
                    return __awaiter(this, void 0, void 0, function () {
                        var item;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.defaultsService.getSchemaDefaultAsync(this.form.$schema.items, null)];
                                case 1:
                                    item = _a.sent();
                                    this.model.push(item);
                                    if (!validate) return [3 /*break*/, 3];
                                    return [4 /*yield*/, this.validate()];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                SfArray.prototype.remove = function (index, validate) {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this.model.splice(index, 1);
                                    if (!validate) return [3 /*break*/, 2];
                                    return [4 /*yield*/, this.validate()];
                                case 1:
                                    _a.sent();
                                    _a.label = 2;
                                case 2: return [2 /*return*/];
                            }
                        });
                    });
                };
                Object.defineProperty(SfArray.prototype, "isDisabled", {
                    get: function () {
                        return this.form.$schema.readOnly || !!this.form.$schema.const;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SfArray.prototype, "atCapacity", {
                    get: function () {
                        return Number.isInteger(this.form.$schema.maxItems)
                            ? this.model.length >= this.form.$schema.maxItems : false;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(SfArray.prototype, "atMinimumCapacity", {
                    get: function () {
                        return Number.isInteger(this.form.$schema.minItems)
                            ? this.model.length === this.form.$schema.minItems : false;
                    },
                    enumerable: true,
                    configurable: true
                });
                SfArray.prototype.validate = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        var result;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.formCtrl.validationController.validate({ object: this.model })];
                                case 1:
                                    result = _a.sent();
                                    this.logger.info("validated array", result);
                                    this.errors = result.results
                                        .filter(function (r) { return !r.valid; });
                                    return [2 /*return*/, result];
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
                    __metadata("design:type", Array)
                ], SfArray.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfArray.prototype, "formInstance", void 0);
                SfArray = __decorate([
                    aurelia_framework_1.inject(array_rules_1.ArrayRules, schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger, defaults_service_1.DefaultsService, form_instances_1.FormInstances),
                    aurelia_framework_1.customElement("sf-array"),
                    __metadata("design:paramtypes", [array_rules_1.ArrayRules,
                        schema_form_configuration_1.SchemaFormConfiguration,
                        form_service_1.FormService,
                        logger_1.SchemaFormLogger,
                        defaults_service_1.DefaultsService,
                        form_instances_1.FormInstances])
                ], SfArray);
                return SfArray;
            }());
            exports_1("SfArray", SfArray);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBd0NFLGlCQUNTLFVBQXNCLEVBQ3RCLGFBQXNDLEVBQ3JDLFdBQXdCLEVBQ3hCLE1BQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLGFBQTRCO29CQUw3QixlQUFVLEdBQVYsVUFBVSxDQUFZO29CQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO29CQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkFwQnRDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBRTVCLFNBQUksR0FBRyxPQUFPLENBQUM7Z0JBcUJmLENBQUM7Z0JBRUssc0JBQUksR0FBVjs7Ozs7b0NBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO29DQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQ0FDMUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29DQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29DQUV2RCxxQkFBTSxJQUFJLENBQUMscUJBQXFCLEVBQUUsRUFBQTs7b0NBQWxDLFNBQWtDLENBQUM7Ozs7O2lCQUNwQztnQkFFSyxp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O29DQUN4RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQztvQ0FDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTzt5Q0FDekIsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFSLENBQVEsQ0FBQyxDQUFDO29DQUMzQixzQkFBTyxNQUFNLEVBQUM7Ozs7aUJBQ2Y7Z0JBakhTO29CQUFULDRCQUFROztxREFBcUI7Z0JBQ3BCO29CQUFULDRCQUFROztzREFBYztnQkFDYjtvQkFBVCw0QkFBUTs7NkRBQXNCO2dCQUhwQixPQUFPO29CQVRuQiwwQkFBTSxDQUNMLHdCQUFVLEVBQ1YsbURBQXVCLEVBQ3ZCLDBCQUFXLEVBQ1gseUJBQWdCLEVBQ2hCLGtDQUFlLEVBQ2YsOEJBQWEsQ0FDZDtvQkFDQSxpQ0FBYSxDQUFDLFVBQVUsQ0FBQztxREFxQkgsd0JBQVU7d0JBQ1AsbURBQXVCO3dCQUN4QiwwQkFBVzt3QkFDaEIseUJBQWdCO3dCQUNQLGtDQUFlO3dCQUNqQiw4QkFBYTttQkF6QjNCLE9BQU8sQ0FtSG5CO2dCQUFELGNBQUM7YUFuSEQsQUFtSEM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL2FycmF5L3NmLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5LCBWaWV3LCBPcHRpb25hbCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWYWxpZGF0ZVJlc3VsdCB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tIFwiLi4vLi4vcnVsZXMvYXJyYXktcnVsZXNcIjtcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xuXG5AaW5qZWN0KFxuICBBcnJheVJ1bGVzLFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgRm9ybVNlcnZpY2UsXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXG4gIERlZmF1bHRzU2VydmljZSxcbiAgRm9ybUluc3RhbmNlc1xuKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBraW5kID0gXCJhcnJheVwiO1xuXG4gIHZpZXdTdHJhdGVneTogc3RyaW5nO1xuXG4gIGl0ZW1WaWV3U3RyYXRlZ3k6IElubGluZVZpZXdTdHJhdGVneTtcblxuICB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXTtcblxuICBlcnJvcnM6IFZhbGlkYXRlUmVzdWx0W107XG5cbiAgcHJpdmF0ZSBmb3JtQ3RybDogSUZvcm1JbnN0YW5jZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXJyYXlSdWxlczogQXJyYXlSdWxlcyxcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHJpdmF0ZSBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHJpdmF0ZSBkZWZhdWx0c1NlcnZpY2U6IERlZmF1bHRzU2VydmljZSxcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcbiAgKSB7XG5cbiAgfVxuXG4gIGFzeW5jIGJpbmQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5XCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLmZvcm1DdHJsID0gdGhpcy5mb3JtSW5zdGFuY2VzLmdldCh0aGlzLmZvcm1JbnN0YW5jZSk7XG4gICAgdGhpcy5iaW5kUnVsZXMoKTtcbiAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEuaXRlbXM7XG5cbiAgICBhd2FpdCB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZUFycmF5KCkge1xuICAgIGlmICh0aGlzLmZvcm0uJGFycmF5U3RhcnRFbXB0eSB8fCB0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLmFycmF5U3RhcnRFbXB0eSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLmFkZCghIXRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcik7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xuICAgIGxldCBzdHJhdGVneTtcbiAgICBpZiAodGhpcy5mb3JtLiRhbHRUZW1wbGF0ZSkge1xuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMudHlwZSA9PT0gXCJzdHJpbmdcIiAmJiB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy5lbnVtKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlTdHJpbmdFbnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXk7XG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZVZpZXcoKTtcbiAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUFycmF5KCk7XG4gICAgfVxuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gIH1cblxuICBhc3luYyBjcmVhdGVWaWV3KCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVWaWV3XCIsIHsgZm9ybTogdGhpcy5mb3JtLiRhcnJheUl0ZW0gfSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmZvcm1TZXJ2aWNlXG4gICAgICAuZ2V0VGVtcGxhdGUoXCJtb2RlbFskaW5kZXhdXCIsIFwiZm9ybS4kYXJyYXlJdGVtXCIsIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEudHlwZSwgdGhpcy5mb3JtSW5zdGFuY2UpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVWaWV3LXRlbXBsYXRlXCIsIHsgdGVtcGxhdGUgfSk7XG4gICAgdGhpcy5pdGVtVmlld1N0cmF0ZWd5ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7dGVtcGxhdGV9PC90ZW1wbGF0ZT5gKTtcbiAgfVxuXG4gIHByaXZhdGUgYmluZFJ1bGVzKCkge1xuICAgIHRoaXMuYXJyYXlSdWxlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkT2JqZWN0KHRoaXMubW9kZWwpO1xuICB9XG5cbiAgYXN5bmMgYWRkKHZhbGlkYXRlOiBib29sZWFuKSB7XG4gICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcywgbnVsbCk7XG4gICAgdGhpcy5tb2RlbC5wdXNoKGl0ZW0pO1xuICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlbW92ZShpbmRleDogbnVtYmVyLCB2YWxpZGF0ZTogYm9vbGVhbikge1xuICAgIHRoaXMubW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLiRzY2hlbWEucmVhZE9ubHkgfHwgISF0aGlzLmZvcm0uJHNjaGVtYS5jb25zdDtcbiAgfVxuXG4gIGdldCBhdENhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1heEl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA+PSB0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA9PT0gdGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMgOiBmYWxzZTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInZhbGlkYXRlZCBhcnJheVwiLCByZXN1bHQpO1xuICAgIHRoaXMuZXJyb3JzID0gcmVzdWx0LnJlc3VsdHNcbiAgICAgIC5maWx0ZXIoKHIpID0+ICFyLnZhbGlkKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
