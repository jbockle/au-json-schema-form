var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory", "../../resources/logger", "../../services/form-instances"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1, form_instances_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfString = /** @class */ (function () {
        function SfString(configuration, rules, logger, formInstances) {
            this.configuration = configuration;
            this.rules = rules;
            this.logger = logger;
            this.formInstances = formInstances;
            this.id = guid_1.Guid.newGuid();
            this.kind = "string";
        }
        SfString.prototype.attached = function () {
            this.logger.info("sf-string-attached");
            if (this.formCtrl.formOptions.validateOnRender) {
                this.formCtrl.validationController.validate({ object: this, propertyName: "model" });
            }
        };
        SfString.prototype.bind = function () {
            this.logger.info("sf-string", { form: this.form, model: this.model }, arguments);
            this.formCtrl = this.formInstances.get(this.formInstance);
            this.rules.bind(this);
            this.determineViewStrategy();
        };
        SfString.prototype.determineViewStrategy = function () {
            this.view = this.configuration.templates.string;
            if (this.form.$altTemplate) {
                this.view = this.form.$altTemplate;
            }
            else if (this.form.$schema.enum && this.form.$schema.enum.length <= 5) {
                this.view = this.configuration.templates.stringRadioEnum;
            }
            else if (this.form.$schema.enum) {
                this.view = this.configuration.templates.stringSelectEnum;
            }
            else if (["date-time", "date", "time"].indexOf(this.form.$schema.format) > -1) {
                if (this.configuration.templates.formats
                    && this.configuration.templates.formats[this.form.$schema.format]) {
                    this.view = this.configuration.templates.formats[this.form.$schema.format];
                }
            }
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SfString.prototype, "form", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], SfString.prototype, "model", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], SfString.prototype, "formInstance", void 0);
        SfString = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
            aurelia_framework_1.customElement("sf-string"),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                rules_factory_1.RulesFactory,
                logger_1.SchemaFormLogger,
                form_instances_1.FormInstances])
        ], SfString);
        return SfString;
    }());
    exports.SfString = SfString;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi1zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBaUJBO1FBYUUsa0JBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0IsRUFDeEIsYUFBNEI7WUFIN0Isa0JBQWEsR0FBYixhQUFhLENBQXlCO1lBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7WUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7WUFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7WUFadEMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU1QixTQUFJLEdBQUcsUUFBUSxDQUFDO1FBV1osQ0FBQztRQUVMLDJCQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsUUFBUSxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQzthQUN0RjtRQUNILENBQUM7UUFFRCx1QkFBSSxHQUFKO1lBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMvQixDQUFDO1FBRU8sd0NBQXFCLEdBQTdCO1lBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7WUFDaEQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTtnQkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUNwQztpQkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDdkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7YUFDMUQ7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUM7YUFDM0Q7aUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUMvRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU87dUJBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzVFO2FBQ0Y7UUFDSCxDQUFDO1FBL0NTO1lBQVQsNEJBQVE7OzhDQUFxQjtRQUNwQjtZQUFULDRCQUFROzsrQ0FBZTtRQUNkO1lBQVQsNEJBQVE7O3NEQUFzQjtRQUhwQixRQUFRO1lBUHBCLDBCQUFNLENBQ0wsbURBQXVCLEVBQ3ZCLDRCQUFZLEVBQ1oseUJBQWdCLEVBQ2hCLDhCQUFhLENBQ2Q7WUFDQSxpQ0FBYSxDQUFDLFdBQVcsQ0FBQzs2Q0FlRCxtREFBdUI7Z0JBQy9CLDRCQUFZO2dCQUNWLHlCQUFnQjtnQkFDVCw4QkFBYTtXQWpCM0IsUUFBUSxDQWlEcEI7UUFBRCxlQUFDO0tBakRELEFBaURDLElBQUE7SUFqRFksNEJBQVEiLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hU3RyaW5nRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXNcIjtcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcclxuXHJcbkBpbmplY3QoXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgUnVsZXNGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KFwic2Ytc3RyaW5nXCIpXHJcbmV4cG9ydCBjbGFzcyBTZlN0cmluZyB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBzdHJpbmc7XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSBcInN0cmluZ1wiO1xyXG5cclxuICB2aWV3O1xyXG5cclxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHsgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1zdHJpbmctYXR0YWNoZWRcIik7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMsIHByb3BlcnR5TmFtZTogXCJtb2RlbFwiIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1zdHJpbmdcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0sIGFyZ3VtZW50cyk7XHJcbiAgICB0aGlzLmZvcm1DdHJsID0gdGhpcy5mb3JtSW5zdGFuY2VzLmdldCh0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmRldGVybWluZVZpZXdTdHJhdGVneSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkZXRlcm1pbmVWaWV3U3RyYXRlZ3koKSB7XHJcbiAgICB0aGlzLnZpZXcgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLnN0cmluZztcclxuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XHJcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuZm9ybS4kYWx0VGVtcGxhdGU7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS4kc2NoZW1hLmVudW0gJiYgdGhpcy5mb3JtLiRzY2hlbWEuZW51bS5sZW5ndGggPD0gNSkge1xyXG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLnN0cmluZ1JhZGlvRW51bTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRzY2hlbWEuZW51bSkge1xyXG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLnN0cmluZ1NlbGVjdEVudW07XHJcbiAgICB9IGVsc2UgaWYgKFtcImRhdGUtdGltZVwiLCBcImRhdGVcIiwgXCJ0aW1lXCJdLmluZGV4T2YodGhpcy5mb3JtLiRzY2hlbWEuZm9ybWF0KSA+IC0xKSB7XHJcbiAgICAgIGlmICh0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmZvcm1hdHNcclxuICAgICAgICAmJiB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmZvcm1hdHNbdGhpcy5mb3JtLiRzY2hlbWEuZm9ybWF0XSkge1xyXG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuZm9ybWF0c1t0aGlzLmZvcm0uJHNjaGVtYS5mb3JtYXRdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
