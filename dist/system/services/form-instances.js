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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFjRSx1QkFBb0IsTUFBd0I7b0JBQXhCLFdBQU0sR0FBTixNQUFNLENBQWtCO29CQUpwQyxjQUFTLEdBRWIsRUFBRSxDQUFDO2dCQUV5QyxDQUFDO2dCQUVqRCwyQkFBRyxHQUFILFVBQUksR0FBVyxFQUFFLFFBQXVCO29CQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsS0FBQSxFQUFFLFFBQVEsVUFBQSxFQUFFLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsMkJBQUcsR0FBSCxVQUFJLEdBQVc7b0JBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxHQUFHLEtBQUEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7b0JBQzlFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDN0IsQ0FBQztnQkFmVSxhQUFhO29CQUZ6Qiw2QkFBUyxFQUFFO29CQUNYLDBCQUFNLENBQUMseUJBQWdCLENBQUM7cURBTUsseUJBQWdCO21CQUxqQyxhQUFhLENBZ0J6QjtnQkFBRCxvQkFBQzthQWhCRCxBQWdCQzs7UUFDRCxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ2xldG9uLCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vZm9ybS9mb3JtLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuXG5Ac2luZ2xldG9uKClcbkBpbmplY3QoU2NoZW1hRm9ybUxvZ2dlcilcbmV4cG9ydCBjbGFzcyBGb3JtSW5zdGFuY2VzIHtcbiAgcHJpdmF0ZSBpbnN0YW5jZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBJRm9ybUluc3RhbmNlXG4gIH0gPSB7fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcikgeyB9XG5cbiAgc2V0KGtleTogc3RyaW5nLCBpbnN0YW5jZTogSUZvcm1JbnN0YW5jZSkge1xuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJzZXR0aW5nIGZvcm0gaW5zdGFuY2VcIiwgeyBrZXksIGluc3RhbmNlIH0pO1xuICAgIHRoaXMuaW5zdGFuY2VzW2tleV0gPSBpbnN0YW5jZTtcbiAgfVxuXG4gIGdldChrZXk6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJnZXR0aW5nIGZvcm0gaW5zdGFuY2VcIiwgeyBrZXksIGluc3RhbmNlczogdGhpcy5pbnN0YW5jZXMgfSk7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW2tleV07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
