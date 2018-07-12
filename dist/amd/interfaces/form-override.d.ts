import { IJsonSchemaDefinition } from "./json-schema-definition";
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
export declare function isTemplateModule(key: string): boolean;
