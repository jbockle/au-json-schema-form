import { ValidationControllerFactory, ValidationController, ValidationRules } from "aurelia-validation";
import { inject, bindable, InlineViewStrategy, observable } from "aurelia-framework";
import { GlobalOptions } from "../services/global-options";
import { IFormOptions } from "../interfaces/form-options";

@inject(ValidationControllerFactory, GlobalOptions)
export class AuSchemaForm {
  @bindable schema: any;

  @bindable form;

  @bindable model;

  @bindable options: IFormOptions;

  controller: ValidationController;

  viewStrategy: InlineViewStrategy;

  loaded: boolean = false;

  constructor(vcf: ValidationControllerFactory, private globalOptions: GlobalOptions) {
    this.controller = vcf.createForCurrentScope();
    this.controller.addRenderer(globalOptions.renderer);

    ValidationRules
      .customRule(
        "minimum",
        (val, obj, min) => val !== undefined ? val >= min : true,
        "${$displayName} must be greater than ${$config.min}",
        (min) => ({ min })
      );
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
    this.viewStrategy = new InlineViewStrategy(`<template>${viewStrategy}</template>`, this.globalOptions.templates);
  }

  getSchemaTemplate(key: string, form: any, part: any = this.schema) {
    let template: string;
    const schema = part.properties[key];
    switch (schema.type) {
      case "number":
        template = `<sfnumber
        schema.bind="schema.properties.${key}"
        model.two-way="model.${key}"
        title="${form.$title || schema.title || this.toTitle(key)}"
        required.bind="${this.isRequired(key, part)}"></sfnumber>\r\n`;
        break;
      case "string":
        template = `<sftext
      schema.bind="schema.properties.${key}"
      model.two-way="model.${key}"
      title="${form.$title || schema.title || this.toTitle(key)}"
      required.bind="${this.isRequired(key, part)}"></sftext>\r\n`;
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
    if (this.options.validateOnRender) {
      this.controller.validate();
    }
  }
}
