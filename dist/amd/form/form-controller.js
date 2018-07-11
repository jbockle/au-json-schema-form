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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQU1BO1FBT0Usd0JBQ1UsTUFBd0IsRUFDekIsT0FBcUIsRUFDckIsb0JBQTBDO1lBRnpDLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBQ3pCLFlBQU8sR0FBUCxPQUFPLENBQWM7WUFDckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtZQUVqRCxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQzVCLElBQUksQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVELGlDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQjtZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLHFCQUFxQix1QkFBQSxFQUFFLENBQUMsQ0FBQztRQUMzRixDQUFDO1FBRUQsNkJBQUksR0FBSixVQUFLLGNBQXNCLEVBQUUsZUFBdUI7WUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxjQUFjLGdCQUFBLEVBQUUsZUFBZSxpQkFBQSxFQUFFLENBQUMsQ0FBQztRQUNsRixDQUFDO1FBRUQsaUNBQVEsR0FBUjtZQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELGlDQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFRCx5Q0FBZ0IsR0FBaEI7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN0QztRQUNILENBQUM7UUFDSCxxQkFBQztJQUFELENBdkNBLEFBdUNDLElBQUE7SUF2Q1ksd0NBQWMiLCJmaWxlIjoiZm9ybS9mb3JtLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XHJcbmltcG9ydCB7IFZhbGlkYXRpb25Db250cm9sbGVyLCBWYWxpZGF0ZUV2ZW50IH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRm9ybUNvbnRyb2xsZXIge1xyXG5cclxuICBwdWJsaWMgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuICBwdWJsaWMgbW9kZWw6IGFueTtcclxuXHJcbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHVibGljIG9wdGlvbnM6IElGb3JtT3B0aW9ucyxcclxuICAgIHB1YmxpYyB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXJcclxuICApIHtcclxuICAgIHRoaXMubG9nID0gdGhpcy5sb2dnZXIuaW5mbztcclxuICAgIHRoaXMubG9nKFwiYnVpbGRpbmcgZm9ybSBjb250cm9sbGVyXCIsIGFyZ3VtZW50cyk7XHJcbiAgfVxyXG5cclxuICBhY3RpdmF0ZShwYXJhbXMsIHJvdXRlQ29uZmlnLCBuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24pIHtcclxuICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwic2NoZW1hZm9ybS1hY3RpdmF0ZVwiLCB7IHBhcmFtcywgcm91dGVDb25maWcsIG5hdmlnYXRpb25JbnN0cnVjdGlvbiB9KTtcclxuICB9XHJcblxyXG4gIGJpbmQoYmluZGluZ0NvbnRleHQ6IG9iamVjdCwgb3ZlcnJpZGVDb250ZXh0OiBvYmplY3QpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJmb3JtLWNvbnRyb2xsZXIgYmluZGVkXCIsIHsgYmluZGluZ0NvbnRleHQsIG92ZXJyaWRlQ29udGV4dCB9KTtcclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYWZvcm0tYXR0YWNoZWRcIik7XHJcbiAgICB0aGlzLnZhbGlkYXRlT25SZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGRldGFjaGVkKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYWZvcm0tZGV0YWNoZWRcIik7XHJcbiAgfVxyXG5cclxuICB2YWxpZGF0ZU9uUmVuZGVyKCkge1xyXG4gICAgaWYgKHRoaXMub3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XHJcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWF0dGFjaGVkOnZhbGlkYXRlXCIpO1xyXG4gICAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
