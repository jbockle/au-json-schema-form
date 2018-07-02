System.register(["aurelia-framework", "jquery", "bootstrap"], function (exports_1, context_1) {
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
    var aurelia_framework_1, $, BootstrapTooltip;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function ($_1) {
                $ = $_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            BootstrapTooltip = /** @class */ (function () {
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
            exports_1("BootstrapTooltip", BootstrapTooltip);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2Jvb3RzdHJhcC10b29sdGlwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU9FLDBCQUFtQixPQUFnQjtvQkFBaEIsWUFBTyxHQUFQLE9BQU8sQ0FBUztvQkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLENBQUM7Z0JBRUQsK0JBQUksR0FBSjtvQkFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ3BELENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQzVCLENBQUM7Z0JBRUQsaUNBQU0sR0FBTjtvQkFDRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDckMsQ0FBQztnQkFaVSxnQkFBZ0I7b0JBRjVCLG1DQUFlLENBQUMsbUJBQW1CLENBQUM7b0JBQ3BDLDBCQUFNLENBQUMsT0FBTyxDQUFDO3FEQUVjLE9BQU87bUJBRHhCLGdCQUFnQixDQWE1QjtnQkFBRCx1QkFBQzthQWJELEFBYUM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJ0ZW1wbGF0ZXMvYm9vdHN0cmFwNC9ib290c3RyYXAtdG9vbHRpcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUF0dHJpYnV0ZSwgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgKiBhcyAkIGZyb20gXCJqcXVlcnlcIjtcbmltcG9ydCBcImJvb3RzdHJhcFwiO1xuXG5AY3VzdG9tQXR0cmlidXRlKFwiYm9vdHN0cmFwLXRvb2x0aXBcIilcbkBpbmplY3QoRWxlbWVudClcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBUb29sdGlwIHtcbiAgY29uc3RydWN0b3IocHVibGljIGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS10b2dnbGVcIiwgXCJ0b29sdGlwXCIpO1xuICAgICQodGhpcy5lbGVtZW50KS50b29sdGlwKCk7XG4gIH1cblxuICB1bmJpbmQoKSB7XG4gICAgJCh0aGlzLmVsZW1lbnQpLnRvb2x0aXAoXCJkaXNwb3NlXCIpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
