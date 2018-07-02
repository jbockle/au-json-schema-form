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
var schema_form_configuration_1 = require("../services/schema-form-configuration");
var ArrayRules = /** @class */ (function () {
    function ArrayRules(configuration) {
        this.configuration = configuration;
    }
    ArrayRules.prototype.register = function () {
        this.add();
    };
    ArrayRules.prototype.add = function () {
        // uniqueItems
    };
    ArrayRules.prototype.bind = function (ctrl, rule) {
        rule = rule.ensureObject().satisfies(function () { return true; });
        if (Number.isInteger(ctrl.schema.maxItems)) {
            rule = rule.maxItems(ctrl.schema.maxItems);
        }
        if (Number.isInteger(ctrl.schema.minItems)) {
            rule = rule.minItems(ctrl.schema.minItems);
        }
        if (ctrl.schema.uniqueItems) {
            // TODO: add unique items rule
        }
        rule.on(ctrl.model);
    };
    ArrayRules = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
    ], ArrayRules);
    return ArrayRules;
}());
exports.ArrayRules = ArrayRules;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ0EsdURBQTJDO0FBQzNDLG1GQUFnRjtBQUloRjtJQUNFLG9CQUFvQixhQUFzQztRQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7SUFBSSxDQUFDO0lBRS9ELDZCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDYixDQUFDO0lBRUQsd0JBQUcsR0FBSDtRQUNFLGNBQWM7SUFDaEIsQ0FBQztJQUVELHlCQUFJLEdBQUosVUFBSyxJQUFhLEVBQUUsSUFBbUM7UUFDckQsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUMxQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDMUMsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUM1QztRQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7WUFDM0IsOEJBQThCO1NBQy9CO1FBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQXZCVSxVQUFVO1FBRHRCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7eUNBRUssbURBQXVCO09BRC9DLFVBQVUsQ0F3QnRCO0lBQUQsaUJBQUM7Q0F4QkQsQUF3QkMsSUFBQTtBQXhCWSxnQ0FBVSIsImZpbGUiOiJydWxlcy9hcnJheS1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNmQXJyYXkgfSBmcm9tIFwiLi4vZm9ybS9hcnJheS9zZi1hcnJheVwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIEFycmF5UnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICByZWdpc3RlcigpIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIC8vIHVuaXF1ZUl0ZW1zXG4gIH1cblxuICBiaW5kKGN0cmw6IFNmQXJyYXksIHJ1bGU6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+KSB7XG4gICAgcnVsZSA9IHJ1bGUuZW5zdXJlT2JqZWN0KCkuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuc2NoZW1hLm1heEl0ZW1zKSkge1xuICAgICAgcnVsZSA9IHJ1bGUubWF4SXRlbXMoY3RybC5zY2hlbWEubWF4SXRlbXMpO1xuICAgIH1cbiAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLnNjaGVtYS5taW5JdGVtcykpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1pbkl0ZW1zKGN0cmwuc2NoZW1hLm1pbkl0ZW1zKTtcbiAgICB9XG4gICAgaWYgKGN0cmwuc2NoZW1hLnVuaXF1ZUl0ZW1zKSB7XG4gICAgICAvLyBUT0RPOiBhZGQgdW5pcXVlIGl0ZW1zIHJ1bGVcbiAgICB9XG4gICAgcnVsZS5vbihjdHJsLm1vZGVsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
