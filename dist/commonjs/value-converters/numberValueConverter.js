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
    return NumberValueConverter;
}());
exports.NumberValueConverter = NumberValueConverter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyVmFsdWVDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtJQUFBO0lBU0EsQ0FBQztJQVJDLHFDQUFNLEdBQU4sVUFBTyxHQUFHO1FBQ1IsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsdUNBQVEsR0FBUixVQUFTLEdBQUc7UUFDVixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDM0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNILDJCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSxvREFBb0IiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9udW1iZXJWYWx1ZUNvbnZlcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBOdW1iZXJWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZnJvbVZpZXcodmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gXCJcIikgeyByZXR1cm47IH1cbiAgICByZXR1cm4gTnVtYmVyKHZhbCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
