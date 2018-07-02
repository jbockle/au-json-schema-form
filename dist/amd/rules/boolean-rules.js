var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../services/schema-form-configuration"], function (require, exports, aurelia_framework_1, schema_form_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BooleanRules = /** @class */ (function () {
        function BooleanRules(configuration) {
            this.configuration = configuration;
        }
        BooleanRules.prototype.register = function () {
            this.add();
        };
        BooleanRules.prototype.add = function () {
            // nothing specific to booleans
        };
        BooleanRules.prototype.bind = function (ctrl, rule) {
            // nothing specific to booleans
        };
        BooleanRules = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
        ], BooleanRules);
        return BooleanRules;
    }());
    exports.BooleanRules = BooleanRules;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2Jvb2xlYW4tcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0E7UUFDRSxzQkFBb0IsYUFBc0M7WUFBdEMsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQUksQ0FBQztRQUUvRCwrQkFBUSxHQUFSO1lBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQztRQUVELDBCQUFHLEdBQUg7WUFDRSwrQkFBK0I7UUFDakMsQ0FBQztRQUVELDJCQUFJLEdBQUosVUFBSyxJQUFlLEVBQUUsSUFBbUM7WUFDdkQsK0JBQStCO1FBQ2pDLENBQUM7UUFiVSxZQUFZO1lBRHhCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7NkNBRUssbURBQXVCO1dBRC9DLFlBQVksQ0FjeEI7UUFBRCxtQkFBQztLQWRELEFBY0MsSUFBQTtJQWRZLG9DQUFZIiwiZmlsZSI6InJ1bGVzL2Jvb2xlYW4tcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTZk51bWJlciB9IGZyb20gXCIuLi9mb3JtL251bWJlci9zZi1udW1iZXJcIjtcbmltcG9ydCB7IFNmQm9vbGVhbiB9IGZyb20gXCIuLi9mb3JtL2Jvb2xlYW4vc2YtYm9vbGVhblwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIEJvb2xlYW5SdWxlcyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgLy8gbm90aGluZyBzcGVjaWZpYyB0byBib29sZWFuc1xuICB9XG5cbiAgYmluZChjdHJsOiBTZkJvb2xlYW4sIHJ1bGU6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+KSB7XG4gICAgLy8gbm90aGluZyBzcGVjaWZpYyB0byBib29sZWFuc1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
