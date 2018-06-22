export class NumberValueConverter {
  toView(val) {
    return val;
  }

  fromView(val) {
    if (val === "") { return; }
    return Number(val);
  }
}
