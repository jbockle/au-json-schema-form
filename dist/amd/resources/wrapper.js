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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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WUFDUixPQUFPO1lBQ1AsS0FBSztTQUNOLENBQUM7UUFtREosY0FBQztLQXZFRCxBQXVFQyxJQUFBO0lBdkVZLDBCQUFPIiwiZmlsZSI6InJlc291cmNlcy93cmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRlbXBsYXRlU3RvcmUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgV3JhcHBlciB7XG4gIHN0YXRpYyByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSBcIkBcIjtcblxuICBzdGF0aWMgcmVhZG9ubHkgZW1tZXRSZWdleCA9IC9eQChbYS16LV0rKSg/Oig/Oig/OiMoXFx3KykpPykoPzooKD86XFwuKD86W2EtelxcZC1dKykpKyk/KSkkLztcblxuICBzdGF0aWMgcmVhZG9ubHkgdm9pZEVsZW1lbnRzID0gW1xuICAgIFwiYXJlYVwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwiYnJcIixcbiAgICBcImNvbFwiLFxuICAgIFwiZW1iZWRcIixcbiAgICBcImhyXCIsXG4gICAgXCJpbWdcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJsaW5rXCIsXG4gICAgXCJtZXRhXCIsXG4gICAgXCJwYXJhbVwiLFxuICAgIFwic291cmNlXCIsXG4gICAgXCJ0cmFja1wiLFxuICAgIFwid2JyXCJcbiAgXTtcblxuICBzdGF0aWMgaXNDb250YWluZXIoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5LmNoYXJBdCgwKSA9PT0gdGhpcy5jb250YWluZXJNYXJrZXI7XG4gIH1cblxuICBzdGFydD86IHN0cmluZztcbiAgZW5kPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGtleS5tYXRjaChXcmFwcGVyLmVtbWV0UmVnZXgpO1xuXG4gICAgaWYgKHRoaXMudmFsaWRhdGVNYXRjaGVzKG1hdGNoZXMsIGtleSkpIHtcbiAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmdldEVtbWV0QXR0cihtYXRjaGVzWzFdLCBtYXRjaGVzWzJdLCBtYXRjaGVzWzNdKTtcbiAgICAgIHRoaXMuc3RhcnQgPSBgPCR7YXR0ci5lbGVtZW50fSAke2F0dHIuaWR9ICR7YXR0ci5jbGFzc2VzfT5gLnJlcGxhY2UoL1xccysvLCBcIiBcIikudHJpbSgpO1xuICAgICAgdGhpcy5lbmQgPSB0aGlzLmlzVm9pZEVsZW1lbnQoYXR0ci5lbGVtZW50KSA/IFwiXCIgOiBgPC8ke2F0dHIuZWxlbWVudH0+YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzVm9pZEVsZW1lbnQoZWxlbWVudDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFdyYXBwZXIudm9pZEVsZW1lbnRzLmluZGV4T2YoZWxlbWVudCkgPiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVNYXRjaGVzKG1hdGNoZXM6IFJlZ0V4cE1hdGNoQXJyYXksIGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCFtYXRjaGVzICYmIFdyYXBwZXIuaXNDb250YWluZXIoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgZm9ybSBrZXkgXCIke2tleX1cIiBkb2VzIG5vdCBtYXRjaCBcIl4oQGVsZW1lbnQpKCNpZCk/KCguY2xhc3MpKyk/JFwiYCk7XG4gICAgfVxuICAgIHJldHVybiAhIW1hdGNoZXM7XG4gIH1cblxuICBwcml2YXRlIGdldEVtbWV0QXR0cihcbiAgICBlbGVtZW50LCBpZCwgY2xhc3Nlc1xuICApOiB7IGVsZW1lbnQ6IHN0cmluZywgaWQ6IHN0cmluZywgY2xhc3Nlczogc3RyaW5nIH0ge1xuICAgIHJldHVybiB7XG4gICAgICBlbGVtZW50LFxuICAgICAgaWQ6IGlkID8gYGlkPVwiJHtpZH1cImAgOiBcIlwiLFxuICAgICAgY2xhc3NlczogY2xhc3NlcyA/IGBjbGFzcz1cIiR7Y2xhc3Nlcy5zcGxpdChcIi5cIikuam9pbihcIiBcIikudHJpbSgpfVwiYCA6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgYXBwbHlFbmQodGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlKSB7XG4gICAgaWYgKHRoaXMuZW5kKSB7XG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuZW5kO1xuICAgIH1cbiAgfVxuXG4gIGFwcGx5U3RhcnQodGVtcGxhdGU6IElUZW1wbGF0ZVN0b3JlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnQpIHtcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5zdGFydDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
