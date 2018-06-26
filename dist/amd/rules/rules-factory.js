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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBTUE7UUFLRSxzQkFDRSxXQUF3QixFQUN4QixXQUF3QixFQUN4QixXQUF3QjtZQVAxQixTQUFJLEdBQUcsU0FBUyxDQUFDO1lBU2YsSUFBSSxDQUFDLEtBQUssR0FBRztnQkFDWCxXQUFXLGFBQUE7Z0JBQ1gsV0FBVyxhQUFBO2dCQUNYLFdBQVcsYUFBQTthQUNaLENBQUM7UUFDSixDQUFDO1FBRUQsK0JBQVEsR0FBUjtZQUFBLGlCQUlDO1lBSEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUNwQixPQUFPLENBQUMsVUFBQyxJQUFJO2dCQUNaLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO1FBQ25DLENBQUM7UUFFRCwwQkFBRyxHQUFIO1lBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQzdDLENBQUM7UUFFRCwyQkFBSSxHQUFKLFVBQUssSUFBUztZQUNaLElBQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBSSxJQUFJLENBQUMsSUFBSSxVQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQS9CVSxZQUFZO1lBRHhCLDBCQUFNLENBQUMsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDBCQUFXLENBQUM7NkNBTzdCLDBCQUFXO2dCQUNYLDBCQUFXO2dCQUNYLDBCQUFXO1dBUmYsWUFBWSxDQWdDeEI7UUFBRCxtQkFBQztLQWhDRCxBQWdDQyxJQUFBO0lBaENZLG9DQUFZIiwiZmlsZSI6InJ1bGVzL3J1bGVzLWZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFN0cmluZ1J1bGVzIH0gZnJvbSBcIi4vc3RyaW5nLXJ1bGVzXCI7XG5pbXBvcnQgeyBOdW1iZXJSdWxlcyB9IGZyb20gXCIuL251bWJlci1ydWxlc1wiO1xuaW1wb3J0IHsgQ29tbW9uUnVsZXMgfSBmcm9tIFwiLi9jb21tb24tcnVsZXNcIjtcblxuQGluamVjdChDb21tb25SdWxlcywgU3RyaW5nUnVsZXMsIE51bWJlclJ1bGVzKVxuZXhwb3J0IGNsYXNzIFJ1bGVzRmFjdG9yeSB7XG4gIHR5cGUgPSBcImZhY3RvcnlcIjtcblxuICBydWxlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbW1vblJ1bGVzOiBDb21tb25SdWxlcyxcbiAgICBzdHJpbmdSdWxlczogU3RyaW5nUnVsZXMsXG4gICAgbnVtYmVyUnVsZXM6IE51bWJlclJ1bGVzXG4gICkge1xuICAgIHRoaXMucnVsZXMgPSB7XG4gICAgICBjb21tb25SdWxlcyxcbiAgICAgIHN0cmluZ1J1bGVzLFxuICAgICAgbnVtYmVyUnVsZXMsXG4gICAgfTtcbiAgfVxuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMucnVsZXMpXG4gICAgICAuZm9yRWFjaCgoa2luZCkgPT5cbiAgICAgICAgdGhpcy5ydWxlc1traW5kXS5yZWdpc3RlcigpKTtcbiAgfVxuXG4gIGFkZCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogYW55KSB7XG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLnJ1bGVzLmNvbW1vblJ1bGVzIGFzIENvbW1vblJ1bGVzKS5iaW5kKGN0cmwpO1xuICAgIHRoaXMucnVsZXNbYCR7Y3RybC5raW5kfVJ1bGVzYF0uYmluZChjdHJsLCBydWxlKTtcbiAgICBydWxlLm9uKGN0cmwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
