define(["require", "exports", "./renderers/bootstrap-validation-renderer", "./services/schema-form-configuration", "aurelia-framework", "aurelia-logging", "./resources/logger", "./templates/bootstrap4/index", "./form/au-json-schema-form", "./rules/rules-factory"], function (require, exports, bootstrap_validation_renderer_1, schema_form_configuration_1, aurelia_framework_1, aurelia_logging_1, logger_1, index_1, au_json_schema_form_1, rules_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuJsonSchemaForm = au_json_schema_form_1.AuJsonSchemaForm;
    var PluginOptions = /** @class */ (function () {
        function PluginOptions() {
            /**
             * @property modifies DOM to display error/success states
             * @default BootstrapValidationRenderer "targets Bootstrap v4"
             */
            this.validationRenderer = new bootstrap_validation_renderer_1.BootstrapValidationRenderer();
            /**
             * @property global validation message overrides, choose which messages you want to override (default)
             * @default empty "use validator's default message"
             */
            this.validationMessages = {};
            /**
             * @property sets the log level (available values from LogManager.logLevel)
             * @default none "only initialization is logged"
             */
            this.logLevel = aurelia_framework_1.LogManager.logLevel.none;
            this.templates = index_1.GetBootstrapTemplates();
        }
        return PluginOptions;
    }());
    exports.PluginOptions = PluginOptions;
    function configure(frameworkConfig, callback) {
        var logger = aurelia_logging_1.getLogger("aurelia-json-schema-form");
        logger.info("initializing aurelia-json-schema-form");
        // create defaults/apply user defined configuration
        var options = new PluginOptions();
        if (callback instanceof Function) {
            callback(options);
        }
        registerLogger(logger, options, frameworkConfig);
        registerConfiguration(logger, options, frameworkConfig);
        frameworkConfig.container.get(rules_factory_1.RulesFactory).register();
        frameworkConfig.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./form/au-json-schema-form"),
            aurelia_framework_1.PLATFORM.moduleName("./value-converters/number-value-converter"),
            aurelia_framework_1.PLATFORM.moduleName("./form/array/sf-array"),
            aurelia_framework_1.PLATFORM.moduleName("./form/array/sf-array-item"),
            aurelia_framework_1.PLATFORM.moduleName("./form/object/sf-object"),
            aurelia_framework_1.PLATFORM.moduleName("./form/number/sf-number"),
            aurelia_framework_1.PLATFORM.moduleName("./form/text/sf-string")
        ]);
    }
    exports.configure = configure;
    function registerLogger(logger, options, frameworkConfig) {
        logger.setLevel(options.logLevel);
        frameworkConfig.container.registerInstance(logger_1.SchemaFormLogger, logger);
        logger.info("registered logger");
    }
    function registerConfiguration(logger, options, frameworkConfig) {
        var configuration = new schema_form_configuration_1.SchemaFormConfiguration(options.validationRenderer, options.templates, options.validationMessages);
        frameworkConfig.container.registerInstance(schema_form_configuration_1.SchemaFormConfiguration, configuration);
        logger.info("registered configuration", configuration);
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUEyR0UsMkJBakdPLHNDQUFnQixDQWlHUDtJQTlGbEI7UUF5QkU7WUF4QkE7OztlQUdHO1lBQ0gsdUJBQWtCLEdBQXVCLElBQUksMkRBQTJCLEVBQUUsQ0FBQztZQVEzRTs7O2VBR0c7WUFDSCx1QkFBa0IsR0FBd0IsRUFBRSxDQUFDO1lBRTdDOzs7ZUFHRztZQUNILGFBQVEsR0FBVyw4QkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFHMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyw2QkFBcUIsRUFBRSxDQUFDO1FBQzNDLENBQUM7UUFDSCxvQkFBQztJQUFELENBNUJBLEFBNEJDLElBQUE7SUFnRUMsc0NBQWE7SUE5RGYsbUJBQW1CLGVBQXVDLEVBQUUsUUFBMEM7UUFFcEcsSUFBTSxNQUFNLEdBQUcsMkJBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUVyRCxtREFBbUQ7UUFDbkQsSUFBTSxPQUFPLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFFBQVEsWUFBWSxRQUFRLEVBQUU7WUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO1FBRUQsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFakQscUJBQXFCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV2RCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpFLGVBQWUsQ0FBQyxlQUFlLENBQUM7WUFDOUIsNEJBQVEsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7WUFDakQsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMkNBQTJDLENBQUM7WUFFaEUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7WUFDakQsNEJBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7U0FDN0MsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQThCQyw4QkFBUztJQTVCWCx3QkFDRSxNQUF3QixFQUN4QixPQUFzQixFQUN0QixlQUF1QztRQUV2QyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsQyxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHlCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQ0UsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7UUFFdkMsSUFBTSxhQUFhLEdBQUcsSUFBSSxtREFBdUIsQ0FDL0MsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFN0UsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxtREFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVuRixNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUMiLCJmaWxlIjoiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIFBMQVRGT1JNLCBMb2dNYW5hZ2VyIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tIFwiYXVyZWxpYS1sb2dnaW5nXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlcyB9IGZyb20gXCIuL2ludGVyZmFjZXMvdGVtcGxhdGVzXCI7XG5pbXBvcnQgeyBHZXRCb290c3RyYXBUZW1wbGF0ZXMgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbmRleFwiO1xuaW1wb3J0IHsgSVZhbGlkYXRpb25NZXNzYWdlcyB9IGZyb20gXCIuL2ludGVyZmFjZXMvdmFsaWRhdGlvbi1tZXNzYWdlc1wiO1xuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcbmltcG9ydCB7IEF1SnNvblNjaGVtYUZvcm0gfSBmcm9tIFwiLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm1cIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcblxuY2xhc3MgUGx1Z2luT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBAcHJvcGVydHkgbW9kaWZpZXMgRE9NIHRvIGRpc3BsYXkgZXJyb3Ivc3VjY2VzcyBzdGF0ZXMgXG4gICAqIEBkZWZhdWx0IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciBcInRhcmdldHMgQm9vdHN0cmFwIHY0XCJcbiAgICovXG4gIHZhbGlkYXRpb25SZW5kZXJlcjogVmFsaWRhdGlvblJlbmRlcmVyID0gbmV3IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlcigpO1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgZGVmaW5lcyBtb2R1bGVOYW1lcyBvZiBmb3JtIGVsZW1lbnRzIFxuICAgKiBAZGVmYXVsdCBib290c3RyYXA0IFwicHJlLWRlZmluZWQgY3VzdG9tIGVsZW1lbnRzXCJcbiAgICovXG4gIHRlbXBsYXRlczogSVRlbXBsYXRlcztcblxuICAvKipcbiAgICogQHByb3BlcnR5IGdsb2JhbCB2YWxpZGF0aW9uIG1lc3NhZ2Ugb3ZlcnJpZGVzLCBjaG9vc2Ugd2hpY2ggbWVzc2FnZXMgeW91IHdhbnQgdG8gb3ZlcnJpZGUgKGRlZmF1bHQpXG4gICAqIEBkZWZhdWx0IGVtcHR5IFwidXNlIHZhbGlkYXRvcidzIGRlZmF1bHQgbWVzc2FnZVwiXG4gICAqL1xuICB2YWxpZGF0aW9uTWVzc2FnZXM6IElWYWxpZGF0aW9uTWVzc2FnZXMgPSB7fTtcblxuICAvKipcbiAgICogQHByb3BlcnR5IHNldHMgdGhlIGxvZyBsZXZlbCAoYXZhaWxhYmxlIHZhbHVlcyBmcm9tIExvZ01hbmFnZXIubG9nTGV2ZWwpXG4gICAqIEBkZWZhdWx0IG5vbmUgXCJvbmx5IGluaXRpYWxpemF0aW9uIGlzIGxvZ2dlZFwiXG4gICAqL1xuICBsb2dMZXZlbDogbnVtYmVyID0gTG9nTWFuYWdlci5sb2dMZXZlbC5ub25lO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGVtcGxhdGVzID0gR2V0Qm9vdHN0cmFwVGVtcGxhdGVzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uZmlndXJlKGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgY2FsbGJhY2s/OiAoY29uZmlnOiBQbHVnaW5PcHRpb25zKSA9PiB2b2lkKSB7XG5cbiAgY29uc3QgbG9nZ2VyID0gZ2V0TG9nZ2VyKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtXCIpO1xuXG4gIGxvZ2dlci5pbmZvKFwiaW5pdGlhbGl6aW5nIGF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKTtcblxuICAvLyBjcmVhdGUgZGVmYXVsdHMvYXBwbHkgdXNlciBkZWZpbmVkIGNvbmZpZ3VyYXRpb25cbiAgY29uc3Qgb3B0aW9ucyA9IG5ldyBQbHVnaW5PcHRpb25zKCk7XG4gIGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgY2FsbGJhY2sob3B0aW9ucyk7XG4gIH1cblxuICByZWdpc3RlckxvZ2dlcihsb2dnZXIsIG9wdGlvbnMsIGZyYW1ld29ya0NvbmZpZyk7XG5cbiAgcmVnaXN0ZXJDb25maWd1cmF0aW9uKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcblxuICAoZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5nZXQoUnVsZXNGYWN0b3J5KSBhcyBSdWxlc0ZhY3RvcnkpLnJlZ2lzdGVyKCk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmdsb2JhbFJlc291cmNlcyhbXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3ZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlclwiKSxcblxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXJyYXkvc2YtYXJyYXlcIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hcnJheS9zZi1hcnJheS1pdGVtXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vb2JqZWN0L3NmLW9iamVjdFwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL251bWJlci9zZi1udW1iZXJcIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS90ZXh0L3NmLXN0cmluZ1wiKVxuICBdKTtcblxufVxuXG5mdW5jdGlvbiByZWdpc3RlckxvZ2dlcihcbiAgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cbikge1xuICBsb2dnZXIuc2V0TGV2ZWwob3B0aW9ucy5sb2dMZXZlbCk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Mb2dnZXIsIGxvZ2dlcik7XG5cbiAgbG9nZ2VyLmluZm8oXCJyZWdpc3RlcmVkIGxvZ2dlclwiKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDb25maWd1cmF0aW9uKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24oXG4gICAgb3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIsIG9wdGlvbnMudGVtcGxhdGVzLCBvcHRpb25zLnZhbGlkYXRpb25NZXNzYWdlcyk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBjb25maWd1cmF0aW9uKTtcblxuICBsb2dnZXIuaW5mbyhcInJlZ2lzdGVyZWQgY29uZmlndXJhdGlvblwiLCBjb25maWd1cmF0aW9uKTtcbn1cblxuZXhwb3J0ICogZnJvbSBcIi4vaW50ZXJmYWNlcy9mb3JtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmV4cG9ydCB7XG4gIGNvbmZpZ3VyZSxcbiAgSVRlbXBsYXRlcyxcbiAgSVZhbGlkYXRpb25NZXNzYWdlcyxcbiAgUGx1Z2luT3B0aW9ucyxcbiAgSUZvcm1PcHRpb25zLFxuICBBdUpzb25TY2hlbWFGb3JtXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
