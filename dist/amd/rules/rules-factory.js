var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "./string-rules", "./number-rules", "./common-rules"], function (require, exports, aurelia_framework_1, string_rules_1, number_rules_1, common_rules_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBTUE7UUFLRSxzQkFDRSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixXQUF3QjtZQVAxQixTQUFJLEdBQUcsU0FBUyxDQUFDO1lBRWpCLFVBQUssR0FBUSxFQUFFLENBQUM7WUFPZCxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUN2QyxDQUFDO1FBRUQsK0JBQVEsR0FBUjtZQUFBLGlCQUlDO1lBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNwQixPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNaLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFFRCwwQkFBRyxHQUFIO1lBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFRCwyQkFBSSxHQUFKLFVBQUssSUFBUztZQUNaLElBQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBSSxJQUFJLENBQUMsSUFBSSxVQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQTdCVSxZQUFZO1lBRHhCLDBCQUFNLENBQUMsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDBCQUFXLENBQUM7NkNBTzdCLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLDBCQUFXO1dBUmYsWUFBWSxDQThCeEI7UUFBRCxtQkFBQztLQTlCRCxBQThCQyxJQUFBO0lBOUJZLG9DQUFZIiwiZmlsZSI6InJ1bGVzL3J1bGVzLWZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFN0cmluZ1J1bGVzIH0gZnJvbSBcIi4vc3RyaW5nLXJ1bGVzXCI7XG5pbXBvcnQgeyBOdW1iZXJSdWxlcyB9IGZyb20gXCIuL251bWJlci1ydWxlc1wiO1xuaW1wb3J0IHsgQ29tbW9uUnVsZXMgfSBmcm9tIFwiLi9jb21tb24tcnVsZXNcIjtcblxuQGluamVjdChTdHJpbmdSdWxlcywgTnVtYmVyUnVsZXMsIENvbW1vblJ1bGVzKVxuZXhwb3J0IGNsYXNzIFJ1bGVzRmFjdG9yeSB7XG4gIHR5cGUgPSBcImZhY3RvcnlcIjtcblxuICBydWxlczogYW55ID0ge307XG5cbiAgY29uc3RydWN0b3IoXG4gICAgc3RyaW5nUnVsZXM6IFN0cmluZ1J1bGVzLFxuICAgIG51bWJlclJ1bGVzOiBOdW1iZXJSdWxlcyxcbiAgICBjb21tb25SdWxlczogQ29tbW9uUnVsZXNcbiAgKSB7XG4gICAgdGhpcy5ydWxlcy5jb21tb25SdWxlcyA9IGNvbW1vblJ1bGVzO1xuICAgIHRoaXMucnVsZXMuc3RyaW5nUnVsZXMgPSBzdHJpbmdSdWxlcztcbiAgICB0aGlzLnJ1bGVzLm51bWJlclJ1bGVzID0gbnVtYmVyUnVsZXM7XG4gIH1cblxuICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKVxuICAgICAgLmZvckVhY2goKGtpbmQpID0+XG4gICAgICAgIHRoaXMucnVsZXNba2luZF0ucmVnaXN0ZXIoKSk7XG4gIH1cblxuICBhZGQoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cblxuICBiaW5kKGN0cmw6IGFueSkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5ydWxlcy5jb21tb25SdWxlcyBhcyBDb21tb25SdWxlcykuYmluZChjdHJsKTtcbiAgICB0aGlzLnJ1bGVzW2Ake2N0cmwua2luZH1SdWxlc2BdLmJpbmQoY3RybCwgcnVsZSk7XG4gICAgcnVsZS5vbihjdHJsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
