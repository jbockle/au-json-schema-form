"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var aurelia_validation_1 = require("aurelia-validation");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXktYmluZGluZy1iZWhhdmlvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHVEQUFtRDtBQUNuRCx5REFBMEQ7QUFFMUQ7SUFBQTtJQUtBLENBQUM7SUFKQyxxQ0FBSSxHQUFKLFVBQUssT0FBTyxFQUFFLE1BQVk7UUFDeEIsSUFBTSxVQUFVLEdBQXlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDRCQUFRLENBQUMsRUFBRSxDQUFDLHlDQUFvQixDQUFDLENBQUMsQ0FBQztRQUNqRyxnQ0FBZ0M7SUFDbEMsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FMQSxBQUtDLElBQUE7QUFMWSx3REFBc0IiLCJmaWxlIjoiZm9ybS9hcnJheS9zZi1hcnJheS1iaW5kaW5nLWJlaGF2aW9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3B0aW9uYWwsIFZpZXcgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgU2ZBcnJheUJpbmRpbmdCZWhhdmlvciB7XG4gIGJpbmQoYmluZGluZywgc291cmNlOiBWaWV3KSB7XG4gICAgY29uc3QgY29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXIgPSBzb3VyY2UuY29udGFpbmVyLmdldChPcHRpb25hbC5vZihWYWxpZGF0aW9uQ29udHJvbGxlcikpO1xuICAgIC8vIHNvdXJjZS5iaW5kaW5nQ29udGV4dC50ZXN0KCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
