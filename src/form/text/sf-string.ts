import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IJsonSchemaStringDefinition } from "../../interfaces/json-schema-definition";
import { IFormOverride } from "../../interfaces/form-override";
import { SchemaFormLogger } from "../../resources/logger";

@inject(SchemaFormConfiguration, RulesFactory, SchemaFormLogger)
@customElement("sf-string")
export class SfString {
  @bindable form: IFormOverride;
  @bindable model: string;

  id: string = Guid.newGuid();

  kind = "string";

  view;

  constructor(
    public configuration: SchemaFormConfiguration,
    public rules: RulesFactory,
    private logger: SchemaFormLogger
  ) {
    this.view = configuration.templates.string;
  }

  bind() {
    this.logger.info("sf-string", { form: this.form, model: this.model }, arguments);
    this.rules.bind(this);
    this.determineViewStrategy();
  }

  private determineViewStrategy() {
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
