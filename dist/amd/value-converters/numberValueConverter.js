define(["require", "exports"], function (require, exports) {
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyVmFsdWVDb252ZXJ0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUE7UUFBQTtRQVNBLENBQUM7UUFSQyxxQ0FBTSxHQUFOLFVBQU8sR0FBRztZQUNSLE9BQU8sR0FBRyxDQUFDO1FBQ2IsQ0FBQztRQUVELHVDQUFRLEdBQVIsVUFBUyxHQUFHO1lBQ1YsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUMzQixPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQ0gsMkJBQUM7SUFBRCxDQVRBLEFBU0MsSUFBQTtJQVRZLG9EQUFvQiIsImZpbGUiOiJ2YWx1ZS1jb252ZXJ0ZXJzL251bWJlclZhbHVlQ29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIE51bWJlclZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmcm9tVmlldyh2YWwpIHtcbiAgICBpZiAodmFsID09PSBcIlwiKSB7IHJldHVybjsgfVxuICAgIHJldHVybiBOdW1iZXIodmFsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
