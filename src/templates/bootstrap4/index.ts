import { ITemplates } from "../../interfaces/templates";
import { FrameworkConfiguration } from "aurelia-framework";

const rootPath = "aurelia-json-schema-form/templates/bootstrap4/inputs";

export function GetBootstrapTemplates(): ITemplates {
  return {
    number: `${rootPath}/sft-number.html`,
    numberRange: `${rootPath}/sft-number-range.html`,
    string: `${rootPath}/sft-string.html`,
    stringRadioEnum: `${rootPath}/sft-string-radio-enum.html`,
    stringSelectEnum: `${rootPath}/sft-string-select-enum.html`,
    object: `${rootPath}/sft-object.html`,
    array: `${rootPath}/sft-array.html`,
    boolean: `${rootPath}/sft-boolean.html`,
    arrayStringEnum: `${rootPath}/sft-array-string-enum.html`
  };
}
