System.register(["aurelia-logging", "../resources/string"], function (exports_1, context_1) {
    "use strict";
    var aurelia_logging_1, string_1, overrideMarker;
    var __moduleName = context_1 && context_1.id;
    function isOverride(key) {
        var val = key.charAt(0) === overrideMarker;
        aurelia_logging_1.getLogger("aurelia-json-schema-form")
            .info("isOverride", { key: key, val: val });
        return val;
    }
    exports_1("isOverride", isOverride);
    function setFormOverrides(form, parentSchema, formKey, schema) {
        aurelia_logging_1.getLogger("aurelia-json-schema-form")
            .info("setOverrideOptions", { form: form, parentSchema: parentSchema, formKey: formKey, schema: schema });
        schema.title = schema.title || !!formKey ? string_1.fromCamelCase(formKey) : undefined;
        form.$schema = schema;
        if (parentSchema && parentSchema.type === "object") {
            form.$required = parentSchema.required
                ? parentSchema.required.indexOf(formKey) > -1 : false;
        }
    }
    exports_1("setFormOverrides", setFormOverrides);
    return {
        setters: [
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            },
            function (string_1_1) {
                string_1 = string_1_1;
            }
        ],
        execute: function () {
            overrideMarker = "$";
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBd0JBLG9CQUEyQixHQUFXO1FBQ3BDLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDO1FBRTdDLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7YUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0lBRUQsMEJBQ0UsSUFBbUIsRUFBRSxZQUFtQyxFQUFFLE9BQWUsRUFBRSxNQUE2QjtRQUV4RywyQkFBUyxDQUFDLDBCQUEwQixDQUFDO2FBQ2xDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztRQUN2RSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsc0JBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQzlFLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXRCLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFFBQVE7Z0JBQ3BDLENBQUMsQ0FBRSxZQUE0QyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUMxRjtJQUNILENBQUM7Ozs7Ozs7Ozs7OztZQXJCSyxjQUFjLEdBQVcsR0FBRyxDQUFDO1FBc0JuQyxDQUFDIiwiZmlsZSI6ImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvblxufSBmcm9tIFwiLi9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBnZXRMb2dnZXIgfSBmcm9tIFwiYXVyZWxpYS1sb2dnaW5nXCI7XG5pbXBvcnQgeyBmcm9tQ2FtZWxDYXNlIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9zdHJpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybU92ZXJyaWRlIHtcbiAgW2tleTogc3RyaW5nXTogSUZvcm1PdmVycmlkZVtdIHwgSUZvcm1PdmVycmlkZSB8IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfCBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICRub1RpdGxlPzogYm9vbGVhbjtcbiAgJHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAkaHRtbENsYXNzPzogc3RyaW5nO1xuICAkYWx0VGVtcGxhdGU/OiBzdHJpbmc7XG4gICRtaW5EYXRlPzogc3RyaW5nOyAvLyB5eXl5LU1NLWRkXG4gICRtYXhEYXRlPzogc3RyaW5nOyAvLyB5eXl5LU1NLWRkXG4gICRzY2hlbWE/OiBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICRyZXF1aXJlZD86IGJvb2xlYW47XG4gICRub1NlcGFyYXRvcj86IGJvb2xlYW47XG4gICRzdGVwPzogbnVtYmVyOyAvLyByYW5nZSBzbGlkZXIgc3RlcHNcbiAgJHBhcmVudEZvcm0/OiBJRm9ybU92ZXJyaWRlO1xufVxuXG5jb25zdCBvdmVycmlkZU1hcmtlcjogc3RyaW5nID0gXCIkXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNPdmVycmlkZShrZXk6IHN0cmluZykge1xuICBjb25zdCB2YWwgPSBrZXkuY2hhckF0KDApID09PSBvdmVycmlkZU1hcmtlcjtcblxuICBnZXRMb2dnZXIoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIilcbiAgICAuaW5mbyhcImlzT3ZlcnJpZGVcIiwgeyBrZXksIHZhbCB9KTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZvcm1PdmVycmlkZXMoXG4gIGZvcm06IElGb3JtT3ZlcnJpZGUsIHBhcmVudFNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCBmb3JtS2V5OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uXG4pIHtcbiAgZ2V0TG9nZ2VyKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtXCIpXG4gICAgLmluZm8oXCJzZXRPdmVycmlkZU9wdGlvbnNcIiwgeyBmb3JtLCBwYXJlbnRTY2hlbWEsIGZvcm1LZXksIHNjaGVtYSB9KTtcbiAgc2NoZW1hLnRpdGxlID0gc2NoZW1hLnRpdGxlIHx8ICEhZm9ybUtleSA/IGZyb21DYW1lbENhc2UoZm9ybUtleSkgOiB1bmRlZmluZWQ7XG4gIGZvcm0uJHNjaGVtYSA9IHNjaGVtYTtcblxuICBpZiAocGFyZW50U2NoZW1hICYmIHBhcmVudFNjaGVtYS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgZm9ybS4kcmVxdWlyZWQgPSBwYXJlbnRTY2hlbWEucmVxdWlyZWRcbiAgICAgID8gKHBhcmVudFNjaGVtYSBhcyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pLnJlcXVpcmVkLmluZGV4T2YoZm9ybUtleSkgPiAtMSA6IGZhbHNlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
