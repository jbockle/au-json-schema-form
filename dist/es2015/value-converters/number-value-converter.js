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
            return;
        }
        return Number(val);
    }
};
NumberValueConverter = __decorate([
    valueConverter("number")
], NumberValueConverter);
export { NumberValueConverter };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFHakQsSUFBYSxvQkFBb0IsR0FBakM7SUFDRSxNQUFNLENBQUMsR0FBRztRQUNSLE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVELFFBQVEsQ0FBQyxHQUFHO1FBQ1YsSUFBSSxHQUFHLEtBQUssRUFBRSxFQUFFO1lBQUUsT0FBTztTQUFFO1FBQzNCLE9BQU8sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLENBQUM7Q0FDRixDQUFBO0FBVFksb0JBQW9CO0lBRGhDLGNBQWMsQ0FBQyxRQUFRLENBQUM7R0FDWixvQkFBb0IsQ0FTaEM7U0FUWSxvQkFBb0IiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9udW1iZXItdmFsdWUtY29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdmFsdWVDb252ZXJ0ZXIgfSBmcm9tIFwiYXVyZWxpYS1iaW5kaW5nXCI7XG5cbkB2YWx1ZUNvbnZlcnRlcihcIm51bWJlclwiKVxuZXhwb3J0IGNsYXNzIE51bWJlclZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmcm9tVmlldyh2YWwpIHtcbiAgICBpZiAodmFsID09PSBcIlwiKSB7IHJldHVybjsgfVxuICAgIHJldHVybiBOdW1iZXIodmFsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
