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
                    this.binded = false;
                }
                SfArray.prototype.bind = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!!this.binded) return [3 /*break*/, 3];
                                    this.logger.info("sf-array", { form: this.form, model: this.model });
                                    this.formCtrl = this.formInstances.get(this.formInstance);
                                    this.bindRules();
                                    this.form.$arrayItem.$schema = this.form.$schema.items;
                                    return [4 /*yield*/, this.determineViewStrategy()];
                                case 1:
                                    _a.sent();
                                    return [4 /*yield*/, this.initializeArray()];
                                case 2:
                                    _a.sent();
                                    this.binded = true;
                                    _a.label = 3;
                                case 3: return [2 /*return*/];
                            }
                        });
                    });
                };
                SfArray.prototype.initializeArray = function () {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (this.form.$arrayItem.$schema.enum ||
                                        (this.model && this.model.length > 0) ||
                                        this.form.$noEmptyArrayInitialization || this.formCtrl.formOptions.noEmptyArrayInitialization) {
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
                    this.logger.info("sf-array-attached");
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
                                    return [3 /*break*/, 4];
                                case 1:
                                    if (!(this.form.$schema.items.type === "string" && this.form.$schema.items.enum)) return [3 /*break*/, 2];
                                    strategy = this.configuration.templates.arrayStringEnum;
                                    return [3 /*break*/, 4];
                                case 2:
                                    strategy = this.configuration.templates.array;
                                    return [4 /*yield*/, this.createView()];
                                case 3:
                                    _a.sent();
                                    _a.label = 4;
                                case 4:
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBMENFLGlCQUNTLFVBQXNCLEVBQ3RCLGFBQXNDLEVBQ3JDLFdBQXdCLEVBQ3hCLE1BQXdCLEVBQ3hCLGVBQWdDLEVBQ2hDLGFBQTRCO29CQUw3QixlQUFVLEdBQVYsVUFBVSxDQUFZO29CQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBQ3JDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO29CQUN4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO29CQUNoQyxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtvQkF0QnRDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBRTVCLFNBQUksR0FBRyxPQUFPLENBQUM7b0JBVWYsV0FBTSxHQUFZLEtBQUssQ0FBQztnQkFheEIsQ0FBQztnQkFFSyxzQkFBSSxHQUFWOzs7Ozt5Q0FDTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQVosd0JBQVk7b0NBQ2QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO29DQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztvQ0FDMUQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO29DQUNqQixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29DQUN2RCxxQkFBTSxJ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c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSwgVmlldywgT3B0aW9uYWwgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xuaW1wb3J0IHsgVmFsaWRhdGVSZXN1bHQgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSBcIi4uLy4uL3J1bGVzL2FycmF5LXJ1bGVzXCI7XG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGVmYXVsdHMtc2VydmljZVwiO1xuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlc1wiO1xuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcblxuQGluamVjdChcbiAgQXJyYXlSdWxlcyxcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIEZvcm1TZXJ2aWNlLFxuICBTY2hlbWFGb3JtTG9nZ2VyLFxuICBEZWZhdWx0c1NlcnZpY2UsXG4gIEZvcm1JbnN0YW5jZXNcbilcbkBjdXN0b21FbGVtZW50KFwic2YtYXJyYXlcIilcbmV4cG9ydCBjbGFzcyBTZkFycmF5IHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwiYXJyYXlcIjtcblxuICB2aWV3U3RyYXRlZ3k6IHN0cmluZztcblxuICBpdGVtVmlld1N0cmF0ZWd5OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgdmFsaWRhdGlvbkVycm9yczogc3RyaW5nW107XG5cbiAgZXJyb3JzOiBWYWxpZGF0ZVJlc3VsdFtdO1xuXG4gIGJpbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFycmF5UnVsZXM6IEFycmF5UnVsZXMsXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHByaXZhdGUgZGVmYXVsdHNTZXJ2aWNlOiBEZWZhdWx0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXG4gICkge1xuXG4gIH1cblxuICBhc3luYyBiaW5kKCkge1xuICAgIGlmICghdGhpcy5iaW5kZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1hcnJheVwiLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwgfSk7XG4gICAgICB0aGlzLmZvcm1DdHJsID0gdGhpcy5mb3JtSW5zdGFuY2VzLmdldCh0aGlzLmZvcm1JbnN0YW5jZSk7XG4gICAgICB0aGlzLmJpbmRSdWxlcygpO1xuICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYSA9IHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zO1xuICAgICAgYXdhaXQgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcbiAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUFycmF5KCk7XG4gICAgICB0aGlzLmJpbmRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZUFycmF5KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEuZW51bSB8fFxuICAgICAgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggPiAwKSB8fFxuICAgICAgdGhpcy5mb3JtLiRub0VtcHR5QXJyYXlJbml0aWFsaXphdGlvbiB8fCB0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLm5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uXG4gICAgKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGF3YWl0IHRoaXMuYWRkKCEhdGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1hcnJheS1hdHRhY2hlZFwiKTtcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xuICAgIGxldCBzdHJhdGVneTtcbiAgICBpZiAodGhpcy5mb3JtLiRhbHRUZW1wbGF0ZSkge1xuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMudHlwZSA9PT0gXCJzdHJpbmdcIiAmJiB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy5lbnVtKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlTdHJpbmdFbnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXk7XG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZVZpZXcoKTtcbiAgICB9XG4gICAgdGhpcy52aWV3U3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVZpZXcoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImNyZWF0ZVZpZXdcIiwgeyBmb3JtOiB0aGlzLmZvcm0uJGFycmF5SXRlbSB9KTtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZm9ybVNlcnZpY2VcbiAgICAgIC5nZXRUZW1wbGF0ZShcbiAgICAgICAgXCJtb2RlbFskaW5kZXhdXCIsXG4gICAgICAgIFwiZm9ybS4kYXJyYXlJdGVtXCIsXG4gICAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEudHlwZSxcbiAgICAgICAgdGhpcy5mb3JtSW5zdGFuY2VcbiAgICAgICk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImNyZWF0ZVZpZXctdGVtcGxhdGVcIiwgeyB0ZW1wbGF0ZSB9KTtcbiAgICB0aGlzLml0ZW1WaWV3U3RyYXRlZ3kgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZX08L3RlbXBsYXRlPmApO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kUnVsZXMoKSB7XG4gICAgdGhpcy5hcnJheVJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XG4gIH1cblxuICBhc3luYyBhZGQodmFsaWRhdGU6IGJvb2xlYW4pIHtcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgdGhpcy5kZWZhdWx0c1NlcnZpY2UuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLCBudWxsKTtcbiAgICB0aGlzLm1vZGVsLnB1c2goaXRlbSk7XG4gICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVtb3ZlKGluZGV4OiBudW1iZXIsIHZhbGlkYXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIGlmICh2YWxpZGF0ZSkge1xuICAgICAgYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kc2NoZW1hLmNvbnN0O1xuICB9XG5cbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWF4SXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID49IHRoaXMuZm9ybS4kc2NoZW1hLm1heEl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBnZXQgYXRNaW5pbXVtQ2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID09PSB0aGlzLmZvcm0uJHNjaGVtYS5taW5JdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidmFsaWRhdGVkIGFycmF5XCIsIHJlc3VsdCk7XG4gICAgdGhpcy5lcnJvcnMgPSByZXN1bHQucmVzdWx0c1xuICAgICAgLmZpbHRlcigocikgPT4gIXIudmFsaWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
