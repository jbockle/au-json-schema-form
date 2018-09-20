import { customElement, bindable, inject, InlineViewStrategy } from 'aurelia-framework';
import { Guid } from '../../resources/guid';
import { SchemaFormLogger } from '../../resources/logger';
import { IFormOverride } from '../../interfaces/form-override';
import { FormService } from '../../services/form-service';
import { ValidateResult } from 'aurelia-validation';
import { ArrayRules } from '../../rules/array-rules';
import { DefaultsService } from '../../services/defaults-service';
import { FormInstances } from '../../services/form-instances';
import { IFormInstance } from '../../interfaces/form-instance';
import * as $ from 'jquery';

@inject(
  ArrayRules,
  FormService,
  SchemaFormLogger,
  DefaultsService,
  FormInstances
)
@customElement('sf-array')
export class SfArray {
  @bindable form: IFormOverride;
  @bindable model: any[];
  @bindable formInstance: string;

  id: string = Guid.newGuid();

  kind = 'array';

  viewStrategy: string;

  itemViewStrategy: InlineViewStrategy;

  tabTitleTemplate: InlineViewStrategy;

  validationErrors: string[];

  errors: ValidateResult[];

  binded: boolean = false;

  private formCtrl: IFormInstance;

  constructor(
    public arrayRules: ArrayRules,
    private formService: FormService,
    private logger: SchemaFormLogger,
    private defaultsService: DefaultsService,
    private formInstances: FormInstances
  ) {  }

  async bind() {
    if (!this.binded) {
      this.logger.info('sf-array', { form: this.form, model: this.model });
      this.formCtrl = this.formInstances.get(this.formInstance);
      this.bindRules();
      this.form.$arrayItem.$schema = this.form.$schema.items;
      await this.createItemView();
      await this.determineViewStrategy();
      await this.initializeArray();
      this.binded = true;
    }
  }

  async initializeArray() {
    if (
      this.form.$arrayItem.$schema.enum ||
      (this.model && this.model.length > 0) ||
      this.form.$noEmptyArrayInitialization ||
      this.formCtrl.formOptions.noEmptyArrayInitialization
    ) {
      return;
    }
    await this.add(!!this.formCtrl.formOptions.validateOnRender);
  }

  attached() {
    this.logger.info('sf-array-attached');
    if (this.formCtrl.formOptions.validateOnRender) {
      this.validate();
    }
  }

  async determineViewStrategy() {
    let strategy;
    if (this.form.$altTemplate) {
      strategy = this.form.$altTemplate;
    } else if (this.form.$arrayAsTabs) {
      const content = !!this.form.$tabTitle ? `${this.form.$tabTitle}` : '${\'Item \' + ($index + 1)}';
      this.tabTitleTemplate = new InlineViewStrategy(`<template>${content}</template>`);
      strategy = this.formService.getTemplatePath('arrayTabs');
    } else if (this.form.$schema.items.type === 'string' && this.form.$schema.items.enum) {
      strategy = this.formService.getTemplatePath('arrayStringEnum');
    } else {
      strategy = this.formService.getTemplatePath('array');
    }
    this.viewStrategy = strategy;
  }

  async createItemView() {
    this.logger.info('createView', { form: this.form.$arrayItem });
    const template = this.formService
      .getSfTemplate(
        'model[$index]',
        'form.$arrayItem',
        this.form.$arrayItem.$schema.type,
        this.formInstance
      );
    this.logger.info('createView-template', { template });
    this.itemViewStrategy = new InlineViewStrategy(`<template>${template}</template>`);
  }

  private bindRules() {
    this.arrayRules.bind(this);
    this.formCtrl.validationController.addObject(this.model);
  }

  async add(validate: boolean) {
    if (!this.isDisabled && !this.atCapacity) {
      const item = await this.defaultsService.getSchemaDefaultAsync(this.form.$schema.items, null);
      const index = this.model.push(item) - 1;
      this.selectTab(index);
      if (validate) {
        await this.validate();
      }
    }
  }

  async remove(index: number, validate: boolean) {
    this.model.splice(index, 1);
    this.selectTab(this.model.length - 1);
    if (validate) {
      await this.validate();
    }
  }

  private selectTab(index: number) {
    if (this.tabTitleTemplate) {
      setTimeout(() => {
        $(`a[href="#tab_${this.id}_${index}"]`).tab('show');
      }, 50);
    }
  }

  get isDisabled(): boolean {
    return this.form.$schema.readOnly || !!this.form.$schema.const;
  }

  get isRemovable(): boolean {
    return !this.isDisabled ||  !this.form.$notRemovable;
  }

  get atCapacity(): boolean {
    return Number.isInteger(this.form.$schema.maxItems)
      ? this.model.length >= this.form.$schema.maxItems : false;
  }

  get atMinimumCapacity(): boolean {
    return Number.isInteger(this.form.$schema.minItems)
      ? this.model.length === this.form.$schema.minItems : false;
  }

  async validate() {
    const result = await this.formCtrl.validationController.validate({ object: this.model });
    this.logger.info('validated array', result);
    this.errors = result.results
      .filter((r) => !r.valid);
    return result;
  }
}
