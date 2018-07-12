import "./resources/number";
import { FrameworkConfiguration } from "aurelia-framework";
import { ValidationRenderer } from "aurelia-validation";
import { ITemplates } from "./interfaces/templates";
import { IValidationMessages } from "./interfaces/validation-messages";
import { IFormOptions } from "./interfaces/form-options";
import { AuJsonSchemaForm } from "./form/au-json-schema-form";
import { IJsonSchemaDefinition, IJsonSchemaArrayDefinition, IJsonSchemaObjectDefinition, IJsonSchemaNumberDefinition, IJsonSchemaStringDefinition, IJsonSchemaBooleanDefinition } from "./interfaces/json-schema-definition";
import { IFormOverride, ITemplateElement } from "./interfaces/form-override";
declare class PluginOptions {
    /**
     * @property modifies DOM to display error/success states
     * @default BootstrapValidationRenderer "targets Bootstrap v4"
     */
    validationRenderer: ValidationRenderer;
    /**
     * @property defines moduleNames of form elements
     * @default bootstrap4 "pre-defined custom elements"
     */
    templates: ITemplates;
    /**
     * @property global validation message overrides, choose which messages you want to override (default)
     * @default empty "use validator's default message"
     */
    validationMessages: IValidationMessages;
    /**
     * @property sets the log level (available values from LogManager.logLevel)
     * @default none "only initialization is logged"
     */
    logLevel: number;
    constructor();
}
declare function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: PluginOptions) => void): void;
export { configure, ITemplates, IValidationMessages, PluginOptions, IFormOptions, AuJsonSchemaForm, IFormOverride, ITemplateElement, IJsonSchemaDefinition, IJsonSchemaArrayDefinition, IJsonSchemaObjectDefinition, IJsonSchemaNumberDefinition, IJsonSchemaStringDefinition, IJsonSchemaBooleanDefinition };
