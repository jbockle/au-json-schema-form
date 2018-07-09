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
var schema_form_configuration_1 = require("../services/schema-form-configuration");
var ArrayRules = /** @class */ (function () {
    function ArrayRules(configuration) {
        this.configuration = configuration;
    }
    ArrayRules.prototype.register = function () {
        this.add();
    };
    ArrayRules.prototype.add = function () {
        // uniqueItems
    };
    ArrayRules.prototype.bind = function (ctrl) {
        var rule = aurelia_validation_1.ValidationRules
            .ensureObject()
            .displayName(ctrl.form.$schema.title)
            .satisfies(function () { return true; });
        if (ctrl.form.$required) {
            rule = rule.required();
        }
        if (Number.isInteger(ctrl.form.$schema.maxItems)) {
            rule = rule.maxItems(ctrl.form.$schema.maxItems);
        }
        if (Number.isInteger(ctrl.form.$schema.minItems)) {
            rule = rule.minItems(ctrl.form.$schema.minItems);
        }
        if (ctrl.form.$schema.uniqueItems) {
            // TODO: add unique items rule
        }
        rule.on(ctrl.model);
    };
    ArrayRules = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
    ], ArrayRules);
    return ArrayRules;
}());
exports.ArrayRules = ArrayRules;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2FycmF5LXJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEseURBQTJFO0FBQzNFLHVEQUEyQztBQUMzQyxtRkFBZ0Y7QUFJaEY7SUFDRSxvQkFBb0IsYUFBc0M7UUFBdEMsa0JBQWEsR0FBYixhQUFhLENBQXlCO0lBQUksQ0FBQztJQUUvRCw2QkFBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQUVELHdCQUFHLEdBQUg7UUFDRSxjQUFjO0lBQ2hCLENBQUM7SUFFRCx5QkFBSSxHQUFKLFVBQUssSUFBYTtRQUNoQixJQUFJLElBQUksR0FBRyxvQ0FBZTthQUN2QixZQUFZLEVBQUU7YUFDZCxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3BDLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUNoRCxJQUFJLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFO1lBQ2pDLDhCQUE4QjtTQUMvQjtRQUNELElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUE3QlUsVUFBVTtRQUR0QiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDO3lDQUVLLG1EQUF1QjtPQUQvQyxVQUFVLENBOEJ0QjtJQUFELGlCQUFDO0NBOUJELEFBOEJDLElBQUE7QUE5QlksZ0NBQVUiLCJmaWxlIjoicnVsZXMvYXJyYXktcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTZkFycmF5IH0gZnJvbSBcIi4uL2Zvcm0vYXJyYXkvc2YtYXJyYXlcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbmV4cG9ydCBjbGFzcyBBcnJheVJ1bGVzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG5cbiAgcmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICAvLyB1bmlxdWVJdGVtc1xuICB9XG5cbiAgYmluZChjdHJsOiBTZkFycmF5KSB7XG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5lbnN1cmVPYmplY3QoKVxuICAgICAgLmRpc3BsYXlOYW1lKGN0cmwuZm9ybS4kc2NoZW1hLnRpdGxlKVxuICAgICAgLnNhdGlzZmllcygoKSA9PiB0cnVlKTtcbiAgICBpZiAoY3RybC5mb3JtLiRyZXF1aXJlZCkge1xuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcbiAgICB9XG4gICAgaWYgKE51bWJlci5pc0ludGVnZXIoY3RybC5mb3JtLiRzY2hlbWEubWF4SXRlbXMpKSB7XG4gICAgICBydWxlID0gcnVsZS5tYXhJdGVtcyhjdHJsLmZvcm0uJHNjaGVtYS5tYXhJdGVtcyk7XG4gICAgfVxuICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hLm1pbkl0ZW1zKSkge1xuICAgICAgcnVsZSA9IHJ1bGUubWluSXRlbXMoY3RybC5mb3JtLiRzY2hlbWEubWluSXRlbXMpO1xuICAgIH1cbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEudW5pcXVlSXRlbXMpIHtcbiAgICAgIC8vIFRPRE86IGFkZCB1bmlxdWUgaXRlbXMgcnVsZVxuICAgIH1cbiAgICBydWxlLm9uKGN0cmwubW9kZWwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
