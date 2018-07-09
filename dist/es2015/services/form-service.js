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
            this.logger.warn("getFormTemplateAsync", { form, schema, model });
            const template = { content: "" };
            model = this.defaultsService.getSchemaDefaultAsync(schema, model);
            setFormOverrides(form, null, null, schema);
            this.transformTemplate(form, schema, template, instanceId);
            this.logger.warn("template created", { template });
            return template;
        });
    }
    transformTemplate(form, schema, template, instanceId, segment = "") {
        this.logger.info("transformTemplate", { form, schema });
        for (const formKey in form) {
            if (isOverride(formKey)) {
                continue;
            }
            const wrapper = new Wrapper(formKey);
            wrapper.applyStart(template);
            if (Wrapper.isContainer(formKey)) {
                form[formKey].forEach((childForm, idx) => {
                    this.transformTemplate(childForm, schema, template, instanceId, `${segment}['${formKey}'][${idx}]`);
                });
            }
            else {
                setFormOverrides(form[formKey], schema, formKey, this.getFormKeySchema(formKey, schema));
                template.content += this.getTemplate(`model['${formKey}']`, `form${segment}['${formKey}']`, this.getFormKeySchema(formKey, schema).type, instanceId);
            }
            wrapper.applyEnd(template);
        }
    }
    getTemplate(modelPath, formPath, schemaType, instanceId) {
        return `<sf-${schemaType}` +
            ` model.two-way="${modelPath}"` +
            ` form.to-view="${formPath}">` +
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QU8sS0FBSyxPQUFPLElBQUksRUFDOUIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQyxJQUFJLEVBQzNDLFVBQVUsQ0FBQyxDQUFDO2FBQ2Y7WUFDRCxPQUFPLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVCO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FDVCxTQUFpQixFQUFFLFFBQWdCLEVBQUUsVUFBc0IsRUFBRSxVQUFrQjtRQUUvRSxPQUFPLE9BQU8sVUFBVSxFQUFFO1lBQ3hCLG1CQUFtQixTQUFTLEdBQUc7WUFDL0Isa0JBQWtCLFFBQVEsSUFBSTtZQUM5QixtQkFBbUIsVUFBVSxHQUFHO1lBQ2hDLFNBQVMsVUFBVSxHQUFHLENBQUM7SUFDM0IsQ0FBQztJQUVPLGdCQUFnQixDQUFDLE9BQWUsRUFBRSxNQUE2QjtRQUNyRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQzFELElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDNUIsT0FBTyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztTQUM1RDthQUFNLElBQUksTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7WUFDbEMsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBMEIsQ0FBQztTQUN2RDtJQUNILENBQUM7Q0FDRixDQUFBO0FBL0VZLFdBQVc7SUFEdkIsTUFBTSxDQUFDLGVBQWUsRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLENBQUM7cUNBR3pCLGVBQWU7UUFDckIsU0FBUztRQUNYLGdCQUFnQjtHQUp2QixXQUFXLENBK0V2QjtTQS9FWSxXQUFXIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgVGFza1F1ZXVlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlLCBpc092ZXJyaWRlLCBzZXRGb3JtT3ZlcnJpZGVzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHtcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sXG4gIFNjaGVtYVR5cGVcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZVwiO1xuaW1wb3J0IHsgRGVmYXVsdHNTZXJ2aWNlIH0gZnJvbSBcIi4vZGVmYXVsdHMtc2VydmljZVwiO1xuaW1wb3J0IHsgV3JhcHBlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvd3JhcHBlclwiO1xuXG5AaW5qZWN0KERlZmF1bHRzU2VydmljZSwgVGFza1F1ZXVlLCBTY2hlbWFGb3JtTG9nZ2VyKVxuZXhwb3J0IGNsYXNzIEZvcm1TZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRlZmF1bHRzU2VydmljZTogRGVmYXVsdHNTZXJ2aWNlLFxuICAgIHB1YmxpYyB0YXNrUXVldWU6IFRhc2tRdWV1ZSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxuICApIHsgfVxuXG4gIGFzeW5jIGdldEZvcm1UZW1wbGF0ZUFzeW5jKFxuICAgIGZvcm06IElGb3JtT3ZlcnJpZGUsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCBtb2RlbDogYW55LCBpbnN0YW5jZUlkOiBzdHJpbmdcbiAgKTogUHJvbWlzZTxJVGVtcGxhdGU+IHtcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwiZ2V0Rm9ybVRlbXBsYXRlQXN5bmNcIiwgeyBmb3JtLCBzY2hlbWEsIG1vZGVsIH0pO1xuXG4gICAgY29uc3QgdGVtcGxhdGU6IElUZW1wbGF0ZSA9IHsgY29udGVudDogXCJcIiB9O1xuXG4gICAgbW9kZWwgPSB0aGlzLmRlZmF1bHRzU2VydmljZS5nZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hLCBtb2RlbCk7XG5cbiAgICBzZXRGb3JtT3ZlcnJpZGVzKGZvcm0sIG51bGwsIG51bGwsIHNjaGVtYSk7XG5cbiAgICB0aGlzLnRyYW5zZm9ybVRlbXBsYXRlKGZvcm0sIHNjaGVtYSwgdGVtcGxhdGUsIGluc3RhbmNlSWQpO1xuXG4gICAgdGhpcy5sb2dnZXIud2FybihcInRlbXBsYXRlIGNyZWF0ZWRcIiwgeyB0ZW1wbGF0ZSB9KTtcbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICB0cmFuc2Zvcm1UZW1wbGF0ZShcbiAgICBmb3JtOiBJRm9ybU92ZXJyaWRlLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgdGVtcGxhdGU6IElUZW1wbGF0ZSwgaW5zdGFuY2VJZDogc3RyaW5nLCBzZWdtZW50OiBzdHJpbmcgPSBcIlwiXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJ0cmFuc2Zvcm1UZW1wbGF0ZVwiLCB7IGZvcm0sIHNjaGVtYSB9KTtcbiAgICBmb3IgKGNvbnN0IGZvcm1LZXkgaW4gZm9ybSkge1xuICAgICAgaWYgKGlzT3ZlcnJpZGUoZm9ybUtleSkpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBjb25zdCB3cmFwcGVyID0gbmV3IFdyYXBwZXIoZm9ybUtleSk7XG4gICAgICB3cmFwcGVyLmFwcGx5U3RhcnQodGVtcGxhdGUpO1xuICAgICAgaWYgKFdyYXBwZXIuaXNDb250YWluZXIoZm9ybUtleSkpIHtcbiAgICAgICAgKGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZVtdKS5mb3JFYWNoKChjaGlsZEZvcm0sIGlkeCkgPT4ge1xuICAgICAgICAgIHRoaXMudHJhbnNmb3JtVGVtcGxhdGUoXG4gICAgICAgICAgICBjaGlsZEZvcm0sXG4gICAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgICB0ZW1wbGF0ZSxcbiAgICAgICAgICAgIGluc3RhbmNlSWQsXG4gICAgICAgICAgICBgJHtzZWdtZW50fVsnJHtmb3JtS2V5fSddWyR7aWR4fV1gXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGb3JtT3ZlcnJpZGVzKFxuICAgICAgICAgIGZvcm1bZm9ybUtleV0gYXMgSUZvcm1PdmVycmlkZSxcbiAgICAgICAgICBzY2hlbWEsXG4gICAgICAgICAgZm9ybUtleSxcbiAgICAgICAgICB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKVxuICAgICAgICApO1xuICAgICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuZ2V0VGVtcGxhdGUoXG4gICAgICAgICAgYG1vZGVsWycke2Zvcm1LZXl9J11gLFxuICAgICAgICAgIGBmb3JtJHtzZWdtZW50fVsnJHtmb3JtS2V5fSddYCxcbiAgICAgICAgICB0aGlzLmdldEZvcm1LZXlTY2hlbWEoZm9ybUtleSwgc2NoZW1hKS50eXBlLFxuICAgICAgICAgIGluc3RhbmNlSWQpO1xuICAgICAgfVxuICAgICAgd3JhcHBlci5hcHBseUVuZCh0ZW1wbGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0VGVtcGxhdGUoXG4gICAgbW9kZWxQYXRoOiBzdHJpbmcsIGZvcm1QYXRoOiBzdHJpbmcsIHNjaGVtYVR5cGU6IFNjaGVtYVR5cGUsIGluc3RhbmNlSWQ6IHN0cmluZ1xuICApIHtcbiAgICByZXR1cm4gYDxzZi0ke3NjaGVtYVR5cGV9YCArXG4gICAgICBgIG1vZGVsLnR3by13YXk9XCIke21vZGVsUGF0aH1cImAgK1xuICAgICAgYCBmb3JtLnRvLXZpZXc9XCIke2Zvcm1QYXRofVwiPmAgK1xuICAgICAgYCBmb3JtLWluc3RhbmNlPVwiJHtpbnN0YW5jZUlkfVwiYCArXG4gICAgICBgPjwvc2YtJHtzY2hlbWFUeXBlfT5gO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRGb3JtS2V5U2NoZW1hKGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0Rm9ybUtleVNjaGVtYVwiLCB7IGZvcm1LZXksIHNjaGVtYSB9KTtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIHJldHVybiBzY2hlbWEucHJvcGVydGllc1tmb3JtS2V5XSBhcyBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICAgfSBlbHNlIGlmIChzY2hlbWEudHlwZSA9PT0gXCJhcnJheVwiKSB7XG4gICAgICByZXR1cm4gc2NoZW1hLml0ZW1zW2Zvcm1LZXldIGFzIElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
