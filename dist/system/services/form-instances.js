System.register(["aurelia-framework", "../resources/logger"], function (exports_1, context_1) {
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
    var aurelia_framework_1, logger_1, FormInstances;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            }
        ],
        execute: function () {
            FormInstances = /** @class */ (function () {
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
            exports_1("FormInstances", FormInstances);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFjRSx1QkFBb0IsTUFBd0I7b0JBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO29CQUpwQyxjQUFTLEdBRWIsRUFBRSxDQUFDO2dCQUV5QyxDQUFDO2dCQUVqRCwyQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLFFBQXVCO29CQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsMkJBQUcsR0FBSCxVQUFJLEdBQVc7b0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7b0JBQzlFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFmVSxhQUFhO29CQUZ6Qiw2QkFBUyxFQUFFO29CQUNYLDBCQUFNLENBQUMseUJBQWdCLENBQUM7cURBTUsseUJBQWdCO21CQUxqQyxhQUFhLENBZ0J6QjtnQkFBRCxvQkFBQzthQWhCRCxBQWdCQzs7UUFDRCxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ2xldG9uLCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuLi9mb3JtL2Zvcm0tY29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuXHJcbkBzaW5nbGV0b24oKVxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Mb2dnZXIpXHJcbmV4cG9ydCBjbGFzcyBGb3JtSW5zdGFuY2VzIHtcclxuICBwcml2YXRlIGluc3RhbmNlczoge1xyXG4gICAgW2tleTogc3RyaW5nXTogSUZvcm1JbnN0YW5jZVxyXG4gIH0gPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIGluc3RhbmNlOiBJRm9ybUluc3RhbmNlKSB7XHJcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwic2V0dGluZyBmb3JtIGluc3RhbmNlXCIsIHsga2V5LCBpbnN0YW5jZSB9KTtcclxuICAgIHRoaXMuaW5zdGFuY2VzW2tleV0gPSBpbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGdldChrZXk6IHN0cmluZykge1xyXG4gICAgdGhpcy5sb2dnZXIud2FybihcImdldHRpbmcgZm9ybSBpbnN0YW5jZVwiLCB7IGtleSwgaW5zdGFuY2VzOiB0aGlzLmluc3RhbmNlcyB9KTtcclxuICAgIHJldHVybiB0aGlzLmluc3RhbmNlc1trZXldO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
