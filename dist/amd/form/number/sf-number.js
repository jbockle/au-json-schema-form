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
    var SfNumber = /** @class */ (function () {
        function SfNumber(configuration, rules) {
            this.configuration = configuration;
            this.rules = rules;
            this.id = guid_1.Guid.newGuid();
            this.kind = "number";
        }
        SfNumber.prototype.bind = function () {
            this.rules.bind(this);
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SfNumber.prototype, "schema", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Number)
        ], SfNumber.prototype, "model", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], SfNumber.prototype, "required", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], SfNumber.prototype, "title", void 0);
        SfNumber = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory),
            aurelia_framework_1.customElement("sf-number"),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                rules_factory_1.RulesFactory])
        ], SfNumber);
        return SfNumber;
    }());
    exports.SfNumber = SfNumber;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFRQTtRQVVFLGtCQUNTLGFBQXNDLEVBQ3RDLEtBQW1CO1lBRG5CLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtZQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFjO1lBTjVCLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUtaLENBQUM7UUFFTCx1QkFBSSxHQUFKO1lBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQWhCUztZQUFULDRCQUFROztnREFBYTtRQUNaO1lBQVQsNEJBQVE7OytDQUFlO1FBQ2Q7WUFBVCw0QkFBUTs7a0RBQWtCO1FBQ2pCO1lBQVQsNEJBQVE7OytDQUFlO1FBSmIsUUFBUTtZQUZwQiwwQkFBTSxDQUFDLG1EQUF1QixFQUFFLDRCQUFZLENBQUM7WUFDN0MsaUNBQWEsQ0FBQyxXQUFXLENBQUM7NkNBWUQsbURBQXVCO2dCQUMvQiw0QkFBWTtXQVpqQixRQUFRLENBa0JwQjtRQUFELGVBQUM7S0FsQkQsQUFrQkMsSUFBQTtJQWxCWSw0QkFBUSIsImZpbGUiOiJmb3JtL251bWJlci9zZi1udW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIFJ1bGVzRmFjdG9yeSlcbkBjdXN0b21FbGVtZW50KFwic2YtbnVtYmVyXCIpXG5leHBvcnQgY2xhc3MgU2ZOdW1iZXIge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG4gIEBiaW5kYWJsZSBtb2RlbDogbnVtYmVyO1xuICBAYmluZGFibGUgcmVxdWlyZWQ6IHN0cmluZztcbiAgQGJpbmRhYmxlIHRpdGxlOiBzdHJpbmc7XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcIm51bWJlclwiO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeVxuICApIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
