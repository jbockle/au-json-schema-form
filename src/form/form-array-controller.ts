import { SchemaFormLogger } from "../resources/logger";
import { IFormOptions } from "../interfaces/form-options";
import { ValidationController } from "aurelia-validation";

export class FormArrayController {
  model: any[];
  private log: (message: string, ...rest: any[]) => void;
}
