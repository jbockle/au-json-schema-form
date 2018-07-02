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
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
let BooleanRules = class BooleanRules {
    constructor(configuration) {
        this.configuration = configuration;
    }
    register() {
        this.add();
    }
    add() {
        // nothing specific to booleans
    }
    bind(ctrl, rule) {
        // nothing specific to booleans
    }
};
BooleanRules = __decorate([
    inject(SchemaFormConfiguration),
    __metadata("design:paramtypes", [SchemaFormConfiguration])
], BooleanRules);
export { BooleanRules };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2Jvb2xlYW4tcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0EsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBS2hGLElBQWEsWUFBWSxHQUF6QjtJQUNFLFlBQW9CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtJQUFJLENBQUM7SUFFL0QsUUFBUTtRQUNOLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCxHQUFHO1FBQ0QsK0JBQStCO0lBQ2pDLENBQUM7SUFFRCxJQUFJLENBQUMsSUFBZSxFQUFFLElBQW1DO1FBQ3ZELCtCQUErQjtJQUNqQyxDQUFDO0NBQ0YsQ0FBQTtBQWRZLFlBQVk7SUFEeEIsTUFBTSxDQUFDLHVCQUF1QixDQUFDO3FDQUVLLHVCQUF1QjtHQUQvQyxZQUFZLENBY3hCO1NBZFksWUFBWSIsImZpbGUiOiJydWxlcy9ib29sZWFuLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2ZOdW1iZXIgfSBmcm9tIFwiLi4vZm9ybS9udW1iZXIvc2YtbnVtYmVyXCI7XG5pbXBvcnQgeyBTZkJvb2xlYW4gfSBmcm9tIFwiLi4vZm9ybS9ib29sZWFuL3NmLWJvb2xlYW5cIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbmV4cG9ydCBjbGFzcyBCb29sZWFuUnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICByZWdpc3RlcigpIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIC8vIG5vdGhpbmcgc3BlY2lmaWMgdG8gYm9vbGVhbnNcbiAgfVxuXG4gIGJpbmQoY3RybDogU2ZCb29sZWFuLCBydWxlOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55Pikge1xuICAgIC8vIG5vdGhpbmcgc3BlY2lmaWMgdG8gYm9vbGVhbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==