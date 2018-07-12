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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBNkJBLG9CQUEyQixHQUFXO1FBQ3BDLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDO1FBRTdDLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7YUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0lBRUQsMEJBQ0UsSUFBbUIsRUFBRSxZQUFtQyxFQUFFLE9BQWUsRUFBRSxNQUE2QjtRQUV4RywyQkFBUyxDQUFDLDBCQUEwQixDQUFDO2FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXRCLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRO2dCQUN2RCxDQUFDLENBQUUsWUFBNEMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRjtJQUNILENBQUM7O0lBRUQsdUJBQXVCLEdBQVc7UUFDaEMsT0FBTyxHQUFHO2FBQ1AsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7YUFDMUIsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7Ozs7O1lBM0JLLGNBQWMsR0FBVyxHQUFHLENBQUM7UUE0Qm5DLENBQUMiLCJmaWxlIjoiaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb25cbn0gZnJvbSBcIi4vanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSBcImF1cmVsaWEtbG9nZ2luZ1wiO1xuaW1wb3J0IHsgSVRlbXBsYXRlTW9kdWxlIH0gZnJvbSBcIi4vdGVtcGxhdGVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybU92ZXJyaWRlIHtcbiAgW2tleTogc3RyaW5nXTogSUZvcm1PdmVycmlkZVtdIHwgSUZvcm1PdmVycmlkZSB8IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfCBJSnNvblNjaGVtYURlZmluaXRpb24gfCBJVGVtcGxhdGVNb2R1bGU7XG4gIF90ZW1wbGF0ZTogSVRlbXBsYXRlTW9kdWxlO1xuICAkbm9UaXRsZT86IGJvb2xlYW47XG4gICRhcnJheUl0ZW0/OiBJRm9ybU92ZXJyaWRlO1xuICAkbm9FbXB0eUFycmF5SW5pdGlhbGl6YXRpb24/OiBib29sZWFuO1xuICAkbm90UmVtb3ZhYmxlPzogYm9vbGVhbjtcbiAgJGFycmF5QXNUYWJzPzogYm9vbGVhbjtcbiAgJHRhYlRpdGxlPzogc3RyaW5nO1xuICAkcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICRodG1sQ2xhc3M/OiBzdHJpbmc7XG4gICRhbHRUZW1wbGF0ZT86IHN0cmluZztcbiAgJG1pbkRhdGU/OiBzdHJpbmc7IC8vIHl5eXktTU0tZGRcbiAgJG1heERhdGU/OiBzdHJpbmc7IC8vIHl5eXktTU0tZGRcbiAgJHNjaGVtYT86IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgJHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgJG5vU2VwYXJhdG9yPzogYm9vbGVhbjtcbiAgJHN0ZXA/OiBudW1iZXI7IC8vIHJhbmdlIHNsaWRlciBzdGVwc1xuICAkcGFyZW50Rm9ybT86IElGb3JtT3ZlcnJpZGU7XG59XG5cbmNvbnN0IG92ZXJyaWRlTWFya2VyOiBzdHJpbmcgPSBcIiRcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc092ZXJyaWRlKGtleTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbCA9IGtleS5jaGFyQXQoMCkgPT09IG92ZXJyaWRlTWFya2VyO1xuXG4gIGdldExvZ2dlcihcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKVxuICAgIC5pbmZvKFwiaXNPdmVycmlkZVwiLCB7IGtleSwgdmFsIH0pO1xuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9ybU92ZXJyaWRlcyhcbiAgZm9ybTogSUZvcm1PdmVycmlkZSwgcGFyZW50U2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb25cbikge1xuICBnZXRMb2dnZXIoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIilcbiAgICAuaW5mbyhcInNldEZvcm1PdmVycmlkZXNcIiwgeyBmb3JtLCBwYXJlbnRTY2hlbWEsIGZvcm1LZXksIHNjaGVtYSB9KTtcbiAgc2NoZW1hLnRpdGxlID0gc2NoZW1hLnRpdGxlIHx8ICghIWZvcm1LZXkgPyBmcm9tQ2FtZWxDYXNlKGZvcm1LZXkpIDogdW5kZWZpbmVkKTtcbiAgZm9ybS4kc2NoZW1hID0gc2NoZW1hO1xuXG4gIGlmIChwYXJlbnRTY2hlbWEgJiYgcGFyZW50U2NoZW1hLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBmb3JtLiRyZXF1aXJlZCA9IGZvcm0uJHJlcXVpcmVkIHx8IChwYXJlbnRTY2hlbWEucmVxdWlyZWRcbiAgICAgID8gKHBhcmVudFNjaGVtYSBhcyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pLnJlcXVpcmVkLmluZGV4T2YoZm9ybUtleSkgPiAtMSA6IGZhbHNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tQ2FtZWxDYXNlKHZhbDogc3RyaW5nKSB7XG4gIHJldHVybiB2YWxcbiAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKVxuICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
