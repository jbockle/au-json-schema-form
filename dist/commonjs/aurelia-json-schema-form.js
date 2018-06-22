"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bootstrap_validation_renderer_1 = require("./renderers/bootstrap-validation-renderer");
var global_options_1 = require("./services/global-options");
var aurelia_framework_1 = require("aurelia-framework");
var au_schema_form_1 = require("./form/au-schema-form");
exports.AuSchemaForm = au_schema_form_1.AuSchemaForm;
function configure(config, options) {
    var globalOptions = new global_options_1.GlobalOptions(options.renderer || new bootstrap_validation_renderer_1.BootstrapValidationRenderer(), options.templates || [aurelia_framework_1.PLATFORM.moduleName("./templates/bootstrap4/index")]);
    config.container.registerInstance(global_options_1.GlobalOptions, globalOptions);
    config.globalResources([aurelia_framework_1.PLATFORM.moduleName("./form/au-schema-form")]);
}
exports.configure = configure;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJGQUF3RjtBQUN4Riw0REFBMEQ7QUFDMUQsdURBQXFFO0FBRXJFLHdEQUFxRDtBQUU1Qyx1QkFGQSw2QkFBWSxDQUVBO0FBRXJCLG1CQUEwQixNQUE4QixFQUFFLE9BQTJCO0lBQ25GLElBQU0sYUFBYSxHQUFHLElBQUksOEJBQWEsQ0FDckMsT0FBTyxDQUFDLFFBQVEsSUFBSSxJQUFJLDJEQUEyQixFQUFFLEVBQ3JELE9BQU8sQ0FBQyxTQUFTLElBQUksQ0FBQyw0QkFBUSxDQUFDLFVBQVUsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDLENBQzNFLENBQUM7SUFDRixNQUFNLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLDhCQUFhLEVBQUUsYUFBYSxDQUFDLENBQUM7SUFDaEUsTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLDRCQUFRLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pFLENBQUM7QUFQRCw4QkFPQyIsImZpbGUiOiJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiLi9yZW5kZXJlcnMvYm9vdHN0cmFwLXZhbGlkYXRpb24tcmVuZGVyZXJcIjtcbmltcG9ydCB7IEdsb2JhbE9wdGlvbnMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9nbG9iYWwtb3B0aW9uc1wiO1xuaW1wb3J0IHsgRnJhbWV3b3JrQ29uZmlndXJhdGlvbiwgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElTY2hlbWFGb3JtT3B0aW9ucyB9IGZyb20gXCIuL2ludGVyZmFjZXMvc2NoZW1hLWZvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgQXVTY2hlbWFGb3JtIH0gZnJvbSBcIi4vZm9ybS9hdS1zY2hlbWEtZm9ybVwiO1xuXG5leHBvcnQgeyBBdVNjaGVtYUZvcm0gfTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZ3VyZShjb25maWc6IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIG9wdGlvbnM6IElTY2hlbWFGb3JtT3B0aW9ucykge1xuICBjb25zdCBnbG9iYWxPcHRpb25zID0gbmV3IEdsb2JhbE9wdGlvbnMoXG4gICAgb3B0aW9ucy5yZW5kZXJlciB8fCBuZXcgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyKCksXG4gICAgb3B0aW9ucy50ZW1wbGF0ZXMgfHwgW1BMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL3RlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4XCIpXVxuICApO1xuICBjb25maWcuY29udGFpbmVyLnJlZ2lzdGVySW5zdGFuY2UoR2xvYmFsT3B0aW9ucywgZ2xvYmFsT3B0aW9ucyk7XG4gIGNvbmZpZy5nbG9iYWxSZXNvdXJjZXMoW1BMQVRGT1JNLm1vZHVsZU5hbWUoXCIuL2Zvcm0vYXUtc2NoZW1hLWZvcm1cIildKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
