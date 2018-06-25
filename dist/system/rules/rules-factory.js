System.register(["aurelia-framework", "./string-rules", "./number-rules", "./common-rules"], function (exports_1, context_1) {
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
    var aurelia_framework_1, string_rules_1, number_rules_1, common_rules_1, RulesFactory;
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
            }
        ],
        execute: function () {
            RulesFactory = /** @class */ (function () {
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
            exports_1("RulesFactory", RulesFactory);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVdFLHNCQUNFLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLFdBQXdCO29CQVAxQixTQUFJLEdBQUcsU0FBUyxDQUFDO29CQUVqQixVQUFLLEdBQVEsRUFBRSxDQUFDO29CQU9kLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztvQkFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO29CQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7Z0JBQ3ZDLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFBQSxpQkFJQztvQkFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ3BCLE9BQU8sQ0FBQyxVQUFDLElBQUk7d0JBQ1osT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFBM0IsQ0FBMkIsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELDBCQUFHLEdBQUg7b0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELDJCQUFJLEdBQUosVUFBSyxJQUFTO29CQUNaLElBQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkE3QlUsWUFBWTtvQkFEeEIsMEJBQU0sQ0FBQywwQkFBVyxFQUFFLDBCQUFXLEVBQUUsMEJBQVcsQ0FBQztxREFPN0IsMEJBQVc7d0JBQ1gsMEJBQVc7d0JBQ1gsMEJBQVc7bUJBUmYsWUFBWSxDQThCeEI7Z0JBQUQsbUJBQUM7YUE5QkQsQUE4QkM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJydWxlcy9ydWxlcy1mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTdHJpbmdSdWxlcyB9IGZyb20gXCIuL3N0cmluZy1ydWxlc1wiO1xuaW1wb3J0IHsgTnVtYmVyUnVsZXMgfSBmcm9tIFwiLi9udW1iZXItcnVsZXNcIjtcbmltcG9ydCB7IENvbW1vblJ1bGVzIH0gZnJvbSBcIi4vY29tbW9uLXJ1bGVzXCI7XG5cbkBpbmplY3QoU3RyaW5nUnVsZXMsIE51bWJlclJ1bGVzLCBDb21tb25SdWxlcylcbmV4cG9ydCBjbGFzcyBSdWxlc0ZhY3Rvcnkge1xuICB0eXBlID0gXCJmYWN0b3J5XCI7XG5cbiAgcnVsZXM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0cmluZ1J1bGVzOiBTdHJpbmdSdWxlcyxcbiAgICBudW1iZXJSdWxlczogTnVtYmVyUnVsZXMsXG4gICAgY29tbW9uUnVsZXM6IENvbW1vblJ1bGVzXG4gICkge1xuICAgIHRoaXMucnVsZXMuY29tbW9uUnVsZXMgPSBjb21tb25SdWxlcztcbiAgICB0aGlzLnJ1bGVzLnN0cmluZ1J1bGVzID0gc3RyaW5nUnVsZXM7XG4gICAgdGhpcy5ydWxlcy5udW1iZXJSdWxlcyA9IG51bWJlclJ1bGVzO1xuICB9XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ydWxlcylcbiAgICAgIC5mb3JFYWNoKChraW5kKSA9PlxuICAgICAgICB0aGlzLnJ1bGVzW2tpbmRdLnJlZ2lzdGVyKCkpO1xuICB9XG5cbiAgYWRkKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgYmluZChjdHJsOiBhbnkpIHtcbiAgICBjb25zdCBydWxlID0gKHRoaXMucnVsZXMuY29tbW9uUnVsZXMgYXMgQ29tbW9uUnVsZXMpLmJpbmQoY3RybCk7XG4gICAgdGhpcy5ydWxlc1tgJHtjdHJsLmtpbmR9UnVsZXNgXS5iaW5kKGN0cmwsIHJ1bGUpO1xuICAgIHJ1bGUub24oY3RybCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
