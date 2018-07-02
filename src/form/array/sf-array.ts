import { customElement, bindable, inject, InlineViewStrategy } from "aurelia-framework";
import { IJsonSchemaArrayDefinition } from "../../interfaces/json-schema-definition";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form";
import { FormService } from "../../services/form-service";
import { RulesFactory } from "../../rules/rules-factory";
import { Validator, ValidateResult } from "aurelia-validation";

@inject(RulesFactory, SchemaFormConfiguration, FormService, SchemaFormLogger, Validator)
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

  constructor(
    public rulesFactory: RulesFactory,
    public configuration: SchemaFormConfiguration,
    public formService: FormService,
    private logger: SchemaFormLogger,
    public validator: Validator
  ) { }

  async validate() {
    this.results = await this.validator.validateProperty(this, "model");
  }

  bind() {
    this.rulesFactory.bind(this);
    this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
    const template =
      `<template>${this.formService.buildArrayForm(this.schema, this.form, this.key, this.model)}</template>`;
    this.view = new InlineViewStrategy(template);
    this.validate();
  }

  add() {
    this.model.push(this.formService.getArrayItemDefault(this.schema, null));
    this.validate();
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
}
