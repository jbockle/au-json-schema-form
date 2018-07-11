import { customElement, bindable, inject, InlineViewStrategy } from "aurelia-framework";
import { IJsonSchemaObjectDefinition } from "../../interfaces/json-schema-definition";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
import { FormService } from "../../services/form-service";
import { FormInstances } from "../../services/form-instances";
import { IFormInstance } from "../../interfaces/form-instance";

@inject(
  SchemaFormConfiguration,
  FormService,
  SchemaFormLogger,
  FormInstances
)
@customElement("sf-object")
export class SfObject {
  @bindable form: IFormOverride;
  @bindable model: object;
  @bindable formInstance: string;

  id: string = Guid.newGuid();

  kind = "object";

  view: InlineViewStrategy;

  private formCtrl: IFormInstance;

  constructor(
    public configuration: SchemaFormConfiguration,
    public formService: FormService,
    private logger: SchemaFormLogger,
    private formInstances: FormInstances
  ) { }

  attached() {
    this.logger.info("sf-array-attached");
    if (this.formCtrl.formOptions.validateOnRender) {
      this.formCtrl.validationController.validate({ object: this.model });
    }
  }

  async bind() {
    this.logger.info("sf-object", { form: this.form, model: this.model });
    this.formCtrl = this.formInstances.get(this.formInstance);
    const template = await this.formService
      .getFormTemplateAsync(this.form, this.form.$schema, this.model, this.formInstance);
    this.view = new InlineViewStrategy(
      `<template>${template.content}</template>`);
  }
}
