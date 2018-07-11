System.register(["aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1;
    var __moduleName = context_1 && context_1.id;
    // tslint:disable:max-line-length
    function GetBootstrapTemplates() {
        return {
            number: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-number.html"),
            numberRange: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-number-range.html"),
            string: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-string.html"),
            stringRadioEnum: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-string-radio-enum.html"),
            stringSelectEnum: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-string-select-enum.html"),
            object: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-object.html"),
            array: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-array.html"),
            boolean: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-boolean.html"),
            arrayStringEnum: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-array-string-enum.html")
        };
    }
    exports_1("GetBootstrapTemplates", GetBootstrapTemplates);
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFFQSxpQ0FBaUM7SUFDakM7UUFDRSxPQUFPO1lBQ0wsTUFBTSxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHNFQUFzRSxDQUFDO1lBQ25HLFdBQVcsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyw0RUFBNEUsQ0FBQztZQUM5RyxNQUFNLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsc0VBQXNFLENBQUM7WUFDbkcsZUFBZSxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLGlGQUFpRixDQUFDO1lBQ3ZILGdCQUFnQixFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLGtGQUFrRixDQUFDO1lBQ3pILE1BQU0sRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxzRUFBc0UsQ0FBQztZQUNuRyxLQUFLLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMscUVBQXFFLENBQUM7WUFDakcsT0FBTyxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHVFQUF1RSxDQUFDO1lBQ3JHLGVBQWUsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxpRkFBaUYsQ0FBQztTQUN4SCxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O1FBQ0QsQ0FBQyIsImZpbGUiOiJ0ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUZW1wbGF0ZXMgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZXNcIjtcclxuaW1wb3J0IHsgUExBVEZPUk0gfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXHJcbmV4cG9ydCBmdW5jdGlvbiBHZXRCb290c3RyYXBUZW1wbGF0ZXMoKTogSVRlbXBsYXRlcyB7XHJcbiAgcmV0dXJuIHtcclxuICAgIG51bWJlcjogUExBVEZPUk0ubW9kdWxlTmFtZShcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LW51bWJlci5odG1sXCIpLFxyXG4gICAgbnVtYmVyUmFuZ2U6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1udW1iZXItcmFuZ2UuaHRtbFwiKSxcclxuICAgIHN0cmluZzogUExBVEZPUk0ubW9kdWxlTmFtZShcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LXN0cmluZy5odG1sXCIpLFxyXG4gICAgc3RyaW5nUmFkaW9FbnVtOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtc3RyaW5nLXJhZGlvLWVudW0uaHRtbFwiKSxcclxuICAgIHN0cmluZ1NlbGVjdEVudW06IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1zdHJpbmctc2VsZWN0LWVudW0uaHRtbFwiKSxcclxuICAgIG9iamVjdDogUExBVEZPUk0ubW9kdWxlTmFtZShcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LW9iamVjdC5odG1sXCIpLFxyXG4gICAgYXJyYXk6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1hcnJheS5odG1sXCIpLFxyXG4gICAgYm9vbGVhbjogUExBVEZPUk0ubW9kdWxlTmFtZShcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWJvb2xlYW4uaHRtbFwiKSxcclxuICAgIGFycmF5U3RyaW5nRW51bTogUExBVEZPUk0ubW9kdWxlTmFtZShcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWFycmF5LXN0cmluZy1lbnVtLmh0bWxcIilcclxuICB9O1xyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
