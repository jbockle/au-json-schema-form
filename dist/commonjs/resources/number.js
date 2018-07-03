"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function numberPolyfill() {
    Number.isInteger = Number.isInteger || (function (value) {
        return typeof value === "number" &&
            isFinite(value) &&
            Math.floor(value) === value;
    });
}
exports.numberPolyfill = numberPolyfill;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQTtJQUNFLE1BQU0sQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDLFNBQVMsSUFBSSxDQUFDLFVBQUMsS0FBSztRQUM1QyxPQUFPLE9BQU8sS0FBSyxLQUFLLFFBQVE7WUFDOUIsUUFBUSxDQUFDLEtBQUssQ0FBQztZQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQU5ELHdDQU1DIiwiZmlsZSI6InJlc291cmNlcy9udW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJQb2x5ZmlsbCgpIHtcbiAgTnVtYmVyLmlzSW50ZWdlciA9IE51bWJlci5pc0ludGVnZXIgfHwgKCh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgIGlzRmluaXRlKHZhbHVlKSAmJlxuICAgICAgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
