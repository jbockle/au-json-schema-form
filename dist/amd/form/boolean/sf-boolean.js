var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../rules/rules-factory", "../../resources/logger"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, rules_factory_1, logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfBoolean = /** @class */ (function () {
        function SfBoolean(configuration, rules, logger) {
            this.configuration = configuration;
            this.rules = rules;
            this.logger = logger;
            this.id = guid_1.Guid.newGuid();
            this.kind = "boolean";
        }
        SfBoolean.prototype.bind = function () {
            this.logger.info("sf-boolean", this.form, this.model, arguments);
            this.schema = this.form.$schema;
            this.rules.bind(this);
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SfBoolean.prototype, "form", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Boolean)
        ], SfBoolean.prototype, "model", void 0);
        SfBoolean = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, rules_factory_1.RulesFactory, logger_1.SchemaFormLogger),
            aurelia_framework_1.customElement("sf-boolean"),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                rules_factory_1.RulesFactory,
                logger_1.SchemaFormLogger])
        ], SfBoolean);
        return SfBoolean;
    }());
    exports.SfBoolean = SfBoolean;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYm9vbGVhbi9zZi1ib29sZWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQVVBO1FBVUUsbUJBQ1MsYUFBc0MsRUFDdEMsS0FBbUIsRUFDbEIsTUFBd0I7WUFGekIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1lBQ3RDLFVBQUssR0FBTCxLQUFLLENBQWM7WUFDbEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7WUFQbEMsT0FBRSxHQUFXLFdBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUU1QixTQUFJLEdBQUcsU0FBUyxDQUFDO1FBTWIsQ0FBQztRQUVMLHdCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ2pFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUF1QyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFuQlM7WUFBVCw0QkFBUTs7K0NBQXFCO1FBQ3BCO1lBQVQsNEJBQVE7O2dEQUFnQjtRQUZkLFNBQVM7WUFGckIsMEJBQU0sQ0FBQyxtREFBdUIsRUFBRSw0QkFBWSxFQUFFLHlCQUFnQixDQUFDO1lBQy9ELGlDQUFhLENBQUMsWUFBWSxDQUFDOzZDQVlGLG1EQUF1QjtnQkFDL0IsNEJBQVk7Z0JBQ1YseUJBQWdCO1dBYnZCLFNBQVMsQ0FxQnJCO1FBQUQsZ0JBQUM7S0FyQkQsQUFxQkMsSUFBQTtJQXJCWSw4QkFBUyIsImZpbGUiOiJmb3JtL2Jvb2xlYW4vc2YtYm9vbGVhbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJpbmRhYmxlLCBjdXN0b21FbGVtZW50LCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFJ1bGVzRmFjdG9yeSB9IGZyb20gXCIuLi8uLi9ydWxlcy9ydWxlcy1mYWN0b3J5XCI7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5cclxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgUnVsZXNGYWN0b3J5LCBTY2hlbWFGb3JtTG9nZ2VyKVxyXG5AY3VzdG9tRWxlbWVudChcInNmLWJvb2xlYW5cIilcclxuZXhwb3J0IGNsYXNzIFNmQm9vbGVhbiB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBib29sZWFuO1xyXG5cclxuICBzY2hlbWE6IElKc29uU2NoZW1hQm9vbGVhbkRlZmluaXRpb247XHJcblxyXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcclxuXHJcbiAga2luZCA9IFwiYm9vbGVhblwiO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHB1YmxpYyBydWxlczogUnVsZXNGYWN0b3J5LFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXJcclxuICApIHsgfVxyXG5cclxuICBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLWJvb2xlYW5cIiwgdGhpcy5mb3JtLCB0aGlzLm1vZGVsLCBhcmd1bWVudHMpO1xyXG4gICAgdGhpcy5zY2hlbWEgPSB0aGlzLmZvcm0uJHNjaGVtYSBhcyBJSnNvblNjaGVtYUJvb2xlYW5EZWZpbml0aW9uO1xyXG4gICAgdGhpcy5ydWxlcy5iaW5kKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
