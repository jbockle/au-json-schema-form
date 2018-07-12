System.register(["aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory", "../../resources/logger", "../../services/form-instances"], function (exports_1, context_1) {
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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1, form_instances_1, SfBoolean;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (guid_1_1) {
                guid_1 = guid_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            },
            function (rules_factory_1_1) {
                rules_factory_1 = rules_factory_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (form_instances_1_1) {
                form_instances_1 = form_instances_1_1;
            }
        ],
        execute: function () {
            SfBoolean = /** @class */ (function () {
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
            exports_1("SfBoolean", SfBoolean);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkE4QkUsbUJBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0IsRUFDeEIsYUFBNEI7b0JBSDdCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtvQkFDdEMsVUFBSyxHQUFMLEtBQUssQ0FBYztvQkFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBQ3hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO29CQVZ0QyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUU1QixTQUFJLEdBQUcsU0FBUyxDQUFDO2dCQVNiLENBQUM7Z0JBRUwsNEJBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO29CQUN2QyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLGdCQUFnQixFQUFFO3dCQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO3FCQUMvRDtnQkFDSCxDQUFDO2dCQUVELHdCQUFJLEdBQUo7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDakUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7b0JBQzFELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUF1QyxDQUFDO29CQUNoRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDeEIsQ0FBQztnQkEvQlM7b0JBQVQsNEJBQVE7O3VEQUFxQjtnQkFDcEI7b0JBQVQsNEJBQVE7O3dEQUFnQjtnQkFDZjtvQkFBVCw0QkFBUTs7K0RBQXNCO2dCQUhwQixTQUFTO29CQVByQiwwQkFBTSxDQUNMLG1EQUF1QixFQUN2Qiw0QkFBWSxFQUNaLHlCQUFnQixFQUNoQiw4QkFBYSxDQUNkO29CQUNBLGlDQUFhLENBQUMsWUFBWSxDQUFDO3FEQWVGLG1EQUF1Qjt3QkFDL0IsNEJBQVk7d0JBQ1YseUJBQWdCO3dCQUNULDhCQUFhO21CQWpCM0IsU0FBUyxDQWlDckI7Z0JBQUQsZ0JBQUM7YUFqQ0QsQUFpQ0M7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL2Jvb2xlYW4vc2YtYm9vbGVhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XHJcblxyXG5AaW5qZWN0KFxyXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gIFJ1bGVzRmFjdG9yeSxcclxuICBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gIEZvcm1JbnN0YW5jZXNcclxuKVxyXG5AY3VzdG9tRWxlbWVudChcInNmLWJvb2xlYW5cIilcclxuZXhwb3J0IGNsYXNzIFNmQm9vbGVhbiB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBib29sZWFuO1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgc2NoZW1hOiBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSBcImJvb2xlYW5cIjtcclxuXHJcbiAgcHJpdmF0ZSBmb3JtQ3RybDogSUZvcm1JbnN0YW5jZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgICBwdWJsaWMgcnVsZXM6IFJ1bGVzRmFjdG9yeSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2Ytc3RyaW5nLWF0dGFjaGVkXCIpO1xyXG4gICAgaWYgKHRoaXMuZm9ybUN0cmwuZm9ybU9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xyXG4gICAgICB0aGlzLmZvcm1DdHJsLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKHsgb2JqZWN0OiB0aGlzIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1ib29sZWFuXCIsIHRoaXMuZm9ybSwgdGhpcy5tb2RlbCwgYXJndW1lbnRzKTtcclxuICAgIHRoaXMuZm9ybUN0cmwgPSB0aGlzLmZvcm1JbnN0YW5jZXMuZ2V0KHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIHRoaXMuc2NoZW1hID0gdGhpcy5mb3JtLiRzY2hlbWEgYXMgSUpzb25TY2hlbWFCb29sZWFuRGVmaW5pdGlvbjtcclxuICAgIHRoaXMucnVsZXMuYmluZCh0aGlzKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
