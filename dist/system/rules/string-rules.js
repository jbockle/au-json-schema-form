System.register(["aurelia-validation", "aurelia-framework", "../services/schema-form-configuration"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var aurelia_validation_1, aurelia_framework_1, schema_form_configuration_1, StringRules;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_validation_1_1) {
                aurelia_validation_1 = aurelia_validation_1_1;
            },
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (schema_form_configuration_1_1) {
                schema_form_configuration_1 = schema_form_configuration_1_1;
            }
        ],
        execute: function () {
            StringRules = /** @class */ (function () {
                function StringRules(configuration) {
                    this.configuration = configuration;
                }
                StringRules.prototype.register = function () {
                    this.add();
                    this.setCustomMessages();
                };
                StringRules.prototype.setCustomMessages = function () {
                    aurelia_validation_1.validationMessages["minLength"] = this.configuration.messages.minLength || aurelia_validation_1.validationMessages["minLength"];
                    aurelia_validation_1.validationMessages["maxLength"] = this.configuration.messages.maxLength || aurelia_validation_1.validationMessages["maxLength"];
                    aurelia_validation_1.validationMessages["matches"] = this.configuration.messages.pattern || aurelia_validation_1.validationMessages["matches"];
                    aurelia_validation_1.validationMessages["email"] = this.configuration.messages.format_email || aurelia_validation_1.validationMessages["email"];
                };
                StringRules.prototype.add = function () {
                    // format datetime
                    // tslint:disable-next-line:max-line-length
                    var iso8601Datetime = /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i;
                    aurelia_validation_1.ValidationRules
                        .customRule("format_datetime", function (val) { return val !== undefined ? iso8601Datetime.test(val) : true; }, this.configuration.messages.format_datetime || "${$displayName} is not a valid date/time");
                    // format date
                    var iso8601Date = /^\d\d\d\d-[0-1]\d-[0-3]\d$/;
                    aurelia_validation_1.ValidationRules
                        .customRule("format_date", function (val) { return val !== undefined ? iso8601Date.test(val) : true; }, this.configuration.messages.format_date || "${$displayName} is not a valid date");
                    // format time
                    var iso8601Time = /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i;
                    aurelia_validation_1.ValidationRules
                        .customRule("format_time", function (val) { return val !== undefined ? iso8601Time.test(val) : true; }, this.configuration.messages.format_time || "${$displayName} is not a valid time");
                    // format ipv4
                    var ipv4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
                    aurelia_validation_1.ValidationRules
                        .customRule("format_ipv4", function (val) { return val !== undefined ? ipv4.test(val) : true; }, this.configuration.messages.format_ipv4 || "${$displayName} is not a valid IPv4 address");
                    // format ipv6
                    // tslint:disable-next-line:max-line-length
                    var ipv6 = /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i;
                    aurelia_validation_1.ValidationRules
                        .customRule("format_ipv6", function (val) { return val !== undefined ? ipv4.test(val) : true; }, this.configuration.messages.format_ipv6 || "${$displayName} is not a valid IPv6 address");
                    // format hostname
                    var hostname = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i;
                    aurelia_validation_1.ValidationRules
                        .customRule("format_hostname", function (val) { return val !== undefined ? ipv4.test(val) : true; }, this.configuration.messages.format_hostname || "${$displayName} is not a valid hostname");
                    // format uri
                    var uri = /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i;
                    aurelia_validation_1.ValidationRules
                        .customRule("format_uri", function (val) { return val !== undefined ? uri.test(val) : true; }, this.configuration.messages.format_uri || "${$displayName} is not a valid URI");
                };
                StringRules.prototype.bind = function (ctrl, rule) {
                    if (ctrl.schema.pattern) {
                        rule = rule.matches(new RegExp(ctrl.schema.pattern));
                    }
                    if (ctrl.schema.minLength) {
                        rule = rule.minLength(ctrl.schema.minLength);
                    }
                    if (ctrl.schema.maxLength) {
                        rule = rule.maxLength(ctrl.schema.maxLength);
                    }
                    if (ctrl.schema.format) {
                        var rulename = "format_" + ctrl.schema.format.replace("-", "");
                        rule = rule.satisfiesRule(rulename);
                    }
                };
                StringRules = __decorate([
                    aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration),
                    __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration])
                ], StringRules);
                return StringRules;
            }());
            exports_1("StringRules", StringRules);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQ3REO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7d0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzlDO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7d0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzlDO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUU7d0JBQ3RCLElBQU0sUUFBUSxHQUFHLFlBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUcsQ0FBQzt3QkFDakUsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3JDO2dCQUNILENBQUM7Z0JBL0ZVLFdBQVc7b0JBRHZCLDBCQUFNLENBQUMsbURBQXVCLENBQUM7cURBRUssbURBQXVCO21CQUQvQyxXQUFXLENBZ0d2QjtnQkFBRCxrQkFBQzthQWhHRCxBQWdHQzs7UUFDRCxDQUFDIiwiZmlsZSI6InJ1bGVzL3N0cmluZy1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgdmFsaWRhdGlvbk1lc3NhZ2VzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2ZTdHJpbmcgfSBmcm9tIFwiLi4vZm9ybS90ZXh0L3NmLXN0cmluZ1wiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIFN0cmluZ1J1bGVzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG4gIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWRkKCk7XG4gICAgdGhpcy5zZXRDdXN0b21NZXNzYWdlcygpO1xuICB9XG5cbiAgc2V0Q3VzdG9tTWVzc2FnZXMoKSB7XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wibWluTGVuZ3RoXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1pbkxlbmd0aCB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbXCJtaW5MZW5ndGhcIl07XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wibWF4TGVuZ3RoXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1heExlbmd0aCB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbXCJtYXhMZW5ndGhcIl07XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wibWF0Y2hlc1wiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5wYXR0ZXJuIHx8IHZhbGlkYXRpb25NZXNzYWdlc1tcIm1hdGNoZXNcIl07XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiZW1haWxcIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2VtYWlsIHx8IHZhbGlkYXRpb25NZXNzYWdlc1tcImVtYWlsXCJdO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIC8vIGZvcm1hdCBkYXRldGltZVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICBjb25zdCBpc284NjAxRGF0ZXRpbWUgPSAvXlxcZFxcZFxcZFxcZC1bMC0xXVxcZC1bMC0zXVxcZFt0XFxzXSg/OlswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkfDIzOjU5OjYwKSg/OlxcLlxcZCspPyg/Onp8WystXVxcZFxcZDpcXGRcXGQpJC9pO1xuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZm9ybWF0X2RhdGV0aW1lXCIsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBpc284NjAxRGF0ZXRpbWUudGVzdCh2YWwpIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmZvcm1hdF9kYXRldGltZSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBpcyBub3QgYSB2YWxpZCBkYXRlL3RpbWVcIlxuICAgICAgKTtcblxuICAgIC8vIGZvcm1hdCBkYXRlXG4gICAgY29uc3QgaXNvODYwMURhdGUgPSAvXlxcZFxcZFxcZFxcZC1bMC0xXVxcZC1bMC0zXVxcZCQvO1xuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZm9ybWF0X2RhdGVcIixcbiAgICAgICAgKHZhbDogc3RyaW5nKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IGlzbzg2MDFEYXRlLnRlc3QodmFsKSA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5mb3JtYXRfZGF0ZSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBpcyBub3QgYSB2YWxpZCBkYXRlXCJcbiAgICAgICk7XG5cbiAgICAvLyBmb3JtYXQgdGltZVxuICAgIGNvbnN0IGlzbzg2MDFUaW1lID0gL14oPzpbMC0yXVxcZDpbMC01XVxcZDpbMC01XVxcZHwyMzo1OTo2MCkoPzpcXC5cXGQrKT8oPzp6fFsrLV1cXGRcXGQ6XFxkXFxkKT8kL2k7XG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJmb3JtYXRfdGltZVwiLFxuICAgICAgICAodmFsOiBzdHJpbmcpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gaXNvODYwMVRpbWUudGVzdCh2YWwpIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmZvcm1hdF90aW1lIHx8IFwiJHskZGlzcGxheU5hbWV9IGlzIG5vdCBhIHZhbGlkIHRpbWVcIlxuICAgICAgKTtcblxuICAgIC8vIGZvcm1hdCBpcHY0XG4gICAgY29uc3QgaXB2NCA9IC9eKD86KD86MjVbMC01XXwyWzAtNF1cXGR8WzAxXT9cXGRcXGQ/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVxcZHxbMDFdP1xcZFxcZD8pJC87XG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJmb3JtYXRfaXB2NFwiLFxuICAgICAgICAodmFsOiBzdHJpbmcpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gaXB2NC50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2lwdjQgfHwgXCIkeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgSVB2NCBhZGRyZXNzXCJcbiAgICAgICk7XG5cbiAgICAvLyBmb3JtYXQgaXB2NlxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICBjb25zdCBpcHY2ID0gL15cXHMqKD86KD86KD86WzAtOWEtZl17MSw0fTopezd9KD86WzAtOWEtZl17MSw0fXw6KSl8KD86KD86WzAtOWEtZl17MSw0fTopezZ9KD86OlswLTlhLWZdezEsNH18KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSl8OikpfCg/Oig/OlswLTlhLWZdezEsNH06KXs1fSg/Oig/Oig/OjpbMC05YS1mXXsxLDR9KXsxLDJ9KXw6KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSl8OikpfCg/Oig/OlswLTlhLWZdezEsNH06KXs0fSg/Oig/Oig/OjpbMC05YS1mXXsxLDR9KXsxLDN9KXwoPzooPzo6WzAtOWEtZl17MSw0fSk/Oig/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KD86KD86WzAtOWEtZl17MSw0fTopezN9KD86KD86KD86OlswLTlhLWZdezEsNH0pezEsNH0pfCg/Oig/OjpbMC05YS1mXXsxLDR9KXswLDJ9Oig/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KD86KD86WzAtOWEtZl17MSw0fTopezJ9KD86KD86KD86OlswLTlhLWZdezEsNH0pezEsNX0pfCg/Oig/OjpbMC05YS1mXXsxLDR9KXswLDN9Oig/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KD86KD86WzAtOWEtZl17MSw0fTopezF9KD86KD86KD86OlswLTlhLWZdezEsNH0pezEsNn0pfCg/Oig/OjpbMC05YS1mXXsxLDR9KXswLDR9Oig/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSl8KD86Oig/Oig/Oig/OjpbMC05YS1mXXsxLDR9KXsxLDd9KXwoPzooPzo6WzAtOWEtZl17MSw0fSl7MCw1fTooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpKSg/OiUuKyk/XFxzKiQvaTtcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImZvcm1hdF9pcHY2XCIsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBpcHY0LnRlc3QodmFsKSA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5mb3JtYXRfaXB2NiB8fCBcIiR7JGRpc3BsYXlOYW1lfSBpcyBub3QgYSB2YWxpZCBJUHY2IGFkZHJlc3NcIlxuICAgICAgKTtcblxuICAgIC8vIGZvcm1hdCBob3N0bmFtZVxuICAgIGNvbnN0IGhvc3RuYW1lID0gL15bYS16MC05XSg/OlthLXowLTktXXswLDYxfVthLXowLTldKT8oPzpcXC5bYS16MC05XSg/OlstMC05YS16XXswLDYxfVswLTlhLXpdKT8pKiQvaTtcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImZvcm1hdF9ob3N0bmFtZVwiLFxuICAgICAgICAodmFsOiBzdHJpbmcpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gaXB2NC50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2hvc3RuYW1lIHx8IFwiJHskZGlzcGxheU5hbWV9IGlzIG5vdCBhIHZhbGlkIGhvc3RuYW1lXCJcbiAgICAgICk7XG5cbiAgICAvLyBmb3JtYXQgdXJpXG4gICAgY29uc3QgdXJpID0gL14oPzpbYS16XVthLXowLTkrLS5dKjopKD86XFwvP1xcLyk/W15cXHNdKiQvaTtcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImZvcm1hdF91cmlcIixcbiAgICAgICAgKHZhbDogc3RyaW5nKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHVyaS50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X3VyaSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBpcyBub3QgYSB2YWxpZCBVUklcIlxuICAgICAgKTtcbiAgfVxuXG4gIGJpbmQoY3RybDogU2ZTdHJpbmcsIHJ1bGU6IEZsdWVudFJ1bGVDdXN0b21pemVyPHt9LCBhbnk+KSB7XG4gICAgaWYgKGN0cmwuc2NoZW1hLnBhdHRlcm4pIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1hdGNoZXMobmV3IFJlZ0V4cChjdHJsLnNjaGVtYS5wYXR0ZXJuKSk7XG4gICAgfVxuICAgIGlmIChjdHJsLnNjaGVtYS5taW5MZW5ndGgpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1pbkxlbmd0aChjdHJsLnNjaGVtYS5taW5MZW5ndGgpO1xuICAgIH1cbiAgICBpZiAoY3RybC5zY2hlbWEubWF4TGVuZ3RoKSB7XG4gICAgICBydWxlID0gcnVsZS5tYXhMZW5ndGgoY3RybC5zY2hlbWEubWF4TGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKGN0cmwuc2NoZW1hLmZvcm1hdCkge1xuICAgICAgY29uc3QgcnVsZW5hbWUgPSBgZm9ybWF0XyR7Y3RybC5zY2hlbWEuZm9ybWF0LnJlcGxhY2UoXCItXCIsIFwiXCIpfWA7XG4gICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKHJ1bGVuYW1lKTtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
