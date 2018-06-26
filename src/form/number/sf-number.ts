import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";

@inject(SchemaFormConfiguration, RulesFactory)
@customElement("sf-number")
export class SfNumber {
  @bindable schema: any;
  @bindable model: number;
  @bindable required: string;
  @bindable title: string;

  id: string = Guid.newGuid();

  kind = "number";

  constructor(
    public configuration: SchemaFormConfiguration,
    public rules: RulesFactory
  ) { }

  bind() {
    this.rules.bind(this);
  }
}
