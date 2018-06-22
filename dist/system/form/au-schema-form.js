System.register(["aurelia-validation", "aurelia-framework", "../services/global-options"], function (exports_1, context_1) {
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
    var aurelia_validation_1, aurelia_framework_1, global_options_1, AuSchemaForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (global_options_1_1) {
                global_options_1 = global_options_1_1;
            }
        ],
        execute: function () {
            AuSchemaForm = /** @class */ (function () {
                function AuSchemaForm(vcf, globalOptions) {
                    this.globalOptions = globalOptions;
                    this.loaded = false;
                    this.controller = vcf.createForCurrentScope();
                    this.controller.addRenderer(globalOptions.renderer);
                    aurelia_validation_1.ValidationRules
                        .customRule("minimum", function (val, obj, min) { return val !== undefined ? val >= min : true; }, "${$displayName} must be greater than ${$config.min}", function (min) { return ({ min: min }); });
                }
                AuSchemaForm.prototype.bind = function () {
                    this.buildViewStrategy();
                };
                AuSchemaForm.prototype.schemaChanged = function () {
                    this.buildViewStrategy();
                };
                AuSchemaForm.prototype.formChanged = function () {
                    this.buildViewStrategy();
                };
                AuSchemaForm.prototype.buildViewStrategy = function () {
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
                    this.viewStrategy = new aurelia_framework_1.InlineViewStrategy("<template>" + viewStrategy + "</template>", this.globalOptions.templates);
                };
                AuSchemaForm.prototype.getSchemaTemplate = function (key, form, part) {
                    if (part === void 0) { part = this.schema; }
                    var template;
                    var schema = part.properties[key];
                    switch (schema.type) {
                        case "number":
                            template = "<sfnumber\n        schema.bind=\"schema.properties." + key + "\"\n        model.two-way=\"model." + key + "\"\n        title=\"" + (form.$title || schema.title || this.toTitle(key)) + "\"\n        required.bind=\"" + this.isRequired(key, part) + "\"></sfnumber>\r\n";
                            break;
                        case "string":
                            template = "<sftext\n      schema.bind=\"schema.properties." + key + "\"\n      model.two-way=\"model." + key + "\"\n      title=\"" + (form.$title || schema.title || this.toTitle(key)) + "\"\n      required.bind=\"" + this.isRequired(key, part) + "\"></sftext>\r\n";
                            break;
                    }
                    return template;
                };
                AuSchemaForm.prototype.getDefaultTemplate = function (xtype, key, form, schema, part) {
                    return;
                };
                AuSchemaForm.prototype.isRequired = function (key, part) {
                    var required = false;
                    if (Array.isArray(part.required)) {
                        required = part.required
                            .some(function (x) { return x === key; });
                    }
                    return required;
                };
                AuSchemaForm.prototype.toTitle = function (key) {
                    if (key) {
                        return key
                            .replace(/([A-Z])/g, " $1")
                            .replace(/^./, function (str) { return str.toUpperCase(); });
                    }
                };
                AuSchemaForm.prototype.attached = function () {
                    if (this.options.validateOnRender) {
                        this.controller.validate();
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuSchemaForm.prototype, "schema", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuSchemaForm.prototype, "form", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuSchemaForm.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], AuSchemaForm.prototype, "options", void 0);
                AuSchemaForm = __decorate([
                    aurelia_framework_1.inject(aurelia_validation_1.ValidationControllerFactory, global_options_1.GlobalOptions),
                    __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory, global_options_1.GlobalOptions])
                ], AuSchemaForm);
                return AuSchemaForm;
            }());
            exports_1("AuSchemaForm", AuSchemaForm);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFBVCw0QkFBUTs7MkRBQU87Z0JBRU47b0JBQVQsNEJBQVE7OzZEQUF1QjtnQkFQckIsWUFBWTtvQkFEeEIsMEJBQU0sQ0FBQyxnREFBMkIsRUFBRSw4QkFBYSxDQUFDO3FEQWdCaEMsZ0RBQTJCLEVBQXlCLDhCQUFhO21CQWZ2RSxZQUFZLENBMEd4QjtnQkFBRCxtQkFBQzthQTFHRCxBQTBHQzs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vYXUtc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIFZhbGlkYXRpb25Db250cm9sbGVyLCBWYWxpZGF0aW9uUnVsZXMgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlLCBJbmxpbmVWaWV3U3RyYXRlZ3ksIG9ic2VydmFibGUgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEdsb2JhbE9wdGlvbnMgfSBmcm9tIFwiLi4vc2VydmljZXMvZ2xvYmFsLW9wdGlvbnNcIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuXG5AaW5qZWN0KFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgR2xvYmFsT3B0aW9ucylcbmV4cG9ydCBjbGFzcyBBdVNjaGVtYUZvcm0ge1xuICBAYmluZGFibGUgc2NoZW1hOiBhbnk7XG5cbiAgQGJpbmRhYmxlIGZvcm07XG5cbiAgQGJpbmRhYmxlIG1vZGVsO1xuXG4gIEBiaW5kYWJsZSBvcHRpb25zOiBJRm9ybU9wdGlvbnM7XG5cbiAgY29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XG5cbiAgdmlld1N0cmF0ZWd5OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IodmNmOiBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIHByaXZhdGUgZ2xvYmFsT3B0aW9uczogR2xvYmFsT3B0aW9ucykge1xuICAgIHRoaXMuY29udHJvbGxlciA9IHZjZi5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcbiAgICB0aGlzLmNvbnRyb2xsZXIuYWRkUmVuZGVyZXIoZ2xvYmFsT3B0aW9ucy5yZW5kZXJlcik7XG5cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcIm1pbmltdW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBtaW4pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsID49IG1pbiA6IHRydWUsXG4gICAgICAgIFwiJHskZGlzcGxheU5hbWV9IG11c3QgYmUgZ3JlYXRlciB0aGFuICR7JGNvbmZpZy5taW59XCIsXG4gICAgICAgIChtaW4pID0+ICh7IG1pbiB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgc2NoZW1hQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBmb3JtQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBidWlsZFZpZXdTdHJhdGVneSgpIHtcbiAgICBsZXQgdmlld1N0cmF0ZWd5ID0gXCJcIjtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5mb3JtKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgc3dpdGNoIChrZXlbMF0pIHtcbiAgICAgICAgY2FzZSBcIkBcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIiRcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0U2NoZW1hVGVtcGxhdGUoa2V5LCB0aGlzLmZvcm1ba2V5XSk7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7IHZpZXdTdHJhdGVneSArPSB0ZW1wbGF0ZTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7dmlld1N0cmF0ZWd5fTwvdGVtcGxhdGU+YCwgdGhpcy5nbG9iYWxPcHRpb25zLnRlbXBsYXRlcyk7XG4gIH1cblxuICBnZXRTY2hlbWFUZW1wbGF0ZShrZXk6IHN0cmluZywgZm9ybTogYW55LCBwYXJ0OiBhbnkgPSB0aGlzLnNjaGVtYSkge1xuICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nO1xuICAgIGNvbnN0IHNjaGVtYSA9IHBhcnQucHJvcGVydGllc1trZXldO1xuICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgdGVtcGxhdGUgPSBgPHNmbnVtYmVyXG4gICAgICAgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtrZXl9XCJcbiAgICAgICAgbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7a2V5fVwiXG4gICAgICAgIHRpdGxlPVwiJHtmb3JtLiR0aXRsZSB8fCBzY2hlbWEudGl0bGUgfHwgdGhpcy50b1RpdGxlKGtleSl9XCJcbiAgICAgICAgcmVxdWlyZWQuYmluZD1cIiR7dGhpcy5pc1JlcXVpcmVkKGtleSwgcGFydCl9XCI+PC9zZm51bWJlcj5cXHJcXG5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgdGVtcGxhdGUgPSBgPHNmdGV4dFxuICAgICAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2tleX1cIlxuICAgICAgbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7a2V5fVwiXG4gICAgICB0aXRsZT1cIiR7Zm9ybS4kdGl0bGUgfHwgc2NoZW1hLnRpdGxlIHx8IHRoaXMudG9UaXRsZShrZXkpfVwiXG4gICAgICByZXF1aXJlZC5iaW5kPVwiJHt0aGlzLmlzUmVxdWlyZWQoa2V5LCBwYXJ0KX1cIj48L3NmdGV4dD5cXHJcXG5gO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXREZWZhdWx0VGVtcGxhdGUoeHR5cGU6IHN0cmluZywga2V5OiBzdHJpbmcsIGZvcm06IGFueSwgc2NoZW1hOiBhbnksIHBhcnQ6IGFueSk6IHN0cmluZyB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXNSZXF1aXJlZChrZXk6IHN0cmluZywgcGFydDogYW55KTogYm9vbGVhbiB7XG4gICAgbGV0IHJlcXVpcmVkID0gZmFsc2U7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFydC5yZXF1aXJlZCkpIHtcbiAgICAgIHJlcXVpcmVkID0gcGFydC5yZXF1aXJlZFxuICAgICAgICAuc29tZSgoeCkgPT4geCA9PT0ga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVpcmVkO1xuICB9XG5cbiAgdG9UaXRsZShrZXk6IHN0cmluZykge1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHJldHVybiBrZXlcbiAgICAgICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAgICAgLnJlcGxhY2UoL14uLywgKHN0cikgPT4gc3RyLnRvVXBwZXJDYXNlKCkpO1xuICAgIH1cbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xuICAgICAgdGhpcy5jb250cm9sbGVyLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
