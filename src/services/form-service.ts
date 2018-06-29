export class FormService {
  getSchemaTemplate(key: string, form: any, part: any) {
    this.log("getSchemaTemplate", arguments);
    let template: string;
    const schema = part.properties[key];
    switch (schema.type) {
      case "number":
        template = `<sf-number
        schema.bind="schema.properties.${key}"
        model.two-way="model.${key}"
        title="${form.$title || schema.title || this.toTitle(key)}"
        required.bind="${this.isRequired(key, part)}"></sf-number>\r\n`;
        break;
      case "string":
        template = `<sf-text
      schema.bind="schema.properties.${key}"
      model.two-way="model.${key}"
      title="${form.$title || schema.title || this.toTitle(key)}"
      required.bind="${this.isRequired(key, part)}"></sf-text>\r\n`;
        break;
    }
    return template;
  }

  generate(schema: IJsonSchemaDefinition, form: IForm, model: object | object[]) {
    if (schema.type === "object") {
      form = this.buildObjectForm(schema, form, model);
    } else if (schema.type === "array") {
      form = this.buildArrayForm(schema, form, model);
    }
  }

  readonly containerMarker = "@";

  isContainer(key: string): boolean {
    return key.charAt(0) === this.containerMarker;
  }

  getEmmetContainer(key: string): { start: string, end: string } {
    const regex = /^@([a-z-]+)(?:(?:(?:#(\w+))?)(?:((?:\.(?:[a-z\d-]+))+)?))$/;

    const matches = key.match(regex);

    if (!matches) {
      throw new Error(`the form key "${key}" does not match "^(@element)(#id)?((.class)+)?$"`);
    }

    const element = matches[1];
    const id = !matches[2] ? "" : `id="${matches[2]}"`;
    const classes = !matches[3] ? "" : `class="${matches[3].split(".").join(" ").trim()}"`;

    return {
      start: `<${element} ${id} ${classes}>`.replace(/\s+/, " ").trim(),
      end: `</${element}>`
    };
  }

  buildObjectForm(schema: IJsonSchemaObjectDefinition, form: IForm, model: object): SchemaForm {
    const schemaForm = new SchemaForm(form);
    let template = "";

    const required = schema.required || [];
    let wrapper: { start?: string, end?: string };
    // tslint:disable-next-line:forin
    for (const key in schemaForm) {
      wrapper = this.getEmmetWrapper(key, wrapper);
      template = this.applyEmmetStart(wrapper, template);

      if (this.isContainer(key)) {

      } else {
        switch (schema.properties[key].type) {
          case "string":
            template += this.getStringTemplate()
        }
      }

      template = this.applyEmmetEnd(wrapper, template);
    }

    return schemaForm;
  }

  private getEmmetWrapper(key: string, wrapper: { start?: string; end?: string; }) {
    if (this.isContainer(key)) {
      wrapper = this.getEmmetContainer(key);
    } else {
      wrapper = {};
    }
    return wrapper;
  }

  private applyEmmetEnd(wrapper: { start?: string; end?: string; }, template: string) {
    if (wrapper.end) {
      template += wrapper.end;
    }
    return template;
  }

  private applyEmmetStart(wrapper: { start?: string; end?: string; }, template: string) {
    if (wrapper.start) {
      template += wrapper.start;
    }
    return template;
  }
}
export class FormTemplateBuilder {
  stringTemplate() {

  }
}
export declare type StringFormat = "date-time" | "date" | "time" | "ipv4" | "ipv6" | "";

export declare type SchemaType = "object" | "array" | "string" | "number";

// tslint:disable-next-line:max-classes-per-file
export declare type PrimitiveType = number | boolean | string | null;

export interface IJsonSchemaDefinition {
  $schema?: string;
  description?: string;
  // no support
  // allOf?: IJsonSchemaDefinition[];
  // oneOf?: IJsonSchemaDefinition[];
  // anyOf?: IJsonSchemaDefinition[];
  title?: string;
  type: SchemaType;
  enum?: PrimitiveType[];
  default?: PrimitiveType | object | object[];
  const?: PrimitiveType | object | object[];
  readOnly?: boolean;
}

export interface IJsonSchemaArrayDefinition extends IJsonSchemaDefinition {
  items?: IJsonSchemaDefinition | IJsonSchemaDefinition[];
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

export interface IForm {
  [key: string]: IForm[] | IFormOverride;
}

// tslint:disable-next-line:max-classes-per-file
export class SchemaForm implements IForm {
  constructor(form: IForm) {
    // tslint:disable-next-line:forin
    for (const key in form) {
      if ((form[key] as IFormOverride) === undefined) {
        this[key] = toSchemaForms(form[key] as IForm[]);
      } else {
        this[key] = form[key] as ISchemaFormOverride;
      }
    }
  }
  [key: string]: SchemaForm[] | ISchemaFormOverride;
}

function toSchemaForms(forms: IForm[]): SchemaForm[] {
  return forms.map((form) => new SchemaForm(form));
}

export interface IFormOverride {
  $noTitle?: boolean;
  $placeholder?: string;
  $htmlClass?: string;
  $altTemplate?: string;
  $minDate?: string; // yyyy-MM-dd
  $maxDate?: string; // yyyy-MM-dd
}

export interface ISchemaFormOverride extends IFormOverride {
  _required?: boolean;
  _schema: IJsonSchemaDefinition;
}
