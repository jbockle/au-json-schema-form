import { SchemaFormLogger } from "../resources/logger";
import { IFormOptions } from "../interfaces/form-options";
import { ValidationController } from "aurelia-validation";
export declare class FormController {
    private logger;
    options: IFormOptions;
    validationController: ValidationController;
    constructor(logger: SchemaFormLogger, options: IFormOptions, validationController: ValidationController);
    activate(params: any, routeConfig: any, navigationInstruction: any): void;
    attached(): void;
    detached(): void;
    private validateOnRender;
}
