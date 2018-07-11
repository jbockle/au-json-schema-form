import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IJsonSchemaBooleanDefinition } from "../../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
import { FormInstances } from "../../services/form-instances";
export declare class SfBoolean {
    configuration: SchemaFormConfiguration;
    rules: RulesFactory;
    private logger;
    private formInstances;
    form: IFormOverride;
    model: boolean;
    formInstance: string;
    schema: IJsonSchemaBooleanDefinition;
    id: string;
    kind: string;
    private formCtrl;
    constructor(configuration: SchemaFormConfiguration, rules: RulesFactory, logger: SchemaFormLogger, formInstances: FormInstances);
    attached(): void;
    bind(): void;
}
