"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var $ = require("jquery");
require("bootstrap");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdURBQTREO0FBQzVELDBCQUE0QjtBQUM1QixxQkFBbUI7QUFJbkI7SUFDRSwwQkFBbUIsT0FBZ0I7UUFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUN6QixDQUFDO0lBRUQsK0JBQUksR0FBSjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUNwRCxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQ0FBTSxHQUFOO1FBQ0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQVpVLGdCQUFnQjtRQUY1QixtQ0FBZSxDQUFDLG1CQUFtQixDQUFDO1FBQ3BDLDBCQUFNLENBQUMsT0FBTyxDQUFDO3lDQUVjLE9BQU87T0FEeEIsZ0JBQWdCLENBYTVCO0lBQUQsdUJBQUM7Q0FiRCxBQWFDLElBQUE7QUFiWSw0Q0FBZ0IiLCJmaWxlIjoidGVtcGxhdGVzL2Jvb3RzdHJhcDQvYm9vdHN0cmFwLXRvb2x0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21BdHRyaWJ1dGUsIGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xuaW1wb3J0ICogYXMgJCBmcm9tIFwianF1ZXJ5XCI7XG5pbXBvcnQgXCJib290c3RyYXBcIjtcblxuQGN1c3RvbUF0dHJpYnV0ZShcImJvb3RzdHJhcC10b29sdGlwXCIpXG5AaW5qZWN0KEVsZW1lbnQpXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVG9vbHRpcCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgfVxuXG4gIGJpbmQoKSB7XG4gICAgdGhpcy5lbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtdG9nZ2xlXCIsIFwidG9vbHRpcFwiKTtcbiAgICAkKHRoaXMuZWxlbWVudCkudG9vbHRpcCgpO1xuICB9XG5cbiAgdW5iaW5kKCkge1xuICAgICQodGhpcy5lbGVtZW50KS50b29sdGlwKFwiZGlzcG9zZVwiKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
