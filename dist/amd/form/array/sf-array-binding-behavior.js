define(["require", "exports", "aurelia-framework", "aurelia-validation"], function (require, exports, aurelia_framework_1, aurelia_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfArrayBindingBehavior = /** @class */ (function () {
        function SfArrayBindingBehavior() {
        }
        SfArrayBindingBehavior.prototype.bind = function (binding, source) {
            var controller = source.container.get(aurelia_framework_1.Optional.of(aurelia_validation_1.ValidationController));
            // source.bindingContext.test();
        };
        return SfArrayBindingBehavior;
    }());
    exports.SfArrayBindingBehavior = SfArrayBindingBehavior;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXktYmluZGluZy1iZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQTtRQUFBO1FBS0EsQ0FBQztRQUpDLHFDQUFJLEdBQUosVUFBSyxPQUFPLEVBQUUsTUFBWTtZQUN4QixJQUFNLFVBQVUsR0FBeUIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsNEJBQVEsQ0FBQyxFQUFFLENBQUMseUNBQW9CLENBQUMsQ0FBQyxDQUFDO1lBQ2pHLGdDQUFnQztRQUNsQyxDQUFDO1FBQ0gsNkJBQUM7SUFBRCxDQUxBLEFBS0MsSUFBQTtJQUxZLHdEQUFzQiIsImZpbGUiOiJmb3JtL2FycmF5L3NmLWFycmF5LWJpbmRpbmctYmVoYXZpb3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPcHRpb25hbCwgVmlldyB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBTZkFycmF5QmluZGluZ0JlaGF2aW9yIHtcbiAgYmluZChiaW5kaW5nLCBzb3VyY2U6IFZpZXcpIHtcbiAgICBjb25zdCBjb250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlciA9IHNvdXJjZS5jb250YWluZXIuZ2V0KE9wdGlvbmFsLm9mKFZhbGlkYXRpb25Db250cm9sbGVyKSk7XG4gICAgLy8gc291cmNlLmJpbmRpbmdDb250ZXh0LnRlc3QoKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
