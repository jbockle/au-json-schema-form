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
var aurelia_framework_1 = require("aurelia-framework");
var logger_1 = require("../resources/logger");
var FormInstances = /** @class */ (function () {
    function FormInstances(logger) {
        this.logger = logger;
        this.instances = {};
    }
    FormInstances.prototype.set = function (key, instance) {
        this.logger.warn("setting form instance", { key: key, instance: instance });
        this.instances[key] = instance;
    };
    FormInstances.prototype.get = function (key) {
        this.logger.warn("getting form instance", { key: key, instances: this.instances });
        return this.instances[key];
    };
    FormInstances = __decorate([
        aurelia_framework_1.singleton(),
        aurelia_framework_1.inject(logger_1.SchemaFormLogger),
        __metadata("design:paramtypes", [logger_1.SchemaFormLogger])
    ], FormInstances);
    return FormInstances;
}());
exports.FormInstances = FormInstances;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBS3RELDhDQUF1RDtBQUl2RDtJQUtFLHVCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUpwQyxjQUFTLEdBRWIsRUFBRSxDQUFDO0lBRXlDLENBQUM7SUFFakQsMkJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxRQUF1QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM5RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWZVLGFBQWE7UUFGekIsNkJBQVMsRUFBRTtRQUNYLDBCQUFNLENBQUMseUJBQWdCLENBQUM7eUNBTUsseUJBQWdCO09BTGpDLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7Q0FoQkQsQUFnQkMsSUFBQTtBQWhCWSxzQ0FBYSIsImZpbGUiOiJzZXJ2aWNlcy9mb3JtLWluc3RhbmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpbmdsZXRvbiwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sbGVyIH0gZnJvbSBcIi4uL2Zvcm0vZm9ybS1jb250cm9sbGVyXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcblxuQHNpbmdsZXRvbigpXG5AaW5qZWN0KFNjaGVtYUZvcm1Mb2dnZXIpXG5leHBvcnQgY2xhc3MgRm9ybUluc3RhbmNlcyB7XG4gIHByaXZhdGUgaW5zdGFuY2VzOiB7XG4gICAgW2tleTogc3RyaW5nXTogSUZvcm1JbnN0YW5jZVxuICB9ID0ge307XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxuXG4gIHNldChrZXk6IHN0cmluZywgaW5zdGFuY2U6IElGb3JtSW5zdGFuY2UpIHtcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwic2V0dGluZyBmb3JtIGluc3RhbmNlXCIsIHsga2V5LCBpbnN0YW5jZSB9KTtcbiAgICB0aGlzLmluc3RhbmNlc1trZXldID0gaW5zdGFuY2U7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwiZ2V0dGluZyBmb3JtIGluc3RhbmNlXCIsIHsga2V5LCBpbnN0YW5jZXM6IHRoaXMuaW5zdGFuY2VzIH0pO1xuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1trZXldO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
