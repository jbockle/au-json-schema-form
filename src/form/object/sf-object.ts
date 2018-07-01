import { customElement, bindable, inject, InlineViewStrategy } from "aurelia-framework";
import { IJsonSchemaObjectDefinition } from "../../interfaces/json-schema-definition";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IForm } from "../../interfaces/form";
import { FormService } from "../../services/form-service";

@inject(SchemaFormConfiguration, FormService, SchemaFormLogger)
@customElement("sf-object")
export class SfObject {
  @bindable form: IForm;
  @bindable model: object;
  @bindable schema: IJsonSchemaObjectDefinition;

  id: string = Guid.newGuid();

  kind = "object";

  view: InlineViewStrategy;

  constructor(
    public configuration: SchemaFormConfiguration,
    public formService: FormService,
    private logger: SchemaFormLogger,
  ) { }

  bind() {
    this.logger.info("sf-object", { form: this.form, model: this.model, schema: this.schema }, arguments);
    this.view = new InlineViewStrategy(
      `<template>${this.formService.buildObjectForm(this.schema, this.form, this.model)}</template>`);
  }
}
