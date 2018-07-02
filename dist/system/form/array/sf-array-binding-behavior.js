System.register(["aurelia-framework", "aurelia-validation"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1, aurelia_validation_1, SfArrayBindingBehavior;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            }
        ],
        execute: function () {
            SfArrayBindingBehavior = /** @class */ (function () {
                function SfArrayBindingBehavior() {
                }
                SfArrayBindingBehavior.prototype.bind = function (binding, source) {
                    var controller = source.container.get(aurelia_framework_1.Optional.of(aurelia_validation_1.ValidationController));
                    // source.bindingContext.test();
                };
                return SfArrayBindingBehavior;
            }());
            exports_1("SfArrayBindingBehavior", SfArrayBindingBehavior);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXktYmluZGluZy1iZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztZQUdBO2dCQUFBO2dCQUtBLENBQUM7Z0JBSkMscUNBQUksR0FBSixVQUFLLE9BQU8sRUFBRSxNQUFZO29CQUN4QixJQUFNLFVBQVUsR0FBeUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQVEsQ0FBQyxFQUFFLENBQUMseUNBQW9CLENBQUMsQ0FBQyxDQUFDO29CQUNqRyxnQ0FBZ0M7Z0JBQ2xDLENBQUM7Z0JBQ0gsNkJBQUM7WUFBRCxDQUxBLEFBS0MsSUFBQTs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vYXJyYXkvc2YtYXJyYXktYmluZGluZy1iZWhhdmlvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9wdGlvbmFsLCBWaWV3IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIFNmQXJyYXlCaW5kaW5nQmVoYXZpb3Ige1xuICBiaW5kKGJpbmRpbmcsIHNvdXJjZTogVmlldykge1xuICAgIGNvbnN0IGNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyID0gc291cmNlLmNvbnRhaW5lci5nZXQoT3B0aW9uYWwub2YoVmFsaWRhdGlvbkNvbnRyb2xsZXIpKTtcbiAgICAvLyBzb3VyY2UuYmluZGluZ0NvbnRleHQudGVzdCgpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
