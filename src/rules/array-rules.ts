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
    // minimum
    ValidationRules
      .customRule(
        "minimum",
        (val, obj, min) => val !== undefined ? val >= min : true,
        this.configuration.messages.minimum || "${$displayName} must be greater than or equal to ${$config.min}",
        (min) => ({ min })
      );

    // exclusionMinimum
    ValidationRules
      .customRule(
        "exclusiveMinimum",
        (val, obj, min) => val !== undefined ? val > min : true,
        this.configuration.messages.exclusiveMinimum || "${$displayName} must be greater than ${$config.min}",
        (min) => ({ min })
      );

    // maximum
    ValidationRules
      .customRule(
        "maximum",
        (val, obj, max) => val !== undefined ? val <= max : true,
        this.configuration.messages.maximum || "${$displayName} must be less than or equal to ${$config.max}",
        (max) => ({ max })
      );

    // exclusiveMaximum
    ValidationRules
      .customRule(
        "exclusiveMaximum",
        (val, obj, max) => val !== undefined ? val < max : true,
        this.configuration.messages.exclusiveMaximum || "${$displayName} must be less than ${$config.max}",
        (max) => ({ max })
      );

    // multipleOf
    ValidationRules
      .customRule(
        "multipleOf",
        (val, obj, multiple) => val !== undefined ? ((val % multiple) / 100) === 0 : true,
        this.configuration.messages.multipleOf || "${$displayName} must be a multiple of ${$config.multiple}",
        (multiple) => ({ multiple })
      );
  }

  bind(ctrl: SfArray, rule: FluentRuleCustomizer<{}, any>) {
    [
      "minimum",
      "maximum",
      "exclusiveMinimum",
      "exclusiveMaximum",
      "multipleOf"
    ].forEach((r) => {
      if (Number.isInteger(ctrl.schema[r])) {
        rule = rule.satisfiesRule(r, ctrl.schema[r]);
      }
    });
  }
}
