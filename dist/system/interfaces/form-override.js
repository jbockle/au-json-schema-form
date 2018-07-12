System.register(["aurelia-logging"], function (exports_1, context_1) {
    "use strict";
    var aurelia_logging_1, overrideMarker;
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
            .info("setFormOverrides", { form: form, parentSchema: parentSchema, formKey: formKey, schema: schema });
        schema.title = schema.title || (!!formKey ? fromCamelCase(formKey) : undefined);
        form.$schema = schema;
        if (parentSchema && parentSchema.type === "object") {
            form.$required = form.$required || (parentSchema.required
                ? parentSchema.required.indexOf(formKey) > -1 : false);
        }
    }
    exports_1("setFormOverrides", setFormOverrides);
    function fromCamelCase(val) {
        return val
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, function (str) { return str.toUpperCase(); });
    }
    return {
        setters: [
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            }
        ],
        execute: function () {
            overrideMarker = "$";
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBNkJBLG9CQUEyQixHQUFXO1FBQ3BDLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDO1FBRTdDLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7YUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0lBRUQsMEJBQ0UsSUFBbUIsRUFBRSxZQUFtQyxFQUFFLE9BQWUsRUFBRSxNQUE2QjtRQUV4RywyQkFBUyxDQUFDLDBCQUEwQixDQUFDO2FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXRCLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRO2dCQUN2RCxDQUFDLENBQUUsWUFBNEMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRjtJQUNILENBQUM7O0lBRUQsdUJBQXVCLEdBQVc7UUFDaEMsT0FBTyxHQUFHO2FBQ1AsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7YUFDMUIsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7Ozs7O1lBM0JLLGNBQWMsR0FBVyxHQUFHLENBQUM7UUE0Qm5DLENBQUMiLCJmaWxlIjoiaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb25cbn0gZnJvbSBcIi4vanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSBcImF1cmVsaWEtbG9nZ2luZ1wiO1xuaW1wb3J0IHsgSVRlbXBsYXRlTW9kdWxlIH0gZnJvbSBcIi4vdGVtcGxhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybU92ZXJyaWRlIHtcbiAgW2tleTogc3RyaW5nXTogSUZvcm1PdmVycmlkZVtdIHwgSUZvcm1PdmVycmlkZSB8IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfCBJSnNvblNjaGVtYURlZmluaXRpb24gfCBJVGVtcGxhdGVNb2R1bGU7XG4gIF90ZW1wbGF0ZT86IElUZW1wbGF0ZU1vZHVsZTtcbiAgJG5vVGl0bGU/OiBib29sZWFuO1xuICAkYXJyYXlJdGVtPzogSUZvcm1PdmVycmlkZTtcbiAgJG5vRW1wdHlBcnJheUluaXRpYWxpemF0aW9uPzogYm9vbGVhbjtcbiAgJG5vdFJlbW92YWJsZT86IGJvb2xlYW47XG4gICRhcnJheUFzVGFicz86IGJvb2xlYW47XG4gICR0YWJUaXRsZT86IHN0cmluZztcbiAgJHBsYWNlaG9sZGVyPzogc3RyaW5nO1xuICAkaHRtbENsYXNzPzogc3RyaW5nO1xuICAkYWx0VGVtcGxhdGU/OiBzdHJpbmc7XG4gICRtaW5EYXRlPzogc3RyaW5nOyAvLyB5eXl5LU1NLWRkXG4gICRtYXhEYXRlPzogc3RyaW5nOyAvLyB5eXl5LU1NLWRkXG4gICRzY2hlbWE/OiBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICRyZXF1aXJlZD86IGJvb2xlYW47XG4gICRub1NlcGFyYXRvcj86IGJvb2xlYW47XG4gICRzdGVwPzogbnVtYmVyOyAvLyByYW5nZSBzbGlkZXIgc3RlcHNcbiAgJHBhcmVudEZvcm0/OiBJRm9ybU92ZXJyaWRlO1xufVxuXG5jb25zdCBvdmVycmlkZU1hcmtlcjogc3RyaW5nID0gXCIkXCI7XG5leHBvcnQgZnVuY3Rpb24gaXNPdmVycmlkZShrZXk6IHN0cmluZykge1xuICBjb25zdCB2YWwgPSBrZXkuY2hhckF0KDApID09PSBvdmVycmlkZU1hcmtlcjtcblxuICBnZXRMb2dnZXIoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIilcbiAgICAuaW5mbyhcImlzT3ZlcnJpZGVcIiwgeyBrZXksIHZhbCB9KTtcbiAgcmV0dXJuIHZhbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZvcm1PdmVycmlkZXMoXG4gIGZvcm06IElGb3JtT3ZlcnJpZGUsIHBhcmVudFNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uLCBmb3JtS2V5OiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uXG4pIHtcbiAgZ2V0TG9nZ2VyKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtXCIpXG4gICAgLmluZm8oXCJzZXRGb3JtT3ZlcnJpZGVzXCIsIHsgZm9ybSwgcGFyZW50U2NoZW1hLCBmb3JtS2V5LCBzY2hlbWEgfSk7XG4gIHNjaGVtYS50aXRsZSA9IHNjaGVtYS50aXRsZSB8fCAoISFmb3JtS2V5ID8gZnJvbUNhbWVsQ2FzZShmb3JtS2V5KSA6IHVuZGVmaW5lZCk7XG4gIGZvcm0uJHNjaGVtYSA9IHNjaGVtYTtcblxuICBpZiAocGFyZW50U2NoZW1hICYmIHBhcmVudFNjaGVtYS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgZm9ybS4kcmVxdWlyZWQgPSBmb3JtLiRyZXF1aXJlZCB8fCAocGFyZW50U2NoZW1hLnJlcXVpcmVkXG4gICAgICA/IChwYXJlbnRTY2hlbWEgYXMgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKS5yZXF1aXJlZC5pbmRleE9mKGZvcm1LZXkpID4gLTEgOiBmYWxzZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbUNhbWVsQ2FzZSh2YWw6IHN0cmluZykge1xuICByZXR1cm4gdmFsXG4gICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAucmVwbGFjZSgvXi4vLCAoc3RyKSA9PiBzdHIudG9VcHBlckNhc2UoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
