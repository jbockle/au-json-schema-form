var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
define(["require", "exports", "aurelia-framework", "../resources/logger"], function (require, exports, aurelia_framework_1, logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DefaultsService = /** @class */ (function () {
        function DefaultsService(logger) {
            this.logger = logger;
        }
        DefaultsService.prototype.getSchemaDefaultAsync = function (schema, model) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.info("getSchemaDefaultAsync", { schema: schema, model: model });
                            _a = schema.type;
                            switch (_a) {
                                case "array": return [3 /*break*/, 1];
                                case "object": return [3 /*break*/, 3];
                            }
                            return [3 /*break*/, 5];
                        case 1: return [4 /*yield*/, this.getArrayDefaultAsync(model, schema.items)];
                        case 2:
                            model = _b.sent();
                            _b.label = 3;
                        case 3: return [4 /*yield*/, this.getObjectDefaultAsync(model, schema)];
                        case 4:
                            model = _b.sent();
                            _b.label = 5;
                        case 5: return [4 /*yield*/, this.getPrimitiveDefaultAsync(model, schema)];
                        case 6:
                            model = _b.sent();
                            _b.label = 7;
                        case 7: return [2 /*return*/, model];
                    }
                });
            });
        };
        DefaultsService.prototype.getPrimitiveDefaultAsync = function (model, schema) {
            return __awaiter(this, void 0, void 0, function () {
                var value;
                return __generator(this, function (_a) {
                    value = "";
                    if (schema.type === "boolean") {
                        value = false;
                    }
                    return [2 /*return*/, model || schema.const || schema.default || value];
                });
            });
        };
        DefaultsService.prototype.getArrayDefaultAsync = function (model, schema) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, model || []];
                });
            });
        };
        DefaultsService.prototype.getObjectDefaultAsync = function (model, schema) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, _b, _i, property, _c, _d;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            this.logger.warn("getObjectModelDefaults", { model: model, schema: schema });
                            model = model || {};
                            if (!schema.properties) return [3 /*break*/, 4];
                            _a = [];
                            for (_b in schema.properties)
                                _a.push(_b);
                            _i = 0;
                            _e.label = 1;
                        case 1:
                            if (!(_i < _a.length)) return [3 /*break*/, 4];
                            property = _a[_i];
                            _c = model;
                            _d = property;
                            return [4 /*yield*/, this.getSchemaDefaultAsync(schema.properties[property], model[property])];
                        case 2:
                            _c[_d] = _e.sent();
                            _e.label = 3;
                        case 3:
                            _i++;
                            return [3 /*break*/, 1];
                        case 4: return [2 /*return*/, model];
                    }
                });
            });
        };
        DefaultsService = __decorate([
            aurelia_framework_1.inject(logger_1.SchemaFormLogger),
            __metadata("design:paramtypes", [logger_1.SchemaFormLogger])
        ], DefaultsService);
        return DefaultsService;
    }());
    exports.DefaultsService = DefaultsService;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTQTtRQUVFLHlCQUFvQixNQUF3QjtZQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFJLENBQUM7UUFFM0MsK0NBQXFCLEdBQTNCLFVBQTRCLE1BQTZCLEVBQUUsS0FBVTs7Ozs7OzRCQUNuRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQTs0QkFDcEQsS0FBQSxNQUFNLENBQUMsSUFBSSxDQUFBOztxQ0FDWixPQUFPLENBQUMsQ0FBUix3QkFBTztxQ0FFUCxRQUFRLENBQUMsQ0FBVCx3QkFBUTs7O2dDQURILHFCQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFBOzs0QkFBNUQsS0FBSyxHQUFHLFNBQW9ELENBQUM7O2dDQUVyRCxxQkFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFHLE1BQXNDLENBQUMsRUFBQTs7NEJBQXhGLEtBQUssR0FBRyxTQUFnRixDQUFDOztnQ0FFakYscUJBQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsRUFBQTs7NEJBQTFELEtBQUssR0FBRyxTQUFrRCxDQUFDOztnQ0FFL0Qsc0JBQU8sS0FBSyxFQUFDOzs7O1NBQ2Q7UUFFSyxrREFBd0IsR0FBOUIsVUFBK0IsS0FBVSxFQUFFLE1BQTZCOzs7O29CQUNsRSxLQUFLLEdBQVEsRUFBRSxDQUFDO29CQUNwQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO3dCQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDO3FCQUNmO29CQUNELHNCQUFPLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxFQUFDOzs7U0FDekQ7UUFFSyw4Q0FBb0IsR0FBMUIsVUFBMkIsS0FBVSxFQUFFLE1BQWtDOzs7b0JBQ3ZFLHNCQUFPLEtBQUssSUFBSSxFQUFFLEVBQUM7OztTQUNwQjtRQUVLLCtDQUFxQixHQUEzQixVQUE0QixLQUFhLEVBQUUsTUFBbUM7Ozs7Ozs0QkFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxLQUFLLE9BQUEsRUFBRSxNQUFNLFFBQUEsRUFBRSxDQUFDLENBQUM7NEJBQzlELEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO2lDQUNoQixNQUFNLENBQUMsVUFBVSxFQUFqQix3QkFBaUI7O3VDQUNJLE1BQU0sQ0FBQyxVQUFVOzs7Ozs7OzRCQUN0QyxLQUFBLEtBQUssQ0FBQTs0QkFBQyxLQUFBLFFBQVEsQ0FBQTs0QkFBSSxxQkFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBQTs7NEJBQWhHLE1BQWUsR0FBRyxTQUE4RSxDQUFDOzs7OztnQ0FHckcsc0JBQU8sS0FBSyxFQUFDOzs7O1NBQ2Q7UUF0Q1UsZUFBZTtZQUQzQiwwQkFBTSxDQUFDLHlCQUFnQixDQUFDOzZDQUdLLHlCQUFnQjtXQUZqQyxlQUFlLENBdUMzQjtRQUFELHNCQUFDO0tBdkNELEFBdUNDLElBQUE7SUF2Q1ksMENBQWUiLCJmaWxlIjoic2VydmljZXMvZGVmYXVsdHMtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuaW1wb3J0IHtcclxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5cclxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdHNTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxyXG5cclxuICBhc3luYyBnZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIG1vZGVsOiBhbnkpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRTY2hlbWFEZWZhdWx0QXN5bmNcIiwgeyBzY2hlbWEsIG1vZGVsIH0pXHJcbiAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJhcnJheVwiOlxyXG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRBcnJheURlZmF1bHRBc3luYyhtb2RlbCwgc2NoZW1hLml0ZW1zKTtcclxuICAgICAgY2FzZSBcIm9iamVjdFwiOlxyXG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRPYmplY3REZWZhdWx0QXN5bmMobW9kZWwsIChzY2hlbWEgYXMgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldFByaW1pdGl2ZURlZmF1bHRBc3luYyhtb2RlbCwgc2NoZW1hKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtb2RlbDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFByaW1pdGl2ZURlZmF1bHRBc3luYyhtb2RlbDogYW55LCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbikge1xyXG4gICAgbGV0IHZhbHVlOiBhbnkgPSBcIlwiO1xyXG4gICAgaWYgKHNjaGVtYS50eXBlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICB2YWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5jb25zdCB8fCBzY2hlbWEuZGVmYXVsdCB8fCB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEFycmF5RGVmYXVsdEFzeW5jKG1vZGVsOiBhbnksIHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24pOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgICByZXR1cm4gbW9kZWwgfHwgW107XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRPYmplY3REZWZhdWx0QXN5bmMobW9kZWw6IG9iamVjdCwgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJnZXRPYmplY3RNb2RlbERlZmF1bHRzXCIsIHsgbW9kZWwsIHNjaGVtYSB9KTtcclxuICAgIG1vZGVsID0gbW9kZWwgfHwge307XHJcbiAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXMpIHtcclxuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEucHJvcGVydGllcykge1xyXG4gICAgICAgIG1vZGVsW3Byb3BlcnR5XSA9IGF3YWl0IHRoaXMuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XSwgbW9kZWxbcHJvcGVydHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
