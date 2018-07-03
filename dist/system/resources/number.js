System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function numberPolyfill() {
        Number.isInteger = Number.isInteger || (function (value) {
            return typeof value === "number" &&
                isFinite(value) &&
                Math.floor(value) === value;
        });
    }
    exports_1("numberPolyfill", numberPolyfill);
    return {
        setters: [],
        execute: function () {
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9udW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQ0E7UUFDRSxNQUFNLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLElBQUksQ0FBQyxVQUFDLEtBQUs7WUFDNUMsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRO2dCQUM5QixRQUFRLENBQUMsS0FBSyxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEtBQUssS0FBSyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7UUFDRCxDQUFDIiwiZmlsZSI6InJlc291cmNlcy9udW1iZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBmdW5jdGlvbiBudW1iZXJQb2x5ZmlsbCgpIHtcbiAgTnVtYmVyLmlzSW50ZWdlciA9IE51bWJlci5pc0ludGVnZXIgfHwgKCh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgIGlzRmluaXRlKHZhbHVlKSAmJlxuICAgICAgTWF0aC5mbG9vcih2YWx1ZSkgPT09IHZhbHVlO1xuICB9KTtcbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
