System.register(["./renderers/bootstrap-validation-renderer", "./services/global-options", "aurelia-framework", "./form/au-schema-form"], function (exports_1, context_1) {
    "use strict";
    var bootstrap_validation_renderer_1, global_options_1, aurelia_framework_1, au_schema_form_1;
    var __moduleName = context_1 && context_1.id;
    function configure(config, options) {
        var globalOptions = new global_options_1.GlobalOptions(options.renderer || new bootstrap_validation_renderer_1.BootstrapValidationRenderer(), options.templates || [aurelia_framework_1.PLATFORM.moduleName("./templates/bootstrap4/index")]);
        config.container.registerInstance(global_options_1.GlobalOptions, globalOptions);
        config.globalResources([aurelia_framework_1.PLATFORM.moduleName("./form/au-schema-form")]);
    }
    exports_1("configure", configure);
    return {
        setters: [
            function (bootstrap_validation_renderer_1_1) {
                bootstrap_validation_renderer_1 = bootstrap_validation_renderer_1_1;
            },
            function (global_options_1_1) {
                global_options_1 = global_options_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (au_schema_form_1_1) {
                au_schema_form_1 = au_schema_form_1_1;
            }
        ],
        execute: function () {
            exports_1("AuSchemaForm", au_schema_form_1.AuSchemaForm);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBUUEsbUJBQTBCLE1BQThCLEVBQUUsT0FBMkI7UUFDbkYsSUFBTSxhQUFhLEdBQUcsSUFBSSw4QkFBYSxDQUNyQyxPQUFPLENBQUMsUUFBUSxJQUFJLElBQUksMkRBQTJCLEVBQUUsRUFDckQsT0FBTyxDQUFDLFNBQVMsSUFBSSxDQUFDLDRCQUFRLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDLENBQUMsQ0FDM0UsQ0FBQztRQUNGLE1BQU0sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsOEJBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNoRSxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsNEJBQVEsQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQVhRLDZCQUFZO1FBWXJCLENBQUMiLCJmaWxlIjoiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcIi4vcmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyXCI7XG5pbXBvcnQgeyBHbG9iYWxPcHRpb25zIH0gZnJvbSBcIi4vc2VydmljZXMvZ2xvYmFsLW9wdGlvbnNcIjtcbmltcG9ydCB7IEZyYW1ld29ya0NvbmZpZ3VyYXRpb24sIFBMQVRGT1JNIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJU2NoZW1hRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL3NjaGVtYS1mb3JtLW9wdGlvbnNcIjtcbmltcG9ydCB7IEF1U2NoZW1hRm9ybSB9IGZyb20gXCIuL2Zvcm0vYXUtc2NoZW1hLWZvcm1cIjtcblxuZXhwb3J0IHsgQXVTY2hlbWFGb3JtIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoY29uZmlnOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uLCBvcHRpb25zOiBJU2NoZW1hRm9ybU9wdGlvbnMpIHtcbiAgY29uc3QgZ2xvYmFsT3B0aW9ucyA9IG5ldyBHbG9iYWxPcHRpb25zKFxuICAgIG9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlcigpLFxuICAgIG9wdGlvbnMudGVtcGxhdGVzIHx8IFtQTEFURk9STS5tb2R1bGVOYW1lKFwiLi90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbmRleFwiKV1cbiAgKTtcbiAgY29uZmlnLmNvbnRhaW5lci5yZWdpc3Rlckluc3RhbmNlKEdsb2JhbE9wdGlvbnMsIGdsb2JhbE9wdGlvbnMpO1xuICBjb25maWcuZ2xvYmFsUmVzb3VyY2VzKFtQTEFURk9STS5tb2R1bGVOYW1lKFwiLi9mb3JtL2F1LXNjaGVtYS1mb3JtXCIpXSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
