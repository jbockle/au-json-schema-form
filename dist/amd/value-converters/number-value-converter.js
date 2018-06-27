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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7SUFHQTtRQUFBO1FBU0EsQ0FBQztRQVJDLHFDQUFNLEdBQU4sVUFBTyxHQUFHO1lBQ1IsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBRUQsdUNBQVEsR0FBUixVQUFTLEdBQUc7WUFDVixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7Z0JBQUUsT0FBTyxJQUFJLENBQUM7YUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBUlUsb0JBQW9CO1lBRGhDLGdDQUFjLENBQUMsUUFBUSxDQUFDO1dBQ1osb0JBQW9CLENBU2hDO1FBQUQsMkJBQUM7S0FURCxBQVNDLElBQUE7SUFUWSxvREFBb0IiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9udW1iZXItdmFsdWUtY29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsdWVDb252ZXJ0ZXIgfSBmcm9tIFwiYXVyZWxpYS1iaW5kaW5nXCI7XG5cbkB2YWx1ZUNvbnZlcnRlcihcIm51bWJlclwiKVxuZXhwb3J0IGNsYXNzIE51bWJlclZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmcm9tVmlldyh2YWwpIHtcbiAgICBpZiAodmFsID09PSBcIlwiKSB7IHJldHVybiBudWxsOyB9XG4gICAgcmV0dXJuIE51bWJlcih2YWwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
