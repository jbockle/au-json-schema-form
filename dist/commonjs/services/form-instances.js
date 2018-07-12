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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBS3RELDhDQUF1RDtBQUl2RDtJQUtFLHVCQUFvQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUpwQyxjQUFTLEdBRWIsRUFBRSxDQUFDO0lBRXlDLENBQUM7SUFFakQsMkJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxRQUF1QjtRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsMkJBQUcsR0FBSCxVQUFJLEdBQVc7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUM5RSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQWZVLGFBQWE7UUFGekIsNkJBQVMsRUFBRTtRQUNYLDBCQUFNLENBQUMseUJBQWdCLENBQUM7eUNBTUsseUJBQWdCO09BTGpDLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7Q0FoQkQsQUFnQkMsSUFBQTtBQWhCWSxzQ0FBYSIsImZpbGUiOiJzZXJ2aWNlcy9mb3JtLWluc3RhbmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpbmdsZXRvbiwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZm9ybS9mb3JtLWNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcblxyXG5Ac2luZ2xldG9uKClcclxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxyXG5leHBvcnQgY2xhc3MgRm9ybUluc3RhbmNlcyB7XHJcbiAgcHJpdmF0ZSBpbnN0YW5jZXM6IHtcclxuICAgIFtrZXk6IHN0cmluZ106IElGb3JtSW5zdGFuY2VcclxuICB9ID0ge307XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyKSB7IH1cclxuXHJcbiAgc2V0KGtleTogc3RyaW5nLCBpbnN0YW5jZTogSUZvcm1JbnN0YW5jZSkge1xyXG4gICAgdGhpcy5sb2dnZXIud2FybihcInNldHRpbmcgZm9ybSBpbnN0YW5jZVwiLCB7IGtleSwgaW5zdGFuY2UgfSk7XHJcbiAgICB0aGlzLmluc3RhbmNlc1trZXldID0gaW5zdGFuY2U7XHJcbiAgfVxyXG5cclxuICBnZXQoa2V5OiBzdHJpbmcpIHtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJnZXR0aW5nIGZvcm0gaW5zdGFuY2VcIiwgeyBrZXksIGluc3RhbmNlczogdGhpcy5pbnN0YW5jZXMgfSk7XHJcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNba2V5XTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
