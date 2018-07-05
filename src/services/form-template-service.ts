import { SchemaType } from "../interfaces/json-schema-definition";
import { inject, singleton } from "aurelia-framework";
import { SchemaFormLogger } from "../resources/logger";
import { ITemplate } from "../interfaces/template";

@singleton()
@inject(SchemaFormLogger)
export class FormTemplateService {
  constructor(private logger: SchemaFormLogger) { }

  private readonly containerMarker = "@";
  private readonly emmetRegex = /^@([a-z-]+)(?:(?:(?:#(\w+))?)(?:((?:\.(?:[a-z\d-]+))+)?))$/;
  private readonly voidElements = [
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr"
  ];

  getTemplate(
    modelPath: string, formPath: string, schemaType: SchemaType
  ) {
    return `<sf-${schemaType}` +
      ` model.two-way="${modelPath}"` +
      ` form.to - view="${formPath}">` +
      `</sf-${schemaType}>`;
  }

  isContainer(key: string): boolean {
    this.logger.info("isContainer", arguments);
    return key.charAt(0) === this.containerMarker;
  }

  getEmmetWrapper(key: string, wrapper: { start?: string; end?: string; }) {
    this.logger.info("getEmmetWrapper", arguments);
    if (this.isContainer(key)) {
      wrapper = this.expandEmmetContainer(key);
    } else {
      wrapper = {};
    }
    return wrapper;
  }

  applyEmmetEnd(wrapper: { start?: string; end?: string; }, template: ITemplate) {
    this.logger.info("applyEmmetEnd", wrapper.end);
    if (wrapper.end) {
      template.content += wrapper.end;
    }
  }

  applyEmmetStart(wrapper: { start?: string; end?: string; }, template: ITemplate) {
    this.logger.info("applyEmmetStart", wrapper.start);
    if (wrapper.start) {
      template.content += wrapper.start;
    }
  }

  expandEmmetContainer(key: string): { start: string, end: string } {
    this.logger.info("getEmmetContainer", key);
    const matches = key.match(this.emmetRegex);

    this.validateMatches(matches, key);

    const attr = this.getEmmetAttr(matches[1], matches[2], matches[3]);
    return {
      start: `<${attr.element} ${attr.id} ${attr.classes}>`.replace(/\s+/, " ").trim(),
      end: this.isVoidElement(attr.element) ? `</${attr.element}>` : ""
    };
  }

  private isVoidElement(element: string) {
    return this.voidElements.indexOf(element) === -1;
  }

  private getEmmetAttr(
    element, id, classes
  ): { element: string, id: string, classes: string } {
    return {
      element,
      id: id ? `id="${id}"` : "",
      classes: classes ? `class="${classes.split(".").join(" ")}"` : ""
    };
  }

  private validateMatches(matches: RegExpMatchArray, key: string) {
    if (!matches) {
      throw new Error(`the form key "${key}" does not match "^(@element)(#id)?((.class)+)?$"`);
    }
  }
}
