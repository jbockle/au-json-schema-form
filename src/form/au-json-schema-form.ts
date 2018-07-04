import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { inject, bindable, InlineViewStrategy, customElement, Container } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { IFormOptions } from "../interfaces/form-options";
import { SchemaFormLogger } from "../resources/logger";
import { FormController } from "./form-controller";
import { IFormOverride } from "../interfaces/form-override";
import { IJsonSchemaDefinition } from "../interfaces/json-schema-definition";

@inject(
  ValidationControllerFactory,
  SchemaFormConfiguration,
  SchemaFormLogger
)
@customElement("au-json-schema-form")
export class AuJsonSchemaForm {
  @bindable schema: IJsonSchemaDefinition;

  @bindable form: IFormOverride;

  @bindable model;

  @bindable options: IFormOptions;

  validationController: ValidationController;

  formView: InlineViewStrategy;

  formController: FormController;

  private log: (message: string, ...rest: any[]) => void;

  constructor(
    validationControllerFactory: ValidationControllerFactory,
    configuration: SchemaFormConfiguration,
    private logger: SchemaFormLogger
  ) {
    this.log = logger.info;
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.validationController.addRenderer(configuration.validationRenderer);
  }

  schemaChanged() {
    this.log("schemaChanged");
    this.buildForm();
  }

  formChanged() {
    this.log("formChanged");
    this.buildForm();
  }

  bind() {
    this.log("bind", arguments);
    if (this.schema.type !== "object" && this.schema.type !== "array") {
      throw new Error("The schema must start with an object or array");
    }
    this.buildForm();
  }

  buildForm() {
    if (this.formView) {
      this.formView = null;
    }
    this.log("buildForm", this.options);
    this.buildViewStrategy();
  }

  buildViewStrategy() {
    this.log("buildViewStrategy");
    this.formView = new InlineViewStrategy(
      `<template><sf-${this.schema.type} form.bind="form" model.two-way="model" schema.bind="schema" /></template>`);
    this.formController = new FormController(
      this.logger, this.options, this.validationController);
  }
}
