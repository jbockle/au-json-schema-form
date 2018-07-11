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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var guid_1 = require("../../resources/guid");
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var logger_1 = require("../../resources/logger");
var form_service_1 = require("../../services/form-service");
var array_rules_1 = require("../../rules/array-rules");
var defaults_service_1 = require("../../services/defaults-service");
var form_instances_1 = require("../../services/form-instances");
var $ = require("jquery");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQy9ELENBQUM7OztPQUFBO0lBRUssMEJBQVEsR0FBZDs7Ozs7NEJBQ2lCLHFCQUFNLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFBOzt3QkFBbEYsTUFBTSxHQUFHLFNBQXlFO3dCQUN4RixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxNQUFNLENBQUMsQ0FBQzt3QkFDNUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTzs2QkFDekIsTUFBTSxDQUFDLFVBQUMsQ0FBQyxJQUFLLE9BQUEsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFSLENBQVEsQ0FBQyxDQUFDO3dCQUMzQixzQkFBTyxNQUFNLEVBQUM7Ozs7S0FDZjtJQW5KUztRQUFULDRCQUFROzt5Q0FBcUI7SUFDcEI7UUFBVCw0QkFBUTs7MENBQWM7SUFDYjtRQUFULDRCQUFROztpREFBc0I7SUFIcEIsT0FBTztRQVRuQiwwQkFBTSxDQUNMLHdCQUFVLEVBQ1YsbURBQXVCLEVBQ3ZCLDBCQUFXLEVBQ1gseUJBQWdCLEVBQ2hCLGtDQUFlLEVBQ2YsOEJBQWEsQ0FDZDtRQUNBLGlDQUFhLENBQUMsVUFBVSxDQUFDO3lDQTJCSCx3QkFBVTtZQUNQLG1EQUF1QjtZQUN4QiwwQkFBVztZQUNoQix5QkFBZ0I7WUFDUCxrQ0FBZTtZQUNqQiw4QkFBYTtPQS9CM0IsT0FBTyxDQXFKbkI7SUFBRCxjQUFDO0NBckpELEFBcUpDLElBQUE7QUFySlksMEJBQU8iLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWYWxpZGF0ZVJlc3VsdCB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tIFwiLi4vLi4vcnVsZXMvYXJyYXktcnVsZXNcIjtcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5AaW5qZWN0KFxuICBBcnJheVJ1bGVzLFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgRm9ybVNlcnZpY2UsXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXG4gIERlZmF1bHRzU2VydmljZSxcbiAgRm9ybUluc3RhbmNlc1xuKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBzZWxlY3RlZEluZGV4OiBudW1iZXIgPSAtMTtcblxuICBraW5kID0gXCJhcnJheVwiO1xuXG4gIHZpZXdTdHJhdGVneTogc3RyaW5nO1xuXG4gIGl0ZW1WaWV3U3RyYXRlZ3k6IElubGluZVZpZXdTdHJhdGVneTtcblxuICB0YWJUaXRsZVRlbXBsYXRlOiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgdmFsaWRhdGlvbkVycm9yczogc3RyaW5nW107XG5cbiAgZXJyb3JzOiBWYWxpZGF0ZVJlc3VsdFtdO1xuXG4gIGJpbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFycmF5UnVsZXM6IEFycmF5UnVsZXMsXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHByaXZhdGUgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHByaXZhdGUgZGVmYXVsdHNTZXJ2aWNlOiBEZWZhdWx0c1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXG4gICkge1xuXG4gIH1cblxuICBhc3luYyBiaW5kKCkge1xuICAgIGlmICghdGhpcy5iaW5kZWQpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1hcnJheVwiLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwgfSk7XG4gICAgICB0aGlzLmZvcm1DdHJsID0gdGhpcy5mb3JtSW5zdGFuY2VzLmdldCh0aGlzLmZvcm1JbnN0YW5jZSk7XG4gICAgICB0aGlzLmJpbmRSdWxlcygpO1xuICAgICAgdGhpcy5mb3JtLiRhcnJheUl0ZW0uJHNjaGVtYSA9IHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zO1xuICAgICAgYXdhaXQgdGhpcy5jcmVhdGVJdGVtVmlldygpO1xuICAgICAgYXdhaXQgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcbiAgICAgIGF3YWl0IHRoaXMuaW5pdGlhbGl6ZUFycmF5KCk7XG4gICAgICB0aGlzLnNlbGVjdGVkSW5kZXggPSB0aGlzLm1vZGVsID8gdGhpcy5tb2RlbC5sZW5ndGggLSAxIDogLTE7XG4gICAgICB0aGlzLmJpbmRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaW5pdGlhbGl6ZUFycmF5KCkge1xuICAgIGlmIChcbiAgICAgIHRoaXMuZm9ybS4kYXJyYXlJdGVtLiRzY2hlbWEuZW51bSB8fFxuICAgICAgKHRoaXMubW9kZWwgJiYgdGhpcy5tb2RlbC5sZW5ndGggPiAwKSB8fFxuICAgICAgdGhpcy5mb3JtLiRub0VtcHR5QXJyYXlJbml0aWFsaXphdGlvbiB8fFxuICAgICAgdGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy5ub0VtcHR5QXJyYXlJbml0aWFsaXphdGlvblxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhd2FpdCB0aGlzLmFkZCghIXRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcik7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXktYXR0YWNoZWRcIik7XG4gICAgaWYgKHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRldGVybWluZVZpZXdTdHJhdGVneSgpIHtcbiAgICBsZXQgc3RyYXRlZ3k7XG4gICAgaWYgKHRoaXMuZm9ybS4kYWx0VGVtcGxhdGUpIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5mb3JtLiRhbHRUZW1wbGF0ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS4kYXJyYXlBc1RhYnMpIHtcbiAgICAgIGNvbnN0IGNvbnRlbnQgPSAhIXRoaXMuZm9ybS4kdGFiVGl0bGUgPyBgJHt0aGlzLmZvcm0uJHRhYlRpdGxlfWAgOiBcIiR7J0l0ZW0gJyArICgkaW5kZXggKyAxKX1cIjtcbiAgICAgIHRoaXMudGFiVGl0bGVUZW1wbGF0ZSA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke2NvbnRlbnR9PC90ZW1wbGF0ZT5gKTtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheVRhYnM7XG4gICAgfSBlbHNlIGlmICh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcy50eXBlID09PSBcInN0cmluZ1wiICYmIHRoaXMuZm9ybS4kc2NoZW1hLml0ZW1zLmVudW0pIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheVN0cmluZ0VudW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheTtcbiAgICB9XG4gICAgdGhpcy52aWV3U3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZUl0ZW1WaWV3KCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVWaWV3XCIsIHsgZm9ybTogdGhpcy5mb3JtLiRhcnJheUl0ZW0gfSk7XG4gICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmZvcm1TZXJ2aWNlXG4gICAgICAuZ2V0VGVtcGxhdGUoXG4gICAgICAgIFwibW9kZWxbJGluZGV4XVwiLFxuICAgICAgICBcImZvcm0uJGFycmF5SXRlbVwiLFxuICAgICAgICB0aGlzLmZvcm0uJGFycmF5SXRlbS4kc2NoZW1hLnR5cGUsXG4gICAgICAgIHRoaXMuZm9ybUluc3RhbmNlXG4gICAgICApO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVWaWV3LXRlbXBsYXRlXCIsIHsgdGVtcGxhdGUgfSk7XG4gICAgdGhpcy5pdGVtVmlld1N0cmF0ZWd5ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7dGVtcGxhdGV9PC90ZW1wbGF0ZT5gKTtcbiAgfVxuXG4gIHByaXZhdGUgYmluZFJ1bGVzKCkge1xuICAgIHRoaXMuYXJyYXlSdWxlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkT2JqZWN0KHRoaXMubW9kZWwpO1xuICB9XG5cbiAgYXN5bmMgYWRkKHZhbGlkYXRlOiBib29sZWFuKSB7XG4gICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyh0aGlzLmZvcm0uJHNjaGVtYS5pdGVtcywgbnVsbCk7XG4gICAgY29uc3QgaW5kZXggPSB0aGlzLm1vZGVsLnB1c2goaXRlbSkgLSAxO1xuICAgIHRoaXMuc2VsZWN0VGFiKGluZGV4KTtcbiAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZW1vdmUoaW5kZXg6IG51bWJlciwgdmFsaWRhdGU6IGJvb2xlYW4pIHtcbiAgICB0aGlzLm1vZGVsLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy5zZWxlY3RUYWIodGhpcy5tb2RlbC5sZW5ndGggLSAxKTtcbiAgICBpZiAodmFsaWRhdGUpIHtcbiAgICAgIGF3YWl0IHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNlbGVjdFRhYihpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKHRoaXMudGFiVGl0bGVUZW1wbGF0ZSkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICQoYGFbaHJlZj1cIiN0YWJfJHt0aGlzLmlkfV8ke2luZGV4fVwiXWApLnRhYihcInNob3dcIik7XG4gICAgICB9LCA1MCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS4kc2NoZW1hLnJlYWRPbmx5IHx8ICEhdGhpcy5mb3JtLiRzY2hlbWEuY29uc3Q7XG4gIH1cblxuICBnZXQgYXRDYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5tYXhJdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPj0gdGhpcy5mb3JtLiRzY2hlbWEubWF4SXRlbXMgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBhdE1pbmltdW1DYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJHNjaGVtYS5taW5JdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzLm1vZGVsIH0pO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJ2YWxpZGF0ZWQgYXJyYXlcIiwgcmVzdWx0KTtcbiAgICB0aGlzLmVycm9ycyA9IHJlc3VsdC5yZXN1bHRzXG4gICAgICAuZmlsdGVyKChyKSA9PiAhci52YWxpZCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
