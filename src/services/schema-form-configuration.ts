import { ValidationRenderer } from "aurelia-validation";
import { ITemplates } from "../interfaces/templates";
import { IValidationMessages } from "../interfaces/validation-messages";

export class SchemaFormConfiguration {
  validationRenderer: ValidationRenderer;
  templates: ITemplates;
  messages: IValidationMessages;

  constructor(
    renderer: ValidationRenderer,
    templates: ITemplates,
    messages: IValidationMessages) {
    this.validationRenderer = renderer;
    this.templates = templates;
    this.messages = messages;
  }
}
