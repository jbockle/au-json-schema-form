import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { InlineViewStrategy } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { IFormOptions } from "../interfaces/form-options";
import { SchemaFormLogger } from "../resources/logger";
import { FormController } from "./form-controller";
import { IForm } from "../interfaces/form";
import { IJsonSchemaDefinition } from "../interfaces/json-schema-definition";
export declare class AuJsonSchemaForm {
    private logger;
    schema: IJsonSchemaDefinition;
    form: IForm;
    model: any;
    options: IFormOptions;
    validationController: ValidationController;
    formView: InlineViewStrategy;
    formController: FormController;
    private log;
    constructor(validationControllerFactory: ValidationControllerFactory, configuration: SchemaFormConfiguration, logger: SchemaFormLogger);
    bind(): void;
    buildForm(): void;
    buildViewStrategy(): void;
}
