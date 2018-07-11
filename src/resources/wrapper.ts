import { ITemplate } from "../interfaces/template";

export class Wrapper {
  static readonly containerMarker = "@";

  static readonly emmetRegex = /^@([a-z-]+)(?:(?:(?:#(\w+))?)(?:((?:\.(?:[a-z\d-]+))+)?))$/;

  static readonly voidElements = [
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

  static isContainer(key: string): boolean {
    return key.charAt(0) === this.containerMarker;
  }

  start?: string;
  end?: string;

  constructor(key: string) {
    const matches = key.match(Wrapper.emmetRegex);

    if (this.validateMatches(matches, key)) {
      const attr = this.getEmmetAttr(matches[1], matches[2], matches[3]);
      this.start = `<${attr.element} ${attr.id} ${attr.classes}>`.replace(/\s+/, " ").trim();
      this.end = this.isVoidElement(attr.element) ? "" : `</${attr.element}>`;
    }
  }

  private isVoidElement(element: string) {
    return Wrapper.voidElements.indexOf(element) > -1;
  }

  private validateMatches(matches: RegExpMatchArray, key: string) {
    if (!matches && Wrapper.isContainer(key)) {
      throw new Error(`the form key "${key}" does not match "^(@element)(#id)?((.class)+)?$"`);
    }
    return !!matches;
  }

  private getEmmetAttr(
    element, id, classes
  ): { element: string, id: string, classes: string } {
    return {
      element,
      id: id ? `id="${id}"` : "",
      classes: classes ? `class="${classes.split(".").join(" ").trim()}"` : ""
    };
  }

  applyEnd(template: ITemplate) {
    if (this.end) {
      template.content += this.end;
    }
  }

  applyStart(template: ITemplate) {
    if (this.start) {
      template.content += this.start;
    }
  }
}
