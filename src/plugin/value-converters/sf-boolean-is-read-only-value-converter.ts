import { IFormOverride } from 'interfaces/form-override';

export class SfBooleanIsReadOnlyValueConverter {
  toView(val: boolean, form: IFormOverride, model: any) {
    if (!val && form && form.$isReadOnly instanceof Function) {
      return form.$isReadOnly(model);
    }
    return val;
  }
}
