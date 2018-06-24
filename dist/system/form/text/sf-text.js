System.register(["aurelia-validation", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration"], function (exports_1, context_1) {
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
    var aurelia_validation_1, aurelia_framework_1, guid_1, schema_form_configuration_1, SfText;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            }
        ],
        execute: function () {
            SfText = /** @class */ (function () {
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
            exports_1("SfText", SfText);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi10ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFlRSxnQkFBbUIsYUFBc0M7b0JBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtvQkFGekQsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFFaUMsQ0FBQztnQkFFOUQscUJBQUksR0FBSjtvQkFDRSxJQUFJLElBQUksR0FBRyxvQ0FBZTt5QkFDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQzt5QkFDZixXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzt5QkFDdkIsU0FBUyxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLENBQUM7b0JBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzFDO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7d0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzlDO29CQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDeEI7b0JBQ0QsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDaEIsQ0FBQztnQkF4QlM7b0JBQVQsNEJBQVE7O3NEQUFhO2dCQUNaO29CQUFULDRCQUFROztxREFBWTtnQkFDWDtvQkFBVCw0QkFBUTs7d0RBQWtCO2dCQUNqQjtvQkFBVCw0QkFBUTs7cURBQWU7Z0JBSmIsTUFBTTtvQkFGbEIsMEJBQU0sQ0FBQyxtREFBdUIsQ0FBQztvQkFDL0IsaUNBQWEsQ0FBQyxTQUFTLENBQUM7cURBU1csbURBQXVCO21CQVI5QyxNQUFNLENBMEJsQjtnQkFBRCxhQUFDO2FBMUJELEFBMEJDOztRQUNELENBQUMiLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXRleHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5AY3VzdG9tRWxlbWVudChcInNmLXRleHRcIilcbmV4cG9ydCBjbGFzcyBTZlRleHQge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG4gIEBiaW5kYWJsZSBtb2RlbDogYW55O1xuICBAYmluZGFibGUgcmVxdWlyZWQ6IHN0cmluZztcbiAgQGJpbmRhYmxlIHRpdGxlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgYmluZCgpIHtcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmVuc3VyZShcIm1vZGVsXCIpXG4gICAgICAuZGlzcGxheU5hbWUodGhpcy50aXRsZSlcbiAgICAgIC5zYXRpc2ZpZXMoKCkgPT4gdHJ1ZSk7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnBhdHRlcm4pIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1hdGNoZXModGhpcy5zY2hlbWEucGF0dGVybik7XG4gICAgfVxuICAgIGlmICh0aGlzLnNjaGVtYS5taW5MZW5ndGgpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1pbkxlbmd0aCh0aGlzLnNjaGVtYS5taW5MZW5ndGgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yZXF1aXJlZCkge1xuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcbiAgICB9XG4gICAgcnVsZS5vbih0aGlzKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
