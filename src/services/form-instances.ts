import { singleton, inject } from "aurelia-framework";
import { IFormInstance } from "../interfaces/form-instance";
import { IJsonSchemaDefinition } from "../interfaces/json-schema-definition";
import { IFormOverride } from "../interfaces/form-override";
import { FormController } from "../form/form-controller";
import { SchemaFormLogger } from "../resources/logger";

@singleton()
@inject(SchemaFormLogger)
export class FormInstances {
  private instances: {
    [key: string]: IFormInstance
  } = {};

  constructor(private logger: SchemaFormLogger) { }

  set(key: string, instance: IFormInstance) {
    this.logger.warn("setting form instance", { key, instance });
    this.instances[key] = instance;
  }

  get(key: string) {
    this.logger.warn("getting form instance", { key, instances: this.instances });
    return this.instances[key];
  }
}
