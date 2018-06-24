import { BootstrapValidationRenderer } from "./renderers/bootstrap-validation-renderer";
import { SchemaFormConfiguration } from "./services/schema-form-configuration";
import { FrameworkConfiguration, PLATFORM, LogManager } from "aurelia-framework";
import { ValidationRenderer } from "aurelia-validation";
import { getLogger } from "aurelia-logging";
import { SchemaFormLogger } from "./resources/logger";
import { ITemplates } from "./interfaces/templates";
import { AuJsonSchemaForm } from "./form/au-json-schema-form";
import { GetBootstrapTemplates } from "./templates/bootstrap4/index";

interface ISchemaFormConfiguration {
  /**
   * @property the renderer to display error, success and more on form elements
   */
  validationRenderer?: ValidationRenderer;

  /**
   * @property the list of dependencies used to generate form elements
   */
  templates?: ITemplates;

  /**
   * @property sets the log level, default is none
   */
  logLevel?: number;
}

function configure(
  frameworkConfig: FrameworkConfiguration,
  options: ISchemaFormConfiguration = {}
) {
  const logger = getLogger("au-json-schema-form");
  registerLogger(logger, options, frameworkConfig);
  registerConfiguration(logger, options, frameworkConfig);

  frameworkConfig.globalResources([
    PLATFORM.moduleName("./form/au-json-schema-form"),
    PLATFORM.moduleName("./value-converters/number-value-converter"),

    PLATFORM.moduleName("./form/number/sf-number"),
    PLATFORM.moduleName("./form/text/sf-text")
  ]);

}

function registerLogger(
  logger: SchemaFormLogger,
  options: ISchemaFormConfiguration,
  frameworkConfig: FrameworkConfiguration
) {
  logger.setLevel(options.logLevel || LogManager.logLevel.none);
  frameworkConfig.container.registerInstance(SchemaFormLogger, logger);
  logger.info("registered logger");
}

function registerConfiguration(
  logger: SchemaFormLogger,
  options: ISchemaFormConfiguration,
  frameworkConfig: FrameworkConfiguration
) {
  const configuration = new SchemaFormConfiguration(
    options.validationRenderer || new BootstrapValidationRenderer(),
    options.templates || GetBootstrapTemplates(frameworkConfig),
    frameworkConfig
  );
  frameworkConfig.container.registerInstance(SchemaFormConfiguration, configuration);
  logger.info("registered configuration", configuration);
}

export { AuJsonSchemaForm, GetBootstrapTemplates, ISchemaFormConfiguration, configure };
