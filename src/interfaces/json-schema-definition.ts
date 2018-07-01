export declare type StringFormat = "date-time" | "date" | "time" | "ipv4" | "ipv6" | "email";

export declare type SchemaType = "object" | "array" | "string" | "number";

export declare type PrimitiveType = number | boolean | string | null;

export interface IJsonSchemaDefinition {
  $schema?: string;
  description?: string;
  allOf?: IJsonSchemaDefinition[];
  oneOf?: IJsonSchemaDefinition[];
  anyOf?: IJsonSchemaDefinition[];
  title?: string;
  type: SchemaType;
  enum?: PrimitiveType[];
  default?: PrimitiveType | object | object[];
  const?: PrimitiveType | object | object[];
  readOnly?: boolean;
  [key: string]: any;
}

export interface IJsonSchemaArrayDefinition extends IJsonSchemaDefinition {
  items?: IJsonSchemaDefinition;
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
  additionalItems?: {
    anyOf: IJsonSchemaDefinition[];
  };
}

export interface IJsonSchemaObjectDefinition extends IJsonSchemaDefinition {
  propertyOrder?: string[];
  properties?: {
    [key: string]: IJsonSchemaDefinition;
  };
  additionalProperties?: IJsonSchemaDefinition | boolean;
  patternProperties?: {
    [key: string]: IJsonSchemaDefinition
  };
  minProperties?: number;
  maxProperties?: number;
  required?: string[];
}

export interface IJsonSchemaStringDefinition extends IJsonSchemaDefinition {
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  format?: StringFormat;
  examples?: PrimitiveType[] | object[];
}

export interface IJsonSchemaNumberDefinition extends IJsonSchemaDefinition {
  multipleOf?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  examples?: PrimitiveType[] | object[];
}
