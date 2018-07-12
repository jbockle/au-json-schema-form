import {
  IJsonSchemaDefinition,
  IJsonSchemaObjectDefinition
} from "./json-schema-definition";
import { getLogger } from "aurelia-logging";

export interface IFormOverride {
  [key: string]: IFormOverride[] | IFormOverride | number | boolean | string | IJsonSchemaDefinition | ITemplateElement;
  _element?: ITemplateElement;
  $noTitle?: boolean;
  $arrayItem?: IFormOverride;
  $noEmptyArrayInitialization?: boolean;
  $notRemovable?: boolean;
  $arrayAsTabs?: boolean;
  $tabTitle?: string;
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
    .info("setFormOverrides", { form, parentSchema, formKey, schema });
  schema.title = schema.title || (!!formKey ? fromCamelCase(formKey) : undefined);
  form.$schema = schema;

  if (parentSchema && parentSchema.type === "object") {
    form.$required = form.$required || (parentSchema.required
      ? (parentSchema as IJsonSchemaObjectDefinition).required.indexOf(formKey) > -1 : false);
  }
}

function fromCamelCase(val: string) {
  return val
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (str) => str.toUpperCase());
}

/** Used to declare a completely separate module that does
 * not perform standard validation, implement view/view-model however you want.
 */
export interface ITemplateElement {

  /** @property the element to append to template, make sure you have added it's moduleName to globalResources */
  elementName: string;

  /** the schema's key to parse, binds form (to-view) and model(two-way) to your module
   * @property If schemaKey is specified, your module must have:
   *   bindable schema: IJsonSchemaDefinition;
   *   bindable model: any or model type;
   *   If schemaKey is ommitted, no bindings are made
   */
  schemaKey?: string;
}

const templateModuleMarker: string = "_element";

export function isTemplateModule(key: string): boolean {
  return key === templateModuleMarker;
}
