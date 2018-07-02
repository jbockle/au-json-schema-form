import { Optional, View } from "aurelia-framework";
import { ValidationController } from "aurelia-validation";

export class SfArrayBindingBehavior {
  bind(binding, source: View) {
    const controller: ValidationController = source.container.get(Optional.of(ValidationController));
    // source.bindingContext.test();
  }
}
