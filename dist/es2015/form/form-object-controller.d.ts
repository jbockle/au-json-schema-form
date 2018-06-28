import { SchemaFormLogger } from "../resources/logger";
import { IFormOptions } from "../interfaces/form-options";
import { ValidationController } from "aurelia-validation";
export declare class FormObjectController {
    private logger;
    options: IFormOptions;
    validationController: ValidationController;
    model: object;
    private log;
    constructor(logger: SchemaFormLogger, options: IFormOptions, validationController: ValidationController);
    activate(params: any, routeConfig: any, navigationInstruction: any): void;
    attached(): void;
    detached(): void;
    private validateOnRender;
}
