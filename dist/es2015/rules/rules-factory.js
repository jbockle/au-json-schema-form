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
import { BooleanRules } from "./boolean-rules";
let RulesFactory = class RulesFactory {
    constructor(commonRules, stringRules, numberRules, booleanRules) {
        this.type = "factory";
        this.rules = {
            commonRules,
            stringRules,
            numberRules,
            booleanRules
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
    inject(CommonRules, StringRules, NumberRules, BooleanRules),
    __metadata("design:paramtypes", [CommonRules,
        StringRules,
        NumberRules,
        BooleanRules])
], RulesFactory);
export { RulesFactory };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL3J1bGVzLWZhY3RvcnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUcvQyxJQUFhLFlBQVksR0FBekI7SUFLRSxZQUNFLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLFdBQXdCLEVBQ3hCLFlBQTBCO1FBUjVCLFNBQUksR0FBRyxTQUFTLENBQUM7UUFVZixJQUFJLENBQUMsS0FBSyxHQUFHO1lBQ1gsV0FBVztZQUNYLFdBQVc7WUFDWCxXQUFXO1lBQ1gsWUFBWTtTQUNiLENBQUM7SUFDSixDQUFDO0lBRUQsUUFBUTtRQUNOLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNwQixPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELEdBQUc7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELElBQUksQ0FBQyxJQUFTO1FBQ1osTUFBTSxJQUFJLEdBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hCLENBQUM7Q0FDRixDQUFBO0FBbENZLFlBQVk7SUFEeEIsTUFBTSxDQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksQ0FBQztxQ0FPM0MsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1YsWUFBWTtHQVRqQixZQUFZLENBa0N4QjtTQWxDWSxZQUFZIiwiZmlsZSI6InJ1bGVzL3J1bGVzLWZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgU3RyaW5nUnVsZXMgfSBmcm9tIFwiLi9zdHJpbmctcnVsZXNcIjtcclxuaW1wb3J0IHsgTnVtYmVyUnVsZXMgfSBmcm9tIFwiLi9udW1iZXItcnVsZXNcIjtcclxuaW1wb3J0IHsgQ29tbW9uUnVsZXMgfSBmcm9tIFwiLi9jb21tb24tcnVsZXNcIjtcclxuaW1wb3J0IHsgQm9vbGVhblJ1bGVzIH0gZnJvbSBcIi4vYm9vbGVhbi1ydWxlc1wiO1xyXG5cclxuQGluamVjdChDb21tb25SdWxlcywgU3RyaW5nUnVsZXMsIE51bWJlclJ1bGVzLCBCb29sZWFuUnVsZXMpXHJcbmV4cG9ydCBjbGFzcyBSdWxlc0ZhY3Rvcnkge1xyXG4gIHR5cGUgPSBcImZhY3RvcnlcIjtcclxuXHJcbiAgcnVsZXM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjb21tb25SdWxlczogQ29tbW9uUnVsZXMsXHJcbiAgICBzdHJpbmdSdWxlczogU3RyaW5nUnVsZXMsXHJcbiAgICBudW1iZXJSdWxlczogTnVtYmVyUnVsZXMsXHJcbiAgICBib29sZWFuUnVsZXM6IEJvb2xlYW5SdWxlc1xyXG4gICkge1xyXG4gICAgdGhpcy5ydWxlcyA9IHtcclxuICAgICAgY29tbW9uUnVsZXMsXHJcbiAgICAgIHN0cmluZ1J1bGVzLFxyXG4gICAgICBudW1iZXJSdWxlcyxcclxuICAgICAgYm9vbGVhblJ1bGVzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXIoKTogdm9pZCB7XHJcbiAgICBPYmplY3Qua2V5cyh0aGlzLnJ1bGVzKVxyXG4gICAgICAuZm9yRWFjaCgoa2luZCkgPT5cclxuICAgICAgICB0aGlzLnJ1bGVzW2tpbmRdLnJlZ2lzdGVyKCkpO1xyXG4gIH1cclxuXHJcbiAgYWRkKCk6IHZvaWQge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgfVxyXG5cclxuICBiaW5kKGN0cmw6IGFueSkge1xyXG4gICAgY29uc3QgcnVsZSA9ICh0aGlzLnJ1bGVzLmNvbW1vblJ1bGVzIGFzIENvbW1vblJ1bGVzKS5iaW5kKGN0cmwpO1xyXG4gICAgdGhpcy5ydWxlc1tgJHtjdHJsLmtpbmR9UnVsZXNgXS5iaW5kKGN0cmwsIHJ1bGUpO1xyXG4gICAgcnVsZS5vbihjdHJsKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
