import { singleton } from "aurelia-framework";
import { IFormInstance } from "../interfaces/form-instance";
import { IJsonSchemaDefinition } from "../interfaces/json-schema-definition";
import { IFormOverride } from "../interfaces/form-override";
import { FormController } from "../form/form-controller";

@singleton()
export class FormInstances {
  private instances: {
    [key: string]: IFormInstance
  } = {};

  set(key: string, instance: IFormInstance) {
    this.instances[key] = instance;
  }

  get(key: string) {
    return this.instances[key];
  }
}
