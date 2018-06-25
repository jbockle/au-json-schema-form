System.register(["./renderers/bootstrap-validation-renderer", "./services/schema-form-configuration", "aurelia-framework", "aurelia-logging", "./resources/logger", "./form/au-json-schema-form", "./templates/bootstrap4/index"], function (exports_1, context_1) {
    "use strict";
    var bootstrap_validation_renderer_1, schema_form_configuration_1, aurelia_framework_1, aurelia_logging_1, logger_1, au_json_schema_form_1, index_1;
    var __moduleName = context_1 && context_1.id;
    function configure(frameworkConfig, options) {
        if (options === void 0) { options = {}; }
        var logger = aurelia_logging_1.getLogger("au-json-schema-form");
        registerLogger(logger, options, frameworkConfig);
        registerConfiguration(logger, options, frameworkConfig);
        frameworkConfig.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./form/au-json-schema-form"),
            aurelia_framework_1.PLATFORM.moduleName("./value-converters/number-value-converter"),
            aurelia_framework_1.PLATFORM.moduleName("./form/number/sf-number"),
            aurelia_framework_1.PLATFORM.moduleName("./form/text/sf-text")
        ]);
    }
    exports_1("configure", configure);
    function registerLogger(logger, options, frameworkConfig) {
        logger.setLevel(options.logLevel || aurelia_framework_1.LogManager.logLevel.none);
        frameworkConfig.container.registerInstance(logger_1.SchemaFormLogger, logger);
        logger.info("registered logger");
    }
    function registerConfiguration(logger, options, frameworkConfig) {
        var configuration = new schema_form_configuration_1.SchemaFormConfiguration(options.validationRenderer || new bootstrap_validation_renderer_1.BootstrapValidationRenderer(), options.templates || index_1.GetBootstrapTemplates(frameworkConfig), options.validationMessages || {});
        frameworkConfig.container.registerInstance(schema_form_configuration_1.SchemaFormConfiguration, configuration);
        logger.info("registered configuration", configuration);
    }
    return {
        setters: [
            function (bootstrap_validation_renderer_1_1) {
                bootstrap_validation_renderer_1 = bootstrap_validation_renderer_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (au_json_schema_form_1_1) {
                au_json_schema_form_1 = au_json_schema_form_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            exports_1("AuJsonSchemaForm", au_json_schema_form_1.AuJsonSchemaForm);
            exports_1("GetBootstrapTemplates", index_1.GetBootstrapTemplates);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBaUNBLG1CQUNFLGVBQXVDLEVBQ3ZDLE9BQXNDO1FBQXRDLHdCQUFBLEVBQUEsWUFBc0M7UUFFdEMsSUFBTSxNQUFNLEdBQUcsMkJBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ2hELGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBQ2pELHFCQUFxQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFeEQsZUFBZSxDQUFDLGVBQWUsQ0FBQztZQUM5Qiw0QkFBUSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQztZQUNqRCw0QkFBUSxDQUFDLFVBQVUsQ0FBQywyQ0FBMkMsQ0FBQztZQUVoRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztZQUM5Qyw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztTQUMzQyxDQUFDLENBQUM7SUFFTCxDQUFDOztJQUVELHdCQUNFLE1BQXdCLEVBQ3hCLE9BQWlDLEVBQ2pDLGVBQXVDO1FBRXZDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsSUFBSSw4QkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5RCxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHlCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3JFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsK0JBQ0UsTUFBd0IsRUFDeEIsT0FBaUMsRUFDakMsZUFBdUM7UUFFdkMsSUFBTSxhQUFhLEdBQUcsSUFBSSxtREFBdUIsQ0FDL0MsT0FBTyxDQUFDLGtCQUFrQixJQUFJLElBQUksMkRBQTJCLEVBQUUsRUFDL0QsT0FBTyxDQUFDLFNBQVMsSUFBSSw2QkFBcUIsQ0FBQyxlQUFlLENBQUMsRUFDM0QsT0FBTyxDQUFDLGtCQUFrQixJQUFJLEVBQUUsQ0FDakMsQ0FBQztRQUNGLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsbURBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbkYsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0FsRVEsc0NBQWdCOytDQUNoQiw2QkFBcUI7UUFvRTlCLENBQUMiLCJmaWxlIjoiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIFBMQVRGT1JNLCBMb2dNYW5hZ2VyIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tIFwiYXVyZWxpYS1sb2dnaW5nXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlcyB9IGZyb20gXCIuL2ludGVyZmFjZXMvdGVtcGxhdGVzXCI7XG5pbXBvcnQgeyBBdUpzb25TY2hlbWFGb3JtIH0gZnJvbSBcIi4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtXCI7XG5pbXBvcnQgeyBHZXRCb290c3RyYXBUZW1wbGF0ZXMgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbmRleFwiO1xuaW1wb3J0IHsgSVZhbGlkYXRpb25NZXNzYWdlcyB9IGZyb20gXCIuL2ludGVyZmFjZXMvdmFsaWRhdGlvbi1tZXNzYWdlc1wiO1xuXG5pbnRlcmZhY2UgSVNjaGVtYUZvcm1Db25maWd1cmF0aW9uIHtcbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSB0aGUgcmVuZGVyZXIgdG8gZGlzcGxheSBlcnJvciwgc3VjY2VzcyBhbmQgbW9yZSBvbiBmb3JtIGVsZW1lbnRzXG4gICAqL1xuICB2YWxpZGF0aW9uUmVuZGVyZXI/OiBWYWxpZGF0aW9uUmVuZGVyZXI7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSB0aGUgbGlzdCBvZiBkZXBlbmRlbmNpZXMgdXNlZCB0byBnZW5lcmF0ZSBmb3JtIGVsZW1lbnRzXG4gICAqL1xuICB0ZW1wbGF0ZXM/OiBJVGVtcGxhdGVzO1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgbGlzdCBvZiBvdmVycmlkZXMgZm9yIHZhbGlkYXRpb24gbWVzc2FnZXNcbiAgICovXG4gIHZhbGlkYXRpb25NZXNzYWdlcz86IElWYWxpZGF0aW9uTWVzc2FnZXM7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBzZXRzIHRoZSBsb2cgbGV2ZWwsIGRlZmF1bHQgaXMgbm9uZVxuICAgKi9cbiAgbG9nTGV2ZWw/OiBudW1iZXI7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZShcbiAgZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uLFxuICBvcHRpb25zOiBJU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gPSB7fVxuKSB7XG4gIGNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcihcImF1LWpzb24tc2NoZW1hLWZvcm1cIik7XG4gIHJlZ2lzdGVyTG9nZ2VyKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcbiAgcmVnaXN0ZXJDb25maWd1cmF0aW9uKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcblxuICBmcmFtZXdvcmtDb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm1cIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vdmFsdWUtY29udmVydGVycy9udW1iZXItdmFsdWUtY29udmVydGVyXCIpLFxuXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9udW1iZXIvc2YtbnVtYmVyXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vdGV4dC9zZi10ZXh0XCIpXG4gIF0pO1xuXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTG9nZ2VyKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IElTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uXG4pIHtcbiAgbG9nZ2VyLnNldExldmVsKG9wdGlvbnMubG9nTGV2ZWwgfHwgTG9nTWFuYWdlci5sb2dMZXZlbC5ub25lKTtcbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Mb2dnZXIsIGxvZ2dlcik7XG4gIGxvZ2dlci5pbmZvKFwicmVnaXN0ZXJlZCBsb2dnZXJcIik7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihcbiAgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICBvcHRpb25zOiBJU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24oXG4gICAgb3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIgfHwgbmV3IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlcigpLFxuICAgIG9wdGlvbnMudGVtcGxhdGVzIHx8IEdldEJvb3RzdHJhcFRlbXBsYXRlcyhmcmFtZXdvcmtDb25maWcpLFxuICAgIG9wdGlvbnMudmFsaWRhdGlvbk1lc3NhZ2VzIHx8IHt9XG4gICk7XG4gIGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgY29uZmlndXJhdGlvbik7XG4gIGxvZ2dlci5pbmZvKFwicmVnaXN0ZXJlZCBjb25maWd1cmF0aW9uXCIsIGNvbmZpZ3VyYXRpb24pO1xufVxuXG5leHBvcnQgeyBBdUpzb25TY2hlbWFGb3JtLCBHZXRCb290c3RyYXBUZW1wbGF0ZXMsIElTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgY29uZmlndXJlIH07XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
