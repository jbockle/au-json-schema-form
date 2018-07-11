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
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../resources/logger", "../../services/form-service", "../../rules/array-rules", "../../services/defaults-service", "../../services/form-instances", "jquery"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1, array_rules_1, defaults_service_1, form_instances_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfArray = /** @class */ (function () {
        function SfArray(arrayRules, configuration, formService, logger, defaultsService, formInstances) {
            this.arrayRules = arrayRules;
            this.configuration = configuration;
            this.formService = formService;
            this.logger = logger;
            this.defaultsService = defaultsService;
            this.formInstances = formInstances;
            this.id = guid_1.Guid.newGuid();
            this.selectedIndex = -1;
            this.kind = "array";
            this.binded = false;
        }
        SfArray.prototype.bind = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.binded) return [3 /*break*/, 4];
                            this.logger.info("sf-array", { form: this.form, model: this.model });
                            this.formCtrl = this.formInstances.get(this.formInstance);
                            this.bindRules();
                            this.form.$arrayItem.$schema = this.form.$schema.items;
                            return [4 /*yield*/, this.createItemView()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.determineViewStrategy()];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, this.initializeArray()];
                        case 3:
                            _a.sent();
                            this.selectedIndex = this.model ? this.model.length - 1 : -1;
                            this.binded = true;
                            _a.label = 4;
                        case 4: return [2 /*return*/];
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
                                this.form.$noEmptyArrayInitialization ||
                                this.formCtrl.formOptions.noEmptyArrayInitialization) {
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
                var strategy, content;
                return __generator(this, function (_a) {
                    if (this.form.$altTemplate) {
                        strategy = this.form.$altTemplate;
                    }
                    else if (this.form.$arrayAsTabs) {
                        content = !!this.form.$tabTitle ? "" + this.form.$tabTitle : "${'Item ' + ($index + 1)}";
                        this.tabTitleTemplate = new aurelia_framework_1.InlineViewStrategy("<template>" + content + "</template>");
                        strategy = this.configuration.templates.arrayTabs;
                    }
                    else if (this.form.$schema.items.type === "string" && this.form.$schema.items.enum) {
                        strategy = this.configuration.templates.arrayStringEnum;
                    }
                    else {
                        strategy = this.configuration.templates.array;
                    }
                    this.viewStrategy = strategy;
                    return [2 /*return*/];
                });
            });
        };
        SfArray.prototype.createItemView = function () {
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
                var item, index;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.defaultsService.getSchemaDefaultAsync(this.form.$schema.items, null)];
                        case 1:
                            item = _a.sent();
                            index = this.model.push(item) - 1;
                            this.selectTab(index);
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
                            this.selectTab(this.model.length - 1);
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
        SfArray.prototype.selectTab = function (index) {
            var _this = this;
            if (this.tabTitleTemplate) {
                setTimeout(function () {
                    $("a[href=\"#tab_" + _this.id + "_" + index + "\"]").tab("show");
                }, 50);
            }
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
    exports.SfArray = SfArray;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFxQkE7UUF5QkUsaUJBQ1MsVUFBc0IsRUFDdEIsYUFBc0MsRUFDckMsV0FBd0IsRUFDeEIsTUFBd0IsRUFDeEIsZUFBZ0MsRUFDaEMsYUFBNEI7WUFMN0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtZQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7WUFDckMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7WUFDeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7WUFDeEIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQ2hDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1lBMUJ0QyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTVCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDLENBQUM7WUFFM0IsU0FBSSxHQUFHLE9BQU8sQ0FBQztZQVlmLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFheEIsQ0FBQztRQUVLLHNCQUFJLEdBQVY7Ozs7O2lDQUNNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBWix3QkFBWTs0QkFDZCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7NEJBQ3JFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUMxRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7NEJBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7NEJBQ3ZELHFCQUFNLElBQUks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QUFkOzs7OztnQ0FDaUIscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUE7OzRCQUFsRixNQUFNLEdBQUcsU0FBeUU7NEJBQ3hGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE1BQU0sQ0FBQyxDQUFDOzRCQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPO2lDQUN6QixNQUFNLENBQUMsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQVIsQ0FBUSxDQUFDLENBQUM7NEJBQzNCLHNCQUFPLE1BQU0sRUFBQzs7OztTQUNmO1FBbkpTO1lBQVQsNEJBQVE7OzZDQUFxQjtRQUNwQjtZQUFULDRCQUFROzs4Q0FBYztRQUNiO1lBQVQsNEJBQVE7O3FEQUFzQjtRQUhwQixPQUFPO1lBVG5CLDBCQUFNLENBQ0wsd0JBQVUsRUFDVixtREFBdUIsRUFDdkIsMEJBQVcsRUFDWCx5QkFBZ0IsRUFDaEIsa0NBQWUsRUFDZiw4QkFBYSxDQUNkO1lBQ0EsaUNBQWEsQ0FBQyxVQUFVLENBQUM7NkNBMkJILHdCQUFVO2dCQUNQLG1EQUF1QjtnQkFDeEIsMEJBQVc7Z0JBQ2hCLHlCQUFnQjtnQkFDUCxrQ0FBZTtnQkFDakIsOEJBQWE7V0EvQjNCLE9BQU8sQ0FxSm5CO1FBQUQsY0FBQztLQXJKRCxBQXFKQyxJQUFBO0lBckpZLDBCQUFPIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xuaW1wb3J0IHsgVmFsaWRhdGVSZXN1bHQgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSBcIi4uLy4uL3J1bGVzL2FycmF5LXJ1bGVzXCI7XG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZGVmYXVsdHMtc2VydmljZVwiO1xuaW1wb3J0IHsgRm9ybUluc3RhbmNlcyB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLWluc3RhbmNlc1wiO1xuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuQGluamVjdChcbiAgQXJyYXlSdWxlcyxcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIEZvcm1TZXJ2aWNlLFxuICBTY2hlbWFGb3JtTG9nZ2VyLFxuICBEZWZhdWx0c1NlcnZpY2UsXG4gIEZvcm1JbnN0YW5jZXNcbilcbkBjdXN0b21FbGVtZW50KFwic2YtYXJyYXlcIilcbmV4cG9ydCBjbGFzcyBTZkFycmF5IHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gLTE7XG5cbiAga2luZCA9IFwiYXJyYXlcIjtcblxuICB2aWV3U3RyYXRlZ3k6IHN0cmluZztcblxuICBpdGVtVmlld1N0cmF0ZWd5OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgdGFiVGl0bGVUZW1wbGF0ZTogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIHZhbGlkYXRpb25FcnJvcnM6IHN0cmluZ1tdO1xuXG4gIGVycm9yczogVmFsaWRhdGVSZXN1bHRbXTtcblxuICBiaW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzLFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwcml2YXRlIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwcml2YXRlIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxuICAgIHByaXZhdGUgZm9ybUluc3RhbmNlczogRm9ybUluc3RhbmNlc1xuICApIHtcblxuICB9XG5cbiAgYXN5bmMgYmluZCgpIHtcbiAgICBpZiAoIXRoaXMuYmluZGVkKSB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXlcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xuICAgICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xuICAgICAgdGhpcy5iaW5kUnVsZXMoKTtcbiAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcztcbiAgICAgIGF3YWl0IHRoaXMuY3JlYXRlSXRlbVZpZXcoKTtcbiAgICAgIGF3YWl0IHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XG4gICAgICBhd2FpdCB0aGlzLmluaXRpYWxpemVBcnJheSgpO1xuICAgICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gdGhpcy5tb2RlbCA/IHRoaXMubW9kZWwubGVuZ3RoIC0gMSA6IC0xO1xuICAgICAgdGhpcy5iaW5kZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGluaXRpYWxpemVBcnJheSgpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLmVudW0gfHxcbiAgICAgICh0aGlzLm1vZGVsICYmIHRoaXMubW9kZWwubGVuZ3RoID4gMCkgfHxcbiAgICAgIHRoaXMuZm9ybS4kbm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb24gfHxcbiAgICAgIHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMubm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb25cbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgdGhpcy5hZGQoISF0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5LWF0dGFjaGVkXCIpO1xuICAgIGlmICh0aGlzLmZvcm1DdHJsLmZvcm1PcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBkZXRlcm1pbmVWaWV3U3RyYXRlZ3koKSB7XG4gICAgbGV0IHN0cmF0ZWd5O1xuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJGFycmF5QXNUYWJzKSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gISF0aGlzLmZvcm0uJHRhYlRpdGxlID8gYCR7dGhpcy5mb3JtLiR0YWJUaXRsZX1gIDogXCIkeydJdGVtICcgKyAoJGluZGV4ICsgMSl9XCI7XG4gICAgICB0aGlzLnRhYlRpdGxlVGVtcGxhdGUgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHtjb250ZW50fTwvdGVtcGxhdGU+YCk7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlUYWJzO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMudHlwZSA9PT0gXCJzdHJpbmdcIiAmJiB0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy5lbnVtKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlTdHJpbmdFbnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXk7XG4gICAgfVxuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gIH1cblxuICBhc3luYyBjcmVhdGVJdGVtVmlldygpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiY3JlYXRlVmlld1wiLCB7IGZvcm06IHRoaXMuZm9ybS4kYXJyYXlJdGVtIH0pO1xuICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZVxuICAgICAgLmdldFRlbXBsYXRlKFxuICAgICAgICBcIm1vZGVsWyRpbmRleF1cIixcbiAgICAgICAgXCJmb3JtLiRhcnJheUl0ZW1cIixcbiAgICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYS50eXBlLFxuICAgICAgICB0aGlzLmZvcm1JbnN0YW5jZVxuICAgICAgKTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiY3JlYXRlVmlldy10ZW1wbGF0ZVwiLCB7IHRlbXBsYXRlIH0pO1xuICAgIHRoaXMuaXRlbVZpZXdTdHJhdGVneSA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlfTwvdGVtcGxhdGU+YCk7XG4gIH1cblxuICBwcml2YXRlIGJpbmRSdWxlcygpIHtcbiAgICB0aGlzLmFycmF5UnVsZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZE9iamVjdCh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIGFzeW5jIGFkZCh2YWxpZGF0ZTogYm9vbGVhbikge1xuICAgIGNvbnN0IGl0ZW0gPSBhd2FpdCB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmModGhpcy5mb3JtLiRzY2hlbWEuaXRlbXMsIG51bGwpO1xuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5tb2RlbC5wdXNoKGl0ZW0pIC0gMTtcbiAgICB0aGlzLnNlbGVjdFRhYihpbmRleCk7XG4gICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgcmVtb3ZlKGluZGV4OiBudW1iZXIsIHZhbGlkYXRlOiBib29sZWFuKSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMuc2VsZWN0VGFiKHRoaXMubW9kZWwubGVuZ3RoIC0gMSk7XG4gICAgaWYgKHZhbGlkYXRlKSB7XG4gICAgICBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZWxlY3RUYWIoaW5kZXg6IG51bWJlcikge1xuICAgIGlmICh0aGlzLnRhYlRpdGxlVGVtcGxhdGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAkKGBhW2hyZWY9XCIjdGFiXyR7dGhpcy5pZH1fJHtpbmRleH1cIl1gKS50YWIoXCJzaG93XCIpO1xuICAgICAgfSwgNTApO1xuICAgIH1cbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uJHNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kc2NoZW1hLmNvbnN0O1xuICB9XG5cbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWF4SXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID49IHRoaXMuZm9ybS4kc2NoZW1hLm1heEl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBnZXQgYXRNaW5pbXVtQ2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRzY2hlbWEubWluSXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID09PSB0aGlzLmZvcm0uJHNjaGVtYS5taW5JdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5mb3JtQ3RybC52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidmFsaWRhdGVkIGFycmF5XCIsIHJlc3VsdCk7XG4gICAgdGhpcy5lcnJvcnMgPSByZXN1bHQucmVzdWx0c1xuICAgICAgLmZpbHRlcigocikgPT4gIXIudmFsaWQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
