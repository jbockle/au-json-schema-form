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

//# sourceMappingURL=data:application/json;charset=utf8;base64,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WUFDUixPQUFPO1lBQ1AsS0FBSztTQUNOLENBQUM7UUFtREosY0FBQztLQXZFRCxBQXVFQyxJQUFBO0lBdkVZLDBCQUFPIiwiZmlsZSI6InJlc291cmNlcy93cmFwcGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVRlbXBsYXRlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvdGVtcGxhdGVcIjtcblxuZXhwb3J0IGNsYXNzIFdyYXBwZXIge1xuICBzdGF0aWMgcmVhZG9ubHkgY29udGFpbmVyTWFya2VyID0gXCJAXCI7XG5cbiAgc3RhdGljIHJlYWRvbmx5IGVtbWV0UmVnZXggPSAvXkAoW2Etei1dKykoPzooPzooPzojKFxcdyspKT8pKD86KCg/OlxcLig/OlthLXpcXGQtXSspKSspPykpJC87XG5cbiAgc3RhdGljIHJlYWRvbmx5IHZvaWRFbGVtZW50cyA9IFtcbiAgICBcImFyZWFcIixcbiAgICBcImJhc2VcIixcbiAgICBcImJyXCIsXG4gICAgXCJjb2xcIixcbiAgICBcImVtYmVkXCIsXG4gICAgXCJoclwiLFxuICAgIFwiaW1nXCIsXG4gICAgXCJpbnB1dFwiLFxuICAgIFwibGlua1wiLFxuICAgIFwibWV0YVwiLFxuICAgIFwicGFyYW1cIixcbiAgICBcInNvdXJjZVwiLFxuICAgIFwidHJhY2tcIixcbiAgICBcIndiclwiXG4gIF07XG5cbiAgc3RhdGljIGlzQ29udGFpbmVyKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIGtleS5jaGFyQXQoMCkgPT09IHRoaXMuY29udGFpbmVyTWFya2VyO1xuICB9XG5cbiAgc3RhcnQ/OiBzdHJpbmc7XG4gIGVuZD86IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihrZXk6IHN0cmluZykge1xuICAgIGNvbnN0IG1hdGNoZXMgPSBrZXkubWF0Y2goV3JhcHBlci5lbW1ldFJlZ2V4KTtcblxuICAgIGlmICh0aGlzLnZhbGlkYXRlTWF0Y2hlcyhtYXRjaGVzLCBrZXkpKSB7XG4gICAgICBjb25zdCBhdHRyID0gdGhpcy5nZXRFbW1ldEF0dHIobWF0Y2hlc1sxXSwgbWF0Y2hlc1syXSwgbWF0Y2hlc1szXSk7XG4gICAgICB0aGlzLnN0YXJ0ID0gYDwke2F0dHIuZWxlbWVudH0gJHthdHRyLmlkfSAke2F0dHIuY2xhc3Nlc30+YC5yZXBsYWNlKC9cXHMrLywgXCIgXCIpLnRyaW0oKTtcbiAgICAgIHRoaXMuZW5kID0gdGhpcy5pc1ZvaWRFbGVtZW50KGF0dHIuZWxlbWVudCkgPyBcIlwiIDogYDwvJHthdHRyLmVsZW1lbnR9PmA7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBpc1ZvaWRFbGVtZW50KGVsZW1lbnQ6IHN0cmluZykge1xuICAgIHJldHVybiBXcmFwcGVyLnZvaWRFbGVtZW50cy5pbmRleE9mKGVsZW1lbnQpID4gLTE7XG4gIH1cblxuICBwcml2YXRlIHZhbGlkYXRlTWF0Y2hlcyhtYXRjaGVzOiBSZWdFeHBNYXRjaEFycmF5LCBrZXk6IHN0cmluZykge1xuICAgIGlmICghbWF0Y2hlcyAmJiBXcmFwcGVyLmlzQ29udGFpbmVyKGtleSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgdGhlIGZvcm0ga2V5IFwiJHtrZXl9XCIgZG9lcyBub3QgbWF0Y2ggXCJeKEBlbGVtZW50KSgjaWQpPygoLmNsYXNzKSspPyRcImApO1xuICAgIH1cbiAgICByZXR1cm4gISFtYXRjaGVzO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRFbW1ldEF0dHIoXG4gICAgZWxlbWVudCwgaWQsIGNsYXNzZXNcbiAgKTogeyBlbGVtZW50OiBzdHJpbmcsIGlkOiBzdHJpbmcsIGNsYXNzZXM6IHN0cmluZyB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgZWxlbWVudCxcbiAgICAgIGlkOiBpZCA/IGBpZD1cIiR7aWR9XCJgIDogXCJcIixcbiAgICAgIGNsYXNzZXM6IGNsYXNzZXMgPyBgY2xhc3M9XCIke2NsYXNzZXMuc3BsaXQoXCIuXCIpLmpvaW4oXCIgXCIpLnRyaW0oKX1cImAgOiBcIlwiXG4gICAgfTtcbiAgfVxuXG4gIGFwcGx5RW5kKHRlbXBsYXRlOiBJVGVtcGxhdGUpIHtcbiAgICBpZiAodGhpcy5lbmQpIHtcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5lbmQ7XG4gICAgfVxuICB9XG5cbiAgYXBwbHlTdGFydCh0ZW1wbGF0ZTogSVRlbXBsYXRlKSB7XG4gICAgaWYgKHRoaXMuc3RhcnQpIHtcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQgKz0gdGhpcy5zdGFydDtcbiAgICB9XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
