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
                    if (ctrl.schema.format && ctrl.schema.format !== "email") {
                        var rulename = "format_" + ctrl.schema.format.replace("-", "");
                        rule = rule.satisfiesRule(rulename);
                    }
                    if (ctrl.schema.format === "email") {
                        rule = rule.email();
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7cUJBQ3REO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7d0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzlDO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7d0JBQ3pCLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQzlDO29CQUNELElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO3dCQUN4RCxJQUFNLFFBQVEsR0FBRyxZQUFVLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFHLENBQUM7d0JBQ2pFLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUNyQztvQkFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTt3QkFDbEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDckI7Z0JBQ0gsQ0FBQztnQkFsR1UsV0FBVztvQkFEdkIsMEJBQU0sQ0FBQyxtREFBdUIsQ0FBQztxREFFSyxtREFBdUI7bUJBRC9DLFdBQVcsQ0FtR3ZCO2dCQUFELGtCQUFDO2FBbkdELEFBbUdDOztRQUNELENBQUMiLCJmaWxlIjoicnVsZXMvc3RyaW5nLXJ1bGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFsaWRhdGlvblJ1bGVzLCB2YWxpZGF0aW9uTWVzc2FnZXMsIEZsdWVudFJ1bGVDdXN0b21pemVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XG5pbXBvcnQgeyBTZlN0cmluZyB9IGZyb20gXCIuLi9mb3JtL3RleHQvc2Ytc3RyaW5nXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24pXG5leHBvcnQgY2xhc3MgU3RyaW5nUnVsZXMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKSB7IH1cbiAgcmVnaXN0ZXIoKSB7XG4gICAgdGhpcy5hZGQoKTtcbiAgICB0aGlzLnNldEN1c3RvbU1lc3NhZ2VzKCk7XG4gIH1cblxuICBzZXRDdXN0b21NZXNzYWdlcygpIHtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXNbXCJtaW5MZW5ndGhcIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWluTGVuZ3RoIHx8IHZhbGlkYXRpb25NZXNzYWdlc1tcIm1pbkxlbmd0aFwiXTtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXNbXCJtYXhMZW5ndGhcIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMubWF4TGVuZ3RoIHx8IHZhbGlkYXRpb25NZXNzYWdlc1tcIm1heExlbmd0aFwiXTtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXNbXCJtYXRjaGVzXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLnBhdHRlcm4gfHwgdmFsaWRhdGlvbk1lc3NhZ2VzW1wibWF0Y2hlc1wiXTtcbiAgICB2YWxpZGF0aW9uTWVzc2FnZXNbXCJlbWFpbFwiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5mb3JtYXRfZW1haWwgfHwgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiZW1haWxcIl07XG4gIH1cblxuICBhZGQoKSB7XG4gICAgLy8gZm9ybWF0IGRhdGV0aW1lXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIGNvbnN0IGlzbzg2MDFEYXRldGltZSA9IC9eXFxkXFxkXFxkXFxkLVswLTFdXFxkLVswLTNdXFxkW3RcXHNdKD86WzAtMl1cXGQ6WzAtNV1cXGQ6WzAtNV1cXGR8MjM6NTk6NjApKD86XFwuXFxkKyk/KD86enxbKy1dXFxkXFxkOlxcZFxcZCkkL2k7XG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJmb3JtYXRfZGF0ZXRpbWVcIixcbiAgICAgICAgKHZhbDogc3RyaW5nKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IGlzbzg2MDFEYXRldGltZS50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2RhdGV0aW1lIHx8IFwiJHskZGlzcGxheU5hbWV9IGlzIG5vdCBhIHZhbGlkIGRhdGUvdGltZVwiXG4gICAgICApO1xuXG4gICAgLy8gZm9ybWF0IGRhdGVcbiAgICBjb25zdCBpc284NjAxRGF0ZSA9IC9eXFxkXFxkXFxkXFxkLVswLTFdXFxkLVswLTNdXFxkJC87XG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJmb3JtYXRfZGF0ZVwiLFxuICAgICAgICAodmFsOiBzdHJpbmcpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gaXNvODYwMURhdGUudGVzdCh2YWwpIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmZvcm1hdF9kYXRlIHx8IFwiJHskZGlzcGxheU5hbWV9IGlzIG5vdCBhIHZhbGlkIGRhdGVcIlxuICAgICAgKTtcblxuICAgIC8vIGZvcm1hdCB0aW1lXG4gICAgY29uc3QgaXNvODYwMVRpbWUgPSAvXig/OlswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkfDIzOjU5OjYwKSg/OlxcLlxcZCspPyg/Onp8WystXVxcZFxcZDpcXGRcXGQpPyQvaTtcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImZvcm1hdF90aW1lXCIsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBpc284NjAxVGltZS50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X3RpbWUgfHwgXCIkeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgdGltZVwiXG4gICAgICApO1xuXG4gICAgLy8gZm9ybWF0IGlwdjRcbiAgICBjb25zdCBpcHY0ID0gL14oPzooPzoyNVswLTVdfDJbMC00XVxcZHxbMDFdP1xcZFxcZD8pXFwuKXszfSg/OjI1WzAtNV18MlswLTRdXFxkfFswMV0/XFxkXFxkPykkLztcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImZvcm1hdF9pcHY0XCIsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBpcHY0LnRlc3QodmFsKSA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5mb3JtYXRfaXB2NCB8fCBcIiR7JGRpc3BsYXlOYW1lfSBpcyBub3QgYSB2YWxpZCBJUHY0IGFkZHJlc3NcIlxuICAgICAgKTtcblxuICAgIC8vIGZvcm1hdCBpcHY2XG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgIGNvbnN0IGlwdjYgPSAvXlxccyooPzooPzooPzpbMC05YS1mXXsxLDR9Oil7N30oPzpbMC05YS1mXXsxLDR9fDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7Nn0oPzo6WzAtOWEtZl17MSw0fXwoPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KD86KD86WzAtOWEtZl17MSw0fTopezV9KD86KD86KD86OlswLTlhLWZdezEsNH0pezEsMn0pfDooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KXw6KSl8KD86KD86WzAtOWEtZl17MSw0fTopezR9KD86KD86KD86OlswLTlhLWZdezEsNH0pezEsM30pfCg/Oig/OjpbMC05YS1mXXsxLDR9KT86KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7M30oPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSw0fSl8KD86KD86OlswLTlhLWZdezEsNH0pezAsMn06KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7Mn0oPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSw1fSl8KD86KD86OlswLTlhLWZdezEsNH0pezAsM306KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7MX0oPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSw2fSl8KD86KD86OlswLTlhLWZdezEsNH0pezAsNH06KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKXwoPzo6KD86KD86KD86OlswLTlhLWZdezEsNH0pezEsN30pfCg/Oig/OjpbMC05YS1mXXsxLDR9KXswLDV9Oig/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pKXw6KSkpKD86JS4rKT9cXHMqJC9pO1xuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZm9ybWF0X2lwdjZcIixcbiAgICAgICAgKHZhbDogc3RyaW5nKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IGlwdjQudGVzdCh2YWwpIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmZvcm1hdF9pcHY2IHx8IFwiJHskZGlzcGxheU5hbWV9IGlzIG5vdCBhIHZhbGlkIElQdjYgYWRkcmVzc1wiXG4gICAgICApO1xuXG4gICAgLy8gZm9ybWF0IGhvc3RuYW1lXG4gICAgY29uc3QgaG9zdG5hbWUgPSAvXlthLXowLTldKD86W2EtejAtOS1dezAsNjF9W2EtejAtOV0pPyg/OlxcLlthLXowLTldKD86Wy0wLTlhLXpdezAsNjF9WzAtOWEtel0pPykqJC9pO1xuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZm9ybWF0X2hvc3RuYW1lXCIsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBpcHY0LnRlc3QodmFsKSA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5mb3JtYXRfaG9zdG5hbWUgfHwgXCIkeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgaG9zdG5hbWVcIlxuICAgICAgKTtcblxuICAgIC8vIGZvcm1hdCB1cmlcbiAgICBjb25zdCB1cmkgPSAvXig/OlthLXpdW2EtejAtOSstLl0qOikoPzpcXC8/XFwvKT9bXlxcc10qJC9pO1xuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZm9ybWF0X3VyaVwiLFxuICAgICAgICAodmFsOiBzdHJpbmcpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gdXJpLnRlc3QodmFsKSA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5mb3JtYXRfdXJpIHx8IFwiJHskZGlzcGxheU5hbWV9IGlzIG5vdCBhIHZhbGlkIFVSSVwiXG4gICAgICApO1xuICB9XG5cbiAgYmluZChjdHJsOiBTZlN0cmluZywgcnVsZTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4pIHtcbiAgICBpZiAoY3RybC5zY2hlbWEucGF0dGVybikge1xuICAgICAgcnVsZSA9IHJ1bGUubWF0Y2hlcyhuZXcgUmVnRXhwKGN0cmwuc2NoZW1hLnBhdHRlcm4pKTtcbiAgICB9XG4gICAgaWYgKGN0cmwuc2NoZW1hLm1pbkxlbmd0aCkge1xuICAgICAgcnVsZSA9IHJ1bGUubWluTGVuZ3RoKGN0cmwuc2NoZW1hLm1pbkxlbmd0aCk7XG4gICAgfVxuICAgIGlmIChjdHJsLnNjaGVtYS5tYXhMZW5ndGgpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1heExlbmd0aChjdHJsLnNjaGVtYS5tYXhMZW5ndGgpO1xuICAgIH1cbiAgICBpZiAoY3RybC5zY2hlbWEuZm9ybWF0ICYmIGN0cmwuc2NoZW1hLmZvcm1hdCAhPT0gXCJlbWFpbFwiKSB7XG4gICAgICBjb25zdCBydWxlbmFtZSA9IGBmb3JtYXRfJHtjdHJsLnNjaGVtYS5mb3JtYXQucmVwbGFjZShcIi1cIiwgXCJcIil9YDtcbiAgICAgIHJ1bGUgPSBydWxlLnNhdGlzZmllc1J1bGUocnVsZW5hbWUpO1xuICAgIH1cbiAgICBpZiAoY3RybC5zY2hlbWEuZm9ybWF0ID09PSBcImVtYWlsXCIpIHtcbiAgICAgIHJ1bGUgPSBydWxlLmVtYWlsKCk7XG4gICAgfVxuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
