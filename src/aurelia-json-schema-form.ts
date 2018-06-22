import { FrameworkConfiguration, PLATFORM } from "aurelia-framework";
import { ISchemaFormOptions } from "./ISchemaFormOptions";

export function configure(config: FrameworkConfiguration, options: ISchemaFormOptions) {
  config.feature(PLATFORM.moduleName("index"));
}
