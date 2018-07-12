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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QkFDUCxNQUFNO29CQUNOLE1BQU07b0JBQ04sT0FBTztvQkFDUCxRQUFRO29CQUNSLE9BQU87b0JBQ1AsS0FBSztpQkFDTixDQUFDO2dCQW1ESixjQUFDO2FBdkVELEFBdUVDOztRQUNELENBQUMiLCJmaWxlIjoicmVzb3VyY2VzL3dyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJVGVtcGxhdGVTdG9yZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL3RlbXBsYXRlXCI7XG5cbmV4cG9ydCBjbGFzcyBXcmFwcGVyIHtcbiAgc3RhdGljIHJlYWRvbmx5IGNvbnRhaW5lck1hcmtlciA9IFwiQFwiO1xuXG4gIHN0YXRpYyByZWFkb25seSBlbW1ldFJlZ2V4ID0gL15AKFthLXotXSspKD86KD86KD86IyhcXHcrKSk/KSg/OigoPzpcXC4oPzpbYS16XFxkLV0rKSkrKT8pKSQvO1xuXG4gIHN0YXRpYyByZWFkb25seSB2b2lkRWxlbWVudHMgPSBbXG4gICAgXCJhcmVhXCIsXG4gICAgXCJiYXNlXCIsXG4gICAgXCJiclwiLFxuICAgIFwiY29sXCIsXG4gICAgXCJlbWJlZFwiLFxuICAgIFwiaHJcIixcbiAgICBcImltZ1wiLFxuICAgIFwiaW5wdXRcIixcbiAgICBcImxpbmtcIixcbiAgICBcIm1ldGFcIixcbiAgICBcInBhcmFtXCIsXG4gICAgXCJzb3VyY2VcIixcbiAgICBcInRyYWNrXCIsXG4gICAgXCJ3YnJcIlxuICBdO1xuXG4gIHN0YXRpYyBpc0NvbnRhaW5lcihrZXk6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBrZXkuY2hhckF0KDApID09PSB0aGlzLmNvbnRhaW5lck1hcmtlcjtcbiAgfVxuXG4gIHN0YXJ0Pzogc3RyaW5nO1xuICBlbmQ/OiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Ioa2V5OiBzdHJpbmcpIHtcbiAgICBjb25zdCBtYXRjaGVzID0ga2V5Lm1hdGNoKFdyYXBwZXIuZW1tZXRSZWdleCk7XG5cbiAgICBpZiAodGhpcy52YWxpZGF0ZU1hdGNoZXMobWF0Y2hlcywga2V5KSkge1xuICAgICAgY29uc3QgYXR0ciA9IHRoaXMuZ2V0RW1tZXRBdHRyKG1hdGNoZXNbMV0sIG1hdGNoZXNbMl0sIG1hdGNoZXNbM10pO1xuICAgICAgdGhpcy5zdGFydCA9IGA8JHthdHRyLmVsZW1lbnR9ICR7YXR0ci5pZH0gJHthdHRyLmNsYXNzZXN9PmAucmVwbGFjZSgvXFxzKy8sIFwiIFwiKS50cmltKCk7XG4gICAgICB0aGlzLmVuZCA9IHRoaXMuaXNWb2lkRWxlbWVudChhdHRyLmVsZW1lbnQpID8gXCJcIiA6IGA8LyR7YXR0ci5lbGVtZW50fT5gO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgaXNWb2lkRWxlbWVudChlbGVtZW50OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gV3JhcHBlci52b2lkRWxlbWVudHMuaW5kZXhPZihlbGVtZW50KSA+IC0xO1xuICB9XG5cbiAgcHJpdmF0ZSB2YWxpZGF0ZU1hdGNoZXMobWF0Y2hlczogUmVnRXhwTWF0Y2hBcnJheSwga2V5OiBzdHJpbmcpIHtcbiAgICBpZiAoIW1hdGNoZXMgJiYgV3JhcHBlci5pc0NvbnRhaW5lcihrZXkpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYHRoZSBmb3JtIGtleSBcIiR7a2V5fVwiIGRvZXMgbm90IG1hdGNoIFwiXihAZWxlbWVudCkoI2lkKT8oKC5jbGFzcykrKT8kXCJgKTtcbiAgICB9XG4gICAgcmV0dXJuICEhbWF0Y2hlcztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0RW1tZXRBdHRyKFxuICAgIGVsZW1lbnQsIGlkLCBjbGFzc2VzXG4gICk6IHsgZWxlbWVudDogc3RyaW5nLCBpZDogc3RyaW5nLCBjbGFzc2VzOiBzdHJpbmcgfSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGVsZW1lbnQsXG4gICAgICBpZDogaWQgPyBgaWQ9XCIke2lkfVwiYCA6IFwiXCIsXG4gICAgICBjbGFzc2VzOiBjbGFzc2VzID8gYGNsYXNzPVwiJHtjbGFzc2VzLnNwbGl0KFwiLlwiKS5qb2luKFwiIFwiKS50cmltKCl9XCJgIDogXCJcIlxuICAgIH07XG4gIH1cblxuICBhcHBseUVuZCh0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUpIHtcbiAgICBpZiAodGhpcy5lbmQpIHtcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5lbmQ7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlTdGFydCh0ZW1wbGF0ZTogSVRlbXBsYXRlU3RvcmUpIHtcbiAgICBpZiAodGhpcy5zdGFydCkge1xuICAgICAgdGVtcGxhdGUuY29udGVudCArPSB0aGlzLnN0YXJ0O1xuICAgIH1cbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
