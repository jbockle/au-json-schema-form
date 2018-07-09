import {
  IJsonSchemaDefinition,
  IJsonSchemaArrayDefinition,
  IJsonSchemaObjectDefinition
} from "./json-schema-definition";
import { getLogger } from "aurelia-logging";
import { fromCamelCase } from "../resources/string";

export interface IFormOverride {
  [key: string]: IFormOverride[] | IFormOverride | number | boolean | string | IJsonSchemaDefinition;
  $noTitle?: boolean;
  $placeholder?: string;
  $htmlClass?: string;
  $altTemplate?: string;
  $minDate?: string; // yyyy-MM-dd
  $maxDate?: string; // yyyy-MM-dd
  $schema?: IJsonSchemaDefinition;
  $required?: boolean;
  $noSeparator?: boolean;
  $step?: number; // range slider steps
  $parentForm?: IFormOverride;
}

const overrideMarker: string = "$";
export function isOverride(key: string) {
  const val = key.charAt(0) === overrideMarker;

  getLogger("aurelia-json-schema-form")
    .info("isOverride", { key, val });
  return val;
}

export function setFormOverrides(
  form: IFormOverride, parentSchema: IJsonSchemaDefinition, formKey: string, schema: IJsonSchemaDefinition
) {
  getLogger("aurelia-json-schema-form")
    .info("setOverrideOptions", { form, parentSchema, formKey, schema });
  schema.title = schema.title || !!formKey ? fromCamelCase(formKey) : undefined;
  form.$schema = schema;

  if (parentSchema && parentSchema.type === "object") {
    form.$required = parentSchema.required
      ? (parentSchema as IJsonSchemaObjectDefinition).required.indexOf(formKey) > -1 : false;
  }
}
