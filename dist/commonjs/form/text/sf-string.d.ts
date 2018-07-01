import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IJsonSchemaStringDefinition } from "../../interfaces/json-schema-definition";
import { IFormOverride } from "../../interfaces/form";
import { SchemaFormLogger } from "../../resources/logger";
export declare class SfString {
    configuration: SchemaFormConfiguration;
    rules: RulesFactory;
    private logger;
    form: IFormOverride;
    model: string;
    schema: IJsonSchemaStringDefinition;
    id: string;
    kind: string;
    view: any;
    constructor(configuration: SchemaFormConfiguration, rules: RulesFactory, logger: SchemaFormLogger);
    bind(): void;
}
