import { IFormOverride } from 'interfaces/form-override';

export class SfArrayCanRemoveValueConverter {
  toView(val: boolean, $arrayItem: IFormOverride, model: any) {
    if (val && $arrayItem && $arrayItem.$canRemove instanceof Function ) {
      return !$arrayItem.$canRemove(model);
    }
    return val;
  }
}
