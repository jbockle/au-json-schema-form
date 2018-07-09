"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_logging_1 = require("aurelia-logging");
var string_1 = require("../resources/string");
var overrideMarker = "$";
function isOverride(key) {
    var val = key.charAt(0) === overrideMarker;
    aurelia_logging_1.getLogger("aurelia-json-schema-form")
        .info("isOverride", { key: key, val: val });
    return val;
}
exports.isOverride = isOverride;
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
exports.setFormOverrides = setFormOverrides;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLG1EQUE0QztBQUM1Qyw4Q0FBb0Q7QUFpQnBELElBQU0sY0FBYyxHQUFXLEdBQUcsQ0FBQztBQUNuQyxvQkFBMkIsR0FBVztJQUNwQyxJQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLGNBQWMsQ0FBQztJQUU3QywyQkFBUyxDQUFDLDBCQUEwQixDQUFDO1NBQ2xDLElBQUksQ0FBQyxZQUFZLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLENBQUM7SUFDcEMsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDO0FBTkQsZ0NBTUM7QUFFRCwwQkFDRSxJQUFtQixFQUFFLFlBQW1DLEVBQUUsT0FBZSxFQUFFLE1BQTZCO0lBRXhHLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7U0FDbEMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLEVBQUUsSUFBSSxNQUFBLEVBQUUsWUFBWSxjQUFBLEVBQUUsT0FBTyxTQUFBLEVBQUUsTUFBTSxRQUFBLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLE1BQU0sQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxzQkFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUUsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7SUFFdEIsSUFBSSxZQUFZLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDbEQsSUFBSSxDQUFDLFNBQVMsR0FBRyxZQUFZLENBQUMsUUFBUTtZQUNwQyxDQUFDLENBQUUsWUFBNEMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7S0FDMUY7QUFDSCxDQUFDO0FBWkQsNENBWUMiLCJmaWxlIjoiaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uXG59IGZyb20gXCIuL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gXCJhdXJlbGlhLWxvZ2dpbmdcIjtcbmltcG9ydCB7IGZyb21DYW1lbENhc2UgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL3N0cmluZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtT3ZlcnJpZGUge1xuICBba2V5OiBzdHJpbmddOiBJRm9ybU92ZXJyaWRlW10gfCBJRm9ybU92ZXJyaWRlIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZyB8IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgJG5vVGl0bGU/OiBib29sZWFuO1xuICAkcGxhY2Vob2xkZXI/OiBzdHJpbmc7XG4gICRodG1sQ2xhc3M/OiBzdHJpbmc7XG4gICRhbHRUZW1wbGF0ZT86IHN0cmluZztcbiAgJG1pbkRhdGU/OiBzdHJpbmc7IC8vIHl5eXktTU0tZGRcbiAgJG1heERhdGU/OiBzdHJpbmc7IC8vIHl5eXktTU0tZGRcbiAgJHNjaGVtYT86IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgJHJlcXVpcmVkPzogYm9vbGVhbjtcbiAgJG5vU2VwYXJhdG9yPzogYm9vbGVhbjtcbiAgJHN0ZXA/OiBudW1iZXI7IC8vIHJhbmdlIHNsaWRlciBzdGVwc1xuICAkcGFyZW50Rm9ybT86IElGb3JtT3ZlcnJpZGU7XG59XG5cbmNvbnN0IG92ZXJyaWRlTWFya2VyOiBzdHJpbmcgPSBcIiRcIjtcbmV4cG9ydCBmdW5jdGlvbiBpc092ZXJyaWRlKGtleTogc3RyaW5nKSB7XG4gIGNvbnN0IHZhbCA9IGtleS5jaGFyQXQoMCkgPT09IG92ZXJyaWRlTWFya2VyO1xuXG4gIGdldExvZ2dlcihcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKVxuICAgIC5pbmZvKFwiaXNPdmVycmlkZVwiLCB7IGtleSwgdmFsIH0pO1xuICByZXR1cm4gdmFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Rm9ybU92ZXJyaWRlcyhcbiAgZm9ybTogSUZvcm1PdmVycmlkZSwgcGFyZW50U2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb25cbikge1xuICBnZXRMb2dnZXIoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm1cIilcbiAgICAuaW5mbyhcInNldE92ZXJyaWRlT3B0aW9uc1wiLCB7IGZvcm0sIHBhcmVudFNjaGVtYSwgZm9ybUtleSwgc2NoZW1hIH0pO1xuICBzY2hlbWEudGl0bGUgPSBzY2hlbWEudGl0bGUgfHwgISFmb3JtS2V5ID8gZnJvbUNhbWVsQ2FzZShmb3JtS2V5KSA6IHVuZGVmaW5lZDtcbiAgZm9ybS4kc2NoZW1hID0gc2NoZW1hO1xuXG4gIGlmIChwYXJlbnRTY2hlbWEgJiYgcGFyZW50U2NoZW1hLnR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICBmb3JtLiRyZXF1aXJlZCA9IHBhcmVudFNjaGVtYS5yZXF1aXJlZFxuICAgICAgPyAocGFyZW50U2NoZW1hIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikucmVxdWlyZWQuaW5kZXhPZihmb3JtS2V5KSA+IC0xIDogZmFsc2U7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
