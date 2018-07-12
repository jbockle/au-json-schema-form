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
define(["require", "exports", "aurelia-framework", "../interfaces/form-override", "../resources/logger", "../interfaces/template", "./defaults-service", "../resources/wrapper"], function (require, exports, aurelia_framework_1, form_override_1, logger_1, template_1, defaults_service_1, wrapper_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            template.content += "<compose view-model=\"" + templateModule.moduleName + "\"";
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
            template.content += "></compose>";
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWFBO1FBQ0UscUJBQ1MsZUFBZ0MsRUFDaEMsU0FBb0IsRUFDbkIsTUFBd0I7WUFGekIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7WUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDOUIsQ0FBQztRQUVDLDBDQUFvQixHQUExQixVQUNFLElBQW1CLEVBQUUsTUFBNkIsRUFBRSxLQUFVLEVBQUUsVUFBa0I7Ozs7Ozs0QkFFbEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxVQUFVLFlBQUEsRUFBRSxDQUFDLENBQUM7NEJBRXhFLFFBQVEsR0FBbUIsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7NEJBRXpDLHFCQUFNLElBQUksQ0FBQyxlQUFlLENBQUMscUJBQXFCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxFQUFBOzs0QkFBdkUsS0FBSyxHQUFHLFNBQStELENBQUM7NEJBRXhFLGdDQUFnQixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDOzRCQUUzQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7NEJBRTFELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDOzRCQUNuRCxzQkFBTyxRQUFRLEVBQUM7Ozs7U0FDakI7UUFFRCxzQ0FBZ0IsR0FBaEIsVUFDRSxJQUFtQixFQUNuQixNQUE2QixFQUM3QixRQUF3QixF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Z0JBQ3JCLDZCQUFTO2dCQUNYLHlCQUFnQjtXQUp2QixXQUFXLENBdUh2QjtRQUFELGtCQUFDO0tBdkhELEFBdUhDLElBQUE7SUF2SFksa0NBQVciLCJmaWxlIjoic2VydmljZXMvZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBUYXNrUXVldWUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUsIGlzT3ZlcnJpZGUsIHNldEZvcm1PdmVycmlkZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQge1xuICBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcbiAgU2NoZW1hVHlwZVxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVN0b3JlLCBpc1RlbXBsYXRlTW9kdWxlLCBJVGVtcGxhdGVNb2R1bGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZVwiO1xuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSBcIi4vZGVmYXVsdHMtc2VydmljZVwiO1xuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvd3JhcHBlclwiO1xuXG5AaW5qZWN0KERlZmF1bHRzU2VydmljZSwgVGFza1F1ZXVlLCBTY2hlbWFGb3JtTG9nZ2VyKVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxuICApIHsgfVxuXG4gIGFzeW5jIGdldEZvcm1UZW1wbGF0ZUFzeW5jKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCBtb2RlbDogYW55LCBpbnN0YW5jZUlkOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxJVGVtcGxhdGVTdG9yZT4ge1xuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJnZXRGb3JtVGVtcGxhdGVBc3luY1wiLCB7IGZvcm0sIHNjaGVtYSwgbW9kZWwsIGluc3RhbmNlSWQgfSk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUgPSB7IGNvbnRlbnQ6IFwiXCIgfTtcblxuICAgIG1vZGVsID0gYXdhaXQgdGhpcy5kZWZhdWx0c1NlcnZpY2UuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYSwgbW9kZWwpO1xuXG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtLCBudWxsLCBudWxsLCBzY2hlbWEpO1xuXG4gICAgdGhpcy5nZW5lcmF0ZVRlbXBsYXRlKGZvcm0sIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQpO1xuXG4gICAgdGhpcy5sb2dnZXIud2FybihcInRlbXBsYXRlIGNyZWF0ZWRcIiwgeyB0ZW1wbGF0ZSB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBnZW5lcmF0ZVRlbXBsYXRlKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIGluc3RhbmNlSWQ6IHN0cmluZyxcbiAgICBzZWdtZW50OiBzdHJpbmcgPSBcIlwiXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJ0cmFuc2Zvcm1UZW1wbGF0ZVwiLCB7IGZvcm0sIHNjaGVtYSB9KTtcbiAgICBmb3IgKGNvbnN0IGZvcm1LZXkgaW4gZm9ybSkge1xuICAgICAgaWYgKGlzT3ZlcnJpZGUoZm9ybUtleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCB3cmFwcGVyID0gbmV3IFdyYXBwZXIoZm9ybUtleSk7XG4gICAgICB3cmFwcGVyLmFwcGx5U3RhcnQodGVtcGxhdGUpO1xuICAgICAgaWYgKFdyYXBwZXIuaXNDb250YWluZXIoZm9ybUtleSkpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRDb250YWluZXIoZm9ybSwgZm9ybUtleSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCwgc2VnbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKGlzVGVtcGxhdGVNb2R1bGUoZm9ybUtleSkpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRUZW1wbGF0ZU1vZHVsZSh0ZW1wbGF0ZSwgZm9ybS5fdGVtcGxhdGUsIHNjaGVtYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFwcGVuZFNmVGVtcGxhdGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hLCB0ZW1wbGF0ZSwgc2VnbWVudCwgaW5zdGFuY2VJZCk7XG4gICAgICB9XG4gICAgICB3cmFwcGVyLmFwcGx5RW5kKHRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZENvbnRhaW5lcihcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxuICAgIGZvcm1LZXk6IHN0cmluZyxcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nLFxuICAgIHNlZ21lbnQ6IHN0cmluZ1xuICApIHtcbiAgICAoZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlW10pLmZvckVhY2goKGNoaWxkRm9ybSwgaWR4KSA9PiB7XG4gICAgICB0aGlzLmdlbmVyYXRlVGVtcGxhdGUoY2hpbGRGb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkLCBgJHtzZWdtZW50fVsnJHtmb3JtS2V5fSddWyR7aWR4fV1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFNmVGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICBmb3JtS2V5OiBzdHJpbmcsXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIHNlZ21lbnQ6IHN0cmluZyxcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGUsIHNjaGVtYSwgZm9ybUtleSwgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSkpO1xuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5nZXRTZlRlbXBsYXRlKFxuICAgICAgYG1vZGVsWycke2Zvcm1LZXl9J11gLFxuICAgICAgYGZvcm0ke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11gLFxuICAgICAgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSkudHlwZSxcbiAgICAgIGluc3RhbmNlSWRcbiAgICApO1xuICB9XG5cbiAgYXBwZW5kVGVtcGxhdGVNb2R1bGUoXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIHRlbXBsYXRlTW9kdWxlOiBJVGVtcGxhdGVNb2R1bGUsXG4gICAgcGFyZW50U2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb25cbiAgKTogdm9pZCB7XG4gICAgdGVtcGxhdGUuY29udGVudCArPSBgPGNvbXBvc2Ugdmlldy1tb2RlbD1cIiR7dGVtcGxhdGVNb2R1bGUubW9kdWxlTmFtZX1cImA7XG4gICAgaWYgKHRlbXBsYXRlTW9kdWxlLnNjaGVtYUtleSkge1xuICAgICAgdGVtcGxhdGUuY29udGVudCArPSBgIG1vZGVsLnR3by13YXk9XCJtb2RlbFsnJHt0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXl9J11cIiBzY2hlbWEudG8tdmlldz1cInNjaGVtYWA7XG4gICAgICBzd2l0Y2ggKHRoaXMuZ2V0Rm9ybUtleVNjaGVtYSh0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXksIHBhcmVudFNjaGVtYSkudHlwZSkge1xuICAgICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IFwiLml0ZW1zXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IFwiLnByb3BlcnRpZXNcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYFsnJHt0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXl9J11cImA7XG4gICAgfVxuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gXCI+PC9jb21wb3NlPlwiO1xuICB9XG5cbiAgZ2V0U2ZUZW1wbGF0ZShcbiAgICBtb2RlbFBhdGg6IHN0cmluZywgZm9ybVBhdGg6IHN0cmluZywgc2NoZW1hVHlwZTogU2NoZW1hVHlwZSwgaW5zdGFuY2VJZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRUZW1wbGF0ZVwiLCB7IG1vZGVsUGF0aCwgZm9ybVBhdGgsIHNjaGVtYVR5cGUsIGluc3RhbmNlSWQgfSk7XG4gICAgcmV0dXJuIGA8c2YtJHtzY2hlbWFUeXBlfWAgK1xuICAgICAgYCBtb2RlbC50d28td2F5PVwiJHttb2RlbFBhdGh9XCJgICtcbiAgICAgIGAgZm9ybS50by12aWV3PVwiJHtmb3JtUGF0aH1cImAgK1xuICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXG4gICAgICBgPjwvc2YtJHtzY2hlbWFUeXBlfT5gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0Rm9ybUtleVNjaGVtYVwiLCB7IGZvcm1LZXksIHNjaGVtYSB9KTtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICAgfSBlbHNlIGlmIChzY2hlbWEudHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
