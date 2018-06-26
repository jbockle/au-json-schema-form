import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
import { RulesFactory } from "../../rules/rules-factory";

@inject(SchemaFormConfiguration, RulesFactory)
@customElement("sf-array")
export class SfArray {
  @bindable schema: any;
  @bindable model: any[];
  @bindable required: string;
  @bindable title: string;

  id: string = Guid.newGuid();

  kind = "array";

  constructor(
    public configuration: SchemaFormConfiguration,
    public rules: RulesFactory
  ) { }

  bind() {
    this.rules.bind(this);
  }
}
