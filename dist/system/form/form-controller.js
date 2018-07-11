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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFNQTtnQkFPRSx3QkFDVSxNQUF3QixFQUN6QixPQUFxQixFQUNyQixvQkFBMEM7b0JBRnpDLFdBQU0sR0FBTixNQUFNLENBQWtCO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFjO29CQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO29CQUVqRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNsRCxDQUFDO2dCQUVELGlDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQjtvQkFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxxQkFBcUIsdUJBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQzNGLENBQUM7Z0JBRUQsNkJBQUksR0FBSixVQUFLLGNBQXNCLEVBQUUsZUFBdUI7b0JBQ2xELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsY0FBYyxnQkFBQSxFQUFFLGVBQWUsaUJBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQ2xGLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRUQseUNBQWdCLEdBQWhCO29CQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN0QztnQkFDSCxDQUFDO2dCQUNILHFCQUFDO1lBQUQsQ0F2Q0EsQUF1Q0MsSUFBQTs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vZm9ybS1jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xyXG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlciwgVmFsaWRhdGVFdmVudCB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sbGVyIHtcclxuXHJcbiAgcHVibGljIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgcHVibGljIG1vZGVsOiBhbnk7XHJcblxyXG4gIHByaXZhdGUgbG9nOiAobWVzc2FnZTogc3RyaW5nLCAuLi5yZXN0OiBhbnlbXSkgPT4gdm9pZDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICAgIHB1YmxpYyBvcHRpb25zOiBJRm9ybU9wdGlvbnMsXHJcbiAgICBwdWJsaWMgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLmxvZyA9IHRoaXMubG9nZ2VyLmluZm87XHJcbiAgICB0aGlzLmxvZyhcImJ1aWxkaW5nIGZvcm0gY29udHJvbGxlclwiLCBhcmd1bWVudHMpO1xyXG4gIH1cclxuXHJcbiAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcInNjaGVtYWZvcm0tYWN0aXZhdGVcIiwgeyBwYXJhbXMsIHJvdXRlQ29uZmlnLCBuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24gfSk7XHJcbiAgfVxyXG5cclxuICBiaW5kKGJpbmRpbmdDb250ZXh0OiBvYmplY3QsIG92ZXJyaWRlQ29udGV4dDogb2JqZWN0KSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZm9ybS1jb250cm9sbGVyIGJpbmRlZFwiLCB7IGJpbmRpbmdDb250ZXh0LCBvdmVycmlkZUNvbnRleHQgfSk7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWF0dGFjaGVkXCIpO1xyXG4gICAgdGhpcy52YWxpZGF0ZU9uUmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBkZXRhY2hlZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWRldGFjaGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVPblJlbmRlcigpIHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xyXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2NoZW1hZm9ybS1hdHRhY2hlZDp2YWxpZGF0ZVwiKTtcclxuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSgpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
