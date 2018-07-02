var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./string-rules", "./number-rules", "./common-rules", "./boolean-rules"], function (require, exports, aurelia_framework_1, string_rules_1, number_rules_1, common_rules_1, boolean_rules_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0E7UUFLRSxzQkFDRSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixXQUF3QixFQUN4QixZQUEwQjtZQVI1QixTQUFJLEdBQUcsU0FBUyxDQUFDO1lBVWYsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDWCxXQUFXLGFBQUE7Z0JBQ1gsV0FBVyxhQUFBO2dCQUNYLFdBQVcsYUFBQTtnQkFDWCxZQUFZLGNBQUE7YUFDYixDQUFDO1FBQ0osQ0FBQztRQUVELCtCQUFRLEdBQVI7WUFBQSxpQkFJQztZQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDcEIsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDWixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQTNCLENBQTJCLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQsMEJBQUcsR0FBSDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsMkJBQUksR0FBSixVQUFLLElBQVM7WUFDWixJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFqQ1UsWUFBWTtZQUR4QiwwQkFBTSxDQUFDLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDRCQUFZLENBQUM7NkNBTzNDLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNWLDRCQUFZO1dBVGpCLFlBQVksQ0FrQ3hCO1FBQUQsbUJBQUM7S0FsQ0QsQUFrQ0MsSUFBQTtJQWxDWSxvQ0FBWSIsImZpbGUiOiJydWxlcy9ydWxlcy1mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTdHJpbmdSdWxlcyB9IGZyb20gXCIuL3N0cmluZy1ydWxlc1wiO1xuaW1wb3J0IHsgTnVtYmVyUnVsZXMgfSBmcm9tIFwiLi9udW1iZXItcnVsZXNcIjtcbmltcG9ydCB7IENvbW1vblJ1bGVzIH0gZnJvbSBcIi4vY29tbW9uLXJ1bGVzXCI7XG5pbXBvcnQgeyBCb29sZWFuUnVsZXMgfSBmcm9tIFwiLi9ib29sZWFuLXJ1bGVzXCI7XG5cbkBpbmplY3QoQ29tbW9uUnVsZXMsIFN0cmluZ1J1bGVzLCBOdW1iZXJSdWxlcywgQm9vbGVhblJ1bGVzKVxuZXhwb3J0IGNsYXNzIFJ1bGVzRmFjdG9yeSB7XG4gIHR5cGUgPSBcImZhY3RvcnlcIjtcblxuICBydWxlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbW1vblJ1bGVzOiBDb21tb25SdWxlcyxcbiAgICBzdHJpbmdSdWxlczogU3RyaW5nUnVsZXMsXG4gICAgbnVtYmVyUnVsZXM6IE51bWJlclJ1bGVzLFxuICAgIGJvb2xlYW5SdWxlczogQm9vbGVhblJ1bGVzXG4gICkge1xuICAgIHRoaXMucnVsZXMgPSB7XG4gICAgICBjb21tb25SdWxlcyxcbiAgICAgIHN0cmluZ1J1bGVzLFxuICAgICAgbnVtYmVyUnVsZXMsXG4gICAgICBib29sZWFuUnVsZXNcbiAgICB9O1xuICB9XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ydWxlcylcbiAgICAgIC5mb3JFYWNoKChraW5kKSA9PlxuICAgICAgICB0aGlzLnJ1bGVzW2tpbmRdLnJlZ2lzdGVyKCkpO1xuICB9XG5cbiAgYWRkKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgYmluZChjdHJsOiBhbnkpIHtcbiAgICBjb25zdCBydWxlID0gKHRoaXMucnVsZXMuY29tbW9uUnVsZXMgYXMgQ29tbW9uUnVsZXMpLmJpbmQoY3RybCk7XG4gICAgdGhpcy5ydWxlc1tgJHtjdHJsLmtpbmR9UnVsZXNgXS5iaW5kKGN0cmwsIHJ1bGUpO1xuICAgIHJ1bGUub24oY3RybCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
