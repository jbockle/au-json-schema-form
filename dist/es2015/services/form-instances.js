var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { singleton, inject } from "aurelia-framework";
import { SchemaFormLogger } from "../resources/logger";
let FormInstances = class FormInstances {
    constructor(logger) {
        this.logger = logger;
        this.instances = {};
    }
    set(key, instance) {
        this.logger.warn("setting form instance", { key, instance });
        this.instances[key] = instance;
    }
    get(key) {
        this.logger.warn("getting form instance", { key, instances: this.instances });
        return this.instances[key];
    }
};
FormInstances = __decorate([
    singleton(),
    inject(SchemaFormLogger),
    __metadata("design:paramtypes", [SchemaFormLogger])
], FormInstances);
export { FormInstances };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFLdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFJdkQsSUFBYSxhQUFhLEdBQTFCO0lBS0UsWUFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFKcEMsY0FBUyxHQUViLEVBQUUsQ0FBQztJQUV5QyxDQUFDO0lBRWpELEdBQUcsQ0FBQyxHQUFXLEVBQUUsUUFBdUI7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDOUUsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7Q0FDRixDQUFBO0FBaEJZLGFBQWE7SUFGekIsU0FBUyxFQUFFO0lBQ1gsTUFBTSxDQUFDLGdCQUFnQixDQUFDO3FDQU1LLGdCQUFnQjtHQUxqQyxhQUFhLENBZ0J6QjtTQWhCWSxhQUFhIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ2xldG9uLCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZm9ybS9mb3JtLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuXG5Ac2luZ2xldG9uKClcbkBpbmplY3QoU2NoZW1hRm9ybUxvZ2dlcilcbmV4cG9ydCBjbGFzcyBGb3JtSW5zdGFuY2VzIHtcbiAgcHJpdmF0ZSBpbnN0YW5jZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBJRm9ybUluc3RhbmNlXG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCBpbnN0YW5jZTogSUZvcm1JbnN0YW5jZSkge1xuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJzZXR0aW5nIGZvcm0gaW5zdGFuY2VcIiwgeyBrZXksIGluc3RhbmNlIH0pO1xuICAgIHRoaXMuaW5zdGFuY2VzW2tleV0gPSBpbnN0YW5jZTtcbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJnZXR0aW5nIGZvcm0gaW5zdGFuY2VcIiwgeyBrZXksIGluc3RhbmNlczogdGhpcy5pbnN0YW5jZXMgfSk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW2tleV07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
