var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../services/schema-form-configuration", "../rules/rules-factory"], function (require, exports, aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, rules_factory_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuJsonSchemaForm = /** @class */ (function () {
        function AuJsonSchemaForm(validationControllerFactory, configuration, rulesFactory) {
            this.loaded = false;
            this.controller = validationControllerFactory.createForCurrentScope();
            this.controller.addRenderer(configuration.validationRenderer);
            rulesFactory.register();
        }
        AuJsonSchemaForm.prototype.bind = function () {
            this.buildViewStrategy();
        };
        AuJsonSchemaForm.prototype.schemaChanged = function () {
            this.buildViewStrategy();
        };
        AuJsonSchemaForm.prototype.formChanged = function () {
            this.buildViewStrategy();
        };
        AuJsonSchemaForm.prototype.buildViewStrategy = function () {
            var _this = this;
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
            this.viewStrategy = new aurelia_framework_1.InlineViewStrategy("<template>" + viewStrategy + "</template>");
        };
        AuJsonSchemaForm.prototype.getSchemaTemplate = function (key, form, part) {
            if (part === void 0) { part = this.schema; }
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
        AuJsonSchemaForm.prototype.getDefaultTemplate = function (xtype, key, form, schema, part) {
            return;
        };
        AuJsonSchemaForm.prototype.isRequired = function (key, part) {
            var required = false;
            if (Array.isArray(part.required)) {
                required = part.required
                    .some(function (x) { return x === key; });
            }
            return required;
        };
        AuJsonSchemaForm.prototype.toTitle = function (key) {
            if (key) {
                return key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, function (str) { return str.toUpperCase(); });
            }
        };
        AuJsonSchemaForm.prototype.attached = function () {
            if (!this.options) {
                return;
            }
            if (this.options.validateOnRender) {
                this.controller.validate();
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
            aurelia_framework_1.inject(aurelia_validation_1.ValidationControllerFactory, schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory),
            aurelia_framework_1.customElement("au-json-schema-form"),
            __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory,
                schema_form_configuration_1.SchemaFormConfiguration,
                rules_factory_1.RulesFactory])
        ], AuJsonSchemaForm);
        return AuJsonSchemaForm;
    }());
    exports.AuJsonSchemaForm = AuJsonSchemaForm;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFXQTtRQWVFLDBCQUNFLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUN0QyxZQUEwQjtZQUw1QixXQUFNLEdBQVksS0FBSyxDQUFDO1lBT3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM5RCxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELCtCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRUQsd0NBQWEsR0FBYjtZQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFRCxzQ0FBVyxHQUFYO1lBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQztRQUVELDRDQUFpQixHQUFqQjtZQUFBLGlCQWdCQztZQWZDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDZixRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDZCxLQUFLLEdBQUc7d0JBQ04sTUFBTTtvQkFDUixLQUFLLEdBQUc7d0JBQ04sTUFBTTtvQkFDUjt3QkFDRSxJQUFNLFFBQVEsR0FBRyxLQUFJLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzt3QkFDN0QsSUFBSSxRQUFRLEVBQUU7NEJBQUUsWUFBWSxJQUFJLFFBQVEsQ0FBQzt5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Y2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIsIFZhbGlkYXRpb25SdWxlcyB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcblxuQGluamVjdChcbiAgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgUnVsZXNGYWN0b3J5XG4pXG5AY3VzdG9tRWxlbWVudChcImF1LWpzb24tc2NoZW1hLWZvcm1cIilcbmV4cG9ydCBjbGFzcyBBdUpzb25TY2hlbWFGb3JtIHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogYW55O1xuXG4gIEBiaW5kYWJsZSBmb3JtO1xuXG4gIEBiaW5kYWJsZSBtb2RlbDtcblxuICBAYmluZGFibGUgb3B0aW9uczogYW55O1xuXG4gIGNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gIHZpZXdTdHJhdGVneTogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICAgIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHJ1bGVzRmFjdG9yeTogUnVsZXNGYWN0b3J5XG4gICkge1xuICAgIHRoaXMuY29udHJvbGxlciA9IHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWRkUmVuZGVyZXIoY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpO1xuICAgIHJ1bGVzRmFjdG9yeS5yZWdpc3RlcigpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBzY2hlbWFDaGFuZ2VkKCkge1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGZvcm1DaGFuZ2VkKCkge1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGJ1aWxkVmlld1N0cmF0ZWd5KCkge1xuICAgIGxldCB2aWV3U3RyYXRlZ3kgPSBcIlwiO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh0aGlzLmZvcm0pO1xuICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBzd2l0Y2ggKGtleVswXSkge1xuICAgICAgICBjYXNlIFwiQFwiOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiJFwiOlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5nZXRTY2hlbWFUZW1wbGF0ZShrZXksIHRoaXMuZm9ybVtrZXldKTtcbiAgICAgICAgICBpZiAodGVtcGxhdGUpIHsgdmlld1N0cmF0ZWd5ICs9IHRlbXBsYXRlOyB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy52aWV3U3RyYXRlZ3kgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt2aWV3U3RyYXRlZ3l9PC90ZW1wbGF0ZT5gKTtcbiAgfVxuXG4gIGdldFNjaGVtYVRlbXBsYXRlKGtleTogc3RyaW5nLCBmb3JtOiBhbnksIHBhcnQ6IGFueSA9IHRoaXMuc2NoZW1hKSB7XG4gICAgbGV0IHRlbXBsYXRlOiBzdHJpbmc7XG4gICAgY29uc3Qgc2NoZW1hID0gcGFydC5wcm9wZXJ0aWVzW2tleV07XG4gICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgY2FzZSBcIm51bWJlclwiOlxuICAgICAgICB0ZW1wbGF0ZSA9IGA8c2YtbnVtYmVyXG4gICAgICAgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtrZXl9XCJcbiAgICAgICAgbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7a2V5fVwiXG4gICAgICAgIHRpdGxlPVwiJHtmb3JtLiR0aXRsZSB8fCBzY2hlbWEudGl0bGUgfHwgdGhpcy50b1RpdGxlKGtleSl9XCJcbiAgICAgICAgcmVxdWlyZWQuYmluZD1cIiR7dGhpcy5pc1JlcXVpcmVkKGtleSwgcGFydCl9XCI+PC9zZi1udW1iZXI+XFxyXFxuYDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3RyaW5nXCI6XG4gICAgICAgIHRlbXBsYXRlID0gYDxzZi10ZXh0XG4gICAgICBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7a2V5fVwiXG4gICAgICBtb2RlbC50d28td2F5PVwibW9kZWwuJHtrZXl9XCJcbiAgICAgIHRpdGxlPVwiJHtmb3JtLiR0aXRsZSB8fCBzY2hlbWEudGl0bGUgfHwgdGhpcy50b1RpdGxlKGtleSl9XCJcbiAgICAgIHJlcXVpcmVkLmJpbmQ9XCIke3RoaXMuaXNSZXF1aXJlZChrZXksIHBhcnQpfVwiPjwvc2YtdGV4dD5cXHJcXG5gO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0VGVtcGxhdGUoeHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIGZvcm06IGFueSwgc2NoZW1hOiBhbnksIHBhcnQ6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXNSZXF1aXJlZChrZXk6IHN0cmluZywgcGFydDogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IHJlcXVpcmVkID0gZmFsc2U7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFydC5yZXF1aXJlZCkpIHtcbiAgICAgIHJlcXVpcmVkID0gcGFydC5yZXF1aXJlZFxuICAgICAgICAuc29tZSgoeCkgPT4geCA9PT0ga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVpcmVkO1xuICB9XG5cbiAgdG9UaXRsZShrZXk6IHN0cmluZykge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXlcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKHN0cikgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICghdGhpcy5vcHRpb25zKSB7IHJldHVybjsgfVxuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xuICAgICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
