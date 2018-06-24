var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../services/schema-form-configuration"], function (require, exports, aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuJsonSchemaForm = /** @class */ (function () {
        function AuJsonSchemaForm(vcf, globalOptions) {
            this.globalOptions = globalOptions;
            this.loaded = false;
            this.controller = vcf.createForCurrentScope();
            this.controller.addRenderer(globalOptions.validationRenderer);
            aurelia_validation_1.ValidationRules
                .customRule("minimum", function (val, obj, min) { return val !== undefined ? val >= min : true; }, "${$displayName} must be greater than ${$config.min}", function (min) { return ({ min: min }); });
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
            aurelia_framework_1.inject(aurelia_validation_1.ValidationControllerFactory, schema_form_configuration_1.SchemaFormConfiguration),
            aurelia_framework_1.customElement("au-json-schema-form"),
            __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory, schema_form_configuration_1.SchemaFormConfiguration])
        ], AuJsonSchemaForm);
        return AuJsonSchemaForm;
    }());
    exports.AuJsonSchemaForm = AuJsonSchemaForm;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQWVFLDBCQUFZLEdBQWdDLEVBQVUsYUFBc0M7WUFBdEMsa0JBQWEsR0FBYixhQUFhLENBQXlCO1lBRjVGLFdBQU0sR0FBWSxLQUFLLENBQUM7WUFHdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUU5RCxvQ0FBZTtpQkFDWixVQUFVLENBQ1QsU0FBUyxFQUNULFVBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUssT0FBQSxHQUFHLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQXJDLENBQXFDLEVBQ3hELHFEQUFxRCxFQUNyRCxVQUFDLEdBQUcsSUFBSyxPQUFBLENBQUMsRUFBRSxHQUFHLEtBQUEsRUFBRSxDQUFDLEVBQVQsQ0FBUyxDQUNuQixDQUFDO1FBQ04sQ0FBQztRQUVELCtCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUMzQixDQUFDO1FBRUQsd0NBQWEsR0FBYjtZQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFRCxzQ0FBVyxHQUFYO1lBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDM0IsQ0FBQztRQUVELDRDQUFpQixHQUFqQjtZQUFBLGlCQWdCQztZQWZDLElBQUksWUFBWSxHQUFHLEVBQUUsQ0FBQztZQUN0QixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRztnQkFDZixRQUFRLEdB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REFBYztRQVBaLGdCQUFnQjtZQUY1QiwwQkFBTSxDQUFDLGdEQUEyQixFQUFFLG1EQUF1QixDQUFDO1lBQzVELGlDQUFhLENBQUMscUJBQXFCLENBQUM7NkNBZ0JsQixnREFBMkIsRUFBeUIsbURBQXVCO1dBZmpGLGdCQUFnQixDQTJHNUI7UUFBRCx1QkFBQztLQTNHRCxBQTJHQyxJQUFBO0lBM0dZLDRDQUFnQiIsImZpbGUiOiJmb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIFZhbGlkYXRpb25Db250cm9sbGVyLCBWYWxpZGF0aW9uUnVsZXMgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlLCBJbmxpbmVWaWV3U3RyYXRlZ3ksIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcblxuQGluamVjdChWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuQGN1c3RvbUVsZW1lbnQoXCJhdS1qc29uLXNjaGVtYS1mb3JtXCIpXG5leHBvcnQgY2xhc3MgQXVKc29uU2NoZW1hRm9ybSB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcblxuICBAYmluZGFibGUgZm9ybTtcblxuICBAYmluZGFibGUgbW9kZWw7XG5cbiAgQGJpbmRhYmxlIG9wdGlvbnM6IGFueTtcblxuICBjb250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICB2aWV3U3RyYXRlZ3k6IElubGluZVZpZXdTdHJhdGVneTtcblxuICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcih2Y2Y6IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgcHJpdmF0ZSBnbG9iYWxPcHRpb25zOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikge1xuICAgIHRoaXMuY29udHJvbGxlciA9IHZjZi5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWRkUmVuZGVyZXIoZ2xvYmFsT3B0aW9ucy52YWxpZGF0aW9uUmVuZGVyZXIpO1xuXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJtaW5pbXVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbWluKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA+PSBtaW4gOiB0cnVlLFxuICAgICAgICBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAkeyRjb25maWcubWlufVwiLFxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcbiAgICAgICk7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIHNjaGVtYUNoYW5nZWQoKSB7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgZm9ybUNoYW5nZWQoKSB7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgYnVpbGRWaWV3U3RyYXRlZ3koKSB7XG4gICAgbGV0IHZpZXdTdHJhdGVneSA9IFwiXCI7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybSk7XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHN3aXRjaCAoa2V5WzBdKSB7XG4gICAgICAgIGNhc2UgXCJAXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIkXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFNjaGVtYVRlbXBsYXRlKGtleSwgdGhpcy5mb3JtW2tleV0pO1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZSkgeyB2aWV3U3RyYXRlZ3kgKz0gdGVtcGxhdGU7IH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLnZpZXdTdHJhdGVneSA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koYDx0ZW1wbGF0ZT4ke3ZpZXdTdHJhdGVneX08L3RlbXBsYXRlPmApO1xuICB9XG5cbiAgZ2V0U2NoZW1hVGVtcGxhdGUoa2V5OiBzdHJpbmcsIGZvcm06IGFueSwgcGFydDogYW55ID0gdGhpcy5zY2hlbWEpIHtcbiAgICBsZXQgdGVtcGxhdGU6IHN0cmluZztcbiAgICBjb25zdCBzY2hlbWEgPSBwYXJ0LnByb3BlcnRpZXNba2V5XTtcbiAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHRlbXBsYXRlID0gYDxzZi1udW1iZXJcbiAgICAgICAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2tleX1cIlxuICAgICAgICBtb2RlbC50d28td2F5PVwibW9kZWwuJHtrZXl9XCJcbiAgICAgICAgdGl0bGU9XCIke2Zvcm0uJHRpdGxlIHx8IHNjaGVtYS50aXRsZSB8fCB0aGlzLnRvVGl0bGUoa2V5KX1cIlxuICAgICAgICByZXF1aXJlZC5iaW5kPVwiJHt0aGlzLmlzUmVxdWlyZWQoa2V5LCBwYXJ0KX1cIj48L3NmLW51bWJlcj5cXHJcXG5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgdGVtcGxhdGUgPSBgPHNmLXRleHRcbiAgICAgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtrZXl9XCJcbiAgICAgIG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2tleX1cIlxuICAgICAgdGl0bGU9XCIke2Zvcm0uJHRpdGxlIHx8IHNjaGVtYS50aXRsZSB8fCB0aGlzLnRvVGl0bGUoa2V5KX1cIlxuICAgICAgcmVxdWlyZWQuYmluZD1cIiR7dGhpcy5pc1JlcXVpcmVkKGtleSwgcGFydCl9XCI+PC9zZi10ZXh0PlxcclxcbmA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuICBwcml2YXRlIGdldERlZmF1bHRUZW1wbGF0ZSh4dHlwZTogc3RyaW5nLCBrZXk6IHN0cmluZywgZm9ybTogYW55LCBzY2hlbWE6IGFueSwgcGFydDogYW55KTogc3RyaW5nIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpc1JlcXVpcmVkKGtleTogc3RyaW5nLCBwYXJ0OiBhbnkpOiBib29sZWFuIHtcbiAgICBsZXQgcmVxdWlyZWQgPSBmYWxzZTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXJ0LnJlcXVpcmVkKSkge1xuICAgICAgcmVxdWlyZWQgPSBwYXJ0LnJlcXVpcmVkXG4gICAgICAgIC5zb21lKCh4KSA9PiB4ID09PSBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVxdWlyZWQ7XG4gIH1cblxuICB0b1RpdGxlKGtleTogc3RyaW5nKSB7XG4gICAgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIGtleVxuICAgICAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKVxuICAgICAgICAucmVwbGFjZSgvXi4vLCAoc3RyKSA9PiBzdHIudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMpIHsgcmV0dXJuOyB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XG4gICAgICB0aGlzLmNvbnRyb2xsZXIudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
