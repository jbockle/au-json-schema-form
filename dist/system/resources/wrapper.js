System.register([], function (exports_1, context_1) {
    "use strict";
    var Wrapper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Wrapper = /** @class */ (function () {
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
            exports_1("Wrapper", Wrapper);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFDUCxNQUFNO29CQUNOLE1BQU07b0JBQ04sT0FBTztvQkFDUCxRQUFRO29CQUNSLE9BQU87b0JBQ1AsS0FBSztpQkFDTixDQUFDO2dCQW1ESixjQUFDO2FBdkVELEFBdUVDOztRQUNELENBQUMiLCJmaWxlIjoicmVzb3VyY2VzL3dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVGVtcGxhdGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZVwiO1xuXG5leHBvcnQgY2xhc3MgV3JhcHBlciB7XG4gIHN0YXRpYyByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSBcIkBcIjtcblxuICBzdGF0aWMgcmVhZG9ubHkgZW1tZXRSZWdleCA9IC9eQChbYS16LV0rKSg/Oig/Oig/OiMoXFx3KykpPykoPzooKD86XFwuKD86W2EtelxcZC1dKykpKyk/KSkkLztcblxuICBzdGF0aWMgcmVhZG9ubHkgdm9pZEVsZW1lbnRzID0gW1xuICAgIFwiYXJlYVwiLFxuICAgIFwiYmFzZVwiLFxuICAgIFwiYnJcIixcbiAgICBcImNvbFwiLFxuICAgIFwiZW1iZWRcIixcbiAgICBcImhyXCIsXG4gICAgXCJpbWdcIixcbiAgICBcImlucHV0XCIsXG4gICAgXCJsaW5rXCIsXG4gICAgXCJtZXRhXCIsXG4gICAgXCJwYXJhbVwiLFxuICAgIFwic291cmNlXCIsXG4gICAgXCJ0cmFja1wiLFxuICAgIFwid2JyXCJcbiAgXTtcblxuICBzdGF0aWMgaXNDb250YWluZXIoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4ga2V5LmNoYXJBdCgwKSA9PT0gdGhpcy5jb250YWluZXJNYXJrZXI7XG4gIH1cblxuICBzdGFydD86IHN0cmluZztcbiAgZW5kPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGtleTogc3RyaW5nKSB7XG4gICAgY29uc3QgbWF0Y2hlcyA9IGtleS5tYXRjaChXcmFwcGVyLmVtbWV0UmVnZXgpO1xuXG4gICAgaWYgKHRoaXMudmFsaWRhdGVNYXRjaGVzKG1hdGNoZXMsIGtleSkpIHtcbiAgICAgIGNvbnN0IGF0dHIgPSB0aGlzLmdldEVtbWV0QXR0cihtYXRjaGVzWzFdLCBtYXRjaGVzWzJdLCBtYXRjaGVzWzNdKTtcbiAgICAgIHRoaXMuc3RhcnQgPSBgPCR7YXR0ci5lbGVtZW50fSAke2F0dHIuaWR9ICR7YXR0ci5jbGFzc2VzfT5gLnJlcGxhY2UoL1xccysvLCBcIiBcIikudHJpbSgpO1xuICAgICAgdGhpcy5lbmQgPSB0aGlzLmlzVm9pZEVsZW1lbnQoYXR0ci5lbGVtZW50KSA/IFwiXCIgOiBgPC8ke2F0dHIuZWxlbWVudH0+YDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzVm9pZEVsZW1lbnQoZWxlbWVudDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIFdyYXBwZXIudm9pZEVsZW1lbnRzLmluZGV4T2YoZWxlbWVudCkgPiAtMTtcbiAgfVxuXG4gIHByaXZhdGUgdmFsaWRhdGVNYXRjaGVzKG1hdGNoZXM6IFJlZ0V4cE1hdGNoQXJyYXksIGtleTogc3RyaW5nKSB7XG4gICAgaWYgKCFtYXRjaGVzICYmIFdyYXBwZXIuaXNDb250YWluZXIoa2V5KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgZm9ybSBrZXkgXCIke2tleX1cIiBkb2VzIG5vdCBtYXRjaCBcIl4oQGVsZW1lbnQpKCNpZCk/KCguY2xhc3MpKyk/JFwiYCk7XG4gICAgfVxuICAgIHJldHVybiAhIW1hdGNoZXM7XG4gIH1cblxuICBwcml2YXRlIGdldEVtbWV0QXR0cihcbiAgICBlbGVtZW50LCBpZCwgY2xhc3Nlc1xuICApOiB7IGVsZW1lbnQ6IHN0cmluZywgaWQ6IHN0cmluZywgY2xhc3Nlczogc3RyaW5nIH0ge1xuICAgIHJldHVybiB7XG4gICAgICBlbGVtZW50LFxuICAgICAgaWQ6IGlkID8gYGlkPVwiJHtpZH1cImAgOiBcIlwiLFxuICAgICAgY2xhc3NlczogY2xhc3NlcyA/IGBjbGFzcz1cIiR7Y2xhc3Nlcy5zcGxpdChcIi5cIikuam9pbihcIiBcIikudHJpbSgpfVwiYCA6IFwiXCJcbiAgICB9O1xuICB9XG5cbiAgYXBwbHlFbmQodGVtcGxhdGU6IElUZW1wbGF0ZSkge1xuICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLmVuZDtcbiAgICB9XG4gIH1cblxuICBhcHBseVN0YXJ0KHRlbXBsYXRlOiBJVGVtcGxhdGUpIHtcbiAgICBpZiAodGhpcy5zdGFydCkge1xuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLnN0YXJ0O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
