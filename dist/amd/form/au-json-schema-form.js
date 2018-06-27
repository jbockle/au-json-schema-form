var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../services/schema-form-configuration", "../rules/rules-factory", "../resources/logger", "./form-controller"], function (require, exports, aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, rules_factory_1, logger_1, form_controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuJsonSchemaForm = /** @class */ (function () {
        function AuJsonSchemaForm(validationControllerFactory, configuration, rulesFactory, logger) {
            this.logger = logger;
            this.loaded = false;
            this.logger.info("constructor", arguments);
            this.validationController = validationControllerFactory.createForCurrentScope();
            this.validationController.addRenderer(configuration.validationRenderer);
            rulesFactory.register();
        }
        AuJsonSchemaForm.prototype.bind = function () {
            this.logger.info("bind", arguments);
            this.buildForm();
        };
        AuJsonSchemaForm.prototype.schemaChanged = function () {
            this.logger.info("schemaChanged", arguments);
            this.buildForm();
        };
        AuJsonSchemaForm.prototype.formChanged = function () {
            this.logger.info("formChanged", arguments);
            this.buildForm();
        };
        AuJsonSchemaForm.prototype.buildForm = function () {
            if (this.formView) {
                this.formView = null;
            }
            this.logger.info("buildForm", arguments, this.options);
            this.buildViewStrategy();
        };
        AuJsonSchemaForm.prototype.buildViewStrategy = function () {
            var _this = this;
            this.logger.info("buildViewStrategy", arguments);
            var viewStrategy = "";
            var keys = Object.keys(this.form);
            keys.forEach(function (key) {
                switch (key[0]) {
                    case "@":
                        break;
                    case "$":
                        break;
                    default:
                        var template = _this.getSchemaTemplate(key, _this.form[key]);
                        if (template) {
                            viewStrategy += template;
                        }
                        break;
                }
            });
            this.formView = new aurelia_framework_1.InlineViewStrategy("<template>" + viewStrategy + "</template>");
            this.formController = new form_controller_1.FormController(this.logger, this.options, this.validationController);
        };
        AuJsonSchemaForm.prototype.getSchemaTemplate = function (key, form, part) {
            if (part === void 0) { part = this.schema; }
            this.logger.info("getSchemaTemplate", arguments);
            var template;
            var schema = part.properties[key];
            switch (schema.type) {
                case "number":
                    template = "<sf-number\n        schema.bind=\"schema.properties." + key + "\"\n        model.two-way=\"model." + key + "\"\n        title=\"" + (form.$title || schema.title || this.toTitle(key)) + "\"\n        required.bind=\"" + this.isRequired(key, part) + "\"></sf-number>\r\n";
                    break;
                case "string":
                    template = "<sf-text\n      schema.bind=\"schema.properties." + key + "\"\n      model.two-way=\"model." + key + "\"\n      title=\"" + (form.$title || schema.title || this.toTitle(key)) + "\"\n      required.bind=\"" + this.isRequired(key, part) + "\"></sf-text>\r\n";
                    break;
            }
            return template;
        };
        AuJsonSchemaForm.prototype.isRequired = function (key, part) {
            this.logger.info("isRequired", arguments);
            var required = false;
            if (Array.isArray(part.required)) {
                required = part.required
                    .some(function (x) { return x === key; });
            }
            return required;
        };
        AuJsonSchemaForm.prototype.toTitle = function (key) {
            this.logger.info("toTitle", arguments);
            if (key) {
                return key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, function (str) { return str.toUpperCase(); });
            }
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], AuJsonSchemaForm.prototype, "schema", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], AuJsonSchemaForm.prototype, "form", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], AuJsonSchemaForm.prototype, "model", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], AuJsonSchemaForm.prototype, "options", void 0);
        AuJsonSchemaForm = __decorate([
            aurelia_framework_1.inject(aurelia_validation_1.ValidationControllerFactory, schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger),
            aurelia_framework_1.customElement("au-json-schema-form"),
            __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory,
                schema_form_configuration_1.SchemaFormConfiguration,
                rules_factory_1.RulesFactory,
                logger_1.SchemaFormLogger])
        ], AuJsonSchemaForm);
        return AuJsonSchemaForm;
    }());
    exports.AuJsonSchemaForm = AuJsonSchemaForm;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFlQTtRQWlCRSwwQkFDRSwyQkFBd0QsRUFDeEQsYUFBc0MsRUFDdEMsWUFBMEIsRUFDbEIsTUFBd0I7WUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7WUFObEMsV0FBTSxHQUFZLEtBQUssQ0FBQztZQVF0QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLG9CQUFvQixHQUFHLDJCQUEyQixDQUFDLHFCQUFxQixFQUFFLENBQUM7WUFDaEYsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUN4RSxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELCtCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ25CLENBQUM7UUFFRCx3Q0FBYSxHQUFiO1lBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNuQixDQUFDO1FBRUQsc0NBQVcsR0FBWDtZQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMzQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVELG9DQUFTLEdBQVQ7WUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJ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LENBQUM7UUFDbEIsQ0FBQztRQUVELGtDQUFPLEdBQVAsVUFBUSxHQUFXO1lBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUN2QyxJQUFJLEdBQUcsRUFBRTtnQkFDUCxPQUFPLEdBQUc7cUJBQ1AsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7cUJBQzFCLE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUM7UUFoSFM7WUFBVCw0QkFBUTs7d0RBQWE7UUFFWjtZQUFULDRCQUFROztzREFBTTtRQUVMO1lBQVQsNEJBQVE7O3VEQUFPO1FBRU47WUFBVCw0QkFBUTs7eURBQXVCO1FBUHJCLGdCQUFnQjtZQVA1QiwwQkFBTSxDQUNMLGdEQUEyQixFQUMzQixtREFBdUIsRUFDdkIsNEJBQVksRUFDWix5QkFBZ0IsQ0FDakI7WUFDQSxpQ0FBYSxDQUFDLHFCQUFxQixDQUFDOzZDQW1CSixnREFBMkI7Z0JBQ3pDLG1EQUF1QjtnQkFDeEIsNEJBQVk7Z0JBQ1YseUJBQWdCO1dBckJ2QixnQkFBZ0IsQ0FrSDVCO1FBQUQsdUJBQUM7S0FsSEQsQUFrSEMsSUFBQTtJQWxIWSw0Q0FBZ0IiLCJmaWxlIjoiZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LCBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuL2Zvcm0tY29udHJvbGxlclwiO1xuXG5AaW5qZWN0KFxuICBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBSdWxlc0ZhY3RvcnksXG4gIFNjaGVtYUZvcm1Mb2dnZXJcbilcbkBjdXN0b21FbGVtZW50KFwiYXUtanNvbi1zY2hlbWEtZm9ybVwiKVxuZXhwb3J0IGNsYXNzIEF1SnNvblNjaGVtYUZvcm0ge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG5cbiAgQGJpbmRhYmxlIGZvcm07XG5cbiAgQGJpbmRhYmxlIG1vZGVsO1xuXG4gIEBiaW5kYWJsZSBvcHRpb25zOiBJRm9ybU9wdGlvbnM7XG5cbiAgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gIGZvcm1WaWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgZm9ybUNvbnRyb2xsZXI6IEZvcm1Db250cm9sbGVyO1xuXG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICAgIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHJ1bGVzRmFjdG9yeTogUnVsZXNGYWN0b3J5LFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyXG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjb25zdHJ1Y3RvclwiLCBhcmd1bWVudHMpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIgPSB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnkuY3JlYXRlRm9yQ3VycmVudFNjb3BlKCk7XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci5hZGRSZW5kZXJlcihjb25maWd1cmF0aW9uLnZhbGlkYXRpb25SZW5kZXJlcik7XG4gICAgcnVsZXNGYWN0b3J5LnJlZ2lzdGVyKCk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJiaW5kXCIsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgfVxuXG4gIHNjaGVtYUNoYW5nZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYUNoYW5nZWRcIiwgYXJndW1lbnRzKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgZm9ybUNoYW5nZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImZvcm1DaGFuZ2VkXCIsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgfVxuXG4gIGJ1aWxkRm9ybSgpIHtcbiAgICBpZiAodGhpcy5mb3JtVmlldykge1xuICAgICAgdGhpcy5mb3JtVmlldyA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZEZvcm1cIiwgYXJndW1lbnRzLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGJ1aWxkVmlld1N0cmF0ZWd5KCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZFZpZXdTdHJhdGVneVwiLCBhcmd1bWVudHMpO1xuICAgIGxldCB2aWV3U3RyYXRlZ3kgPSBcIlwiO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZvcm0pO1xuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBzd2l0Y2ggKGtleVswXSkge1xuICAgICAgICBjYXNlIFwiQFwiOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiJFwiOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5nZXRTY2hlbWFUZW1wbGF0ZShrZXksIHRoaXMuZm9ybVtrZXldKTtcbiAgICAgICAgICBpZiAodGVtcGxhdGUpIHsgdmlld1N0cmF0ZWd5ICs9IHRlbXBsYXRlOyB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5mb3JtVmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke3ZpZXdTdHJhdGVneX08L3RlbXBsYXRlPmApO1xuICAgIHRoaXMuZm9ybUNvbnRyb2xsZXIgPSBuZXcgRm9ybUNvbnRyb2xsZXIodGhpcy5sb2dnZXIsIHRoaXMub3B0aW9ucywgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlcik7XG4gIH1cblxuICBnZXRTY2hlbWFUZW1wbGF0ZShrZXk6IHN0cmluZywgZm9ybTogYW55LCBwYXJ0OiBhbnkgPSB0aGlzLnNjaGVtYSkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRTY2hlbWFUZW1wbGF0ZVwiLCBhcmd1bWVudHMpO1xuICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nO1xuICAgIGNvbnN0IHNjaGVtYSA9IHBhcnQucHJvcGVydGllc1trZXldO1xuICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgdGVtcGxhdGUgPSBgPHNmLW51bWJlclxuICAgICAgICBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7a2V5fVwiXG4gICAgICAgIG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2tleX1cIlxuICAgICAgICB0aXRsZT1cIiR7Zm9ybS4kdGl0bGUgfHwgc2NoZW1hLnRpdGxlIHx8IHRoaXMudG9UaXRsZShrZXkpfVwiXG4gICAgICAgIHJlcXVpcmVkLmJpbmQ9XCIke3RoaXMuaXNSZXF1aXJlZChrZXksIHBhcnQpfVwiPjwvc2YtbnVtYmVyPlxcclxcbmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICB0ZW1wbGF0ZSA9IGA8c2YtdGV4dFxuICAgICAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2tleX1cIlxuICAgICAgbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7a2V5fVwiXG4gICAgICB0aXRsZT1cIiR7Zm9ybS4kdGl0bGUgfHwgc2NoZW1hLnRpdGxlIHx8IHRoaXMudG9UaXRsZShrZXkpfVwiXG4gICAgICByZXF1aXJlZC5iaW5kPVwiJHt0aGlzLmlzUmVxdWlyZWQoa2V5LCBwYXJ0KX1cIj48L3NmLXRleHQ+XFxyXFxuYDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG5cbiAgaXNSZXF1aXJlZChrZXk6IHN0cmluZywgcGFydDogYW55KTogYm9vbGVhbiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzUmVxdWlyZWRcIiwgYXJndW1lbnRzKTtcbiAgICBsZXQgcmVxdWlyZWQgPSBmYWxzZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJ0LnJlcXVpcmVkKSkge1xuICAgICAgcmVxdWlyZWQgPSBwYXJ0LnJlcXVpcmVkXG4gICAgICAgIC5zb21lKCh4KSA9PiB4ID09PSBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWlyZWQ7XG4gIH1cblxuICB0b1RpdGxlKGtleTogc3RyaW5nKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInRvVGl0bGVcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
