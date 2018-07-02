import { ValidationRules, FluentRuleCustomizer } from "aurelia-validation";
import { inject } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { SfArray } from "../form/array/sf-array";

@inject(SchemaFormConfiguration)
export class ArrayRules {
  constructor(private configuration: SchemaFormConfiguration) { }

  register() {
    this.add();
  }

  add() {
    // uniqueItems
  }

  bind(ctrl: SfArray) {
    let rule = ValidationRules
      .ensureObject()
      .displayName(ctrl.schema.title)
      .satisfies(() => true);
    if (ctrl.form.$required) {
      rule = rule.required();
    }
    if (Number.isInteger(ctrl.schema.maxItems)) {
      rule = rule.maxItems(ctrl.schema.maxItems);
    }
    if (Number.isInteger(ctrl.schema.minItems)) {
      rule = rule.minItems(ctrl.schema.minItems);
    }
    if (ctrl.schema.uniqueItems) {
      // TODO: add unique items rule
    }
    rule.on(ctrl.model);
  }
}
