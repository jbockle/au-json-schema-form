System.register(["aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var aurelia_framework_1, FormInstances;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
            FormInstances = /** @class */ (function () {
                function FormInstances() {
                    this.instances = {};
                }
                FormInstances.prototype.set = function (key, instance) {
                    this.instances[key] = instance;
                };
                FormInstances.prototype.get = function (key) {
                    return this.instances[key];
                };
                FormInstances = __decorate([
                    aurelia_framework_1.singleton()
                ], FormInstances);
                return FormInstances;
            }());
            exports_1("FormInstances", FormInstances);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFNQTtvQkFFVSxjQUFTLEdBRWIsRUFBRSxDQUFDO2dCQVNULENBQUM7Z0JBUEMsMkJBQUcsR0FBSCxVQUFJLEdBQVcsRUFBRSxRQUF1QjtvQkFDdEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUM7Z0JBQ2pDLENBQUM7Z0JBRUQsMkJBQUcsR0FBSCxVQUFJLEdBQVc7b0JBQ2IsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM3QixDQUFDO2dCQVhVLGFBQWE7b0JBRHpCLDZCQUFTLEVBQUU7bUJBQ0MsYUFBYSxDQVl6QjtnQkFBRCxvQkFBQzthQVpELEFBWUM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJzZXJ2aWNlcy9mb3JtLWluc3RhbmNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNpbmdsZXRvbiB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuLi9mb3JtL2Zvcm0tY29udHJvbGxlclwiO1xuXG5Ac2luZ2xldG9uKClcbmV4cG9ydCBjbGFzcyBGb3JtSW5zdGFuY2VzIHtcbiAgcHJpdmF0ZSBpbnN0YW5jZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBJRm9ybUluc3RhbmNlXG4gIH0gPSB7fTtcblxuICBzZXQoa2V5OiBzdHJpbmcsIGluc3RhbmNlOiBJRm9ybUluc3RhbmNlKSB7XG4gICAgdGhpcy5pbnN0YW5jZXNba2V5XSA9IGluc3RhbmNlO1xuICB9XG5cbiAgZ2V0KGtleTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzW2tleV07XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
