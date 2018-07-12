var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../resources/logger"], function (require, exports, aurelia_framework_1, logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVNBO1FBS0UsdUJBQW9CLE1BQXdCO1lBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBSnBDLGNBQVMsR0FFYixFQUFFLENBQUM7UUFFeUMsQ0FBQztRQUVqRCwyQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLFFBQXVCO1lBQ3RDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsUUFBUSxVQUFBLEVBQUUsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO1FBQ2pDLENBQUM7UUFFRCwyQkFBRyxHQUFILFVBQUksR0FBVztZQUNiLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsR0FBRyxLQUFBLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBZlUsYUFBYTtZQUZ6Qiw2QkFBUyxFQUFFO1lBQ1gsMEJBQU0sQ0FBQyx5QkFBZ0IsQ0FBQzs2Q0FNSyx5QkFBZ0I7V0FMakMsYUFBYSxDQWdCekI7UUFBRCxvQkFBQztLQWhCRCxBQWdCQyxJQUFBO0lBaEJZLHNDQUFhIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ2xldG9uLCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuLi9mb3JtL2Zvcm0tY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuXHJcbkBzaW5nbGV0b24oKVxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Mb2dnZXIpXHJcbmV4cG9ydCBjbGFzcyBGb3JtSW5zdGFuY2VzIHtcclxuICBwcml2YXRlIGluc3RhbmNlczoge1xyXG4gICAgW2tleTogc3RyaW5nXTogSUZvcm1JbnN0YW5jZVxyXG4gIH0gPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIGluc3RhbmNlOiBJRm9ybUluc3RhbmNlKSB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwic2V0dGluZyBmb3JtIGluc3RhbmNlXCIsIHsga2V5LCBpbnN0YW5jZSB9KTtcclxuICAgIHRoaXMuaW5zdGFuY2VzW2tleV0gPSBpbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGdldChrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dnZXIud2FybihcImdldHRpbmcgZm9ybSBpbnN0YW5jZVwiLCB7IGtleSwgaW5zdGFuY2VzOiB0aGlzLmluc3RhbmNlcyB9KTtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1trZXldO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
