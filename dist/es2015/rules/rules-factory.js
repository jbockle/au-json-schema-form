var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { inject } from "aurelia-framework";
import { StringRules } from "./string-rules";
import { NumberRules } from "./number-rules";
import { CommonRules } from "./common-rules";
let RulesFactory = class RulesFactory {
    constructor(stringRules, numberRules, commonRules) {
        this.type = "factory";
        this.rules = {};
        this.rules.commonRules = commonRules;
        this.rules.stringRules = stringRules;
        this.rules.numberRules = numberRules;
    }
    register() {
        Object.keys(this.rules)
            .forEach((kind) => this.rules[kind].register());
    }
    add() {
        throw new Error("Method not implemented.");
    }
    bind(ctrl) {
        const rule = this.rules.commonRules.bind(ctrl);
        this.rules[`${ctrl.kind}Rules`].bind(ctrl, rule);
        rule.on(ctrl);
    }
};
RulesFactory = __decorate([
    inject(StringRules, NumberRules, CommonRules),
    __metadata("design:paramtypes", [StringRules,
        NumberRules,
        CommonRules])
], RulesFactory);
export { RulesFactory };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLElBQWEsWUFBWSxHQUF6QjtJQUtFLFlBQ0UsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsV0FBd0I7UUFQMUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQUVqQixVQUFLLEdBQVEsRUFBRSxDQUFDO1FBT2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsV0FBVyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7SUFDdkMsQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDcEIsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxHQUFHO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBUztRQUNaLE1BQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTtBQTlCWSxZQUFZO0lBRHhCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztxQ0FPN0IsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO0dBUmYsWUFBWSxDQThCeEI7U0E5QlksWUFBWSIsImZpbGUiOiJydWxlcy9ydWxlcy1mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTdHJpbmdSdWxlcyB9IGZyb20gXCIuL3N0cmluZy1ydWxlc1wiO1xuaW1wb3J0IHsgTnVtYmVyUnVsZXMgfSBmcm9tIFwiLi9udW1iZXItcnVsZXNcIjtcbmltcG9ydCB7IENvbW1vblJ1bGVzIH0gZnJvbSBcIi4vY29tbW9uLXJ1bGVzXCI7XG5cbkBpbmplY3QoU3RyaW5nUnVsZXMsIE51bWJlclJ1bGVzLCBDb21tb25SdWxlcylcbmV4cG9ydCBjbGFzcyBSdWxlc0ZhY3Rvcnkge1xuICB0eXBlID0gXCJmYWN0b3J5XCI7XG5cbiAgcnVsZXM6IGFueSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHN0cmluZ1J1bGVzOiBTdHJpbmdSdWxlcyxcbiAgICBudW1iZXJSdWxlczogTnVtYmVyUnVsZXMsXG4gICAgY29tbW9uUnVsZXM6IENvbW1vblJ1bGVzXG4gICkge1xuICAgIHRoaXMucnVsZXMuY29tbW9uUnVsZXMgPSBjb21tb25SdWxlcztcbiAgICB0aGlzLnJ1bGVzLnN0cmluZ1J1bGVzID0gc3RyaW5nUnVsZXM7XG4gICAgdGhpcy5ydWxlcy5udW1iZXJSdWxlcyA9IG51bWJlclJ1bGVzO1xuICB9XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgT2JqZWN0LmtleXModGhpcy5ydWxlcylcbiAgICAgIC5mb3JFYWNoKChraW5kKSA9PlxuICAgICAgICB0aGlzLnJ1bGVzW2tpbmRdLnJlZ2lzdGVyKCkpO1xuICB9XG5cbiAgYWRkKCk6IHZvaWQge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xuICB9XG5cbiAgYmluZChjdHJsOiBhbnkpIHtcbiAgICBjb25zdCBydWxlID0gKHRoaXMucnVsZXMuY29tbW9uUnVsZXMgYXMgQ29tbW9uUnVsZXMpLmJpbmQoY3RybCk7XG4gICAgdGhpcy5ydWxlc1tgJHtjdHJsLmtpbmR9UnVsZXNgXS5iaW5kKGN0cmwsIHJ1bGUpO1xuICAgIHJ1bGUub24oY3RybCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
