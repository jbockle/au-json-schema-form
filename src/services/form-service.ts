import { inject, TaskQueue } from "aurelia-framework";
import { IFormOverride, isOverride, setFormOverrides } from "../interfaces/form-override";
import {
  IJsonSchemaDefinition,
  IJsonSchemaObjectDefinition,
  SchemaType
} from "../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../resources/logger";
import { ITemplateStore, isTemplateModule, ITemplateModule } from "../interfaces/template";
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
  ): Promise<ITemplateStore> {
    this.logger.warn("getFormTemplateAsync", { form, schema, model, instanceId });

    const template: ITemplateStore = { content: "" };

    model = await this.defaultsService.getSchemaDefaultAsync(schema, model);

    setFormOverrides(form, null, null, schema);

    this.generateTemplate(form, schema, template, instanceId);

    this.logger.warn("template created", { template });
    return template;
  }

  generateTemplate(
    form: IFormOverride,
    schema: IJsonSchemaDefinition,
    template: ITemplateStore,
    instanceId: string,
    segment: string = ""
  ) {
    this.logger.info("transformTemplate", { form, schema });
    for (const formKey in form) {
      if (isOverride(formKey)) {
        continue;
      }
      const wrapper = new Wrapper(formKey);
      wrapper.applyStart(template);
      if (Wrapper.isContainer(formKey)) {
        this.appendContainer(form, formKey, schema, template, instanceId, segment);
      } else if (isTemplateModule(formKey)) {
        this.appendTemplateModule(template, form._template, schema);
      } else {
        this.appendSfTemplate(form, formKey, schema, template, segment, instanceId);
      }
      wrapper.applyEnd(template);
    }
  }

  private appendContainer(
    form: IFormOverride,
    formKey: string,
    schema: IJsonSchemaDefinition,
    template: ITemplateStore,
    instanceId: string,
    segment: string
  ) {
    (form[formKey] as IFormOverride[]).forEach((childForm, idx) => {
      this.generateTemplate(childForm, schema, template, instanceId, `${segment}['${formKey}'][${idx}]`);
    });
  }

  appendSfTemplate(
    form: IFormOverride,
    formKey: string,
    schema: IJsonSchemaDefinition,
    template: ITemplateStore,
    segment: string,
    instanceId: string
  ) {
    setFormOverrides(form[formKey] as IFormOverride, schema, formKey, this.getFormKeySchema(formKey, schema));
    template.content += this.getSfTemplate(
      `model['${formKey}']`,
      `form${segment}['${formKey}']`,
      this.getFormKeySchema(formKey, schema).type,
      instanceId
    );
  }

  appendTemplateModule(
    template: ITemplateStore,
    templateModule: ITemplateModule,
    parentSchema: IJsonSchemaDefinition
  ): void {
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

  getSfTemplate(
    modelPath: string, formPath: string, schemaType: SchemaType, instanceId: string
  ) {
    this.logger.info("getTemplate", { modelPath, formPath, schemaType, instanceId });
    return `<sf-${schemaType}` +
      ` model.two-way="${modelPath}"` +
      ` form.to-view="${formPath}"` +
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
