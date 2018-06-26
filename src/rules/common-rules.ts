import { IRules } from "../interfaces/rules";
import { inject } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { ValidationRules, validationMessages, FluentRuleCustomizer } from "aurelia-validation";

@inject(SchemaFormConfiguration)
export class CommonRules implements IRules {
  constructor(private configuration: SchemaFormConfiguration) { }

  type = "common";

  register(): void {
    this.add();
  }

  setCustomMessages() {
    validationMessages["const"] = this.configuration.messages["const"] || validationMessages["equals"];
  }

  add(): void {
    // enum
    ValidationRules
      .customRule(
        "enum",
        (val, obj, allowedValues: any[]) => val !== undefined ? allowedValues.indexOf(val) >= 0 : true,
        this.configuration.messages.enum || "Invalid option",
        (allowedValues) => ({ allowedValues })
      );
  }

  bind(ctrl: any): FluentRuleCustomizer<{}, any> {
    let rule = ValidationRules
      .ensure("model")
      .displayName(ctrl.title)
      .satisfies(() => true);
    if (ctrl.schema.const) {
      rule = rule.equals(ctrl.schema.const);
    }
    if (ctrl.schema.enum) {
      rule = rule.satisfiesRule("enum", ctrl.schema.enum);
    }
    if (ctrl.required) {
      rule = rule.required();
    }
    return rule;
  }
}
