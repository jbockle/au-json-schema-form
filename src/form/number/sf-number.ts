import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IJsonSchemaNumberDefinition } from "../../interfaces/json-schema-definition";
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
@customElement("sf-number")
export class SfNumber {
  @bindable form: IFormOverride;
  @bindable model: number;
  @bindable formInstance: string;

  id: string = Guid.newGuid();

  view;

  kind = "number";

  private formCtrl: IFormInstance;

  constructor(
    public configuration: SchemaFormConfiguration,
    public rules: RulesFactory,
    private logger: SchemaFormLogger,
    private formInstances: FormInstances
  ) { }

  attached() {
    this.logger.info("sf-number-attached");
    if (this.formCtrl.formOptions.validateOnRender) {
      this.formCtrl.validationController.validate({ object: this });
    }
  }

  bind() {
    this.logger.info("sf-number", this.form, this.model, arguments);
    this.formCtrl = this.formInstances.get(this.formInstance);
    this.form.$schema = this.form.$schema as IJsonSchemaNumberDefinition;
    this.rules.bind(this);
    this.form.$step = this.form.$step || 1;
    this.determineViewStrategy();
  }

  determineViewStrategy() {
    this.view = this.configuration.templates.number;
    if (this.form.$altTemplate) {
      this.view = this.form.$altTemplate;
    } else if (this.minimum !== undefined && this.maximum !== undefined) {
      this.view = this.configuration.templates.numberRange;
    }
  }

  get minimum() {
    if (Number.isInteger(this.form.$schema.minimum)) {
      return this.form.$schema.minimum;
    } else if (Number.isInteger(this.form.$schema.exclusiveMinimum)) {
      return this.form.$schema.exclusiveMinimum + this.form.$step;
    }
  }

  get maximum() {
    if (Number.isInteger(this.form.$schema.maximum)) {
      return this.form.$schema.maximum;
    } else if (Number.isInteger(this.form.$schema.exclusiveMaximum)) {
      return this.form.$schema.exclusiveMaximum - this.form.$step;
    }
  }
}
