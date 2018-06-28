var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-validation", "aurelia-framework", "../services/schema-form-configuration", "../resources/logger", "./form-object-controller"], function (require, exports, aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, logger_1, form_object_controller_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var AuJsonSchemaForm = /** @class */ (function () {
        function AuJsonSchemaForm(validationControllerFactory, configuration, logger) {
            this.logger = logger;
            this.log = logger.info;
            this.validationController = validationControllerFactory.createForCurrentScope();
            this.validationController.addRenderer(configuration.validationRenderer);
        }
        AuJsonSchemaForm.prototype.bind = function () {
            this.log("bind", arguments);
            this.buildForm();
        };
        AuJsonSchemaForm.prototype.schemaChanged = function () {
            this.log("schemaChanged", arguments);
            this.buildForm();
        };
        AuJsonSchemaForm.prototype.formChanged = function () {
            this.log("formChanged", arguments);
            this.buildForm();
        };
        AuJsonSchemaForm.prototype.buildForm = function () {
            if (this.formView) {
                this.formView = null;
            }
            this.log("buildForm", this.options);
            this.buildViewStrategy();
        };
        AuJsonSchemaForm.prototype.buildViewStrategy = function () {
            var _this = this;
            this.log("buildViewStrategy");
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
            this.formController = new form_object_controller_1.FormObjectController(this.logger, this.options, this.validationController);
        };
        AuJsonSchemaForm.prototype.getSchemaTemplate = function (key, form, part) {
            if (part === void 0) { part = this.schema; }
            this.log("getSchemaTemplate", arguments);
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
            this.log("isRequired", arguments);
            var required = false;
            if (Array.isArray(part.required)) {
                required = part.required
                    .some(function (x) { return x === key; });
            }
            return required;
        };
        AuJsonSchemaForm.prototype.toTitle = function (key) {
            this.log("toTitle", arguments);
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
            aurelia_framework_1.inject(aurelia_validation_1.ValidationControllerFactory, schema_form_configuration_1.SchemaFormConfiguration, logger_1.SchemaFormLogger),
            aurelia_framework_1.customElement("au-json-schema-form"),
            __metadata("design:paramtypes", [aurelia_validation_1.ValidationControllerFactory,
                schema_form_configuration_1.SchemaFormConfiguration,
                logger_1.SchemaFormLogger])
        ], AuJsonSchemaForm);
        return AuJsonSchemaForm;
    }());
    exports.AuJsonSchemaForm = AuJsonSchemaForm;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFhQTtRQWlCRSwwQkFDRSwyQkFBd0QsRUFDeEQsYUFBc0MsRUFDOUIsTUFBd0I7WUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7WUFFaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsR0FBRywyQkFBMkIsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQ2hGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDMUUsQ0FBQztRQUVELCtCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVELHdDQUFhLEdBQWI7WUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVELHNDQUFXLEdBQVg7WUFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbkIsQ0FBQztRQUVELG9DQUFTLEdBQVQ7WUFDRSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO2FBQ3RCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3BDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzNCLENBQUM7UUFFRCw0Q0FBaUIsR0FBakI7WUFBQSxpQkFrQkM7WUFqQkMsSUFB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LE9BQU8sQ0FBQyxJQUFJLEVBQUUsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsV0FBVyxFQUFFLEVBQWpCLENBQWlCLENBQUMsQ0FBQzthQUM5QztRQUNILENBQUM7UUE3R1M7WUFBVCw0QkFBUTs7d0RBQWE7UUFFWjtZQUFULDRCQUFROztzREFBTTtRQUVMO1lBQVQsNEJBQVE7O3VEQUFPO1FBRU47WUFBVCw0QkFBUTs7eURBQXVCO1FBUHJCLGdCQUFnQjtZQU41QiwwQkFBTSxDQUNMLGdEQUEyQixFQUMzQixtREFBdUIsRUFDdkIseUJBQWdCLENBQ2pCO1lBQ0EsaUNBQWEsQ0FBQyxxQkFBcUIsQ0FBQzs2Q0FtQkosZ0RBQTJCO2dCQUN6QyxtREFBdUI7Z0JBQ3RCLHlCQUFnQjtXQXBCdkIsZ0JBQWdCLENBK0c1QjtRQUFELHVCQUFDO0tBL0dELEFBK0dDLElBQUE7SUEvR1ksNENBQWdCIiwiZmlsZSI6ImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeSwgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBpbmplY3QsIGJpbmRhYmxlLCBJbmxpbmVWaWV3U3RyYXRlZ3ksIGN1c3RvbUVsZW1lbnQsIENvbnRhaW5lciB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IEZvcm1PYmplY3RDb250cm9sbGVyIH0gZnJvbSBcIi4vZm9ybS1vYmplY3QtY29udHJvbGxlclwiO1xuXG5AaW5qZWN0KFxuICBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBTY2hlbWFGb3JtTG9nZ2VyXG4pXG5AY3VzdG9tRWxlbWVudChcImF1LWpzb24tc2NoZW1hLWZvcm1cIilcbmV4cG9ydCBjbGFzcyBBdUpzb25TY2hlbWFGb3JtIHtcbiAgQGJpbmRhYmxlIHNjaGVtYTogYW55O1xuXG4gIEBiaW5kYWJsZSBmb3JtO1xuXG4gIEBiaW5kYWJsZSBtb2RlbDtcblxuICBAYmluZGFibGUgb3B0aW9uczogSUZvcm1PcHRpb25zO1xuXG4gIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcjtcblxuICBmb3JtVmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xuXG4gIGZvcm1Db250cm9sbGVyOiBGb3JtT2JqZWN0Q29udHJvbGxlcjtcblxuICBwcml2YXRlIGxvZzogKG1lc3NhZ2U6IHN0cmluZywgLi4ucmVzdDogYW55W10pID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5OiBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksXG4gICAgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcbiAgKSB7XG4gICAgdGhpcy5sb2cgPSBsb2dnZXIuaW5mbztcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyID0gdmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LmNyZWF0ZUZvckN1cnJlbnRTY29wZSgpO1xuICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIuYWRkUmVuZGVyZXIoY29uZmlndXJhdGlvbi52YWxpZGF0aW9uUmVuZGVyZXIpO1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZyhcImJpbmRcIiwgYXJndW1lbnRzKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgc2NoZW1hQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmxvZyhcInNjaGVtYUNoYW5nZWRcIiwgYXJndW1lbnRzKTtcbiAgICB0aGlzLmJ1aWxkRm9ybSgpO1xuICB9XG5cbiAgZm9ybUNoYW5nZWQoKSB7XG4gICAgdGhpcy5sb2coXCJmb3JtQ2hhbmdlZFwiLCBhcmd1bWVudHMpO1xuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBidWlsZEZvcm0oKSB7XG4gICAgaWYgKHRoaXMuZm9ybVZpZXcpIHtcbiAgICAgIHRoaXMuZm9ybVZpZXcgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmxvZyhcImJ1aWxkRm9ybVwiLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGJ1aWxkVmlld1N0cmF0ZWd5KCkge1xuICAgIHRoaXMubG9nKFwiYnVpbGRWaWV3U3RyYXRlZ3lcIik7XG4gICAgbGV0IHZpZXdTdHJhdGVneSA9IFwiXCI7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHRoaXMuZm9ybSk7XG4gICAga2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIHN3aXRjaCAoa2V5WzBdKSB7XG4gICAgICAgIGNhc2UgXCJAXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCIkXCI6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSB0aGlzLmdldFNjaGVtYVRlbXBsYXRlKGtleSwgdGhpcy5mb3JtW2tleV0pO1xuICAgICAgICAgIGlmICh0ZW1wbGF0ZSkgeyB2aWV3U3RyYXRlZ3kgKz0gdGVtcGxhdGU7IH1cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmZvcm1WaWV3ID0gbmV3IElubGluZVZpZXdTdHJhdGVneShgPHRlbXBsYXRlPiR7dmlld1N0cmF0ZWd5fTwvdGVtcGxhdGU+YCk7XG4gICAgdGhpcy5mb3JtQ29udHJvbGxlciA9IG5ldyBGb3JtT2JqZWN0Q29udHJvbGxlcih0aGlzLmxvZ2dlciwgdGhpcy5vcHRpb25zLCB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyKTtcbiAgfVxuXG4gIGdldFNjaGVtYVRlbXBsYXRlKGtleTogc3RyaW5nLCBmb3JtOiBhbnksIHBhcnQ6IGFueSA9IHRoaXMuc2NoZW1hKSB7XG4gICAgdGhpcy5sb2coXCJnZXRTY2hlbWFUZW1wbGF0ZVwiLCBhcmd1bWVudHMpO1xuICAgIGxldCB0ZW1wbGF0ZTogc3RyaW5nO1xuICAgIGNvbnN0IHNjaGVtYSA9IHBhcnQucHJvcGVydGllc1trZXldO1xuICAgIHN3aXRjaCAoc2NoZW1hLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJudW1iZXJcIjpcbiAgICAgICAgdGVtcGxhdGUgPSBgPHNmLW51bWJlclxuICAgICAgICBzY2hlbWEuYmluZD1cInNjaGVtYS5wcm9wZXJ0aWVzLiR7a2V5fVwiXG4gICAgICAgIG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2tleX1cIlxuICAgICAgICB0aXRsZT1cIiR7Zm9ybS4kdGl0bGUgfHwgc2NoZW1hLnRpdGxlIHx8IHRoaXMudG9UaXRsZShrZXkpfVwiXG4gICAgICAgIHJlcXVpcmVkLmJpbmQ9XCIke3RoaXMuaXNSZXF1aXJlZChrZXksIHBhcnQpfVwiPjwvc2YtbnVtYmVyPlxcclxcbmA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN0cmluZ1wiOlxuICAgICAgICB0ZW1wbGF0ZSA9IGA8c2YtdGV4dFxuICAgICAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2tleX1cIlxuICAgICAgbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7a2V5fVwiXG4gICAgICB0aXRsZT1cIiR7Zm9ybS4kdGl0bGUgfHwgc2NoZW1hLnRpdGxlIHx8IHRoaXMudG9UaXRsZShrZXkpfVwiXG4gICAgICByZXF1aXJlZC5iaW5kPVwiJHt0aGlzLmlzUmVxdWlyZWQoa2V5LCBwYXJ0KX1cIj48L3NmLXRleHQ+XFxyXFxuYDtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGlzUmVxdWlyZWQoa2V5OiBzdHJpbmcsIHBhcnQ6IGFueSk6IGJvb2xlYW4ge1xuICAgIHRoaXMubG9nKFwiaXNSZXF1aXJlZFwiLCBhcmd1bWVudHMpO1xuICAgIGxldCByZXF1aXJlZCA9IGZhbHNlO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhcnQucmVxdWlyZWQpKSB7XG4gICAgICByZXF1aXJlZCA9IHBhcnQucmVxdWlyZWRcbiAgICAgICAgLnNvbWUoKHgpID0+IHggPT09IGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXF1aXJlZDtcbiAgfVxuXG4gIHRvVGl0bGUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZyhcInRvVGl0bGVcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
