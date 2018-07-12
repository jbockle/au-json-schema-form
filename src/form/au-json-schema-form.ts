import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { inject, bindable, InlineViewStrategy, customElement, Container } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { IFormOptions } from "../interfaces/form-options";
import { SchemaFormLogger } from "../resources/logger";
import { FormController } from "./form-controller";
import { IFormOverride } from "../interfaces/form-override";
import { IJsonSchemaDefinition } from "../interfaces/json-schema-definition";
import { FormService } from "../services/form-service";
import { Guid } from "../resources/guid";
import { IFormInstance } from "../interfaces/form-instance";
import { FormInstances } from "../services/form-instances";

@inject(
  ValidationControllerFactory,
  SchemaFormConfiguration,
  SchemaFormLogger,
  FormService,
  FormInstances
)
@customElement("au-json-schema-form")
export class AuJsonSchemaForm {
  @bindable schema: IJsonSchemaDefinition;

  @bindable form: IFormOverride;

  @bindable model;

  @bindable options: IFormOptions;

  validationController: ValidationController;

  formView: InlineViewStrategy;

  formInstance: IFormInstance;

  id: string;

  private log: (message: string, ...rest: any[]) => void;

  constructor(
    validationControllerFactory: ValidationControllerFactory,
    configuration: SchemaFormConfiguration,
    private logger: SchemaFormLogger,
    private formService: FormService,
    private formInstances: FormInstances
  ) {
    this.log = logger.info;
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.validationController.addRenderer(configuration.validationRenderer);
    this.id = Guid.newGuid();
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
    this.buildForm();
  }

  buildForm() {
    if (this.schema.type !== "object" && this.schema.type !== "array") {
      this.logger.error("The schema must start with an object or an array");
      return;
    }
    if (this.formView) {
      this.formView = null;
    }
    this.log("buildForm", this.options);
    this.buildViewStrategy();
  }

  buildViewStrategy() {
    this.log("buildViewStrategy");
    this.form.$schema = this.schema;
    this.formView = new InlineViewStrategy(
      `<template>${this.formService.getSfTemplate("model", "form", this.schema.type, this.id)}</template>`);
    this.formInstance = {
      schema: this.schema,
      form: this.form,
      formController: new FormController(this.logger, this.options, this.validationController),
      validationController: this.validationController,
      formOptions: this.options
    };
    this.logger.warn("buildViewStrategy completed", this.formInstance);
    this.formInstances.set(this.id, this.formInstance);
  }
}
