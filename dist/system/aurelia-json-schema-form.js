System.register(["./resources/number", "./renderers/bootstrap-validation-renderer", "./services/schema-form-configuration", "aurelia-framework", "aurelia-logging", "./resources/logger", "./templates/bootstrap4/index", "./form/au-json-schema-form", "./rules/rules-factory"], function (exports_1, context_1) {
    "use strict";
    var bootstrap_validation_renderer_1, schema_form_configuration_1, aurelia_framework_1, aurelia_logging_1, logger_1, index_1, au_json_schema_form_1, rules_factory_1, PluginOptions;
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
        frameworkConfig.container.get(rules_factory_1.RulesFactory).register();
        frameworkConfig.globalResources([
            aurelia_framework_1.PLATFORM.moduleName("./form/au-json-schema-form"),
            aurelia_framework_1.PLATFORM.moduleName("./value-converters/number-value-converter"),
            aurelia_framework_1.PLATFORM.moduleName("./form/array/sf-array-binding-behavior"),
            aurelia_framework_1.PLATFORM.moduleName("./form/array/sf-array"),
            aurelia_framework_1.PLATFORM.moduleName("./form/array/sf-array-item"),
            aurelia_framework_1.PLATFORM.moduleName("./form/object/sf-object"),
            aurelia_framework_1.PLATFORM.moduleName("./form/number/sf-number"),
            aurelia_framework_1.PLATFORM.moduleName("./form/text/sf-string"),
            aurelia_framework_1.PLATFORM.moduleName("./form/boolean/sf-boolean"),
            aurelia_framework_1.PLATFORM.moduleName("./templates/bootstrap4/bootstrap-tooltip")
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
            function (_1) {
            },
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
            },
            function (au_json_schema_form_1_1) {
                au_json_schema_form_1 = au_json_schema_form_1_1;
            },
            function (rules_factory_1_1) {
                rules_factory_1 = rules_factory_1_1;
            }
        ],
        execute: function () {
            exports_1("AuJsonSchemaForm", au_json_schema_form_1.AuJsonSchemaForm);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBcURBLG1CQUFtQixlQUF1QyxFQUFFLFFBQTBDO1FBRXBHLElBQU0sTUFBTSxHQUFHLDJCQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFFckQsbURBQW1EO1FBQ25ELElBQU0sT0FBTyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDcEMsSUFBSSxRQUFRLFlBQVksUUFBUSxFQUFFO1lBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQjtRQUVELGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRWpELHFCQUFxQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFdkQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQVksQ0FBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6RSxlQUFlLENBQUMsZUFBZSxDQUFDO1lBQzlCLDRCQUFRLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDO1lBQ2pELDRCQUFRLENBQUMsVUFBVSxDQUFDLDJDQUEyQyxDQUFDO1lBQ2hFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHdDQUF3QyxDQUFDO1lBRTdELDRCQUFRLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1lBQzVDLDRCQUFRLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDO1lBQ2pELDRCQUFRLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO1lBQzlDLDRCQUFRLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO1lBQzlDLDRCQUFRLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1lBQzVDLDRCQUFRLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDO1lBQ2hELDRCQUFRLENBQUMsVUFBVSxDQUFDLDBDQUEwQyxDQUFDO1NBQ2hFLENBQUMsQ0FBQztJQUVMLENBQUM7O0lBRUQsd0JBQ0UsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7UUFFdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVyRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELCtCQUNFLE1BQXdCLEVBQ3hCLE9BQXNCLEVBQ3RCLGVBQXVDO1FBRXZDLElBQU0sYUFBYSxHQUFHLElBQUksbURBQXVCLENBQy9DLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTdFLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsbURBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFbkYsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBDQW5HUSxzQ0FBZ0I7WUFZekI7Z0JBeUJFO29CQXhCQTs7O3VCQUdHO29CQUNILHVCQUFrQixHQUF1QixJQUFJLDJEQUEyQixFQUFFLENBQUM7b0JBUTNFOzs7dUJBR0c7b0JBQ0gsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztvQkFFN0M7Ozt1QkFHRztvQkFDSCxhQUFRLEdBQVcsOEJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO29CQUcxQyxJQUFJLENBQUMsU0FBUyxHQUFHLDZCQUFxQixFQUFFLENBQUM7Z0JBQzNDLENBQUM7Z0JBQ0gsb0JBQUM7WUFBRCxDQTVCQSxBQTRCQyxJQUFBOztRQTRFRCxDQUFDIiwiZmlsZSI6ImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vcmVzb3VyY2VzL251bWJlclwiO1xuaW1wb3J0IHsgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIFBMQVRGT1JNLCBMb2dNYW5hZ2VyIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tIFwiYXVyZWxpYS1sb2dnaW5nXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSVRlbXBsYXRlcyB9IGZyb20gXCIuL2ludGVyZmFjZXMvdGVtcGxhdGVzXCI7XG5pbXBvcnQgeyBHZXRCb290c3RyYXBUZW1wbGF0ZXMgfSBmcm9tIFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbmRleFwiO1xuaW1wb3J0IHsgSVZhbGlkYXRpb25NZXNzYWdlcyB9IGZyb20gXCIuL2ludGVyZmFjZXMvdmFsaWRhdGlvbi1tZXNzYWdlc1wiO1xuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcbmltcG9ydCB7IEF1SnNvblNjaGVtYUZvcm0gfSBmcm9tIFwiLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm1cIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcbmltcG9ydCB7XG4gIElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYVN0cmluZ0RlZmluaXRpb24sXG4gIElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb25cbn0gZnJvbSBcIi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5cbmNsYXNzIFBsdWdpbk9wdGlvbnMge1xuICAvKipcbiAgICogQHByb3BlcnR5IG1vZGlmaWVzIERPTSB0byBkaXNwbGF5IGVycm9yL3N1Y2Nlc3Mgc3RhdGVzIFxuICAgKiBAZGVmYXVsdCBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgXCJ0YXJnZXRzIEJvb3RzdHJhcCB2NFwiXG4gICAqL1xuICB2YWxpZGF0aW9uUmVuZGVyZXI6IFZhbGlkYXRpb25SZW5kZXJlciA9IG5ldyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIoKTtcblxuICAvKipcbiAgICogQHByb3BlcnR5IGRlZmluZXMgbW9kdWxlTmFtZXMgb2YgZm9ybSBlbGVtZW50cyBcbiAgICogQGRlZmF1bHQgYm9vdHN0cmFwNCBcInByZS1kZWZpbmVkIGN1c3RvbSBlbGVtZW50c1wiXG4gICAqL1xuICB0ZW1wbGF0ZXM6IElUZW1wbGF0ZXM7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBnbG9iYWwgdmFsaWRhdGlvbiBtZXNzYWdlIG92ZXJyaWRlcywgY2hvb3NlIHdoaWNoIG1lc3NhZ2VzIHlvdSB3YW50IHRvIG92ZXJyaWRlIChkZWZhdWx0KVxuICAgKiBAZGVmYXVsdCBlbXB0eSBcInVzZSB2YWxpZGF0b3IncyBkZWZhdWx0IG1lc3NhZ2VcIlxuICAgKi9cbiAgdmFsaWRhdGlvbk1lc3NhZ2VzOiBJVmFsaWRhdGlvbk1lc3NhZ2VzID0ge307XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBzZXRzIHRoZSBsb2cgbGV2ZWwgKGF2YWlsYWJsZSB2YWx1ZXMgZnJvbSBMb2dNYW5hZ2VyLmxvZ0xldmVsKVxuICAgKiBAZGVmYXVsdCBub25lIFwib25seSBpbml0aWFsaXphdGlvbiBpcyBsb2dnZWRcIlxuICAgKi9cbiAgbG9nTGV2ZWw6IG51bWJlciA9IExvZ01hbmFnZXIubG9nTGV2ZWwubm9uZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRlbXBsYXRlcyA9IEdldEJvb3RzdHJhcFRlbXBsYXRlcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIGNhbGxiYWNrPzogKGNvbmZpZzogUGx1Z2luT3B0aW9ucykgPT4gdm9pZCkge1xuXG4gIGNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcihcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKTtcblxuICBsb2dnZXIuaW5mbyhcImluaXRpYWxpemluZyBhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIik7XG5cbiAgLy8gY3JlYXRlIGRlZmF1bHRzL2FwcGx5IHVzZXIgZGVmaW5lZCBjb25maWd1cmF0aW9uXG4gIGNvbnN0IG9wdGlvbnMgPSBuZXcgUGx1Z2luT3B0aW9ucygpO1xuICBpZiAoY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGNhbGxiYWNrKG9wdGlvbnMpO1xuICB9XG5cbiAgcmVnaXN0ZXJMb2dnZXIobG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xuXG4gIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihsb2dnZXIsIG9wdGlvbnMsIGZyYW1ld29ya0NvbmZpZyk7XG5cbiAgKGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIuZ2V0KFJ1bGVzRmFjdG9yeSkgYXMgUnVsZXNGYWN0b3J5KS5yZWdpc3RlcigpO1xuXG4gIGZyYW1ld29ya0NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1xuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXUtanNvbi1zY2hlbWEtZm9ybVwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi92YWx1ZS1jb252ZXJ0ZXJzL251bWJlci12YWx1ZS1jb252ZXJ0ZXJcIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hcnJheS9zZi1hcnJheS1iaW5kaW5nLWJlaGF2aW9yXCIpLFxuXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hcnJheS9zZi1hcnJheVwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL2FycmF5L3NmLWFycmF5LWl0ZW1cIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9vYmplY3Qvc2Ytb2JqZWN0XCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vbnVtYmVyL3NmLW51bWJlclwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL3RleHQvc2Ytc3RyaW5nXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYm9vbGVhbi9zZi1ib29sZWFuXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3RlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwXCIpXG4gIF0pO1xuXG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyTG9nZ2VyKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGxvZ2dlci5zZXRMZXZlbChvcHRpb25zLmxvZ0xldmVsKTtcblxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUxvZ2dlciwgbG9nZ2VyKTtcblxuICBsb2dnZXIuaW5mbyhcInJlZ2lzdGVyZWQgbG9nZ2VyXCIpO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckNvbmZpZ3VyYXRpb24oXG4gIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgb3B0aW9uczogUGx1Z2luT3B0aW9ucyxcbiAgZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uXG4pIHtcbiAgY29uc3QgY29uZmlndXJhdGlvbiA9IG5ldyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbihcbiAgICBvcHRpb25zLnZhbGlkYXRpb25SZW5kZXJlciwgb3B0aW9ucy50ZW1wbGF0ZXMsIG9wdGlvbnMudmFsaWRhdGlvbk1lc3NhZ2VzKTtcblxuICBmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIGNvbmZpZ3VyYXRpb24pO1xuXG4gIGxvZ2dlci5pbmZvKFwicmVnaXN0ZXJlZCBjb25maWd1cmF0aW9uXCIsIGNvbmZpZ3VyYXRpb24pO1xufVxuXG5leHBvcnQge1xuICBjb25maWd1cmUsXG4gIElUZW1wbGF0ZXMsXG4gIElWYWxpZGF0aW9uTWVzc2FnZXMsXG4gIFBsdWdpbk9wdGlvbnMsXG4gIElGb3JtT3B0aW9ucyxcbiAgQXVKc29uU2NoZW1hRm9ybSxcbiAgSUZvcm1PdmVycmlkZSxcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYU51bWJlckRlZmluaXRpb24sXG4gIElKc29uU2NoZW1hU3RyaW5nRGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvblxufTtcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
