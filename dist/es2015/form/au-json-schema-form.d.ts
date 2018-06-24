import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { InlineViewStrategy } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
export declare class AuJsonSchemaForm {
    private globalOptions;
    schema: any;
    form: any;
    model: any;
    options: any;
    controller: ValidationController;
    viewStrategy: InlineViewStrategy;
    loaded: boolean;
    constructor(vcf: ValidationControllerFactory, globalOptions: SchemaFormConfiguration);
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
