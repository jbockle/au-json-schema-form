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
var aurelia_validation_1 = require("aurelia-validation");
var aurelia_event_aggregator_1 = require("aurelia-event-aggregator");
var array_rules_1 = require("../../rules/array-rules");
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
exports.SfArray = SfArray;

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUFROzsyQ0FBb0M7SUFKbEMsT0FBTztRQVRuQiwwQkFBTSxDQUNMLHdCQUFVLEVBQ1YsbURBQXVCLEVBQ3ZCLDBCQUFXLEVBQ1gseUJBQWdCLEVBQ2hCLDhCQUFTLEVBQ1QsMENBQWUsQ0FDaEI7UUFDQSxpQ0FBYSxDQUFDLFVBQVUsQ0FBQzt5Q0FtQkgsd0JBQVU7WUFDUCxtREFBdUI7WUFDekIsMEJBQVc7WUFDZix5QkFBZ0I7WUFDZCw4QkFBUztPQXRCbEIsT0FBTyxDQWdIbkI7SUFBRCxjQUFDO0NBaEhELEFBZ0hDLElBQUE7QUFoSFksMEJBQU8iLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSwgVmlldywgT3B0aW9uYWwgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIFZhbGlkYXRlUmVzdWx0LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjtcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tIFwiLi4vLi4vcnVsZXMvYXJyYXktcnVsZXNcIjtcblxuQGluamVjdChcbiAgQXJyYXlSdWxlcyxcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIEZvcm1TZXJ2aWNlLFxuICBTY2hlbWFGb3JtTG9nZ2VyLFxuICBWYWxpZGF0b3IsXG4gIEV2ZW50QWdncmVnYXRvclxuKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1hcnJheVwiKVxuZXhwb3J0IGNsYXNzIFNmQXJyYXkge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIGtleTogc3RyaW5nO1xuICBAYmluZGFibGUgbW9kZWw6IGFueVtdO1xuICBAYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbjtcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwiYXJyYXlcIjtcblxuICB2aWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgdmlld1N0cmF0ZWd5OiBzdHJpbmc7XG5cbiAgdmFsaWRhdGlvbkVycm9yczogc3RyaW5nW107XG4gIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgYXJyYXlSdWxlczogQXJyYXlSdWxlcyxcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwdWJsaWMgdmFsaWRhdG9yOiBWYWxpZGF0b3JcbiAgKSB7XG5cbiAgfVxuXG4gIGNyZWF0ZWQob3duaW5nVmlldzogVmlldywgbXlWaWV3OiBWaWV3KSB7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IG15Vmlldy5jb250YWluZXIuZ2V0KE9wdGlvbmFsLm9mKFZhbGlkYXRpb25Db250cm9sbGVyKSk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1hcnJheVwiLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwsIHNjaGVtYTogdGhpcy5zY2hlbWEuaXRlbXMgfSwgYXJndW1lbnRzKTtcbiAgICB0aGlzLmJpbmRSdWxlcygpO1xuICAgIHRoaXMuY3JlYXRlVmlldygpO1xuICAgIHRoaXMuZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmdldEVycm9ycygpO1xuICB9XG5cbiAgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xuICAgIGxldCBzdHJhdGVneTtcbiAgICBpZiAodGhpcy5mb3JtLiRhbHRUZW1wbGF0ZSkge1xuICAgICAgc3RyYXRlZ3kgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5zY2hlbWEuaXRlbXMudHlwZSA9PT0gXCJzdHJpbmdcIiAmJiB0aGlzLnNjaGVtYS5pdGVtcy5lbnVtKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXlTdHJpbmdFbnVtO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuYXJyYXk7XG4gICAgfVxuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gc3RyYXRlZ3k7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZVZpZXcoKSB7XG4gICAgbGV0IHRlbXBsYXRlID0gdGhpcy5mb3JtU2VydmljZS5idWlsZEFycmF5Rm9ybSh0aGlzLnNjaGVtYSwgdGhpcy5mb3JtLCB0aGlzLmtleSwgdGhpcy5tb2RlbCk7XG4gICAgdGVtcGxhdGUgPSBgPHRlbXBsYXRlPiR7dGVtcGxhdGV9PC90ZW1wbGF0ZT5gO1xuICAgIHRoaXMudmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3kodGVtcGxhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBiaW5kUnVsZXMoKSB7XG4gICAgdGhpcy5hcnJheVJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XG4gIH1cblxuICBnZXRGb3JtQ29udHJvbGxlcihvdmVycmlkZUNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBvdmVycmlkZUNvbnRleHQuX19wYXJlbnRPdmVycmlkZUNvbnRleHQuYmluZGluZ0NvbnRleHQ7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5tb2RlbC5wdXNoKHRoaXMuZm9ybVNlcnZpY2UuZ2V0QXJyYXlJdGVtRGVmYXVsdCh0aGlzLnNjaGVtYSwgbnVsbCkpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XG4gICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyLndhcm4oXCJ2YWxpZGF0aW5nXCIpO1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZShpbmRleCkge1xuICAgIHRoaXMubW9kZWwuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICBnZXQgaXNEaXNhYmxlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5yZWFkT25seSB8fCAhIXRoaXMuZm9ybS4kYXJyYXlTY2hlbWEuY29uc3Q7XG4gIH1cblxuICBnZXQgYXRDYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1heEl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA+PSB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1heEl0ZW1zIDogZmFsc2U7XG4gIH1cblxuICBnZXQgYXRNaW5pbXVtQ2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRhcnJheVNjaGVtYS5taW5JdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPT09IHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWluSXRlbXMgOiBmYWxzZTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKCkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMubW9kZWwgfSk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInZhbGlkYXRlZCBhcnJheVwiLCByZXN1bHQpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBhc3luYyBnZXRFcnJvcnMoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy52YWxpZGF0ZSgpO1xuICAgIGlmICghcmVzdWx0LnZhbGlkKSB7XG4gICAgICB0aGlzLnZhbGlkYXRpb25FcnJvcnMgPSByZXN1bHQucmVzdWx0c1xuICAgICAgICAuZmlsdGVyKChyKSA9PiAhci52YWxpZClcbiAgICAgICAgLm1hcCgocikgPT4gci5tZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
