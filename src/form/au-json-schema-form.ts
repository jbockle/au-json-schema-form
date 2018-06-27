import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { inject, bindable, InlineViewStrategy, customElement } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { RulesFactory } from "../rules/rules-factory";
import { IFormOptions } from "../interfaces/form-options";
import { SchemaFormLogger } from "../resources/logger";
import { FormController } from "./form-controller";

@inject(
  ValidationControllerFactory,
  SchemaFormConfiguration,
  RulesFactory,
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

  formController: FormController;

  loaded: boolean = false;

  constructor(
    validationControllerFactory: ValidationControllerFactory,
    configuration: SchemaFormConfiguration,
    rulesFactory: RulesFactory,
    private logger: SchemaFormLogger
  ) {
    this.logger.info("constructor", arguments);
    this.validationController = validationControllerFactory.createForCurrentScope();
    this.validationController.addRenderer(configuration.validationRenderer);
    rulesFactory.register();
  }

  bind() {
    this.logger.info("bind", arguments);
    this.buildForm();
  }

  schemaChanged() {
    this.logger.info("schemaChanged", arguments);
    this.buildForm();
  }

  formChanged() {
    this.logger.info("formChanged", arguments);
    this.buildForm();
  }

  buildForm() {
    if (this.formView) {
      this.formView = null;
    }
    this.logger.info("buildForm", arguments, this.options);
    this.buildViewStrategy();
  }

  buildViewStrategy() {
    this.logger.info("buildViewStrategy", arguments);
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
    this.formController = new FormController(this.logger, this.options, this.validationController);
  }

  getSchemaTemplate(key: string, form: any, part: any = this.schema) {
    this.logger.info("getSchemaTemplate", arguments);
    let template: string;
    const schema = part.properties[key];
    switch (schema.type) {
      case "number":
        template = `<sf-number
        schema.bind="schema.properties.${key}"
        model.two-way="model.${key}"
        title="${form.$title || schema.title || this.toTitle(key)}"
        required.bind="${this.isRequired(key, part)}"></sf-number>\r\n`;
        break;
      case "string":
        template = `<sf-text
      schema.bind="schema.properties.${key}"
      model.two-way="model.${key}"
      title="${form.$title || schema.title || this.toTitle(key)}"
      required.bind="${this.isRequired(key, part)}"></sf-text>\r\n`;
        break;
    }
    return template;
  }


  isRequired(key: string, part: any): boolean {
    this.logger.info("isRequired", arguments);
    let required = false;
    if (Array.isArray(part.required)) {
      required = part.required
        .some((x) => x === key);
    }
    return required;
  }

  toTitle(key: string) {
    this.logger.info("toTitle", arguments);
    if (key) {
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
    }
  }
}
