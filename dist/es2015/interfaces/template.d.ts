export interface ITemplateStore {
    content: string;
}
/** Used to declare a completely separate module that does
 * not perform standard validation, implement view/view-model however you want.
 */
export interface ITemplateModule {
    /** moduleName
     * @property the module name to resolve
     */
    moduleName: string;
    /** the schema's key to parse, binds form (to-view) and model(two-way) to your module
     * @property If schemaKey is specified, your module must have:
     *   bindable schema: IJsonSchemaDefinition;
     *   bindable model: any or model type;
     *   If schemaKey is ommitted, no bindings are made
     */
    schemaKey?: string;
}
export declare function isTemplateModule(key: string): boolean;
