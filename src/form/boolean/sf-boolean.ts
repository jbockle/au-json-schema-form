import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IJsonSchemaBooleanDefinition } from "../../interfaces/json-schema-definition";
import { SchemaFormLogger } from "../../resources/logger";
import { IFormOverride } from "../../interfaces/form";

@inject(SchemaFormConfiguration, RulesFactory, SchemaFormLogger)
@customElement("sf-boolean")
export class SfBoolean {
  @bindable form: IFormOverride;
  @bindable model: boolean;

  schema: IJsonSchemaBooleanDefinition;

  id: string = Guid.newGuid();

  kind = "boolean";

  constructor(
    public configuration: SchemaFormConfiguration,
    public rules: RulesFactory,
    private logger: SchemaFormLogger
  ) { }

  bind() {
    this.logger.info("sf-boolean", this.form, this.model, arguments);
    this.schema = this.form.$schema as IJsonSchemaBooleanDefinition;
    this.rules.bind(this);
  }
}
