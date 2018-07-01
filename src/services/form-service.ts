import { IJsonSchemaObjectDefinition, IJsonSchemaDefinition } from "../interfaces/json-schema-definition";
import { IForm, IFormOverride } from "../interfaces/form";
import { inject } from "aurelia-framework";
import { SchemaFormLogger } from "../resources/logger";

@inject(SchemaFormLogger)
export class FormService {

  readonly containerMarker = "@";
  readonly overrideMarker = "$";

  constructor(private logger: SchemaFormLogger) { }

  buildObjectForm(schema: IJsonSchemaObjectDefinition, form: IForm, model: object, segment = ""): string {
    this.logger.info("buildObjectForm", arguments);
    let template = "";
    try {
      let wrapper: { start?: string, end?: string };
      // tslint:disable-next-line:forin
      for (const formKey in form) {
        wrapper = this.getEmmetWrapper(formKey, wrapper);
        template = this.applyEmmetStart(wrapper, template);

        if (this.isOverride(formKey)) {
          // do nothing
        } else if (this.isContainer(formKey)) {
          // inner emmet container

          segment += `['${formKey}']`;
          const innerForms = form[formKey] as IForm[];
          for (let index = 0; index < innerForms.length; index++) {
            template += this.buildObjectForm(schema, innerForms[index], model, segment + `[${index}]`);
          }

        } else {
          // object property

          const override = this.getOverride(form, formKey, schema);
          model = this.getObjectModelDefaults(model, schema);
          // tslint:disable-next-line:max-line-length
          template += `<sf-${override.$schema.type} model.two-way="model.${formKey}" form.bind="form${segment}.${formKey}"`;
          if (override.$schema.type === "array") {
            model[formKey] = [];
            template += ` schema.bind="schema.properties.${formKey}"`;
          }
          if (override.$schema.type === "object") {
            model[formKey] = {};
            template += ` schema.bind="schema.properties.${formKey}"`;
          }
          template += `></sf-${override.$schema.type}>\r\n`;
        }

        template = this.applyEmmetEnd(wrapper, template);
      }
      this.logger.info("created template", template, schema);
      return template;
    } catch (ex) {
      this.logger.error("an error occurred building object view strategy", ex, schema, form, model, segment);
      throw ex;
    }
  }

  isOverride(key: string): boolean {
    this.logger.info("isOverride", arguments);
    return key.charAt(0) === this.overrideMarker;
  }

  isContainer(key: string): boolean {
    this.logger.info("isContainer", arguments);
    return key.charAt(0) === this.containerMarker;
  }

  getOverride(form: IForm, formKey: string, schema: IJsonSchemaObjectDefinition) {
    this.logger.info("getOverride", { formKey, form, schema });
    const override = form[formKey] as IFormOverride;
    override.$schema = schema.properties[formKey];
    override.$schema.title = override.$schema.title || this.getTitle(formKey);
    override.$required = Array.isArray(schema.required) ? schema.required.indexOf(formKey) !== -1 : false;
    return override;
  }

  getTitle(key: string) {
    this.logger.info("getTitle", arguments);
    if (key) {
      return key
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, (str) => str.toUpperCase());
    }
  }

  getObjectModelDefaults(model: object, schema: IJsonSchemaObjectDefinition) {
    this.logger.info("getObjectModelDefaults", arguments);
    model = model || {};
    if (schema.properties) {
      for (const property in schema.properties) {
        if (schema.properties[property].const || schema.properties[property].default) {
          model[property] = model[property] || schema.properties[property].const || schema.properties[property].default;
        }
      }
    }
    return model;
  }

  getEmmetContainer(key: string): { start: string, end: string } {
    this.logger.info("getEmmetContainer", arguments);
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

  getEmmetWrapper(key: string, wrapper: { start?: string; end?: string; }) {
    this.logger.info("getEmmetWrapper", arguments);
    if (this.isContainer(key)) {
      wrapper = this.getEmmetContainer(key);
    } else {
      wrapper = {};
    }
    return wrapper;
  }

  applyEmmetEnd(wrapper: { start?: string; end?: string; }, template: string) {
    this.logger.info("applyEmmetEnd", arguments);
    if (wrapper.end) {
      template += wrapper.end;
    }
    return template;
  }

  applyEmmetStart(wrapper: { start?: string; end?: string; }, template: string) {
    this.logger.info("applyEmmetStart", arguments);
    if (wrapper.start) {
      template += wrapper.start;
    }
    return template;
  }
}
