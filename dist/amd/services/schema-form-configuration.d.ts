import { ValidationRenderer } from "aurelia-validation";
import { ITemplates } from "../interfaces/templates";
import { IValidationMessages } from "../interfaces/validation-messages";
export declare class SchemaFormConfiguration {
    validationRenderer: ValidationRenderer;
    templates: ITemplates;
    messages: IValidationMessages;
    constructor(renderer: ValidationRenderer, templates: ITemplates, messages: IValidationMessages);
}
