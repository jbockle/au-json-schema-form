import {
  IJsonSchemaDefinition,
  IJsonSchemaArrayDefinition,
  IJsonSchemaObjectDefinition,
  IJsonSchemaNumberDefinition,
  IJsonSchemaStringDefinition
} from "./json-schema-definition";

// tslint:disable:max-line-length

export interface IForm {
  [key: string]: IForm[] | IFormOverride;
}

export interface IFormOverride {
  [key: string]: IForm[] | IFormOverride | boolean | string |
  IJsonSchemaDefinition | IJsonSchemaArrayDefinition | IJsonSchemaObjectDefinition | IJsonSchemaNumberDefinition | IJsonSchemaStringDefinition;
  $noArrayTitle?: boolean;
  $noTitle?: boolean;
  $placeholder?: string;
  $htmlClass?: string;
  $altTemplate?: string;
  $minDate?: string; // yyyy-MM-dd
  $maxDate?: string; // yyyy-MM-dd
  $arraySchema?: IJsonSchemaDefinition | IJsonSchemaArrayDefinition | IJsonSchemaObjectDefinition | IJsonSchemaNumberDefinition | IJsonSchemaStringDefinition;
  $schema?: IJsonSchemaDefinition | IJsonSchemaArrayDefinition | IJsonSchemaObjectDefinition | IJsonSchemaNumberDefinition | IJsonSchemaStringDefinition;
  $required?: boolean;
}
