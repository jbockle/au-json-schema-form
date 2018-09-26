import { ValidationControllerFactory, ValidationController } from 'aurelia-validation';
import { inject, bindable, InlineViewStrategy, customElement, bindingMode } from 'aurelia-framework';
import { SchemaFormConfiguration } from '../services/schema-form-configuration';
import { IFormOptions } from '../interfaces/form-options';
import { SchemaFormLogger } from '../resources/logger';
import { FormController } from './form-controller';
import { IFormOverride } from '../interfaces/form-override';
import { IJsonSchemaDefinition } from '../interfaces/json-schema-definition';
import { FormService } from '../services/form-service';
import { Guid } from '../resources/guid';
import { IFormInstance } from '../interfaces/form-instance';
import { FormInstances } from '../services/form-instances';
import { BindingSignaler } from 'aurelia-templating-resources';

@inject(
  ValidationControllerFactory,
  SchemaFormConfiguration,
  SchemaFormLogger,
  FormService,
  FormInstances,
  BindingSignaler
)
@customElement('au-json-schema-form')
export class AuJsonSchemaForm {
  @bindable schema: IJsonSchemaDefinition;

  @bindable form: IFormOverride;

  @bindable({ defaultBindingMode: bindingMode.twoWay }) model;

  @bindable options: IFormOptions;

  @bindable validationController: ValidationController;

  formView: InlineViewStrategy;

  formInstance: IFormInstance;

  id: string;

  private log: (message: string, ...rest: any[]) => void;

  constructor(
    private validationControllerFactory: ValidationControllerFactory,
    private configuration: SchemaFormConfiguration,
    private logger: SchemaFormLogger,
    private formService: FormService,
    private formInstances: FormInstances,
    public signaler: BindingSignaler
  ) {
    this.log = logger.info;
    this.id = Guid.newGuid();
  }

  schemaChanged() {
    this.log('schemaChanged');
    this.buildForm();
  }

  formChanged() {
    this.log('formChanged');
    this.buildForm();
  }

  bind() {
    this.log('bind', arguments);
    this.buildForm();
  }

  createValidationController() {
    if (this.validationController === undefined) {
      this.validationController = this.validationControllerFactory.createForCurrentScope();
      this.validationController.addRenderer(this.configuration.validationRenderer);
    }
    if (!(this.validationController as any).__hasSubscription) {
      this.validationController.subscribe(() => { this.signaler.signal('validationChanged'); });
      (this.validationController as any).__hasSubscription = true;
    }
  }

  buildForm() {
    if (this.schema.type !== 'object' && this.schema.type !== 'array') {
      this.logger.error('The schema must start with an object or an array');
      return;
    }
    if (this.formView) {
      this.formView = null;
    }
    this.log('buildForm', this.options);
    this.createValidationController();
    this.buildViewStrategy();
  }

  buildViewStrategy() {
    this.log('buildViewStrategy');
    this.form.$schema = this.schema;
    this.formView = new InlineViewStrategy(
      `<template>${this.formService.getSfTemplate('model', 'form', this.schema.type, this.id)}</template>`);
    this.formInstance = {
      schema: this.schema,
      form: this.form,
      formController: new FormController(this.logger, this.options, this.validationController),
      validationController: this.validationController,
      formOptions: this.options,
      model: this.model
    };
    this.logger.warn('buildViewStrategy completed', this.formInstance);
    this.formInstances.set(this.id, this.formInstance);
  }
}
