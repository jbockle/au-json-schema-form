import { ValidationRules, validationMessages, FluentRuleCustomizer } from "aurelia-validation";
import { inject } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { SfString } from "../form/text/sf-string";

@inject(SchemaFormConfiguration)
export class StringRules {
  constructor(private configuration: SchemaFormConfiguration) { }
  register() {
    this.add();
    this.setCustomMessages();
  }

  setCustomMessages() {
    validationMessages["minLength"] = this.configuration.messages.minLength || validationMessages["minLength"];
    validationMessages["maxLength"] = this.configuration.messages.maxLength || validationMessages["maxLength"];
    validationMessages["matches"] = this.configuration.messages.pattern || validationMessages["matches"];
    validationMessages["email"] = this.configuration.messages.format_email || validationMessages["email"];
  }

  add() {
    // format datetime
    // tslint:disable-next-line:max-line-length
    const iso8601Datetime = /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i;
    ValidationRules
      .customRule(
        "format_datetime",
        (val: string) => val !== undefined ? iso8601Datetime.test(val) : true,
        this.configuration.messages.format_datetime || "${$displayName} is not a valid date/time"
      );

    // format date
    const iso8601Date = /^\d\d\d\d-[0-1]\d-[0-3]\d$/;
    ValidationRules
      .customRule(
        "format_date",
        (val: string) => val !== undefined ? iso8601Date.test(val) : true,
        this.configuration.messages.format_date || "${$displayName} is not a valid date"
      );

    // format time
    const iso8601Time = /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i;
    ValidationRules
      .customRule(
        "format_time",
        (val: string) => val !== undefined ? iso8601Time.test(val) : true,
        this.configuration.messages.format_time || "${$displayName} is not a valid time"
      );

    // format ipv4
    const ipv4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
    ValidationRules
      .customRule(
        "format_ipv4",
        (val: string) => val !== undefined ? ipv4.test(val) : true,
        this.configuration.messages.format_ipv4 || "${$displayName} is not a valid IPv4 address"
      );

    // format ipv6
    // tslint:disable-next-line:max-line-length
    const ipv6 = /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i;
    ValidationRules
      .customRule(
        "format_ipv6",
        (val: string) => val !== undefined ? ipv4.test(val) : true,
        this.configuration.messages.format_ipv6 || "${$displayName} is not a valid IPv6 address"
      );

    // format hostname
    const hostname = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i;
    ValidationRules
      .customRule(
        "format_hostname",
        (val: string) => val !== undefined ? ipv4.test(val) : true,
        this.configuration.messages.format_hostname || "${$displayName} is not a valid hostname"
      );

    // format uri
    const uri = /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i;
    ValidationRules
      .customRule(
        "format_uri",
        (val: string) => val !== undefined ? uri.test(val) : true,
        this.configuration.messages.format_uri || "${$displayName} is not a valid URI"
      );

    // pattern
    ValidationRules
      .customRule(
        "pattern",
        (val, obj, pattern) => val !== undefined ? (new RegExp(pattern)).test(val) : true,
        this.configuration.messages.pattern || "${$displayName} is not correctly formatted",
        (pattern) => ({ pattern })
      );
  }

  bind(ctrl: SfString, rule: FluentRuleCustomizer<{}, any>) {
    if (ctrl.schema.pattern) {
      rule = rule.satisfiesRule("pattern", ctrl.schema.pattern);
    }
    if (ctrl.schema.minLength) {
      rule = rule.minLength(ctrl.schema.minLength);
    }
    if (ctrl.schema.maxLength) {
      rule = rule.maxLength(ctrl.schema.maxLength);
    }
    if (ctrl.schema.format && ctrl.schema.format !== "email") {
      const rulename = `format_${ctrl.schema.format.replace("-", "")}`;
      rule = rule.satisfiesRule(rulename);
    }
    if (ctrl.schema.format === "email") {
      rule = rule.email();
    }
  }
}
