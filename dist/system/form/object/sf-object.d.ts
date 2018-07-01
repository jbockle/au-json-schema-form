import { InlineViewStrategy } from "aurelia-framework";
import { IJsonSchemaObjectDefinition } from "../../interfaces/json-schema-definition";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IForm } from "../../interfaces/form";
import { FormService } from "../../services/form-service";
export declare class SfObject {
    configuration: SchemaFormConfiguration;
    formService: FormService;
    private logger;
    form: IForm;
    model: object;
    schema: IJsonSchemaObjectDefinition;
    id: string;
    kind: string;
    view: InlineViewStrategy;
    constructor(configuration: SchemaFormConfiguration, formService: FormService, logger: SchemaFormLogger);
    bind(): void;
}
