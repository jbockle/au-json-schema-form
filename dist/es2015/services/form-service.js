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
import { inject, TaskQueue } from "aurelia-framework";
import { isOverride, setFormOverrides } from "../interfaces/form-override";
import { SchemaFormLogger } from "../resources/logger";
import { isTemplateModule } from "../interfaces/template";
import { DefaultsService } from "./defaults-service";
import { Wrapper } from "../resources/wrapper";
let FormService = class FormService {
    constructor(defaultsService, taskQueue, logger) {
        this.defaultsService = defaultsService;
        this.taskQueue = taskQueue;
        this.logger = logger;
    }
    getFormTemplateAsync(form, schema, model, instanceId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.warn("getFormTemplateAsync", { form, schema, model, instanceId });
            const template = { content: "" };
            model = yield this.defaultsService.getSchemaDefaultAsync(schema, model);
            setFormOverrides(form, null, null, schema);
            this.generateTemplate(form, schema, template, instanceId);
            this.logger.warn("template created", { template });
            return template;
        });
    }
    generateTemplate(form, schema, template, instanceId, segment = "") {
        this.logger.info("transformTemplate", { form, schema });
        for (const formKey in form) {
            if (isOverride(formKey)) {
                continue;
            }
            const wrapper = new Wrapper(formKey);
            wrapper.applyStart(template);
            if (Wrapper.isContainer(formKey)) {
                this.appendContainer(form, formKey, schema, template, instanceId, segment);
            }
            else if (isTemplateModule(formKey)) {
                this.appendTemplateModule(template, form._template, schema);
            }
            else {
                this.appendSfTemplate(form, formKey, schema, template, segment, instanceId);
            }
            wrapper.applyEnd(template);
        }
    }
    appendContainer(form, formKey, schema, template, instanceId, segment) {
        form[formKey].forEach((childForm, idx) => {
            this.generateTemplate(childForm, schema, template, instanceId, `${segment}['${formKey}'][${idx}]`);
        });
    }
    appendSfTemplate(form, formKey, schema, template, segment, instanceId) {
        setFormOverrides(form[formKey], schema, formKey, this.getFormKeySchema(formKey, schema));
        template.content += this.getSfTemplate(`model['${formKey}']`, `form${segment}['${formKey}']`, this.getFormKeySchema(formKey, schema).type, instanceId);
    }
    appendTemplateModule(template, templateModule, parentSchema) {
        template.content += `<${templateModule.elementName} `;
        if (templateModule.schemaKey) {
            template.content += ` model.two-way="model['${templateModule.schemaKey}']" schema.to-view="schema`;
            switch (this.getFormKeySchema(templateModule.schemaKey, parentSchema).type) {
                case "array":
                    template.content += ".items";
                    break;
                case "object":
                    template.content += ".properties";
                    break;
            }
            template.content += `['${templateModule.schemaKey}']"`;
        }
        template.content += `></${templateModule.elementName}>`;
    }
    getSfTemplate(modelPath, formPath, schemaType, instanceId) {
        this.logger.info("getTemplate", { modelPath, formPath, schemaType, instanceId });
        return `<sf-${schemaType}` +
            ` model.two-way="${modelPath}"` +
            ` form.to-view="${formPath}"` +
            ` form-instance="${instanceId}"` +
            `></sf-${schemaType}>`;
    }
    getFormKeySchema(formKey, schema) {
        this.logger.info("getFormKeySchema", { formKey, schema });
        if (schema.type === "object") {
            return schema.properties[formKey];
        }
        else if (schema.type === "array") {
            return schema.items[formKey];
        }
    }
};
FormService = __decorate([
    inject(DefaultsService, TaskQueue, SchemaFormLogger),
    __metadata("design:paramtypes", [DefaultsService,
        TaskQueue,
        SchemaFormLogger])
], FormService);
export { FormService };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUMsT0FBTyxDQUEwQixDQUFDO1NBQ3ZEO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF2SFksV0FBVztJQUR2QixNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztxQ0FHekIsZUFBZTtRQUNyQixTQUFTO1FBQ1gsZ0JBQWdCO0dBSnZCLFdBQVcsQ0F1SHZCO1NBdkhZLFdBQVciLCJmaWxlIjoic2VydmljZXMvZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBUYXNrUXVldWUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUsIGlzT3ZlcnJpZGUsIHNldEZvcm1PdmVycmlkZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQge1xuICBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gIFNjaGVtYVR5cGVcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVTdG9yZSwgaXNUZW1wbGF0ZU1vZHVsZSwgSVRlbXBsYXRlTW9kdWxlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGVtcGxhdGVcIjtcbmltcG9ydCB7IERlZmF1bHRzU2VydmljZSB9IGZyb20gXCIuL2RlZmF1bHRzLXNlcnZpY2VcIjtcbmltcG9ydCB7IFdyYXBwZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL3dyYXBwZXJcIjtcblxuQGluamVjdChEZWZhdWx0c1NlcnZpY2UsIFRhc2tRdWV1ZSwgU2NoZW1hRm9ybUxvZ2dlcilcbmV4cG9ydCBjbGFzcyBGb3JtU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkZWZhdWx0c1NlcnZpY2U6IERlZmF1bHRzU2VydmljZSxcbiAgICBwdWJsaWMgdGFza1F1ZXVlOiBUYXNrUXVldWUsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcbiAgKSB7IH1cblxuICBhc3luYyBnZXRGb3JtVGVtcGxhdGVBc3luYyhcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgbW9kZWw6IGFueSwgaW5zdGFuY2VJZDogc3RyaW5nXG4gICk6IFByb21pc2U8SVRlbXBsYXRlU3RvcmU+IHtcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwiZ2V0Rm9ybVRlbXBsYXRlQXN5bmNcIiwgeyBmb3JtLCBzY2hlbWEsIG1vZGVsLCBpbnN0YW5jZUlkIH0pO1xuXG4gICAgY29uc3QgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlID0geyBjb250ZW50OiBcIlwiIH07XG5cbiAgICBtb2RlbCA9IGF3YWl0IHRoaXMuZGVmYXVsdHNTZXJ2aWNlLmdldFNjaGVtYURlZmF1bHRBc3luYyhzY2hlbWEsIG1vZGVsKTtcblxuICAgIHNldEZvcm1PdmVycmlkZXMoZm9ybSwgbnVsbCwgbnVsbCwgc2NoZW1hKTtcblxuICAgIHRoaXMuZ2VuZXJhdGVUZW1wbGF0ZShmb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkKTtcblxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJ0ZW1wbGF0ZSBjcmVhdGVkXCIsIHsgdGVtcGxhdGUgfSk7XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgZ2VuZXJhdGVUZW1wbGF0ZShcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmcsXG4gICAgc2VnbWVudDogc3RyaW5nID0gXCJcIlxuICApIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwidHJhbnNmb3JtVGVtcGxhdGVcIiwgeyBmb3JtLCBzY2hlbWEgfSk7XG4gICAgZm9yIChjb25zdCBmb3JtS2V5IGluIGZvcm0pIHtcbiAgICAgIGlmIChpc092ZXJyaWRlKGZvcm1LZXkpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgY29uc3Qgd3JhcHBlciA9IG5ldyBXcmFwcGVyKGZvcm1LZXkpO1xuICAgICAgd3JhcHBlci5hcHBseVN0YXJ0KHRlbXBsYXRlKTtcbiAgICAgIGlmIChXcmFwcGVyLmlzQ29udGFpbmVyKGZvcm1LZXkpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ29udGFpbmVyKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQsIHNlZ21lbnQpO1xuICAgICAgfSBlbHNlIGlmIChpc1RlbXBsYXRlTW9kdWxlKGZvcm1LZXkpKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kVGVtcGxhdGVNb2R1bGUodGVtcGxhdGUsIGZvcm0uX3RlbXBsYXRlLCBzY2hlbWEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hcHBlbmRTZlRlbXBsYXRlKGZvcm0sIGZvcm1LZXksIHNjaGVtYSwgdGVtcGxhdGUsIHNlZ21lbnQsIGluc3RhbmNlSWQpO1xuICAgICAgfVxuICAgICAgd3JhcHBlci5hcHBseUVuZCh0ZW1wbGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhcHBlbmRDb250YWluZXIoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICBmb3JtS2V5OiBzdHJpbmcsXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIGluc3RhbmNlSWQ6IHN0cmluZyxcbiAgICBzZWdtZW50OiBzdHJpbmdcbiAgKSB7XG4gICAgKGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZVtdKS5mb3JFYWNoKChjaGlsZEZvcm0sIGlkeCkgPT4ge1xuICAgICAgdGhpcy5nZW5lcmF0ZVRlbXBsYXRlKGNoaWxkRm9ybSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCwgYCR7c2VnbWVudH1bJyR7Zm9ybUtleX0nXVske2lkeH1dYCk7XG4gICAgfSk7XG4gIH1cblxuICBhcHBlbmRTZlRlbXBsYXRlKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXG4gICAgZm9ybUtleTogc3RyaW5nLFxuICAgIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcbiAgICBzZWdtZW50OiBzdHJpbmcsXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nXG4gICkge1xuICAgIHNldEZvcm1PdmVycmlkZXMoZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlLCBzY2hlbWEsIGZvcm1LZXksIHRoaXMuZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5LCBzY2hlbWEpKTtcbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuZ2V0U2ZUZW1wbGF0ZShcbiAgICAgIGBtb2RlbFsnJHtmb3JtS2V5fSddYCxcbiAgICAgIGBmb3JtJHtzZWdtZW50fVsnJHtmb3JtS2V5fSddYCxcbiAgICAgIHRoaXMuZ2V0Rm9ybUtleVNjaGVtYShmb3JtS2V5LCBzY2hlbWEpLnR5cGUsXG4gICAgICBpbnN0YW5jZUlkXG4gICAgKTtcbiAgfVxuXG4gIGFwcGVuZFRlbXBsYXRlTW9kdWxlKFxuICAgIHRlbXBsYXRlOiBJVGVtcGxhdGVTdG9yZSxcbiAgICB0ZW1wbGF0ZU1vZHVsZTogSVRlbXBsYXRlTW9kdWxlLFxuICAgIHBhcmVudFNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uXG4gICk6IHZvaWQge1xuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYDwke3RlbXBsYXRlTW9kdWxlLmVsZW1lbnROYW1lfSBgO1xuICAgIGlmICh0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXkpIHtcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYCBtb2RlbC50d28td2F5PVwibW9kZWxbJyR7dGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5fSddXCIgc2NoZW1hLnRvLXZpZXc9XCJzY2hlbWFgO1xuICAgICAgc3dpdGNoICh0aGlzLmdldEZvcm1LZXlTY2hlbWEodGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5LCBwYXJlbnRTY2hlbWEpLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcImFycmF5XCI6XG4gICAgICAgICAgdGVtcGxhdGUuY29udGVudCArPSBcIi5pdGVtc1wiO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwib2JqZWN0XCI6XG4gICAgICAgICAgdGVtcGxhdGUuY29udGVudCArPSBcIi5wcm9wZXJ0aWVzXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGBbJyR7dGVtcGxhdGVNb2R1bGUuc2NoZW1hS2V5fSddXCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IGA+PC8ke3RlbXBsYXRlTW9kdWxlLmVsZW1lbnROYW1lfT5gO1xuICB9XG5cbiAgZ2V0U2ZUZW1wbGF0ZShcbiAgICBtb2RlbFBhdGg6IHN0cmluZywgZm9ybVBhdGg6IHN0cmluZywgc2NoZW1hVHlwZTogU2NoZW1hVHlwZSwgaW5zdGFuY2VJZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRUZW1wbGF0ZVwiLCB7IG1vZGVsUGF0aCwgZm9ybVBhdGgsIHNjaGVtYVR5cGUsIGluc3RhbmNlSWQgfSk7XG4gICAgcmV0dXJuIGA8c2YtJHtzY2hlbWFUeXBlfWAgK1xuICAgICAgYCBtb2RlbC50d28td2F5PVwiJHttb2RlbFBhdGh9XCJgICtcbiAgICAgIGAgZm9ybS50by12aWV3PVwiJHtmb3JtUGF0aH1cImAgK1xuICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXG4gICAgICBgPjwvc2YtJHtzY2hlbWFUeXBlfT5gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0Rm9ybUtleVNjaGVtYVwiLCB7IGZvcm1LZXksIHNjaGVtYSB9KTtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICAgfSBlbHNlIGlmIChzY2hlbWEudHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
