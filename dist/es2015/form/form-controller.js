export class FormController {
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBLE1BQU07SUFFSixZQUNVLE1BQXdCLEVBQ3pCLE9BQXFCLEVBQ3JCLG9CQUEwQztRQUZ6QyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7SUFBSSxDQUFDO0lBRXhELFFBQVEsQ0FBQyxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQjtRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUscUJBQXFCLEVBQUUsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDO0NBQ0YiLCJmaWxlIjoiZm9ybS9mb3JtLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbGxlciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICAgcHVibGljIG9wdGlvbnM6IElGb3JtT3B0aW9ucyxcbiAgICBwdWJsaWMgdmFsaWRhdGlvbkNvbnRyb2xsZXI6IFZhbGlkYXRpb25Db250cm9sbGVyKSB7IH1cblxuICBhY3RpdmF0ZShwYXJhbXMsIHJvdXRlQ29uZmlnLCBuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcInNjaGVtYWZvcm0tYWN0aXZhdGVcIiwgeyBwYXJhbXMsIHJvdXRlQ29uZmlnLCBuYXZpZ2F0aW9uSW5zdHJ1Y3Rpb24gfSk7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2NoZW1hZm9ybS1hdHRhY2hlZFwiKTtcbiAgICB0aGlzLnZhbGlkYXRlT25SZW5kZXIoKTtcbiAgfVxuXG4gIGRldGFjaGVkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWRldGFjaGVkXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZU9uUmVuZGVyKCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMudmFsaWRhdGVPblJlbmRlcikge1xuICAgICAgdGhpcy5sb2dnZXIuaW5mbyhcInNjaGVtYWZvcm0tYXR0YWNoZWQ6dmFsaWRhdGVcIik7XG4gICAgICB0aGlzLnZhbGlkYXRpb25Db250cm9sbGVyLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9