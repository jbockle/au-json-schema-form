var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ValidationRules, validationMessages } from "aurelia-validation";
import { inject } from "aurelia-framework";
import { SchemaFormConfiguration } from "../services/schema-form-configuration";
let StringRules = class StringRules {
    constructor(configuration) {
        this.configuration = configuration;
    }
    register() {
        this.add();
        this.setCustomMessages();
    }
    setCustomMessages() {
        validationMessages["minLength"] = this.configuration.messages.minLength || validationMessages["minLength"];
        validationMessages["maxLength"] = this.configuration.messages.maxLength || validationMessages["maxLength"];
        validationMessages["matches"] = this.configuration.messages.pattern || validationMessages["matches"];
        validationMessages["email"] = this.configuration.messages.format_email || validationMessages["email"];
    }
    add() {
        // format datetime
        // tslint:disable-next-line:max-line-length
        const iso8601Datetime = /^\d\d\d\d-[0-1]\d-[0-3]\d[t\s](?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)$/i;
        ValidationRules
            .customRule("format_datetime", (val) => val !== undefined ? iso8601Datetime.test(val) : true, this.configuration.messages.format_datetime || "${$displayName} is not a valid date/time.");
        // format date
        const iso8601Date = /^\d\d\d\d-[0-1]\d-[0-3]\d$/;
        ValidationRules
            .customRule("format_date", (val) => val !== undefined ? iso8601Date.test(val) : true, this.configuration.messages.format_date || "${$displayName} is not a valid date.");
        // format time
        const iso8601Time = /^(?:[0-2]\d:[0-5]\d:[0-5]\d|23:59:60)(?:\.\d+)?(?:z|[+-]\d\d:\d\d)?$/i;
        ValidationRules
            .customRule("format_time", (val) => val !== undefined ? iso8601Time.test(val) : true, this.configuration.messages.format_time || "${$displayName} is not a valid time.");
        // format ipv4
        const ipv4 = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/;
        ValidationRules
            .customRule("format_ipv4", (val) => val !== undefined ? ipv4.test(val) : true, this.configuration.messages.format_ipv4 || "${$displayName} is not a valid IPv4 address.");
        // format ipv6
        // tslint:disable-next-line:max-line-length
        const ipv6 = /^\s*(?:(?:(?:[0-9a-f]{1,4}:){7}(?:[0-9a-f]{1,4}|:))|(?:(?:[0-9a-f]{1,4}:){6}(?::[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){5}(?:(?:(?::[0-9a-f]{1,4}){1,2})|:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(?:(?:[0-9a-f]{1,4}:){4}(?:(?:(?::[0-9a-f]{1,4}){1,3})|(?:(?::[0-9a-f]{1,4})?:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){3}(?:(?:(?::[0-9a-f]{1,4}){1,4})|(?:(?::[0-9a-f]{1,4}){0,2}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){2}(?:(?:(?::[0-9a-f]{1,4}){1,5})|(?:(?::[0-9a-f]{1,4}){0,3}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?:(?:[0-9a-f]{1,4}:){1}(?:(?:(?::[0-9a-f]{1,4}){1,6})|(?:(?::[0-9a-f]{1,4}){0,4}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(?::(?:(?:(?::[0-9a-f]{1,4}){1,7})|(?:(?::[0-9a-f]{1,4}){0,5}:(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(?:\.(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(?:%.+)?\s*$/i;
        ValidationRules
            .customRule("format_ipv6", (val) => val !== undefined ? ipv4.test(val) : true, this.configuration.messages.format_ipv6 || "${$displayName} is not a valid IPv6 address.");
        // format hostname
        const hostname = /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*$/i;
        ValidationRules
            .customRule("format_hostname", (val) => val !== undefined ? ipv4.test(val) : true, this.configuration.messages.format_hostname || "${$displayName} is not a valid hostname.");
        // format uri
        const uri = /^(?:[a-z][a-z0-9+-.]*:)(?:\/?\/)?[^\s]*$/i;
        ValidationRules
            .customRule("format_uri", (val) => val !== undefined ? uri.test(val) : true, this.configuration.messages.format_uri || "${$displayName} is not a valid URI.");
        // pattern
        ValidationRules
            .customRule("pattern", (val, obj, pattern) => val !== undefined ? (new RegExp(pattern)).test(val) : true, this.configuration.messages.pattern || "${$displayName} is not correctly formatted.", (pattern) => ({ pattern }));
    }
    bind(ctrl, rule) {
        if (ctrl.form.$schema.pattern) {
            rule = rule.satisfiesRule("pattern", ctrl.form.$schema.pattern);
        }
        if (ctrl.form.$schema.minLength) {
            rule = rule.minLength(ctrl.form.$schema.minLength);
        }
        if (ctrl.form.$schema.maxLength) {
            rule = rule.maxLength(ctrl.form.$schema.maxLength);
        }
        if (ctrl.form.$schema.format && ctrl.form.$schema.format !== "email") {
            const rulename = `format_${ctrl.form.$schema.format.replace("-", "")}`;
            rule = rule.satisfiesRule(rulename);
        }
        if (ctrl.form.$schema.format === "email") {
            rule = rule.email();
        }
    }
};
StringRules = __decorate([
    inject(SchemaFormConfiguration),
    __metadata("design:paramtypes", [SchemaFormConfiguration])
], StringRules);
export { StringRules };

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxPQUFPLEVBQUU7WUFDeEMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Q0FDRixDQUFBO0FBNUdZLFdBQVc7SUFEdkIsTUFBTSxDQUFDLHVCQUF1QixDQUFDO3FDQUVLLHVCQUF1QjtHQUQvQyxXQUFXLENBNEd2QjtTQTVHWSxXQUFXIiwiZmlsZSI6InJ1bGVzL3N0cmluZy1ydWxlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbGlkYXRpb25SdWxlcywgdmFsaWRhdGlvbk1lc3NhZ2VzLCBGbHVlbnRSdWxlQ3VzdG9taXplciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xuaW1wb3J0IHsgU2ZTdHJpbmcgfSBmcm9tIFwiLi4vZm9ybS90ZXh0L3NmLXN0cmluZ1wiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uKVxuZXhwb3J0IGNsYXNzIFN0cmluZ1J1bGVzIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbikgeyB9XG4gIHJlZ2lzdGVyKCkge1xuICAgIHRoaXMuYWRkKCk7XG4gICAgdGhpcy5zZXRDdXN0b21NZXNzYWdlcygpO1xuICB9XG5cbiAgc2V0Q3VzdG9tTWVzc2FnZXMoKSB7XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wibWluTGVuZ3RoXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1pbkxlbmd0aCB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbXCJtaW5MZW5ndGhcIl07XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wibWF4TGVuZ3RoXCJdID0gdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLm1heExlbmd0aCB8fCB2YWxpZGF0aW9uTWVzc2FnZXNbXCJtYXhMZW5ndGhcIl07XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wibWF0Y2hlc1wiXSA9IHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5wYXR0ZXJuIHx8IHZhbGlkYXRpb25NZXNzYWdlc1tcIm1hdGNoZXNcIl07XG4gICAgdmFsaWRhdGlvbk1lc3NhZ2VzW1wiZW1haWxcIl0gPSB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2VtYWlsIHx8IHZhbGlkYXRpb25NZXNzYWdlc1tcImVtYWlsXCJdO1xuICB9XG5cbiAgYWRkKCkge1xuICAgIC8vIGZvcm1hdCBkYXRldGltZVxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGhcbiAgICBjb25zdCBpc284NjAxRGF0ZXRpbWUgPSAvXlxcZFxcZFxcZFxcZC1bMC0xXVxcZC1bMC0zXVxcZFt0XFxzXSg/OlswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkfDIzOjU5OjYwKSg/OlxcLlxcZCspPyg/Onp8WystXVxcZFxcZDpcXGRcXGQpJC9pO1xuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZm9ybWF0X2RhdGV0aW1lXCIsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBpc284NjAxRGF0ZXRpbWUudGVzdCh2YWwpIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLmZvcm1hdF9kYXRldGltZSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBpcyBub3QgYSB2YWxpZCBkYXRlL3RpbWUuXCJcbiAgICAgICk7XG5cbiAgICAvLyBmb3JtYXQgZGF0ZVxuICAgIGNvbnN0IGlzbzg2MDFEYXRlID0gL15cXGRcXGRcXGRcXGQtWzAtMV1cXGQtWzAtM11cXGQkLztcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImZvcm1hdF9kYXRlXCIsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBpc284NjAxRGF0ZS50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2RhdGUgfHwgXCIkeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgZGF0ZS5cIlxuICAgICAgKTtcblxuICAgIC8vIGZvcm1hdCB0aW1lXG4gICAgY29uc3QgaXNvODYwMVRpbWUgPSAvXig/OlswLTJdXFxkOlswLTVdXFxkOlswLTVdXFxkfDIzOjU5OjYwKSg/OlxcLlxcZCspPyg/Onp8WystXVxcZFxcZDpcXGRcXGQpPyQvaTtcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImZvcm1hdF90aW1lXCIsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBpc284NjAxVGltZS50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X3RpbWUgfHwgXCIkeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgdGltZS5cIlxuICAgICAgKTtcblxuICAgIC8vIGZvcm1hdCBpcHY0XG4gICAgY29uc3QgaXB2NCA9IC9eKD86KD86MjVbMC01XXwyWzAtNF1cXGR8WzAxXT9cXGRcXGQ/KVxcLil7M30oPzoyNVswLTVdfDJbMC00XVxcZHxbMDFdP1xcZFxcZD8pJC87XG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJmb3JtYXRfaXB2NFwiLFxuICAgICAgICAodmFsOiBzdHJpbmcpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gaXB2NC50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2lwdjQgfHwgXCIkeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgSVB2NCBhZGRyZXNzLlwiXG4gICAgICApO1xuXG4gICAgLy8gZm9ybWF0IGlwdjZcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgY29uc3QgaXB2NiA9IC9eXFxzKig/Oig/Oig/OlswLTlhLWZdezEsNH06KXs3fSg/OlswLTlhLWZdezEsNH18OikpfCg/Oig/OlswLTlhLWZdezEsNH06KXs2fSg/OjpbMC05YS1mXXsxLDR9fCg/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pfDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7NX0oPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSwyfSl8Oig/Oig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSg/OlxcLig/OjI1WzAtNV18MlswLTRdXFxkfDFcXGRcXGR8WzEtOV0/XFxkKSl7M30pfDopKXwoPzooPzpbMC05YS1mXXsxLDR9Oil7NH0oPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSwzfSl8KD86KD86OlswLTlhLWZdezEsNH0pPzooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg/Oig/OlswLTlhLWZdezEsNH06KXszfSg/Oig/Oig/OjpbMC05YS1mXXsxLDR9KXsxLDR9KXwoPzooPzo6WzAtOWEtZl17MSw0fSl7MCwyfTooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg/Oig/OlswLTlhLWZdezEsNH06KXsyfSg/Oig/Oig/OjpbMC05YS1mXXsxLDR9KXsxLDV9KXwoPzooPzo6WzAtOWEtZl17MSw0fSl7MCwzfTooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg/Oig/OlswLTlhLWZdezEsNH06KXsxfSg/Oig/Oig/OjpbMC05YS1mXXsxLDR9KXsxLDZ9KXwoPzooPzo6WzAtOWEtZl17MSw0fSl7MCw0fTooPzooPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkoPzpcXC4oPzoyNVswLTVdfDJbMC00XVxcZHwxXFxkXFxkfFsxLTldP1xcZCkpezN9KSl8OikpfCg/OjooPzooPzooPzo6WzAtOWEtZl17MSw0fSl7MSw3fSl8KD86KD86OlswLTlhLWZdezEsNH0pezAsNX06KD86KD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKD86XFwuKD86MjVbMC01XXwyWzAtNF1cXGR8MVxcZFxcZHxbMS05XT9cXGQpKXszfSkpfDopKSkoPzolLispP1xccyokL2k7XG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJmb3JtYXRfaXB2NlwiLFxuICAgICAgICAodmFsOiBzdHJpbmcpID0+IHZhbCAhPT0gdW5kZWZpbmVkID8gaXB2NC50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X2lwdjYgfHwgXCIkeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgSVB2NiBhZGRyZXNzLlwiXG4gICAgICApO1xuXG4gICAgLy8gZm9ybWF0IGhvc3RuYW1lXG4gICAgY29uc3QgaG9zdG5hbWUgPSAvXlthLXowLTldKD86W2EtejAtOS1dezAsNjF9W2EtejAtOV0pPyg/OlxcLlthLXowLTldKD86Wy0wLTlhLXpdezAsNjF9WzAtOWEtel0pPykqJC9pO1xuICAgIFZhbGlkYXRpb25SdWxlc1xuICAgICAgLmN1c3RvbVJ1bGUoXG4gICAgICAgIFwiZm9ybWF0X2hvc3RuYW1lXCIsXG4gICAgICAgICh2YWw6IHN0cmluZykgPT4gdmFsICE9PSB1bmRlZmluZWQgPyBpcHY0LnRlc3QodmFsKSA6IHRydWUsXG4gICAgICAgIHRoaXMuY29uZmlndXJhdGlvbi5tZXNzYWdlcy5mb3JtYXRfaG9zdG5hbWUgfHwgXCIkeyRkaXNwbGF5TmFtZX0gaXMgbm90IGEgdmFsaWQgaG9zdG5hbWUuXCJcbiAgICAgICk7XG5cbiAgICAvLyBmb3JtYXQgdXJpXG4gICAgY29uc3QgdXJpID0gL14oPzpbYS16XVthLXowLTkrLS5dKjopKD86XFwvP1xcLyk/W15cXHNdKiQvaTtcbiAgICBWYWxpZGF0aW9uUnVsZXNcbiAgICAgIC5jdXN0b21SdWxlKFxuICAgICAgICBcImZvcm1hdF91cmlcIixcbiAgICAgICAgKHZhbDogc3RyaW5nKSA9PiB2YWwgIT09IHVuZGVmaW5lZCA/IHVyaS50ZXN0KHZhbCkgOiB0cnVlLFxuICAgICAgICB0aGlzLmNvbmZpZ3VyYXRpb24ubWVzc2FnZXMuZm9ybWF0X3VyaSB8fCBcIiR7JGRpc3BsYXlOYW1lfSBpcyBub3QgYSB2YWxpZCBVUkkuXCJcbiAgICAgICk7XG5cbiAgICAvLyBwYXR0ZXJuXG4gICAgVmFsaWRhdGlvblJ1bGVzXG4gICAgICAuY3VzdG9tUnVsZShcbiAgICAgICAgXCJwYXR0ZXJuXCIsXG4gICAgICAgICh2YWwsIG9iaiwgcGF0dGVybikgPT4gdmFsICE9PSB1bmRlZmluZWQgPyAobmV3IFJlZ0V4cChwYXR0ZXJuKSkudGVzdCh2YWwpIDogdHJ1ZSxcbiAgICAgICAgdGhpcy5jb25maWd1cmF0aW9uLm1lc3NhZ2VzLnBhdHRlcm4gfHwgXCIkeyRkaXNwbGF5TmFtZX0gaXMgbm90IGNvcnJlY3RseSBmb3JtYXR0ZWQuXCIsXG4gICAgICAgIChwYXR0ZXJuKSA9PiAoeyBwYXR0ZXJuIH0pXG4gICAgICApO1xuICB9XG5cbiAgYmluZChjdHJsOiBTZlN0cmluZywgcnVsZTogRmx1ZW50UnVsZUN1c3RvbWl6ZXI8e30sIGFueT4pIHtcbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEucGF0dGVybikge1xuICAgICAgcnVsZSA9IHJ1bGUuc2F0aXNmaWVzUnVsZShcInBhdHRlcm5cIiwgY3RybC5mb3JtLiRzY2hlbWEucGF0dGVybik7XG4gICAgfVxuICAgIGlmIChjdHJsLmZvcm0uJHNjaGVtYS5taW5MZW5ndGgpIHtcbiAgICAgIHJ1bGUgPSBydWxlLm1pbkxlbmd0aChjdHJsLmZvcm0uJHNjaGVtYS5taW5MZW5ndGgpO1xuICAgIH1cbiAgICBpZiAoY3RybC5mb3JtLiRzY2hlbWEubWF4TGVuZ3RoKSB7XG4gICAgICBydWxlID0gcnVsZS5tYXhMZW5ndGgoY3RybC5mb3JtLiRzY2hlbWEubWF4TGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLmZvcm1hdCAmJiBjdHJsLmZvcm0uJHNjaGVtYS5mb3JtYXQgIT09IFwiZW1haWxcIikge1xuICAgICAgY29uc3QgcnVsZW5hbWUgPSBgZm9ybWF0XyR7Y3RybC5mb3JtLiRzY2hlbWEuZm9ybWF0LnJlcGxhY2UoXCItXCIsIFwiXCIpfWA7XG4gICAgICBydWxlID0gcnVsZS5zYXRpc2ZpZXNSdWxlKHJ1bGVuYW1lKTtcbiAgICB9XG4gICAgaWYgKGN0cmwuZm9ybS4kc2NoZW1hLmZvcm1hdCA9PT0gXCJlbWFpbFwiKSB7XG4gICAgICBydWxlID0gcnVsZS5lbWFpbCgpO1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
