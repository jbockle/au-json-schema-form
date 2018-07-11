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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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UUFDUCxLQUFLO0tBQ04sQ0FBQztJQW1ESixjQUFDO0NBdkVELEFBdUVDLElBQUE7QUF2RVksMEJBQU8iLCJmaWxlIjoicmVzb3VyY2VzL3dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVGVtcGxhdGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy90ZW1wbGF0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdyYXBwZXIge1xyXG4gIHN0YXRpYyByZWFkb25seSBjb250YWluZXJNYXJrZXIgPSBcIkBcIjtcclxuXHJcbiAgc3RhdGljIHJlYWRvbmx5IGVtbWV0UmVnZXggPSAvXkAoW2Etei1dKykoPzooPzooPzojKFxcdyspKT8pKD86KCg/OlxcLig/OlthLXpcXGQtXSspKSspPykpJC87XHJcblxyXG4gIHN0YXRpYyByZWFkb25seSB2b2lkRWxlbWVudHMgPSBbXHJcbiAgICBcImFyZWFcIixcclxuICAgIFwiYmFzZVwiLFxyXG4gICAgXCJiclwiLFxyXG4gICAgXCJjb2xcIixcclxuICAgIFwiZW1iZWRcIixcclxuICAgIFwiaHJcIixcclxuICAgIFwiaW1nXCIsXHJcbiAgICBcImlucHV0XCIsXHJcbiAgICBcImxpbmtcIixcclxuICAgIFwibWV0YVwiLFxyXG4gICAgXCJwYXJhbVwiLFxyXG4gICAgXCJzb3VyY2VcIixcclxuICAgIFwidHJhY2tcIixcclxuICAgIFwid2JyXCJcclxuICBdO1xyXG5cclxuICBzdGF0aWMgaXNDb250YWluZXIoa2V5OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLmNvbnRhaW5lck1hcmtlcjtcclxuICB9XHJcblxyXG4gIHN0YXJ0Pzogc3RyaW5nO1xyXG4gIGVuZD86IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBrZXkubWF0Y2goV3JhcHBlci5lbW1ldFJlZ2V4KTtcclxuXHJcbiAgICBpZiAodGhpcy52YWxpZGF0ZU1hdGNoZXMobWF0Y2hlcywga2V5KSkge1xyXG4gICAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRFbW1ldEF0dHIobWF0Y2hlc1sxXSwgbWF0Y2hlc1syXSwgbWF0Y2hlc1szXSk7XHJcbiAgICAgIHRoaXMuc3RhcnQgPSBgPCR7YXR0ci5lbGVtZW50fSAke2F0dHIuaWR9ICR7YXR0ci5jbGFzc2VzfT5gLnJlcGxhY2UoL1xccysvLCBcIiBcIikudHJpbSgpO1xyXG4gICAgICB0aGlzLmVuZCA9IHRoaXMuaXNWb2lkRWxlbWVudChhdHRyLmVsZW1lbnQpID8gXCJcIiA6IGA8LyR7YXR0ci5lbGVtZW50fT5gO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1ZvaWRFbGVtZW50KGVsZW1lbnQ6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIFdyYXBwZXIudm9pZEVsZW1lbnRzLmluZGV4T2YoZWxlbWVudCkgPiAtMTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdmFsaWRhdGVNYXRjaGVzKG1hdGNoZXM6IFJlZ0V4cE1hdGNoQXJyYXksIGtleTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIW1hdGNoZXMgJiYgV3JhcHBlci5pc0NvbnRhaW5lcihrZXkpKSB7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlIGZvcm0ga2V5IFwiJHtrZXl9XCIgZG9lcyBub3QgbWF0Y2ggXCJeKEBlbGVtZW50KSgjaWQpPygoLmNsYXNzKSspPyRcImApO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICEhbWF0Y2hlcztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RW1tZXRBdHRyKFxyXG4gICAgZWxlbWVudCwgaWQsIGNsYXNzZXNcclxuICApOiB7IGVsZW1lbnQ6IHN0cmluZywgaWQ6IHN0cmluZywgY2xhc3Nlczogc3RyaW5nIH0ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZWxlbWVudCxcclxuICAgICAgaWQ6IGlkID8gYGlkPVwiJHtpZH1cImAgOiBcIlwiLFxyXG4gICAgICBjbGFzc2VzOiBjbGFzc2VzID8gYGNsYXNzPVwiJHtjbGFzc2VzLnNwbGl0KFwiLlwiKS5qb2luKFwiIFwiKS50cmltKCl9XCJgIDogXCJcIlxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGFwcGx5RW5kKHRlbXBsYXRlOiBJVGVtcGxhdGUpIHtcclxuICAgIGlmICh0aGlzLmVuZCkge1xyXG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuZW5kO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXBwbHlTdGFydCh0ZW1wbGF0ZTogSVRlbXBsYXRlKSB7XHJcbiAgICBpZiAodGhpcy5zdGFydCkge1xyXG4gICAgICB0ZW1wbGF0ZS5jb250ZW50ICs9IHRoaXMuc3RhcnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
