System.register(["./renderers/bootstrap-validation-renderer", "./services/schema-form-configuration", "aurelia-framework", "aurelia-logging", "./resources/logger", "./templates/bootstrap4/index", "./form/au-json-schema-form", "./rules/rules-factory"], function (exports_1, context_1) {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBNkNBLG1CQUFtQixlQUF1QyxFQUFFLFFBQTBDO1FBRXBHLElBQU0sTUFBTSxHQUFHLDJCQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7UUFFckQsbURBQW1EO1FBQ25ELElBQU0sT0FBTyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7UUFDcEMsSUFBSSxRQUFRLFlBQVksUUFBUSxFQUFFO1lBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNuQjtRQUVELGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO1FBRWpELHFCQUFxQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7UUFFdkQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQVksQ0FBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUV6RSxlQUFlLENBQUMsZUFBZSxDQUFDO1lBQzlCLDRCQUFRLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDO1lBQ2pELDRCQUFRLENBQUMsVUFBVSxDQUFDLDJDQUEyQyxDQUFDO1lBQ2hFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHdDQUF3QyxDQUFDO1lBRTdELDRCQUFRLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1lBQzVDLDRCQUFRLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDO1lBQ2pELDRCQUFRLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO1lBQzlDLDRCQUFRLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO1lBQzlDLDRCQUFRLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO1lBQzVDLDRCQUFRLENBQUMsVUFBVSxDQUFDLDJCQUEyQixDQUFDO1lBQ2hELDRCQUFRLENBQUMsVUFBVSxDQUFDLDBDQUEwQyxDQUFDO1NBQ2hFLENBQUMsQ0FBQztJQUVMLENBQUM7O0lBRUQsd0JBQ0UsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7UUFFdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFbEMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUVyRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELCtCQUNFLE1BQXdCLEVBQ3hCLE9BQXNCLEVBQ3RCLGVBQXVDO1FBRXZDLElBQU0sYUFBYSxHQUFHLElBQUksbURBQXVCLENBQy9DLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTdFLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsbURBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFFbkYsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUN6RCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQ0E1RlEsc0NBQWdCO1lBS3pCO2dCQXlCRTtvQkF4QkE7Ozt1QkFHRztvQkFDSCx1QkFBa0IsR0FBdUIsSUFBSSwyREFBMkIsRUFBRSxDQUFDO29CQVEzRTs7O3VCQUdHO29CQUNILHVCQUFrQixHQUF3QixFQUFFLENBQUM7b0JBRTdDOzs7dUJBR0c7b0JBQ0gsYUFBUSxHQUFXLDhCQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztvQkFHMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyw2QkFBcUIsRUFBRSxDQUFDO2dCQUMzQyxDQUFDO2dCQUNILG9CQUFDO1lBQUQsQ0E1QkEsQUE0QkMsSUFBQTs7UUF1RUQsQ0FBQyIsImZpbGUiOiJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiLi9yZW5kZXJlcnMvYm9vdHN0cmFwLXZhbGlkYXRpb24tcmVuZGVyZXJcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgUExBVEZPUk0sIExvZ01hbmFnZXIgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gXCJhdXJlbGlhLWxvZ2dpbmdcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJVGVtcGxhdGVzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy90ZW1wbGF0ZXNcIjtcbmltcG9ydCB7IEdldEJvb3RzdHJhcFRlbXBsYXRlcyB9IGZyb20gXCIuL3RlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4XCI7XG5pbXBvcnQgeyBJVmFsaWRhdGlvbk1lc3NhZ2VzIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy92YWxpZGF0aW9uLW1lc3NhZ2VzXCI7XG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgQXVKc29uU2NoZW1hRm9ybSB9IGZyb20gXCIuL2Zvcm0vYXUtanNvbi1zY2hlbWEtZm9ybVwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xuaW1wb3J0IHsgSUZvcm0gfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2Zvcm1cIjtcbmltcG9ydCB7IElKc29uU2NoZW1hRGVmaW5pdGlvbiB9IGZyb20gXCIuL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuXG5jbGFzcyBQbHVnaW5PcHRpb25zIHtcbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBtb2RpZmllcyBET00gdG8gZGlzcGxheSBlcnJvci9zdWNjZXNzIHN0YXRlcyBcbiAgICogQGRlZmF1bHQgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIFwidGFyZ2V0cyBCb290c3RyYXAgdjRcIlxuICAgKi9cbiAgdmFsaWRhdGlvblJlbmRlcmVyOiBWYWxpZGF0aW9uUmVuZGVyZXIgPSBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyKCk7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBkZWZpbmVzIG1vZHVsZU5hbWVzIG9mIGZvcm0gZWxlbWVudHMgXG4gICAqIEBkZWZhdWx0IGJvb3RzdHJhcDQgXCJwcmUtZGVmaW5lZCBjdXN0b20gZWxlbWVudHNcIlxuICAgKi9cbiAgdGVtcGxhdGVzOiBJVGVtcGxhdGVzO1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgZ2xvYmFsIHZhbGlkYXRpb24gbWVzc2FnZSBvdmVycmlkZXMsIGNob29zZSB3aGljaCBtZXNzYWdlcyB5b3Ugd2FudCB0byBvdmVycmlkZSAoZGVmYXVsdClcbiAgICogQGRlZmF1bHQgZW1wdHkgXCJ1c2UgdmFsaWRhdG9yJ3MgZGVmYXVsdCBtZXNzYWdlXCJcbiAgICovXG4gIHZhbGlkYXRpb25NZXNzYWdlczogSVZhbGlkYXRpb25NZXNzYWdlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgc2V0cyB0aGUgbG9nIGxldmVsIChhdmFpbGFibGUgdmFsdWVzIGZyb20gTG9nTWFuYWdlci5sb2dMZXZlbClcbiAgICogQGRlZmF1bHQgbm9uZSBcIm9ubHkgaW5pdGlhbGl6YXRpb24gaXMgbG9nZ2VkXCJcbiAgICovXG4gIGxvZ0xldmVsOiBudW1iZXIgPSBMb2dNYW5hZ2VyLmxvZ0xldmVsLm5vbmU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBHZXRCb290c3RyYXBUZW1wbGF0ZXMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25maWd1cmUoZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBjYWxsYmFjaz86IChjb25maWc6IFBsdWdpbk9wdGlvbnMpID0+IHZvaWQpIHtcblxuICBjb25zdCBsb2dnZXIgPSBnZXRMb2dnZXIoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIik7XG5cbiAgbG9nZ2VyLmluZm8oXCJpbml0aWFsaXppbmcgYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtXCIpO1xuXG4gIC8vIGNyZWF0ZSBkZWZhdWx0cy9hcHBseSB1c2VyIGRlZmluZWQgY29uZmlndXJhdGlvblxuICBjb25zdCBvcHRpb25zID0gbmV3IFBsdWdpbk9wdGlvbnMoKTtcbiAgaWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBjYWxsYmFjayhvcHRpb25zKTtcbiAgfVxuXG4gIHJlZ2lzdGVyTG9nZ2VyKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcblxuICByZWdpc3RlckNvbmZpZ3VyYXRpb24obG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xuXG4gIChmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLmdldChSdWxlc0ZhY3RvcnkpIGFzIFJ1bGVzRmFjdG9yeSkucmVnaXN0ZXIoKTtcblxuICBmcmFtZXdvcmtDb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm1cIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vdmFsdWUtY29udmVydGVycy9udW1iZXItdmFsdWUtY29udmVydGVyXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXJyYXkvc2YtYXJyYXktYmluZGluZy1iZWhhdmlvclwiKSxcblxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXJyYXkvc2YtYXJyYXlcIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hcnJheS9zZi1hcnJheS1pdGVtXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vb2JqZWN0L3NmLW9iamVjdFwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL251bWJlci9zZi1udW1iZXJcIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS90ZXh0L3NmLXN0cmluZ1wiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL2Jvb2xlYW4vc2YtYm9vbGVhblwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcFwiKVxuICBdKTtcblxufVxuXG5mdW5jdGlvbiByZWdpc3RlckxvZ2dlcihcbiAgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cbikge1xuICBsb2dnZXIuc2V0TGV2ZWwob3B0aW9ucy5sb2dMZXZlbCk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Mb2dnZXIsIGxvZ2dlcik7XG5cbiAgbG9nZ2VyLmluZm8oXCJyZWdpc3RlcmVkIGxvZ2dlclwiKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDb25maWd1cmF0aW9uKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24oXG4gICAgb3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIsIG9wdGlvbnMudGVtcGxhdGVzLCBvcHRpb25zLnZhbGlkYXRpb25NZXNzYWdlcyk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBjb25maWd1cmF0aW9uKTtcblxuICBsb2dnZXIuaW5mbyhcInJlZ2lzdGVyZWQgY29uZmlndXJhdGlvblwiLCBjb25maWd1cmF0aW9uKTtcbn1cblxuZXhwb3J0IHtcbiAgY29uZmlndXJlLFxuICBJVGVtcGxhdGVzLFxuICBJVmFsaWRhdGlvbk1lc3NhZ2VzLFxuICBQbHVnaW5PcHRpb25zLFxuICBJRm9ybU9wdGlvbnMsXG4gIEF1SnNvblNjaGVtYUZvcm0sXG4gIElGb3JtLFxuICBJSnNvblNjaGVtYURlZmluaXRpb25cbn07XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
