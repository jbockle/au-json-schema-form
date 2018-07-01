import { IJsonSchemaObjectDefinition } from "../interfaces/json-schema-definition";
import { IForm, IFormOverride } from "../interfaces/form";
import { SchemaFormLogger } from "../resources/logger";
export declare class FormService {
    private logger;
    readonly containerMarker: string;
    readonly overrideMarker: string;
    constructor(logger: SchemaFormLogger);
    buildObjectForm(schema: IJsonSchemaObjectDefinition, form: IForm, model: object, segment?: string): string;
    isOverride(key: string): boolean;
    isContainer(key: string): boolean;
    getOverride(form: IForm, formKey: string, schema: IJsonSchemaObjectDefinition): IFormOverride;
    getTitle(key: string): string;
    getObjectModelDefaults(model: object, schema: IJsonSchemaObjectDefinition): object;
    getEmmetContainer(key: string): {
        start: string;
        end: string;
    };
    getEmmetWrapper(key: string, wrapper: {
        start?: string;
        end?: string;
    }): {
        start?: string;
        end?: string;
    };
    applyEmmetEnd(wrapper: {
        start?: string;
        end?: string;
    }, template: string): string;
    applyEmmetStart(wrapper: {
        start?: string;
        end?: string;
    }, template: string): string;
}
