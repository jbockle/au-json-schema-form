import { inject, TaskQueue } from "aurelia-framework";
import { FormTemplateService } from "./form-template-service";
import { IFormOverride } from "../interfaces/form-override";
import { IJsonSchemaDefinition, IJsonSchemaObjectDefinition } from "../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../resources/logger";
import { ITemplate } from "../interfaces/template";
import { DefaultsService } from "./defaults-service";

@inject(FormTemplateService, DefaultsService, TaskQueue, SchemaFormLogger)
export class FormService {
  constructor(
    public templateService: FormTemplateService,
    public defaultsService: DefaultsService,
    public taskQueue: TaskQueue,
    private logger: SchemaFormLogger
  ) { }

  async generateAsync(
    form: IFormOverride, schema: IJsonSchemaDefinition, model: any
  ): Promise<ITemplate> {
    this.logger.warn("generate", { form, schema, model });
    const template: ITemplate = { content: "" };

    return template;
  }
}
