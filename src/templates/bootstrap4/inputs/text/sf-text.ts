import { ValidationRules } from "aurelia-validation";
import { bindable } from "aurelia-framework";
import { Guid } from "templates/bootstrap4/resources/guid";

export class SfText {
  @bindable schema: any;
  @bindable model: any;
  @bindable required: string;
  @bindable title: string;

  id: string = Guid.newGuid();

  bind() {
    let rule = ValidationRules
      .ensure("model")
      .displayName(this.title)
      .satisfies(() => true);
    if (this.schema.pattern) {
      rule = rule.matches(this.schema.pattern);
    }
    if (this.schema.minLength) {
      rule = rule.minLength(this.schema.minLength);
    }
    if (this.required) {
      rule = rule.required();
    }
    rule.on(this);
  }
}
