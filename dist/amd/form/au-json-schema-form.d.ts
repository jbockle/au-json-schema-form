import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { InlineViewStrategy } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { RulesFactory } from "../rules/rules-factory";
export declare class AuJsonSchemaForm {
    schema: any;
    form: any;
    model: any;
    options: any;
    controller: ValidationController;
    viewStrategy: InlineViewStrategy;
    loaded: boolean;
    constructor(validationControllerFactory: ValidationControllerFactory, configuration: SchemaFormConfiguration, rulesFactory: RulesFactory);
    bind(): void;
    schemaChanged(): void;
    formChanged(): void;
    buildViewStrategy(): void;
    getSchemaTemplate(key: string, form: any, part?: any): string;
    private getDefaultTemplate;
    isRequired(key: string, part: any): boolean;
    toTitle(key: string): string;
    attached(): void;
}
