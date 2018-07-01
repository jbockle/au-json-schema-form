import { SchemaFormLogger } from "../resources/logger";
import { IFormOptions } from "../interfaces/form-options";
import { ValidationController } from "aurelia-validation";
import { IJsonSchemaDefinition } from "../interfaces/json-schema-definition";

export class FormController {

  public schema: IJsonSchemaDefinition;
  public model;

  private log: (message: string, ...rest: any[]) => void;

  constructor(
    private logger: SchemaFormLogger,
    public options: IFormOptions,
    public validationController: ValidationController
  ) {
    this.log = this.logger.info;
    this.log("building form controller", arguments);
  }

  activate(params, routeConfig, navigationInstruction) {
    this.logger.debug("schemaform-activate", { params, routeConfig, navigationInstruction });
  }

  attached() {
    this.logger.info("schemaform-attached");
    this.validateOnRender();
  }

  detached() {
    this.logger.info("schemaform-detached");
  }

  private validateOnRender() {
    if (this.options.validateOnRender) {
      this.logger.info("schemaform-attached:validate");
      this.validationController.validate();
    }
  }

  bind() {
    this.logger.info("form-controller binded", arguments);
  }
}
