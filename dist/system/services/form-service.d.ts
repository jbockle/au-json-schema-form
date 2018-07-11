import { TaskQueue } from "aurelia-framework";
import { IFormOverride } from "../interfaces/form-override";
import { IJsonSchemaDefinition, SchemaType } from "../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../resources/logger";
import { ITemplate } from "../interfaces/template";
import { DefaultsService } from "./defaults-service";
export declare class FormService {
    defaultsService: DefaultsService;
    taskQueue: TaskQueue;
    private logger;
    constructor(defaultsService: DefaultsService, taskQueue: TaskQueue, logger: SchemaFormLogger);
    getFormTemplateAsync(form: IFormOverride, schema: IJsonSchemaDefinition, model: any, instanceId: string): Promise<ITemplate>;
    transformTemplate(form: IFormOverride, schema: IJsonSchemaDefinition, template: ITemplate, instanceId: string, segment?: string): void;
    getTemplate(modelPath: string, formPath: string, schemaType: SchemaType, instanceId: string): string;
    private getFormKeySchema;
}
