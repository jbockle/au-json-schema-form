var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory", "../../resources/logger"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfString = /** @class */ (function () {
        function SfString(configuration, rules, logger) {
            this.configuration = configuration;
            this.rules = rules;
            this.logger = logger;
            this.id = guid_1.Guid.newGuid();
            this.kind = "string";
            this.view = configuration.templates.text;
        }
        SfString.prototype.bind = function () {
            this.logger.info("sf-string", { form: this.form, model: this.model }, arguments);
            this.schema = this.form.$schema;
            this.rules.bind(this);
            if (["date-time", "date", "time"].indexOf(this.schema.format) > -1) {
                if (this.configuration.templates.formats
                    && this.configuration.templates.formats[this.schema.format]) {
                    this.view = this.configuration.templates.formats[this.schema.format];
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
        SfString = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger),
            aurelia_framework_1.customElement("sf-string"),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                rules_factory_1.RulesFactory,
                logger_1.SchemaFormLogger])
        ], SfString);
        return SfString;
    }());
    exports.SfString = SfString;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi1zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBVUE7UUFZRSxrQkFDUyxhQUFzQyxFQUN0QyxLQUFtQixFQUNsQixNQUF3QjtZQUZ6QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7WUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztZQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtZQVRsQyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTVCLFNBQUksR0FBRyxRQUFRLENBQUM7WUFTZCxJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO1FBQzNDLENBQUM7UUFFRCx1QkFBSSxHQUFKO1lBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNqRixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBc0MsQ0FBQztZQUMvRCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQkFDbEUsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPO3VCQUNuQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRTtvQkFDN0QsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDdEU7YUFDRjtRQUNILENBQUM7UUE3QlM7WUFBVCw0QkFBUTs7OENBQXFCO1FBQ3BCO1lBQVQsNEJBQVE7OytDQUFlO1FBRmIsUUFBUTtZQUZwQiwwQkFBTSxDQUFDLG1EQUF1QixFQUFFLDRCQUFZLEVBQUUseUJBQWdCLENBQUM7WUFDL0QsaUNBQWEsQ0FBQyxXQUFXLENBQUM7NkNBY0QsbURBQXVCO2dCQUMvQiw0QkFBWTtnQkFDVix5QkFBZ0I7V0FmdkIsUUFBUSxDQStCcEI7UUFBRCxlQUFDO0tBL0JELEFBK0JDLElBQUE7SUEvQlksNEJBQVEiLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYVN0cmluZ0RlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIFJ1bGVzRmFjdG9yeSwgU2NoZW1hRm9ybUxvZ2dlcilcbkBjdXN0b21FbGVtZW50KFwic2Ytc3RyaW5nXCIpXG5leHBvcnQgY2xhc3MgU2ZTdHJpbmcge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBzdHJpbmc7XG5cbiAgc2NoZW1hOiBJSnNvblNjaGVtYVN0cmluZ0RlZmluaXRpb247XG5cbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xuXG4gIGtpbmQgPSBcInN0cmluZ1wiO1xuXG4gIHZpZXc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyXG4gICkge1xuICAgIHRoaXMudmlldyA9IGNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLnRleHQ7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1zdHJpbmdcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0sIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYSBhcyBJSnNvblNjaGVtYVN0cmluZ0RlZmluaXRpb247XG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xuICAgIGlmIChbXCJkYXRlLXRpbWVcIiwgXCJkYXRlXCIsIFwidGltZVwiXS5pbmRleE9mKHRoaXMuc2NoZW1hLmZvcm1hdCkgPiAtMSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuZm9ybWF0c1xuICAgICAgICAmJiB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmZvcm1hdHNbdGhpcy5zY2hlbWEuZm9ybWF0XSkge1xuICAgICAgICB0aGlzLnZpZXcgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLmZvcm1hdHNbdGhpcy5zY2hlbWEuZm9ybWF0XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
