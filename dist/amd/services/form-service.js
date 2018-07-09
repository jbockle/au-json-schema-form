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
define(["require", "exports", "aurelia-framework", "../interfaces/form-override", "../resources/logger", "./defaults-service", "../resources/wrapper"], function (require, exports, aurelia_framework_1, form_override_1, logger_1, defaults_service_1, wrapper_1) {
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWFBO1FBQ0UscUJBQ1MsZUFBZ0MsRUFDaEMsU0FBb0IsRUFDbkIsTUFBd0I7WUFGekIsb0JBQWUsR0FBZixlQUFlLENBQWlCO1lBQ2hDLGNBQVMsR0FBVCxTQUFTLENBQVc7WUFDbkIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDOUIsQ0FBQztRQUVDLDBDQUFvQixHQUExQixVQUNFLElBQW1CLEVBQUUsTUFBNkIsRUFBRSxLQUFVLEVBQUUsVUFBa0I7Ozs7b0JBRWxGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFDO29CQUU1RCxRQUFRLEdBQWMsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLENBQUM7b0JBRTVDLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFFbEUsZ0NBQWdCLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBRTNDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztvQkFFM0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDLENBQUM7b0JBQ25ELHNCQUFPLFFBQVEsRUFBQzs7O1NBQ2pCO1FBRUQsdUNBQWlCLEdBQWpCLFVBQ0UsSUFBbUIsRUFBRSxNQUE2QixFQUFFLFFBQW1CLEVBQUUsVUFBa0IsRUFBRSxPQUFvQjtZQURuSCxpQkFtQ0M7WUFsQzhGLHdCQUFBLEVBQUEsWUFBb0I7WUFFakgsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7b0NBQzdDLE9BQU87Z0JBQ2hCLElBQUksMEJBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRTs7aUJBRXhCO2dCQUNELElBQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxpQkFBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDL0IsSUFBSSxDQUFDLE9BQU8sQ0FBcUIsQ0FBQyxPQUFPLENBQUMsVUFBQyxTQUFTLEVBQUUsR0FBRzt3QkFDeEQsS0FBSSxDQUFDLGlCQUFpQixDQUNwQixTQUFTLEVBQ1QsTUFBTSxFQUNOLFFBQVEsRUFDUixVQUFVLEVBQ1AsT0FBTyxVQUFLLE9BQU8sV0FBTSxHQUFHLE1BQUcsQ0FDbkMsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxnQ0FBZ0IsQ0FDZCxJQUFJLENBQUMsT0FBTyxDQUFrQixFQUM5QixNQUFNLEVBQ04sT0FBTyxFQUNQLE9BQUssZ0JBQWdCLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUN2QyxDQUFDO29CQUNGLFFBQVEsQ0FBQyxPQUFPLElBQUksT0FBSyxXQUFXLENBQ2xDLFlBQVUsT0FBTyxPQUFJLEVBQ3JCLFNBQU8sT0FBTyxVQUFLLE9BQU8sT0FBSSxFQUM5QixPQUFLLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQzNDLFVBQVUsQ0FBQyxDQUFDO2lCQUNmO2dCQUNELE9BQU8sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDN0IsQ0FBQzs7WUE5QkQsS0FBSyxJQUFNLE9BQU8sSUFBSSxJQUFJO3dCQUFmLE9BQU87YUE4QmpCO1FBQ0gsQ0FBQztRQUVELGlDQUFXLEdBQVgsVUFDRSxTQUFpQixFQUFFLFFBQWdCLEVBQUUsVUFBc0IsRUFBRSxVQUFrQjtZQUUvRSxPQUFPLFNBQU8sVUFBWTtpQkFDeEIsc0JBQW1CLFNBQVMsT0FBRyxDQUFBO2lCQUMvQixxQkFBa0IsUUFBUSxRQUFJLENBQUE7aUJBQzlCLHNCQUFtQixVQUFVLE9BQUcsQ0FBQTtpQkFDaEMsV0FBUyxVQUFVLE1BQUcsQ0FBQSxDQUFDO1FBQzNCLENBQUM7UUFFTyxzQ0FBZ0IsR0FBeEIsVUFBeUIsT0FBZSxFQUFFLE1BQTZCO1lBQ3JFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQzFELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7Z0JBQzVCLE9BQU8sTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQTBCLENBQUM7YUFDNUQ7aUJBQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBMEIsQ0FBQzthQUN2RDtRQUNILENBQUM7UUE5RVUsV0FBVztZQUR2QiwwQkFBTSxDQUFDLGtDQUFlLEVBQUUsNkJBQVMsRUFBRSx5QkFBZ0IsQ0FBQzs2Q0FHekIsa0NBQWU7Z0JBQ3JCLDZCQUFTO2dCQUNYLHlCQUFnQjtXQUp2QixXQUFXLENBK0V2QjtRQUFELGtCQUFDO0tBL0VELEFBK0VDLElBQUE7SUEvRVksa0NBQVciLCJmaWxlIjoic2VydmljZXMvZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBUYXNrUXVldWUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUsIGlzT3ZlcnJpZGUsIHNldEZvcm1PdmVycmlkZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQge1xuICBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcbiAgU2NoZW1hVHlwZVxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElUZW1wbGF0ZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RlbXBsYXRlXCI7XG5pbXBvcnQgeyBEZWZhdWx0c1NlcnZpY2UgfSBmcm9tIFwiLi9kZWZhdWx0cy1zZXJ2aWNlXCI7XG5pbXBvcnQgeyBXcmFwcGVyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy93cmFwcGVyXCI7XG5cbkBpbmplY3QoRGVmYXVsdHNTZXJ2aWNlLCBUYXNrUXVldWUsIFNjaGVtYUZvcm1Mb2dnZXIpXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGVmYXVsdHNTZXJ2aWNlOiBEZWZhdWx0c1NlcnZpY2UsXG4gICAgcHVibGljIHRhc2tRdWV1ZTogVGFza1F1ZXVlLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyXG4gICkgeyB9XG5cbiAgYXN5bmMgZ2V0Rm9ybVRlbXBsYXRlQXN5bmMoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSwgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIG1vZGVsOiBhbnksIGluc3RhbmNlSWQ6IHN0cmluZ1xuICApOiBQcm9taXNlPElUZW1wbGF0ZT4ge1xuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJnZXRGb3JtVGVtcGxhdGVBc3luY1wiLCB7IGZvcm0sIHNjaGVtYSwgbW9kZWwgfSk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZTogSVRlbXBsYXRlID0geyBjb250ZW50OiBcIlwiIH07XG5cbiAgICBtb2RlbCA9IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyhzY2hlbWEsIG1vZGVsKTtcblxuICAgIHNldEZvcm1PdmVycmlkZXMoZm9ybSwgbnVsbCwgbnVsbCwgc2NoZW1hKTtcblxuICAgIHRoaXMudHJhbnNmb3JtVGVtcGxhdGUoZm9ybSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCk7XG5cbiAgICB0aGlzLmxvZ2dlci53YXJuKFwidGVtcGxhdGUgY3JlYXRlZFwiLCB7IHRlbXBsYXRlIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHRyYW5zZm9ybVRlbXBsYXRlKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCB0ZW1wbGF0ZTogSVRlbXBsYXRlLCBpbnN0YW5jZUlkOiBzdHJpbmcsIHNlZ21lbnQ6IHN0cmluZyA9IFwiXCJcbiAgKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInRyYW5zZm9ybVRlbXBsYXRlXCIsIHsgZm9ybSwgc2NoZW1hIH0pO1xuICAgIGZvciAoY29uc3QgZm9ybUtleSBpbiBmb3JtKSB7XG4gICAgICBpZiAoaXNPdmVycmlkZShmb3JtS2V5KSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHdyYXBwZXIgPSBuZXcgV3JhcHBlcihmb3JtS2V5KTtcbiAgICAgIHdyYXBwZXIuYXBwbHlTdGFydCh0ZW1wbGF0ZSk7XG4gICAgICBpZiAoV3JhcHBlci5pc0NvbnRhaW5lcihmb3JtS2V5KSkge1xuICAgICAgICAoZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlW10pLmZvckVhY2goKGNoaWxkRm9ybSwgaWR4KSA9PiB7XG4gICAgICAgICAgdGhpcy50cmFuc2Zvcm1UZW1wbGF0ZShcbiAgICAgICAgICAgIGNoaWxkRm9ybSxcbiAgICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICAgIHRlbXBsYXRlLFxuICAgICAgICAgICAgaW5zdGFuY2VJZCxcbiAgICAgICAgICAgIGAke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11bJHtpZHh9XWBcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZvcm1PdmVycmlkZXMoXG4gICAgICAgICAgZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlLFxuICAgICAgICAgIHNjaGVtYSxcbiAgICAgICAgICBmb3JtS2V5LFxuICAgICAgICAgIHRoaXMuZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5LCBzY2hlbWEpXG4gICAgICAgICk7XG4gICAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5nZXRUZW1wbGF0ZShcbiAgICAgICAgICBgbW9kZWxbJyR7Zm9ybUtleX0nXWAsXG4gICAgICAgICAgYGZvcm0ke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11gLFxuICAgICAgICAgIHRoaXMuZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5LCBzY2hlbWEpLnR5cGUsXG4gICAgICAgICAgaW5zdGFuY2VJZCk7XG4gICAgICB9XG4gICAgICB3cmFwcGVyLmFwcGx5RW5kKHRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICBnZXRUZW1wbGF0ZShcbiAgICBtb2RlbFBhdGg6IHN0cmluZywgZm9ybVBhdGg6IHN0cmluZywgc2NoZW1hVHlwZTogU2NoZW1hVHlwZSwgaW5zdGFuY2VJZDogc3RyaW5nXG4gICkge1xuICAgIHJldHVybiBgPHNmLSR7c2NoZW1hVHlwZX1gICtcbiAgICAgIGAgbW9kZWwudHdvLXdheT1cIiR7bW9kZWxQYXRofVwiYCArXG4gICAgICBgIGZvcm0udG8tdmlldz1cIiR7Zm9ybVBhdGh9XCI+YCArXG4gICAgICBgIGZvcm0taW5zdGFuY2U9XCIke2luc3RhbmNlSWR9XCJgICtcbiAgICAgIGA+PC9zZi0ke3NjaGVtYVR5cGV9PmA7XG4gIH1cblxuICBwcml2YXRlIGdldEZvcm1LZXlTY2hlbWEoZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRGb3JtS2V5U2NoZW1hXCIsIHsgZm9ybUtleSwgc2NoZW1hIH0pO1xuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcmV0dXJuIHNjaGVtYS5wcm9wZXJ0aWVzW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgICB9IGVsc2UgaWYgKHNjaGVtYS50eXBlID09PSBcImFycmF5XCIpIHtcbiAgICAgIHJldHVybiBzY2hlbWEuaXRlbXNbZm9ybUtleV0gYXMgSUpzb25TY2hlbWFEZWZpbml0aW9uO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
