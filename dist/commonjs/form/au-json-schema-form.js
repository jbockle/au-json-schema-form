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
var rules_factory_1 = require("../rules/rules-factory");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlEQUF3RztBQUN4Ryx1REFBd0Y7QUFDeEYsbUZBQWdGO0FBQ2hGLHdEQUFzRDtBQVF0RDtJQWVFLDBCQUNFLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUN0QyxZQUEwQjtRQUw1QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBT3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsMkJBQTJCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUM5RCxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELCtCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsd0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDRDQUFpQixHQUFqQjtRQUFBLGlCQWdCQztRQWZDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztZQUNmLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNkLEtBQUssR0FBRztvQkFDTixNQUFNO2dCQUNSLEtBQUssR0FBRztvQkFDTixNQUFNO2dCQUNSO29CQUNFLElBQU0sUUFBUSxHQUFHLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFD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SUFBQTtBQXhHWSw0Q0FBZ0IiLCJmaWxlIjoiZm9ybS9hdS1qc29uLXNjaGVtYS1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LCBWYWxpZGF0aW9uQ29udHJvbGxlciwgVmFsaWRhdGlvblJ1bGVzIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5qZWN0LCBiaW5kYWJsZSwgSW5saW5lVmlld1N0cmF0ZWd5LCBjdXN0b21FbGVtZW50IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBSdWxlc0ZhY3RvcnkgfSBmcm9tIFwiLi4vcnVsZXMvcnVsZXMtZmFjdG9yeVwiO1xuXG5AaW5qZWN0KFxuICBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBSdWxlc0ZhY3RvcnlcbilcbkBjdXN0b21FbGVtZW50KFwiYXUtanNvbi1zY2hlbWEtZm9ybVwiKVxuZXhwb3J0IGNsYXNzIEF1SnNvblNjaGVtYUZvcm0ge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG5cbiAgQGJpbmRhYmxlIGZvcm07XG5cbiAgQGJpbmRhYmxlIG1vZGVsO1xuXG4gIEBiaW5kYWJsZSBvcHRpb25zOiBhbnk7XG5cbiAgY29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XG5cbiAgdmlld1N0cmF0ZWd5OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5OiBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXG4gICAgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcnVsZXNGYWN0b3J5OiBSdWxlc0ZhY3RvcnlcbiAgKSB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LmNyZWF0ZUZvckN1cnJlbnRTY29wZSgpO1xuICAgIHRoaXMuY29udHJvbGxlci5hZGRSZW5kZXJlcihjb25maWd1cmF0aW9uLnZhbGlkYXRpb25SZW5kZXJlcik7XG4gICAgcnVsZXNGYWN0b3J5LnJlZ2lzdGVyKCk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIHNjaGVtYUNoYW5nZWQoKSB7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgZm9ybUNoYW5nZWQoKSB7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XG4gICAgbGV0IHZpZXdTdHJhdGVneSA9IFwiXCI7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybSk7XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHN3aXRjaCAoa2V5WzBdKSB7XG4gICAgICAgIGNhc2UgXCJAXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIkXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFNjaGVtYVRlbXBsYXRlKGtleSwgdGhpcy5mb3JtW2tleV0pO1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZSkgeyB2aWV3U3RyYXRlZ3kgKz0gdGVtcGxhdGU7IH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnZpZXdTdHJhdGVneSA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke3ZpZXdTdHJhdGVneX08L3RlbXBsYXRlPmApO1xuICB9XG5cbiAgZ2V0U2NoZW1hVGVtcGxhdGUoa2V5OiBzdHJpbmcsIGZvcm06IGFueSwgcGFydDogYW55ID0gdGhpcy5zY2hlbWEpIHtcbiAgICBsZXQgdGVtcGxhdGU6IHN0cmluZztcbiAgICBjb25zdCBzY2hlbWEgPSBwYXJ0LnByb3BlcnRpZXNba2V5XTtcbiAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHRlbXBsYXRlID0gYDxzZi1udW1iZXJcbiAgICAgICAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2tleX1cIlxuICAgICAgICBtb2RlbC50d28td2F5PVwibW9kZWwuJHtrZXl9XCJcbiAgICAgICAgdGl0bGU9XCIke2Zvcm0uJHRpdGxlIHx8IHNjaGVtYS50aXRsZSB8fCB0aGlzLnRvVGl0bGUoa2V5KX1cIlxuICAgICAgICByZXF1aXJlZC5iaW5kPVwiJHt0aGlzLmlzUmVxdWlyZWQoa2V5LCBwYXJ0KX1cIj48L3NmLW51bWJlcj5cXHJcXG5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgdGVtcGxhdGUgPSBgPHNmLXRleHRcbiAgICAgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtrZXl9XCJcbiAgICAgIG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2tleX1cIlxuICAgICAgdGl0bGU9XCIke2Zvcm0uJHRpdGxlIHx8IHNjaGVtYS50aXRsZSB8fCB0aGlzLnRvVGl0bGUoa2V5KX1cIlxuICAgICAgcmVxdWlyZWQuYmluZD1cIiR7dGhpcy5pc1JlcXVpcmVkKGtleSwgcGFydCl9XCI+PC9zZi10ZXh0PlxcclxcbmA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHRUZW1wbGF0ZSh4dHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgZm9ybTogYW55LCBzY2hlbWE6IGFueSwgcGFydDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpc1JlcXVpcmVkKGtleTogc3RyaW5nLCBwYXJ0OiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgcmVxdWlyZWQgPSBmYWxzZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJ0LnJlcXVpcmVkKSkge1xuICAgICAgcmVxdWlyZWQgPSBwYXJ0LnJlcXVpcmVkXG4gICAgICAgIC5zb21lKCh4KSA9PiB4ID09PSBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWlyZWQ7XG4gIH1cblxuICB0b1RpdGxlKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIGtleVxuICAgICAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKVxuICAgICAgICAucmVwbGFjZSgvXi4vLCAoc3RyKSA9PiBzdHIudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMpIHsgcmV0dXJuOyB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
