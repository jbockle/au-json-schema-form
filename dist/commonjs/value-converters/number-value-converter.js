"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_binding_1 = require("aurelia-binding");
var NumberValueConverter = /** @class */ (function () {
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
exports.NumberValueConverter = NumberValueConverter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1EQUFpRDtBQUdqRDtJQUFBO0lBU0EsQ0FBQztJQVJDLHFDQUFNLEdBQU4sVUFBTyxHQUFHO1FBQ1IsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsdUNBQVEsR0FBUixVQUFTLEdBQUc7UUFDVixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxPQUFPLElBQUksQ0FBQztTQUFFO1FBQ2hDLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFSVSxvQkFBb0I7UUFEaEMsZ0NBQWMsQ0FBQyxRQUFRLENBQUM7T0FDWixvQkFBb0IsQ0FTaEM7SUFBRCwyQkFBQztDQVRELEFBU0MsSUFBQTtBQVRZLG9EQUFvQiIsImZpbGUiOiJ2YWx1ZS1jb252ZXJ0ZXJzL251bWJlci12YWx1ZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2YWx1ZUNvbnZlcnRlciB9IGZyb20gXCJhdXJlbGlhLWJpbmRpbmdcIjtcblxuQHZhbHVlQ29udmVydGVyKFwibnVtYmVyXCIpXG5leHBvcnQgY2xhc3MgTnVtYmVyVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZyb21WaWV3KHZhbCkge1xuICAgIGlmICh2YWwgPT09IFwiXCIpIHsgcmV0dXJuIG51bGw7IH1cbiAgICByZXR1cm4gTnVtYmVyKHZhbCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
