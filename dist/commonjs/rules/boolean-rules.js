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
var schema_form_configuration_1 = require("../services/schema-form-configuration");
var BooleanRules = /** @class */ (function () {
    function BooleanRules(configuration) {
        this.configuration = configuration;
    }
    BooleanRules.prototype.register = function () {
        this.add();
    };
    BooleanRules.prototype.add = function () {
        // nothing specific to booleans
    };
    BooleanRules.prototype.bind = function (ctrl, rule) {
        // nothing specific to booleans
    };
    BooleanRules = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
    ], BooleanRules);
    return BooleanRules;
}());
exports.BooleanRules = BooleanRules;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2Jvb2xlYW4tcnVsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDQSx1REFBMkM7QUFDM0MsbUZBQWdGO0FBS2hGO0lBQ0Usc0JBQW9CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtJQUFJLENBQUM7SUFFL0QsK0JBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCwwQkFBRyxHQUFIO1FBQ0UsK0JBQStCO0lBQ2pDLENBQUM7SUFFRCwyQkFBSSxHQUFKLFVBQUssSUFBZSxFQUFFLElBQW1DO1FBQ3ZELCtCQUErQjtJQUNqQyxDQUFDO0lBYlUsWUFBWTtRQUR4QiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDO3lDQUVLLG1EQUF1QjtPQUQvQyxZQUFZLENBY3hCO0lBQUQsbUJBQUM7Q0FkRCxBQWNDLElBQUE7QUFkWSxvQ0FBWSIsImZpbGUiOiJydWxlcy9ib29sZWFuLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2ZOdW1iZXIgfSBmcm9tIFwiLi4vZm9ybS9udW1iZXIvc2YtbnVtYmVyXCI7XG5pbXBvcnQgeyBTZkJvb2xlYW4gfSBmcm9tIFwiLi4vZm9ybS9ib29sZWFuL3NmLWJvb2xlYW5cIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbmV4cG9ydCBjbGFzcyBCb29sZWFuUnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICByZWdpc3RlcigpIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIC8vIG5vdGhpbmcgc3BlY2lmaWMgdG8gYm9vbGVhbnNcbiAgfVxuXG4gIGJpbmQoY3RybDogU2ZCb29sZWFuLCBydWxlOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55Pikge1xuICAgIC8vIG5vdGhpbmcgc3BlY2lmaWMgdG8gYm9vbGVhbnNcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
