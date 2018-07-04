import { AureliaValidationConfiguration } from "aurelia-validation";
import { PluginOptions } from "aurelia-json-schema-form";
import { ConsoleAppender } from "aurelia-logging-console";
import { Aurelia, LogManager } from "aurelia-framework";
import { logLevel } from "aurelia-logging";
import { PLATFORM } from "aurelia-pal";
import environment from "./environment";
import "bootstrap";
import $ from "jquery";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName("aurelia-validation"));

  LogManager.addAppender(new ConsoleAppender());
  aurelia.use
    .plugin(PLATFORM.moduleName("aurelia-json-schema-form"), (options: PluginOptions) => {
      options.logLevel = logLevel.debug;
    });

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin(PLATFORM.moduleName('aurelia-animator-css'));
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin(PLATFORM.moduleName("aurelia-html-import-template-loader"));

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  if (environment.testing) {
    aurelia.use.plugin(PLATFORM.moduleName("aurelia-testing"));
  }

  aurelia.start().then(() => aurelia.setRoot(PLATFORM.moduleName("app")));
}
