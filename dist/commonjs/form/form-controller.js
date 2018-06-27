"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FormController = /** @class */ (function () {
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
exports.FormController = FormController;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUE7SUFFRSx3QkFDVSxNQUF3QixFQUN6QixPQUFxQixFQUNyQixvQkFBMEM7UUFGekMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUksQ0FBQztJQUV4RCxpQ0FBUSxHQUFSLFVBQVMsTUFBTSxFQUFFLFdBQVcsRUFBRSxxQkFBcUI7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLFFBQUEsRUFBRSxXQUFXLGFBQUEsRUFBRSxxQkFBcUIsdUJBQUEsRUFBRSxDQUFDLENBQUM7SUFDM0YsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8seUNBQWdCLEdBQXhCO1FBQ0UsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsSUFBQTtBQTFCWSx3Q0FBYyIsImZpbGUiOiJmb3JtL2Zvcm0tY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1Db250cm9sbGVyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwdWJsaWMgb3B0aW9uczogSUZvcm1PcHRpb25zLFxuICAgIHB1YmxpYyB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXIpIHsgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcywgcm91dGVDb25maWcsIG5hdmlnYXRpb25JbnN0cnVjdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwic2NoZW1hZm9ybS1hY3RpdmF0ZVwiLCB7IHBhcmFtcywgcm91dGVDb25maWcsIG5hdmlnYXRpb25JbnN0cnVjdGlvbiB9KTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWF0dGFjaGVkXCIpO1xuICAgIHRoaXMudmFsaWRhdGVPblJlbmRlcigpO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYWZvcm0tZGV0YWNoZWRcIik7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlT25SZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2NoZW1hZm9ybS1hdHRhY2hlZDp2YWxpZGF0ZVwiKTtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
