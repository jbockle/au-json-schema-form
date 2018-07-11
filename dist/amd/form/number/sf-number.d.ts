import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
import { FormInstances } from "../../services/form-instances";
export declare class SfNumber {
    configuration: SchemaFormConfiguration;
    rules: RulesFactory;
    private logger;
    private formInstances;
    form: IFormOverride;
    model: number;
    formInstance: string;
    id: string;
    view: any;
    kind: string;
    private formCtrl;
    constructor(configuration: SchemaFormConfiguration, rules: RulesFactory, logger: SchemaFormLogger, formInstances: FormInstances);
    attached(): void;
    bind(): void;
    determineViewStrategy(): void;
    readonly minimum: any;
    readonly maximum: any;
}
