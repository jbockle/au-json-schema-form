import { IJsonSchemaDefinition } from "./json-schema-definition";
import { ITemplateModule } from "./template";
export interface IFormOverride {
    [key: string]: IFormOverride[] | IFormOverride | number | boolean | string | IJsonSchemaDefinition | ITemplateModule;
    _template: ITemplateModule;
    $noTitle?: boolean;
    $arrayItem?: IFormOverride;
    $noEmptyArrayInitialization?: boolean;
    $notRemovable?: boolean;
    $arrayAsTabs?: boolean;
    $tabTitle?: string;
    $placeholder?: string;
    $htmlClass?: string;
    $altTemplate?: string;
    $minDate?: string;
    $maxDate?: string;
    $schema?: IJsonSchemaDefinition;
    $required?: boolean;
    $noSeparator?: boolean;
    $step?: number;
    $parentForm?: IFormOverride;
}
export declare function isOverride(key: string): boolean;
export declare function setFormOverrides(form: IFormOverride, parentSchema: IJsonSchemaDefinition, formKey: string, schema: IJsonSchemaDefinition): void;
