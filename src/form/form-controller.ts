import { SchemaFormLogger } from "../resources/logger";
import { IFormOptions } from "../interfaces/form-options";
import { ValidationController, ValidateEvent } from "aurelia-validation";
import { IJsonSchemaDefinition } from "../interfaces/json-schema-definition";
import { IFormOverride } from "../interfaces/form-override";

export class FormController {

  public form: IFormOverride;
  public model: any;

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

  bind(bindingContext: object, overrideContext: object) {
    this.logger.info("form-controller binded", { bindingContext, overrideContext });
  }

  attached() {
    this.logger.info("schemaform-attached");
    this.validateOnRender();
  }

  detached() {
    this.logger.info("schemaform-detached");
  }

  validateOnRender() {
    if (this.options.validateOnRender) {
      this.logger.info("schemaform-attached:validate");
      this.validationController.validate();
    }
  }
}
