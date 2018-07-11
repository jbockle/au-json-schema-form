define(["require", "exports", "aurelia-logging"], function (require, exports, aurelia_logging_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
            .info("setFormOverrides", { form: form, parentSchema: parentSchema, formKey: formKey, schema: schema });
        schema.title = schema.title || (!!formKey ? fromCamelCase(formKey) : undefined);
        form.$schema = schema;
        if (parentSchema && parentSchema.type === "object") {
            form.$required = parentSchema.required
                ? parentSchema.required.indexOf(formKey) > -1 : false;
        }
    }
    exports.setFormOverrides = setFormOverrides;
    function fromCamelCase(val) {
        return val
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, function (str) { return str.toUpperCase(); });
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImludGVyZmFjZXMvZm9ybS1vdmVycmlkZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUF3QkEsSUFBTSxjQUFjLEdBQVcsR0FBRyxDQUFDO0lBQ25DLG9CQUEyQixHQUFXO1FBQ3BDLElBQU0sR0FBRyxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDO1FBRTdDLDJCQUFTLENBQUMsMEJBQTBCLENBQUM7YUFDbEMsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLEdBQUcsS0FBQSxFQUFFLENBQUMsQ0FBQztRQUNwQyxPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFORCxnQ0FNQztJQUVELDBCQUNFLElBQW1CLEVBQUUsWUFBbUMsRUFBRSxPQUFlLEVBQUUsTUFBNkI7UUFFeEcsMkJBQVMsQ0FBQywwQkFBMEIsQ0FBQzthQUNsQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxJQUFJLE1BQUEsRUFBRSxZQUFZLGNBQUEsRUFBRSxPQUFPLFNBQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUV0QixJQUFJLFlBQVksSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUNsRCxJQUFJLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQyxRQUFRO2dCQUNwQyxDQUFDLENBQUUsWUFBNEMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDMUY7SUFDSCxDQUFDO0lBWkQsNENBWUM7SUFFRCx1QkFBdUIsR0FBVztRQUNoQyxPQUFPLEdBQUc7YUFDUCxPQUFPLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQzthQUMxQixPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7SUFDL0MsQ0FBQyIsImZpbGUiOiJpbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJSnNvblNjaGVtYURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb25cbn0gZnJvbSBcIi4vanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyIH0gZnJvbSBcImF1cmVsaWEtbG9nZ2luZ1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtT3ZlcnJpZGUge1xuICBba2V5OiBzdHJpbmddOiBJRm9ybU92ZXJyaWRlW10gfCBJRm9ybU92ZXJyaWRlIHwgbnVtYmVyIHwgYm9vbGVhbiB8IHN0cmluZyB8IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgJG5vVGl0bGU/OiBib29sZWFuO1xuICAkYXJyYXlJdGVtPzogSUZvcm1PdmVycmlkZTtcbiAgJGFycmF5U3RhcnRFbXB0eT86IGJvb2xlYW47XG4gICRwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgJGh0bWxDbGFzcz86IHN0cmluZztcbiAgJGFsdFRlbXBsYXRlPzogc3RyaW5nO1xuICAkbWluRGF0ZT86IHN0cmluZzsgLy8geXl5eS1NTS1kZFxuICAkbWF4RGF0ZT86IHN0cmluZzsgLy8geXl5eS1NTS1kZFxuICAkc2NoZW1hPzogSUpzb25TY2hlbWFEZWZpbml0aW9uO1xuICAkcmVxdWlyZWQ/OiBib29sZWFuO1xuICAkbm9TZXBhcmF0b3I/OiBib29sZWFuO1xuICAkc3RlcD86IG51bWJlcjsgLy8gcmFuZ2Ugc2xpZGVyIHN0ZXBzXG4gICRwYXJlbnRGb3JtPzogSUZvcm1PdmVycmlkZTtcbn1cblxuY29uc3Qgb3ZlcnJpZGVNYXJrZXI6IHN0cmluZyA9IFwiJFwiO1xuZXhwb3J0IGZ1bmN0aW9uIGlzT3ZlcnJpZGUoa2V5OiBzdHJpbmcpIHtcbiAgY29uc3QgdmFsID0ga2V5LmNoYXJBdCgwKSA9PT0gb3ZlcnJpZGVNYXJrZXI7XG5cbiAgZ2V0TG9nZ2VyKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtXCIpXG4gICAgLmluZm8oXCJpc092ZXJyaWRlXCIsIHsga2V5LCB2YWwgfSk7XG4gIHJldHVybiB2YWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRGb3JtT3ZlcnJpZGVzKFxuICBmb3JtOiBJRm9ybU92ZXJyaWRlLCBwYXJlbnRTY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgZm9ybUtleTogc3RyaW5nLCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvblxuKSB7XG4gIGdldExvZ2dlcihcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybVwiKVxuICAgIC5pbmZvKFwic2V0Rm9ybU92ZXJyaWRlc1wiLCB7IGZvcm0sIHBhcmVudFNjaGVtYSwgZm9ybUtleSwgc2NoZW1hIH0pO1xuICBzY2hlbWEudGl0bGUgPSBzY2hlbWEudGl0bGUgfHwgKCEhZm9ybUtleSA/IGZyb21DYW1lbENhc2UoZm9ybUtleSkgOiB1bmRlZmluZWQpO1xuICBmb3JtLiRzY2hlbWEgPSBzY2hlbWE7XG5cbiAgaWYgKHBhcmVudFNjaGVtYSAmJiBwYXJlbnRTY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgIGZvcm0uJHJlcXVpcmVkID0gcGFyZW50U2NoZW1hLnJlcXVpcmVkXG4gICAgICA/IChwYXJlbnRTY2hlbWEgYXMgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKS5yZXF1aXJlZC5pbmRleE9mKGZvcm1LZXkpID4gLTEgOiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tQ2FtZWxDYXNlKHZhbDogc3RyaW5nKSB7XG4gIHJldHVybiB2YWxcbiAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKVxuICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
