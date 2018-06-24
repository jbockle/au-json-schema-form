var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-binding"], function (require, exports, aurelia_binding_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var NumberValueConverter = /** @class */ (function () {
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
        NumberValueConverter = __decorate([
            aurelia_binding_1.valueConverter("number")
        ], NumberValueConverter);
        return NumberValueConverter;
    }());
    exports.NumberValueConverter = NumberValueConverter;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFHQTtRQUFBO1FBU0EsQ0FBQztRQVJDLHFDQUFNLEdBQU4sVUFBTyxHQUFHO1lBQ1IsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBRUQsdUNBQVEsR0FBUixVQUFTLEdBQUc7WUFDVixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7Z0JBQUUsT0FBTzthQUFFO1lBQzNCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFSVSxvQkFBb0I7WUFEaEMsZ0NBQWMsQ0FBQyxRQUFRLENBQUM7V0FDWixvQkFBb0IsQ0FTaEM7UUFBRCwyQkFBQztLQVRELEFBU0MsSUFBQTtJQVRZLG9EQUFvQiIsImZpbGUiOiJ2YWx1ZS1jb252ZXJ0ZXJzL251bWJlci12YWx1ZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2YWx1ZUNvbnZlcnRlciB9IGZyb20gXCJhdXJlbGlhLWJpbmRpbmdcIjtcblxuQHZhbHVlQ29udmVydGVyKFwibnVtYmVyXCIpXG5leHBvcnQgY2xhc3MgTnVtYmVyVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZyb21WaWV3KHZhbCkge1xuICAgIGlmICh2YWwgPT09IFwiXCIpIHsgcmV0dXJuOyB9XG4gICAgcmV0dXJuIE51bWJlcih2YWwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
