define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormController = /** @class */ (function () {
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
    exports.FormController = FormController;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BO1FBT0Usd0JBQ1UsTUFBd0IsRUFDekIsT0FBcUIsRUFDckIsb0JBQTBDO1lBRnpDLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQWM7WUFDckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtZQUVqRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVELGlDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQjtZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLHFCQUFxQix1QkFBQSxFQUFFLENBQUMsQ0FBQztRQUMzRixDQUFDO1FBRUQsNkJBQUksR0FBSixVQUFLLGNBQXNCLEVBQUUsZUFBdUI7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxjQUFjLGdCQUFBLEVBQUUsZUFBZSxpQkFBQSxFQUFFLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBRUQsaUNBQVEsR0FBUjtZQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELGlDQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCx5Q0FBZ0IsR0FBaEI7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN0QztRQUNILENBQUM7UUFDSCxxQkFBQztJQUFELENBdkNBLEFBdUNDLElBQUE7SUF2Q1ksd0NBQWMiLCJmaWxlIjoiZm9ybS9mb3JtLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXIsIFZhbGlkYXRlRXZlbnQgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xuXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xsZXIge1xuXG4gIHB1YmxpYyBmb3JtOiBJRm9ybU92ZXJyaWRlO1xuICBwdWJsaWMgbW9kZWw6IGFueTtcblxuICBwcml2YXRlIGxvZzogKG1lc3NhZ2U6IHN0cmluZywgLi4ucmVzdDogYW55W10pID0+IHZvaWQ7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHVibGljIG9wdGlvbnM6IElGb3JtT3B0aW9ucyxcbiAgICBwdWJsaWMgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyXG4gICkge1xuICAgIHRoaXMubG9nID0gdGhpcy5sb2dnZXIuaW5mbztcbiAgICB0aGlzLmxvZyhcImJ1aWxkaW5nIGZvcm0gY29udHJvbGxlclwiLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoXCJzY2hlbWFmb3JtLWFjdGl2YXRlXCIsIHsgcGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uIH0pO1xuICB9XG5cbiAgYmluZChiaW5kaW5nQ29udGV4dDogb2JqZWN0LCBvdmVycmlkZUNvbnRleHQ6IG9iamVjdCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJmb3JtLWNvbnRyb2xsZXIgYmluZGVkXCIsIHsgYmluZGluZ0NvbnRleHQsIG92ZXJyaWRlQ29udGV4dCB9KTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWF0dGFjaGVkXCIpO1xuICAgIHRoaXMudmFsaWRhdGVPblJlbmRlcigpO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYWZvcm0tZGV0YWNoZWRcIik7XG4gIH1cblxuICB2YWxpZGF0ZU9uUmVuZGVyKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYWZvcm0tYXR0YWNoZWQ6dmFsaWRhdGVcIik7XG4gICAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
