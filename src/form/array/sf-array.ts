import { customElement, bindable, inject, InlineViewStrategy, Optional, View, NewInstance } from "aurelia-framework";
import { IJsonSchemaArrayDefinition } from "../../interfaces/json-schema-definition";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form";
import { FormService } from "../../services/form-service";
import { RulesFactory } from "../../rules/rules-factory";
import { Validator, ValidateResult, ValidationController } from "aurelia-validation";
import { EventAggregator } from "aurelia-event-aggregator";
import { FormController } from "../form-controller";
import { ArrayRules } from "../../rules/array-rules";

@inject(
  ArrayRules,
  SchemaFormConfiguration,
  FormService,
  SchemaFormLogger,
  Validator,
  EventAggregator,
  ValidationController
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

  results: ValidateResult[];

  controller: FormController;

  validationController: ValidationController;

  constructor(
    public arrayRules: ArrayRules,
    public configuration: SchemaFormConfiguration,
    public formService: FormService,
    private logger: SchemaFormLogger,
    public validator: Validator,
    private eventAggregator: EventAggregator,
    vc: ValidationController
  ) {
    this.validationController = vc;
  }

  created(owningView: View, myView: View) {
    // this.validationController = myView.container.get(Optional.of(ValidationController));
  }

  bind(bindingContext: any, overrideContext: any) {
    this.arrayRules.bind(this);
    this.validationController.addObject(this.model);
    this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
    let template = this.formService.buildArrayForm(this.schema, this.form, this.key, this.model);
    template = `<template>${template}</template>`;
    this.view = new InlineViewStrategy(template);
  }

  getFormController(overrideContext: any) {
    return overrideContext.__parentOverrideContext.bindingContext;
  }

  add() {
    this.model.push(this.formService.getArrayItemDefault(this.schema, null));
    this.validationController.validate({ object: this.model });
    if (this.configuration.validationRenderer) {
      this.logger.warn("validating");
      this.validationController.validate();
    }
  }

  remove(index) {
    this.model.splice(index, 1);
    this.validationController.validate({ object: this.model });
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
