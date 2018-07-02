export class FormController {
    constructor(logger, options, validationController) {
        this.logger = logger;
        this.options = options;
        this.validationController = validationController;
        this.log = this.logger.info;
        this.log("building form controller", arguments);
    }
    activate(params, routeConfig, navigationInstruction) {
        this.logger.debug("schemaform-activate", { params, routeConfig, navigationInstruction });
    }
    bind(bindingContext, overrideContext) {
        this.logger.info("form-controller binded", { bindingContext, overrideContext });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vZm9ybS1jb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBLE1BQU07SUFPSixZQUNVLE1BQXdCLEVBQ3pCLE9BQXFCLEVBQ3JCLG9CQUEwQztRQUZ6QyxXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUN6QixZQUFPLEdBQVAsT0FBTyxDQUFjO1FBQ3JCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFFakQsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLDBCQUEwQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxRQUFRLENBQUMsTUFBTSxFQUFFLFdBQVcsRUFBRSxxQkFBcUI7UUFDakQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMscUJBQXFCLEVBQUUsRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsSUFBSSxDQUFDLGNBQXNCLEVBQUUsZUFBdUI7UUFDbEQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxjQUFjLEVBQUUsZUFBZSxFQUFFLENBQUMsQ0FBQztJQUNsRixDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRCxnQkFBZ0I7UUFDZCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDakMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsOEJBQThCLENBQUMsQ0FBQztZQUNqRCxJQUFJLENBQUMsb0JBQW9CLENBQUMsUUFBUSxFQUFFLENBQUM7U0FDdEM7SUFDSCxDQUFDO0NBQ0YiLCJmaWxlIjoiZm9ybS9mb3JtLWNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7IElGb3JtT3B0aW9ucyB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3B0aW9uc1wiO1xuaW1wb3J0IHsgVmFsaWRhdGlvbkNvbnRyb2xsZXIsIFZhbGlkYXRlRXZlbnQgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYURlZmluaXRpb24gfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBjbGFzcyBGb3JtQ29udHJvbGxlciB7XG5cbiAgcHVibGljIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uO1xuICBwdWJsaWMgbW9kZWw7XG5cbiAgcHJpdmF0ZSBsb2c6IChtZXNzYWdlOiBzdHJpbmcsIC4uLnJlc3Q6IGFueVtdKSA9PiB2b2lkO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxuICAgIHB1YmxpYyBvcHRpb25zOiBJRm9ybU9wdGlvbnMsXG4gICAgcHVibGljIHZhbGlkYXRpb25Db250cm9sbGVyOiBWYWxpZGF0aW9uQ29udHJvbGxlclxuICApIHtcbiAgICB0aGlzLmxvZyA9IHRoaXMubG9nZ2VyLmluZm87XG4gICAgdGhpcy5sb2coXCJidWlsZGluZyBmb3JtIGNvbnRyb2xsZXJcIiwgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGFjdGl2YXRlKHBhcmFtcywgcm91dGVDb25maWcsIG5hdmlnYXRpb25JbnN0cnVjdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwic2NoZW1hZm9ybS1hY3RpdmF0ZVwiLCB7IHBhcmFtcywgcm91dGVDb25maWcsIG5hdmlnYXRpb25JbnN0cnVjdGlvbiB9KTtcbiAgfVxuXG4gIGJpbmQoYmluZGluZ0NvbnRleHQ6IG9iamVjdCwgb3ZlcnJpZGVDb250ZXh0OiBvYmplY3QpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZm9ybS1jb250cm9sbGVyIGJpbmRlZFwiLCB7IGJpbmRpbmdDb250ZXh0LCBvdmVycmlkZUNvbnRleHQgfSk7XG4gIH1cblxuICBhdHRhY2hlZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2NoZW1hZm9ybS1hdHRhY2hlZFwiKTtcbiAgICB0aGlzLnZhbGlkYXRlT25SZW5kZXIoKTtcbiAgfVxuXG4gIGRldGFjaGVkKCkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWRldGFjaGVkXCIpO1xuICB9XG5cbiAgdmFsaWRhdGVPblJlbmRlcigpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLnZhbGlkYXRlT25SZW5kZXIpIHtcbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzY2hlbWFmb3JtLWF0dGFjaGVkOnZhbGlkYXRlXCIpO1xuICAgICAgdGhpcy52YWxpZGF0aW9uQ29udHJvbGxlci52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
