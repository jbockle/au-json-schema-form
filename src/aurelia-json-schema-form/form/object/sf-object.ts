import { customElement, bindable, inject, InlineViewStrategy } from 'aurelia-framework';
import { Guid } from '../../resources/guid';
import { SchemaFormLogger } from '../../resources/logger';
import { IFormOverride } from '../../interfaces/form-override';
import { FormService } from '../../services/form-service';

@inject(
  FormService,
  SchemaFormLogger
)
@customElement('sf-object')
export class SfObject {
  @bindable form: IFormOverride;
  @bindable model: object;
  @bindable formInstance: string;

  id: string = Guid.newGuid();

  kind = 'object';

  view: InlineViewStrategy;

  constructor(
    public formService: FormService,
    private logger: SchemaFormLogger
  ) { }

  attached() {
    this.logger.info('sf-object-attached');
  }

  async bind() {
    this.logger.info('sf-object', { form: this.form, model: this.model });
    const template = await this.formService
      .getFormTemplateAsync(this.form, this.form.$schema, this.model, this.formInstance);
    this.view = new InlineViewStrategy(
      `<template>${template.content}</template>`);
  }
}
