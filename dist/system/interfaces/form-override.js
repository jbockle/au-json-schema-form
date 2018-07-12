System.register(["aurelia-logging"], function (exports_1, context_1) {
    "use strict";
    var aurelia_logging_1, overrideMarker, templateModuleMarker;
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
    function isTemplateModule(key) {
        return key === templateModuleMarker;
    }
    exports_1("isTemplateModule", isTemplateModule);
    return {
        setters: [
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            }
        ],
        execute: function () {
            overrideMarker = "$";
            templateModuleMarker = "_element";
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0lBNEJBLG9CQUEyQixHQUFXO1FBQ3BDLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDO1FBRTdDLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7YUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7O0lBRUQsMEJBQ0UsSUFBbUIsRUFBRSxZQUFtQyxFQUFFLE9BQWUsRUFBRSxNQUE2QjtRQUV4RywyQkFBUyxDQUFDLDBCQUEwQixDQUFDO2FBQ2xDLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUFFLElBQUksTUFBQSxFQUFFLFlBQVksY0FBQSxFQUFFLE9BQU8sU0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBRXRCLElBQUksWUFBWSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssUUFBUSxFQUFFO1lBQ2xELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRO2dCQUN2RCxDQUFDLENBQUUsWUFBNEMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMzRjtJQUNILENBQUM7O0lBRUQsdUJBQXVCLEdBQVc7UUFDaEMsT0FBTyxHQUFHO2FBQ1AsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7YUFDMUIsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFxQkQsMEJBQWlDLEdBQVc7UUFDMUMsT0FBTyxHQUFHLEtBQUssb0JBQW9CLENBQUM7SUFDdEMsQ0FBQzs7Ozs7Ozs7O1lBbERLLGNBQWMsR0FBVyxHQUFHLENBQUM7WUE4QzdCLG9CQUFvQixHQUFXLFVBQVUsQ0FBQztRQUtoRCxDQUFDIiwiZmlsZSI6ImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIElKc29uU2NoZW1hRGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uXG59IGZyb20gXCIuL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IGdldExvZ2dlciB9IGZyb20gXCJhdXJlbGlhLWxvZ2dpbmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJRm9ybU92ZXJyaWRlIHtcbiAgW2tleTogc3RyaW5nXTogSUZvcm1PdmVycmlkZVtdIHwgSUZvcm1PdmVycmlkZSB8IG51bWJlciB8IGJvb2xlYW4gfCBzdHJpbmcgfCBJSnNvblNjaGVtYURlZmluaXRpb24gfCBJVGVtcGxhdGVFbGVtZW50O1xuICBfZWxlbWVudD86IElUZW1wbGF0ZUVsZW1lbnQ7XG4gICRub1RpdGxlPzogYm9vbGVhbjtcbiAgJGFycmF5SXRlbT86IElGb3JtT3ZlcnJpZGU7XG4gICRub0VtcHR5QXJyYXlJbml0aWFsaXphdGlvbj86IGJvb2xlYW47XG4gICRub3RSZW1vdmFibGU/OiBib29sZWFuO1xuICAkYXJyYXlBc1RhYnM/OiBib29sZWFuO1xuICAkdGFiVGl0bGU/OiBzdHJpbmc7XG4gICRwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgJGh0bWxDbGFzcz86IHN0cmluZztcbiAgJGFsdFRlbXBsYXRlPzogc3RyaW5nO1xuICAkbWluRGF0ZT86IHN0cmluZzsgLy8geXl5eS1NTS1kZFxuICAkbWF4RGF0ZT86IHN0cmluZzsgLy8geXl5eS1NTS1kZFxuICAkc2NoZW1hPzogSUpzb25TY2hlbWFEZWZpbml0aW9uO1xuICAkcmVxdWlyZWQ/OiBib29sZWFuO1xuICAkbm9TZXBhcmF0b3I/OiBib29sZWFuO1xuICAkc3RlcD86IG51bWJlcjsgLy8gcmFuZ2Ugc2xpZGVyIHN0ZXBzXG4gICRwYXJlbnRGb3JtPzogSUZvcm1PdmVycmlkZTtcbn1cblxuY29uc3Qgb3ZlcnJpZGVNYXJrZXI6IHN0cmluZyA9IFwiJFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzT3ZlcnJpZGUoa2V5OiBzdHJpbmcpIHtcbiAgY29uc3QgdmFsID0ga2V5LmNoYXJBdCgwKSA9PT0gb3ZlcnJpZGVNYXJrZXI7XG5cbiAgZ2V0TG9nZ2VyKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtXCIpXG4gICAgLmluZm8oXCJpc092ZXJyaWRlXCIsIHsga2V5LCB2YWwgfSk7XG4gIHJldHVybiB2YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGb3JtT3ZlcnJpZGVzKFxuICBmb3JtOiBJRm9ybU92ZXJyaWRlLCBwYXJlbnRTY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvblxuKSB7XG4gIGdldExvZ2dlcihcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKVxuICAgIC5pbmZvKFwic2V0Rm9ybU92ZXJyaWRlc1wiLCB7IGZvcm0sIHBhcmVudFNjaGVtYSwgZm9ybUtleSwgc2NoZW1hIH0pO1xuICBzY2hlbWEudGl0bGUgPSBzY2hlbWEudGl0bGUgfHwgKCEhZm9ybUtleSA/IGZyb21DYW1lbENhc2UoZm9ybUtleSkgOiB1bmRlZmluZWQpO1xuICBmb3JtLiRzY2hlbWEgPSBzY2hlbWE7XG5cbiAgaWYgKHBhcmVudFNjaGVtYSAmJiBwYXJlbnRTY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgIGZvcm0uJHJlcXVpcmVkID0gZm9ybS4kcmVxdWlyZWQgfHwgKHBhcmVudFNjaGVtYS5yZXF1aXJlZFxuICAgICAgPyAocGFyZW50U2NoZW1hIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikucmVxdWlyZWQuaW5kZXhPZihmb3JtS2V5KSA+IC0xIDogZmFsc2UpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21DYW1lbENhc2UodmFsOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHZhbFxuICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXG4gICAgLnJlcGxhY2UoL14uLywgKHN0cikgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xufVxuXG4vKiogVXNlZCB0byBkZWNsYXJlIGEgY29tcGxldGVseSBzZXBhcmF0ZSBtb2R1bGUgdGhhdCBkb2VzXG4gKiBub3QgcGVyZm9ybSBzdGFuZGFyZCB2YWxpZGF0aW9uLCBpbXBsZW1lbnQgdmlldy92aWV3LW1vZGVsIGhvd2V2ZXIgeW91IHdhbnQuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlRWxlbWVudCB7XG5cbiAgLyoqIEBwcm9wZXJ0eSB0aGUgZWxlbWVudCB0byBhcHBlbmQgdG8gdGVtcGxhdGUsIG1ha2Ugc3VyZSB5b3UgaGF2ZSBhZGRlZCBpdCdzIG1vZHVsZU5hbWUgdG8gZ2xvYmFsUmVzb3VyY2VzICovXG4gIGVsZW1lbnROYW1lOiBzdHJpbmc7XG5cbiAgLyoqIHRoZSBzY2hlbWEncyBrZXkgdG8gcGFyc2UsIGJpbmRzIGZvcm0gKHRvLXZpZXcpIGFuZCBtb2RlbCh0d28td2F5KSB0byB5b3VyIG1vZHVsZVxuICAgKiBAcHJvcGVydHkgSWYgc2NoZW1hS2V5IGlzIHNwZWNpZmllZCwgeW91ciBtb2R1bGUgbXVzdCBoYXZlOlxuICAgKiAgIGJpbmRhYmxlIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uO1xuICAgKiAgIGJpbmRhYmxlIG1vZGVsOiBhbnkgb3IgbW9kZWwgdHlwZTtcbiAgICogICBJZiBzY2hlbWFLZXkgaXMgb21taXR0ZWQsIG5vIGJpbmRpbmdzIGFyZSBtYWRlXG4gICAqL1xuICBzY2hlbWFLZXk/OiBzdHJpbmc7XG59XG5cbmNvbnN0IHRlbXBsYXRlTW9kdWxlTWFya2VyOiBzdHJpbmcgPSBcIl9lbGVtZW50XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1RlbXBsYXRlTW9kdWxlKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBrZXkgPT09IHRlbXBsYXRlTW9kdWxlTWFya2VyO1xufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
