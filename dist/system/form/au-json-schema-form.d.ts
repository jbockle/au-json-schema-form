import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { InlineViewStrategy } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { RulesFactory } from "../rules/rules-factory";
import { IFormOptions } from "../interfaces/form-options";
import { SchemaFormLogger } from "../resources/logger";
import { FormController } from "./form-controller";
export declare class AuJsonSchemaForm {
    private logger;
    schema: any;
    form: any;
    model: any;
    options: IFormOptions;
    validationController: ValidationController;
    formView: InlineViewStrategy;
    formController: FormController;
    loaded: boolean;
    constructor(validationControllerFactory: ValidationControllerFactory, configuration: SchemaFormConfiguration, rulesFactory: RulesFactory, logger: SchemaFormLogger);
    bind(): void;
    schemaChanged(): void;
    formChanged(): void;
    buildForm(): void;
    buildViewStrategy(): void;
    getSchemaTemplate(key: string, form: any, part?: any): string;
    isRequired(key: string, part: any): boolean;
    toTitle(key: string): string;
}
