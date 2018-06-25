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
var string_rules_1 = require("./string-rules");
var number_rules_1 = require("./number-rules");
var common_rules_1 = require("./common-rules");
var RulesFactory = /** @class */ (function () {
    function RulesFactory(stringRules, numberRules, commonRules) {
        this.type = "factory";
        this.rules = {};
        this.rules.commonRules = commonRules;
        this.rules.stringRules = stringRules;
        this.rules.numberRules = numberRules;
    }
    RulesFactory.prototype.register = function () {
        var _this = this;
        Object.keys(this.rules)
            .forEach(function (kind) {
            return _this.rules[kind].register();
        });
    };
    RulesFactory.prototype.add = function () {
        throw new Error("Method not implemented.");
    };
    RulesFactory.prototype.bind = function (ctrl) {
        var rule = this.rules.commonRules.bind(ctrl);
        this.rules[ctrl.kind + "Rules"].bind(ctrl, rule);
        rule.on(ctrl);
    };
    RulesFactory = __decorate([
        aurelia_framework_1.inject(string_rules_1.StringRules, number_rules_1.NumberRules, common_rules_1.CommonRules),
        __metadata("design:paramtypes", [string_rules_1.StringRules,
            number_rules_1.NumberRules,
            common_rules_1.CommonRules])
    ], RulesFactory);
    return RulesFactory;
}());
exports.RulesFactory = RulesFactory;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBMkM7QUFDM0MsK0NBQTZDO0FBQzdDLCtDQUE2QztBQUM3QywrQ0FBNkM7QUFHN0M7SUFLRSxzQkFDRSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixXQUF3QjtRQVAxQixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBRWpCLFVBQUssR0FBUSxFQUFFLENBQUM7UUFPZCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztJQUN2QyxDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3BCLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDWixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1FBQTNCLENBQTJCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMEJBQUcsR0FBSDtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLElBQVM7UUFDWixJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUE3QlUsWUFBWTtRQUR4QiwwQkFBTSxDQUFDLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxDQUFDO3lDQU83QiwwQkFBVztZQUNYLDBCQUFXO1lBQ1gsMEJBQVc7T0FSZixZQUFZLENBOEJ4QjtJQUFELG1CQUFDO0NBOUJELEFBOEJDLElBQUE7QUE5Qlksb0NBQVkiLCJmaWxlIjoicnVsZXMvcnVsZXMtZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU3RyaW5nUnVsZXMgfSBmcm9tIFwiLi9zdHJpbmctcnVsZXNcIjtcbmltcG9ydCB7IE51bWJlclJ1bGVzIH0gZnJvbSBcIi4vbnVtYmVyLXJ1bGVzXCI7XG5pbXBvcnQgeyBDb21tb25SdWxlcyB9IGZyb20gXCIuL2NvbW1vbi1ydWxlc1wiO1xuXG5AaW5qZWN0KFN0cmluZ1J1bGVzLCBOdW1iZXJSdWxlcywgQ29tbW9uUnVsZXMpXG5leHBvcnQgY2xhc3MgUnVsZXNGYWN0b3J5IHtcbiAgdHlwZSA9IFwiZmFjdG9yeVwiO1xuXG4gIHJ1bGVzOiBhbnkgPSB7fTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBzdHJpbmdSdWxlczogU3RyaW5nUnVsZXMsXG4gICAgbnVtYmVyUnVsZXM6IE51bWJlclJ1bGVzLFxuICAgIGNvbW1vblJ1bGVzOiBDb21tb25SdWxlc1xuICApIHtcbiAgICB0aGlzLnJ1bGVzLmNvbW1vblJ1bGVzID0gY29tbW9uUnVsZXM7XG4gICAgdGhpcy5ydWxlcy5zdHJpbmdSdWxlcyA9IHN0cmluZ1J1bGVzO1xuICAgIHRoaXMucnVsZXMubnVtYmVyUnVsZXMgPSBudW1iZXJSdWxlcztcbiAgfVxuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMucnVsZXMpXG4gICAgICAuZm9yRWFjaCgoa2luZCkgPT5cbiAgICAgICAgdGhpcy5ydWxlc1traW5kXS5yZWdpc3RlcigpKTtcbiAgfVxuXG4gIGFkZCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogYW55KSB7XG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLnJ1bGVzLmNvbW1vblJ1bGVzIGFzIENvbW1vblJ1bGVzKS5iaW5kKGN0cmwpO1xuICAgIHRoaXMucnVsZXNbYCR7Y3RybC5raW5kfVJ1bGVzYF0uYmluZChjdHJsLCBydWxlKTtcbiAgICBydWxlLm9uKGN0cmwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
