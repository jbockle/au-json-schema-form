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
    var aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1, form_instances_1, SfString;
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
            SfString = /** @class */ (function () {
                function SfString(configuration, rules, logger, formInstances) {
                    this.configuration = configuration;
                    this.rules = rules;
                    this.logger = logger;
                    this.formInstances = formInstances;
                    this.id = guid_1.Guid.newGuid();
                    this.kind = "string";
                    this.view = configuration.templates.string;
                }
                SfString.prototype.bind = function () {
                    this.logger.info("sf-string", { form: this.form, model: this.model }, arguments);
                    this.rules.bind(this);
                    this.determineViewStrategy();
                };
                SfString.prototype.determineViewStrategy = function () {
                    if (this.form.$altTemplate) {
                        this.view = this.form.$altTemplate;
                    }
                    else if (this.form.$schema.enum && this.form.$schema.enum.length <= 5) {
                        this.view = this.configuration.templates.stringRadioEnum;
                    }
                    else if (this.form.$schema.enum) {
                        this.view = this.configuration.templates.stringSelectEnum;
                    }
                    else if (["date-time", "date", "time"].indexOf(this.form.$schema.format) > -1) {
                        if (this.configuration.templates.formats
                            && this.configuration.templates.formats[this.form.$schema.format]) {
                            this.view = this.configuration.templates.formats[this.form.$schema.format];
                        }
                    }
                };
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", Object)
                ], SfString.prototype, "form", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfString.prototype, "model", void 0);
                __decorate([
                    aurelia_framework_1.bindable,
                    __metadata("design:type", String)
                ], SfString.prototype, "formInstance", void 0);
                SfString = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
                    aurelia_framework_1.customElement("sf-string"),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                        rules_factory_1.RulesFactory,
                        logger_1.SchemaFormLogger,
                        form_instances_1.FormInstances])
                ], SfString);
                return SfString;
            }());
            exports_1("SfString", SfString);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vdGV4dC9zZi1zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQTJCRSxrQkFDUyxhQUFzQyxFQUN0QyxLQUFtQixFQUNsQixNQUF3QixFQUN4QixhQUE0QjtvQkFIN0Isa0JBQWEsR0FBYixhQUFhLENBQXlCO29CQUN0QyxVQUFLLEdBQUwsS0FBSyxDQUFjO29CQUNsQixXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFDeEIsa0JBQWEsR0FBYixhQUFhLENBQWU7b0JBVnRDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7b0JBRTVCLFNBQUksR0FBRyxRQUFRLENBQUM7b0JBVWQsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztnQkFDN0MsQ0FBQztnQkFFRCx1QkFBSSxHQUFKO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ2pGLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztnQkFDL0IsQ0FBQztnQkFFTyx3Q0FBcUIsR0FBN0I7b0JBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQztxQkFDcEM7eUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0JBQ3ZFLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDO3FCQUMxRDt5QkFBTSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRTt3QkFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQztxQkFDM0Q7eUJBQU0sSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO3dCQUMvRSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU87K0JBQ25DLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTs0QkFDbkUsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7eUJBQzVFO3FCQUNGO2dCQUNILENBQUM7Z0JBdENTO29CQUFULDRCQUFROztzREFBcUI7Z0JBQ3BCO29CQUFULDRCQUFROzt1REFBZTtnQkFDZDtvQkFBVCw0QkFBUTs7OERBQXNCO2dCQUhwQixRQUFRO29CQVBwQiwwQkFBTSxDQUNMLG1EQUF1QixFQUN2Qiw0QkFBWSxFQUNaLHlCQUFnQixFQUNoQiw4QkFBYSxDQUNkO29CQUNBLGlDQUFhLENBQUMsV0FBVyxDQUFDO3FEQWFELG1EQUF1Qjt3QkFDL0IsNEJBQVk7d0JBQ1YseUJBQWdCO3dCQUNULDhCQUFhO21CQWYzQixRQUFRLENBd0NwQjtnQkFBRCxlQUFDO2FBeENELEFBd0NDOztRQUNELENBQUMiLCJmaWxlIjoiZm9ybS90ZXh0L3NmLXN0cmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYVN0cmluZ0RlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XG5cbkBpbmplY3QoXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICBSdWxlc0ZhY3RvcnksXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXG4gIEZvcm1JbnN0YW5jZXNcbilcbkBjdXN0b21FbGVtZW50KFwic2Ytc3RyaW5nXCIpXG5leHBvcnQgY2xhc3MgU2ZTdHJpbmcge1xuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcbiAgQGJpbmRhYmxlIG1vZGVsOiBzdHJpbmc7XG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwic3RyaW5nXCI7XG5cbiAgdmlldztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXG4gICAgcHVibGljIHJ1bGVzOiBSdWxlc0ZhY3RvcnksXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXG4gICkge1xuICAgIHRoaXMudmlldyA9IGNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLnN0cmluZztcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLXN0cmluZ1wiLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwgfSwgYXJndW1lbnRzKTtcbiAgICB0aGlzLnJ1bGVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXRlcm1pbmVWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIHByaXZhdGUgZGV0ZXJtaW5lVmlld1N0cmF0ZWd5KCkge1xuICAgIGlmICh0aGlzLmZvcm0uJGFsdFRlbXBsYXRlKSB7XG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmZvcm0uJGFsdFRlbXBsYXRlO1xuICAgIH0gZWxzZSBpZiAodGhpcy5mb3JtLiRzY2hlbWEuZW51bSAmJiB0aGlzLmZvcm0uJHNjaGVtYS5lbnVtLmxlbmd0aCA8PSA1KSB7XG4gICAgICB0aGlzLnZpZXcgPSB0aGlzLmNvbmZpZ3VyYXRpb24udGVtcGxhdGVzLnN0cmluZ1JhZGlvRW51bTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZm9ybS4kc2NoZW1hLmVudW0pIHtcbiAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuc3RyaW5nU2VsZWN0RW51bTtcbiAgICB9IGVsc2UgaWYgKFtcImRhdGUtdGltZVwiLCBcImRhdGVcIiwgXCJ0aW1lXCJdLmluZGV4T2YodGhpcy5mb3JtLiRzY2hlbWEuZm9ybWF0KSA+IC0xKSB7XG4gICAgICBpZiAodGhpcy5jb25maWd1cmF0aW9uLnRlbXBsYXRlcy5mb3JtYXRzXG4gICAgICAgICYmIHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuZm9ybWF0c1t0aGlzLmZvcm0uJHNjaGVtYS5mb3JtYXRdKSB7XG4gICAgICAgIHRoaXMudmlldyA9IHRoaXMuY29uZmlndXJhdGlvbi50ZW1wbGF0ZXMuZm9ybWF0c1t0aGlzLmZvcm0uJHNjaGVtYS5mb3JtYXRdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
