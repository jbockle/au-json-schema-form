System.register(["./renderers/bootstrap-validation-renderer", "./services/schema-form-configuration", "aurelia-framework", "aurelia-logging", "./resources/logger", "./templates/bootstrap4/index"], function (exports_1, context_1) {
    "use strict";
    var bootstrap_validation_renderer_1, schema_form_configuration_1, aurelia_framework_1, aurelia_logging_1, logger_1, index_1, PluginOptions;
    var __moduleName = context_1 && context_1.id;
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
        frameworkConfig.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./form/au-json-schema-form"),
            aurelia_framework_1.PLATFORM.moduleName("./value-converters/number-value-converter"),
            aurelia_framework_1.PLATFORM.moduleName("./form/number/sf-number"),
            aurelia_framework_1.PLATFORM.moduleName("./form/text/sf-text")
        ]);
    }
    exports_1("configure", configure);
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
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            PluginOptions = /** @class */ (function () {
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
            exports_1("PluginOptions", PluginOptions);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBeUNBLG1CQUFtQixlQUF1QyxFQUFFLFFBQTBDO1FBRXBHLElBQU0sTUFBTSxHQUFHLDJCQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFFckQsbURBQW1EO1FBQ25ELElBQU0sT0FBTyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDcEMsSUFBSSxRQUFRLFlBQVksUUFBUSxFQUFFO1lBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQjtRQUVELGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRWpELHFCQUFxQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFeEQsZUFBZSxDQUFDLGVBQWUsQ0FBQztZQUM5Qiw0QkFBUSxDQUFDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQztZQUNqRCw0QkFBUSxDQUFDLFVBQVUsQ0FBQywyQ0FBMkMsQ0FBQztZQUVoRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyx5QkFBeUIsQ0FBQztZQUM5Qyw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQztTQUMzQyxDQUFDLENBQUM7SUFFTCxDQUFDOztJQUVELHdCQUNFLE1BQXdCLEVBQ3hCLE9BQXNCLEVBQ3RCLGVBQXVDO1FBRXZDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRWxDLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMseUJBQWdCLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFckUsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCwrQkFDRSxNQUF3QixFQUN4QixPQUFzQixFQUN0QixlQUF1QztRQUV2QyxJQUFNLGFBQWEsR0FBRyxJQUFJLG1EQUF1QixDQUMvQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUU3RSxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLG1EQUF1QixFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBRW5GLE1BQU0sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDekQsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUEvRUQ7Z0JBeUJFO29CQXhCQTs7O3VCQUdHO29CQUNILHVCQUFrQixHQUF1QixJQUFJLDJEQUEyQixFQUFFLENBQUM7b0JBUTNFOzs7dUJBR0c7b0JBQ0gsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztvQkFFN0M7Ozt1QkFHRztvQkFDSCxhQUFRLEdBQVcsOEJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUcxQyxJQUFJLENBQUMsU0FBUyxHQUFHLDZCQUFxQixFQUFFLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0gsb0JBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBOztRQTRERCxDQUFDIiwiZmlsZSI6ImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gXCIuL3JlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlclwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBQTEFURk9STSwgTG9nTWFuYWdlciB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSBcImF1cmVsaWEtbG9nZ2luZ1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElUZW1wbGF0ZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHsgR2V0Qm9vdHN0cmFwVGVtcGxhdGVzIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5kZXhcIjtcbmltcG9ydCB7IElWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3ZhbGlkYXRpb24tbWVzc2FnZXNcIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XG5cbmNsYXNzIFBsdWdpbk9wdGlvbnMge1xuICAvKipcbiAgICogQHByb3BlcnR5IG1vZGlmaWVzIERPTSB0byBkaXNwbGF5IGVycm9yL3N1Y2Nlc3Mgc3RhdGVzIFxuICAgKiBAZGVmYXVsdCBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgXCJ0YXJnZXRzIEJvb3RzdHJhcCB2NFwiXG4gICAqL1xuICB2YWxpZGF0aW9uUmVuZGVyZXI6IFZhbGlkYXRpb25SZW5kZXJlciA9IG5ldyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIoKTtcblxuICAvKipcbiAgICogQHByb3BlcnR5IGRlZmluZXMgbW9kdWxlTmFtZXMgb2YgZm9ybSBlbGVtZW50cyBcbiAgICogQGRlZmF1bHQgYm9vdHN0cmFwNCBcInByZS1kZWZpbmVkIGN1c3RvbSBlbGVtZW50c1wiXG4gICAqL1xuICB0ZW1wbGF0ZXM6IElUZW1wbGF0ZXM7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBnbG9iYWwgdmFsaWRhdGlvbiBtZXNzYWdlIG92ZXJyaWRlcywgY2hvb3NlIHdoaWNoIG1lc3NhZ2VzIHlvdSB3YW50IHRvIG92ZXJyaWRlIChkZWZhdWx0KVxuICAgKiBAZGVmYXVsdCBlbXB0eSBcInVzZSB2YWxpZGF0b3IncyBkZWZhdWx0IG1lc3NhZ2VcIlxuICAgKi9cbiAgdmFsaWRhdGlvbk1lc3NhZ2VzOiBJVmFsaWRhdGlvbk1lc3NhZ2VzID0ge307XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBzZXRzIHRoZSBsb2cgbGV2ZWwgKGF2YWlsYWJsZSB2YWx1ZXMgZnJvbSBMb2dNYW5hZ2VyLmxvZ0xldmVsKVxuICAgKiBAZGVmYXVsdCBub25lIFwib25seSBpbml0aWFsaXphdGlvbiBpcyBsb2dnZWRcIlxuICAgKi9cbiAgbG9nTGV2ZWw6IG51bWJlciA9IExvZ01hbmFnZXIubG9nTGV2ZWwubm9uZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRlbXBsYXRlcyA9IEdldEJvb3RzdHJhcFRlbXBsYXRlcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIGNhbGxiYWNrPzogKGNvbmZpZzogUGx1Z2luT3B0aW9ucykgPT4gdm9pZCkge1xuXG4gIGNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcihcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKTtcblxuICBsb2dnZXIuaW5mbyhcImluaXRpYWxpemluZyBhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIik7XG5cbiAgLy8gY3JlYXRlIGRlZmF1bHRzL2FwcGx5IHVzZXIgZGVmaW5lZCBjb25maWd1cmF0aW9uXG4gIGNvbnN0IG9wdGlvbnMgPSBuZXcgUGx1Z2luT3B0aW9ucygpO1xuICBpZiAoY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGNhbGxiYWNrKG9wdGlvbnMpO1xuICB9XG5cbiAgcmVnaXN0ZXJMb2dnZXIobG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xuXG4gIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihsb2dnZXIsIG9wdGlvbnMsIGZyYW1ld29ya0NvbmZpZyk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmdsb2JhbFJlc291cmNlcyhbXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3ZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlclwiKSxcblxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vbnVtYmVyL3NmLW51bWJlclwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL3RleHQvc2YtdGV4dFwiKVxuICBdKTtcblxufVxuXG5mdW5jdGlvbiByZWdpc3RlckxvZ2dlcihcbiAgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cbikge1xuICBsb2dnZXIuc2V0TGV2ZWwob3B0aW9ucy5sb2dMZXZlbCk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Mb2dnZXIsIGxvZ2dlcik7XG5cbiAgbG9nZ2VyLmluZm8oXCJyZWdpc3RlcmVkIGxvZ2dlclwiKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDb25maWd1cmF0aW9uKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24oXG4gICAgb3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIsIG9wdGlvbnMudGVtcGxhdGVzLCBvcHRpb25zLnZhbGlkYXRpb25NZXNzYWdlcyk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBjb25maWd1cmF0aW9uKTtcblxuICBsb2dnZXIuaW5mbyhcInJlZ2lzdGVyZWQgY29uZmlndXJhdGlvblwiLCBjb25maWd1cmF0aW9uKTtcbn1cblxuZXhwb3J0IHtcbiAgY29uZmlndXJlLFxuICBJVGVtcGxhdGVzLFxuICBJVmFsaWRhdGlvbk1lc3NhZ2VzLFxuICBQbHVnaW5PcHRpb25zLFxuICBJRm9ybU9wdGlvbnNcbn07XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
