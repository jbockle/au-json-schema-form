import { ValidationControllerFactory, ValidationController, ValidationRules } from "aurelia-validation";
import { inject, bindable, InlineViewStrategy, customElement } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { RulesFactory } from "../rules/rules-factory";

@inject(
  ValidationControllerFactory,
  SchemaFormConfiguration,
  RulesFactory
)
@customElement("au-json-schema-form")
export class AuJsonSchemaForm {
  @bindable schema: any;

  @bindable form;

  @bindable model;

  @bindable options: any;

  controller: ValidationController;

  viewStrategy: InlineViewStrategy;

  loaded: boolean = false;

  constructor(
    validationControllerFactory: ValidationControllerFactory,
    configuration: SchemaFormConfiguration,
    rulesFactory: RulesFactory
  ) {
    this.controller = validationControllerFactory.createForCurrentScope();
    this.controller.addRenderer(configuration.validationRenderer);
    rulesFactory.register();
  }

  bind() {
    this.buildViewStrategy();
  }

  schemaChanged() {
    this.buildViewStrategy();
  }

  formChanged() {
    this.buildViewStrategy();
  }

  buildViewStrategy() {
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
    this.viewStrategy = new InlineViewStrategy(`<template>${viewStrategy}</template>`);
  }

  getSchemaTemplate(key: string, form: any, part: any = this.schema) {
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

  private getDefaultTemplate(xtype: string, key: string, form: any, schema: any, part: any): string {
    return;
  }

  isRequired(key: string, part: any): boolean {
    let required = false;
    if (Array.isArray(part.required)) {
      required = part.required
        .some((x) => x === key);
    }
    return required;
  }

  toTitle(key: string) {
    if (key) {
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
    }
  }

  attached() {
    if (!this.options) { return; }
    if (this.options.validateOnRender) {
      this.controller.validate();
    }
  }
}
