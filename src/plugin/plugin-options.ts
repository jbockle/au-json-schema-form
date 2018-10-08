import { ValidationRenderer } from 'aurelia-validation';
import { ITemplates } from './interfaces/templates';
import { LogManager, PLATFORM } from 'aurelia-framework';
import { BootstrapValidationRenderer } from './renderers/bootstrap-validation-renderer';
import { IValidationMessages } from './interfaces/validation-messages';

export class PluginOptions {
  /**
   * @property modifies DOM to display error/success states
   * @default BootstrapValidationRenderer "targets Bootstrap v4"
   */
  validationRenderer: ValidationRenderer = new BootstrapValidationRenderer();

  /**
   * @property defines moduleNames of form elements
   * @default bootstrap4 "pre-defined custom elements"
   */
  templates: ITemplates;

  /**
   * @property global validation message overrides, choose which messages you want to override (default)
   * @default empty "use validator's default message"
   */
  validationMessages: IValidationMessages = {};

  /**
   * @property sets the log level (available values from LogManager.logLevel)
   * @default none "only initialization is logged"
   */
  logLevel: number = LogManager.logLevel.none;

  constructor() {
    this.templates = {
      boolean: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-boolean.html'),
      number: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-number.html'),
      numberRange: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-number-range.html'),
      string: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string.html'),
      stringTextArea: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string-textarea.html'),
      stringRadioEnum: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string-radio-enum.html'),
      stringSelectEnum: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-string-select-enum.html'),
      object: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-object.html'),
      array: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array.html'),
      arrayTabs: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array-tabs.html'),
      arrayStringEnum: PLATFORM.moduleName('./templates/bootstrap4/inputs/sft-array-string-enum.html')
    };
  }
}
