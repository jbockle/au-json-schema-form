import { InlineViewStrategy } from "aurelia-framework";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
import { FormService } from "../../services/form-service";
import { FormInstances } from "../../services/form-instances";
export declare class SfObject {
    configuration: SchemaFormConfiguration;
    formService: FormService;
    private logger;
    private formInstances;
    form: IFormOverride;
    model: object;
    formInstance: string;
    id: string;
    kind: string;
    view: InlineViewStrategy;
    private formCtrl;
    constructor(configuration: SchemaFormConfiguration, formService: FormService, logger: SchemaFormLogger, formInstances: FormInstances);
    attached(): void;
    bind(): Promise<void>;
}
