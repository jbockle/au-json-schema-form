import { ValidationControllerFactory, ValidationController } from "aurelia-validation";
import { InlineViewStrategy } from "aurelia-framework";
import { GlobalOptions } from "../services/global-options";
import { IFormOptions } from "../interfaces/form-options";
export declare class AuSchemaForm {
    private globalOptions;
    schema: any;
    form: any;
    model: any;
    options: IFormOptions;
    controller: ValidationController;
    viewStrategy: InlineViewStrategy;
    loaded: boolean;
    constructor(vcf: ValidationControllerFactory, globalOptions: GlobalOptions);
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
