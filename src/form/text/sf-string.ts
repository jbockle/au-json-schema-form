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

  schema: IJsonSchemaStringDefinition;

  id: string = Guid.newGuid();

  kind = "string";

  view;

  constructor(
    public configuration: SchemaFormConfiguration,
    public rules: RulesFactory,
    private logger: SchemaFormLogger
  ) {
    this.view = configuration.templates.text;
  }

  bind() {
    this.logger.info("sf-string", { form: this.form, model: this.model }, arguments);
    this.schema = this.form.$schema as IJsonSchemaStringDefinition;
    this.rules.bind(this);
    if (["date-time", "date", "time"].indexOf(this.schema.format) > -1) {
      if (this.configuration.templates.formats
        && this.configuration.templates.formats[this.schema.format]) {
        this.view = this.configuration.templates.formats[this.schema.format];
      }
    }
  }
}
