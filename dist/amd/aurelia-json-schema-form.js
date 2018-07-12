define(["require", "exports", "./renderers/bootstrap-validation-renderer", "./services/schema-form-configuration", "aurelia-framework", "aurelia-logging", "./resources/logger", "./templates/bootstrap4/index", "./form/au-json-schema-form", "./rules/rules-factory", "./resources/number"], function (require, exports, bootstrap_validation_renderer_1, schema_form_configuration_1, aurelia_framework_1, aurelia_logging_1, logger_1, index_1, au_json_schema_form_1, rules_factory_1) {
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
            aurelia_framework_1.PLATFORM.moduleName("./form/object/sf-object"),
            aurelia_framework_1.PLATFORM.moduleName("./form/number/sf-number"),
            aurelia_framework_1.PLATFORM.moduleName("./form/text/sf-string"),
            aurelia_framework_1.PLATFORM.moduleName("./form/boolean/sf-boolean"),
            aurelia_framework_1.PLATFORM.moduleName("./templates/bootstrap4/bootstrap-tooltip")
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFxSEUsMkJBMUdPLHNDQUFnQixDQTBHUDtJQTdGbEI7UUF5QkU7WUF4QkE7OztlQUdHO1lBQ0gsdUJBQWtCLEdBQXVCLElBQUksMkRBQTJCLEVBQUUsQ0FBQztZQVEzRTs7O2VBR0c7WUFDSCx1QkFBa0IsR0FBd0IsRUFBRSxDQUFDO1lBRTdDOzs7ZUFHRztZQUNILGFBQVEsR0FBVyw4QkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7WUFHMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyw2QkFBcUIsRUFBRSxDQUFDO1FBQzNDLENBQUM7UUFDSCxvQkFBQztJQUFELENBNUJBLEFBNEJDLElBQUE7SUErREMsc0NBQWE7SUE3RGYsbUJBQW1CLGVBQXVDLEVBQUUsUUFBMEM7UUFFcEcsSUFBTSxNQUFNLEdBQUcsMkJBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQztRQUVyRCxtREFBbUQ7UUFDbkQsSUFBTSxPQUFPLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztRQUNwQyxJQUFJLFFBQVEsWUFBWSxRQUFRLEVBQUU7WUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ25CO1FBRUQsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFakQscUJBQXFCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztRQUV2RCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO1FBRXpFLGVBQWUsQ0FBQyxlQUFlLENBQUM7WUFDOUIsNEJBQVEsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7WUFDakQsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMkNBQTJDLENBQUM7WUFFaEUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDOUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7WUFDNUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7WUFDaEQsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMENBQTBDLENBQUM7U0FDaEUsQ0FBQyxDQUFDO0lBRUwsQ0FBQztJQTRCQyw4QkFBUztJQTFCWCx3QkFDRSxNQUF3QixFQUN4QixPQUFzQixFQUN0QixlQUF1QztRQUV2QyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUVsQyxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHlCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQ0UsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7UUFFdkMsSUFBTSxhQUFhLEdBQUcsSUFBSSxtREFBdUIsQ0FDL0MsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFN0UsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxtREFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUVuRixNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0lBQ3pELENBQUMiLCJmaWxlIjoiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9yZXNvdXJjZXMvbnVtYmVyXCI7XG5pbXBvcnQgeyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiLi9yZW5kZXJlcnMvYm9vdHN0cmFwLXZhbGlkYXRpb24tcmVuZGVyZXJcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgUExBVEZPUk0sIExvZ01hbmFnZXIgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gXCJhdXJlbGlhLWxvZ2dpbmdcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90ZW1wbGF0ZXNcIjtcbmltcG9ydCB7IEdldEJvb3RzdHJhcFRlbXBsYXRlcyB9IGZyb20gXCIuL3RlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4XCI7XG5pbXBvcnQgeyBJVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzXCI7XG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgQXVKc29uU2NoZW1hRm9ybSB9IGZyb20gXCIuL2Zvcm0vYXUtanNvbi1zY2hlbWEtZm9ybVwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xuaW1wb3J0IHtcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb24sXG4gIElKc29uU2NoZW1hU3RyaW5nRGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvblxufSBmcm9tIFwiLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IElUZW1wbGF0ZU1vZHVsZSB9IGZyb20gXCIuL2ludGVyZmFjZXMvdGVtcGxhdGVcIjtcblxuY2xhc3MgUGx1Z2luT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBAcHJvcGVydHkgbW9kaWZpZXMgRE9NIHRvIGRpc3BsYXkgZXJyb3Ivc3VjY2VzcyBzdGF0ZXMgXG4gICAqIEBkZWZhdWx0IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciBcInRhcmdldHMgQm9vdHN0cmFwIHY0XCJcbiAgICovXG4gIHZhbGlkYXRpb25SZW5kZXJlcjogVmFsaWRhdGlvblJlbmRlcmVyID0gbmV3IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlcigpO1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgZGVmaW5lcyBtb2R1bGVOYW1lcyBvZiBmb3JtIGVsZW1lbnRzIFxuICAgKiBAZGVmYXVsdCBib290c3RyYXA0IFwicHJlLWRlZmluZWQgY3VzdG9tIGVsZW1lbnRzXCJcbiAgICovXG4gIHRlbXBsYXRlczogSVRlbXBsYXRlcztcblxuICAvKipcbiAgICogQHByb3BlcnR5IGdsb2JhbCB2YWxpZGF0aW9uIG1lc3NhZ2Ugb3ZlcnJpZGVzLCBjaG9vc2Ugd2hpY2ggbWVzc2FnZXMgeW91IHdhbnQgdG8gb3ZlcnJpZGUgKGRlZmF1bHQpXG4gICAqIEBkZWZhdWx0IGVtcHR5IFwidXNlIHZhbGlkYXRvcidzIGRlZmF1bHQgbWVzc2FnZVwiXG4gICAqL1xuICB2YWxpZGF0aW9uTWVzc2FnZXM6IElWYWxpZGF0aW9uTWVzc2FnZXMgPSB7fTtcblxuICAvKipcbiAgICogQHByb3BlcnR5IHNldHMgdGhlIGxvZyBsZXZlbCAoYXZhaWxhYmxlIHZhbHVlcyBmcm9tIExvZ01hbmFnZXIubG9nTGV2ZWwpXG4gICAqIEBkZWZhdWx0IG5vbmUgXCJvbmx5IGluaXRpYWxpemF0aW9uIGlzIGxvZ2dlZFwiXG4gICAqL1xuICBsb2dMZXZlbDogbnVtYmVyID0gTG9nTWFuYWdlci5sb2dMZXZlbC5ub25lO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudGVtcGxhdGVzID0gR2V0Qm9vdHN0cmFwVGVtcGxhdGVzKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uZmlndXJlKGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgY2FsbGJhY2s/OiAoY29uZmlnOiBQbHVnaW5PcHRpb25zKSA9PiB2b2lkKSB7XG5cbiAgY29uc3QgbG9nZ2VyID0gZ2V0TG9nZ2VyKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtXCIpO1xuXG4gIGxvZ2dlci5pbmZvKFwiaW5pdGlhbGl6aW5nIGF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKTtcblxuICAvLyBjcmVhdGUgZGVmYXVsdHMvYXBwbHkgdXNlciBkZWZpbmVkIGNvbmZpZ3VyYXRpb25cbiAgY29uc3Qgb3B0aW9ucyA9IG5ldyBQbHVnaW5PcHRpb25zKCk7XG4gIGlmIChjYWxsYmFjayBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgY2FsbGJhY2sob3B0aW9ucyk7XG4gIH1cblxuICByZWdpc3RlckxvZ2dlcihsb2dnZXIsIG9wdGlvbnMsIGZyYW1ld29ya0NvbmZpZyk7XG5cbiAgcmVnaXN0ZXJDb25maWd1cmF0aW9uKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcblxuICAoZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5nZXQoUnVsZXNGYWN0b3J5KSBhcyBSdWxlc0ZhY3RvcnkpLnJlZ2lzdGVyKCk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmdsb2JhbFJlc291cmNlcyhbXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3ZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlclwiKSxcblxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXJyYXkvc2YtYXJyYXlcIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9vYmplY3Qvc2Ytb2JqZWN0XCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vbnVtYmVyL3NmLW51bWJlclwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL3RleHQvc2Ytc3RyaW5nXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYm9vbGVhbi9zZi1ib29sZWFuXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3RlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwXCIpXG4gIF0pO1xuXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTG9nZ2VyKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGxvZ2dlci5zZXRMZXZlbChvcHRpb25zLmxvZ0xldmVsKTtcblxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUxvZ2dlciwgbG9nZ2VyKTtcblxuICBsb2dnZXIuaW5mbyhcInJlZ2lzdGVyZWQgbG9nZ2VyXCIpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckNvbmZpZ3VyYXRpb24oXG4gIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgb3B0aW9uczogUGx1Z2luT3B0aW9ucyxcbiAgZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uXG4pIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbihcbiAgICBvcHRpb25zLnZhbGlkYXRpb25SZW5kZXJlciwgb3B0aW9ucy50ZW1wbGF0ZXMsIG9wdGlvbnMudmFsaWRhdGlvbk1lc3NhZ2VzKTtcblxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIGNvbmZpZ3VyYXRpb24pO1xuXG4gIGxvZ2dlci5pbmZvKFwicmVnaXN0ZXJlZCBjb25maWd1cmF0aW9uXCIsIGNvbmZpZ3VyYXRpb24pO1xufVxuXG5leHBvcnQge1xuICBjb25maWd1cmUsXG4gIElUZW1wbGF0ZXMsXG4gIElWYWxpZGF0aW9uTWVzc2FnZXMsXG4gIFBsdWdpbk9wdGlvbnMsXG4gIElGb3JtT3B0aW9ucyxcbiAgQXVKc29uU2NoZW1hRm9ybSxcbiAgSUZvcm1PdmVycmlkZSxcbiAgSVRlbXBsYXRlTW9kdWxlLFxuICBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sXG4gIElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFTdHJpbmdEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uXG59O1xuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
