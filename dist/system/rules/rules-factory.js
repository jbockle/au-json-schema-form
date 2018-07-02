System.register(["aurelia-framework", "./string-rules", "./number-rules", "./common-rules", "./boolean-rules"], function (exports_1, context_1) {
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
    var aurelia_framework_1, string_rules_1, number_rules_1, common_rules_1, boolean_rules_1, RulesFactory;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (string_rules_1_1) {
                string_rules_1 = string_rules_1_1;
            },
            function (number_rules_1_1) {
                number_rules_1 = number_rules_1_1;
            },
            function (common_rules_1_1) {
                common_rules_1 = common_rules_1_1;
            },
            function (boolean_rules_1_1) {
                boolean_rules_1 = boolean_rules_1_1;
            }
        ],
        execute: function () {
            RulesFactory = /** @class */ (function () {
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
            exports_1("RulesFactory", RulesFactory);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVlFLHNCQUNFLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLFlBQTBCO29CQVI1QixTQUFJLEdBQUcsU0FBUyxDQUFDO29CQVVmLElBQUksQ0FBQyxLQUFLLEdBQUc7d0JBQ1gsV0FBVyxhQUFBO3dCQUNYLFdBQVcsYUFBQTt3QkFDWCxXQUFXLGFBQUE7d0JBQ1gsWUFBWSxjQUFBO3FCQUNiLENBQUM7Z0JBQ0osQ0FBQztnQkFFRCwrQkFBUSxHQUFSO29CQUFBLGlCQUlDO29CQUhDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDcEIsT0FBTyxDQUFDLFVBQUMsSUFBSTt3QkFDWixPQUFBLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFFO29CQUEzQixDQUEyQixDQUFDLENBQUM7Z0JBQ25DLENBQUM7Z0JBRUQsMEJBQUcsR0FBSDtvQkFDRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7Z0JBQzdDLENBQUM7Z0JBRUQsMkJBQUksR0FBSixVQUFLLElBQVM7b0JBQ1osSUFBTSxJQUFJLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBSSxJQUFJLENBQUMsSUFBSSxVQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2dCQWpDVSxZQUFZO29CQUR4QiwwQkFBTSxDQUFDLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDRCQUFZLENBQUM7cURBTzNDLDBCQUFXO3dCQUNYLDBCQUFXO3dCQUNYLDBCQUFXO3dCQUNWLDRCQUFZO21CQVRqQixZQUFZLENBa0N4QjtnQkFBRCxtQkFBQzthQWxDRCxBQWtDQzs7UUFDRCxDQUFDIiwiZmlsZSI6InJ1bGVzL3J1bGVzLWZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFN0cmluZ1J1bGVzIH0gZnJvbSBcIi4vc3RyaW5nLXJ1bGVzXCI7XG5pbXBvcnQgeyBOdW1iZXJSdWxlcyB9IGZyb20gXCIuL251bWJlci1ydWxlc1wiO1xuaW1wb3J0IHsgQ29tbW9uUnVsZXMgfSBmcm9tIFwiLi9jb21tb24tcnVsZXNcIjtcbmltcG9ydCB7IEJvb2xlYW5SdWxlcyB9IGZyb20gXCIuL2Jvb2xlYW4tcnVsZXNcIjtcblxuQGluamVjdChDb21tb25SdWxlcywgU3RyaW5nUnVsZXMsIE51bWJlclJ1bGVzLCBCb29sZWFuUnVsZXMpXG5leHBvcnQgY2xhc3MgUnVsZXNGYWN0b3J5IHtcbiAgdHlwZSA9IFwiZmFjdG9yeVwiO1xuXG4gIHJ1bGVzOiBhbnk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29tbW9uUnVsZXM6IENvbW1vblJ1bGVzLFxuICAgIHN0cmluZ1J1bGVzOiBTdHJpbmdSdWxlcyxcbiAgICBudW1iZXJSdWxlczogTnVtYmVyUnVsZXMsXG4gICAgYm9vbGVhblJ1bGVzOiBCb29sZWFuUnVsZXNcbiAgKSB7XG4gICAgdGhpcy5ydWxlcyA9IHtcbiAgICAgIGNvbW1vblJ1bGVzLFxuICAgICAgc3RyaW5nUnVsZXMsXG4gICAgICBudW1iZXJSdWxlcyxcbiAgICAgIGJvb2xlYW5SdWxlc1xuICAgIH07XG4gIH1cblxuICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKVxuICAgICAgLmZvckVhY2goKGtpbmQpID0+XG4gICAgICAgIHRoaXMucnVsZXNba2luZF0ucmVnaXN0ZXIoKSk7XG4gIH1cblxuICBhZGQoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cblxuICBiaW5kKGN0cmw6IGFueSkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5ydWxlcy5jb21tb25SdWxlcyBhcyBDb21tb25SdWxlcykuYmluZChjdHJsKTtcbiAgICB0aGlzLnJ1bGVzW2Ake2N0cmwua2luZH1SdWxlc2BdLmJpbmQoY3RybCwgcnVsZSk7XG4gICAgcnVsZS5vbihjdHJsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
