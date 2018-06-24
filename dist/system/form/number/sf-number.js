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
    var aurelia_validation_1, aurelia_framework_1, guid_1, schema_form_configuration_1, SfNumber;
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
            SfNumber = /** @class */ (function () {
                function SfNumber(configuration) {
                    this.configuration = configuration;
                    this.id = guid_1.Guid.newGuid();
                }
                SfNumber.prototype.bind = function () {
                    var rule = aurelia_validation_1.ValidationRules
                        .ensure("model")
                        .displayName(this.title)
                        .satisfies(function () { return true; });
                    if (this.required) {
                        rule = rule.required();
                    }
                    if (this.schema.minimum) {
                        rule = rule.satisfiesRule("minimum", this.schema.minimum);
                    }
                    rule.on(this);
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
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
                    aurelia_framework_1.customElement("sf-number"),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
                ], SfNumber);
                return SfNumber;
            }());
            exports_1("SfNumber", SfNumber);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vbnVtYmVyL3NmLW51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBZUUsa0JBQW1CLGFBQXNDO29CQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7b0JBRnpELE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBRWlDLENBQUM7Z0JBRTlELHVCQUFJLEdBQUo7b0JBQ0UsSUFBSSxJQUFJLEdBQUcsb0NBQWU7eUJBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUM7eUJBQ2YsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7eUJBQ3ZCLFNBQVMsQ0FBQyxjQUFNLE9BQUEsSUFBSSxFQUFKLENBQUksQ0FBQyxDQUFDO29CQUN6QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7d0JBQ2pCLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7cUJBQ3hCO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUMzRDtvQkFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNoQixDQUFDO2dCQXJCUztvQkFBVCw0QkFBUTs7d0RBQWE7Z0JBQ1o7b0JBQVQsNEJBQVE7O3VEQUFlO2dCQUNkO29CQUFULDRCQUFROzswREFBa0I7Z0JBQ2pCO29CQUFULDRCQUFROzt1REFBZTtnQkFKYixRQUFRO29CQUZwQiwwQkFBTSxDQUFDLG1EQUF1QixDQUFDO29CQUMvQixpQ0FBYSxDQUFDLFdBQVcsQ0FBQztxREFTUyxtREFBdUI7bUJBUjlDLFFBQVEsQ0F1QnBCO2dCQUFELGVBQUM7YUF2QkQsQUF1QkM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL251bWJlci9zZi1udW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBiaW5kYWJsZSwgY3VzdG9tRWxlbWVudCwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5AY3VzdG9tRWxlbWVudChcInNmLW51bWJlclwiKVxuZXhwb3J0IGNsYXNzIFNmTnVtYmVyIHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogYW55O1xuICBAYmluZGFibGUgbW9kZWw6IG51bWJlcjtcbiAgQGJpbmRhYmxlIHJlcXVpcmVkOiBzdHJpbmc7XG4gIEBiaW5kYWJsZSB0aXRsZTogc3RyaW5nO1xuXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gIGJpbmQoKSB7XG4gICAgbGV0IHJ1bGUgPSBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5lbnN1cmUoXCJtb2RlbFwiKVxuICAgICAgLmRpc3BsYXlOYW1lKHRoaXMudGl0bGUpXG4gICAgICAuc2F0aXNmaWVzKCgpID0+IHRydWUpO1xuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICBydWxlID0gcnVsZS5yZXF1aXJlZCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zY2hlbWEubWluaW11bSkge1xuICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZShcIm1pbmltdW1cIiwgdGhpcy5zY2hlbWEubWluaW11bSk7XG4gICAgfVxuICAgIHJ1bGUub24odGhpcyk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
