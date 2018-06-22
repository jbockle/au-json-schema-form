System.register([], function (exports_1, context_1) {
    "use strict";
    var NumberValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NumberValueConverter = /** @class */ (function () {
                function NumberValueConverter() {
                }
                NumberValueConverter.prototype.toView = function (val) {
                    return val;
                };
                NumberValueConverter.prototype.fromView = function (val) {
                    if (val === "") {
                        return;
                    }
                    return Number(val);
                };
                return NumberValueConverter;
            }());
            exports_1("NumberValueConverter", NumberValueConverter);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyVmFsdWVDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztZQUFBO2dCQUFBO2dCQVNBLENBQUM7Z0JBUkMscUNBQU0sR0FBTixVQUFPLEdBQUc7b0JBQ1IsT0FBTyxHQUFHLENBQUM7Z0JBQ2IsQ0FBQztnQkFFRCx1Q0FBUSxHQUFSLFVBQVMsR0FBRztvQkFDVixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7d0JBQUUsT0FBTztxQkFBRTtvQkFDM0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0gsMkJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTs7UUFDRCxDQUFDIiwiZmlsZSI6InZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyVmFsdWVDb252ZXJ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTnVtYmVyVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZyb21WaWV3KHZhbCkge1xuICAgIGlmICh2YWwgPT09IFwiXCIpIHsgcmV0dXJuOyB9XG4gICAgcmV0dXJuIE51bWJlcih2YWwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
