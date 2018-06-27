import { SchemaFormLogger } from "../resources/logger";
import { IFormOptions } from "../interfaces/form-options";
import { ValidationController } from "aurelia-validation";

export class FormController {

  constructor(
    private logger: SchemaFormLogger,
    public options: IFormOptions,
    public validationController: ValidationController) { }

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
}
