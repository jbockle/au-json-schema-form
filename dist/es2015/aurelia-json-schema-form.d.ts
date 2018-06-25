import { FrameworkConfiguration } from "aurelia-framework";
import { ValidationRenderer } from "aurelia-validation";
import { ITemplates } from "./interfaces/templates";
import { AuJsonSchemaForm } from "./form/au-json-schema-form";
import { GetBootstrapTemplates } from "./templates/bootstrap4/index";
import { IValidationMessages } from "./interfaces/validation-messages";
interface ISchemaFormConfiguration {
    /**
     * @property the renderer to display error, success and more on form elements
     */
    validationRenderer?: ValidationRenderer;
    /**
     * @property the list of dependencies used to generate form elements
     */
    templates?: ITemplates;
    /**
     * @property list of overrides for validation messages
     */
    validationMessages?: IValidationMessages;
    /**
     * @property sets the log level, default is none
     */
    logLevel?: number;
}
declare function configure(frameworkConfig: FrameworkConfiguration, options?: ISchemaFormConfiguration): void;
export { AuJsonSchemaForm, GetBootstrapTemplates, ISchemaFormConfiguration, configure };
