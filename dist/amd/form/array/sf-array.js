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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFvQkE7UUFpQkUsaUJBQ1MsVUFBc0IsRUFDdEIsYUFBc0MsRUFDdEMsV0FBd0IsRUFDdkIsTUFBd0IsRUFDekIsU0FBb0I7WUFKcEIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtZQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7WUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7WUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7WUFDekIsY0FBUyxHQUFULFNBQVMsQ0FBVztZQWhCN0IsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU1QixTQUFJLEdBQUcsT0FBTyxDQUFDO1FBaUJmLENBQUM7UUFFRCx5QkFBTyxHQUFQLFVBQVEsVUFBZ0IsRUFBRSxNQUFZO1lBQ3BDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBUSxDQUFDLEVBQUUsQ0FBQyx5Q0FBb0IsQ0FBQyxDQUFDLENBQUM7UUFDdEYsQ0FBQztRQUVELHNCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMzRyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDakIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1lBQ2xCLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQy9CLENBQUM7UUFFRCwwQkFBUSxHQUFSO1lBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENB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QkFBUyxFQUNULDBDQUFlLENBQ2hCO1lBQ0EsaUNBQWEsQ0FBQyxVQUFVLENBQUM7NkNBbUJILHdCQUFVO2dCQUNQLG1EQUF1QjtnQkFDekIsMEJBQVc7Z0JBQ2YseUJBQWdCO2dCQUNkLDhCQUFTO1dBdEJsQixPQUFPLENBZ0huQjtRQUFELGNBQUM7S0FoSEQsQUFnSEMsSUFBQTtJQWhIWSwwQkFBTyIsImZpbGUiOiJmb3JtL2FycmF5L3NmLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5LCBWaWV3LCBPcHRpb25hbCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcbmltcG9ydCB7IFZhbGlkYXRvciwgVmFsaWRhdGVSZXN1bHQsIFZhbGlkYXRpb25Db250cm9sbGVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSBcImF1cmVsaWEtZXZlbnQtYWdncmVnYXRvclwiO1xuaW1wb3J0IHsgQXJyYXlSdWxlcyB9IGZyb20gXCIuLi8uLi9ydWxlcy9hcnJheS1ydWxlc1wiO1xuXG5AaW5qZWN0KFxuICBBcnJheVJ1bGVzLFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgRm9ybVNlcnZpY2UsXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXG4gIFZhbGlkYXRvcixcbiAgRXZlbnRBZ2dyZWdhdG9yXG4pXG5AY3VzdG9tRWxlbWVudChcInNmLWFycmF5XCIpXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBAYmluZGFibGUga2V5OiBzdHJpbmc7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBraW5kID0gXCJhcnJheVwiO1xuXG4gIHZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcblxuICB2aWV3U3RyYXRlZ3k6IHN0cmluZztcblxuICB2YWxpZGF0aW9uRXJyb3JzOiBzdHJpbmdbXTtcbiAgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzLFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHB1YmxpYyB2YWxpZGF0b3I6IFZhbGlkYXRvclxuICApIHtcblxuICB9XG5cbiAgY3JlYXRlZChvd25pbmdWaWV3OiBWaWV3LCBteVZpZXc6IFZpZXcpIHtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyID0gbXlWaWV3LmNvbnRhaW5lci5nZXQoT3B0aW9uYWwub2YoVmFsaWRhdGlvbkNvbnRyb2xsZXIpKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5XCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCwgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyB9LCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYmluZFJ1bGVzKCk7XG4gICAgdGhpcy5jcmVhdGVWaWV3KCk7XG4gICAgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMuZ2V0RXJyb3JzKCk7XG4gIH1cblxuICBkZXRlcm1pbmVWaWV3U3RyYXRlZ3koKSB7XG4gICAgbGV0IHN0cmF0ZWd5O1xuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XG4gICAgICBzdHJhdGVneSA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNjaGVtYS5pdGVtcy50eXBlID09PSBcInN0cmluZ1wiICYmIHRoaXMuc2NoZW1hLml0ZW1zLmVudW0pIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheVN0cmluZ0VudW07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0cmF0ZWd5ID0gdGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5hcnJheTtcbiAgICB9XG4gICAgdGhpcy52aWV3U3RyYXRlZ3kgPSBzdHJhdGVneTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlVmlldygpIHtcbiAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmZvcm1TZXJ2aWNlLmJ1aWxkQXJyYXlGb3JtKHRoaXMuc2NoZW1hLCB0aGlzLmZvcm0sIHRoaXMua2V5LCB0aGlzLm1vZGVsKTtcbiAgICB0ZW1wbGF0ZSA9IGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZX08L3RlbXBsYXRlPmA7XG4gICAgdGhpcy52aWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneSh0ZW1wbGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIGJpbmRSdWxlcygpIHtcbiAgICB0aGlzLmFycmF5UnVsZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZE9iamVjdCh0aGlzLm1vZGVsKTtcbiAgfVxuXG4gIGdldEZvcm1Db250cm9sbGVyKG92ZXJyaWRlQ29udGV4dDogYW55KSB7XG4gICAgcmV0dXJuIG92ZXJyaWRlQ29udGV4dC5fX3BhcmVudE92ZXJyaWRlQ29udGV4dC5iaW5kaW5nQ29udGV4dDtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICB0aGlzLm1vZGVsLnB1c2godGhpcy5mb3JtU2VydmljZS5nZXRBcnJheUl0ZW1EZWZhdWx0KHRoaXMuc2NoZW1hLCBudWxsKSk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcbiAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnZhbGlkYXRpb25SZW5kZXJlcikge1xuICAgICAgdGhpcy5sb2dnZXIud2FybihcInZhbGlkYXRpbmdcIik7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLnJlYWRPbmx5IHx8ICEhdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5jb25zdDtcbiAgfVxuXG4gIGdldCBhdENhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWF4SXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID49IHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWF4SXRlbXMgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBhdE1pbmltdW1DYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1pbkl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA9PT0gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5taW5JdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSh7IG9iamVjdDogdGhpcy5tb2RlbCB9KTtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidmFsaWRhdGVkIGFycmF5XCIsIHJlc3VsdCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGFzeW5jIGdldEVycm9ycygpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLnZhbGlkYXRlKCk7XG4gICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkVycm9ycyA9IHJlc3VsdC5yZXN1bHRzXG4gICAgICAgIC5maWx0ZXIoKHIpID0+ICFyLnZhbGlkKVxuICAgICAgICAubWFwKChyKSA9PiByLm1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gW107XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
