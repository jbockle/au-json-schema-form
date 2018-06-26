var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfText = /** @class */ (function () {
        function SfText(configuration, rules) {
            this.configuration = configuration;
            this.rules = rules;
            this.id = guid_1.Guid.newGuid();
            this.kind = "string";
        }
        SfText.prototype.bind = function () {
            this.rules.bind(this);
            if (["date-time", "date", "time"].indexOf(this.schema.format) > -1) {
                throw new Error("not implemented, add datetime/date/time picker here");
            }
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
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory),
            aurelia_framework_1.customElement("sf-text"),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                rules_factory_1.RulesFactory])
        ], SfText);
        return SfText;
    }());
    exports.SfText = SfText;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU9BO1FBVUUsZ0JBQ1MsYUFBc0MsRUFDdEMsS0FBbUI7WUFEbkIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1lBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7WUFONUIsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU1QixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBS1osQ0FBQztRQUVMLHFCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUV0QixJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbEUsTUFBTSxJQUFJLEtBQUssQ0FBQyxxREFBcUQsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0gsQ0FBQztRQXBCUztZQUFULDRCQUFROzs4Q0FBYTtRQUNaO1lBQVQsNEJBQVE7OzZDQUFZO1FBQ1g7WUFBVCw0QkFBUTs7Z0RBQWtCO1FBQ2pCO1lBQVQsNEJBQVE7OzZDQUFlO1FBSmIsTUFBTTtZQUZsQiwwQkFBTSxDQUFDLG1EQUF1QixFQUFFLDRCQUFZLENBQUM7WUFDN0MsaUNBQWEsQ0FBQyxTQUFTLENBQUM7NkNBWUMsbURBQXVCO2dCQUMvQiw0QkFBWTtXQVpqQixNQUFNLENBc0JsQjtRQUFELGFBQUM7S0F0QkQsQUFzQkMsSUFBQTtJQXRCWSx3QkFBTSIsImZpbGUiOiJmb3JtL3RleHQvc2YtdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIFJ1bGVzRmFjdG9yeSlcbkBjdXN0b21FbGVtZW50KFwic2YtdGV4dFwiKVxuZXhwb3J0IGNsYXNzIFNmVGV4dCB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBhbnk7XG4gIEBiaW5kYWJsZSByZXF1aXJlZDogc3RyaW5nO1xuICBAYmluZGFibGUgdGl0bGU6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwic3RyaW5nXCI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5XG4gICkgeyB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XG5cbiAgICBpZiAoW1wiZGF0ZS10aW1lXCIsIFwiZGF0ZVwiLCBcInRpbWVcIl0uaW5kZXhPZih0aGlzLnNjaGVtYS5mb3JtYXQpID4gLTEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZCwgYWRkIGRhdGV0aW1lL2RhdGUvdGltZSBwaWNrZXIgaGVyZVwiKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
