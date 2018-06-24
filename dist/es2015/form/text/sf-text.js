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
let SfText = class SfText {
    constructor(configuration) {
        this.configuration = configuration;
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
};
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
SfText = __decorate([
    inject(SchemaFormConfiguration),
    customElement("sf-text"),
    __metadata("design:paramtypes", [SchemaFormConfiguration])
], SfText);
export { SfText };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNyRCxPQUFPLEVBQUUsUUFBUSxFQUFFLGFBQWEsRUFBRSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNwRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDNUMsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFJbkYsSUFBYSxNQUFNLEdBQW5CO0lBUUUsWUFBbUIsYUFBc0M7UUFBdEMsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBRnpELE9BQUUsR0FBVyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFFaUMsQ0FBQztJQUU5RCxJQUFJO1FBQ0YsSUFBSSxJQUFJLEdBQUcsZUFBZTthQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDdkIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3hCO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTtBQXpCVztJQUFULFFBQVE7O3NDQUFhO0FBQ1o7SUFBVCxRQUFROztxQ0FBWTtBQUNYO0lBQVQsUUFBUTs7d0NBQWtCO0FBQ2pCO0lBQVQsUUFBUTs7cUNBQWU7QUFKYixNQUFNO0lBRmxCLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztJQUMvQixhQUFhLENBQUMsU0FBUyxDQUFDO3FDQVNXLHVCQUF1QjtHQVI5QyxNQUFNLENBMEJsQjtTQTFCWSxNQUFNIiwiZmlsZSI6ImZvcm0vdGV4dC9zZi10ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuQGN1c3RvbUVsZW1lbnQoXCJzZi10ZXh0XCIpXG5leHBvcnQgY2xhc3MgU2ZUZXh0IHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogYW55O1xuICBAYmluZGFibGUgbW9kZWw6IGFueTtcbiAgQGJpbmRhYmxlIHJlcXVpcmVkOiBzdHJpbmc7XG4gIEBiaW5kYWJsZSB0aXRsZTogc3RyaW5nO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5lbnN1cmUoXCJtb2RlbFwiKVxuICAgICAgLmRpc3BsYXlOYW1lKHRoaXMudGl0bGUpXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xuICAgIGlmICh0aGlzLnNjaGVtYS5wYXR0ZXJuKSB7XG4gICAgICBydWxlID0gcnVsZS5tYXRjaGVzKHRoaXMuc2NoZW1hLnBhdHRlcm4pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY2hlbWEubWluTGVuZ3RoKSB7XG4gICAgICBydWxlID0gcnVsZS5taW5MZW5ndGgodGhpcy5zY2hlbWEubWluTGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMucmVxdWlyZWQpIHtcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XG4gICAgfVxuICAgIHJ1bGUub24odGhpcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
