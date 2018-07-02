System.register(["aurelia-validation", "aurelia-framework", "../services/schema-form-configuration", "../resources/logger", "./form-controller"], function (exports_1, context_1) {
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
    var aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, logger_1, form_controller_1, AuJsonSchemaForm;
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
            function (logger_1_1) {
                logger_1 = logger_1_1;
            },
            function (form_controller_1_1) {
                form_controller_1 = form_controller_1_1;
            }
        ],
        execute: function () {
            AuJsonSchemaForm = /** @class */ (function () {
                function AuJsonSchemaForm(validationControllerFactory, configuration, logger) {
                    this.logger = logger;
                    this.log = logger.info;
                    this.validationController = validationControllerFactory.createForCurrentScope();
                    this.validationController.addRenderer(configuration.validationRenderer);
                }
                AuJsonSchemaForm.prototype.bind = function () {
                    this.log("bind", arguments);
                    if (this.schema.type !== "object" && this.schema.type !== "array") {
                        throw new Error("The schema must start with an object or array");
                    }
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
                    this.log("buildViewStrategy");
                    this.formView = new aurelia_framework_1.InlineViewStrategy("<template><sf-" + this.schema.type + " form.bind=\"form\" model.two-way=\"model\" schema.bind=\"schema\" /></template>");
                    this.formController = new form_controller_1.FormController(this.logger, this.options, this.validationController);
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
            exports_1("AuJsonSchemaForm", AuJsonSchemaForm);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXUtanNvbi1zY2hlbWEtZm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBZ0NFLDBCQUNFLDJCQUF3RCxFQUN4RCxhQUFzQyxFQUM5QixNQUF3QjtvQkFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7b0JBRWhDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQztvQkFDdkIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLDJCQUEyQixDQUFDLHFCQUFxQixFQUFFLENBQUM7b0JBQ2hGLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUM7Z0JBQzFFLENBQUM7Z0JBRUQsK0JBQUksR0FBSjtvQkFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEtBQUssT0FBTyxFQUFFO3dCQUNqRSxNQUFNLElBQUksS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUM7cUJBQ2xFO29CQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbkIsQ0FBQztnQkFFRCxvQ0FBUyxHQUFUO29CQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTt3QkFDakIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7cUJBQ3RCO29CQUNELElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDcEMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7Z0JBQzNCLENBQUM7Z0JBRUQsNENBQWlCLEdBQWpCO29CQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDOUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLHNDQUFrQixDQUNwQyxtQkFBaUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLHFGQUE0RSxDQUFDLENBQUM7b0JBQ2pILElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxnQ0FBYyxDQUN0QyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7Z0JBQzFELENBQUM7Z0JBaERTO29CQUFULDRCQUFROztnRUFBK0I7Z0JBRTlCO29CQUFULDRCQUFROzs4REFBcUI7Z0JBRXBCO29CQUFULDRCQUFROzsrREFBTztnQkFFTjtvQkFBVCw0QkFBUTs7aUVBQXVCO2dCQVByQixnQkFBZ0I7b0JBTjVCLDBCQUFNLENBQ0wsZ0RBQTJCLEVBQzNCLG1EQUF1QixFQUN2Qix5QkFBZ0IsQ0FDakI7b0JBQ0EsaUNBQWEsQ0FBQyxxQkFBcUIsQ0FBQztxREFtQkosZ0RBQTJCO3dCQUN6QyxtREFBdUI7d0JBQ3RCLHlCQUFnQjttQkFwQnZCLGdCQUFnQixDQWtENUI7Z0JBQUQsdUJBQUM7YUFsREQsQUFrREM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL2F1LWpzb24tc2NoZW1hLWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlckZhY3RvcnksIFZhbGlkYXRpb25Db250cm9sbGVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5qZWN0LCBiaW5kYWJsZSwgSW5saW5lVmlld1N0cmF0ZWd5LCBjdXN0b21FbGVtZW50LCBDb250YWluZXIgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBGb3JtQ29udHJvbGxlciB9IGZyb20gXCIuL2Zvcm0tY29udHJvbGxlclwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IElKc29uU2NoZW1hRGVmaW5pdGlvbiB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcblxuQGluamVjdChcbiAgVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcbiAgU2NoZW1hRm9ybUxvZ2dlclxuKVxuQGN1c3RvbUVsZW1lbnQoXCJhdS1qc29uLXNjaGVtYS1mb3JtXCIpXG5leHBvcnQgY2xhc3MgQXVKc29uU2NoZW1hRm9ybSB7XG4gIEBiaW5kYWJsZSBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcblxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcblxuICBAYmluZGFibGUgbW9kZWw7XG5cbiAgQGJpbmRhYmxlIG9wdGlvbnM6IElGb3JtT3B0aW9ucztcblxuICB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXI7XG5cbiAgZm9ybVZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcblxuICBmb3JtQ29udHJvbGxlcjogRm9ybUNvbnRyb2xsZXI7XG5cbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeTogVmFsaWRhdGlvbkNvbnRyb2xsZXJGYWN0b3J5LFxuICAgIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyXG4gICkge1xuICAgIHRoaXMubG9nID0gbG9nZ2VyLmluZm87XG4gICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlciA9IHZhbGlkYXRpb25Db250cm9sbGVyRmFjdG9yeS5jcmVhdGVGb3JDdXJyZW50U2NvcGUoKTtcbiAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLmFkZFJlbmRlcmVyKGNvbmZpZ3VyYXRpb24udmFsaWRhdGlvblJlbmRlcmVyKTtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5sb2coXCJiaW5kXCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHRoaXMuc2NoZW1hLnR5cGUgIT09IFwib2JqZWN0XCIgJiYgdGhpcy5zY2hlbWEudHlwZSAhPT0gXCJhcnJheVwiKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc2NoZW1hIG11c3Qgc3RhcnQgd2l0aCBhbiBvYmplY3Qgb3IgYXJyYXlcIik7XG4gICAgfVxuICAgIHRoaXMuYnVpbGRGb3JtKCk7XG4gIH1cblxuICBidWlsZEZvcm0oKSB7XG4gICAgaWYgKHRoaXMuZm9ybVZpZXcpIHtcbiAgICAgIHRoaXMuZm9ybVZpZXcgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmxvZyhcImJ1aWxkRm9ybVwiLCB0aGlzLm9wdGlvbnMpO1xuICAgIHRoaXMuYnVpbGRWaWV3U3RyYXRlZ3koKTtcbiAgfVxuXG4gIGJ1aWxkVmlld1N0cmF0ZWd5KCkge1xuICAgIHRoaXMubG9nKFwiYnVpbGRWaWV3U3RyYXRlZ3lcIik7XG4gICAgdGhpcy5mb3JtVmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koXG4gICAgICBgPHRlbXBsYXRlPjxzZi0ke3RoaXMuc2NoZW1hLnR5cGV9IGZvcm0uYmluZD1cImZvcm1cIiBtb2RlbC50d28td2F5PVwibW9kZWxcIiBzY2hlbWEuYmluZD1cInNjaGVtYVwiIC8+PC90ZW1wbGF0ZT5gKTtcbiAgICB0aGlzLmZvcm1Db250cm9sbGVyID0gbmV3IEZvcm1Db250cm9sbGVyKFxuICAgICAgdGhpcy5sb2dnZXIsIHRoaXMub3B0aW9ucywgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlcik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
