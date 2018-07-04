import { ITemplates } from "../../interfaces/templates";
import { PLATFORM } from "aurelia-framework";
// tslint:disable:max-line-length
export function GetBootstrapTemplates(): ITemplates {
  return {
    number: PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-number.html"),
    numberRange: PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-number-range.html"),
    string: PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-string.html"),
    stringRadioEnum: PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-string-radio-enum.html"),
    stringSelectEnum: PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-string-select-enum.html"),
    object: PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-object.html"),
    array: PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-array.html"),
    boolean: PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-boolean.html"),
    arrayStringEnum: PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-array-string-enum.html")
  };
}
