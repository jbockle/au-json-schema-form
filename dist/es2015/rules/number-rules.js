var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ValidationRules } from "aurelia-validation";
import { inject } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
let NumberRules = class NumberRules {
    constructor(configuration) {
        this.configuration = configuration;
    }
    register() {
        this.add();
    }
    add() {
        // minimum
        ValidationRules
            .customRule("minimum", (val, obj, min) => val !== undefined ? val >= min : true, this.configuration.messages.minimum || "${$displayName} must be greater than or equal to ${$config.min}.", (min) => ({ min }));
        // exclusionMinimum
        ValidationRules
            .customRule("exclusiveMinimum", (val, obj, min) => val !== undefined ? val > min : true, this.configuration.messages.exclusiveMinimum || "${$displayName} must be greater than ${$config.min}.", (min) => ({ min }));
        // maximum
        ValidationRules
            .customRule("maximum", (val, obj, max) => val !== undefined ? val <= max : true, this.configuration.messages.maximum || "${$displayName} must be less than or equal to ${$config.max}.", (max) => ({ max }));
        // exclusiveMaximum
        ValidationRules
            .customRule("exclusiveMaximum", (val, obj, max) => val !== undefined ? val < max : true, this.configuration.messages.exclusiveMaximum || "${$displayName} must be less than ${$config.max}.", (max) => ({ max }));
        // multipleOf
        ValidationRules
            .customRule("multipleOf", (val, obj, multiple) => val !== undefined ? ((val % multiple) / 100) === 0 : true, this.configuration.messages.multipleOf || "${$displayName} must be a multiple of ${$config.multiple}.", (multiple) => ({ multiple }));
    }
    bind(ctrl, rule) {
        [
            "minimum",
            "maximum",
            "exclusiveMinimum",
            "exclusiveMaximum",
            "multipleOf"
        ].forEach((r) => {
            if (Number.isInteger(ctrl.form.$schema[r])) {
                rule = rule.satisfiesRule(r, ctrl.form.$schema[r]);
            }
        });
    }
};
NumberRules = __decorate([
    inject(SchemaFormConfiguration),
    __metadata("design:paramtypes", [SchemaFormConfiguration])
], NumberRules);
export { NumberRules };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsSUFBYyxFQUFFLElBQW1DO1FBQ3REO1lBQ0UsU0FBUztZQUNULFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLFlBQVk7U0FDYixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQW5FWSxXQUFXO0lBRHZCLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztxQ0FFSyx1QkFBdUI7R0FEL0MsV0FBVyxDQW1FdkI7U0FuRVksV0FBVyIsImZpbGUiOiJydWxlcy9udW1iZXItcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTZk51bWJlciB9IGZyb20gXCIuLi9mb3JtL251bWJlci9zZi1udW1iZXJcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbilcbmV4cG9ydCBjbGFzcyBOdW1iZXJSdWxlcyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pIHsgfVxuXG4gIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWRkKCk7XG4gIH1cblxuICBhZGQoKSB7XG4gICAgLy8gbWluaW11bVxuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwibWluaW11bVwiLFxuICAgICAgICAodmFsLCBvYmosIG1pbikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPj0gbWluIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1pbmltdW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJHskY29uZmlnLm1pbn0uXCIsXG4gICAgICAgIChtaW4pID0+ICh7IG1pbiB9KVxuICAgICAgKTtcblxuICAgIC8vIGV4Y2x1c2lvbk1pbmltdW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBtaW4pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsID4gbWluIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1pbmltdW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBncmVhdGVyIHRoYW4gJHskY29uZmlnLm1pbn0uXCIsXG4gICAgICAgIChtaW4pID0+ICh7IG1pbiB9KVxuICAgICAgKTtcblxuICAgIC8vIG1heGltdW1cbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcIm1heGltdW1cIixcbiAgICAgICAgKHZhbCwgb2JqLCBtYXgpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDw9IG1heCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5tYXhpbXVtIHx8IFwiJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuIG9yIGVxdWFsIHRvICR7JGNvbmZpZy5tYXh9LlwiLFxuICAgICAgICAobWF4KSA9PiAoeyBtYXggfSlcbiAgICAgICk7XG5cbiAgICAvLyBleGNsdXNpdmVNYXhpbXVtXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJleGNsdXNpdmVNYXhpbXVtXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbWF4KSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA8IG1heCA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5leGNsdXNpdmVNYXhpbXVtIHx8IFwiJHskZGlzcGxheU5hbWV9IG11c3QgYmUgbGVzcyB0aGFuICR7JGNvbmZpZy5tYXh9LlwiLFxuICAgICAgICAobWF4KSA9PiAoeyBtYXggfSlcbiAgICAgICk7XG5cbiAgICAvLyBtdWx0aXBsZU9mXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJtdWx0aXBsZU9mXCIsXG4gICAgICAgICh2YWwsIG9iaiwgbXVsdGlwbGUpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gKCh2YWwgJSBtdWx0aXBsZSkgLyAxMDApID09PSAwIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm11bHRpcGxlT2YgfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBhIG11bHRpcGxlIG9mICR7JGNvbmZpZy5tdWx0aXBsZX0uXCIsXG4gICAgICAgIChtdWx0aXBsZSkgPT4gKHsgbXVsdGlwbGUgfSlcbiAgICAgICk7XG4gIH1cblxuICBiaW5kKGN0cmw6IFNmTnVtYmVyLCBydWxlOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55Pikge1xuICAgIFtcbiAgICAgIFwibWluaW11bVwiLFxuICAgICAgXCJtYXhpbXVtXCIsXG4gICAgICBcImV4Y2x1c2l2ZU1pbmltdW1cIixcbiAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiLFxuICAgICAgXCJtdWx0aXBsZU9mXCJcbiAgICBdLmZvckVhY2goKHIpID0+IHtcbiAgICAgIGlmIChOdW1iZXIuaXNJbnRlZ2VyKGN0cmwuZm9ybS4kc2NoZW1hW3JdKSkge1xuICAgICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKHIsIGN0cmwuZm9ybS4kc2NoZW1hW3JdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
