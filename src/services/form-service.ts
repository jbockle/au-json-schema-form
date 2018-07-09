import { inject, TaskQueue } from "aurelia-framework";
import { IFormOverride, isOverride, setFormOverrides } from "../interfaces/form-override";
import {
  IJsonSchemaDefinition,
  IJsonSchemaObjectDefinition,
  SchemaType
} from "../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../resources/logger";
import { ITemplate } from "../interfaces/template";
import { DefaultsService } from "./defaults-service";
import { Wrapper } from "../resources/wrapper";

@inject(DefaultsService, TaskQueue, SchemaFormLogger)
export class FormService {
  constructor(
    public defaultsService: DefaultsService,
    public taskQueue: TaskQueue,
    private logger: SchemaFormLogger
  ) { }

  async getFormTemplateAsync(
    form: IFormOverride, schema: IJsonSchemaDefinition, model: any, instanceId: string
  ): Promise<ITemplate> {
    this.logger.warn("getFormTemplateAsync", { form, schema, model });

    const template: ITemplate = { content: "" };

    model = this.defaultsService.getSchemaDefaultAsync(schema, model);

    setFormOverrides(form, null, null, schema);

    this.transformTemplate(form, schema, template, instanceId);

    this.logger.warn("template created", { template });
    return template;
  }

  transformTemplate(
    form: IFormOverride, schema: IJsonSchemaDefinition, template: ITemplate, instanceId: string, segment: string = ""
  ) {
    this.logger.info("transformTemplate", { form, schema });
    for (const formKey in form) {
      if (isOverride(formKey)) {
        continue;
      }
      const wrapper = new Wrapper(formKey);
      wrapper.applyStart(template);
      if (Wrapper.isContainer(formKey)) {
        (form[formKey] as IFormOverride[]).forEach((childForm, idx) => {
          this.transformTemplate(
            childForm,
            schema,
            template,
            instanceId,
            `${segment}['${formKey}'][${idx}]`
          );
        });
      } else {
        setFormOverrides(
          form[formKey] as IFormOverride,
          schema,
          formKey,
          this.getFormKeySchema(formKey, schema)
        );
        template.content += this.getTemplate(
          `model['${formKey}']`,
          `form${segment}['${formKey}']`,
          this.getFormKeySchema(formKey, schema).type,
          instanceId);
      }
      wrapper.applyEnd(template);
    }
  }

  getTemplate(
    modelPath: string, formPath: string, schemaType: SchemaType, instanceId: string
  ) {
    return `<sf-${schemaType}` +
      ` model.two-way="${modelPath}"` +
      ` form.to-view="${formPath}">` +
      ` form-instance="${instanceId}"` +
      `></sf-${schemaType}>`;
  }

  private getFormKeySchema(formKey: string, schema: IJsonSchemaDefinition) {
    this.logger.info("getFormKeySchema", { formKey, schema });
    if (schema.type === "object") {
      return schema.properties[formKey] as IJsonSchemaDefinition;
    } else if (schema.type === "array") {
      return schema.items[formKey] as IJsonSchemaDefinition;
    }
  }
}
