var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
import { ValidationRules, validationMessages } from "aurelia-validation";
let CommonRules = class CommonRules {
    constructor(configuration) {
        this.configuration = configuration;
        this.type = "common";
    }
    register() {
        this.add();
    }
    setCustomMessages() {
        validationMessages["const"] = this.configuration.messages["const"] || validationMessages["equals"];
    }
    add() {
        // enum
        ValidationRules
            .customRule("enum", (val, obj, allowedValues) => val !== undefined ? allowedValues.indexOf(val) >= 0 : true, this.configuration.messages.enum || "Invalid option", (allowedValues) => ({ allowedValues }));
    }
    bind(ctrl) {
        let rule = ValidationRules
            .ensure("model")
            .displayName(ctrl.title)
            .satisfies(() => true);
        if (ctrl.schema.const) {
            rule = rule.equals(ctrl.schema.const);
        }
        if (ctrl.schema.enum) {
            rule = rule.satisfiesRule("enum", ctrl.schema.enum);
        }
        if (ctrl.required) {
            rule = rule.required();
        }
        return rule;
    }
};
CommonRules = __decorate([
    inject(SchemaFormConfiguration),
    __metadata("design:paramtypes", [SchemaFormConfiguration])
], CommonRules);
export { CommonRules };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQztBQUkvRixJQUFhLFdBQVcsR0FBeEI7SUFDRSxZQUFvQixhQUFzQztRQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFFMUQsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQUY4QyxDQUFDO0lBSS9ELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsaUJBQWlCO1FBQ2Ysa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELEdBQUc7UUFDRCxPQUFPO1FBQ1AsZUFBZTthQUNaLFVBQVUsQ0FDVCxNQUFNLEVBQ04sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGFBQW9CLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQzlGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxnQkFBZ0IsRUFDcEQsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUN2QyxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksQ0FBQyxJQUFTO1FBQ1osSUFBSSxJQUFJLEdBQUcsZUFBZTthQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDdkIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUF4Q1ksV0FBVztJQUR2QixNQUFNLENBQUMsdUJBQXVCLENBQUM7cUNBRUssdUJBQXVCO0dBRC9DLFdBQVcsQ0F3Q3ZCO1NBeENZLFdBQVciLCJmaWxlIjoicnVsZXMvY29tbW9uLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJ1bGVzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcnVsZXNcIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCB2YWxpZGF0aW9uTWVzc2FnZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgSUZvcm1Db250cm9sbGVyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1jb250cm9sbGVyXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5leHBvcnQgY2xhc3MgQ29tbW9uUnVsZXMgaW1wbGVtZW50cyBJUnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICB0eXBlID0gXCJjb21tb25cIjtcblxuICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbiAgc2V0Q3VzdG9tTWVzc2FnZXMoKSB7XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiY29uc3RcIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXNbXCJjb25zdFwiXSB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbXCJlcXVhbHNcIl07XG4gIH1cblxuICBhZGQoKTogdm9pZCB7XG4gICAgLy8gZW51bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZW51bVwiLFxuICAgICAgICAodmFsLCBvYmosIGFsbG93ZWRWYWx1ZXM6IGFueVtdKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IGFsbG93ZWRWYWx1ZXMuaW5kZXhPZih2YWwpID49IDAgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZW51bSB8fCBcIkludmFsaWQgb3B0aW9uXCIsXG4gICAgICAgIChhbGxvd2VkVmFsdWVzKSA9PiAoeyBhbGxvd2VkVmFsdWVzIH0pXG4gICAgICApO1xuICB9XG5cbiAgYmluZChjdHJsOiBhbnkpOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55PiB7XG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5lbnN1cmUoXCJtb2RlbFwiKVxuICAgICAgLmRpc3BsYXlOYW1lKGN0cmwudGl0bGUpXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xuICAgIGlmIChjdHJsLnNjaGVtYS5jb25zdCkge1xuICAgICAgcnVsZSA9IHJ1bGUuZXF1YWxzKGN0cmwuc2NoZW1hLmNvbnN0KTtcbiAgICB9XG4gICAgaWYgKGN0cmwuc2NoZW1hLmVudW0pIHtcbiAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUoXCJlbnVtXCIsIGN0cmwuc2NoZW1hLmVudW0pO1xuICAgIH1cbiAgICBpZiAoY3RybC5yZXF1aXJlZCkge1xuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
