var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration"], function (require, exports, aurelia_validation_1, aurelia_framework_1, guid_1, schema_form_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9BO1FBUUUsZ0JBQW1CLGFBQXNDO1lBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtZQUZ6RCxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRWlDLENBQUM7UUFFOUQscUJBQUksR0FBSjtZQUNFLElBQUksSUFBSSxHQUFHLG9DQUFlO2lCQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDO2lCQUNmLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN2QixTQUFTLENBQUMsY0FBTSxPQUFBLElBQUksRUFBSixDQUFJLENBQUMsQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO2dCQUN2QixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzFDO1lBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtnQkFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUM5QztZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN4QjtZQUNELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEIsQ0FBQztRQXhCUztZQUFULDRCQUFROzs4Q0FBYTtRQUNaO1lBQVQsNEJBQVE7OzZDQUFZO1FBQ1g7WUFBVCw0QkFBUTs7Z0RBQWtCO1FBQ2pCO1lBQVQsNEJBQVE7OzZDQUFlO1FBSmIsTUFBTTtZQUZsQiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDO1lBQy9CLGlDQUFhLENBQUMsU0FBUyxDQUFDOzZDQVNXLG1EQUF1QjtXQVI5QyxNQUFNLENBMEJsQjtRQUFELGFBQUM7S0ExQkQsQUEwQkMsSUFBQTtJQTFCWSx3QkFBTSIsImZpbGUiOiJmb3JtL3RleHQvc2YtdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcyB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbkBjdXN0b21FbGVtZW50KFwic2YtdGV4dFwiKVxuZXhwb3J0IGNsYXNzIFNmVGV4dCB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnk7XG4gIEBiaW5kYWJsZSByZXF1aXJlZDogc3RyaW5nO1xuICBAYmluZGFibGUgdGl0bGU6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICBiaW5kKCkge1xuICAgIGxldCBydWxlID0gVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuZW5zdXJlKFwibW9kZWxcIilcbiAgICAgIC5kaXNwbGF5TmFtZSh0aGlzLnRpdGxlKVxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcbiAgICBpZiAodGhpcy5zY2hlbWEucGF0dGVybikge1xuICAgICAgcnVsZSA9IHJ1bGUubWF0Y2hlcyh0aGlzLnNjaGVtYS5wYXR0ZXJuKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCkge1xuICAgICAgcnVsZSA9IHJ1bGUubWluTGVuZ3RoKHRoaXMuc2NoZW1hLm1pbkxlbmd0aCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xuICAgIH1cbiAgICBydWxlLm9uKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
