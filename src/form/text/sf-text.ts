import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";
import { IFormController } from "../../interfaces/form-controller";

@inject(SchemaFormConfiguration, RulesFactory)
@customElement("sf-text")
export class SfText {
  @bindable schema: any;
  @bindable model: any;
  @bindable required: string;
  @bindable title: string;

  id: string = Guid.newGuid();

  kind = "string";

  constructor(
    public configuration: SchemaFormConfiguration,
    public rules: RulesFactory
  ) { }

  bind() {
    this.rules.bind(this);

    if (["date-time", "date", "time"].indexOf(this.schema.format) > -1) {
      throw new Error("not implemented, add datetime/date/time picker here");
    }
  }
}
