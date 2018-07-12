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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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UUFDUCxLQUFLO0tBQ04sQ0FBQztJQW1ESixjQUFDO0NBdkVELEFBdUVDLElBQUE7QUF2RVksMEJBQU8iLCJmaWxlIjoicmVzb3VyY2VzL3dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVGVtcGxhdGVTdG9yZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBXcmFwcGVyIHtcbiAgc3RhdGljIHJlYWRvbmx5IGNvbnRhaW5lck1hcmtlciA9IFwiQFwiO1xuXG4gIHN0YXRpYyByZWFkb25seSBlbW1ldFJlZ2V4ID0gL15AKFthLXotXSspKD86KD86KD86IyhcXHcrKSk/KSg/OigoPzpcXC4oPzpbYS16XFxkLV0rKSkrKT8pKSQvO1xuXG4gIHN0YXRpYyByZWFkb25seSB2b2lkRWxlbWVudHMgPSBbXG4gICAgXCJhcmVhXCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJiclwiLFxuICAgIFwiY29sXCIsXG4gICAgXCJlbWJlZFwiLFxuICAgIFwiaHJcIixcbiAgICBcImltZ1wiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImxpbmtcIixcbiAgICBcIm1ldGFcIixcbiAgICBcInBhcmFtXCIsXG4gICAgXCJzb3VyY2VcIixcbiAgICBcInRyYWNrXCIsXG4gICAgXCJ3YnJcIlxuICBdO1xuXG4gIHN0YXRpYyBpc0NvbnRhaW5lcihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLmNvbnRhaW5lck1hcmtlcjtcbiAgfVxuXG4gIHN0YXJ0Pzogc3RyaW5nO1xuICBlbmQ/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0ga2V5Lm1hdGNoKFdyYXBwZXIuZW1tZXRSZWdleCk7XG5cbiAgICBpZiAodGhpcy52YWxpZGF0ZU1hdGNoZXMobWF0Y2hlcywga2V5KSkge1xuICAgICAgY29uc3QgYXR0ciA9IHRoaXMuZ2V0RW1tZXRBdHRyKG1hdGNoZXNbMV0sIG1hdGNoZXNbMl0sIG1hdGNoZXNbM10pO1xuICAgICAgdGhpcy5zdGFydCA9IGA8JHthdHRyLmVsZW1lbnR9ICR7YXR0ci5pZH0gJHthdHRyLmNsYXNzZXN9PmAucmVwbGFjZSgvXFxzKy8sIFwiIFwiKS50cmltKCk7XG4gICAgICB0aGlzLmVuZCA9IHRoaXMuaXNWb2lkRWxlbWVudChhdHRyLmVsZW1lbnQpID8gXCJcIiA6IGA8LyR7YXR0ci5lbGVtZW50fT5gO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNWb2lkRWxlbWVudChlbGVtZW50OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gV3JhcHBlci52b2lkRWxlbWVudHMuaW5kZXhPZihlbGVtZW50KSA+IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZU1hdGNoZXMobWF0Y2hlczogUmVnRXhwTWF0Y2hBcnJheSwga2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIW1hdGNoZXMgJiYgV3JhcHBlci5pc0NvbnRhaW5lcihrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBmb3JtIGtleSBcIiR7a2V5fVwiIGRvZXMgbm90IG1hdGNoIFwiXihAZWxlbWVudCkoI2lkKT8oKC5jbGFzcykrKT8kXCJgKTtcbiAgICB9XG4gICAgcmV0dXJuICEhbWF0Y2hlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW1tZXRBdHRyKFxuICAgIGVsZW1lbnQsIGlkLCBjbGFzc2VzXG4gICk6IHsgZWxlbWVudDogc3RyaW5nLCBpZDogc3RyaW5nLCBjbGFzc2VzOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBpZDogaWQgPyBgaWQ9XCIke2lkfVwiYCA6IFwiXCIsXG4gICAgICBjbGFzc2VzOiBjbGFzc2VzID8gYGNsYXNzPVwiJHtjbGFzc2VzLnNwbGl0KFwiLlwiKS5qb2luKFwiIFwiKS50cmltKCl9XCJgIDogXCJcIlxuICAgIH07XG4gIH1cblxuICBhcHBseUVuZCh0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUpIHtcbiAgICBpZiAodGhpcy5lbmQpIHtcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5lbmQ7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlTdGFydCh0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUpIHtcbiAgICBpZiAodGhpcy5zdGFydCkge1xuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLnN0YXJ0O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
