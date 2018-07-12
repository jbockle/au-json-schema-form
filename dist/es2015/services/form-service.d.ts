import { TaskQueue } from "aurelia-framework";
import { IFormOverride } from "../interfaces/form-override";
import { IJsonSchemaDefinition, SchemaType } from "../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../resources/logger";
import { ITemplateStore, ITemplateModule } from "../interfaces/template";
import { DefaultsService } from "./defaults-service";
export declare class FormService {
    defaultsService: DefaultsService;
    taskQueue: TaskQueue;
    private logger;
    constructor(defaultsService: DefaultsService, taskQueue: TaskQueue, logger: SchemaFormLogger);
    getFormTemplateAsync(form: IFormOverride, schema: IJsonSchemaDefinition, model: any, instanceId: string): Promise<ITemplateStore>;
    generateTemplate(form: IFormOverride, schema: IJsonSchemaDefinition, template: ITemplateStore, instanceId: string, segment?: string): void;
    private appendContainer;
    appendSfTemplate(form: IFormOverride, formKey: string, schema: IJsonSchemaDefinition, template: ITemplateStore, segment: string, instanceId: string): void;
    appendTemplateModule(template: ITemplateStore, templateModule: ITemplateModule, parentSchema: IJsonSchemaDefinition): void;
    getSfTemplate(modelPath: string, formPath: string, schemaType: SchemaType, instanceId: string): string;
    private getFormKeySchema;
}
