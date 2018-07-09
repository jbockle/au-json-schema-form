import { customElement, bindable, inject, InlineViewStrategy, View, Optional } from "aurelia-framework";
import { IJsonSchemaArrayDefinition } from "../../interfaces/json-schema-definition";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
import { FormService } from "../../services/form-service";
import { Validator, ValidateResult, ValidationController } from "aurelia-validation";
import { ArrayRules } from "../../rules/array-rules";
import { DefaultsService } from "../../services/defaults-service";

@inject(
  ArrayRules,
  SchemaFormConfiguration,
  FormService,
  SchemaFormLogger,
  Validator,
  DefaultsService
)
@customElement("sf-array")
export class SfArray {
  @bindable form: IFormOverride;
  @bindable model: any[];
  @bindable formInstance: string;

  id: string = Guid.newGuid();

  kind = "array";

  view: InlineViewStrategy;

  viewStrategy: string;

  validationErrors: string[];
  validationController: ValidationController;

  constructor(
    public arrayRules: ArrayRules,
    public configuration: SchemaFormConfiguration,
    public formService: FormService,
    private logger: SchemaFormLogger,
    public validator: Validator,
    public defaultsService: DefaultsService
  ) {

  }

  created(owningView: View, myView: View) {
    this.validationController = myView.container.get(Optional.of(ValidationController));
  }

  async bind() {
    this.logger.info("sf-array", { form: this.form, model: this.model });
    this.bindRules();
    await this.createView();
    this.determineViewStrategy();
  }

  attached() {
    this.getErrors();
  }

  determineViewStrategy() {
    let strategy;
    if (this.form.$altTemplate) {
      strategy = this.form.$altTemplate;
    } else if (this.form.$schema.items.type === "string" && this.form.$schema.items.enum) {
      strategy = this.configuration.templates.arrayStringEnum;
    } else {
      strategy = this.configuration.templates.array;
    }
    this.viewStrategy = strategy;
  }

  async createView() {
    const template = await this.formService
      .getFormTemplateAsync(this.form, this.form.$schema, this.model, this.formInstance);
    this.view = new InlineViewStrategy(`<template>${template.content}</template>`);
  }

  private bindRules() {
    this.arrayRules.bind(this);
    this.validationController.addObject(this.model);
  }

  getFormController(overrideContext: any) {
    return overrideContext.__parentOverrideContext.bindingContext;
  }

  add() {
    this.model.push(this.defaultsService.getSchemaDefaultAsync(this.form.$schema.items, null));
    this.validationController.validate({ object: this.model });
    if (this.configuration.validationRenderer) {
      this.logger.warn("validating");
      this.validate();
    }
  }

  remove(index) {
    this.model.splice(index, 1);
    this.validate();
  }

  get isDisabled(): boolean {
    return this.form.$schema.readOnly || !!this.form.$schema.const;
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
    const result = await this.validationController.validate({ object: this.model });
    this.logger.info("validated array", result);
    return result;
  }

  async getErrors() {
    const result = await this.validate();
    if (!result.valid) {
      this.validationErrors = result.results
        .filter((r) => !r.valid)
        .map((r) => r.message);
    }
    return [];
  }
}
