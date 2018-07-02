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
var array_rules_1 = require("./array-rules");
var RulesFactory = /** @class */ (function () {
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
exports.RulesFactory = RulesFactory;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBMkM7QUFDM0MsK0NBQTZDO0FBQzdDLCtDQUE2QztBQUM3QywrQ0FBNkM7QUFDN0MsaURBQStDO0FBQy9DLDZDQUEyQztBQUczQztJQUtFLHNCQUNFLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLFlBQTBCLEVBQzFCLFVBQXNCO1FBVHhCLFNBQUksR0FBRyxTQUFTLENBQUM7UUFXZixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsV0FBVyxhQUFBO1lBQ1gsV0FBVyxhQUFBO1lBQ1gsV0FBVyxhQUFBO1lBQ1gsWUFBWSxjQUFBO1lBQ1osVUFBVSxZQUFBO1NBQ1gsQ0FBQztJQUNKLENBQUM7SUFFRCwrQkFBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDcEIsT0FBTyxDQUFDLFVBQUMsSUFBSTtZQUNaLE9BQUEsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUU7UUFBM0IsQ0FBMkIsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCwwQkFBRyxHQUFIO1FBQ0UsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssSUFBUztRQUNaLElBQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBSSxJQUFJLENBQUMsSUFBSSxVQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQW5DVSxZQUFZO1FBRHhCLDBCQUFNLENBQUMsMEJBQVcsRUFBRSwwQkFBVyxFQUFFLDBCQUFXLEVBQUUsNEJBQVksRUFBRSx3QkFBVSxDQUFDO3lDQU92RCwwQkFBVztZQUNYLDBCQUFXO1lBQ1gsMEJBQVc7WUFDViw0QkFBWTtZQUNkLHdCQUFVO09BVmIsWUFBWSxDQW9DeEI7SUFBRCxtQkFBQztDQXBDRCxBQW9DQyxJQUFBO0FBcENZLG9DQUFZIiwiZmlsZSI6InJ1bGVzL3J1bGVzLWZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFN0cmluZ1J1bGVzIH0gZnJvbSBcIi4vc3RyaW5nLXJ1bGVzXCI7XG5pbXBvcnQgeyBOdW1iZXJSdWxlcyB9IGZyb20gXCIuL251bWJlci1ydWxlc1wiO1xuaW1wb3J0IHsgQ29tbW9uUnVsZXMgfSBmcm9tIFwiLi9jb21tb24tcnVsZXNcIjtcbmltcG9ydCB7IEJvb2xlYW5SdWxlcyB9IGZyb20gXCIuL2Jvb2xlYW4tcnVsZXNcIjtcbmltcG9ydCB7IEFycmF5UnVsZXMgfSBmcm9tIFwiLi9hcnJheS1ydWxlc1wiO1xuXG5AaW5qZWN0KENvbW1vblJ1bGVzLCBTdHJpbmdSdWxlcywgTnVtYmVyUnVsZXMsIEJvb2xlYW5SdWxlcywgQXJyYXlSdWxlcylcbmV4cG9ydCBjbGFzcyBSdWxlc0ZhY3Rvcnkge1xuICB0eXBlID0gXCJmYWN0b3J5XCI7XG5cbiAgcnVsZXM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb21tb25SdWxlczogQ29tbW9uUnVsZXMsXG4gICAgc3RyaW5nUnVsZXM6IFN0cmluZ1J1bGVzLFxuICAgIG51bWJlclJ1bGVzOiBOdW1iZXJSdWxlcyxcbiAgICBib29sZWFuUnVsZXM6IEJvb2xlYW5SdWxlcyxcbiAgICBhcnJheVJ1bGVzOiBBcnJheVJ1bGVzXG4gICkge1xuICAgIHRoaXMucnVsZXMgPSB7XG4gICAgICBjb21tb25SdWxlcyxcbiAgICAgIHN0cmluZ1J1bGVzLFxuICAgICAgbnVtYmVyUnVsZXMsXG4gICAgICBib29sZWFuUnVsZXMsXG4gICAgICBhcnJheVJ1bGVzXG4gICAgfTtcbiAgfVxuXG4gIHJlZ2lzdGVyKCk6IHZvaWQge1xuICAgIE9iamVjdC5rZXlzKHRoaXMucnVsZXMpXG4gICAgICAuZm9yRWFjaCgoa2luZCkgPT5cbiAgICAgICAgdGhpcy5ydWxlc1traW5kXS5yZWdpc3RlcigpKTtcbiAgfVxuXG4gIGFkZCgpOiB2b2lkIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogYW55KSB7XG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLnJ1bGVzLmNvbW1vblJ1bGVzIGFzIENvbW1vblJ1bGVzKS5iaW5kKGN0cmwpO1xuICAgIHRoaXMucnVsZXNbYCR7Y3RybC5raW5kfVJ1bGVzYF0uYmluZChjdHJsLCBydWxlKTtcbiAgICBydWxlLm9uKGN0cmwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
