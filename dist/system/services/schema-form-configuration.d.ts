import { ValidationRenderer } from "aurelia-validation";
import { FrameworkConfiguration } from "aurelia-framework";
import { ITemplates } from "../interfaces/templates";
export declare class SchemaFormConfiguration {
    validationRenderer: ValidationRenderer;
    templates: ITemplates;
    constructor(renderer: ValidationRenderer, templates: ITemplates, frameworkConfig: FrameworkConfiguration);
}
