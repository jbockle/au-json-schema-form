import { InlineViewStrategy } from "aurelia-framework";
import { IJsonSchemaArrayDefinition } from "../../interfaces/json-schema-definition";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IForm } from "../../interfaces/form";
import { FormService } from "../../services/form-service";
export declare class SfArray {
    configuration: SchemaFormConfiguration;
    formService: FormService;
    private logger;
    form: IForm;
    key: string;
    model: any[];
    schema: IJsonSchemaArrayDefinition;
    id: string;
    kind: string;
    view: InlineViewStrategy;
    constructor(configuration: SchemaFormConfiguration, formService: FormService, logger: SchemaFormLogger);
    bind(): void;
    add(): void;
    remove(index: any): void;
}
