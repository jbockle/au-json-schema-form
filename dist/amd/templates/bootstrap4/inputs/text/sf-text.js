var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "templates/bootstrap4/resources/guid"], function (require, exports, aurelia_validation_1, aurelia_framework_1, guid_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy90ZXh0L3NmLXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBSUE7UUFBQTtZQU1FLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFrQjlCLENBQUM7UUFoQkMscUJBQUksR0FBSjtZQUNFLElBQUksSUFBSSxHQUFHLG9DQUFlO2lCQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUNmLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN2QixTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QztZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQXRCUztZQUFULDRCQUFROzs4Q0FBYTtRQUNaO1lBQVQsNEJBQVE7OzZDQUFZO1FBQ1g7WUFBVCw0QkFBUTs7Z0RBQWtCO1FBQ2pCO1lBQVQsNEJBQVE7OzZDQUFlO1FBb0IxQixhQUFDO0tBeEJELEFBd0JDLElBQUE7SUF4Qlksd0JBQU0iLCJmaWxlIjoidGVtcGxhdGVzL2Jvb3RzdHJhcDQvaW5wdXRzL3RleHQvc2YtdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcyB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGJpbmRhYmxlIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcInRlbXBsYXRlcy9ib290c3RyYXA0L3Jlc291cmNlcy9ndWlkXCI7XG5cbmV4cG9ydCBjbGFzcyBTZlRleHQge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55O1xuICBAYmluZGFibGUgcmVxdWlyZWQ6IHN0cmluZztcbiAgQGJpbmRhYmxlIHRpdGxlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGJpbmQoKSB7XG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5lbnN1cmUoXCJtb2RlbFwiKVxuICAgICAgLmRpc3BsYXlOYW1lKHRoaXMudGl0bGUpXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xuICAgIGlmICh0aGlzLnNjaGVtYS5wYXR0ZXJuKSB7XG4gICAgICBydWxlID0gcnVsZS5tYXRjaGVzKHRoaXMuc2NoZW1hLnBhdHRlcm4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY2hlbWEubWluTGVuZ3RoKSB7XG4gICAgICBydWxlID0gcnVsZS5taW5MZW5ndGgodGhpcy5zY2hlbWEubWluTGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XG4gICAgfVxuICAgIHJ1bGUub24odGhpcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
