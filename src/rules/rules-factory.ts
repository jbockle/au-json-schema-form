import { inject } from "aurelia-framework";
import { StringRules } from "./string-rules";
import { NumberRules } from "./number-rules";
import { CommonRules } from "./common-rules";

@inject(CommonRules, StringRules, NumberRules)
export class RulesFactory {
  type = "factory";

  rules: any;

  constructor(
    commonRules: CommonRules,
    stringRules: StringRules,
    numberRules: NumberRules
  ) {
    this.rules = {
      commonRules,
      stringRules,
      numberRules,
    };
  }

  register(): void {
    Object.keys(this.rules)
      .forEach((kind) =>
        this.rules[kind].register());
  }

  add(): void {
    throw new Error("Method not implemented.");
  }

  bind(ctrl: any) {
    const rule = (this.rules.commonRules as CommonRules).bind(ctrl);
    this.rules[`${ctrl.kind}Rules`].bind(ctrl, rule);
    rule.on(ctrl);
  }
}
