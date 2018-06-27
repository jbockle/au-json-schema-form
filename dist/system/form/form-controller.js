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
                }
                FormController.prototype.activate = function (params, routeConfig, navigationInstruction) {
                    this.logger.debug("schemaform-activate", { params: params, routeConfig: routeConfig, navigationInstruction: navigationInstruction });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7WUFJQTtnQkFFRSx3QkFDVSxNQUF3QixFQUN6QixPQUFxQixFQUNyQixvQkFBMEM7b0JBRnpDLFdBQU0sR0FBTixNQUFNLENBQWtCO29CQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFjO29CQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO2dCQUFJLENBQUM7Z0JBRXhELGlDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQjtvQkFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxxQkFBcUIsdUJBQUEsRUFBRSxDQUFDLENBQUM7Z0JBQzNGLENBQUM7Z0JBRUQsaUNBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO29CQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDMUIsQ0FBQztnQkFFRCxpQ0FBUSxHQUFSO29CQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7Z0JBQzFDLENBQUM7Z0JBRU8seUNBQWdCLEdBQXhCO29CQUNFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQzt3QkFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO3FCQUN0QztnQkFDSCxDQUFDO2dCQUNILHFCQUFDO1lBQUQsQ0ExQkEsQUEwQkMsSUFBQTs7UUFDRCxDQUFDIiwiZmlsZSI6ImZvcm0vZm9ybS1jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XG5pbXBvcnQgeyBJRm9ybU9wdGlvbnMgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW9wdGlvbnNcIjtcbmltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xsZXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHB1YmxpYyBvcHRpb25zOiBJRm9ybU9wdGlvbnMsXG4gICAgcHVibGljIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcikgeyB9XG5cbiAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoXCJzY2hlbWFmb3JtLWFjdGl2YXRlXCIsIHsgcGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uIH0pO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYWZvcm0tYXR0YWNoZWRcIik7XG4gICAgdGhpcy52YWxpZGF0ZU9uUmVuZGVyKCk7XG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2NoZW1hZm9ybS1kZXRhY2hlZFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVPblJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWF0dGFjaGVkOnZhbGlkYXRlXCIpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
