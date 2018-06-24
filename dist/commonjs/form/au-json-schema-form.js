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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlEQUF3RztBQUN4Ryx1REFBd0Y7QUFDeEYsbUZBQWdGO0FBSWhGO0lBZUUsMEJBQVksR0FBZ0MsRUFBVSxhQUFzQztRQUF0QyxrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFGNUYsV0FBTSxHQUFZLEtBQUssQ0FBQztRQUd0QixJQUFJLENBQUMsVUFBVSxHQUFHLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzlDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBRTlELG9DQUFlO2FBQ1osVUFBVSxDQUNULFNBQVMsRUFDVCxVQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFLLE9BQUEsR0FBRyxLQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFyQyxDQUFxQyxFQUN4RCxxREFBcUQsRUFDckQsVUFBQyxHQUFHLElBQUssT0FBQSxDQUFDLEVBQUUsR0FBRyxLQUFBLEVBQUUsQ0FBQyxFQUFULENBQVMsQ0FDbkIsQ0FBQztJQUNOLENBQUM7SUFFRCwrQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQsc0NBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRCw0Q0FBaUIsR0FBakI7UUFBQSxpQkFnQkM7UUFmQyxJQUFJLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEMsSUFBSSxD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QUFROzttREFBTztJQUVOO1FBQVQsNEJBQVE7O3FEQUFjO0lBUFosZ0JBQWdCO1FBRjVCLDBCQUFNLENBQUMsZ0RBQTJCLEVBQUUsbURBQXVCLENBQUM7UUFDNUQsaUNBQWEsQ0FBQyxxQkFBcUIsQ0FBQzt5Q0FnQmxCLGdEQUEyQixFQUF5QixtREFBdUI7T0FmakYsZ0JBQWdCLENBMkc1QjtJQUFELHVCQUFDO0NBM0dELEFBMkdDLElBQUE7QUEzR1ksNENBQWdCIiwiZmlsZSI6ImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIsIFZhbGlkYXRpb25SdWxlcyB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCwgYmluZGFibGUsIElubGluZVZpZXdTdHJhdGVneSwgY3VzdG9tRWxlbWVudCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuXG5AaW5qZWN0KFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5AY3VzdG9tRWxlbWVudChcImF1LWpzb24tc2NoZW1hLWZvcm1cIilcbmV4cG9ydCBjbGFzcyBBdUpzb25TY2hlbWFGb3JtIHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogYW55O1xuXG4gIEBiaW5kYWJsZSBmb3JtO1xuXG4gIEBiaW5kYWJsZSBtb2RlbDtcblxuICBAYmluZGFibGUgb3B0aW9uczogYW55O1xuXG4gIGNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyO1xuXG4gIHZpZXdTdHJhdGVneTogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIGxvYWRlZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKHZjZjogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LCBwcml2YXRlIGdsb2JhbE9wdGlvbnM6IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7XG4gICAgdGhpcy5jb250cm9sbGVyID0gdmNmLmNyZWF0ZUZvckN1cnJlbnRTY29wZSgpO1xuICAgIHRoaXMuY29udHJvbGxlci5hZGRSZW5kZXJlcihnbG9iYWxPcHRpb25zLnZhbGlkYXRpb25SZW5kZXJlcik7XG5cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcIm1pbmltdW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBtaW4pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsID49IG1pbiA6IHRydWUsXG4gICAgICAgIFwiJHskZGlzcGxheU5hbWV9IG11c3QgYmUgZ3JlYXRlciB0aGFuICR7JGNvbmZpZy5taW59XCIsXG4gICAgICAgIChtaW4pID0+ICh7IG1pbiB9KVxuICAgICAgKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5idWlsZFZpZXdTdHJhdGVneSgpO1xuICB9XG5cbiAgc2NoZW1hQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBmb3JtQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBidWlsZFZpZXdTdHJhdGVneSgpIHtcbiAgICBsZXQgdmlld1N0cmF0ZWd5ID0gXCJcIjtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5mb3JtKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgc3dpdGNoIChrZXlbMF0pIHtcbiAgICAgICAgY2FzZSBcIkBcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIiRcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0U2NoZW1hVGVtcGxhdGUoa2V5LCB0aGlzLmZvcm1ba2V5XSk7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7IHZpZXdTdHJhdGVneSArPSB0ZW1wbGF0ZTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMudmlld1N0cmF0ZWd5ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7dmlld1N0cmF0ZWd5fTwvdGVtcGxhdGU+YCk7XG4gIH1cblxuICBnZXRTY2hlbWFUZW1wbGF0ZShrZXk6IHN0cmluZywgZm9ybTogYW55LCBwYXJ0OiBhbnkgPSB0aGlzLnNjaGVtYSkge1xuICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nO1xuICAgIGNvbnN0IHNjaGVtYSA9IHBhcnQucHJvcGVydGllc1trZXldO1xuICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgdGVtcGxhdGUgPSBgPHNmLW51bWJlclxuICAgICAgICBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7a2V5fVwiXG4gICAgICAgIG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2tleX1cIlxuICAgICAgICB0aXRsZT1cIiR7Zm9ybS4kdGl0bGUgfHwgc2NoZW1hLnRpdGxlIHx8IHRoaXMudG9UaXRsZShrZXkpfVwiXG4gICAgICAgIHJlcXVpcmVkLmJpbmQ9XCIke3RoaXMuaXNSZXF1aXJlZChrZXksIHBhcnQpfVwiPjwvc2YtbnVtYmVyPlxcclxcbmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICB0ZW1wbGF0ZSA9IGA8c2YtdGV4dFxuICAgICAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2tleX1cIlxuICAgICAgbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7a2V5fVwiXG4gICAgICB0aXRsZT1cIiR7Zm9ybS4kdGl0bGUgfHwgc2NoZW1hLnRpdGxlIHx8IHRoaXMudG9UaXRsZShrZXkpfVwiXG4gICAgICByZXF1aXJlZC5iaW5kPVwiJHt0aGlzLmlzUmVxdWlyZWQoa2V5LCBwYXJ0KX1cIj48L3NmLXRleHQ+XFxyXFxuYDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RGVmYXVsdFRlbXBsYXRlKHh0eXBlOiBzdHJpbmcsIGtleTogc3RyaW5nLCBmb3JtOiBhbnksIHNjaGVtYTogYW55LCBwYXJ0OiBhbnkpOiBzdHJpbmcge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlzUmVxdWlyZWQoa2V5OiBzdHJpbmcsIHBhcnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIGxldCByZXF1aXJlZCA9IGZhbHNlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnQucmVxdWlyZWQpKSB7XG4gICAgICByZXF1aXJlZCA9IHBhcnQucmVxdWlyZWRcbiAgICAgICAgLnNvbWUoKHgpID0+IHggPT09IGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXF1aXJlZDtcbiAgfVxuXG4gIHRvVGl0bGUoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucykgeyByZXR1cm47IH1cbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcbiAgICAgIHRoaXMuY29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
