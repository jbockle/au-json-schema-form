export interface IValidationMessages {
  enum?: string;
  const?: string;
  multipleOf?: string;
  maximum?: string;
  exclusiveMaximum?: string;
  minimum?: string;
  exclusiveMinimum?: string;
  maxLength?: string;
  minLength?: string;
  pattern?: string;
  maxItems?: string;
  minItems?: string;
  required?: string;
  format_email?: string;
  format_datetime?: string;
  format_date?: string;
  format_time?: string;
  format_ipv4?: string;
  format_ipv6?: string;
  format_uri?: string;
  format_hostname?: string;
}
