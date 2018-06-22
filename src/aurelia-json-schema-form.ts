import { BootstrapValidationRenderer } from "./renderers/bootstrap-validation-renderer";
import { GlobalOptions } from "./services/global-options";
import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";
import { ISchemaFormOptions } from "./interfaces/schema-form-options";
import { AuSchemaForm } from "./form/au-schema-form";

export { AuSchemaForm };

export function configure(config: FrameworkConfiguration, options: ISchemaFormOptions) {
  const globalOptions = new GlobalOptions(
    options.renderer || new BootstrapValidationRenderer(),
    options.templates || [PLATFORM.moduleName("./templates/bootstrap4/index")]
  );
  config.container.registerInstance(GlobalOptions, globalOptions);
  config.globalResources([PLATFORM.moduleName("./form/au-schema-form")]);
}
