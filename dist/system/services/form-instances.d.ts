import { IFormInstance } from "../interfaces/form-instance";
export declare class FormInstances {
    private instances;
    set(key: string, instance: IFormInstance): void;
    get(key: string): IFormInstance;
}
