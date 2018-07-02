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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVEQUF3RjtBQUV4Riw2Q0FBNEM7QUFDNUMsc0ZBQW1GO0FBQ25GLGlEQUEwRDtBQUUxRCw0REFBMEQ7QUFFMUQseURBQStEO0FBQy9ELHFFQUEyRDtBQUUzRCx1REFBcUQ7QUFJckQ7SUFnQkUsaUJBQ1MsVUFBc0IsRUFDdEIsYUFBc0MsRUFDdEMsV0FBd0IsRUFDdkIsTUFBd0IsRUFDekIsU0FBb0IsRUFDbkIsZUFBZ0M7UUFMakMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDdkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDekIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNuQixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFoQjFDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLE9BQU8sQ0FBQztJQWVYLENBQUM7SUFFQywwQkFBUSxHQUFkOzs7Ozs7d0JBQ0UsS0FBQSxJQUFJLENBQUE7d0JBQVcscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLEVBQUE7O3dCQUFuRSxHQUFLLE9BQU8sR0FBRyxTQUFvRCxDQUFDOzs7OztLQUNyRTtJQUVELHNCQUFJLEdBQUosVUFBSyxjQUFzQixFQUFFLGVBQXVCO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBbUIsQ0FBQztRQUM1RSxJQUFJLENBQUMsVUFBVSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FB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Q2YseUJBQWdCO1lBQ2QsOEJBQVM7WUFDRiwwQ0FBZTtPQXRCL0IsT0FBTyxDQXFFbkI7SUFBRCxjQUFDO0NBckVELEFBcUVDLElBQUE7QUFyRVksMEJBQU8iLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtXCI7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5pbXBvcnQgeyBWYWxpZGF0b3IsIFZhbGlkYXRlUmVzdWx0IH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgRXZlbnRBZ2dyZWdhdG9yIH0gZnJvbSBcImF1cmVsaWEtZXZlbnQtYWdncmVnYXRvclwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZm9ybS1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBBcnJheVJ1bGVzIH0gZnJvbSBcIi4uLy4uL3J1bGVzL2FycmF5LXJ1bGVzXCI7XG5cbkBpbmplY3QoQXJyYXlSdWxlcywgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIEZvcm1TZXJ2aWNlLCBTY2hlbWFGb3JtTG9nZ2VyLCBWYWxpZGF0b3IsIEV2ZW50QWdncmVnYXRvcilcbkBjdXN0b21FbGVtZW50KFwic2YtYXJyYXlcIilcbmV4cG9ydCBjbGFzcyBTZkFycmF5IHtcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XG4gIEBiaW5kYWJsZSBrZXk6IHN0cmluZztcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnlbXTtcbiAgQGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb247XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcImFycmF5XCI7XG5cbiAgdmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIHJlc3VsdHM6IFZhbGlkYXRlUmVzdWx0W107XG5cbiAgY29udHJvbGxlcjogRm9ybUNvbnRyb2xsZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFycmF5UnVsZXM6IEFycmF5UnVsZXMsXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHVibGljIHZhbGlkYXRvcjogVmFsaWRhdG9yLFxuICAgIHByaXZhdGUgZXZlbnRBZ2dyZWdhdG9yOiBFdmVudEFnZ3JlZ2F0b3JcbiAgKSB7IH1cblxuICBhc3luYyB2YWxpZGF0ZSgpIHtcbiAgICB0aGlzLnJlc3VsdHMgPSBhd2FpdCB0aGlzLnZhbGlkYXRvci52YWxpZGF0ZVByb3BlcnR5KHRoaXMsIFwibW9kZWxcIik7XG4gIH1cblxuICBiaW5kKGJpbmRpbmdDb250ZXh0OiBvYmplY3QsIG92ZXJyaWRlQ29udGV4dDogb2JqZWN0KSB7XG4gICAgdGhpcy5hcnJheVJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jb250cm9sbGVyID0gdGhpcy5nZXRGb3JtQ29udHJvbGxlcihvdmVycmlkZUNvbnRleHQpIGFzIEZvcm1Db250cm9sbGVyO1xuICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRPYmplY3QodGhpcy5tb2RlbCk7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWFycmF5XCIsIHsgZm9ybTogdGhpcy5mb3JtLCBtb2RlbDogdGhpcy5tb2RlbCwgc2NoZW1hOiB0aGlzLnNjaGVtYS5pdGVtcyB9LCBhcmd1bWVudHMpO1xuICAgIGxldCB0ZW1wbGF0ZSA9IHRoaXMuZm9ybVNlcnZpY2UuYnVpbGRBcnJheUZvcm0odGhpcy5zY2hlbWEsIHRoaXMuZm9ybSwgdGhpcy5rZXksIHRoaXMubW9kZWwpO1xuICAgIHRlbXBsYXRlID0gYDx0ZW1wbGF0ZT4ke3RlbXBsYXRlfTwvdGVtcGxhdGU+YDtcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KHRlbXBsYXRlKTtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICBnZXRGb3JtQ29udHJvbGxlcihvdmVycmlkZUNvbnRleHQ6IGFueSkge1xuICAgIHJldHVybiBvdmVycmlkZUNvbnRleHQuX19wYXJlbnRPdmVycmlkZUNvbnRleHQuYmluZGluZ0NvbnRleHQ7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgdGhpcy5tb2RlbC5wdXNoKHRoaXMuZm9ybVNlcnZpY2UuZ2V0QXJyYXlJdGVtRGVmYXVsdCh0aGlzLnNjaGVtYSwgbnVsbCkpO1xuICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZU9uUmVuZGVyKCk7XG4gICAgdGhpcy5ldmVudEFnZ3JlZ2F0b3IucHVibGlzaChcImZvcm0tYXJyYXktbW9kaWZpZWRcIik7XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLm1vZGVsLnNwbGljZShpbmRleCwgMSk7XG4gICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIHRoaXMuZXZlbnRBZ2dyZWdhdG9yLnB1Ymxpc2goXCJmb3JtLWFycmF5LW1vZGlmaWVkXCIpO1xuICB9XG5cbiAgZ2V0IGlzRGlzYWJsZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEucmVhZE9ubHkgfHwgISF0aGlzLmZvcm0uJGFycmF5U2NoZW1hLmNvbnN0O1xuICB9XG5cbiAgZ2V0IGF0Q2FwYWNpdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIE51bWJlci5pc0ludGVnZXIodGhpcy5mb3JtLiRhcnJheVNjaGVtYS5tYXhJdGVtcylcbiAgICAgID8gdGhpcy5tb2RlbC5sZW5ndGggPj0gdGhpcy5mb3JtLiRhcnJheVNjaGVtYS5tYXhJdGVtcyA6IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGF0TWluaW11bUNhcGFjaXR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHRoaXMuZm9ybS4kYXJyYXlTY2hlbWEubWluSXRlbXMpXG4gICAgICA/IHRoaXMubW9kZWwubGVuZ3RoID09PSB0aGlzLmZvcm0uJGFycmF5U2NoZW1hLm1pbkl0ZW1zIDogZmFsc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
