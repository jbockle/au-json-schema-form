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
var template_1 = require("../interfaces/template");
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
                switch (_a.label) {
                    case 0:
                        this.logger.warn("getFormTemplateAsync", { form: form, schema: schema, model: model, instanceId: instanceId });
                        template = { content: "" };
                        return [4 /*yield*/, this.defaultsService.getSchemaDefaultAsync(schema, model)];
                    case 1:
                        model = _a.sent();
                        form_override_1.setFormOverrides(form, null, null, schema);
                        this.generateTemplate(form, schema, template, instanceId);
                        this.logger.warn("template created", { template: template });
                        return [2 /*return*/, template];
                }
            });
        });
    };
    FormService.prototype.generateTemplate = function (form, schema, template, instanceId, segment) {
        if (segment === void 0) { segment = ""; }
        this.logger.info("transformTemplate", { form: form, schema: schema });
        for (var formKey in form) {
            if (form_override_1.isOverride(formKey)) {
                continue;
            }
            var wrapper = new wrapper_1.Wrapper(formKey);
            wrapper.applyStart(template);
            if (wrapper_1.Wrapper.isContainer(formKey)) {
                this.appendContainer(form, formKey, schema, template, instanceId, segment);
            }
            else if (template_1.isTemplateModule(formKey)) {
                this.appendTemplateModule(template, form._template, schema);
            }
            else {
                this.appendSfTemplate(form, formKey, schema, template, segment, instanceId);
            }
            wrapper.applyEnd(template);
        }
    };
    FormService.prototype.appendContainer = function (form, formKey, schema, template, instanceId, segment) {
        var _this = this;
        form[formKey].forEach(function (childForm, idx) {
            _this.generateTemplate(childForm, schema, template, instanceId, segment + "['" + formKey + "'][" + idx + "]");
        });
    };
    FormService.prototype.appendSfTemplate = function (form, formKey, schema, template, segment, instanceId) {
        form_override_1.setFormOverrides(form[formKey], schema, formKey, this.getFormKeySchema(formKey, schema));
        template.content += this.getSfTemplate("model['" + formKey + "']", "form" + segment + "['" + formKey + "']", this.getFormKeySchema(formKey, schema).type, instanceId);
    };
    FormService.prototype.appendTemplateModule = function (template, templateModule, parentSchema) {
        template.content += "<" + templateModule.elementName + " ";
        if (templateModule.schemaKey) {
            template.content += " model.two-way=\"model['" + templateModule.schemaKey + "']\" schema.to-view=\"schema";
            switch (this.getFormKeySchema(templateModule.schemaKey, parentSchema).type) {
                case "array":
                    template.content += ".items";
                    break;
                case "object":
                    template.content += ".properties";
                    break;
            }
            template.content += "['" + templateModule.schemaKey + "']\"";
        }
        template.content += "></" + templateModule.elementName + ">";
    };
    FormService.prototype.getSfTemplate = function (modelPath, formPath, schemaType, instanceId) {
        this.logger.info("getTemplate", { modelPath: modelPath, formPath: formPath, schemaType: schemaType, instanceId: instanceId });
        return "<sf-" + schemaType +
            (" model.two-way=\"" + modelPath + "\"") +
            (" form.to-view=\"" + formPath + "\"") +
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELDZEQUEwRjtBQUsxRiw4Q0FBdUQ7QUFDdkQsbURBQTJGO0FBQzNGLHVEQUFxRDtBQUNyRCxnREFBK0M7QUFHL0M7SUFDRSxxQkFDUyxlQUFnQyxFQUNoQyxTQUFvQixFQUNuQixNQUF3QjtRQUZ6QixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtJQUM5QixDQUFDO0lBRUMsMENBQW9CLEdBQTFCLFVBQ0UsSUFBbUIsRUFBRSxNQUE2QixFQUFFLEtBQVUsRUFBRSxVQUFrQjs7Ozs7O3dCQUVsRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLFVBQVUsWUFBQSxFQUFFLENBQUMsQ0FBQzt3QkFFeEUsUUFBUSxHQUFtQixFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQzt3QkFFekMscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLEVBQUE7O3dCQUF2RSxLQUFLLEdBQUcsU0FBK0QsQ0FBQzt3QkFFeEUsZ0NBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7d0JBRTNDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQzt3QkFFMUQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7d0JBQ25ELHNC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QXRIVSxXQUFXO1FBRHZCLDBCQUFNLENBQUMsa0NBQWUsRUFBRSw2QkFBUyxFQUFFLHlCQUFnQixDQUFDO3lDQUd6QixrQ0FBZTtZQUNyQiw2QkFBUztZQUNYLHlCQUFnQjtPQUp2QixXQUFXLENBdUh2QjtJQUFELGtCQUFDO0NBdkhELEFBdUhDLElBQUE7QUF2SFksa0NBQVciLCJmaWxlIjoic2VydmljZXMvZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBUYXNrUXVldWUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUsIGlzT3ZlcnJpZGUsIHNldEZvcm1PdmVycmlkZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQge1xuICBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gIFNjaGVtYVR5cGVcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVTdG9yZSwgaXNUZW1wbGF0ZU1vZHVsZSwgSVRlbXBsYXRlTW9kdWxlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGVtcGxhdGVcIjtcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gXCIuL2RlZmF1bHRzLXNlcnZpY2VcIjtcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL3dyYXBwZXJcIjtcblxuQGluamVjdChEZWZhdWx0c1NlcnZpY2UsIFRhc2tRdWV1ZSwgU2NoZW1hRm9ybUxvZ2dlcilcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkZWZhdWx0c1NlcnZpY2U6IERlZmF1bHRzU2VydmljZSxcbiAgICBwdWJsaWMgdGFza1F1ZXVlOiBUYXNrUXVldWUsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcbiAgKSB7IH1cblxuICBhc3luYyBnZXRGb3JtVGVtcGxhdGVBc3luYyhcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgbW9kZWw6IGFueSwgaW5zdGFuY2VJZDogc3RyaW5nXG4gICk6IFByb21pc2U8SVRlbXBsYXRlU3RvcmU+IHtcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwiZ2V0Rm9ybVRlbXBsYXRlQXN5bmNcIiwgeyBmb3JtLCBzY2hlbWEsIG1vZGVsLCBpbnN0YW5jZUlkIH0pO1xuXG4gICAgY29uc3QgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlID0geyBjb250ZW50OiBcIlwiIH07XG5cbiAgICBtb2RlbCA9IGF3YWl0IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyhzY2hlbWEsIG1vZGVsKTtcblxuICAgIHNldEZvcm1PdmVycmlkZXMoZm9ybSwgbnVsbCwgbnVsbCwgc2NoZW1hKTtcblxuICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShmb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkKTtcblxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJ0ZW1wbGF0ZSBjcmVhdGVkXCIsIHsgdGVtcGxhdGUgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2VuZXJhdGVUZW1wbGF0ZShcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmcsXG4gICAgc2VnbWVudDogc3RyaW5nID0gXCJcIlxuICApIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidHJhbnNmb3JtVGVtcGxhdGVcIiwgeyBmb3JtLCBzY2hlbWEgfSk7XG4gICAgZm9yIChjb25zdCBmb3JtS2V5IGluIGZvcm0pIHtcbiAgICAgIGlmIChpc092ZXJyaWRlKGZvcm1LZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBXcmFwcGVyKGZvcm1LZXkpO1xuICAgICAgd3JhcHBlci5hcHBseVN0YXJ0KHRlbXBsYXRlKTtcbiAgICAgIGlmIChXcmFwcGVyLmlzQ29udGFpbmVyKGZvcm1LZXkpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ29udGFpbmVyKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIHNlZ21lbnQpO1xuICAgICAgfSBlbHNlIGlmIChpc1RlbXBsYXRlTW9kdWxlKGZvcm1LZXkpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kVGVtcGxhdGVNb2R1bGUodGVtcGxhdGUsIGZvcm0uX3RlbXBsYXRlLCBzY2hlbWEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hcHBlbmRTZlRlbXBsYXRlKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgdGVtcGxhdGUsIHNlZ21lbnQsIGluc3RhbmNlSWQpO1xuICAgICAgfVxuICAgICAgd3JhcHBlci5hcHBseUVuZCh0ZW1wbGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRDb250YWluZXIoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICBmb3JtS2V5OiBzdHJpbmcsXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIGluc3RhbmNlSWQ6IHN0cmluZyxcbiAgICBzZWdtZW50OiBzdHJpbmdcbiAgKSB7XG4gICAgKGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZVtdKS5mb3JFYWNoKChjaGlsZEZvcm0sIGlkeCkgPT4ge1xuICAgICAgdGhpcy5nZW5lcmF0ZVRlbXBsYXRlKGNoaWxkRm9ybSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCwgYCR7c2VnbWVudH1bJyR7Zm9ybUtleX0nXVske2lkeH1dYCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRTZlRlbXBsYXRlKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXG4gICAgZm9ybUtleTogc3RyaW5nLFxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcbiAgICBzZWdtZW50OiBzdHJpbmcsXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nXG4gICkge1xuICAgIHNldEZvcm1PdmVycmlkZXMoZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlLCBzY2hlbWEsIGZvcm1LZXksIHRoaXMuZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5LCBzY2hlbWEpKTtcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuZ2V0U2ZUZW1wbGF0ZShcbiAgICAgIGBtb2RlbFsnJHtmb3JtS2V5fSddYCxcbiAgICAgIGBmb3JtJHtzZWdtZW50fVsnJHtmb3JtS2V5fSddYCxcbiAgICAgIHRoaXMuZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5LCBzY2hlbWEpLnR5cGUsXG4gICAgICBpbnN0YW5jZUlkXG4gICAgKTtcbiAgfVxuXG4gIGFwcGVuZFRlbXBsYXRlTW9kdWxlKFxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcbiAgICB0ZW1wbGF0ZU1vZHVsZTogSVRlbXBsYXRlTW9kdWxlLFxuICAgIHBhcmVudFNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uXG4gICk6IHZvaWQge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYDwke3RlbXBsYXRlTW9kdWxlLmVsZW1lbnROYW1lfSBgO1xuICAgIGlmICh0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXkpIHtcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYCBtb2RlbC50d28td2F5PVwibW9kZWxbJyR7dGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5fSddXCIgc2NoZW1hLnRvLXZpZXc9XCJzY2hlbWFgO1xuICAgICAgc3dpdGNoICh0aGlzLmdldEZvcm1LZXlTY2hlbWEodGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5LCBwYXJlbnRTY2hlbWEpLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcImFycmF5XCI6XG4gICAgICAgICAgdGVtcGxhdGUuY29udGVudCArPSBcIi5pdGVtc1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgdGVtcGxhdGUuY29udGVudCArPSBcIi5wcm9wZXJ0aWVzXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGBbJyR7dGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5fSddXCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGA+PC8ke3RlbXBsYXRlTW9kdWxlLmVsZW1lbnROYW1lfT5gO1xuICB9XG5cbiAgZ2V0U2ZUZW1wbGF0ZShcbiAgICBtb2RlbFBhdGg6IHN0cmluZywgZm9ybVBhdGg6IHN0cmluZywgc2NoZW1hVHlwZTogU2NoZW1hVHlwZSwgaW5zdGFuY2VJZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRUZW1wbGF0ZVwiLCB7IG1vZGVsUGF0aCwgZm9ybVBhdGgsIHNjaGVtYVR5cGUsIGluc3RhbmNlSWQgfSk7XG4gICAgcmV0dXJuIGA8c2YtJHtzY2hlbWFUeXBlfWAgK1xuICAgICAgYCBtb2RlbC50d28td2F5PVwiJHttb2RlbFBhdGh9XCJgICtcbiAgICAgIGAgZm9ybS50by12aWV3PVwiJHtmb3JtUGF0aH1cImAgK1xuICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXG4gICAgICBgPjwvc2YtJHtzY2hlbWFUeXBlfT5gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0Rm9ybUtleVNjaGVtYVwiLCB7IGZvcm1LZXksIHNjaGVtYSB9KTtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICAgfSBlbHNlIGlmIChzY2hlbWEudHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
