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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsSUFBYyxFQUFFLElBQW1DO1FBQ3REO1lBQ0UsU0FBUztZQUNULFNBQVM7WUFDVCxrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLFlBQVk7U0FDYixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO1lBQ2QsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3BEO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0NBQ0YsQ0FBQTtBQW5FWSxXQUFXO0lBRHZCLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQztxQ0FFSyx1QkFBdUI7R0FEL0MsV0FBVyxDQW1FdkI7U0FuRVksV0FBVyIsImZpbGUiOiJydWxlcy9udW1iZXItcnVsZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYWxpZGF0aW9uUnVsZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBTZk51bWJlciB9IGZyb20gXCIuLi9mb3JtL251bWJlci9zZi1udW1iZXJcIjtcclxuXHJcbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXHJcbmV4cG9ydCBjbGFzcyBOdW1iZXJSdWxlcyB7XHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XHJcblxyXG4gIHJlZ2lzdGVyKCkge1xyXG4gICAgdGhpcy5hZGQoKTtcclxuICB9XHJcblxyXG4gIGFkZCgpIHtcclxuICAgIC8vIG1pbmltdW1cclxuICAgIFZhbGlkYXRpb25SdWxlc1xyXG4gICAgICAuY3VzdG9tUnVsZShcclxuICAgICAgICBcIm1pbmltdW1cIixcclxuICAgICAgICAodmFsLCBvYmosIG1pbikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyB2YWwgPj0gbWluIDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWluaW11bSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byAkeyRjb25maWcubWlufS5cIixcclxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBleGNsdXNpb25NaW5pbXVtXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgXCJleGNsdXNpdmVNaW5pbXVtXCIsXHJcbiAgICAgICAgKHZhbCwgb2JqLCBtaW4pID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsID4gbWluIDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZXhjbHVzaXZlTWluaW11bSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAkeyRjb25maWcubWlufS5cIixcclxuICAgICAgICAobWluKSA9PiAoeyBtaW4gfSlcclxuICAgICAgKTtcclxuXHJcbiAgICAvLyBtYXhpbXVtXHJcbiAgICBWYWxpZGF0aW9uUnVsZXNcclxuICAgICAgLmN1c3RvbVJ1bGUoXHJcbiAgICAgICAgXCJtYXhpbXVtXCIsXHJcbiAgICAgICAgKHZhbCwgb2JqLCBtYXgpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdmFsIDw9IG1heCA6IHRydWUsXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1heGltdW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gJHskY29uZmlnLm1heH0uXCIsXHJcbiAgICAgICAgKG1heCkgPT4gKHsgbWF4IH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gZXhjbHVzaXZlTWF4aW11bVxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgIFwiZXhjbHVzaXZlTWF4aW11bVwiLFxyXG4gICAgICAgICh2YWwsIG9iaiwgbWF4KSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHZhbCA8IG1heCA6IHRydWUsXHJcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmV4Y2x1c2l2ZU1heGltdW0gfHwgXCIkeyRkaXNwbGF5TmFtZX0gbXVzdCBiZSBsZXNzIHRoYW4gJHskY29uZmlnLm1heH0uXCIsXHJcbiAgICAgICAgKG1heCkgPT4gKHsgbWF4IH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgLy8gbXVsdGlwbGVPZlxyXG4gICAgVmFsaWRhdGlvblJ1bGVzXHJcbiAgICAgIC5jdXN0b21SdWxlKFxyXG4gICAgICAgIFwibXVsdGlwbGVPZlwiLFxyXG4gICAgICAgICh2YWwsIG9iaiwgbXVsdGlwbGUpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gKCh2YWwgJSBtdWx0aXBsZSkgLyAxMDApID09PSAwIDogdHJ1ZSxcclxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubXVsdGlwbGVPZiB8fCBcIiR7JGRpc3BsYXlOYW1lfSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgJHskY29uZmlnLm11bHRpcGxlfS5cIixcclxuICAgICAgICAobXVsdGlwbGUpID0+ICh7IG11bHRpcGxlIH0pXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICBiaW5kKGN0cmw6IFNmTnVtYmVyLCBydWxlOiBGbHVlbnRSdWxlQ3VzdG9taXplcjx7fSwgYW55Pikge1xyXG4gICAgW1xyXG4gICAgICBcIm1pbmltdW1cIixcclxuICAgICAgXCJtYXhpbXVtXCIsXHJcbiAgICAgIFwiZXhjbHVzaXZlTWluaW11bVwiLFxyXG4gICAgICBcImV4Y2x1c2l2ZU1heGltdW1cIixcclxuICAgICAgXCJtdWx0aXBsZU9mXCJcclxuICAgIF0uZm9yRWFjaCgocikgPT4ge1xyXG4gICAgICBpZiAoTnVtYmVyLmlzSW50ZWdlcihjdHJsLmZvcm0uJHNjaGVtYVtyXSkpIHtcclxuICAgICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKHIsIGN0cmwuZm9ybS4kc2NoZW1hW3JdKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
