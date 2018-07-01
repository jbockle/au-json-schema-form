import { ITemplates } from "../../interfaces/templates";
import { FrameworkConfiguration } from "aurelia-framework";

const rootPath = "aurelia-json-schema-form/templates/bootstrap4/inputs";

export function GetBootstrapTemplates(): ITemplates {
  return {
    number: `${rootPath}/sft-number.html`,
    text: `${rootPath}/sft-string.html`,
    object: `${rootPath}/sft-object.html`
  };
}
