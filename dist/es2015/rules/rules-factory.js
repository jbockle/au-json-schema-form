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
    constructor(commonRules, stringRules, numberRules) {
        this.type = "factory";
        this.rules = {
            commonRules,
            stringRules,
            numberRules,
        };
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
    inject(CommonRules, StringRules, NumberRules),
    __metadata("design:paramtypes", [CommonRules,
        StringRules,
        NumberRules])
], RulesFactory);
export { RulesFactory };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzdDLElBQWEsWUFBWSxHQUF6QjtJQUtFLFlBQ0UsV0FBd0IsRUFDeEIsV0FBd0IsRUFDeEIsV0FBd0I7UUFQMUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztRQVNmLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxXQUFXO1lBQ1gsV0FBVztZQUNYLFdBQVc7U0FDWixDQUFDO0lBQ0osQ0FBQztJQUVELFFBQVE7UUFDTixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7YUFDcEIsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxHQUFHO1FBQ0QsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBUztRQUNaLE1BQU0sSUFBSSxHQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBMkIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTtBQWhDWSxZQUFZO0lBRHhCLE1BQU0sQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFdBQVcsQ0FBQztxQ0FPN0IsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO0dBUmYsWUFBWSxDQWdDeEI7U0FoQ1ksWUFBWSIsImZpbGUiOiJydWxlcy9ydWxlcy1mYWN0b3J5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTdHJpbmdSdWxlcyB9IGZyb20gXCIuL3N0cmluZy1ydWxlc1wiO1xuaW1wb3J0IHsgTnVtYmVyUnVsZXMgfSBmcm9tIFwiLi9udW1iZXItcnVsZXNcIjtcbmltcG9ydCB7IENvbW1vblJ1bGVzIH0gZnJvbSBcIi4vY29tbW9uLXJ1bGVzXCI7XG5cbkBpbmplY3QoQ29tbW9uUnVsZXMsIFN0cmluZ1J1bGVzLCBOdW1iZXJSdWxlcylcbmV4cG9ydCBjbGFzcyBSdWxlc0ZhY3Rvcnkge1xuICB0eXBlID0gXCJmYWN0b3J5XCI7XG5cbiAgcnVsZXM6IGFueTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb21tb25SdWxlczogQ29tbW9uUnVsZXMsXG4gICAgc3RyaW5nUnVsZXM6IFN0cmluZ1J1bGVzLFxuICAgIG51bWJlclJ1bGVzOiBOdW1iZXJSdWxlc1xuICApIHtcbiAgICB0aGlzLnJ1bGVzID0ge1xuICAgICAgY29tbW9uUnVsZXMsXG4gICAgICBzdHJpbmdSdWxlcyxcbiAgICAgIG51bWJlclJ1bGVzLFxuICAgIH07XG4gIH1cblxuICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKVxuICAgICAgLmZvckVhY2goKGtpbmQpID0+XG4gICAgICAgIHRoaXMucnVsZXNba2luZF0ucmVnaXN0ZXIoKSk7XG4gIH1cblxuICBhZGQoKTogdm9pZCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XG4gIH1cblxuICBiaW5kKGN0cmw6IGFueSkge1xuICAgIGNvbnN0IHJ1bGUgPSAodGhpcy5ydWxlcy5jb21tb25SdWxlcyBhcyBDb21tb25SdWxlcykuYmluZChjdHJsKTtcbiAgICB0aGlzLnJ1bGVzW2Ake2N0cmwua2luZH1SdWxlc2BdLmJpbmQoY3RybCwgcnVsZSk7XG4gICAgcnVsZS5vbihjdHJsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
