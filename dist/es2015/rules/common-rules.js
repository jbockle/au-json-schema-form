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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBd0IsTUFBTSxvQkFBb0IsQ0FBQztBQUcvRixJQUFhLFdBQVcsR0FBeEI7SUFDRSxZQUFvQixhQUFzQztRQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFFMUQsU0FBSSxHQUFHLFFBQVEsQ0FBQztJQUY4QyxDQUFDO0lBSS9ELFFBQVE7UUFDTixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsaUJBQWlCO1FBQ2Ysa0JBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksa0JBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckcsQ0FBQztJQUVELEdBQUc7UUFDRCxPQUFPO1FBQ1AsZUFBZTthQUNaLFVBQVUsQ0FDVCxNQUFNLEVBQ04sQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGFBQW9CLEVBQUUsRUFBRSxDQUFDLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQzlGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxnQkFBZ0IsRUFDcEQsQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUN2QyxDQUFDO0lBQ04sQ0FBQztJQUVELElBQUksQ0FBQyxJQUFTO1FBQ1osSUFBSSxJQUFJLEdBQUcsZUFBZTthQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDO2FBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDdkIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7WUFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN2QztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDckQ7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztDQUNGLENBQUE7QUF4Q1ksV0FBVztJQUR2QixNQUFNLENBQUMsdUJBQXVCLENBQUM7cUNBRUssdUJBQXVCO0dBRC9DLFdBQVcsQ0F3Q3ZCO1NBeENZLFdBQVciLCJmaWxlIjoicnVsZXMvY29tbW9uLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJ1bGVzIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvcnVsZXNcIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCB2YWxpZGF0aW9uTWVzc2FnZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIENvbW1vblJ1bGVzIGltcGxlbWVudHMgSVJ1bGVzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgdHlwZSA9IFwiY29tbW9uXCI7XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG4gIHNldEN1c3RvbU1lc3NhZ2VzKCkge1xuICAgIHZhbGlkYXRpb25NZXNzYWdlc1tcImNvbnN0XCJdID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzW1wiY29uc3RcIl0gfHwgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiZXF1YWxzXCJdO1xuICB9XG5cbiAgYWRkKCk6IHZvaWQge1xuICAgIC8vIGVudW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImVudW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBhbGxvd2VkVmFsdWVzOiBhbnlbXSkgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBhbGxvd2VkVmFsdWVzLmluZGV4T2YodmFsKSA+PSAwIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmVudW0gfHwgXCJJbnZhbGlkIG9wdGlvblwiLFxuICAgICAgICAoYWxsb3dlZFZhbHVlcykgPT4gKHsgYWxsb3dlZFZhbHVlcyB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogYW55KTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4ge1xuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuZW5zdXJlKFwibW9kZWxcIilcbiAgICAgIC5kaXNwbGF5TmFtZShjdHJsLnRpdGxlKVxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcbiAgICBpZiAoY3RybC5zY2hlbWEuY29uc3QpIHtcbiAgICAgIHJ1bGUgPSBydWxlLmVxdWFscyhjdHJsLnNjaGVtYS5jb25zdCk7XG4gICAgfVxuICAgIGlmIChjdHJsLnNjaGVtYS5lbnVtKSB7XG4gICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKFwiZW51bVwiLCBjdHJsLnNjaGVtYS5lbnVtKTtcbiAgICB9XG4gICAgaWYgKGN0cmwucmVxdWlyZWQpIHtcbiAgICAgIHJ1bGUgPSBydWxlLnJlcXVpcmVkKCk7XG4gICAgfVxuICAgIHJldHVybiBydWxlO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
