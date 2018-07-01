import { IJsonSchemaDefinition } from "../../interfaces/json-schema-definition";
import { noView } from "aurelia-framework";

@noView()
export class SfArrayItem {
  model;
  schema: IJsonSchemaDefinition;
}
