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
var aurelia_framework_1 = require("aurelia-framework");
var guid_1 = require("../../resources/guid");
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var rules_factory_1 = require("../../rules/rules-factory");
var logger_1 = require("../../resources/logger");
var form_instances_1 = require("../../services/form-instances");
var SfBoolean = /** @class */ (function () {
    function SfBoolean(configuration, rules, logger, formInstances) {
        this.configuration = configuration;
        this.rules = rules;
        this.logger = logger;
        this.formInstances = formInstances;
        this.id = guid_1.Guid.newGuid();
        this.kind = "boolean";
    }
    SfBoolean.prototype.attached = function () {
        this.logger.info("sf-string-attached");
        if (this.formCtrl.formOptions.validateOnRender) {
            this.formCtrl.validationController.validate({ object: this });
        }
    };
    SfBoolean.prototype.bind = function () {
        this.logger.info("sf-boolean", this.form, this.model, arguments);
        this.formCtrl = this.formInstances.get(this.formInstance);
        this.schema = this.form.$schema;
        this.rules.bind(this);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfBoolean.prototype, "form", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Boolean)
    ], SfBoolean.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfBoolean.prototype, "formInstance", void 0);
    SfBoolean = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
        aurelia_framework_1.customElement("sf-boolean"),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
            rules_factory_1.RulesFactory,
            logger_1.SchemaFormLogger,
            form_instances_1.FormInstances])
    ], SfBoolean);
    return SfBoolean;
}());
exports.SfBoolean = SfBoolean;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQW9FO0FBQ3BFLDZDQUE0QztBQUM1QyxzRkFBbUY7QUFDbkYsMkRBQXlEO0FBRXpELGlEQUEwRDtBQUUxRCxnRUFBOEQ7QUFVOUQ7SUFhRSxtQkFDUyxhQUFzQyxFQUN0QyxLQUFtQixFQUNsQixNQUF3QixFQUN4QixhQUE0QjtRQUg3QixrQkFBYSxHQUFiLGFBQWEsQ0FBeUI7UUFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQVZ0QyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLFNBQUksR0FBRyxTQUFTLENBQUM7SUFTYixDQUFDO0lBRUwsNEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDdkMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQztJQUVELHdCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUF1QyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUEvQlM7UUFBVCw0QkFBUTs7MkNBQXFCO0lBQ3BCO1FBQVQsNEJBQVE7OzRDQUFnQjtJQUNmO1FBQVQsNEJBQVE7O21EQUFzQjtJQUhwQixTQUFTO1FBUHJCLDBCQUFNLENBQ0wsbURBQXVCLEVBQ3ZCLDRCQUFZLEVBQ1oseUJBQWdCLEVBQ2hCLDhCQUFhLENBQ2Q7UUFDQSxpQ0FBYSxDQUFDLFlBQVksQ0FBQzt5Q0FlRixtREFBdUI7WUFDL0IsNEJBQVk7WUFDVix5QkFBZ0I7WUFDVCw4QkFBYTtPQWpCM0IsU0FBUyxDQWlDckI7SUFBRCxnQkFBQztDQWpDRCxBQWlDQyxJQUFBO0FBakNZLDhCQUFTIiwiZmlsZSI6ImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUVsZW1lbnQsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgUnVsZXNGYWN0b3J5IH0gZnJvbSBcIi4uLy4uL3J1bGVzL3J1bGVzLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcbmltcG9ydCB7IEZvcm1JbnN0YW5jZXMgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1pbnN0YW5jZXNcIjtcclxuaW1wb3J0IHsgSUZvcm1JbnN0YW5jZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0taW5zdGFuY2VcIjtcclxuXHJcbkBpbmplY3QoXHJcbiAgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgUnVsZXNGYWN0b3J5LFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KFwic2YtYm9vbGVhblwiKVxyXG5leHBvcnQgY2xhc3MgU2ZCb29sZWFuIHtcclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuICBAYmluZGFibGUgbW9kZWw6IGJvb2xlYW47XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBzY2hlbWE6IElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb247XHJcblxyXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcclxuXHJcbiAga2luZCA9IFwiYm9vbGVhblwiO1xyXG5cclxuICBwcml2YXRlIGZvcm1DdHJsOiBJRm9ybUluc3RhbmNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgICBwcml2YXRlIGZvcm1JbnN0YW5jZXM6IEZvcm1JbnN0YW5jZXNcclxuICApIHsgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1zdHJpbmctYXR0YWNoZWRcIik7XHJcbiAgICBpZiAodGhpcy5mb3JtQ3RybC5mb3JtT3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMuZm9ybUN0cmwudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoeyBvYmplY3Q6IHRoaXMgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWJvb2xlYW5cIiwgdGhpcy5mb3JtLCB0aGlzLm1vZGVsLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYSBhcyBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uO1xyXG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
