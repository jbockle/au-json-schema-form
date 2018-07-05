import { singleton } from "aurelia-framework";
import { IFormInstance } from "../interfaces/form-instance";

@singleton()
export class FormInstances {
  private instances: {
    [key: string]: IFormInstance
  };

  set(key: string, instance: IFormInstance) {
    this.instances[key] = instance;
  }

  get(key: string) {
    return this.instances[key];
  }
}
