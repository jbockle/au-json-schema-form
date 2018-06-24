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
var aurelia_validation_1 = require("aurelia-validation");
var aurelia_framework_1 = require("aurelia-framework");
var guid_1 = require("../../resources/guid");
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var SfText = /** @class */ (function () {
    function SfText(configuration) {
        this.configuration = configuration;
        this.id = guid_1.Guid.newGuid();
    }
    SfText.prototype.bind = function () {
        var rule = aurelia_validation_1.ValidationRules
            .ensure("model")
            .displayName(this.title)
            .satisfies(function () { return true; });
        if (this.schema.pattern) {
            rule = rule.matches(this.schema.pattern);
        }
        if (this.schema.minLength) {
            rule = rule.minLength(this.schema.minLength);
        }
        if (this.required) {
            rule = rule.required();
        }
        rule.on(this);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfText.prototype, "schema", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfText.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfText.prototype, "required", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfText.prototype, "title", void 0);
    SfText = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
        aurelia_framework_1.customElement("sf-text"),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
    ], SfText);
    return SfText;
}());
exports.SfText = SfText;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseURBQXFEO0FBQ3JELHVEQUFvRTtBQUNwRSw2Q0FBNEM7QUFDNUMsc0ZBQW1GO0FBSW5GO0lBUUUsZ0JBQW1CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUZ6RCxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRWlDLENBQUM7SUFFOUQscUJBQUksR0FBSjtRQUNFLElBQUksSUFBSSxHQUFHLG9DQUFlO2FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUN2QixTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztRQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUM7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDOUM7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEIsQ0FBQztJQXhCUztRQUFULDRCQUFROzswQ0FBYTtJQUNaO1FBQVQsNEJBQVE7O3lDQUFZO0lBQ1g7UUFBVCw0QkFBUTs7NENBQWtCO0lBQ2pCO1FBQVQsNEJBQVE7O3lDQUFlO0lBSmIsTUFBTTtRQUZsQiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDO1FBQy9CLGlDQUFhLENBQUMsU0FBUyxDQUFDO3lDQVNXLG1EQUF1QjtPQVI5QyxNQUFNLENBMEJsQjtJQUFELGFBQUM7Q0ExQkQsQUEwQkMsSUFBQTtBQTFCWSx3QkFBTSIsImZpbGUiOiJmb3JtL3RleHQvc2YtdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcyB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbkBjdXN0b21FbGVtZW50KFwic2YtdGV4dFwiKVxuZXhwb3J0IGNsYXNzIFNmVGV4dCB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnk7XG4gIEBiaW5kYWJsZSByZXF1aXJlZDogc3RyaW5nO1xuICBAYmluZGFibGUgdGl0bGU6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICBiaW5kKCkge1xuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuZW5zdXJlKFwibW9kZWxcIilcbiAgICAgIC5kaXNwbGF5TmFtZSh0aGlzLnRpdGxlKVxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcbiAgICBpZiAodGhpcy5zY2hlbWEucGF0dGVybikge1xuICAgICAgcnVsZSA9IHJ1bGUubWF0Y2hlcyh0aGlzLnNjaGVtYS5wYXR0ZXJuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkge1xuICAgICAgcnVsZSA9IHJ1bGUubWluTGVuZ3RoKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xuICAgIH1cbiAgICBydWxlLm9uKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
