"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJGQUF3RjtBQUN4RixrRkFBK0U7QUFDL0UsdURBQWlGO0FBRWpGLG1EQUE0QztBQUM1Qyw2Q0FBc0Q7QUFFdEQsc0RBQXFFO0FBR3JFLGtFQUE4RDtBQStGNUQsMkJBL0ZPLHNDQUFnQixDQStGUDtBQTlGbEIsdURBQXFEO0FBRXJEO0lBeUJFO1FBeEJBOzs7V0FHRztRQUNILHVCQUFrQixHQUF1QixJQUFJLDJEQUEyQixFQUFFLENBQUM7UUFRM0U7OztXQUdHO1FBQ0gsdUJBQWtCLEdBQXdCLEVBQUUsQ0FBQztRQUU3Qzs7O1dBR0c7UUFDSCxhQUFRLEdBQVcsOEJBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBRzFDLElBQUksQ0FBQyxTQUFTLEdBQUcsNkJBQXFCLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQTVCQSxBQTRCQyxJQUFBO0FBOERDLHNDQUFhO0FBNURmLG1CQUFtQixlQUF1QyxFQUFFLFFBQTBDO0lBRXBHLElBQU0sTUFBTSxHQUFHLDJCQUFTLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUVyRCxNQUFNLENBQUMsSUFBSSxDQUFDLHVDQUF1QyxDQUFDLENBQUM7SUFFckQsbURBQW1EO0lBQ25ELElBQU0sT0FBTyxHQUFHLElBQUksYUFBYSxFQUFFLENBQUM7SUFDcEMsSUFBSSxRQUFRLFlBQVksUUFBUSxFQUFFO1FBQ2hDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztLQUNuQjtJQUVELGNBQWMsQ0FBQyxNQUFNLEVBQUUsT0FBTyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0lBRWpELHFCQUFxQixDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFFdkQsZUFBZSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQVksQ0FBa0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUV6RSxlQUFlLENBQUMsZUFBZSxDQUFDO1FBQzlCLDRCQUFRLENBQUMsVUFBVSxDQUFDLDRCQUE0QixDQUFDO1FBQ2pELDRCQUFRLENBQUMsVUFBVSxDQUFDLDJDQUEyQyxDQUFDO1FBRWhFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO1FBQzlDLDRCQUFRLENBQUMsVUFBVSxDQUFDLHlCQUF5QixDQUFDO1FBQzlDLDRCQUFRLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDO0tBQzdDLENBQUMsQ0FBQztBQUVMLENBQUM7QUE4QkMsOEJBQVM7QUE1Qlgsd0JBQ0UsTUFBd0IsRUFDeEIsT0FBc0IsRUFDdEIsZUFBdUM7SUFFdkMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFbEMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUVyRSxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELCtCQUNFLE1BQXdCLEVBQ3hCLE9BQXNCLEVBQ3RCLGVBQXVDO0lBRXZDLElBQU0sYUFBYSxHQUFHLElBQUksbURBQXVCLENBQy9DLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRSxPQUFPLENBQUMsU0FBUyxFQUFFLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0lBRTdFLGVBQWUsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsbURBQXVCLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFFbkYsTUFBTSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRSxhQUFhLENBQUMsQ0FBQztBQUN6RCxDQUFDIiwiZmlsZSI6ImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gXCIuL3JlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlclwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBQTEFURk9STSwgTG9nTWFuYWdlciB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSBcImF1cmVsaWEtbG9nZ2luZ1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElUZW1wbGF0ZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3RlbXBsYXRlc1wiO1xuaW1wb3J0IHsgR2V0Qm9vdHN0cmFwVGVtcGxhdGVzIH0gZnJvbSBcIi4vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5kZXhcIjtcbmltcG9ydCB7IElWYWxpZGF0aW9uTWVzc2FnZXMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3ZhbGlkYXRpb24tbWVzc2FnZXNcIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XG5pbXBvcnQgeyBBdUpzb25TY2hlbWFGb3JtIH0gZnJvbSBcIi4vZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtXCI7XG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5cbmNsYXNzIFBsdWdpbk9wdGlvbnMge1xuICAvKipcbiAgICogQHByb3BlcnR5IG1vZGlmaWVzIERPTSB0byBkaXNwbGF5IGVycm9yL3N1Y2Nlc3Mgc3RhdGVzIFxuICAgKiBAZGVmYXVsdCBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgXCJ0YXJnZXRzIEJvb3RzdHJhcCB2NFwiXG4gICAqL1xuICB2YWxpZGF0aW9uUmVuZGVyZXI6IFZhbGlkYXRpb25SZW5kZXJlciA9IG5ldyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIoKTtcblxuICAvKipcbiAgICogQHByb3BlcnR5IGRlZmluZXMgbW9kdWxlTmFtZXMgb2YgZm9ybSBlbGVtZW50cyBcbiAgICogQGRlZmF1bHQgYm9vdHN0cmFwNCBcInByZS1kZWZpbmVkIGN1c3RvbSBlbGVtZW50c1wiXG4gICAqL1xuICB0ZW1wbGF0ZXM6IElUZW1wbGF0ZXM7XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBnbG9iYWwgdmFsaWRhdGlvbiBtZXNzYWdlIG92ZXJyaWRlcywgY2hvb3NlIHdoaWNoIG1lc3NhZ2VzIHlvdSB3YW50IHRvIG92ZXJyaWRlIChkZWZhdWx0KVxuICAgKiBAZGVmYXVsdCBlbXB0eSBcInVzZSB2YWxpZGF0b3IncyBkZWZhdWx0IG1lc3NhZ2VcIlxuICAgKi9cbiAgdmFsaWRhdGlvbk1lc3NhZ2VzOiBJVmFsaWRhdGlvbk1lc3NhZ2VzID0ge307XG5cbiAgLyoqXG4gICAqIEBwcm9wZXJ0eSBzZXRzIHRoZSBsb2cgbGV2ZWwgKGF2YWlsYWJsZSB2YWx1ZXMgZnJvbSBMb2dNYW5hZ2VyLmxvZ0xldmVsKVxuICAgKiBAZGVmYXVsdCBub25lIFwib25seSBpbml0aWFsaXphdGlvbiBpcyBsb2dnZWRcIlxuICAgKi9cbiAgbG9nTGV2ZWw6IG51bWJlciA9IExvZ01hbmFnZXIubG9nTGV2ZWwubm9uZTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRlbXBsYXRlcyA9IEdldEJvb3RzdHJhcFRlbXBsYXRlcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmZpZ3VyZShmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIGNhbGxiYWNrPzogKGNvbmZpZzogUGx1Z2luT3B0aW9ucykgPT4gdm9pZCkge1xuXG4gIGNvbnN0IGxvZ2dlciA9IGdldExvZ2dlcihcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKTtcblxuICBsb2dnZXIuaW5mbyhcImluaXRpYWxpemluZyBhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIik7XG5cbiAgLy8gY3JlYXRlIGRlZmF1bHRzL2FwcGx5IHVzZXIgZGVmaW5lZCBjb25maWd1cmF0aW9uXG4gIGNvbnN0IG9wdGlvbnMgPSBuZXcgUGx1Z2luT3B0aW9ucygpO1xuICBpZiAoY2FsbGJhY2sgaW5zdGFuY2VvZiBGdW5jdGlvbikge1xuICAgIGNhbGxiYWNrKG9wdGlvbnMpO1xuICB9XG5cbiAgcmVnaXN0ZXJMb2dnZXIobG9nZ2VyLCBvcHRpb25zLCBmcmFtZXdvcmtDb25maWcpO1xuXG4gIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihsb2dnZXIsIG9wdGlvbnMsIGZyYW1ld29ya0NvbmZpZyk7XG5cbiAgKGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIuZ2V0KFJ1bGVzRmFjdG9yeSkgYXMgUnVsZXNGYWN0b3J5KS5yZWdpc3RlcigpO1xuXG4gIGZyYW1ld29ya0NvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1xuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXUtanNvbi1zY2hlbWEtZm9ybVwiKSxcbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi92YWx1ZS1jb252ZXJ0ZXJzL251bWJlci12YWx1ZS1jb252ZXJ0ZXJcIiksXG5cbiAgICBQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL29iamVjdC9zZi1vYmplY3RcIiksXG4gICAgUExBVEZPUk0ubW9kdWxlTmFtZShcIi4vZm9ybS9udW1iZXIvc2YtbnVtYmVyXCIpLFxuICAgIFBMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vdGV4dC9zZi1zdHJpbmdcIilcbiAgXSk7XG5cbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJMb2dnZXIoXG4gIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgb3B0aW9uczogUGx1Z2luT3B0aW9ucyxcbiAgZnJhbWV3b3JrQ29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uXG4pIHtcbiAgbG9nZ2VyLnNldExldmVsKG9wdGlvbnMubG9nTGV2ZWwpO1xuXG4gIGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShTY2hlbWFGb3JtTG9nZ2VyLCBsb2dnZXIpO1xuXG4gIGxvZ2dlci5pbmZvKFwicmVnaXN0ZXJlZCBsb2dnZXJcIik7XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyQ29uZmlndXJhdGlvbihcbiAgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICBvcHRpb25zOiBQbHVnaW5PcHRpb25zLFxuICBmcmFtZXdvcmtDb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb25cbikge1xuICBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKFxuICAgIG9wdGlvbnMudmFsaWRhdGlvblJlbmRlcmVyLCBvcHRpb25zLnRlbXBsYXRlcywgb3B0aW9ucy52YWxpZGF0aW9uTWVzc2FnZXMpO1xuXG4gIGZyYW1ld29ya0NvbmZpZy5jb250YWluZXIucmVnaXN0ZXJJbnN0YW5jZShTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgY29uZmlndXJhdGlvbik7XG5cbiAgbG9nZ2VyLmluZm8oXCJyZWdpc3RlcmVkIGNvbmZpZ3VyYXRpb25cIiwgY29uZmlndXJhdGlvbik7XG59XG5cbmV4cG9ydCAqIGZyb20gXCIuL2ludGVyZmFjZXMvZm9ybVwiO1xuZXhwb3J0ICogZnJvbSBcIi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5leHBvcnQge1xuICBjb25maWd1cmUsXG4gIElUZW1wbGF0ZXMsXG4gIElWYWxpZGF0aW9uTWVzc2FnZXMsXG4gIFBsdWdpbk9wdGlvbnMsXG4gIElGb3JtT3B0aW9ucyxcbiAgQXVKc29uU2NoZW1hRm9ybVxufTtcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
