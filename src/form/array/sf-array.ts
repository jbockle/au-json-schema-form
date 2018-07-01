import { customElement, bindable, inject, InlineViewStrategy } from "aurelia-framework";
import { IJsonSchemaArrayDefinition } from "../../interfaces/json-schema-definition";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IForm } from "../../interfaces/form";
import { FormService } from "../../services/form-service";

@inject(SchemaFormConfiguration, FormService, SchemaFormLogger)
@customElement("sf-array")
export class SfArray {
  @bindable form: IForm;
  @bindable key: string;
  @bindable model: any[];
  @bindable schema: IJsonSchemaArrayDefinition;

  id: string = Guid.newGuid();

  kind = "array";

  view: InlineViewStrategy;

  constructor(
    public configuration: SchemaFormConfiguration,
    public formService: FormService,
    private logger: SchemaFormLogger,
  ) { }

  bind() {
    this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
    const template =
      `<template>${this.formService.buildArrayForm(this.schema, this.form, this.key, this.model)}</template>`;
    this.view = new InlineViewStrategy(template);
  }

  add() {
    this.model.push(this.formService.getArrayItemDefault(this.schema, null));
  }

  remove(index) {
    this.model.splice(index, 1);
  }
}
