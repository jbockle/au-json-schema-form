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
    function RulesFactory(commonRules, stringRules, numberRules) {
        this.type = "factory";
        this.rules = {
            commonRules: commonRules,
            stringRules: stringRules,
            numberRules: numberRules,
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
        aurelia_framework_1.inject(common_rules_1.CommonRules, string_rules_1.StringRules, number_rules_1.NumberRules),
        __metadata("design:paramtypes", [common_rules_1.CommonRules,
            string_rules_1.StringRules,
            number_rules_1.NumberRules])
    ], RulesFactory);
    return RulesFactory;
}());
exports.RulesFactory = RulesFactory;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBMkM7QUFDM0MsK0NBQTZDO0FBQzdDLCtDQUE2QztBQUM3QywrQ0FBNkM7QUFHN0M7SUFLRSxzQkFDRSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixXQUF3QjtRQVAxQixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBU2YsSUFBSSxDQUFDLEtBQUssR0FBRztZQUNYLFdBQVcsYUFBQTtZQUNYLFdBQVcsYUFBQTtZQUNYLFdBQVcsYUFBQTtTQUNaLENBQUM7SUFDSixDQUFDO0lBRUQsK0JBQVEsR0FBUjtRQUFBLGlCQUlDO1FBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2FBQ3BCLE9BQU8sQ0FBQyxVQUFDLElBQUk7WUFDWixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1FBQTNCLENBQTJCLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsMEJBQUcsR0FBSDtRQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLElBQVM7UUFDWixJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUEvQlUsWUFBWTtRQUR4QiwwQkFBTSxDQUFDLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxDQUFDO3lDQU83QiwwQkFBVztZQUNYLDBCQUFXO1lBQ1gsMEJBQVc7T0FSZixZQUFZLENBZ0N4QjtJQUFELG1CQUFDO0NBaENELEFBZ0NDLElBQUE7QUFoQ1ksb0NBQVkiLCJmaWxlIjoicnVsZXMvcnVsZXMtZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU3RyaW5nUnVsZXMgfSBmcm9tIFwiLi9zdHJpbmctcnVsZXNcIjtcbmltcG9ydCB7IE51bWJlclJ1bGVzIH0gZnJvbSBcIi4vbnVtYmVyLXJ1bGVzXCI7XG5pbXBvcnQgeyBDb21tb25SdWxlcyB9IGZyb20gXCIuL2NvbW1vbi1ydWxlc1wiO1xuXG5AaW5qZWN0KENvbW1vblJ1bGVzLCBTdHJpbmdSdWxlcywgTnVtYmVyUnVsZXMpXG5leHBvcnQgY2xhc3MgUnVsZXNGYWN0b3J5IHtcbiAgdHlwZSA9IFwiZmFjdG9yeVwiO1xuXG4gIHJ1bGVzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29tbW9uUnVsZXM6IENvbW1vblJ1bGVzLFxuICAgIHN0cmluZ1J1bGVzOiBTdHJpbmdSdWxlcyxcbiAgICBudW1iZXJSdWxlczogTnVtYmVyUnVsZXNcbiAgKSB7XG4gICAgdGhpcy5ydWxlcyA9IHtcbiAgICAgIGNvbW1vblJ1bGVzLFxuICAgICAgc3RyaW5nUnVsZXMsXG4gICAgICBudW1iZXJSdWxlcyxcbiAgICB9O1xuICB9XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ydWxlcylcbiAgICAgIC5mb3JFYWNoKChraW5kKSA9PlxuICAgICAgICB0aGlzLnJ1bGVzW2tpbmRdLnJlZ2lzdGVyKCkpO1xuICB9XG5cbiAgYWRkKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgYmluZChjdHJsOiBhbnkpIHtcbiAgICBjb25zdCBydWxlID0gKHRoaXMucnVsZXMuY29tbW9uUnVsZXMgYXMgQ29tbW9uUnVsZXMpLmJpbmQoY3RybCk7XG4gICAgdGhpcy5ydWxlc1tgJHtjdHJsLmtpbmR9UnVsZXNgXS5iaW5kKGN0cmwsIHJ1bGUpO1xuICAgIHJ1bGUub24oY3RybCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
