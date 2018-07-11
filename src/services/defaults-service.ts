import { inject } from "aurelia-framework";
import { SchemaFormLogger } from "../resources/logger";
import {
  IJsonSchemaObjectDefinition,
  IJsonSchemaArrayDefinition,
  IJsonSchemaDefinition
} from "../interfaces/json-schema-definition";

@inject(SchemaFormLogger)
export class DefaultsService {

  constructor(private logger: SchemaFormLogger) { }

  async getSchemaDefaultAsync(schema: IJsonSchemaDefinition, model: any) {
    this.logger.info("getSchemaDefaultAsync", { schema, model })
    switch (schema.type) {
      case "array":
        model = await this.getArrayDefaultAsync(model, schema.items);
      case "object":
        model = await this.getObjectDefaultAsync(model, (schema as IJsonSchemaObjectDefinition));
      default:
        model = await this.getPrimitiveDefaultAsync(model, schema);
    }
    return model;
  }

  async getPrimitiveDefaultAsync(model: any, schema: IJsonSchemaDefinition) {
    let value: any;
    if (schema.type === "boolean") {
      value = false;
    }
    return model || schema.const || schema.default || value;
  }

  async getArrayDefaultAsync(model: any, schema: IJsonSchemaArrayDefinition): Promise<any[]> {
    return model || [];
  }

  async getObjectDefaultAsync(model: object, schema: IJsonSchemaObjectDefinition) {
    this.logger.warn("getObjectModelDefaults", { model, schema });
    model = model || {};
    if (schema.properties) {
      for (const property in schema.properties) {
        model[property] = await this.getSchemaDefaultAsync(schema.properties[property], model[property]);
      }
    }
    return model;
  }
}
