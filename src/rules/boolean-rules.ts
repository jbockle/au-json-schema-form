import { ValidationRules, FluentRuleCustomizer } from "aurelia-validation";
import { inject } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { SfNumber } from "../form/number/sf-number";
import { SfBoolean } from "../form/boolean/sf-boolean";

@inject(SchemaFormConfiguration)
export class BooleanRules {
  constructor(private configuration: SchemaFormConfiguration) { }

  register() {
    this.add();
  }

  add() {
    // nothing specific to booleans
  }

  bind(ctrl: SfBoolean, rule: FluentRuleCustomizer<{}, any>) {
    // nothing specific to booleans
  }
}
