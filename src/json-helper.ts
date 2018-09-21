// credit: https://github.com/vkiryukhin/jsonfn/blob/master/jsonfn.js

// tslint:disable:no-eval
export class JSONHelper {
  private static _constants = {
    std_function: 'function',
    arrow_function: '_NuFrRa_',
    regexp: '_PxEgEr_',
    iso8061: /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/
  };

  static stringify(obj, space?: string) {
    return JSON.stringify(obj, this._stringify.bind(this), space);
  }

  static parse(str, date2obj: boolean = false) {
    return JSON.parse(str, this._parse(date2obj).bind(this));
  }

  private static _parse(date2obj: boolean) {
    return (_key, value) => {
      if (typeof value !== 'string' || value.length < 8) {
        return value;
      }

      return this.tryParseValue(value, date2obj);
    };
  }

  private static _stringify(_key, value) {
    const _out = { value: undefined };

    if (this.tryGet_FunctionBody(value, _out)) {
      return _out.value;
    }

    if (this.tryGet_RegExBody(value, _out)) {
      return _out.value;
    }

    return value;
  }

  private static tryParseValue(value, date2obj: boolean) {
    const prefix = value.substring(0, 8);

    if (date2obj && value.match(this._constants.iso8061)) {
      return new Date(value);
    }
    if (prefix === this._constants.std_function) {
      return eval('(' + value + ')');
    }
    if (prefix === this._constants.regexp || prefix === this._constants.arrow_function) {
      return eval(value.slice(8));
    }

    return value;
  }

  private static isFunction(value) {
    return value instanceof Function || typeof value === 'function';
  }

  private static isArrayFunction(value) {
    return value.length < 8 || value.substring(0, 8) !== 'function';
  }

  private static tryGet_FunctionBody(value, out: { value: any }) {
    if (this.isFunction(value)) {
      out.value = value.toString();

      if (this.isArrayFunction(out.value)) {
        out.value = `${this._constants.arrow_function}${out.value}`;
      }

      return out;
    }
  }

  private static tryGet_RegExBody(value, out: { value: any }) {
    if (value instanceof RegExp) {
      out.value = `${this._constants.regexp}${value}`;

      return out;
    }
  }
}
