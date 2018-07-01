import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IJsonSchemaNumberDefinition } from "../../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form";

@inject(SchemaFormConfiguration, RulesFactory, SchemaFormLogger)
@customElement("sf-number")
export class SfNumber {
  @bindable form: IFormOverride;
  @bindable model: number;

  schema: IJsonSchemaNumberDefinition;

  id: string = Guid.newGuid();

  kind = "number";

  constructor(
    public configuration: SchemaFormConfiguration,
    public rules: RulesFactory,
    private logger: SchemaFormLogger
  ) { }

  bind() {
    this.logger.info("sf-number", this.form, this.model, arguments);
    this.schema = this.form.$schema as IJsonSchemaNumberDefinition;
    this.rules.bind(this);
  }
}
