import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IJsonSchemaBooleanDefinition } from "../../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
export declare class SfBoolean {
    configuration: SchemaFormConfiguration;
    rules: RulesFactory;
    private logger;
    form: IFormOverride;
    model: boolean;
    schema: IJsonSchemaBooleanDefinition;
    id: string;
    kind: string;
    constructor(configuration: SchemaFormConfiguration, rules: RulesFactory, logger: SchemaFormLogger);
    bind(): void;
}
