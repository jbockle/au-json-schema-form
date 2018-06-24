import { ValidationRules } from "aurelia-validation";
import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";

@inject(SchemaFormConfiguration)
@customElement("sf-number")
export class SfNumber {
  @bindable schema: any;
  @bindable model: number;
  @bindable required: string;
  @bindable title: string;

  id: string = Guid.newGuid();

  constructor(public configuration: SchemaFormConfiguration) { }

  bind() {
    let rule = ValidationRules
      .ensure("model")
      .displayName(this.title)
      .satisfies(() => true);
    if (this.required) {
      rule = rule.required();
    }
    if (this.schema.minimum) {
      rule = rule.satisfiesRule("minimum", this.schema.minimum);
    }
    rule.on(this);
  }
}
