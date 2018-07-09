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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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UUFDUCxLQUFLO0tBQ04sQ0FBQztJQW1ESixjQUFDO0NBdkVELEFBdUVDLElBQUE7QUF2RVksMEJBQU8iLCJmaWxlIjoicmVzb3VyY2VzL3dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVGVtcGxhdGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgV3JhcHBlciB7XG4gIHN0YXRpYyByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSBcIkBcIjtcblxuICBzdGF0aWMgcmVhZG9ubHkgZW1tZXRSZWdleCA9IC9eQChbYS16LV0rKSg/Oig/Oig/OiMoXFx3KykpPykoPzooKD86XFwuKD86W2EtelxcZC1dKykpKyk/KSkkLztcblxuICBzdGF0aWMgcmVhZG9ubHkgdm9pZEVsZW1lbnRzID0gW1xuICAgIFwiYXJlYVwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwiYnJcIixcbiAgICBcImNvbFwiLFxuICAgIFwiZW1iZWRcIixcbiAgICBcImhyXCIsXG4gICAgXCJpbWdcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJsaW5rXCIsXG4gICAgXCJtZXRhXCIsXG4gICAgXCJwYXJhbVwiLFxuICAgIFwic291cmNlXCIsXG4gICAgXCJ0cmFja1wiLFxuICAgIFwid2JyXCJcbiAgXTtcblxuICBzdGF0aWMgaXNDb250YWluZXIoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5LmNoYXJBdCgwKSA9PT0gdGhpcy5jb250YWluZXJNYXJrZXI7XG4gIH1cblxuICBzdGFydD86IHN0cmluZztcbiAgZW5kPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGtleS5tYXRjaChXcmFwcGVyLmVtbWV0UmVnZXgpO1xuXG4gICAgaWYgKHRoaXMudmFsaWRhdGVNYXRjaGVzKG1hdGNoZXMsIGtleSkpIHtcbiAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmdldEVtbWV0QXR0cihtYXRjaGVzWzFdLCBtYXRjaGVzWzJdLCBtYXRjaGVzWzNdKTtcbiAgICAgIHRoaXMuc3RhcnQgPSBgPCR7YXR0ci5lbGVtZW50fSAke2F0dHIuaWR9ICR7YXR0ci5jbGFzc2VzfT5gLnJlcGxhY2UoL1xccysvLCBcIiBcIikudHJpbSgpO1xuICAgICAgdGhpcy5lbmQgPSB0aGlzLmlzVm9pZEVsZW1lbnQoYXR0ci5lbGVtZW50KSA/IFwiXCIgOiBgPC8ke2F0dHIuZWxlbWVudH0+YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzVm9pZEVsZW1lbnQoZWxlbWVudDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFdyYXBwZXIudm9pZEVsZW1lbnRzLmluZGV4T2YoZWxlbWVudCkgPiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVNYXRjaGVzKG1hdGNoZXM6IFJlZ0V4cE1hdGNoQXJyYXksIGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCFtYXRjaGVzICYmIFdyYXBwZXIuaXNDb250YWluZXIoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgZm9ybSBrZXkgXCIke2tleX1cIiBkb2VzIG5vdCBtYXRjaCBcIl4oQGVsZW1lbnQpKCNpZCk/KCguY2xhc3MpKyk/JFwiYCk7XG4gICAgfVxuICAgIHJldHVybiAhIW1hdGNoZXM7XG4gIH1cblxuICBwcml2YXRlIGdldEVtbWV0QXR0cihcbiAgICBlbGVtZW50LCBpZCwgY2xhc3Nlc1xuICApOiB7IGVsZW1lbnQ6IHN0cmluZywgaWQ6IHN0cmluZywgY2xhc3Nlczogc3RyaW5nIH0ge1xuICAgIHJldHVybiB7XG4gICAgICBlbGVtZW50LFxuICAgICAgaWQ6IGlkID8gYGlkPVwiJHtpZH1cImAgOiBcIlwiLFxuICAgICAgY2xhc3NlczogY2xhc3NlcyA/IGBjbGFzcz1cIiR7Y2xhc3Nlcy5zcGxpdChcIi5cIikuam9pbihcIiBcIikudHJpbSgpfVwiYCA6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgYXBwbHlFbmQodGVtcGxhdGU6IElUZW1wbGF0ZSkge1xuICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLmVuZDtcbiAgICB9XG4gIH1cblxuICBhcHBseVN0YXJ0KHRlbXBsYXRlOiBJVGVtcGxhdGUpIHtcbiAgICBpZiAodGhpcy5zdGFydCkge1xuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLnN0YXJ0O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
