import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
export declare class SfNumber {
    configuration: SchemaFormConfiguration;
    rules: RulesFactory;
    schema: any;
    model: number;
    required: string;
    title: string;
    id: string;
    kind: string;
    constructor(configuration: SchemaFormConfiguration, rules: RulesFactory);
    bind(): void;
}
