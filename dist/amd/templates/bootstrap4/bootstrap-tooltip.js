var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "jquery", "bootstrap"], function (require, exports, aurelia_framework_1, $) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BootstrapTooltip = /** @class */ (function () {
        function BootstrapTooltip(element) {
            this.element = element;
            this.element = element;
        }
        BootstrapTooltip.prototype.bind = function () {
            this.element.setAttribute("data-toggle", "tooltip");
            $(this.element).tooltip();
        };
        BootstrapTooltip.prototype.unbind = function () {
            $(this.element).tooltip("dispose");
        };
        BootstrapTooltip = __decorate([
            aurelia_framework_1.customAttribute("bootstrap-tooltip"),
            aurelia_framework_1.inject(Element),
            __metadata("design:paramtypes", [Element])
        ], BootstrapTooltip);
        return BootstrapTooltip;
    }());
    exports.BootstrapTooltip = BootstrapTooltip;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1BO1FBQ0UsMEJBQW1CLE9BQWdCO1lBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUVELCtCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBRUQsaUNBQU0sR0FBTjtZQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFaVSxnQkFBZ0I7WUFGNUIsbUNBQWUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNwQywwQkFBTSxDQUFDLE9BQU8sQ0FBQzs2Q0FFYyxPQUFPO1dBRHhCLGdCQUFnQixDQWE1QjtRQUFELHVCQUFDO0tBYkQsQUFhQyxJQUFBO0lBYlksNENBQWdCIiwiZmlsZSI6InRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlLCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XHJcbmltcG9ydCBcImJvb3RzdHJhcFwiO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZShcImJvb3RzdHJhcC10b29sdGlwXCIpXHJcbkBpbmplY3QoRWxlbWVudClcclxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFRvb2x0aXAge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYmluZCgpIHtcclxuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZVwiLCBcInRvb2x0aXBcIik7XHJcbiAgICAkKHRoaXMuZWxlbWVudCkudG9vbHRpcCgpO1xyXG4gIH1cclxuXHJcbiAgdW5iaW5kKCkge1xyXG4gICAgJCh0aGlzLmVsZW1lbnQpLnRvb2x0aXAoXCJkaXNwb3NlXCIpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
