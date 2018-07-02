var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { customAttribute, inject } from "aurelia-framework";
import * as $ from "jquery";
import "bootstrap";
let BootstrapTooltip = class BootstrapTooltip {
    constructor(element) {
        this.element = element;
        this.element = element;
    }
    bind() {
        this.element.setAttribute("data-toggle", "tooltip");
        $(this.element).tooltip();
    }
    unbind() {
        $(this.element).tooltip("dispose");
    }
};
BootstrapTooltip = __decorate([
    customAttribute("bootstrap-tooltip"),
    inject(Element),
    __metadata("design:paramtypes", [Element])
], BootstrapTooltip);
export { BootstrapTooltip };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDNUQsT0FBTyxLQUFLLENBQUMsTUFBTSxRQUFRLENBQUM7QUFDNUIsT0FBTyxXQUFXLENBQUM7QUFJbkIsSUFBYSxnQkFBZ0IsR0FBN0I7SUFDRSxZQUFtQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2pDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELE1BQU07UUFDSixDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0NBQ0YsQ0FBQTtBQWJZLGdCQUFnQjtJQUY1QixlQUFlLENBQUMsbUJBQW1CLENBQUM7SUFDcEMsTUFBTSxDQUFDLE9BQU8sQ0FBQztxQ0FFYyxPQUFPO0dBRHhCLGdCQUFnQixDQWE1QjtTQWJZLGdCQUFnQiIsImZpbGUiOiJ0ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUF0dHJpYnV0ZSwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBcImJvb3RzdHJhcFwiO1xuXG5AY3VzdG9tQXR0cmlidXRlKFwiYm9vdHN0cmFwLXRvb2x0aXBcIilcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBUb29sdGlwIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGVcIiwgXCJ0b29sdGlwXCIpO1xuICAgICQodGhpcy5lbGVtZW50KS50b29sdGlwKCk7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgJCh0aGlzLmVsZW1lbnQpLnRvb2x0aXAoXCJkaXNwb3NlXCIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
