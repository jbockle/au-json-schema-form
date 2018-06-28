define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormObjectController = /** @class */ (function () {
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
    exports.FormObjectController = FormObjectController;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1vYmplY3QtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUlFLDhCQUNVLE1BQXdCLEVBQ3pCLE9BQXFCLEVBQ3JCLG9CQUEwQztZQUZ6QyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtZQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFjO1lBQ3JCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFBSSxDQUFDO1FBRXhELHVDQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQjtZQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLFdBQVcsYUFBQSxFQUFFLHFCQUFxQix1QkFBQSxFQUFFLENBQUMsQ0FBQztRQUMzRixDQUFDO1FBRUQsdUNBQVEsR0FBUjtZQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7WUFDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFDMUIsQ0FBQztRQUVELHVDQUFRLEdBQVI7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFFTywrQ0FBZ0IsR0FBeEI7WUFDRSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7Z0JBQ2pELElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLEVBQUUsQ0FBQzthQUN0QztRQUNILENBQUM7UUFDSCwyQkFBQztJQUFELENBNUJBLEFBNEJDLElBQUE7SUE1Qlksb0RBQW9CIiwiZmlsZSI6ImZvcm0vZm9ybS1vYmplY3QtY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1PYmplY3RDb250cm9sbGVyIHtcbiAgbW9kZWw6IG9iamVjdDtcblxuICBwcml2YXRlIGxvZzogKG1lc3NhZ2U6IHN0cmluZywgLi4ucmVzdDogYW55W10pID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHB1YmxpYyBvcHRpb25zOiBJRm9ybU9wdGlvbnMsXG4gICAgcHVibGljIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcikgeyB9XG5cbiAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoXCJzY2hlbWFmb3JtLWFjdGl2YXRlXCIsIHsgcGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uIH0pO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYWZvcm0tYXR0YWNoZWRcIik7XG4gICAgdGhpcy52YWxpZGF0ZU9uUmVuZGVyKCk7XG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2NoZW1hZm9ybS1kZXRhY2hlZFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVPblJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWF0dGFjaGVkOnZhbGlkYXRlXCIpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
