import { customElement, bindable, inject, InlineViewStrategy } from "aurelia-framework";
import { IJsonSchemaArrayDefinition } from "../../interfaces/json-schema-definition";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form";
import { FormService } from "../../services/form-service";
import { RulesFactory } from "../../rules/rules-factory";
import { Validator, ValidateResult } from "aurelia-validation";
import { EventAggregator } from "aurelia-event-aggregator";
import { FormController } from "../form-controller";
import { ArrayRules } from "../../rules/array-rules";

@inject(ArrayRules, SchemaFormConfiguration, FormService, SchemaFormLogger, Validator, EventAggregator)
@customElement("sf-array")
export class SfArray {
  @bindable form: IFormOverride;
  @bindable key: string;
  @bindable model: any[];
  @bindable schema: IJsonSchemaArrayDefinition;

  id: string = Guid.newGuid();

  kind = "array";

  view: InlineViewStrategy;

  results: ValidateResult[];

  controller: FormController;

  constructor(
    public arrayRules: ArrayRules,
    public configuration: SchemaFormConfiguration,
    public formService: FormService,
    private logger: SchemaFormLogger,
    public validator: Validator,
    private eventAggregator: EventAggregator
  ) { }

  async validate() {
    this.results = await this.validator.validateProperty(this, "model");
  }

  bind(bindingContext: object, overrideContext: object) {
    this.arrayRules.bind(this);
    this.controller = this.getFormController(overrideContext) as FormController;
    this.controller.validationController.addObject(this.model);
    this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
    let template = this.formService.buildArrayForm(this.schema, this.form, this.key, this.model);
    template = `<template>${template}</template>`;
    this.view = new InlineViewStrategy(template);
    this.validate();
  }

  getFormController(overrideContext: any) {
    return overrideContext.__parentOverrideContext.bindingContext;
  }

  add() {
    this.model.push(this.formService.getArrayItemDefault(this.schema, null));
    this.controller.validateOnRender();
    this.eventAggregator.publish("form-array-modified");
  }

  remove(index) {
    this.model.splice(index, 1);
    this.validate();
    this.eventAggregator.publish("form-array-modified");
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
}
