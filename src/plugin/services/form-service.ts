import {
  IFormOverride,
  isOverride,
  setFormOverrides,
  ITemplateElement,
  isTemplateModule
} from '../interfaces/form-override';
import {
  IJsonSchemaDefinition
} from '../interfaces/json-schema-definition';
import { SchemaFormLogger } from '../resources/logger';
import { ITemplateStore } from '../interfaces/template';
import { DefaultsService } from './defaults-service';
import { Wrapper } from '../resources/wrapper';
import { inject, TaskQueue } from 'aurelia-framework';
import { SchemaFormConfiguration } from './schema-form-configuration';

@inject(DefaultsService, TaskQueue, SchemaFormLogger, SchemaFormConfiguration)
export class FormService {
  constructor(
    public defaultsService: DefaultsService,
    public taskQueue: TaskQueue,
    private logger: SchemaFormLogger,
    public configuration: SchemaFormConfiguration
  ) { }

  async getFormTemplateAsync(
    form: IFormOverride, schema: IJsonSchemaDefinition, model: any, instanceId: string
  ): Promise<ITemplateStore> {
    this.logger.warn('getFormTemplateAsync', { form, schema, model, instanceId });

    const template: ITemplateStore = { content: '' };

    model = await this.defaultsService.getSchemaDefaultAsync(schema, model);

    setFormOverrides(form, null, null, schema);

    this.generateTemplate(form, schema, template, instanceId);

    this.logger.warn('template created', { template });
    return template;
  }

  generateTemplate(
    form: IFormOverride,
    schema: IJsonSchemaDefinition,
    template: ITemplateStore,
    instanceId: string,
    segment: string = ''
  ) {
    this.logger.info('transformTemplate', { form, schema });
    for (const formKey in form) {
      if (isOverride(formKey)) {
        continue;
      }
      const wrapper = new Wrapper(formKey);
      wrapper.applyStart(template);
      if (Wrapper.isContainer(formKey)) {
        this.appendContainer(form, formKey, schema, template, instanceId, segment);
      } else if (isTemplateModule(formKey)) {
        form._element.forEach((element) => {
          this.appendTemplateElement(template, element, schema, segment, instanceId);
        });
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

  appendTemplateElement(
    template: ITemplateStore,
    templateModule: ITemplateElement,
    parentSchema: IJsonSchemaDefinition,
    segment: string,
    instanceId: string
  ): void {
    this.logger.info('appendTemplateElement', { template, templateModule, parentSchema, segment });
    template.content += `<${templateModule.elementName} `;
    if (templateModule.schemaKey) {
      template.content += ` model.two-way="model['${templateModule.schemaKey}']"` +
        ` form-instance="${instanceId}"` +
        ` schema.to-view="form${segment}.$schema`;
      switch (parentSchema.type) {
        case 'array':
          template.content += '.items';
          break;
        case 'object':
          template.content += '.properties';
          break;
      }
      template.content += `['${templateModule.schemaKey}']"`;
    }
    template.content += `></${templateModule.elementName}>`;
  }

  getSfTemplate(
    modelPath: string, formPath: string, schemaType, instanceId: string
  ) {
    this.logger.info('getTemplate', { modelPath, formPath, schemaType, instanceId });
    return `<sf-${schemaType}` +
      ` model.two-way="${modelPath}"` +
      ` form.to-view="${formPath}"` +
      ` form-instance="${instanceId}"` +
      `></sf-${schemaType}>`;
  }

  private getFormKeySchema(formKey: string, schema: IJsonSchemaDefinition) {
    this.logger.info('getFormKeySchema', { formKey, schema });
    if (schema.type === 'object') {
      return schema.properties[formKey] as IJsonSchemaDefinition;
    } else if (schema.type === 'array') {
      return schema.items[formKey] as IJsonSchemaDefinition;
    }
  }

  getTemplatePath(type: string, child?: string) {
    let templates = this.configuration.templates;
    if (child) {
      templates = templates[child];
    }
    return templates[type].replace('./', '../../');
  }
}
