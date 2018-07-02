import {
  IJsonSchemaDefinition,
  IJsonSchemaArrayDefinition
} from "./json-schema-definition";

export interface IFormOverride {
  [key: string]: IFormOverride[] | IFormOverride | boolean | string | IJsonSchemaDefinition;
  $noArrayTitle?: boolean;
  $noTitle?: boolean;
  $placeholder?: string;
  $htmlClass?: string;
  $altTemplate?: string;
  $minDate?: string; // yyyy-MM-dd
  $maxDate?: string; // yyyy-MM-dd
  $arraySchema?: IJsonSchemaArrayDefinition;
  $schema?: IJsonSchemaDefinition;
  $required?: boolean;
  $noSeparator?: boolean;
}
