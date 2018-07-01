import { SchemaFormLogger } from "../resources/logger";
import { IFormOptions } from "../interfaces/form-options";
import { ValidationController } from "aurelia-validation";
import { IJsonSchemaDefinition } from "../interfaces/json-schema-definition";
export declare class FormController {
    private logger;
    options: IFormOptions;
    validationController: ValidationController;
    schema: IJsonSchemaDefinition;
    model: any;
    private log;
    constructor(logger: SchemaFormLogger, options: IFormOptions, validationController: ValidationController);
    activate(params: any, routeConfig: any, navigationInstruction: any): void;
    attached(): void;
    detached(): void;
    private validateOnRender;
    bind(): void;
}
