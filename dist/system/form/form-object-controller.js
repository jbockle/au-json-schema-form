System.register([], function (exports_1, context_1) {
    "use strict";
    var FormObjectController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            FormObjectController = /** @class */ (function () {
                function FormObjectController(logger, options, validationController) {
                    this.logger = logger;
                    this.options = options;
                    this.validationController = validationController;
                }
                FormObjectController.prototype.activate = function (params, routeConfig, navigationInstruction) {
                    this.logger.debug("schemaform-activate", { params: params, routeConfig: routeConfig, navigationInstruction: navigationInstruction });
                };
                FormObjectController.prototype.attached = function () {
                    this.logger.info("schemaform-attached");
                    this.validateOnRender();
                };
                FormObjectController.prototype.detached = function () {
                    this.logger.info("schemaform-detached");
                };
                FormObjectController.prototype.validateOnRender = function () {
                    if (this.options.validateOnRender) {
                        this.logger.info("schemaform-attached:validate");
                        this.validationController.validate();
                    }
                };
                return FormObjectController;
            }());
            exports_1("FormObjectController", FormObjectController);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1vYmplY3QtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBSUE7Z0JBSUUsOEJBQ1UsTUFBd0IsRUFDekIsT0FBcUIsRUFDckIsb0JBQTBDO29CQUZ6QyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtvQkFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBYztvQkFDckIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtnQkFBSSxDQUFDO2dCQUV4RCx1Q0FBUSxHQUFSLFVBQVMsTUFBTSxFQUFFLFdBQVcsRUFBRSxxQkFBcUI7b0JBQ2pELElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsV0FBVyxhQUFBLEVBQUUscUJBQXFCLHVCQUFBLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRixDQUFDO2dCQUVELHVDQUFRLEdBQVI7b0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7Z0JBQzFCLENBQUM7Z0JBRUQsdUNBQVEsR0FBUjtvQkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUMxQyxDQUFDO2dCQUVPLCtDQUFnQixHQUF4QjtvQkFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7d0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQztxQkFDdEM7Z0JBQ0gsQ0FBQztnQkFDSCwyQkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7O1FBQ0QsQ0FBQyIsImZpbGUiOiJmb3JtL2Zvcm0tb2JqZWN0LWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtT2JqZWN0Q29udHJvbGxlciB7XG4gIG1vZGVsOiBvYmplY3Q7XG5cbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcbiAgICBwdWJsaWMgb3B0aW9uczogSUZvcm1PcHRpb25zLFxuICAgIHB1YmxpYyB2YWxpZGF0aW9uQ29udHJvbGxlcjogVmFsaWRhdGlvbkNvbnRyb2xsZXIpIHsgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcywgcm91dGVDb25maWcsIG5hdmlnYXRpb25JbnN0cnVjdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwic2NoZW1hZm9ybS1hY3RpdmF0ZVwiLCB7IHBhcmFtcywgcm91dGVDb25maWcsIG5hdmlnYXRpb25JbnN0cnVjdGlvbiB9KTtcbiAgfVxuXG4gIGF0dGFjaGVkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWF0dGFjaGVkXCIpO1xuICAgIHRoaXMudmFsaWRhdGVPblJlbmRlcigpO1xuICB9XG5cbiAgZGV0YWNoZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYWZvcm0tZGV0YWNoZWRcIik7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlT25SZW5kZXIoKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy52YWxpZGF0ZU9uUmVuZGVyKSB7XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2NoZW1hZm9ybS1hdHRhY2hlZDp2YWxpZGF0ZVwiKTtcbiAgICAgIHRoaXMudmFsaWRhdGlvbkNvbnRyb2xsZXIudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
