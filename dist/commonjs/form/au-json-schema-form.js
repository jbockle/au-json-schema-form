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
var logger_1 = require("../resources/logger");
var form_controller_1 = require("./form-controller");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlEQUF1RjtBQUN2Rix1REFBd0Y7QUFDeEYsbUZBQWdGO0FBQ2hGLHdEQUFzRDtBQUV0RCw4Q0FBdUQ7QUFDdkQscURBQW1EO0FBU25EO0lBaUJFLDBCQUNFLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUN0QyxZQUEwQixFQUNsQixNQUF3QjtRQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQU5sQyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBUXRCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsMkJBQTJCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNoRixJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3hFLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELHdDQUFhLEdBQWI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxzQ0FBVyxHQUFYO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRUQsb0NBQVMsR0FBVDtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEs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LENBQUMsSUFBSyxPQUFBLENBQUMsS0FBSyxHQUFHLEVBQVQsQ0FBUyxDQUFDLENBQUM7U0FDM0I7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBRUQsa0NBQU8sR0FBUCxVQUFRLEdBQVc7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksR0FBRyxFQUFFO1lBQ1AsT0FBTyxHQUFHO2lCQUNQLE9BQU8sQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDO2lCQUMxQixPQUFPLENBQUMsSUFBSSxFQUFFLFVBQUMsR0FBRyxJQUFLLE9BQUEsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFqQixDQUFpQixDQUFDLENBQUM7U0FDOUM7SUFDSCxDQUFDO0lBaEhTO1FBQVQsNEJBQVE7O29EQUFhO0lBRVo7UUFBVCw0QkFBUTs7a0RBQU07SUFFTDtRQUFULDRCQUFROzttREFBTztJQUVOO1FBQVQsNEJBQVE7O3FEQUF1QjtJQVByQixnQkFBZ0I7UUFQNUIsMEJBQU0sQ0FDTCxnREFBMkIsRUFDM0IsbURBQXVCLEVBQ3ZCLDRCQUFZLEVBQ1oseUJBQWdCLENBQ2pCO1FBQ0EsaUNBQWEsQ0FBQyxxQkFBcUIsQ0FBQzt5Q0FtQkosZ0RBQTJCO1lBQ3pDLG1EQUF1QjtZQUN4Qiw0QkFBWTtZQUNWLHlCQUFnQjtPQXJCdkIsZ0JBQWdCLENBa0g1QjtJQUFELHVCQUFDO0NBbEhELEFBa0hDLElBQUE7QUFsSFksNENBQWdCIiwiZmlsZSI6ImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlLCBJbmxpbmVWaWV3U3RyYXRlZ3ksIGN1c3RvbUVsZW1lbnQgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2xsZXIgfSBmcm9tIFwiLi9mb3JtLWNvbnRyb2xsZXJcIjtcblxuQGluamVjdChcbiAgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgUnVsZXNGYWN0b3J5LFxuICBTY2hlbWFGb3JtTG9nZ2VyXG4pXG5AY3VzdG9tRWxlbWVudChcImF1LWpzb24tc2NoZW1hLWZvcm1cIilcbmV4cG9ydCBjbGFzcyBBdUpzb25TY2hlbWFGb3JtIHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogYW55O1xuXG4gIEBiaW5kYWJsZSBmb3JtO1xuXG4gIEBiaW5kYWJsZSBtb2RlbDtcblxuICBAYmluZGFibGUgb3B0aW9uczogSUZvcm1PcHRpb25zO1xuXG4gIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICBmb3JtVmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIGZvcm1Db250cm9sbGVyOiBGb3JtQ29udHJvbGxlcjtcblxuICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB2YWxpZGF0aW9uQ29udHJvbGxlckZhY3Rvcnk6IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSxcbiAgICBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgICBydWxlc0ZhY3Rvcnk6IFJ1bGVzRmFjdG9yeSxcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlclxuICApIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiY29uc3RydWN0b3JcIiwgYXJndW1lbnRzKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyID0gdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LmNyZWF0ZUZvckN1cnJlbnRTY29wZSgpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkUmVuZGVyZXIoY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpO1xuICAgIHJ1bGVzRmFjdG9yeS5yZWdpc3RlcigpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYmluZFwiLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBzY2hlbWFDaGFuZ2VkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFDaGFuZ2VkXCIsIGFyZ3VtZW50cyk7XG4gICAgdGhpcy5idWlsZEZvcm0oKTtcbiAgfVxuXG4gIGZvcm1DaGFuZ2VkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJmb3JtQ2hhbmdlZFwiLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBidWlsZEZvcm0oKSB7XG4gICAgaWYgKHRoaXMuZm9ybVZpZXcpIHtcbiAgICAgIHRoaXMuZm9ybVZpZXcgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYnVpbGRGb3JtXCIsIGFyZ3VtZW50cywgdGhpcy5vcHRpb25zKTtcbiAgICB0aGlzLmJ1aWxkVmlld1N0cmF0ZWd5KCk7XG4gIH1cblxuICBidWlsZFZpZXdTdHJhdGVneSgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYnVpbGRWaWV3U3RyYXRlZ3lcIiwgYXJndW1lbnRzKTtcbiAgICBsZXQgdmlld1N0cmF0ZWd5ID0gXCJcIjtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXModGhpcy5mb3JtKTtcbiAgICBrZXlzLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgc3dpdGNoIChrZXlbMF0pIHtcbiAgICAgICAgY2FzZSBcIkBcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcIiRcIjpcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMuZ2V0U2NoZW1hVGVtcGxhdGUoa2V5LCB0aGlzLmZvcm1ba2V5XSk7XG4gICAgICAgICAgaWYgKHRlbXBsYXRlKSB7IHZpZXdTdHJhdGVneSArPSB0ZW1wbGF0ZTsgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuZm9ybVZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KGA8dGVtcGxhdGU+JHt2aWV3U3RyYXRlZ3l9PC90ZW1wbGF0ZT5gKTtcbiAgICB0aGlzLmZvcm1Db250cm9sbGVyID0gbmV3IEZvcm1Db250cm9sbGVyKHRoaXMubG9nZ2VyLCB0aGlzLm9wdGlvbnMsIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIpO1xuICB9XG5cbiAgZ2V0U2NoZW1hVGVtcGxhdGUoa2V5OiBzdHJpbmcsIGZvcm06IGFueSwgcGFydDogYW55ID0gdGhpcy5zY2hlbWEpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0U2NoZW1hVGVtcGxhdGVcIiwgYXJndW1lbnRzKTtcbiAgICBsZXQgdGVtcGxhdGU6IHN0cmluZztcbiAgICBjb25zdCBzY2hlbWEgPSBwYXJ0LnByb3BlcnRpZXNba2V5XTtcbiAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHRlbXBsYXRlID0gYDxzZi1udW1iZXJcbiAgICAgICAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2tleX1cIlxuICAgICAgICBtb2RlbC50d28td2F5PVwibW9kZWwuJHtrZXl9XCJcbiAgICAgICAgdGl0bGU9XCIke2Zvcm0uJHRpdGxlIHx8IHNjaGVtYS50aXRsZSB8fCB0aGlzLnRvVGl0bGUoa2V5KX1cIlxuICAgICAgICByZXF1aXJlZC5iaW5kPVwiJHt0aGlzLmlzUmVxdWlyZWQoa2V5LCBwYXJ0KX1cIj48L3NmLW51bWJlcj5cXHJcXG5gO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgdGVtcGxhdGUgPSBgPHNmLXRleHRcbiAgICAgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtrZXl9XCJcbiAgICAgIG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2tleX1cIlxuICAgICAgdGl0bGU9XCIke2Zvcm0uJHRpdGxlIHx8IHNjaGVtYS50aXRsZSB8fCB0aGlzLnRvVGl0bGUoa2V5KX1cIlxuICAgICAgcmVxdWlyZWQuYmluZD1cIiR7dGhpcy5pc1JlcXVpcmVkKGtleSwgcGFydCl9XCI+PC9zZi10ZXh0PlxcclxcbmA7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG4gIH1cblxuXG4gIGlzUmVxdWlyZWQoa2V5OiBzdHJpbmcsIHBhcnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJpc1JlcXVpcmVkXCIsIGFyZ3VtZW50cyk7XG4gICAgbGV0IHJlcXVpcmVkID0gZmFsc2U7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGFydC5yZXF1aXJlZCkpIHtcbiAgICAgIHJlcXVpcmVkID0gcGFydC5yZXF1aXJlZFxuICAgICAgICAuc29tZSgoeCkgPT4geCA9PT0ga2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcXVpcmVkO1xuICB9XG5cbiAgdG9UaXRsZShrZXk6IHN0cmluZykge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJ0b1RpdGxlXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKGtleSkge1xuICAgICAgcmV0dXJuIGtleVxuICAgICAgICAucmVwbGFjZSgvKFtBLVpdKS9nLCBcIiAkMVwiKVxuICAgICAgICAucmVwbGFjZSgvXi4vLCAoc3RyKSA9PiBzdHIudG9VcHBlckNhc2UoKSk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
