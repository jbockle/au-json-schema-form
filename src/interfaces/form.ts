import {
  IJsonSchemaDefinition,
  IJsonSchemaArrayDefinition,
  IJsonSchemaObjectDefinition,
  IJsonSchemaNumberDefinition,
  IJsonSchemaStringDefinition,
  IJsonSchemaBooleanDefinition
} from "./json-schema-definition";

// tslint:disable:max-line-length

export interface IForm {
  [key: string]: IForm[] | IFormOverride;
}

export interface IFormOverride {
  [key: string]: IForm[] | IFormOverride | boolean | string | IJsonSchemaDefinition;
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
