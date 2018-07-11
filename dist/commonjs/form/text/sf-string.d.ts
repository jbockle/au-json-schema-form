import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IFormOverride } from "../../interfaces/form-override";
import { SchemaFormLogger } from "../../resources/logger";
import { FormInstances } from "../../services/form-instances";
export declare class SfString {
    configuration: SchemaFormConfiguration;
    rules: RulesFactory;
    private logger;
    private formInstances;
    form: IFormOverride;
    model: string;
    formInstance: string;
    id: string;
    kind: string;
    view: any;
    private formCtrl;
    constructor(configuration: SchemaFormConfiguration, rules: RulesFactory, logger: SchemaFormLogger, formInstances: FormInstances);
    attached(): void;
    bind(): void;
    private determineViewStrategy;
}
