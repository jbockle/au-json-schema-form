System.register([], function (exports_1, context_1) {
    "use strict";
    var FormController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            FormController = /** @class */ (function () {
                function FormController(logger, options, validationController) {
                    this.logger = logger;
                    this.options = options;
                    this.validationController = validationController;
                    this.log = this.logger.info;
                    this.log("building form controller", arguments);
                }
                FormController.prototype.activate = function (params, routeConfig, navigationInstruction) {
                    this.logger.debug("schemaform-activate", { params: params, routeConfig: routeConfig, navigationInstruction: navigationInstruction });
                };
                FormController.prototype.bind = function (bindingContext, overrideContext) {
                    this.logger.info("form-controller binded", { bindingContext: bindingContext, overrideContext: overrideContext });
                };
                FormController.prototype.attached = function () {
                    this.logger.info("schemaform-attached");
                    this.validateOnRender();
                };
                FormController.prototype.detached = function () {
                    this.logger.info("schemaform-detached");
                };
                FormController.prototype.validateOnRender = function () {
                    if (this.options.validateOnRender) {
                        this.logger.info("schemaform-attached:validate");
                        this.validationController.validate();
                    }
                };
                return FormController;
            }());
            exports_1("FormController", FormController);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFLQTtnQkFPRSx3QkFDVSxNQUF3QixFQUN6QixPQUFxQixFQUNyQixvQkFBMEM7b0JBRnpDLFdBQU0sR0FBTixNQUFNLENBQWtCO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFjO29CQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO29CQUVqRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELGlDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQjtvQkFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxxQkFBcUIsdUJBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQzNGLENBQUM7Z0JBRUQsNkJBQUksR0FBSixVQUFLLGNBQXNCLEVBQUUsZUFBdUI7b0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsY0FBYyxnQkFBQSxFQUFFLGVBQWUsaUJBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQ2xGLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQseUNBQWdCLEdBQWhCO29CQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN0QztnQkFDSCxDQUFDO2dCQUNILHFCQUFDO1lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vZm9ybS1jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcbmltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyLCBWYWxpZGF0ZUV2ZW50IH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xsZXIge1xuXG4gIHB1YmxpYyBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbjtcbiAgcHVibGljIG1vZGVsOiBhbnk7XG5cbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHB1YmxpYyBvcHRpb25zOiBJRm9ybU9wdGlvbnMsXG4gICAgcHVibGljIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlclxuICApIHtcbiAgICB0aGlzLmxvZyA9IHRoaXMubG9nZ2VyLmluZm87XG4gICAgdGhpcy5sb2coXCJidWlsZGluZyBmb3JtIGNvbnRyb2xsZXJcIiwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcywgcm91dGVDb25maWcsIG5hdmlnYXRpb25JbnN0cnVjdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwic2NoZW1hZm9ybS1hY3RpdmF0ZVwiLCB7IHBhcmFtcywgcm91dGVDb25maWcsIG5hdmlnYXRpb25JbnN0cnVjdGlvbiB9KTtcbiAgfVxuXG4gIGJpbmQoYmluZGluZ0NvbnRleHQ6IG9iamVjdCwgb3ZlcnJpZGVDb250ZXh0OiBvYmplY3QpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZm9ybS1jb250cm9sbGVyIGJpbmRlZFwiLCB7IGJpbmRpbmdDb250ZXh0LCBvdmVycmlkZUNvbnRleHQgfSk7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2NoZW1hZm9ybS1hdHRhY2hlZFwiKTtcbiAgICB0aGlzLnZhbGlkYXRlT25SZW5kZXIoKTtcbiAgfVxuXG4gIGRldGFjaGVkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWRldGFjaGVkXCIpO1xuICB9XG5cbiAgdmFsaWRhdGVPblJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWF0dGFjaGVkOnZhbGlkYXRlXCIpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
