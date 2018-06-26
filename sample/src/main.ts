import { PLATFORM } from "aurelia-pal";
/// <reference types="aurelia-loader-webpack/src/webpack-hot-interface"/>
// we want font-awesome to load as soon as possible to show the fa-spinner
import { Aurelia, LogManager } from "aurelia-framework";
import "bootstrap";
import environment from "./environment";
import { ISchemaFormConfiguration } from "aurelia-json-schema-form";
import { logLevel } from "aurelia-logging";
import { ConsoleAppender } from "aurelia-logging-console";

export function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin(PLATFORM.moduleName("aurelia-validation"));

  LogManager.addAppender(new ConsoleAppender());
  aurelia.use
    .plugin(PLATFORM.moduleName("aurelia-json-schema-form"), (options: ISchemaFormConfiguration) => {
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
