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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLG1EQUFpRDtBQUdqRDtJQUFBO0lBU0EsQ0FBQztJQVJDLHFDQUFNLEdBQU4sVUFBTyxHQUFHO1FBQ1IsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsdUNBQVEsR0FBUixVQUFTLEdBQUc7UUFDVixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7WUFBRSxPQUFPO1NBQUU7UUFDM0IsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQVJVLG9CQUFvQjtRQURoQyxnQ0FBYyxDQUFDLFFBQVEsQ0FBQztPQUNaLG9CQUFvQixDQVNoQztJQUFELDJCQUFDO0NBVEQsQUFTQyxJQUFBO0FBVFksb0RBQW9CIiwiZmlsZSI6InZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbHVlQ29udmVydGVyIH0gZnJvbSBcImF1cmVsaWEtYmluZGluZ1wiO1xuXG5AdmFsdWVDb252ZXJ0ZXIoXCJudW1iZXJcIilcbmV4cG9ydCBjbGFzcyBOdW1iZXJWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZnJvbVZpZXcodmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gXCJcIikgeyByZXR1cm47IH1cbiAgICByZXR1cm4gTnVtYmVyKHZhbCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
