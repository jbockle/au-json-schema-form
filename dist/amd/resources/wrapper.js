define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Wrapper = /** @class */ (function () {
        function Wrapper(key) {
            var matches = key.match(Wrapper.emmetRegex);
            if (this.validateMatches(matches, key)) {
                var attr = this.getEmmetAttr(matches[1], matches[2], matches[3]);
                this.start = ("<" + attr.element + " " + attr.id + " " + attr.classes + ">").replace(/\s+/, " ").trim();
                this.end = this.isVoidElement(attr.element) ? "" : "</" + attr.element + ">";
            }
        }
        Wrapper.isContainer = function (key) {
            return key.charAt(0) === this.containerMarker;
        };
        Wrapper.prototype.isVoidElement = function (element) {
            return Wrapper.voidElements.indexOf(element) > -1;
        };
        Wrapper.prototype.validateMatches = function (matches, key) {
            if (!matches && Wrapper.isContainer(key)) {
                throw new Error("the form key \"" + key + "\" does not match \"^(@element)(#id)?((.class)+)?$\"");
            }
            return !!matches;
        };
        Wrapper.prototype.getEmmetAttr = function (element, id, classes) {
            return {
                element: element,
                id: id ? "id=\"" + id + "\"" : "",
                classes: classes ? "class=\"" + classes.split(".").join(" ").trim() + "\"" : ""
            };
        };
        Wrapper.prototype.applyEnd = function (template) {
            if (this.end) {
                template.content += this.end;
            }
        };
        Wrapper.prototype.applyStart = function (template) {
            if (this.start) {
                template.content += this.start;
            }
        };
        Wrapper.containerMarker = "@";
        Wrapper.emmetRegex = /^@([a-z-]+)(?:(?:(?:#(\w+))?)(?:((?:\.(?:[a-z\d-]+))+)?))$/;
        Wrapper.voidElements = [
            "area",
            "base",
            "br",
            "col",
            "embed",
            "hr",
            "img",
            "input",
            "link",
            "meta",
            "param",
            "source",
            "track",
            "wbr"
        ];
        return Wrapper;
    }());
    exports.Wrapper = Wrapper;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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WUFDUixPQUFPO1lBQ1AsS0FBSztTQUNOLENBQUM7UUFtREosY0FBQztLQXZFRCxBQXVFQyxJQUFBO0lBdkVZLDBCQUFPIiwiZmlsZSI6InJlc291cmNlcy93cmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRlbXBsYXRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGVtcGxhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXcmFwcGVyIHtcclxuICBzdGF0aWMgcmVhZG9ubHkgY29udGFpbmVyTWFya2VyID0gXCJAXCI7XHJcblxyXG4gIHN0YXRpYyByZWFkb25seSBlbW1ldFJlZ2V4ID0gL15AKFthLXotXSspKD86KD86KD86IyhcXHcrKSk/KSg/OigoPzpcXC4oPzpbYS16XFxkLV0rKSkrKT8pKSQvO1xyXG5cclxuICBzdGF0aWMgcmVhZG9ubHkgdm9pZEVsZW1lbnRzID0gW1xyXG4gICAgXCJhcmVhXCIsXHJcbiAgICBcImJhc2VcIixcclxuICAgIFwiYnJcIixcclxuICAgIFwiY29sXCIsXHJcbiAgICBcImVtYmVkXCIsXHJcbiAgICBcImhyXCIsXHJcbiAgICBcImltZ1wiLFxyXG4gICAgXCJpbnB1dFwiLFxyXG4gICAgXCJsaW5rXCIsXHJcbiAgICBcIm1ldGFcIixcclxuICAgIFwicGFyYW1cIixcclxuICAgIFwic291cmNlXCIsXHJcbiAgICBcInRyYWNrXCIsXHJcbiAgICBcIndiclwiXHJcbiAgXTtcclxuXHJcbiAgc3RhdGljIGlzQ29udGFpbmVyKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4ga2V5LmNoYXJBdCgwKSA9PT0gdGhpcy5jb250YWluZXJNYXJrZXI7XHJcbiAgfVxyXG5cclxuICBzdGFydD86IHN0cmluZztcclxuICBlbmQ/OiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBtYXRjaGVzID0ga2V5Lm1hdGNoKFdyYXBwZXIuZW1tZXRSZWdleCk7XHJcblxyXG4gICAgaWYgKHRoaXMudmFsaWRhdGVNYXRjaGVzKG1hdGNoZXMsIGtleSkpIHtcclxuICAgICAgY29uc3QgYXR0ciA9IHRoaXMuZ2V0RW1tZXRBdHRyKG1hdGNoZXNbMV0sIG1hdGNoZXNbMl0sIG1hdGNoZXNbM10pO1xyXG4gICAgICB0aGlzLnN0YXJ0ID0gYDwke2F0dHIuZWxlbWVudH0gJHthdHRyLmlkfSAke2F0dHIuY2xhc3Nlc30+YC5yZXBsYWNlKC9cXHMrLywgXCIgXCIpLnRyaW0oKTtcclxuICAgICAgdGhpcy5lbmQgPSB0aGlzLmlzVm9pZEVsZW1lbnQoYXR0ci5lbGVtZW50KSA/IFwiXCIgOiBgPC8ke2F0dHIuZWxlbWVudH0+YDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNWb2lkRWxlbWVudChlbGVtZW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBXcmFwcGVyLnZvaWRFbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpID4gLTE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbGlkYXRlTWF0Y2hlcyhtYXRjaGVzOiBSZWdFeHBNYXRjaEFycmF5LCBrZXk6IHN0cmluZykge1xyXG4gICAgaWYgKCFtYXRjaGVzICYmIFdyYXBwZXIuaXNDb250YWluZXIoa2V5KSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBmb3JtIGtleSBcIiR7a2V5fVwiIGRvZXMgbm90IG1hdGNoIFwiXihAZWxlbWVudCkoI2lkKT8oKC5jbGFzcykrKT8kXCJgKTtcclxuICAgIH1cclxuICAgIHJldHVybiAhIW1hdGNoZXM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEVtbWV0QXR0cihcclxuICAgIGVsZW1lbnQsIGlkLCBjbGFzc2VzXHJcbiAgKTogeyBlbGVtZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGNsYXNzZXM6IHN0cmluZyB9IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGVsZW1lbnQsXHJcbiAgICAgIGlkOiBpZCA/IGBpZD1cIiR7aWR9XCJgIDogXCJcIixcclxuICAgICAgY2xhc3NlczogY2xhc3NlcyA/IGBjbGFzcz1cIiR7Y2xhc3Nlcy5zcGxpdChcIi5cIikuam9pbihcIiBcIikudHJpbSgpfVwiYCA6IFwiXCJcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBhcHBseUVuZCh0ZW1wbGF0ZTogSVRlbXBsYXRlKSB7XHJcbiAgICBpZiAodGhpcy5lbmQpIHtcclxuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLmVuZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFwcGx5U3RhcnQodGVtcGxhdGU6IElUZW1wbGF0ZSkge1xyXG4gICAgaWYgKHRoaXMuc3RhcnQpIHtcclxuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLnN0YXJ0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
