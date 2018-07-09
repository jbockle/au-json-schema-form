import { InlineViewStrategy, View } from "aurelia-framework";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
import { FormService } from "../../services/form-service";
import { Validator, ValidationController } from "aurelia-validation";
import { ArrayRules } from "../../rules/array-rules";
import { DefaultsService } from "../../services/defaults-service";
export declare class SfArray {
    arrayRules: ArrayRules;
    configuration: SchemaFormConfiguration;
    formService: FormService;
    private logger;
    validator: Validator;
    defaultsService: DefaultsService;
    form: IFormOverride;
    model: any[];
    formInstance: string;
    id: string;
    kind: string;
    view: InlineViewStrategy;
    viewStrategy: string;
    validationErrors: string[];
    validationController: ValidationController;
    constructor(arrayRules: ArrayRules, configuration: SchemaFormConfiguration, formService: FormService, logger: SchemaFormLogger, validator: Validator, defaultsService: DefaultsService);
    created(owningView: View, myView: View): void;
    bind(): Promise<void>;
    attached(): void;
    determineViewStrategy(): void;
    createView(): Promise<void>;
    private bindRules;
    getFormController(overrideContext: any): any;
    add(): void;
    remove(index: any): void;
    readonly isDisabled: boolean;
    readonly atCapacity: boolean;
    readonly atMinimumCapacity: boolean;
    validate(): Promise<import("../../../node_modules/aurelia-validation/dist/commonjs/controller-validate-result").ControllerValidateResult>;
    getErrors(): Promise<any[]>;
}
