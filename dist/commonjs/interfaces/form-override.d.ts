import { IJsonSchemaDefinition, IJsonSchemaArrayDefinition } from "./json-schema-definition";
export interface IFormOverride {
    [key: string]: IFormOverride[] | IFormOverride | number | boolean | string | IJsonSchemaDefinition;
    $noArrayTitle?: boolean;
    $noTitle?: boolean;
    $placeholder?: string;
    $htmlClass?: string;
    $altTemplate?: string;
    $minDate?: string;
    $maxDate?: string;
    $arraySchema?: IJsonSchemaArrayDefinition;
    $schema?: IJsonSchemaDefinition;
    $required?: boolean;
    $noSeparator?: boolean;
    $step?: number;
}
