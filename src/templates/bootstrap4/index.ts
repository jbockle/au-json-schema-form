import { ITemplates } from "../../interfaces/templates";
import { FrameworkConfiguration } from "aurelia-framework";

const rootPath = "aurelia-json-schema-form/templates/bootstrap4";

export function GetBootstrapTemplates(): ITemplates {
  return {
    number: `${rootPath}/inputs/number/sft-number.html`,
    text: `${rootPath}/inputs/text/sft-text.html`,
  };
}
