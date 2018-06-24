import { ValidationRules } from "aurelia-validation";
import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";

@inject(SchemaFormConfiguration)
@customElement("sf-text")
export class SfText {
  @bindable schema: any;
  @bindable model: any;
  @bindable required: string;
  @bindable title: string;

  id: string = Guid.newGuid();

  constructor(public configuration: SchemaFormConfiguration) { }

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
