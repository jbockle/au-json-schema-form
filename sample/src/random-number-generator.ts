import { bindable } from "aurelia-framework";
import { IJsonSchemaDefinition } from "aurelia-json-schema-form";

export class RandomNumberGenerator {
  @bindable schema: IJsonSchemaDefinition;
  @bindable model: number;

  bind() {
    console.log({ schema: this.schema, model: this.model });
  }

  generate() {
    this.model = Math.random();
  }
}
