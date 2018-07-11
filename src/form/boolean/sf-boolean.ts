import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IJsonSchemaBooleanDefinition } from "../../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form-override";
import { FormInstances } from "../../services/form-instances";
import { IFormInstance } from "../../interfaces/form-instance";

@inject(
  SchemaFormConfiguration,
  RulesFactory,
  SchemaFormLogger,
  FormInstances
)
@customElement("sf-boolean")
export class SfBoolean {
  @bindable form: IFormOverride;
  @bindable model: boolean;
  @bindable formInstance: string;

  schema: IJsonSchemaBooleanDefinition;

  id: string = Guid.newGuid();

  kind = "boolean";

  private formCtrl: IFormInstance;

  constructor(
    public configuration: SchemaFormConfiguration,
    public rules: RulesFactory,
    private logger: SchemaFormLogger,
    private formInstances: FormInstances
  ) { }

  attached() {
    this.logger.info("sf-string-attached");
    if (this.formCtrl.formOptions.validateOnRender) {
      this.formCtrl.validationController.validate({ object: this });
    }
  }

  bind() {
    this.logger.info("sf-boolean", this.form, this.model, arguments);
    this.formCtrl = this.formInstances.get(this.formInstance);
    this.schema = this.form.$schema as IJsonSchemaBooleanDefinition;
    this.rules.bind(this);
  }
}
