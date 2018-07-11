System.register(["aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1;
    var __moduleName = context_1 && context_1.id;
    // tslint:disable:max-line-length
    function GetBootstrapTemplates() {
        return {
            boolean: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-boolean.html"),
            number: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-number.html"),
            numberRange: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-number-range.html"),
            string: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-string.html"),
            stringRadioEnum: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-string-radio-enum.html"),
            stringSelectEnum: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-string-select-enum.html"),
            object: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-object.html"),
            array: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-array.html"),
            arrayTabs: aurelia_framework_1.PLATFORM.moduleName("aurelia-json-schema-form/templates/bootstrap4/inputs/sft-array-tabs.html"),
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFFQSxpQ0FBaUM7SUFDakM7UUFDRSxPQUFPO1lBQ0wsT0FBTyxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHVFQUF1RSxDQUFDO1lBQ3JHLE1BQU0sRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxzRUFBc0UsQ0FBQztZQUNuRyxXQUFXLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsNEVBQTRFLENBQUM7WUFDOUcsTUFBTSxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHNFQUFzRSxDQUFDO1lBQ25HLGVBQWUsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxpRkFBaUYsQ0FBQztZQUN2SCxnQkFBZ0IsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxrRkFBa0YsQ0FBQztZQUN6SCxNQUFNLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsc0VBQXNFLENBQUM7WUFDbkcsS0FBSyxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHFFQUFxRSxDQUFDO1lBQ2pHLFNBQVMsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQywwRUFBMEUsQ0FBQztZQUMxRyxlQUFlLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsaUZBQWlGLENBQUM7U0FDeEgsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztRQUNELENBQUMiLCJmaWxlIjoidGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVGVtcGxhdGVzIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvdGVtcGxhdGVzXCI7XG5pbXBvcnQgeyBQTEFURk9STSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuLy8gdHNsaW50OmRpc2FibGU6bWF4LWxpbmUtbGVuZ3RoXG5leHBvcnQgZnVuY3Rpb24gR2V0Qm9vdHN0cmFwVGVtcGxhdGVzKCk6IElUZW1wbGF0ZXMge1xuICByZXR1cm4ge1xuICAgIGJvb2xlYW46IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1ib29sZWFuLmh0bWxcIiksXG4gICAgbnVtYmVyOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtbnVtYmVyLmh0bWxcIiksXG4gICAgbnVtYmVyUmFuZ2U6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1udW1iZXItcmFuZ2UuaHRtbFwiKSxcbiAgICBzdHJpbmc6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1zdHJpbmcuaHRtbFwiKSxcbiAgICBzdHJpbmdSYWRpb0VudW06IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1zdHJpbmctcmFkaW8tZW51bS5odG1sXCIpLFxuICAgIHN0cmluZ1NlbGVjdEVudW06IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1zdHJpbmctc2VsZWN0LWVudW0uaHRtbFwiKSxcbiAgICBvYmplY3Q6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1vYmplY3QuaHRtbFwiKSxcbiAgICBhcnJheTogUExBVEZPUk0ubW9kdWxlTmFtZShcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWFycmF5Lmh0bWxcIiksXG4gICAgYXJyYXlUYWJzOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtYXJyYXktdGFicy5odG1sXCIpLFxuICAgIGFycmF5U3RyaW5nRW51bTogUExBVEZPUk0ubW9kdWxlTmFtZShcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWFycmF5LXN0cmluZy1lbnVtLmh0bWxcIilcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
