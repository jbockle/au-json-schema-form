System.register([], function (exports_1, context_1) {
    "use strict";
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var Guid;
    var __moduleName = context_1 && context_1.id;
    function guidGenerator() {
        var d, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 2];
                    return [4 /*yield*/, "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                            r = (new Date().getTime() + Math.random() * 16) % 16 | 0;
                            d = Math.floor(d / 16);
                            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    }
    return {
        setters: [],
        execute: function () {
            Guid = /** @class */ (function () {
                function Guid() {
                }
                Guid.newGuid = function () {
                    return this.generator.next().value;
                };
                Guid.generator = guidGenerator();
                return Guid;
            }());
            exports_1("Guid", Guid);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L3Jlc291cmNlcy9ndWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDQTs7Ozs7eUJBR1MsSUFBSTtvQkFDVCxxQkFBTSxzQ0FBc0MsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQzs0QkFDOUQsQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQzs0QkFDekQsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDOzRCQUN2QixPQUFPLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUM7d0JBQ3hELENBQUMsQ0FBQyxFQUFBOztvQkFKRixTQUlFLENBQUM7Ozs7O0tBRU47Ozs7O2dCQUdDO2dCQUF3QixDQUFDO2dCQUlsQixZQUFPLEdBQWQ7b0JBQ0UsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssQ0FBQztnQkFDckMsQ0FBQztnQkFKTSxjQUFTLEdBQTZCLGFBQWEsRUFBRSxDQUFDO2dCQUsvRCxXQUFDO2FBUkQsQUFRQzs7UUFDRCxDQUFDIiwiZmlsZSI6InRlbXBsYXRlcy9ib290c3RyYXA0L3Jlc291cmNlcy9ndWlkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5mdW5jdGlvbiogZ3VpZEdlbmVyYXRvcigpIHtcbiAgbGV0IGQ6IG51bWJlcjtcbiAgbGV0IHI6IG51bWJlcjtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB5aWVsZCBcInh4eHh4eHh4LXh4eHgtNHh4eC15eHh4LXh4eHh4eHh4eHh4eFwiLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcbiAgICAgIHIgPSAobmV3IERhdGUoKS5nZXRUaW1lKCkgKyBNYXRoLnJhbmRvbSgpICogMTYpICUgMTYgfCAwO1xuICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcbiAgICAgIHJldHVybiAoYyA9PT0gXCJ4XCIgPyByIDogKHIgJiAweDMgfCAweDgpKS50b1N0cmluZygxNik7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEd1aWQge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgc3RhdGljIGdlbmVyYXRvcjogSXRlcmFibGVJdGVyYXRvcjxzdHJpbmc+ID0gZ3VpZEdlbmVyYXRvcigpO1xuXG4gIHN0YXRpYyBuZXdHdWlkKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdG9yLm5leHQoKS52YWx1ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
