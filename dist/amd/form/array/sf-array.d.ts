import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
export declare class SfArray {
    configuration: SchemaFormConfiguration;
    rules: RulesFactory;
    schema: any;
    model: any[];
    required: string;
    title: string;
    id: string;
    kind: string;
    constructor(configuration: SchemaFormConfiguration, rules: RulesFactory);
    bind(): void;
}
