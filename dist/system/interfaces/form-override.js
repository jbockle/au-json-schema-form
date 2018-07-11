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
            form.$required = parentSchema.required
                ? parentSchema.required.indexOf(formKey) > -1 : false;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBeUJBLG9CQUEyQixHQUFXO1FBQ3BDLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDO1FBRTdDLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7YUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0lBRUQsMEJBQ0UsSUFBbUIsRUFBRSxZQUFtQyxFQUFFLE9BQWUsRUFBRSxNQUE2QjtRQUV4RywyQkFBUyxDQUFDLDBCQUEwQixDQUFDO2FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXRCLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFFBQVE7Z0JBQ3BDLENBQUMsQ0FBRSxZQUE0QyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUMxRjtJQUNILENBQUM7O0lBRUQsdUJBQXVCLEdBQVc7UUFDaEMsT0FBTyxHQUFHO2FBQ1AsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7YUFDMUIsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7Ozs7O1lBM0JLLGNBQWMsR0FBVyxHQUFHLENBQUM7UUE0Qm5DLENBQUMiLCJmaWxlIjoiaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uXG59IGZyb20gXCIuL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gXCJhdXJlbGlhLWxvZ2dpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybU92ZXJyaWRlIHtcbiAgW2tleTogc3RyaW5nXTogSUZvcm1PdmVycmlkZVtdIHwgSUZvcm1PdmVycmlkZSB8IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfCBJSnNvblNjaGVtYURlZmluaXRpb247XG4gICRub1RpdGxlPzogYm9vbGVhbjtcbiAgJGFycmF5SXRlbT86IElGb3JtT3ZlcnJpZGU7XG4gICRhcnJheVN0YXJ0RW1wdHk/OiBib29sZWFuO1xuICAkcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICRodG1sQ2xhc3M/OiBzdHJpbmc7XG4gICRhbHRUZW1wbGF0ZT86IHN0cmluZztcbiAgJG1pbkRhdGU/OiBzdHJpbmc7IC8vIHl5eXktTU0tZGRcbiAgJG1heERhdGU/OiBzdHJpbmc7IC8vIHl5eXktTU0tZGRcbiAgJHNjaGVtYT86IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgJHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgJG5vU2VwYXJhdG9yPzogYm9vbGVhbjtcbiAgJHN0ZXA/OiBudW1iZXI7IC8vIHJhbmdlIHNsaWRlciBzdGVwc1xuICAkcGFyZW50Rm9ybT86IElGb3JtT3ZlcnJpZGU7XG59XG5cbmNvbnN0IG92ZXJyaWRlTWFya2VyOiBzdHJpbmcgPSBcIiRcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc092ZXJyaWRlKGtleTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbCA9IGtleS5jaGFyQXQoMCkgPT09IG92ZXJyaWRlTWFya2VyO1xuXG4gIGdldExvZ2dlcihcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKVxuICAgIC5pbmZvKFwiaXNPdmVycmlkZVwiLCB7IGtleSwgdmFsIH0pO1xuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9ybU92ZXJyaWRlcyhcbiAgZm9ybTogSUZvcm1PdmVycmlkZSwgcGFyZW50U2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb25cbikge1xuICBnZXRMb2dnZXIoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIilcbiAgICAuaW5mbyhcInNldEZvcm1PdmVycmlkZXNcIiwgeyBmb3JtLCBwYXJlbnRTY2hlbWEsIGZvcm1LZXksIHNjaGVtYSB9KTtcbiAgc2NoZW1hLnRpdGxlID0gc2NoZW1hLnRpdGxlIHx8ICghIWZvcm1LZXkgPyBmcm9tQ2FtZWxDYXNlKGZvcm1LZXkpIDogdW5kZWZpbmVkKTtcbiAgZm9ybS4kc2NoZW1hID0gc2NoZW1hO1xuXG4gIGlmIChwYXJlbnRTY2hlbWEgJiYgcGFyZW50U2NoZW1hLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBmb3JtLiRyZXF1aXJlZCA9IHBhcmVudFNjaGVtYS5yZXF1aXJlZFxuICAgICAgPyAocGFyZW50U2NoZW1hIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikucmVxdWlyZWQuaW5kZXhPZihmb3JtS2V5KSA+IC0xIDogZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbUNhbWVsQ2FzZSh2YWw6IHN0cmluZykge1xuICByZXR1cm4gdmFsXG4gICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAucmVwbGFjZSgvXi4vLCAoc3RyKSA9PiBzdHIudG9VcHBlckNhc2UoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
