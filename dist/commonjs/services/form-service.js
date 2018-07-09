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
var form_override_1 = require("../interfaces/form-override");
var logger_1 = require("../resources/logger");
var defaults_service_1 = require("./defaults-service");
var wrapper_1 = require("../resources/wrapper");
var FormService = /** @class */ (function () {
    function FormService(defaultsService, taskQueue, logger) {
        this.defaultsService = defaultsService;
        this.taskQueue = taskQueue;
        this.logger = logger;
    }
    FormService.prototype.getFormTemplateAsync = function (form, schema, model, instanceId) {
        return __awaiter(this, void 0, void 0, function () {
            var template;
            return __generator(this, function (_a) {
                this.logger.warn("getFormTemplateAsync", { form: form, schema: schema, model: model });
                template = { content: "" };
                model = this.defaultsService.getSchemaDefaultAsync(schema, model);
                form_override_1.setFormOverrides(form, null, null, schema);
                this.transformTemplate(form, schema, template, instanceId);
                this.logger.warn("template created", { template: template });
                return [2 /*return*/, template];
            });
        });
    };
    FormService.prototype.transformTemplate = function (form, schema, template, instanceId, segment) {
        var _this = this;
        if (segment === void 0) { segment = ""; }
        this.logger.info("transformTemplate", { form: form, schema: schema });
        var _loop_1 = function (formKey) {
            if (form_override_1.isOverride(formKey)) {
                return "continue";
            }
            var wrapper = new wrapper_1.Wrapper(formKey);
            wrapper.applyStart(template);
            if (wrapper_1.Wrapper.isContainer(formKey)) {
                form[formKey].forEach(function (childForm, idx) {
                    _this.transformTemplate(childForm, schema, template, instanceId, segment + "['" + formKey + "'][" + idx + "]");
                });
            }
            else {
                form_override_1.setFormOverrides(form[formKey], schema, formKey, this_1.getFormKeySchema(formKey, schema));
                template.content += this_1.getTemplate("model['" + formKey + "']", "form" + segment + "['" + formKey + "']", this_1.getFormKeySchema(formKey, schema).type, instanceId);
            }
            wrapper.applyEnd(template);
        };
        var this_1 = this;
        for (var formKey in form) {
            _loop_1(formKey);
        }
    };
    FormService.prototype.getTemplate = function (modelPath, formPath, schemaType, instanceId) {
        return "<sf-" + schemaType +
            (" model.two-way=\"" + modelPath + "\"") +
            (" form.to-view=\"" + formPath + "\">") +
            (" form-instance=\"" + instanceId + "\"") +
            ("></sf-" + schemaType + ">");
    };
    FormService.prototype.getFormKeySchema = function (formKey, schema) {
        this.logger.info("getFormKeySchema", { formKey: formKey, schema: schema });
        if (schema.type === "object") {
            return schema.properties[formKey];
        }
        else if (schema.type === "array") {
            return schema.items[formKey];
        }
    };
    FormService = __decorate([
        aurelia_framework_1.inject(defaults_service_1.DefaultsService, aurelia_framework_1.TaskQueue, logger_1.SchemaFormLogger),
        __metadata("design:paramtypes", [defaults_service_1.DefaultsService,
            aurelia_framework_1.TaskQueue,
            logger_1.SchemaFormLogger])
    ], FormService);
    return FormService;
}());
exports.FormService = FormService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELDZEQUEwRjtBQU0xRiw4Q0FBdUQ7QUFFdkQsdURBQXFEO0FBQ3JELGdEQUErQztBQUcvQztJQUNFLHFCQUNTLGVBQWdDLEVBQ2hDLFNBQW9CLEVBQ25CLE1BQXdCO1FBRnpCLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ25CLFdBQU0sR0FBTixNQUFNLENBQWtCO0lBQzlCLENBQUM7SUFFQywwQ0FBb0IsR0FBMUIsVUFDRSxJQUFtQixFQUFFLE1BQTZCLEVBQUUsS0FBVSxFQUFFLFVBQWtCOzs7O2dCQUVsRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztnQkFFNUQsUUFBUSxHQUFjLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO2dCQUU1QyxLQUFLLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBRWxFLGdDQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUUzQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7Z0JBRTNELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRCxzQkFBTyxRQUFRLEVBQUM7OztLQUNqQjtJQUVELHVDQUFpQixHQUFqQixVQUNFLElBQW1CLEVBQUUsTUFBNkIsRUFBRSxRQUFtQixFQUFFLFVBQWtCLEVBQUUsT0FBb0I7UUFEbkgsaUJBbUNDO1FBbEM4Rix3QkFBQSxFQUFBLFlBQW9CO1FBRWpILElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO2dDQUM3QyxPQUFPO1lBQ2hCLElBQUksMEJBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTs7YUFFeEI7WUFDRCxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDckMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM3QixJQUFJLGlCQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUMvQixJQUFJLENBQUMsT0FBTyxDQUFxQixDQUFDLE9BQU8sQ0FBQyxVQUFDLFNBQVMsRUFBRSxHQUFHO29CQUN4RCxLQUFJLENBQUMsaUJBQWlCLENBQ3BCLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLFVBQVUsRUFDUCxPQUFPLFVBQUssT0FBTyxXQUFNLEdBQUcsTUFBRyxDQUNuQyxDQUFDO2dCQUNKLENBQUMsQ0FBQyxDQUFDO2FBQ0o7aUJBQU07Z0JBQ0wsZ0NBQWdCLENBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBa0IsRUFDOUIsTUFBTSxFQUNOLE9BQU8sRUFDUCxPQUFLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FDdkMsQ0FBQztnQkFDRixRQUFRLENBQUMsT0FBTyxJQUFJLE9BQUssV0FBVyxDQUNsQyxZQUFVLE9BQU8sT0FBSSxFQUNyQixTQUFPLE9BQU8sVUFBSyxPQUFPLE9BQUksRUFDOUIsT0FBSyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxFQUMzQyxVQUFVLENBQUMsQ0FBQzthQUNmO1lBQ0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM3QixDQUFDOztRQTlCRCxLQUFLLElBQU0sT0FBTyxJQUFJLElBQUk7b0JBQWYsT0FBTztTQThCakI7SUFDSCxDQUFDO0lBRUQsaUNBQVcsR0FBWCxVQUNFLFNBQWlCLEVBQUUsUUFBZ0IsRUFBRSxVQUFzQixFQUFFLFVBQWtCO1FBRS9FLE9BQU8sU0FBTyxVQUFZO2FBQ3hCLHNCQUFtQixTQUFTLE9BQUcsQ0FBQTthQUMvQixxQkFBa0IsUUFBUSxRQUFJLENBQUE7YUFDOUIsc0JBQW1CLFVBQVUsT0FBRyxDQUFBO2FBQ2hDLFdBQVMsVUFBVSxNQUFHLENBQUEsQ0FBQztJQUMzQixDQUFDO0lBRU8sc0NBQWdCLEdBQXhCLFVBQXlCLE9BQWUsRUFBRSxNQUE2QjtRQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztRQUMxRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQzVCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQTBCLENBQUM7U0FDNUQ7YUFBTSxJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO1lBQ2xDLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQTBCLENBQUM7U0FDdkQ7SUFDSCxDQUFDO0lBOUVVLFdBQVc7UUFEdkIsMEJBQU0sQ0FBQyxrQ0FBZSxFQUFFLDZCQUFTLEVBQUUseUJBQWdCLENBQUM7eUNBR3pCLGtDQUFlO1lBQ3JCLDZCQUFTO1lBQ1gseUJBQWdCO09BSnZCLFdBQVcsQ0ErRXZCO0lBQUQsa0JBQUM7Q0EvRUQsQUErRUMsSUFBQTtBQS9FWSxrQ0FBVyIsImZpbGUiOiJzZXJ2aWNlcy9mb3JtLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QsIFRhc2tRdWV1ZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSwgaXNPdmVycmlkZSwgc2V0Rm9ybU92ZXJyaWRlcyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7XG4gIElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLFxuICBTY2hlbWFUeXBlXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGVtcGxhdGVcIjtcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gXCIuL2RlZmF1bHRzLXNlcnZpY2VcIjtcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL3dyYXBwZXJcIjtcblxuQGluamVjdChEZWZhdWx0c1NlcnZpY2UsIFRhc2tRdWV1ZSwgU2NoZW1hRm9ybUxvZ2dlcilcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkZWZhdWx0c1NlcnZpY2U6IERlZmF1bHRzU2VydmljZSxcbiAgICBwdWJsaWMgdGFza1F1ZXVlOiBUYXNrUXVldWUsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcbiAgKSB7IH1cblxuICBhc3luYyBnZXRGb3JtVGVtcGxhdGVBc3luYyhcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgbW9kZWw6IGFueSwgaW5zdGFuY2VJZDogc3RyaW5nXG4gICk6IFByb21pc2U8SVRlbXBsYXRlPiB7XG4gICAgdGhpcy5sb2dnZXIud2FybihcImdldEZvcm1UZW1wbGF0ZUFzeW5jXCIsIHsgZm9ybSwgc2NoZW1hLCBtb2RlbCB9KTtcblxuICAgIGNvbnN0IHRlbXBsYXRlOiBJVGVtcGxhdGUgPSB7IGNvbnRlbnQ6IFwiXCIgfTtcblxuICAgIG1vZGVsID0gdGhpcy5kZWZhdWx0c1NlcnZpY2UuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYSwgbW9kZWwpO1xuXG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtLCBudWxsLCBudWxsLCBzY2hlbWEpO1xuXG4gICAgdGhpcy50cmFuc2Zvcm1UZW1wbGF0ZShmb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkKTtcblxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJ0ZW1wbGF0ZSBjcmVhdGVkXCIsIHsgdGVtcGxhdGUgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgdHJhbnNmb3JtVGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSwgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIHRlbXBsYXRlOiBJVGVtcGxhdGUsIGluc3RhbmNlSWQ6IHN0cmluZywgc2VnbWVudDogc3RyaW5nID0gXCJcIlxuICApIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidHJhbnNmb3JtVGVtcGxhdGVcIiwgeyBmb3JtLCBzY2hlbWEgfSk7XG4gICAgZm9yIChjb25zdCBmb3JtS2V5IGluIGZvcm0pIHtcbiAgICAgIGlmIChpc092ZXJyaWRlKGZvcm1LZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBXcmFwcGVyKGZvcm1LZXkpO1xuICAgICAgd3JhcHBlci5hcHBseVN0YXJ0KHRlbXBsYXRlKTtcbiAgICAgIGlmIChXcmFwcGVyLmlzQ29udGFpbmVyKGZvcm1LZXkpKSB7XG4gICAgICAgIChmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGVbXSkuZm9yRWFjaCgoY2hpbGRGb3JtLCBpZHgpID0+IHtcbiAgICAgICAgICB0aGlzLnRyYW5zZm9ybVRlbXBsYXRlKFxuICAgICAgICAgICAgY2hpbGRGb3JtLFxuICAgICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgICAgdGVtcGxhdGUsXG4gICAgICAgICAgICBpbnN0YW5jZUlkLFxuICAgICAgICAgICAgYCR7c2VnbWVudH1bJyR7Zm9ybUtleX0nXVske2lkeH1dYFxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0Rm9ybU92ZXJyaWRlcyhcbiAgICAgICAgICBmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGUsXG4gICAgICAgICAgc2NoZW1hLFxuICAgICAgICAgIGZvcm1LZXksXG4gICAgICAgICAgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSlcbiAgICAgICAgKTtcbiAgICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLmdldFRlbXBsYXRlKFxuICAgICAgICAgIGBtb2RlbFsnJHtmb3JtS2V5fSddYCxcbiAgICAgICAgICBgZm9ybSR7c2VnbWVudH1bJyR7Zm9ybUtleX0nXWAsXG4gICAgICAgICAgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSkudHlwZSxcbiAgICAgICAgICBpbnN0YW5jZUlkKTtcbiAgICAgIH1cbiAgICAgIHdyYXBwZXIuYXBwbHlFbmQodGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIGdldFRlbXBsYXRlKFxuICAgIG1vZGVsUGF0aDogc3RyaW5nLCBmb3JtUGF0aDogc3RyaW5nLCBzY2hlbWFUeXBlOiBTY2hlbWFUeXBlLCBpbnN0YW5jZUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgcmV0dXJuIGA8c2YtJHtzY2hlbWFUeXBlfWAgK1xuICAgICAgYCBtb2RlbC50d28td2F5PVwiJHttb2RlbFBhdGh9XCJgICtcbiAgICAgIGAgZm9ybS50by12aWV3PVwiJHtmb3JtUGF0aH1cIj5gICtcbiAgICAgIGAgZm9ybS1pbnN0YW5jZT1cIiR7aW5zdGFuY2VJZH1cImAgK1xuICAgICAgYD48L3NmLSR7c2NoZW1hVHlwZX0+YDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEZvcm1LZXlTY2hlbWFcIiwgeyBmb3JtS2V5LCBzY2hlbWEgfSk7XG4gICAgaWYgKHNjaGVtYS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLnByb3BlcnRpZXNbZm9ybUtleV0gYXMgSUpzb25TY2hlbWFEZWZpbml0aW9uO1xuICAgIH0gZWxzZSBpZiAoc2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgcmV0dXJuIHNjaGVtYS5pdGVtc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
