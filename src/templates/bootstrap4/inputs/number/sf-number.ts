import { ValidationRules } from "aurelia-validation";
import { bindable } from "aurelia-framework";
import { Guid } from "templates/bootstrap4/resources/guid";

export class SfNumber {
  @bindable schema: any;
  @bindable model: number;
  @bindable required: string;
  @bindable title: string;

  id: string = Guid.newGuid();

  bind() {
    let rule = ValidationRules
      .ensure("model")
      .displayName(this.title)
      .satisfies(() => true);
    if (this.required) {
      rule = rule.required();
    }
    if (Number.isInteger(this.schema.minimum)) {
      rule = rule.satisfiesRule("minimum", this.schema.minimum);
    }
    rule.on(this);
  }
}
