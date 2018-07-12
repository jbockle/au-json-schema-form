export interface ITemplateStore {
  content: string;
}

/** Used to declare a completely separate module that does
 * not perform standard validation, implement view/view-model however you want.
 */
export interface ITemplateModule {

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

const templateModuleMarker: string = "_template";

export function isTemplateModule(key: string): boolean {
  return key === templateModuleMarker;
}
