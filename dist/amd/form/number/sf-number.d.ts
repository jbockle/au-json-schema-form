import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IJsonSchemaNumberDefinition } from "../../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
export declare class SfNumber {
    configuration: SchemaFormConfiguration;
    rules: RulesFactory;
    private logger;
    form: IFormOverride;
    model: number;
    schema: IJsonSchemaNumberDefinition;
    id: string;
    kind: string;
    constructor(configuration: SchemaFormConfiguration, rules: RulesFactory, logger: SchemaFormLogger);
    bind(): void;
}
