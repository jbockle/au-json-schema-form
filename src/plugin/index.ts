import { FrameworkConfiguration } from 'aurelia-framework';
import { getLogger } from 'aurelia-logging';
import { RulesFactory } from './rules/rules-factory';
import { PLATFORM } from 'aurelia-pal';
import { SchemaFormLogger } from './resources/logger';
import { SchemaFormConfiguration } from './services/schema-form-configuration';
import { PluginOptions } from './plugin-options';

export function configure(frameworkConfig: FrameworkConfiguration, callback?: (config: PluginOptions) => void) {
  const logger = getLogger('aurelia-json-schema-form');

  logger.info('initializing aurelia-json-schema-form');

  // create defaults/apply user defined configuration
  const options = new PluginOptions();
  if (callback instanceof Function) {
    callback(options);
  }

  registerLogger(logger, options, frameworkConfig);

  registerConfiguration(logger, options, frameworkConfig);

  (frameworkConfig.container.get(RulesFactory) as RulesFactory).register();

  frameworkConfig.globalResources([
    PLATFORM.moduleName('./form/au-json-schema-form'),
    PLATFORM.moduleName('./value-converters/sf-number-value-converter'),
    PLATFORM.moduleName('./value-converters/sf-array-can-remove-value-converter'),
    PLATFORM.moduleName('./form/array/sf-array'),
    PLATFORM.moduleName('./form/object/sf-object'),
    PLATFORM.moduleName('./form/number/sf-number'),
    PLATFORM.moduleName('./form/text/sf-string'),
    PLATFORM.moduleName('./form/boolean/sf-boolean'),
    PLATFORM.moduleName('./templates/bootstrap4/bootstrap-tooltip')
  ]);
}

function registerLogger(
  logger: SchemaFormLogger,
  options: PluginOptions,
  frameworkConfig: FrameworkConfiguration
) {
  logger.setLevel(options.logLevel);

  frameworkConfig.container.registerInstance(SchemaFormLogger, logger);

  logger.info('registered logger');
}

function registerConfiguration(
  logger: SchemaFormLogger,
  options: PluginOptions,
  frameworkConfig: FrameworkConfiguration
) {
  const configuration = new SchemaFormConfiguration(
    options.validationRenderer, options.templates, options.validationMessages);

  frameworkConfig.container.registerInstance(SchemaFormConfiguration, configuration);

  logger.info('registered configuration', configuration);
}

export * from './form/array/sf-array';
export * from './form/au-json-schema-form';
export * from './form/boolean/sf-boolean';
export * from './form/form-controller';
export * from './form/number/sf-number';
export * from './form/object/sf-object';
export * from './form/text/sf-string';
export * from './interfaces/form-instance';
export * from './interfaces/form-options';
export * from './interfaces/form-override';
export * from './interfaces/json-schema-definition';
export * from './interfaces/rules';
export * from './interfaces/template';
export * from './interfaces/templates';
export * from './interfaces/validation-messages';
export * from './renderers/bootstrap-validation-renderer';
export * from './resources/guid';
export * from './resources/logger';
export * from './resources/wrapper';
export * from './rules/array-rules';
export * from './rules/boolean-rules';
export * from './rules/common-rules';
export * from './rules/number-rules';
export * from './rules/rules-factory';
export * from './rules/string-rules';
export * from './services/defaults-service';
export * from './services/form-instances';
export * from './services/form-service';
export * from './services/schema-form-configuration';
export * from './value-converters/sf-number-value-converter';
export * from './plugin-options';
