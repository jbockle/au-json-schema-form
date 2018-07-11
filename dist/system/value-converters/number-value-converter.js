System.register(["aurelia-binding"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var aurelia_binding_1, NumberValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_binding_1_1) {
                aurelia_binding_1 = aurelia_binding_1_1;
            }
        ],
        execute: function () {
            NumberValueConverter = /** @class */ (function () {
                function NumberValueConverter() {
                }
                NumberValueConverter.prototype.toView = function (val) {
                    return val;
                };
                NumberValueConverter.prototype.fromView = function (val) {
                    if (val === "") {
                        return null;
                    }
                    return Number(val);
                };
                NumberValueConverter = __decorate([
                    aurelia_binding_1.valueConverter("number")
                ], NumberValueConverter);
                return NumberValueConverter;
            }());
            exports_1("NumberValueConverter", NumberValueConverter);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR0E7Z0JBU0EsQ0FBQztnQkFSQyxxQ0FBTSxHQUFOLFVBQU8sR0FBRztvQkFDUixPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUVELHVDQUFRLEdBQVIsVUFBUyxHQUFHO29CQUNWLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTt3QkFBRSxPQUFPLElBQUksQ0FBQztxQkFBRTtvQkFDaEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBUlUsb0JBQW9CO29CQURoQyxnQ0FBYyxDQUFDLFFBQVEsQ0FBQzttQkFDWixvQkFBb0IsQ0FTaEM7Z0JBQUQsMkJBQUM7YUFURCxBQVNDOztRQUNELENBQUMiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9udW1iZXItdmFsdWUtY29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsdWVDb252ZXJ0ZXIgfSBmcm9tIFwiYXVyZWxpYS1iaW5kaW5nXCI7XHJcblxyXG5AdmFsdWVDb252ZXJ0ZXIoXCJudW1iZXJcIilcclxuZXhwb3J0IGNsYXNzIE51bWJlclZhbHVlQ29udmVydGVyIHtcclxuICB0b1ZpZXcodmFsKSB7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgZnJvbVZpZXcodmFsKSB7XHJcbiAgICBpZiAodmFsID09PSBcIlwiKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICByZXR1cm4gTnVtYmVyKHZhbCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
