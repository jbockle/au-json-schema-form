var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ValidationRules } from "aurelia-validation";
import { bindable } from "aurelia-framework";
import { Guid } from "templates/bootstrap4/resources/guid";
export class SfText {
    constructor() {
        this.id = Guid.newGuid();
    }
    bind() {
        let rule = ValidationRules
            .ensure("model")
            .displayName(this.title)
            .satisfies(() => true);
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
    }
}
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfText.prototype, "schema", void 0);
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfText.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfText.prototype, "required", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfText.prototype, "title", void 0);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy90ZXh0L3NmLXRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFM0QsTUFBTTtJQUFOO1FBTUUsT0FBRSxHQUFXLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQWtCOUIsQ0FBQztJQWhCQyxJQUFJO1FBQ0YsSUFBSSxJQUFJLEdBQUcsZUFBZTthQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDdkIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0NBQ0Y7QUF2Qlc7SUFBVCxRQUFROztzQ0FBYTtBQUNaO0lBQVQsUUFBUTs7cUNBQVk7QUFDWDtJQUFULFFBQVE7O3dDQUFrQjtBQUNqQjtJQUFULFFBQVE7O3FDQUFlIiwiZmlsZSI6InRlbXBsYXRlcy9ib290c3RyYXA0L2lucHV0cy90ZXh0L3NmLXRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBiaW5kYWJsZSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCJ0ZW1wbGF0ZXMvYm9vdHN0cmFwNC9yZXNvdXJjZXMvZ3VpZFwiO1xuXG5leHBvcnQgY2xhc3MgU2ZUZXh0IHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogYW55O1xuICBAYmluZGFibGUgbW9kZWw6IGFueTtcbiAgQGJpbmRhYmxlIHJlcXVpcmVkOiBzdHJpbmc7XG4gIEBiaW5kYWJsZSB0aXRsZTogc3RyaW5nO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBiaW5kKCkge1xuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuZW5zdXJlKFwibW9kZWxcIilcbiAgICAgIC5kaXNwbGF5TmFtZSh0aGlzLnRpdGxlKVxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcbiAgICBpZiAodGhpcy5zY2hlbWEucGF0dGVybikge1xuICAgICAgcnVsZSA9IHJ1bGUubWF0Y2hlcyh0aGlzLnNjaGVtYS5wYXR0ZXJuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkge1xuICAgICAgcnVsZSA9IHJ1bGUubWluTGVuZ3RoKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xuICAgIH1cbiAgICBydWxlLm9uKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
