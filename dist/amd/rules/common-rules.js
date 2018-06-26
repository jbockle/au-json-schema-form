var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../services/schema-form-configuration", "aurelia-validation"], function (require, exports, aurelia_framework_1, schema_form_configuration_1, aurelia_validation_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
                .customRule("enum", function (val, obj, allowedValues) { return val !== undefined ? allowedValues.indexOf(val) >= 0 : true; }, this.configuration.messages.enum || "Invalid option", function (allowedValues) { return ({ allowedValues: allowedValues }); });
        };
        CommonRules.prototype.bind = function (ctrl) {
            var rule = aurelia_validation_1.ValidationRules
                .ensure("model")
                .displayName(ctrl.title)
                .satisfies(function () { return true; });
            if (ctrl.schema.const) {
                rule = rule.equals(ctrl.schema.const);
            }
            if (ctrl.schema.enum) {
                rule = rule.satisfiesRule("enum", ctrl.schema.enum);
            }
            if (ctrl.required) {
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bGVzL2NvbW1vbi1ydWxlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQUNFLHFCQUFvQixhQUFzQztZQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7WUFFMUQsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQUY4QyxDQUFDO1FBSS9ELDhCQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDYixDQUFDO1FBRUQsdUNBQWlCLEdBQWpCO1lBQ0UsdUNBQWtCLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksdUNBQWtCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckcsQ0FBQztRQUVELHlCQUFHLEdBQUg7WUFDRSxPQUFPO1lBQ1Asb0NBQWU7aUJBQ1osVUFBVSxDQUNULE1BQU0sRUFDTixVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsYUFBb0IsSUFBSyxPQUFBLEdBQUcsS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQTFELENBQTBELEVBQzlGLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxnQkFBZ0IsRUFDcEQsVUFBQyxhQUFhLElBQUssT0FBQSxDQUFDLEVBQUUsYUFBYSxlQUFBLEVBQUUsQ0FBQyxFQUFuQixDQUFtQixDQUN2QyxDQUFDO1FBQ04sQ0FBQztRQUVELDBCQUFJLEdBQUosVUFBSyxJQUFTO1lBQ1osSUFBSSxJQUFJLEdBQUcsb0NBQWU7aUJBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7aUJBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7aUJBQ3ZCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO1lBQ3pCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0JBQ3JCLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDdkM7WUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNwQixJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNyRDtZQUNELElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDakIsSUFBSSxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN4QjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztRQXZDVSxXQUFXO1lBRHZCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7NkNBRUssbURBQXVCO1dBRC9DLFdBQVcsQ0F3Q3ZCO1FBQUQsa0JBQUM7S0F4Q0QsQUF3Q0MsSUFBQTtJQXhDWSxrQ0FBVyIsImZpbGUiOiJydWxlcy9jb21tb24tcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUnVsZXMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9ydWxlc1wiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIHZhbGlkYXRpb25NZXNzYWdlcywgRmx1ZW50UnVsZUN1c3RvbWl6ZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5leHBvcnQgY2xhc3MgQ29tbW9uUnVsZXMgaW1wbGVtZW50cyBJUnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cblxuICB0eXBlID0gXCJjb21tb25cIjtcblxuICByZWdpc3RlcigpOiB2b2lkIHtcbiAgICB0aGlzLmFkZCgpO1xuICB9XG5cbiAgc2V0Q3VzdG9tTWVzc2FnZXMoKSB7XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiY29uc3RcIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXNbXCJjb25zdFwiXSB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbXCJlcXVhbHNcIl07XG4gIH1cblxuICBhZGQoKTogdm9pZCB7XG4gICAgLy8gZW51bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZW51bVwiLFxuICAgICAgICAodmFsLCBvYmosIGFsbG93ZWRWYWx1ZXM6IGFueVtdKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IGFsbG93ZWRWYWx1ZXMuaW5kZXhPZih2YWwpID49IDAgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZW51bSB8fCBcIkludmFsaWQgb3B0aW9uXCIsXG4gICAgICAgIChhbGxvd2VkVmFsdWVzKSA9PiAoeyBhbGxvd2VkVmFsdWVzIH0pXG4gICAgICApO1xuICB9XG5cbiAgYmluZChjdHJsOiBhbnkpOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55PiB7XG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5lbnN1cmUoXCJtb2RlbFwiKVxuICAgICAgLmRpc3BsYXlOYW1lKGN0cmwudGl0bGUpXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xuICAgIGlmIChjdHJsLnNjaGVtYS5jb25zdCkge1xuICAgICAgcnVsZSA9IHJ1bGUuZXF1YWxzKGN0cmwuc2NoZW1hLmNvbnN0KTtcbiAgICB9XG4gICAgaWYgKGN0cmwuc2NoZW1hLmVudW0pIHtcbiAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUoXCJlbnVtXCIsIGN0cmwuc2NoZW1hLmVudW0pO1xuICAgIH1cbiAgICBpZiAoY3RybC5yZXF1aXJlZCkge1xuICAgICAgcnVsZSA9IHJ1bGUucmVxdWlyZWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
