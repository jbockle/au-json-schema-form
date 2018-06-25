System.register(["aurelia-validation", "aurelia-framework", "../services/schema-form-configuration", "../rules/rules-factory"], function (exports_1, context_1) {
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
    var aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, rules_factory_1, AuJsonSchemaForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (rules_factory_1_1) {
                rules_factory_1 = rules_factory_1_1;
            }
        ],
        execute: function () {
            AuJsonSchemaForm = /** @class */ (function () {
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
            exports_1("AuJsonSchemaForm", AuJsonSchemaForm);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBMEJFLDBCQUNFLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUN0QyxZQUEwQjtvQkFMNUIsV0FBTSxHQUFZLEtBQUssQ0FBQztvQkFPdEIsSUFBSSxDQUFDLFVBQVUsR0FBRywyQkFBMkIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO29CQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsQ0FBQztvQkFDOUQsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUMxQixDQUFDO2dCQUVELCtCQUFJLEdBQUo7b0JBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsd0NBQWEsR0FBYjtvQkFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQztnQkFFRCxzQ0FBVyxHQUFYO29CQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUMzQixDQUFDO2dCQUVELDRDQUFpQixHQUFqQjtvQkFBQSxpQkFnQkM7b0JBZkMsSUFBSSxZQUFZLEdBQUcsRUFBRSxDQUFDO29CQUN0QixJQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUc7d0JBQ2YsUUFBUSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQ2QsS0FBSyxHQUFHO2dDQUNOLE1BQU07NEJBQ1IsS0FBSyxHQUFHO2dDQUNOLE1BQU07NEJBQ1I7Z0NBQ0UsSUFBTSxRQUFRLEdBQUcsS0FBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0NBQzdELElBQUksUUFB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QUFnQixDQXdHNUI7Z0JBQUQsdUJBQUM7YUF4R0QsQUF3R0M7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIFZhbGlkYXRpb25Db250cm9sbGVyLCBWYWxpZGF0aW9uUnVsZXMgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlLCBJbmxpbmVWaWV3U3RyYXRlZ3ksIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5cbkBpbmplY3QoXG4gIFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gIFJ1bGVzRmFjdG9yeVxuKVxuQGN1c3RvbUVsZW1lbnQoXCJhdS1qc29uLXNjaGVtYS1mb3JtXCIpXG5leHBvcnQgY2xhc3MgQXVKc29uU2NoZW1hRm9ybSB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IGFueTtcblxuICBAYmluZGFibGUgZm9ybTtcblxuICBAYmluZGFibGUgbW9kZWw7XG5cbiAgQGJpbmRhYmxlIG9wdGlvbnM6IGFueTtcblxuICBjb250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICB2aWV3U3RyYXRlZ3k6IElubGluZVZpZXdTdHJhdGVneTtcblxuICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3Rvcnk6IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgICBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBydWxlc0ZhY3Rvcnk6IFJ1bGVzRmFjdG9yeVxuICApIHtcbiAgICB0aGlzLmNvbnRyb2xsZXIgPSB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnkuY3JlYXRlRm9yQ3VycmVudFNjb3BlKCk7XG4gICAgdGhpcy5jb250cm9sbGVyLmFkZFJlbmRlcmVyKGNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKTtcbiAgICBydWxlc0ZhY3RvcnkucmVnaXN0ZXIoKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgc2NoZW1hQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBmb3JtQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBidWlsZFZpZXdTdHJhdGVneSgpIHtcbiAgICBsZXQgdmlld1N0cmF0ZWd5ID0gXCJcIjtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5mb3JtKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgc3dpdGNoIChrZXlbMF0pIHtcbiAgICAgICAgY2FzZSBcIkBcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIiRcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0U2NoZW1hVGVtcGxhdGUoa2V5LCB0aGlzLmZvcm1ba2V5XSk7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7IHZpZXdTdHJhdGVneSArPSB0ZW1wbGF0ZTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7dmlld1N0cmF0ZWd5fTwvdGVtcGxhdGU+YCk7XG4gIH1cblxuICBnZXRTY2hlbWFUZW1wbGF0ZShrZXk6IHN0cmluZywgZm9ybTogYW55LCBwYXJ0OiBhbnkgPSB0aGlzLnNjaGVtYSkge1xuICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nO1xuICAgIGNvbnN0IHNjaGVtYSA9IHBhcnQucHJvcGVydGllc1trZXldO1xuICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgdGVtcGxhdGUgPSBgPHNmLW51bWJlclxuICAgICAgICBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7a2V5fVwiXG4gICAgICAgIG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2tleX1cIlxuICAgICAgICB0aXRsZT1cIiR7Zm9ybS4kdGl0bGUgfHwgc2NoZW1hLnRpdGxlIHx8IHRoaXMudG9UaXRsZShrZXkpfVwiXG4gICAgICAgIHJlcXVpcmVkLmJpbmQ9XCIke3RoaXMuaXNSZXF1aXJlZChrZXksIHBhcnQpfVwiPjwvc2YtbnVtYmVyPlxcclxcbmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICB0ZW1wbGF0ZSA9IGA8c2YtdGV4dFxuICAgICAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2tleX1cIlxuICAgICAgbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7a2V5fVwiXG4gICAgICB0aXRsZT1cIiR7Zm9ybS4kdGl0bGUgfHwgc2NoZW1hLnRpdGxlIHx8IHRoaXMudG9UaXRsZShrZXkpfVwiXG4gICAgICByZXF1aXJlZC5iaW5kPVwiJHt0aGlzLmlzUmVxdWlyZWQoa2V5LCBwYXJ0KX1cIj48L3NmLXRleHQ+XFxyXFxuYDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdFRlbXBsYXRlKHh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBmb3JtOiBhbnksIHNjaGVtYTogYW55LCBwYXJ0OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlzUmVxdWlyZWQoa2V5OiBzdHJpbmcsIHBhcnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCByZXF1aXJlZCA9IGZhbHNlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnQucmVxdWlyZWQpKSB7XG4gICAgICByZXF1aXJlZCA9IHBhcnQucmVxdWlyZWRcbiAgICAgICAgLnNvbWUoKHgpID0+IHggPT09IGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXF1aXJlZDtcbiAgfVxuXG4gIHRvVGl0bGUoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucykgeyByZXR1cm47IH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcbiAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
