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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztJQU1BO1FBQ0UsMEJBQW1CLE9BQWdCO1lBQWhCLFlBQU8sR0FBUCxPQUFPLENBQVM7WUFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDekIsQ0FBQztRQUVELCtCQUFJLEdBQUo7WUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM1QixDQUFDO1FBRUQsaUNBQU0sR0FBTjtZQUNFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFaVSxnQkFBZ0I7WUFGNUIsbUNBQWUsQ0FBQyxtQkFBbUIsQ0FBQztZQUNwQywwQkFBTSxDQUFDLE9BQU8sQ0FBQzs2Q0FFYyxPQUFPO1dBRHhCLGdCQUFnQixDQWE1QjtRQUFELHVCQUFDO0tBYkQsQUFhQyxJQUFBO0lBYlksNENBQWdCIiwiZmlsZSI6InRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tQXR0cmlidXRlLCBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCAqIGFzICQgZnJvbSBcImpxdWVyeVwiO1xuaW1wb3J0IFwiYm9vdHN0cmFwXCI7XG5cbkBjdXN0b21BdHRyaWJ1dGUoXCJib290c3RyYXAtdG9vbHRpcFwiKVxuQGluamVjdChFbGVtZW50KVxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFRvb2x0aXAge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZWxlbWVudDogRWxlbWVudCkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIH1cblxuICBiaW5kKCkge1xuICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZ2dsZVwiLCBcInRvb2x0aXBcIik7XG4gICAgJCh0aGlzLmVsZW1lbnQpLnRvb2x0aXAoKTtcbiAgfVxuXG4gIHVuYmluZCgpIHtcbiAgICAkKHRoaXMuZWxlbWVudCkudG9vbHRpcChcImRpc3Bvc2VcIik7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
