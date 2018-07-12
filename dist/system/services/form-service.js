System.register(["aurelia-framework", "../interfaces/form-override", "../resources/logger", "../interfaces/template", "./defaults-service", "../resources/wrapper"], function (exports_1, context_1) {
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
    var aurelia_framework_1, form_override_1, logger_1, template_1, defaults_service_1, wrapper_1, FormService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (form_override_1_1) {
                form_override_1 = form_override_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (template_1_1) {
                template_1 = template_1_1;
            },
            function (defaults_service_1_1) {
                defaults_service_1 = defaults_service_1_1;
            },
            function (wrapper_1_1) {
                wrapper_1 = wrapper_1_1;
            }
        ],
        execute: function () {
            FormService = /** @class */ (function () {
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
            exports_1("FormService", FormService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFhRSxxQkFDUyxlQUFnQyxFQUNoQyxTQUFvQixFQUNuQixNQUF3QjtvQkFGekIsb0JBQWUsR0FBZixlQUFlLENBQWlCO29CQUNoQyxjQUFTLEdBQVQsU0FBUyxDQUFXO29CQUNuQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtnQkFDOUIsQ0FBQztnQkFFQywwQ0FBb0IsR0FBMUIsVUFDRSxJQUFtQixFQUFFLE1BQTZCLEVBQUUsS0FBVSxFQUFFLFVBQWtCOzs7Ozs7b0NBRWxGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsVUFBVSxZQUFBLEVBQUUsQ0FBQyxDQUFDO29DQUV4RSxRQUFRLEdBQW1CLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxDQUFDO29DQUV6QyxxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBQTs7b0NBQXZFLEtBQUssR0FBRyxTQUErRCxDQUFDO29DQUV4RSxnQ0FBZ0IsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztvQ0FFM0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO29DQUUxRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztvQ0FDbkQsc0JBQU8sUUFBUSxFQUFDOzs7O2lCQUNqQjtnQkFFRCxzQ0FBZ0IsR0FBaEIsVUFDRSxJQUFt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Z0JBdEhVLFdBQVc7b0JBRHZCLDBCQUFNLENBQUMsa0NBQWUsRUFBRSw2QkFBUyxFQUFFLHlCQUFnQixDQUFDO3FEQUd6QixrQ0FBZTt3QkFDckIsNkJBQVM7d0JBQ1gseUJBQWdCO21CQUp2QixXQUFXLENBdUh2QjtnQkFBRCxrQkFBQzthQXZIRCxBQXVIQzs7UUFDRCxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgVGFza1F1ZXVlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlLCBpc092ZXJyaWRlLCBzZXRGb3JtT3ZlcnJpZGVzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHtcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICBTY2hlbWFUeXBlXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlU3RvcmUsIGlzVGVtcGxhdGVNb2R1bGUsIElUZW1wbGF0ZU1vZHVsZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RlbXBsYXRlXCI7XG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tIFwiLi9kZWZhdWx0cy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy93cmFwcGVyXCI7XG5cbkBpbmplY3QoRGVmYXVsdHNTZXJ2aWNlLCBUYXNrUXVldWUsIFNjaGVtYUZvcm1Mb2dnZXIpXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGVmYXVsdHNTZXJ2aWNlOiBEZWZhdWx0c1NlcnZpY2UsXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyXG4gICkgeyB9XG5cbiAgYXN5bmMgZ2V0Rm9ybVRlbXBsYXRlQXN5bmMoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSwgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIG1vZGVsOiBhbnksIGluc3RhbmNlSWQ6IHN0cmluZ1xuICApOiBQcm9taXNlPElUZW1wbGF0ZVN0b3JlPiB7XG4gICAgdGhpcy5sb2dnZXIud2FybihcImdldEZvcm1UZW1wbGF0ZUFzeW5jXCIsIHsgZm9ybSwgc2NoZW1hLCBtb2RlbCwgaW5zdGFuY2VJZCB9KTtcblxuICAgIGNvbnN0IHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSA9IHsgY29udGVudDogXCJcIiB9O1xuXG4gICAgbW9kZWwgPSBhd2FpdCB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hLCBtb2RlbCk7XG5cbiAgICBzZXRGb3JtT3ZlcnJpZGVzKGZvcm0sIG51bGwsIG51bGwsIHNjaGVtYSk7XG5cbiAgICB0aGlzLmdlbmVyYXRlVGVtcGxhdGUoZm9ybSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCk7XG5cbiAgICB0aGlzLmxvZ2dlci53YXJuKFwidGVtcGxhdGUgY3JlYXRlZFwiLCB7IHRlbXBsYXRlIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGdlbmVyYXRlVGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nLFxuICAgIHNlZ21lbnQ6IHN0cmluZyA9IFwiXCJcbiAgKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInRyYW5zZm9ybVRlbXBsYXRlXCIsIHsgZm9ybSwgc2NoZW1hIH0pO1xuICAgIGZvciAoY29uc3QgZm9ybUtleSBpbiBmb3JtKSB7XG4gICAgICBpZiAoaXNPdmVycmlkZShmb3JtS2V5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgV3JhcHBlcihmb3JtS2V5KTtcbiAgICAgIHdyYXBwZXIuYXBwbHlTdGFydCh0ZW1wbGF0ZSk7XG4gICAgICBpZiAoV3JhcHBlci5pc0NvbnRhaW5lcihmb3JtS2V5KSkge1xuICAgICAgICB0aGlzLmFwcGVuZENvbnRhaW5lcihmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkLCBzZWdtZW50KTtcbiAgICAgIH0gZWxzZSBpZiAoaXNUZW1wbGF0ZU1vZHVsZShmb3JtS2V5KSkge1xuICAgICAgICB0aGlzLmFwcGVuZFRlbXBsYXRlTW9kdWxlKHRlbXBsYXRlLCBmb3JtLl90ZW1wbGF0ZSwgc2NoZW1hKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXBwZW5kU2ZUZW1wbGF0ZShmb3JtLCBmb3JtS2V5LCBzY2hlbWEsIHRlbXBsYXRlLCBzZWdtZW50LCBpbnN0YW5jZUlkKTtcbiAgICAgIH1cbiAgICAgIHdyYXBwZXIuYXBwbHlFbmQodGVtcGxhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwZW5kQ29udGFpbmVyKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXG4gICAgZm9ybUtleTogc3RyaW5nLFxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmcsXG4gICAgc2VnbWVudDogc3RyaW5nXG4gICkge1xuICAgIChmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGVbXSkuZm9yRWFjaCgoY2hpbGRGb3JtLCBpZHgpID0+IHtcbiAgICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShjaGlsZEZvcm0sIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIGAke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11bJHtpZHh9XWApO1xuICAgIH0pO1xuICB9XG5cbiAgYXBwZW5kU2ZUZW1wbGF0ZShcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxuICAgIGZvcm1LZXk6IHN0cmluZyxcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXG4gICAgc2VnbWVudDogc3RyaW5nLFxuICAgIGluc3RhbmNlSWQ6IHN0cmluZ1xuICApIHtcbiAgICBzZXRGb3JtT3ZlcnJpZGVzKGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZSwgc2NoZW1hLCBmb3JtS2V5LCB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKSk7XG4gICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLmdldFNmVGVtcGxhdGUoXG4gICAgICBgbW9kZWxbJyR7Zm9ybUtleX0nXWAsXG4gICAgICBgZm9ybSR7c2VnbWVudH1bJyR7Zm9ybUtleX0nXWAsXG4gICAgICB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKS50eXBlLFxuICAgICAgaW5zdGFuY2VJZFxuICAgICk7XG4gIH1cblxuICBhcHBlbmRUZW1wbGF0ZU1vZHVsZShcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXG4gICAgdGVtcGxhdGVNb2R1bGU6IElUZW1wbGF0ZU1vZHVsZSxcbiAgICBwYXJlbnRTY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvblxuICApOiB2b2lkIHtcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGA8JHt0ZW1wbGF0ZU1vZHVsZS5lbGVtZW50TmFtZX0gYDtcbiAgICBpZiAodGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5KSB7XG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGAgbW9kZWwudHdvLXdheT1cIm1vZGVsWycke3RlbXBsYXRlTW9kdWxlLnNjaGVtYUtleX0nXVwiIHNjaGVtYS50by12aWV3PVwic2NoZW1hYDtcbiAgICAgIHN3aXRjaCAodGhpcy5nZXRGb3JtS2V5U2NoZW1hKHRlbXBsYXRlTW9kdWxlLnNjaGVtYUtleSwgcGFyZW50U2NoZW1hKS50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJhcnJheVwiOlxuICAgICAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gXCIuaXRlbXNcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gXCIucHJvcGVydGllc1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGVtcGxhdGUuY29udGVudCArPSBgWycke3RlbXBsYXRlTW9kdWxlLnNjaGVtYUtleX0nXVwiYDtcbiAgICB9XG4gICAgdGVtcGxhdGUuY29udGVudCArPSBgPjwvJHt0ZW1wbGF0ZU1vZHVsZS5lbGVtZW50TmFtZX0+YDtcbiAgfVxuXG4gIGdldFNmVGVtcGxhdGUoXG4gICAgbW9kZWxQYXRoOiBzdHJpbmcsIGZvcm1QYXRoOiBzdHJpbmcsIHNjaGVtYVR5cGU6IFNjaGVtYVR5cGUsIGluc3RhbmNlSWQ6IHN0cmluZ1xuICApIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0VGVtcGxhdGVcIiwgeyBtb2RlbFBhdGgsIGZvcm1QYXRoLCBzY2hlbWFUeXBlLCBpbnN0YW5jZUlkIH0pO1xuICAgIHJldHVybiBgPHNmLSR7c2NoZW1hVHlwZX1gICtcbiAgICAgIGAgbW9kZWwudHdvLXdheT1cIiR7bW9kZWxQYXRofVwiYCArXG4gICAgICBgIGZvcm0udG8tdmlldz1cIiR7Zm9ybVBhdGh9XCJgICtcbiAgICAgIGAgZm9ybS1pbnN0YW5jZT1cIiR7aW5zdGFuY2VJZH1cImAgK1xuICAgICAgYD48L3NmLSR7c2NoZW1hVHlwZX0+YDtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEZvcm1LZXlTY2hlbWFcIiwgeyBmb3JtS2V5LCBzY2hlbWEgfSk7XG4gICAgaWYgKHNjaGVtYS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLnByb3BlcnRpZXNbZm9ybUtleV0gYXMgSUpzb25TY2hlbWFEZWZpbml0aW9uO1xuICAgIH0gZWxzZSBpZiAoc2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgcmV0dXJuIHNjaGVtYS5pdGVtc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
