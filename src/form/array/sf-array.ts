import { customElement, bindable, inject, InlineViewStrategy, View, Optional } from "aurelia-framework";
import { IJsonSchemaArrayDefinition } from "../../interfaces/json-schema-definition";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
import { FormService } from "../../services/form-service";
import { Validator, ValidateResult, ValidationController } from "aurelia-validation";
import { EventAggregator } from "aurelia-event-aggregator";
import { ArrayRules } from "../../rules/array-rules";

@inject(
  ArrayRules,
  SchemaFormConfiguration,
  FormService,
  SchemaFormLogger,
  Validator,
  EventAggregator
)
@customElement("sf-array")
export class SfArray {
  @bindable form: IFormOverride;
  @bindable key: string;
  @bindable model: any[];
  @bindable schema: IJsonSchemaArrayDefinition;

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
    public validator: Validator
  ) {

  }

  created(owningView: View, myView: View) {
    this.validationController = myView.container.get(Optional.of(ValidationController));
  }

  bind() {
    this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
    this.bindRules();
    this.createView();
    this.determineViewStrategy();
  }

  attached() {
    this.getErrors();
  }

  determineViewStrategy() {
    let strategy;
    if (this.form.$altTemplate) {
      strategy = this.form.$altTemplate;
    } else if (this.schema.items.type === "string" && this.schema.items.enum) {
      strategy = this.configuration.templates.arrayStringEnum;
    } else {
      strategy = this.configuration.templates.array;
    }
    this.viewStrategy = strategy;
  }

  private createView() {
    let template = this.formService.buildArrayForm(this.schema, this.form, this.key, this.model);
    template = `<template>${template}</template>`;
    this.view = new InlineViewStrategy(template);
  }

  private bindRules() {
    this.arrayRules.bind(this);
    this.validationController.addObject(this.model);
  }

  getFormController(overrideContext: any) {
    return overrideContext.__parentOverrideContext.bindingContext;
  }

  add() {
    this.model.push(this.formService.getArrayItemDefault(this.schema, null));
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
    return this.form.$arraySchema.readOnly || !!this.form.$arraySchema.const;
  }

  get atCapacity(): boolean {
    return Number.isInteger(this.form.$arraySchema.maxItems)
      ? this.model.length >= this.form.$arraySchema.maxItems : false;
  }

  get atMinimumCapacity(): boolean {
    return Number.isInteger(this.form.$arraySchema.minItems)
      ? this.model.length === this.form.$arraySchema.minItems : false;
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
