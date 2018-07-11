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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2Jvb2xlYW4tcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0E7UUFDRSxzQkFBb0IsYUFBc0M7WUFBdEMsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQUksQ0FBQztRQUUvRCwrQkFBUSxHQUFSO1lBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ2IsQ0FBQztRQUVELDBCQUFHLEdBQUg7WUFDRSwrQkFBK0I7UUFDakMsQ0FBQztRQUVELDJCQUFJLEdBQUosVUFBSyxJQUFlLEVBQUUsSUFBbUM7WUFDdkQsK0JBQStCO1FBQ2pDLENBQUM7UUFiVSxZQUFZO1lBRHhCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7NkNBRUssbURBQXVCO1dBRC9DLFlBQVksQ0FjeEI7UUFBRCxtQkFBQztLQWRELEFBY0MsSUFBQTtJQWRZLG9DQUFZIiwiZmlsZSI6InJ1bGVzL2Jvb2xlYW4tcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBTZk51bWJlciB9IGZyb20gXCIuLi9mb3JtL251bWJlci9zZi1udW1iZXJcIjtcclxuaW1wb3J0IHsgU2ZCb29sZWFuIH0gZnJvbSBcIi4uL2Zvcm0vYm9vbGVhbi9zZi1ib29sZWFuXCI7XHJcblxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxyXG5leHBvcnQgY2xhc3MgQm9vbGVhblJ1bGVzIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cclxuXHJcbiAgcmVnaXN0ZXIoKSB7XHJcbiAgICB0aGlzLmFkZCgpO1xyXG4gIH1cclxuXHJcbiAgYWRkKCkge1xyXG4gICAgLy8gbm90aGluZyBzcGVjaWZpYyB0byBib29sZWFuc1xyXG4gIH1cclxuXHJcbiAgYmluZChjdHJsOiBTZkJvb2xlYW4sIHJ1bGU6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+KSB7XHJcbiAgICAvLyBub3RoaW5nIHNwZWNpZmljIHRvIGJvb2xlYW5zXHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
