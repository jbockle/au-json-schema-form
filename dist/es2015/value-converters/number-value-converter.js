var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { valueConverter } from "aurelia-binding";
let NumberValueConverter = class NumberValueConverter {
    toView(val) {
        return val;
    }
    fromView(val) {
        if (val === "") {
            return null;
        }
        return Number(val);
    }
};
NumberValueConverter = __decorate([
    valueConverter("number")
], NumberValueConverter);
export { NumberValueConverter };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsSUFBYSxvQkFBb0IsR0FBakM7SUFDRSxNQUFNLENBQUMsR0FBRztRQUNSLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTtRQUNoQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0NBQ0YsQ0FBQTtBQVRZLG9CQUFvQjtJQURoQyxjQUFjLENBQUMsUUFBUSxDQUFDO0dBQ1osb0JBQW9CLENBU2hDO1NBVFksb0JBQW9CIiwiZmlsZSI6InZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHZhbHVlQ29udmVydGVyIH0gZnJvbSBcImF1cmVsaWEtYmluZGluZ1wiO1xuXG5AdmFsdWVDb252ZXJ0ZXIoXCJudW1iZXJcIilcbmV4cG9ydCBjbGFzcyBOdW1iZXJWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZnJvbVZpZXcodmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gXCJcIikgeyByZXR1cm4gbnVsbDsgfVxuICAgIHJldHVybiBOdW1iZXIodmFsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
