import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
export declare class SfNumber {
    configuration: SchemaFormConfiguration;
    rules: RulesFactory;
    private logger;
    form: IFormOverride;
    model: number;
    id: string;
    view: any;
    kind: string;
    constructor(configuration: SchemaFormConfiguration, rules: RulesFactory, logger: SchemaFormLogger);
    bind(): void;
    determineViewStrategy(): void;
    readonly minimum: any;
    readonly maximum: any;
}
