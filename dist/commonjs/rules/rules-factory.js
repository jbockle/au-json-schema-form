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
var boolean_rules_1 = require("./boolean-rules");
var RulesFactory = /** @class */ (function () {
    function RulesFactory(commonRules, stringRules, numberRules, booleanRules) {
        this.type = "factory";
        this.rules = {
            commonRules: commonRules,
            stringRules: stringRules,
            numberRules: numberRules,
            booleanRules: booleanRules
        };
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
        aurelia_framework_1.inject(common_rules_1.CommonRules, string_rules_1.StringRules, number_rules_1.NumberRules, boolean_rules_1.BooleanRules),
        __metadata("design:paramtypes", [common_rules_1.CommonRules,
            string_rules_1.StringRules,
            number_rules_1.NumberRules,
            boolean_rules_1.BooleanRules])
    ], RulesFactory);
    return RulesFactory;
}());
exports.RulesFactory = RulesFactory;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBMkM7QUFDM0MsK0NBQTZDO0FBQzdDLCtDQUE2QztBQUM3QywrQ0FBNkM7QUFDN0MsaURBQStDO0FBRy9DO0lBS0Usc0JBQ0UsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsWUFBMEI7UUFSNUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQVVmLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxXQUFXLGFBQUE7WUFDWCxXQUFXLGFBQUE7WUFDWCxXQUFXLGFBQUE7WUFDWCxZQUFZLGNBQUE7U0FDYixDQUFDO0lBQ0osQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFJQztRQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNwQixPQUFPLENBQUMsVUFBQyxJQUFJO1lBQ1osT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtRQUEzQixDQUEyQixDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELDBCQUFHLEdBQUg7UUFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDJCQUFJLEdBQUosVUFBSyxJQUFTO1FBQ1osSUFBTSxJQUFJLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFJLElBQUksQ0FBQyxJQUFJLFVBQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0lBakNVLFlBQVk7UUFEeEIsMEJBQU0sQ0FBQywwQkFBVyxFQUFFLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSw0QkFBWSxDQUFDO3lDQU8zQywwQkFBVztZQUNYLDBCQUFXO1lBQ1gsMEJBQVc7WUFDViw0QkFBWTtPQVRqQixZQUFZLENBa0N4QjtJQUFELG1CQUFDO0NBbENELEFBa0NDLElBQUE7QUFsQ1ksb0NBQVkiLCJmaWxlIjoicnVsZXMvcnVsZXMtZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU3RyaW5nUnVsZXMgfSBmcm9tIFwiLi9zdHJpbmctcnVsZXNcIjtcbmltcG9ydCB7IE51bWJlclJ1bGVzIH0gZnJvbSBcIi4vbnVtYmVyLXJ1bGVzXCI7XG5pbXBvcnQgeyBDb21tb25SdWxlcyB9IGZyb20gXCIuL2NvbW1vbi1ydWxlc1wiO1xuaW1wb3J0IHsgQm9vbGVhblJ1bGVzIH0gZnJvbSBcIi4vYm9vbGVhbi1ydWxlc1wiO1xuXG5AaW5qZWN0KENvbW1vblJ1bGVzLCBTdHJpbmdSdWxlcywgTnVtYmVyUnVsZXMsIEJvb2xlYW5SdWxlcylcbmV4cG9ydCBjbGFzcyBSdWxlc0ZhY3Rvcnkge1xuICB0eXBlID0gXCJmYWN0b3J5XCI7XG5cbiAgcnVsZXM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb21tb25SdWxlczogQ29tbW9uUnVsZXMsXG4gICAgc3RyaW5nUnVsZXM6IFN0cmluZ1J1bGVzLFxuICAgIG51bWJlclJ1bGVzOiBOdW1iZXJSdWxlcyxcbiAgICBib29sZWFuUnVsZXM6IEJvb2xlYW5SdWxlc1xuICApIHtcbiAgICB0aGlzLnJ1bGVzID0ge1xuICAgICAgY29tbW9uUnVsZXMsXG4gICAgICBzdHJpbmdSdWxlcyxcbiAgICAgIG51bWJlclJ1bGVzLFxuICAgICAgYm9vbGVhblJ1bGVzXG4gICAgfTtcbiAgfVxuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMucnVsZXMpXG4gICAgICAuZm9yRWFjaCgoa2luZCkgPT5cbiAgICAgICAgdGhpcy5ydWxlc1traW5kXS5yZWdpc3RlcigpKTtcbiAgfVxuXG4gIGFkZCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogYW55KSB7XG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLnJ1bGVzLmNvbW1vblJ1bGVzIGFzIENvbW1vblJ1bGVzKS5iaW5kKGN0cmwpO1xuICAgIHRoaXMucnVsZXNbYCR7Y3RybC5raW5kfVJ1bGVzYF0uYmluZChjdHJsLCBydWxlKTtcbiAgICBydWxlLm9uKGN0cmwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
