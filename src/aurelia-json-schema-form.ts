import { BootstrapValidationRenderer } from "./renderers/bootstrap-validation-renderer";
import { SchemaFormConfiguration } from "./services/schema-form-configuration";
import { FrameworkConfiguration, PLATFORM, LogManager } from "aurelia-framework";
import { ValidationRenderer } from "aurelia-validation";
import { getLogger } from "aurelia-logging";
import { SchemaFormLogger } from "./resources/logger";
import { ITemplates } from "./interfaces/templates";
import { GetBootstrapTemplates } from "./templates/bootstrap4/index";
import { IValidationMessages } from "./interfaces/validation-messages";
import { IFormOptions } from "./interfaces/form-options";
import { AuJsonSchemaForm } from "./form/au-json-schema-form";
import { RulesFactory } from "./rules/rules-factory";

class PluginOptions {
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
    this.templates = GetBootstrapTemplates();
  }
}

function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: PluginOptions) => void) {

  const logger = getLogger("aurelia-json-schema-form");

  logger.info("initializing aurelia-json-schema-form");

  // create defaults/apply user defined configuration
  const options = new PluginOptions();
  if (callback instanceof Function) {
    callback(options);
  }

  registerLogger(logger, options, frameworkConfig);

  registerConfiguration(logger, options, frameworkConfig);

  (frameworkConfig.container.get(RulesFactory) as RulesFactory).register();

  frameworkConfig.globalResources([
    PLATFORM.moduleName("./form/au-json-schema-form"),
    PLATFORM.moduleName("./value-converters/number-value-converter"),

    PLATFORM.moduleName("./form/number/sf-number"),
    PLATFORM.moduleName("./form/text/sf-text")
  ]);

}

function registerLogger(
  logger: SchemaFormLogger,
  options: PluginOptions,
  frameworkConfig: FrameworkConfiguration
) {
  logger.setLevel(options.logLevel);

  frameworkConfig.container.registerInstance(SchemaFormLogger, logger);

  logger.info("registered logger");
}

function registerConfiguration(
  logger: SchemaFormLogger,
  options: PluginOptions,
  frameworkConfig: FrameworkConfiguration
) {
  const configuration = new SchemaFormConfiguration(
    options.validationRenderer, options.templates, options.validationMessages);

  frameworkConfig.container.registerInstance(SchemaFormConfiguration, configuration);

  logger.info("registered configuration", configuration);
}

export {
  configure,
  ITemplates,
  IValidationMessages,
  PluginOptions,
  IFormOptions,
  AuJsonSchemaForm
};
