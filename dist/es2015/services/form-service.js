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
        template.content += `<compose view-model="${templateModule.moduleName}"`;
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
        template.content += "></compose>";
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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O1NBQ3ZEO0lBQ0gsQ0FBQztDQUNGLENBQUE7QUF2SFksV0FBVztJQUR2QixNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsRUFBRSxnQkFBZ0IsQ0FBQztxQ0FHekIsZUFBZTtRQUNyQixTQUFTO1FBQ1gsZ0JBQWdCO0dBSnZCLFdBQVcsQ0F1SHZCO1NBdkhZLFdBQVciLCJmaWxlIjoic2VydmljZXMvZm9ybS1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0LCBUYXNrUXVldWUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUsIGlzT3ZlcnJpZGUsIHNldEZvcm1PdmVycmlkZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQge1xuICBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcbiAgU2NoZW1hVHlwZVxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElUZW1wbGF0ZVN0b3JlLCBpc1RlbXBsYXRlTW9kdWxlLCBJVGVtcGxhdGVNb2R1bGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZVwiO1xuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSBcIi4vZGVmYXVsdHMtc2VydmljZVwiO1xuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvd3JhcHBlclwiO1xuXG5AaW5qZWN0KERlZmF1bHRzU2VydmljZSwgVGFza1F1ZXVlLCBTY2hlbWFGb3JtTG9nZ2VyKVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxuICApIHsgfVxuXG4gIGFzeW5jIGdldEZvcm1UZW1wbGF0ZUFzeW5jKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCBtb2RlbDogYW55LCBpbnN0YW5jZUlkOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxJVGVtcGxhdGVTdG9yZT4ge1xuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJnZXRGb3JtVGVtcGxhdGVBc3luY1wiLCB7IGZvcm0sIHNjaGVtYSwgbW9kZWwsIGluc3RhbmNlSWQgfSk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUgPSB7IGNvbnRlbnQ6IFwiXCIgfTtcblxuICAgIG1vZGVsID0gYXdhaXQgdGhpcy5kZWZhdWx0c1NlcnZpY2UuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYSwgbW9kZWwpO1xuXG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtLCBudWxsLCBudWxsLCBzY2hlbWEpO1xuXG4gICAgdGhpcy5nZW5lcmF0ZVRlbXBsYXRlKGZvcm0sIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQpO1xuXG4gICAgdGhpcy5sb2dnZXIud2FybihcInRlbXBsYXRlIGNyZWF0ZWRcIiwgeyB0ZW1wbGF0ZSB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBnZW5lcmF0ZVRlbXBsYXRlKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIGluc3RhbmNlSWQ6IHN0cmluZyxcbiAgICBzZWdtZW50OiBzdHJpbmcgPSBcIlwiXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJ0cmFuc2Zvcm1UZW1wbGF0ZVwiLCB7IGZvcm0sIHNjaGVtYSB9KTtcbiAgICBmb3IgKGNvbnN0IGZvcm1LZXkgaW4gZm9ybSkge1xuICAgICAgaWYgKGlzT3ZlcnJpZGUoZm9ybUtleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCB3cmFwcGVyID0gbmV3IFdyYXBwZXIoZm9ybUtleSk7XG4gICAgICB3cmFwcGVyLmFwcGx5U3RhcnQodGVtcGxhdGUpO1xuICAgICAgaWYgKFdyYXBwZXIuaXNDb250YWluZXIoZm9ybUtleSkpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRDb250YWluZXIoZm9ybSwgZm9ybUtleSwgc2NoZW1hLCB0ZW1wbGF0ZSwgaW5zdGFuY2VJZCwgc2VnbWVudCk7XG4gICAgICB9IGVsc2UgaWYgKGlzVGVtcGxhdGVNb2R1bGUoZm9ybUtleSkpIHtcbiAgICAgICAgdGhpcy5hcHBlbmRUZW1wbGF0ZU1vZHVsZSh0ZW1wbGF0ZSwgZm9ybS5fdGVtcGxhdGUsIHNjaGVtYSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFwcGVuZFNmVGVtcGxhdGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hLCB0ZW1wbGF0ZSwgc2VnbWVudCwgaW5zdGFuY2VJZCk7XG4gICAgICB9XG4gICAgICB3cmFwcGVyLmFwcGx5RW5kKHRlbXBsYXRlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGVuZENvbnRhaW5lcihcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLFxuICAgIGZvcm1LZXk6IHN0cmluZyxcbiAgICBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgICB0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUsXG4gICAgaW5zdGFuY2VJZDogc3RyaW5nLFxuICAgIHNlZ21lbnQ6IHN0cmluZ1xuICApIHtcbiAgICAoZm9ybVtmb3JtS2V5XSBhcyBJRm9ybU92ZXJyaWRlW10pLmZvckVhY2goKGNoaWxkRm9ybSwgaWR4KSA9PiB7XG4gICAgICB0aGlzLmdlbmVyYXRlVGVtcGxhdGUoY2hpbGRGb3JtLCBzY2hlbWEsIHRlbXBsYXRlLCBpbnN0YW5jZUlkLCBgJHtzZWdtZW50fVsnJHtmb3JtS2V5fSddWyR7aWR4fV1gKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFwcGVuZFNmVGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm1PdmVycmlkZSxcbiAgICBmb3JtS2V5OiBzdHJpbmcsXG4gICAgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIHNlZ21lbnQ6IHN0cmluZyxcbiAgICBpbnN0YW5jZUlkOiBzdHJpbmdcbiAgKSB7XG4gICAgc2V0Rm9ybU92ZXJyaWRlcyhmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGUsIHNjaGVtYSwgZm9ybUtleSwgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSkpO1xuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5nZXRTZlRlbXBsYXRlKFxuICAgICAgYG1vZGVsWycke2Zvcm1LZXl9J11gLFxuICAgICAgYGZvcm0ke3NlZ21lbnR9Wycke2Zvcm1LZXl9J11gLFxuICAgICAgdGhpcy5nZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXksIHNjaGVtYSkudHlwZSxcbiAgICAgIGluc3RhbmNlSWRcbiAgICApO1xuICB9XG5cbiAgYXBwZW5kVGVtcGxhdGVNb2R1bGUoXG4gICAgdGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlLFxuICAgIHRlbXBsYXRlTW9kdWxlOiBJVGVtcGxhdGVNb2R1bGUsXG4gICAgcGFyZW50U2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb25cbiAgKTogdm9pZCB7XG4gICAgdGVtcGxhdGUuY29udGVudCArPSBgPGNvbXBvc2Ugdmlldy1tb2RlbD1cIiR7dGVtcGxhdGVNb2R1bGUubW9kdWxlTmFtZX1cImA7XG4gICAgaWYgKHRlbXBsYXRlTW9kdWxlLnNjaGVtYUtleSkge1xuICAgICAgdGVtcGxhdGUuY29udGVudCArPSBgIG1vZGVsLnR3by13YXk9XCJtb2RlbFsnJHt0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXl9J11cIiBzY2hlbWEudG8tdmlldz1cInNjaGVtYWA7XG4gICAgICBzd2l0Y2ggKHRoaXMuZ2V0Rm9ybUtleVNjaGVtYSh0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXksIHBhcmVudFNjaGVtYSkudHlwZSkge1xuICAgICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IFwiLml0ZW1zXCI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IFwiLnByb3BlcnRpZXNcIjtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gYFsnJHt0ZW1wbGF0ZU1vZHVsZS5zY2hlbWFLZXl9J11cImA7XG4gICAgfVxuICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gXCI+PC9jb21wb3NlPlwiO1xuICB9XG5cbiAgZ2V0U2ZUZW1wbGF0ZShcbiAgICBtb2RlbFBhdGg6IHN0cmluZywgZm9ybVBhdGg6IHN0cmluZywgc2NoZW1hVHlwZTogU2NoZW1hVHlwZSwgaW5zdGFuY2VJZDogc3RyaW5nXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRUZW1wbGF0ZVwiLCB7IG1vZGVsUGF0aCwgZm9ybVBhdGgsIHNjaGVtYVR5cGUsIGluc3RhbmNlSWQgfSk7XG4gICAgcmV0dXJuIGA8c2YtJHtzY2hlbWFUeXBlfWAgK1xuICAgICAgYCBtb2RlbC50d28td2F5PVwiJHttb2RlbFBhdGh9XCJgICtcbiAgICAgIGAgZm9ybS50by12aWV3PVwiJHtmb3JtUGF0aH1cImAgK1xuICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXG4gICAgICBgPjwvc2YtJHtzY2hlbWFUeXBlfT5gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0Rm9ybUtleVNjaGVtYVwiLCB7IGZvcm1LZXksIHNjaGVtYSB9KTtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICAgfSBlbHNlIGlmIChzY2hlbWEudHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
