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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBT0E7UUFLRSxzQkFDRSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixXQUF3QixFQUN4QixZQUEwQjtZQVI1QixTQUFJLEdBQUcsU0FBUyxDQUFDO1lBVWYsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDWCxXQUFXLGFBQUE7Z0JBQ1gsV0FBVyxhQUFBO2dCQUNYLFdBQVcsYUFBQTtnQkFDWCxZQUFZLGNBQUE7YUFDYixDQUFDO1FBQ0osQ0FBQztRQUVELCtCQUFRLEdBQVI7WUFBQSxpQkFJQztZQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztpQkFDcEIsT0FBTyxDQUFDLFVBQUMsSUFBSTtnQkFDWixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO1lBQTNCLENBQTJCLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBRUQsMEJBQUcsR0FBSDtZQUNFLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBRUQsMkJBQUksR0FBSixVQUFLLElBQVM7WUFDWixJQUFNLElBQUksR0FBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQTJCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFqQ1UsWUFBWTtZQUR4QiwwQkFBTSxDQUFDLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDRCQUFZLENBQUM7NkNBTzNDLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNWLDRCQUFZO1dBVGpCLFlBQVksQ0FrQ3hCO1FBQUQsbUJBQUM7S0FsQ0QsQUFrQ0MsSUFBQTtJQWxDWSxvQ0FBWSIsImZpbGUiOiJydWxlcy9ydWxlcy1mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IFN0cmluZ1J1bGVzIH0gZnJvbSBcIi4vc3RyaW5nLXJ1bGVzXCI7XHJcbmltcG9ydCB7IE51bWJlclJ1bGVzIH0gZnJvbSBcIi4vbnVtYmVyLXJ1bGVzXCI7XHJcbmltcG9ydCB7IENvbW1vblJ1bGVzIH0gZnJvbSBcIi4vY29tbW9uLXJ1bGVzXCI7XHJcbmltcG9ydCB7IEJvb2xlYW5SdWxlcyB9IGZyb20gXCIuL2Jvb2xlYW4tcnVsZXNcIjtcclxuXHJcbkBpbmplY3QoQ29tbW9uUnVsZXMsIFN0cmluZ1J1bGVzLCBOdW1iZXJSdWxlcywgQm9vbGVhblJ1bGVzKVxyXG5leHBvcnQgY2xhc3MgUnVsZXNGYWN0b3J5IHtcclxuICB0eXBlID0gXCJmYWN0b3J5XCI7XHJcblxyXG4gIHJ1bGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29tbW9uUnVsZXM6IENvbW1vblJ1bGVzLFxyXG4gICAgc3RyaW5nUnVsZXM6IFN0cmluZ1J1bGVzLFxyXG4gICAgbnVtYmVyUnVsZXM6IE51bWJlclJ1bGVzLFxyXG4gICAgYm9vbGVhblJ1bGVzOiBCb29sZWFuUnVsZXNcclxuICApIHtcclxuICAgIHRoaXMucnVsZXMgPSB7XHJcbiAgICAgIGNvbW1vblJ1bGVzLFxyXG4gICAgICBzdHJpbmdSdWxlcyxcclxuICAgICAgbnVtYmVyUnVsZXMsXHJcbiAgICAgIGJvb2xlYW5SdWxlc1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xyXG4gICAgT2JqZWN0LmtleXModGhpcy5ydWxlcylcclxuICAgICAgLmZvckVhY2goKGtpbmQpID0+XHJcbiAgICAgICAgdGhpcy5ydWxlc1traW5kXS5yZWdpc3RlcigpKTtcclxuICB9XHJcblxyXG4gIGFkZCgpOiB2b2lkIHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gIH1cclxuXHJcbiAgYmluZChjdHJsOiBhbnkpIHtcclxuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5ydWxlcy5jb21tb25SdWxlcyBhcyBDb21tb25SdWxlcykuYmluZChjdHJsKTtcclxuICAgIHRoaXMucnVsZXNbYCR7Y3RybC5raW5kfVJ1bGVzYF0uYmluZChjdHJsLCBydWxlKTtcclxuICAgIHJ1bGUub24oY3RybCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
