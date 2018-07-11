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
var guid_1 = require("../../resources/guid");
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var rules_factory_1 = require("../../rules/rules-factory");
var logger_1 = require("../../resources/logger");
var SfBoolean = /** @class */ (function () {
    function SfBoolean(configuration, rules, logger) {
        this.configuration = configuration;
        this.rules = rules;
        this.logger = logger;
        this.id = guid_1.Guid.newGuid();
        this.kind = "boolean";
    }
    SfBoolean.prototype.bind = function () {
        this.logger.info("sf-boolean", this.form, this.model, arguments);
        this.schema = this.form.$schema;
        this.rules.bind(this);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfBoolean.prototype, "form", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], SfBoolean.prototype, "model", void 0);
    SfBoolean = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger),
        aurelia_framework_1.customElement("sf-boolean"),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
            rules_factory_1.RulesFactory,
            logger_1.SchemaFormLogger])
    ], SfBoolean);
    return SfBoolean;
}());
exports.SfBoolean = SfBoolean;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQW9FO0FBQ3BFLDZDQUE0QztBQUM1QyxzRkFBbUY7QUFDbkYsMkRBQXlEO0FBRXpELGlEQUEwRDtBQUsxRDtJQVVFLG1CQUNTLGFBQXNDLEVBQ3RDLEtBQW1CLEVBQ2xCLE1BQXdCO1FBRnpCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFjO1FBQ2xCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBUGxDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLFNBQVMsQ0FBQztJQU1iLENBQUM7SUFFTCx3QkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBdUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBbkJTO1FBQVQsNEJBQVE7OzJDQUFxQjtJQUNwQjtRQUFULDRCQUFROzs0Q0FBZ0I7SUFGZCxTQUFTO1FBRnJCLDBCQUFNLENBQUMsbURBQXVCLEVBQUUsNEJBQVksRUFBRSx5QkFBZ0IsQ0FBQztRQUMvRCxpQ0FBYSxDQUFDLFlBQVksQ0FBQzt5Q0FZRixtREFBdUI7WUFDL0IsNEJBQVk7WUFDVix5QkFBZ0I7T0FidkIsU0FBUyxDQXFCckI7SUFBRCxnQkFBQztDQXJCRCxBQXFCQyxJQUFBO0FBckJZLDhCQUFTIiwiZmlsZSI6ImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcblxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBSdWxlc0ZhY3RvcnksIFNjaGVtYUZvcm1Mb2dnZXIpXHJcbkBjdXN0b21FbGVtZW50KFwic2YtYm9vbGVhblwiKVxyXG5leHBvcnQgY2xhc3MgU2ZCb29sZWFuIHtcclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuICBAYmluZGFibGUgbW9kZWw6IGJvb2xlYW47XHJcblxyXG4gIHNjaGVtYTogSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbjtcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICBraW5kID0gXCJib29sZWFuXCI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnksXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxyXG4gICkgeyB9XHJcblxyXG4gIGJpbmQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYm9vbGVhblwiLCB0aGlzLmZvcm0sIHRoaXMubW9kZWwsIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLnNjaGVtYSA9IHRoaXMuZm9ybS4kc2NoZW1hIGFzIElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb247XHJcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
