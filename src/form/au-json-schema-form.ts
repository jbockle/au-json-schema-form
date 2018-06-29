import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { inject, bindable, InlineViewStrategy, customElement, Container } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { IFormOptions } from "../interfaces/form-options";
import { SchemaFormLogger } from "../resources/logger";
import { FormObjectController } from "./form-object-controller";

@inject(
  ValidationControllerFactory,
  SchemaFormConfiguration,
  SchemaFormLogger
)
@customElement("au-json-schema-form")
export class AuJsonSchemaForm {
  @bindable schema: any;

  @bindable form;

  @bindable model;

  @bindable options: IFormOptions;

  validationController: ValidationController;

  formView: InlineViewStrategy;

  formController: FormObjectController;

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

  bind() {
    this.log("bind", arguments);
    this.buildForm();
  }

  schemaChanged() {
    this.log("schemaChanged", arguments);
    this.buildForm();
  }

  formChanged() {
    this.log("formChanged", arguments);
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
    let viewStrategy = "";
    const keys = Object.keys(this.form);
    keys.forEach((key) => {
      switch (key[0]) {
        case "@":
          break;
        case "$":
          break;
        default:
          const template = this.getSchemaTemplate(key, this.form[key]);
          if (template) { viewStrategy += template; }
          break;
      }
    });
    this.formView = new InlineViewStrategy(`<template>${viewStrategy}</template>`);
    this.formController = new FormObjectController(this.logger, this.options, this.validationController);
  }

  isRequired(key: string, part: any): boolean {
    this.log("isRequired", arguments);
    let required = false;
    if (Array.isArray(part.required)) {
      required = part.required
        .some((x) => x === key);
    }
    return required;
  }

  toTitle(key: string) {
    this.log("toTitle", arguments);
    if (key) {
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
    }
  }
}
