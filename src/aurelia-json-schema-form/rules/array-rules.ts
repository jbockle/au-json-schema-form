import { ValidationRules } from 'aurelia-validation';
import { SfArray } from '../form/array/sf-array';

export class ArrayRules {

  register() {
    this.add();
  }

  add() {
    // uniqueItems
  }

  bind(ctrl: SfArray) {
    let rule = ValidationRules
      .ensureObject()
      .displayName(ctrl.form.$schema.title)
      .satisfies(() => true);
    if (ctrl.form.$required) {
      rule = rule.required();
    }
    if (Number.isInteger(ctrl.form.$schema.maxItems)) {
      rule = rule.maxItems(ctrl.form.$schema.maxItems);
    }
    if (Number.isInteger(ctrl.form.$schema.minItems)) {
      rule = rule.minItems(ctrl.form.$schema.minItems);
    }
    if (ctrl.form.$schema.uniqueItems) {
      // TODO: add unique items rule
    }
    rule.on(ctrl.model);
  }
}
