export declare type StringFormat = 'date-time' | 'date' | 'time' | 'ipv4' | 'ipv6' | 'email';

export declare type SchemaType = 'object' | 'array' | 'string' | 'number' | 'boolean' | 'null';

export declare type PrimitiveType = number | boolean | string | null;

export interface IJsonSchemaDefinition {
  $schema?: string;
  description?: string;
  title?: string;
  type: SchemaType | SchemaType[];
  enum?: PrimitiveType[];
  default?: PrimitiveType | object | object[];
  const?: PrimitiveType | object | object[];
  readOnly?: boolean;
  [key: string]: any;
}

export interface IJsonSchemaArrayDefinition extends IJsonSchemaDefinition {
  type: 'array';
  items?: IJsonSchemaDefinition;
  minItems?: number;
  maxItems?: number;
  uniqueItems?: boolean;
  additionalItems?: {
    anyOf: IJsonSchemaDefinition[];
  };
}

export interface IJsonSchemaObjectDefinition extends IJsonSchemaDefinition {
  type: 'object';
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
  type: 'string';
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  format?: StringFormat;
  examples?: PrimitiveType[] | object[];
}

export interface IJsonSchemaNumberDefinition extends IJsonSchemaDefinition {
  type: 'number';
  multipleOf?: number;
  minimum?: number;
  maximum?: number;
  exclusiveMinimum?: number;
  exclusiveMaximum?: number;
  examples?: PrimitiveType[] | object[];
}

export interface IJsonSchemaBooleanDefinition extends IJsonSchemaDefinition {
  type: 'boolean';
}
