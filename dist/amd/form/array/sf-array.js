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
    exports.SfArray = SfArray;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFlQTtRQWdCRSxpQkFDUyxVQUFzQixFQUN0QixhQUFzQyxFQUN0QyxXQUF3QixFQUN2QixNQUF3QixFQUN6QixTQUFvQixFQUNuQixlQUFnQztZQUxqQyxlQUFVLEdBQVYsVUFBVSxDQUFZO1lBQ3RCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtZQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtZQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFXO1lBQ25CLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtZQWhCMUMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU1QixTQUFJLEdBQUcsT0FBTyxDQUFDO1FBZVgsQ0FBQztRQUVDLDBCQUFRLEdBQWQ7Ozs7Ozs0QkFDRSxLQUFBLElBQUksQ0FBQTs0QkFBVyxxQkFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsRUFBQTs7NEJBQW5FLEdBQUssT0FBTyxHQUFHLFNBQW9ELENBQUM7Ozs7O1NBQ3JFO1FBRUQsc0JBQUksR0FBSixVQUFLLGNBQXNCLEVBQUUsZUFBdUI7WUFDbEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDM0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsZUFBZSxDQUFtQixDQUFDO1lBQzVFLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUks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ZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybVwiO1xuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi4vLi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xuaW1wb3J0IHsgVmFsaWRhdG9yLCBWYWxpZGF0ZVJlc3VsdCB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IEV2ZW50QWdncmVnYXRvciB9IGZyb20gXCJhdXJlbGlhLWV2ZW50LWFnZ3JlZ2F0b3JcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sbGVyIH0gZnJvbSBcIi4uL2Zvcm0tY29udHJvbGxlclwiO1xuaW1wb3J0IHsgQXJyYXlSdWxlcyB9IGZyb20gXCIuLi8uLi9ydWxlcy9hcnJheS1ydWxlc1wiO1xuXG5AaW5qZWN0KEFycmF5UnVsZXMsIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBGb3JtU2VydmljZSwgU2NoZW1hRm9ybUxvZ2dlciwgVmFsaWRhdG9yLCBFdmVudEFnZ3JlZ2F0b3IpXG5AY3VzdG9tRWxlbWVudChcInNmLWFycmF5XCIpXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBAYmluZGFibGUga2V5OiBzdHJpbmc7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55W107XG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBraW5kID0gXCJhcnJheVwiO1xuXG4gIHZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcblxuICByZXN1bHRzOiBWYWxpZGF0ZVJlc3VsdFtdO1xuXG4gIGNvbnRyb2xsZXI6IEZvcm1Db250cm9sbGVyO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzLFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHB1YmxpYyB2YWxpZGF0b3I6IFZhbGlkYXRvcixcbiAgICBwcml2YXRlIGV2ZW50QWdncmVnYXRvcjogRXZlbnRBZ2dyZWdhdG9yXG4gICkgeyB9XG5cbiAgYXN5bmMgdmFsaWRhdGUoKSB7XG4gICAgdGhpcy5yZXN1bHRzID0gYXdhaXQgdGhpcy52YWxpZGF0b3IudmFsaWRhdGVQcm9wZXJ0eSh0aGlzLCBcIm1vZGVsXCIpO1xuICB9XG5cbiAgYmluZChiaW5kaW5nQ29udGV4dDogb2JqZWN0LCBvdmVycmlkZUNvbnRleHQ6IG9iamVjdCkge1xuICAgIHRoaXMuYXJyYXlSdWxlcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY29udHJvbGxlciA9IHRoaXMuZ2V0Rm9ybUNvbnRyb2xsZXIob3ZlcnJpZGVDb250ZXh0KSBhcyBGb3JtQ29udHJvbGxlcjtcbiAgICB0aGlzLmNvbnRyb2xsZXIudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkT2JqZWN0KHRoaXMubW9kZWwpO1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1hcnJheVwiLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwsIHNjaGVtYTogdGhpcy5zY2hlbWEuaXRlbXMgfSwgYXJndW1lbnRzKTtcbiAgICBsZXQgdGVtcGxhdGUgPSB0aGlzLmZvcm1TZXJ2aWNlLmJ1aWxkQXJyYXlGb3JtKHRoaXMuc2NoZW1hLCB0aGlzLmZvcm0sIHRoaXMua2V5LCB0aGlzLm1vZGVsKTtcbiAgICB0ZW1wbGF0ZSA9IGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZX08L3RlbXBsYXRlPmA7XG4gICAgdGhpcy52aWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneSh0ZW1wbGF0ZSk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICB9XG5cbiAgZ2V0Rm9ybUNvbnRyb2xsZXIob3ZlcnJpZGVDb250ZXh0OiBhbnkpIHtcbiAgICByZXR1cm4gb3ZlcnJpZGVDb250ZXh0Ll9fcGFyZW50T3ZlcnJpZGVDb250ZXh0LmJpbmRpbmdDb250ZXh0O1xuICB9XG5cbiAgYWRkKCkge1xuICAgIHRoaXMubW9kZWwucHVzaCh0aGlzLmZvcm1TZXJ2aWNlLmdldEFycmF5SXRlbURlZmF1bHQodGhpcy5zY2hlbWEsIG51bGwpKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIudmFsaWRhdGVPblJlbmRlcigpO1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goXCJmb3JtLWFycmF5LW1vZGlmaWVkXCIpO1xuICB9XG5cbiAgcmVtb3ZlKGluZGV4KSB7XG4gICAgdGhpcy5tb2RlbC5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB0aGlzLmV2ZW50QWdncmVnYXRvci5wdWJsaXNoKFwiZm9ybS1hcnJheS1tb2RpZmllZFwiKTtcbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLnJlYWRPbmx5IHx8ICEhdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5jb25zdDtcbiAgfVxuXG4gIGdldCBhdENhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWF4SXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID49IHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWF4SXRlbXMgOiBmYWxzZTtcbiAgfVxuXG4gIGdldCBhdE1pbmltdW1DYXBhY2l0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gTnVtYmVyLmlzSW50ZWdlcih0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1pbkl0ZW1zKVxuICAgICAgPyB0aGlzLm1vZGVsLmxlbmd0aCA9PT0gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5taW5JdGVtcyA6IGZhbHNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
