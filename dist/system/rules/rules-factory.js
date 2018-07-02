System.register(["aurelia-framework", "./string-rules", "./number-rules", "./common-rules", "./boolean-rules", "./array-rules"], function (exports_1, context_1) {
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
    var aurelia_framework_1, string_rules_1, number_rules_1, common_rules_1, boolean_rules_1, array_rules_1, RulesFactory;
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
            },
            function (array_rules_1_1) {
                array_rules_1 = array_rules_1_1;
            }
        ],
        execute: function () {
            RulesFactory = /** @class */ (function () {
                function RulesFactory(commonRules, stringRules, numberRules, booleanRules, arrayRules) {
                    this.type = "factory";
                    this.rules = {
                        commonRules: commonRules,
                        stringRules: stringRules,
                        numberRules: numberRules,
                        booleanRules: booleanRules,
                        arrayRules: arrayRules
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
                    aurelia_framework_1.inject(common_rules_1.CommonRules, string_rules_1.StringRules, number_rules_1.NumberRules, boolean_rules_1.BooleanRules, array_rules_1.ArrayRules),
                    __metadata("design:paramtypes", [common_rules_1.CommonRules,
                        string_rules_1.StringRules,
                        number_rules_1.NumberRules,
                        boolean_rules_1.BooleanRules,
                        array_rules_1.ArrayRules])
                ], RulesFactory);
                return RulesFactory;
            }());
            exports_1("RulesFactory", RulesFactory);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQWFFLHNCQUNFLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLFVBQXNCO29CQVR4QixTQUFJLEdBQUcsU0FBUyxDQUFDO29CQVdmLElBQUksQ0FBQyxLQUFLLEdBQUc7d0JBQ1gsV0FBVyxhQUFBO3dCQUNYLFdBQVcsYUFBQTt3QkFDWCxXQUFXLGFBQUE7d0JBQ1gsWUFBWSxjQUFBO3dCQUNaLFVBQVUsWUFBQTtxQkFDWCxDQUFDO2dCQUNKLENBQUM7Z0JBRUQsK0JBQVEsR0FBUjtvQkFBQSxpQkFJQztvQkFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ3BCLE9BQU8sQ0FBQyxVQUFDLElBQUk7d0JBQ1osT0FBQSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRTtvQkFBM0IsQ0FBMkIsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDO2dCQUVELDBCQUFHLEdBQUg7b0JBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO2dCQUM3QyxDQUFDO2dCQUVELDJCQUFJLEdBQUosVUFBSyxJQUFTO29CQUNaLElBQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUksSUFBSSxDQUFDLElBQUksVUFBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkFuQ1UsWUFBWTtvQkFEeEIsMEJBQU0sQ0FBQywwQkFBVyxFQUFFLDBCQUFXLEVBQUUsMEJBQVcsRUFBRSw0QkFBWSxFQUFFLHdCQUFVLENBQUM7cURBT3ZELDBCQUFXO3dCQUNYLDBCQUFXO3dCQUNYLDBCQUFXO3dCQUNWLDRCQUFZO3dCQUNkLHdCQUFVO21CQVZiLFlBQVksQ0FvQ3hCO2dCQUFELG1CQUFDO2FBcENELEFBb0NDOztRQUNELENBQUMiLCJmaWxlIjoicnVsZXMvcnVsZXMtZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU3RyaW5nUnVsZXMgfSBmcm9tIFwiLi9zdHJpbmctcnVsZXNcIjtcbmltcG9ydCB7IE51bWJlclJ1bGVzIH0gZnJvbSBcIi4vbnVtYmVyLXJ1bGVzXCI7XG5pbXBvcnQgeyBDb21tb25SdWxlcyB9IGZyb20gXCIuL2NvbW1vbi1ydWxlc1wiO1xuaW1wb3J0IHsgQm9vbGVhblJ1bGVzIH0gZnJvbSBcIi4vYm9vbGVhbi1ydWxlc1wiO1xuaW1wb3J0IHsgQXJyYXlSdWxlcyB9IGZyb20gXCIuL2FycmF5LXJ1bGVzXCI7XG5cbkBpbmplY3QoQ29tbW9uUnVsZXMsIFN0cmluZ1J1bGVzLCBOdW1iZXJSdWxlcywgQm9vbGVhblJ1bGVzLCBBcnJheVJ1bGVzKVxuZXhwb3J0IGNsYXNzIFJ1bGVzRmFjdG9yeSB7XG4gIHR5cGUgPSBcImZhY3RvcnlcIjtcblxuICBydWxlczogYW55O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIGNvbW1vblJ1bGVzOiBDb21tb25SdWxlcyxcbiAgICBzdHJpbmdSdWxlczogU3RyaW5nUnVsZXMsXG4gICAgbnVtYmVyUnVsZXM6IE51bWJlclJ1bGVzLFxuICAgIGJvb2xlYW5SdWxlczogQm9vbGVhblJ1bGVzLFxuICAgIGFycmF5UnVsZXM6IEFycmF5UnVsZXNcbiAgKSB7XG4gICAgdGhpcy5ydWxlcyA9IHtcbiAgICAgIGNvbW1vblJ1bGVzLFxuICAgICAgc3RyaW5nUnVsZXMsXG4gICAgICBudW1iZXJSdWxlcyxcbiAgICAgIGJvb2xlYW5SdWxlcyxcbiAgICAgIGFycmF5UnVsZXNcbiAgICB9O1xuICB9XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ydWxlcylcbiAgICAgIC5mb3JFYWNoKChraW5kKSA9PlxuICAgICAgICB0aGlzLnJ1bGVzW2tpbmRdLnJlZ2lzdGVyKCkpO1xuICB9XG5cbiAgYWRkKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgYmluZChjdHJsOiBhbnkpIHtcbiAgICBjb25zdCBydWxlID0gKHRoaXMucnVsZXMuY29tbW9uUnVsZXMgYXMgQ29tbW9uUnVsZXMpLmJpbmQoY3RybCk7XG4gICAgdGhpcy5ydWxlc1tgJHtjdHJsLmtpbmR9UnVsZXNgXS5iaW5kKGN0cmwsIHJ1bGUpO1xuICAgIHJ1bGUub24oY3RybCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
