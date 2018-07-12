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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFFQSxpQ0FBaUM7SUFDakM7UUFDRSxPQUFPO1lBQ0wsT0FBTyxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHVFQUF1RSxDQUFDO1lBQ3JHLE1BQU0sRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxzRUFBc0UsQ0FBQztZQUNuRyxXQUFXLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsNEVBQTRFLENBQUM7WUFDOUcsTUFBTSxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHNFQUFzRSxDQUFDO1lBQ25HLGVBQWUsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxpRkFBaUYsQ0FBQztZQUN2SCxnQkFBZ0IsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxrRkFBa0YsQ0FBQztZQUN6SCxNQUFNLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsc0VBQXNFLENBQUM7WUFDbkcsS0FBSyxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHFFQUFxRSxDQUFDO1lBQ2pHLFNBQVMsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQywwRUFBMEUsQ0FBQztZQUMxRyxlQUFlLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsaUZBQWlGLENBQUM7U0FDeEgsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7OztRQUNELENBQUMiLCJmaWxlIjoidGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVGVtcGxhdGVzIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvdGVtcGxhdGVzXCI7XHJcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbi8vIHRzbGludDpkaXNhYmxlOm1heC1saW5lLWxlbmd0aFxyXG5leHBvcnQgZnVuY3Rpb24gR2V0Qm9vdHN0cmFwVGVtcGxhdGVzKCk6IElUZW1wbGF0ZXMge1xyXG4gIHJldHVybiB7XHJcbiAgICBib29sZWFuOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtYm9vbGVhbi5odG1sXCIpLFxyXG4gICAgbnVtYmVyOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtbnVtYmVyLmh0bWxcIiksXHJcbiAgICBudW1iZXJSYW5nZTogUExBVEZPUk0ubW9kdWxlTmFtZShcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LW51bWJlci1yYW5nZS5odG1sXCIpLFxyXG4gICAgc3RyaW5nOiBQTEFURk9STS5tb2R1bGVOYW1lKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtc3RyaW5nLmh0bWxcIiksXHJcbiAgICBzdHJpbmdSYWRpb0VudW06IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1zdHJpbmctcmFkaW8tZW51bS5odG1sXCIpLFxyXG4gICAgc3RyaW5nU2VsZWN0RW51bTogUExBVEZPUk0ubW9kdWxlTmFtZShcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LXN0cmluZy1zZWxlY3QtZW51bS5odG1sXCIpLFxyXG4gICAgb2JqZWN0OiBQTEFURk9STS5tb2R1bGVOYW1lKFwiYXVyZWxpYS1qc29uLXNjaGVtYS1mb3JtL3RlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy9zZnQtb2JqZWN0Lmh0bWxcIiksXHJcbiAgICBhcnJheTogUExBVEZPUk0ubW9kdWxlTmFtZShcImF1cmVsaWEtanNvbi1zY2hlbWEtZm9ybS90ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvc2Z0LWFycmF5Lmh0bWxcIiksXHJcbiAgICBhcnJheVRhYnM6IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1hcnJheS10YWJzLmh0bWxcIiksXHJcbiAgICBhcnJheVN0cmluZ0VudW06IFBMQVRGT1JNLm1vZHVsZU5hbWUoXCJhdXJlbGlhLWpzb24tc2NoZW1hLWZvcm0vdGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3NmdC1hcnJheS1zdHJpbmctZW51bS5odG1sXCIpXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
