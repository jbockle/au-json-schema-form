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
import { bindable, customElement, inject } from "aurelia-framework";
import { Guid } from "../../resources/guid";
import { SchemaFormConfiguration } from "../../services/schema-form-configuration";
let SfNumber = class SfNumber {
    constructor(configuration) {
        this.configuration = configuration;
        this.id = Guid.newGuid();
    }
    bind() {
        let rule = ValidationRules
            .ensure("model")
            .displayName(this.title)
            .satisfies(() => true);
        if (this.required) {
            rule = rule.required();
        }
        if (this.schema.minimum) {
            rule = rule.satisfiesRule("minimum", this.schema.minimum);
        }
        rule.on(this);
    }
};
__decorate([
    bindable,
    __metadata("design:type", Object)
], SfNumber.prototype, "schema", void 0);
__decorate([
    bindable,
    __metadata("design:type", Number)
], SfNumber.prototype, "model", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfNumber.prototype, "required", void 0);
__decorate([
    bindable,
    __metadata("design:type", String)
], SfNumber.prototype, "title", void 0);
SfNumber = __decorate([
    inject(SchemaFormConfiguration),
    customElement("sf-number"),
    __metadata("design:paramtypes", [SchemaFormConfiguration])
], SfNumber);
export { SfNumber };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLFFBQVEsRUFBRSxhQUFhLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDcEUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQzVDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBSW5GLElBQWEsUUFBUSxHQUFyQjtJQVFFLFlBQW1CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUZ6RCxPQUFFLEdBQVcsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRWlDLENBQUM7SUFFOUQsSUFBSTtRQUNGLElBQUksSUFBSSxHQUFHLGVBQWU7YUFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQzthQUNmLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDM0Q7UUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Q0FDRixDQUFBO0FBdEJXO0lBQVQsUUFBUTs7d0NBQWE7QUFDWjtJQUFULFFBQVE7O3VDQUFlO0FBQ2Q7SUFBVCxRQUFROzswQ0FBa0I7QUFDakI7SUFBVCxRQUFROzt1Q0FBZTtBQUpiLFFBQVE7SUFGcEIsTUFBTSxDQUFDLHVCQUF1QixDQUFDO0lBQy9CLGFBQWEsQ0FBQyxXQUFXLENBQUM7cUNBU1MsdUJBQXVCO0dBUjlDLFFBQVEsQ0F1QnBCO1NBdkJZLFFBQVEiLCJmaWxlIjoiZm9ybS9udW1iZXIvc2YtbnVtYmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi1udW1iZXJcIilcbmV4cG9ydCBjbGFzcyBTZk51bWJlciB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBudW1iZXI7XG4gIEBiaW5kYWJsZSByZXF1aXJlZDogc3RyaW5nO1xuICBAYmluZGFibGUgdGl0bGU6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICBiaW5kKCkge1xuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuZW5zdXJlKFwibW9kZWxcIilcbiAgICAgIC5kaXNwbGF5TmFtZSh0aGlzLnRpdGxlKVxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLm1pbmltdW0pIHtcbiAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUoXCJtaW5pbXVtXCIsIHRoaXMuc2NoZW1hLm1pbmltdW0pO1xuICAgIH1cbiAgICBydWxlLm9uKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
