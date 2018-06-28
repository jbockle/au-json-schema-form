export class FormObjectController {
    constructor(logger, options, validationController) {
        this.logger = logger;
        this.options = options;
        this.validationController = validationController;
    }
    activate(params, routeConfig, navigationInstruction) {
        this.logger.debug("schemaform-activate", { params, routeConfig, navigationInstruction });
    }
    attached() {
        this.logger.info("schemaform-attached");
        this.validateOnRender();
    }
    detached() {
        this.logger.info("schemaform-detached");
    }
    validateOnRender() {
        if (this.options.validateOnRender) {
            this.logger.info("schemaform-attached:validate");
            this.validationController.validate();
        }
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1vYmplY3QtY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxNQUFNO0lBSUosWUFDVSxNQUF3QixFQUN6QixPQUFxQixFQUNyQixvQkFBMEM7UUFGekMsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDekIsWUFBTyxHQUFQLE9BQU8sQ0FBYztRQUNyQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO0lBQUksQ0FBQztJQUV4RCxRQUFRLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxxQkFBcUI7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFTyxnQkFBZ0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFO1lBQ2pDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztDQUNGIiwiZmlsZSI6ImZvcm0vZm9ybS1vYmplY3QtY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm1PcHRpb25zIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1vcHRpb25zXCI7XG5pbXBvcnQgeyBWYWxpZGF0aW9uQ29udHJvbGxlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcblxuZXhwb3J0IGNsYXNzIEZvcm1PYmplY3RDb250cm9sbGVyIHtcbiAgbW9kZWw6IG9iamVjdDtcblxuICBwcml2YXRlIGxvZzogKG1lc3NhZ2U6IHN0cmluZywgLi4ucmVzdDogYW55W10pID0+IHZvaWQ7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHB1YmxpYyBvcHRpb25zOiBJRm9ybU9wdGlvbnMsXG4gICAgcHVibGljIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlcikgeyB9XG5cbiAgYWN0aXZhdGUocGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuZGVidWcoXCJzY2hlbWFmb3JtLWFjdGl2YXRlXCIsIHsgcGFyYW1zLCByb3V0ZUNvbmZpZywgbmF2aWdhdGlvbkluc3RydWN0aW9uIH0pO1xuICB9XG5cbiAgYXR0YWNoZWQoKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYWZvcm0tYXR0YWNoZWRcIik7XG4gICAgdGhpcy52YWxpZGF0ZU9uUmVuZGVyKCk7XG4gIH1cblxuICBkZXRhY2hlZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2NoZW1hZm9ybS1kZXRhY2hlZFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVPblJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWF0dGFjaGVkOnZhbGlkYXRlXCIpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
