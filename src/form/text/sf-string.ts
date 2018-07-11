import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IJsonSchemaStringDefinition } from "../../interfaces/json-schema-definition";
import { IFormOverride } from "../../interfaces/form-override";
import { SchemaFormLogger } from "../../resources/logger";
import { FormInstances } from "../../services/form-instances";
import { IFormInstance } from "../../interfaces/form-instance";

@inject(
  SchemaFormConfiguration,
  RulesFactory,
  SchemaFormLogger,
  FormInstances
)
@customElement("sf-string")
export class SfString {
  @bindable form: IFormOverride;
  @bindable model: string;
  @bindable formInstance: string;

  id: string = Guid.newGuid();

  kind = "string";

  view;

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
    this.logger.info("sf-string", { form: this.form, model: this.model }, arguments);
    this.formCtrl = this.formInstances.get(this.formInstance);
    this.rules.bind(this);
    this.determineViewStrategy();
  }

  private determineViewStrategy() {
    this.view = this.configuration.templates.string;
    if (this.form.$altTemplate) {
      this.view = this.form.$altTemplate;
    } else if (this.form.$schema.enum && this.form.$schema.enum.length <= 5) {
      this.view = this.configuration.templates.stringRadioEnum;
    } else if (this.form.$schema.enum) {
      this.view = this.configuration.templates.stringSelectEnum;
    } else if (["date-time", "date", "time"].indexOf(this.form.$schema.format) > -1) {
      if (this.configuration.templates.formats
        && this.configuration.templates.formats[this.form.$schema.format]) {
        this.view = this.configuration.templates.formats[this.form.$schema.format];
      }
    }
  }
}
