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
var aurelia_validation_1 = require("aurelia-validation");
var CommonRules = /** @class */ (function () {
    function CommonRules(configuration) {
        this.configuration = configuration;
        this.type = "common";
    }
    CommonRules.prototype.register = function () {
        this.add();
    };
    CommonRules.prototype.setCustomMessages = function () {
        aurelia_validation_1.validationMessages["const"] = this.configuration.messages["const"] || aurelia_validation_1.validationMessages["equals"];
    };
    CommonRules.prototype.add = function () {
        // enum
        aurelia_validation_1.ValidationRules
            .customRule("enum", function (val, obj, allowedValues) { return val !== undefined ? allowedValues.indexOf(val) >= 0 : true; }, this.configuration.messages.enum || "${$displayName} has an invalid selection", function (allowedValues) { return ({ allowedValues: allowedValues }); });
    };
    CommonRules.prototype.bind = function (ctrl) {
        var rule = aurelia_validation_1.ValidationRules
            .ensure("model")
            .displayName(ctrl.schema.title)
            .satisfies(function () { return true; });
        if (ctrl.schema.const) {
            rule = rule.equals(ctrl.schema.const);
        }
        if (ctrl.schema.enum) {
            rule = rule.satisfiesRule("enum", ctrl.schema.enum);
        }
        if (ctrl.form.$required) {
            rule = rule.required();
        }
        return rule;
    };
    CommonRules = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
    ], CommonRules);
    return CommonRules;
}());
exports.CommonRules = CommonRules;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBLHVEQUEyQztBQUMzQyxtRkFBZ0Y7QUFDaEYseURBQStGO0FBRy9GO0lBQ0UscUJBQW9CLGFBQXNDO1FBQXRDLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUUxRCxTQUFJLEdBQUcsUUFBUSxDQUFDO0lBRjhDLENBQUM7SUFJL0QsOEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFRCx1Q0FBaUIsR0FBakI7UUFDRSx1Q0FBa0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSx1Q0FBa0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNyRyxDQUFDO0lBRUQseUJBQUcsR0FBSDtRQUNFLE9BQU87UUFDUCxvQ0FBZTthQUNaLFVBQVUsQ0FDVCxNQUFNLEVBQ04sVUFBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLGFBQW9CLElBQUssT0FBQSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUExRCxDQUEwRCxFQUM5RixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksMENBQTBDLEVBQzlFLFVBQUMsYUFBYSxJQUFLLE9BQUEsQ0FBQyxFQUFFLGFBQWEsZUFBQSxFQUFFLENBQUMsRUFBbkIsQ0FBbUIsQ0FDdkMsQ0FBQztJQUNOLENBQUM7SUFFRCwwQkFBSSxHQUFKLFVBQUssSUFBUztRQUNaLElBQUksSUFBSSxHQUFHLG9DQUFlO2FBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7YUFDZixXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7YUFDOUIsU0FBUyxDQUFDLGNBQU0sT0FBQSxJQUFJLEVBQUosQ0FBSSxDQUFDLENBQUM7UUFDekIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUNyQixJQUFJLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUNyRDtRQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDdkIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQXZDVSxXQUFXO1FBRHZCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7eUNBRUssbURBQXVCO09BRC9DLFdBQVcsQ0F3Q3ZCO0lBQUQsa0JBQUM7Q0F4Q0QsQUF3Q0MsSUFBQTtBQXhDWSxrQ0FBVyIsImZpbGUiOiJydWxlcy9jb21tb24tcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUnVsZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ydWxlc1wiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIHZhbGlkYXRpb25NZXNzYWdlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5leHBvcnQgY2xhc3MgQ29tbW9uUnVsZXMgaW1wbGVtZW50cyBJUnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICB0eXBlID0gXCJjb21tb25cIjtcblxuICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbiAgc2V0Q3VzdG9tTWVzc2FnZXMoKSB7XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiY29uc3RcIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXNbXCJjb25zdFwiXSB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbXCJlcXVhbHNcIl07XG4gIH1cblxuICBhZGQoKTogdm9pZCB7XG4gICAgLy8gZW51bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZW51bVwiLFxuICAgICAgICAodmFsLCBvYmosIGFsbG93ZWRWYWx1ZXM6IGFueVtdKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IGFsbG93ZWRWYWx1ZXMuaW5kZXhPZih2YWwpID49IDAgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZW51bSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBoYXMgYW4gaW52YWxpZCBzZWxlY3Rpb25cIixcbiAgICAgICAgKGFsbG93ZWRWYWx1ZXMpID0+ICh7IGFsbG93ZWRWYWx1ZXMgfSlcbiAgICAgICk7XG4gIH1cblxuICBiaW5kKGN0cmw6IGFueSk6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+IHtcbiAgICBsZXQgcnVsZSA9IFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmVuc3VyZShcIm1vZGVsXCIpXG4gICAgICAuZGlzcGxheU5hbWUoY3RybC5zY2hlbWEudGl0bGUpXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xuICAgIGlmIChjdHJsLnNjaGVtYS5jb25zdCkge1xuICAgICAgcnVsZSA9IHJ1bGUuZXF1YWxzKGN0cmwuc2NoZW1hLmNvbnN0KTtcbiAgICB9XG4gICAgaWYgKGN0cmwuc2NoZW1hLmVudW0pIHtcbiAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUoXCJlbnVtXCIsIGN0cmwuc2NoZW1hLmVudW0pO1xuICAgIH1cbiAgICBpZiAoY3RybC5mb3JtLiRyZXF1aXJlZCkge1xuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
