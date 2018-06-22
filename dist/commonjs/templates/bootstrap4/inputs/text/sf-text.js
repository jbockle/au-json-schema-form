"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_validation_1 = require("aurelia-validation");
var aurelia_framework_1 = require("aurelia-framework");
var guid_1 = require("templates/bootstrap4/resources/guid");
var SfText = /** @class */ (function () {
    function SfText() {
        this.id = guid_1.Guid.newGuid();
    }
    SfText.prototype.bind = function () {
        var rule = aurelia_validation_1.ValidationRules
            .ensure("model")
            .displayName(this.title)
            .satisfies(function () { return true; });
        if (this.schema.pattern) {
            rule = rule.matches(this.schema.pattern);
        }
        if (this.schema.minLength) {
            rule = rule.minLength(this.schema.minLength);
        }
        if (this.required) {
            rule = rule.required();
        }
        rule.on(this);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfText.prototype, "schema", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfText.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfText.prototype, "required", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfText.prototype, "title", void 0);
    return SfText;
}());
exports.SfText = SfText;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy90ZXh0L3NmLXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx5REFBcUQ7QUFDckQsdURBQTZDO0FBQzdDLDREQUEyRDtBQUUzRDtJQUFBO1FBTUUsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQWtCOUIsQ0FBQztJQWhCQyxxQkFBSSxHQUFKO1FBQ0UsSUFBSSxJQUFJLEdBQUcsb0NBQWU7YUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNmLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBdEJTO1FBQVQsNEJBQVE7OzBDQUFhO0lBQ1o7UUFBVCw0QkFBUTs7eUNBQVk7SUFDWDtRQUFULDRCQUFROzs0Q0FBa0I7SUFDakI7UUFBVCw0QkFBUTs7eUNBQWU7SUFvQjFCLGFBQUM7Q0F4QkQsQUF3QkMsSUFBQTtBQXhCWSx3QkFBTSIsImZpbGUiOiJ0ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbnB1dHMvdGV4dC9zZi10ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgYmluZGFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwidGVtcGxhdGVzL2Jvb3RzdHJhcDQvcmVzb3VyY2VzL2d1aWRcIjtcblxuZXhwb3J0IGNsYXNzIFNmVGV4dCB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnk7XG4gIEBiaW5kYWJsZSByZXF1aXJlZDogc3RyaW5nO1xuICBAYmluZGFibGUgdGl0bGU6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAgYmluZCgpIHtcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmVuc3VyZShcIm1vZGVsXCIpXG4gICAgICAuZGlzcGxheU5hbWUodGhpcy50aXRsZSlcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnBhdHRlcm4pIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1hdGNoZXModGhpcy5zY2hlbWEucGF0dGVybik7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjaGVtYS5taW5MZW5ndGgpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1pbkxlbmd0aCh0aGlzLnNjaGVtYS5taW5MZW5ndGgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcbiAgICB9XG4gICAgcnVsZS5vbih0aGlzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
