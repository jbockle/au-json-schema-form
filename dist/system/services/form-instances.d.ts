import { IFormInstance } from "../interfaces/form-instance";
import { SchemaFormLogger } from "../resources/logger";
export declare class FormInstances {
    private logger;
    private instances;
    constructor(logger: SchemaFormLogger);
    set(key: string, instance: IFormInstance): void;
    get(key: string): IFormInstance;
}
