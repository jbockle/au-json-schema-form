"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./resources/number");
require("./resources/string");
var bootstrap_validation_renderer_1 = require("./renderers/bootstrap-validation-renderer");
var schema_form_configuration_1 = require("./services/schema-form-configuration");
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_logging_1 = require("aurelia-logging");
var logger_1 = require("./resources/logger");
var index_1 = require("./templates/bootstrap4/index");
var au_json_schema_form_1 = require("./form/au-json-schema-form");
exports.AuJsonSchemaForm = au_json_schema_form_1.AuJsonSchemaForm;
var rules_factory_1 = require("./rules/rules-factory");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhCQUE0QjtBQUM1Qiw4QkFBNEI7QUFDNUIsMkZBQXdGO0FBQ3hGLGtGQUErRTtBQUMvRSx1REFBaUY7QUFFakYsbURBQTRDO0FBQzVDLDZDQUFzRDtBQUV0RCxzREFBcUU7QUFHckUsa0VBQThEO0FBMkc1RCwyQkEzR08sc0NBQWdCLENBMkdQO0FBMUdsQix1REFBcUQ7QUFXckQ7SUF5QkU7UUF4QkE7OztXQUdHO1FBQ0gsdUJBQWtCLEdBQXVCLElBQUksMkRBQTJCLEVBQUUsQ0FBQztRQVEzRTs7O1dBR0c7UUFDSCx1QkFBa0IsR0FBd0IsRUFBRSxDQUFDO1FBRTdDOzs7V0FHRztRQUNILGFBQVEsR0FBVyw4QkFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFHMUMsSUFBSSxDQUFDLFNBQVMsR0FBRyw2QkFBcUIsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFDSCxvQkFBQztBQUFELENBNUJBLEFBNEJDLElBQUE7QUFpRUMsc0NBQWE7QUEvRGYsbUJBQW1CLGVBQXVDLEVBQUUsUUFBMEM7SUFFcEcsSUFBTSxNQUFNLEdBQUcsMkJBQVMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO0lBRXJELE1BQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLENBQUMsQ0FBQztJQUVyRCxtREFBbUQ7SUFDbkQsSUFBTSxPQUFPLEdBQUcsSUFBSSxhQUFhLEVBQUUsQ0FBQztJQUNwQyxJQUFJLFFBQVEsWUFBWSxRQUFRLEVBQUU7UUFDaEMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ25CO0lBRUQsY0FBYyxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFakQscUJBQXFCLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxlQUFlLENBQUMsQ0FBQztJQUV2RCxlQUFlLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyw0QkFBWSxDQUFrQixDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXpFLGVBQWUsQ0FBQyxlQUFlLENBQUM7UUFDOUIsNEJBQVEsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7UUFDakQsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMkNBQTJDLENBQUM7UUFDaEUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsd0NBQXdDLENBQUM7UUFFN0QsNEJBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7UUFDNUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMsNEJBQTRCLENBQUM7UUFDakQsNEJBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7UUFDOUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7UUFDOUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUM7UUFDNUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7UUFDaEQsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMENBQTBDLENBQUM7S0FDaEUsQ0FBQyxDQUFDO0FBRUwsQ0FBQztBQTRCQyw4QkFBUztBQTFCWCx3QkFDRSxNQUF3QixFQUN4QixPQUFzQixFQUN0QixlQUF1QztJQUV2QyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUVsQyxlQUFlLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLHlCQUFnQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBRXJFLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUNuQyxDQUFDO0FBRUQsK0JBQ0UsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7SUFFdkMsSUFBTSxhQUFhLEdBQUcsSUFBSSxtREFBdUIsQ0FDL0MsT0FBTyxDQUFDLGtCQUFrQixFQUFFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFFN0UsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxtREFBdUIsRUFBRSxhQUFhLENBQUMsQ0FBQztJQUVuRixNQUFNLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFLGFBQWEsQ0FBQyxDQUFDO0FBQ3pELENBQUMiLCJmaWxlIjoiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9yZXNvdXJjZXMvbnVtYmVyXCI7XG5pbXBvcnQgXCIuL3Jlc291cmNlcy9zdHJpbmdcIjtcbmltcG9ydCB7IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gXCIuL3JlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlclwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBQTEFURk9STSwgTG9nTWFuYWdlciB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSBcImF1cmVsaWEtbG9nZ2luZ1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElUZW1wbGF0ZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHsgR2V0Qm9vdHN0cmFwVGVtcGxhdGVzIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5kZXhcIjtcbmltcG9ydCB7IElWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3ZhbGlkYXRpb24tbWVzc2FnZXNcIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XG5pbXBvcnQgeyBBdUpzb25TY2hlbWFGb3JtIH0gZnJvbSBcIi4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtXCI7XG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5pbXBvcnQge1xuICBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sXG4gIElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFTdHJpbmdEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uXG59IGZyb20gXCIuL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuXG5jbGFzcyBQbHVnaW5PcHRpb25zIHtcbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBtb2RpZmllcyBET00gdG8gZGlzcGxheSBlcnJvci9zdWNjZXNzIHN0YXRlcyBcbiAgICogQGRlZmF1bHQgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIFwidGFyZ2V0cyBCb290c3RyYXAgdjRcIlxuICAgKi9cbiAgdmFsaWRhdGlvblJlbmRlcmVyOiBWYWxpZGF0aW9uUmVuZGVyZXIgPSBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyKCk7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBkZWZpbmVzIG1vZHVsZU5hbWVzIG9mIGZvcm0gZWxlbWVudHMgXG4gICAqIEBkZWZhdWx0IGJvb3RzdHJhcDQgXCJwcmUtZGVmaW5lZCBjdXN0b20gZWxlbWVudHNcIlxuICAgKi9cbiAgdGVtcGxhdGVzOiBJVGVtcGxhdGVzO1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgZ2xvYmFsIHZhbGlkYXRpb24gbWVzc2FnZSBvdmVycmlkZXMsIGNob29zZSB3aGljaCBtZXNzYWdlcyB5b3Ugd2FudCB0byBvdmVycmlkZSAoZGVmYXVsdClcbiAgICogQGRlZmF1bHQgZW1wdHkgXCJ1c2UgdmFsaWRhdG9yJ3MgZGVmYXVsdCBtZXNzYWdlXCJcbiAgICovXG4gIHZhbGlkYXRpb25NZXNzYWdlczogSVZhbGlkYXRpb25NZXNzYWdlcyA9IHt9O1xuXG4gIC8qKlxuICAgKiBAcHJvcGVydHkgc2V0cyB0aGUgbG9nIGxldmVsIChhdmFpbGFibGUgdmFsdWVzIGZyb20gTG9nTWFuYWdlci5sb2dMZXZlbClcbiAgICogQGRlZmF1bHQgbm9uZSBcIm9ubHkgaW5pdGlhbGl6YXRpb24gaXMgbG9nZ2VkXCJcbiAgICovXG4gIGxvZ0xldmVsOiBudW1iZXIgPSBMb2dNYW5hZ2VyLmxvZ0xldmVsLm5vbmU7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy50ZW1wbGF0ZXMgPSBHZXRCb290c3RyYXBUZW1wbGF0ZXMoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25maWd1cmUoZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBjYWxsYmFjaz86IChjb25maWc6IFBsdWdpbk9wdGlvbnMpID0+IHZvaWQpIHtcblxuICBjb25zdCBsb2dnZXIgPSBnZXRMb2dnZXIoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIik7XG5cbiAgbG9nZ2VyLmluZm8oXCJpbml0aWFsaXppbmcgYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtXCIpO1xuXG4gIC8vIGNyZWF0ZSBkZWZhdWx0cy9hcHBseSB1c2VyIGRlZmluZWQgY29uZmlndXJhdGlvblxuICBjb25zdCBvcHRpb25zID0gbmV3IFBsdWdpbk9wdGlvbnMoKTtcbiAgaWYgKGNhbGxiYWNrIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBjYWxsYmFjayhvcHRpb25zKTtcbiAgfVxuXG4gIHJlZ2lzdGVyTG9nZ2VyKGxvZ2dlciwgb3B0aW9ucywgZnJhbWV3b3JrQ29uZmlnKTtcblxuICByZWdpc3RlckNvbmZpZ3VyYXRpb24obG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xuXG4gIChmcmFtZXdvcmtDb25maWcuY29udGFpbmVyLmdldChSdWxlc0ZhY3RvcnkpIGFzIFJ1bGVzRmFjdG9yeSkucmVnaXN0ZXIoKTtcblxuICBmcmFtZXdvcmtDb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL2F1LWpzb24tc2NoZW1hLWZvcm1cIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vdmFsdWUtY29udmVydGVycy9udW1iZXItdmFsdWUtY29udmVydGVyXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXJyYXkvc2YtYXJyYXktYmluZGluZy1iZWhhdmlvclwiKSxcblxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXJyYXkvc2YtYXJyYXlcIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9hcnJheS9zZi1hcnJheS1pdGVtXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vb2JqZWN0L3NmLW9iamVjdFwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL251bWJlci9zZi1udW1iZXJcIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS90ZXh0L3NmLXN0cmluZ1wiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL2Jvb2xlYW4vc2YtYm9vbGVhblwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcFwiKVxuICBdKTtcblxufVxuXG5mdW5jdGlvbiByZWdpc3RlckxvZ2dlcihcbiAgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cbikge1xuICBsb2dnZXIuc2V0TGV2ZWwob3B0aW9ucy5sb2dMZXZlbCk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Mb2dnZXIsIGxvZ2dlcik7XG5cbiAgbG9nZ2VyLmluZm8oXCJyZWdpc3RlcmVkIGxvZ2dlclwiKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJDb25maWd1cmF0aW9uKFxuICBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gIG9wdGlvbnM6IFBsdWdpbk9wdGlvbnMsXG4gIGZyYW1ld29ya0NvbmZpZzogRnJhbWV3b3JrQ29uZmlndXJhdGlvblxuKSB7XG4gIGNvbnN0IGNvbmZpZ3VyYXRpb24gPSBuZXcgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24oXG4gICAgb3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIsIG9wdGlvbnMudGVtcGxhdGVzLCBvcHRpb25zLnZhbGlkYXRpb25NZXNzYWdlcyk7XG5cbiAgZnJhbWV3b3JrQ29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBjb25maWd1cmF0aW9uKTtcblxuICBsb2dnZXIuaW5mbyhcInJlZ2lzdGVyZWQgY29uZmlndXJhdGlvblwiLCBjb25maWd1cmF0aW9uKTtcbn1cblxuZXhwb3J0IHtcbiAgY29uZmlndXJlLFxuICBJVGVtcGxhdGVzLFxuICBJVmFsaWRhdGlvbk1lc3NhZ2VzLFxuICBQbHVnaW5PcHRpb25zLFxuICBJRm9ybU9wdGlvbnMsXG4gIEF1SnNvblNjaGVtYUZvcm0sXG4gIElGb3JtT3ZlcnJpZGUsXG4gIElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFOdW1iZXJEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYVN0cmluZ0RlZmluaXRpb24sXG4gIElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb25cbn07XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
