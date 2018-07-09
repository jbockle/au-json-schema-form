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
                    if (schema.items.type === "boolean") {
                        value = false;
                    }
                    return [2 /*return*/, model || schema.items.const || schema.items.default || value];
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFTQTtRQUVFLHlCQUFvQixNQUF3QjtZQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQUFJLENBQUM7UUFFM0MsK0NBQXFCLEdBQTNCLFVBQTRCLE1BQTZCLEVBQUUsS0FBVTs7Ozs7OzRCQUMzRCxLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUE7O3FDQUNaLE9BQU8sQ0FBQyxDQUFSLHdCQUFPO3FDQUVQLFFBQVEsQ0FBQyxDQUFULHdCQUFROzs7Z0NBREgscUJBQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUE7OzRCQUE1RCxLQUFLLEdBQUcsU0FBb0QsQ0FBQzs7Z0NBRXJELHFCQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUcsTUFBc0MsQ0FBQyxFQUFBOzs0QkFBeEYsS0FBSyxHQUFHLFNBQWdGLENBQUM7O2dDQUVqRixxQkFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFBOzs0QkFBMUQsS0FBSyxHQUFHLFNBQWtELENBQUM7O2dDQUUvRCxzQkFBTyxLQUFLLEVBQUM7Ozs7U0FDZDtRQUVLLGtEQUF3QixHQUE5QixVQUErQixLQUFVLEVBQUUsTUFBNkI7Ozs7b0JBRXRFLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO3dCQUNuQyxLQUFLLEdBQUcsS0FBSyxDQUFDO3FCQUNmO29CQUNELHNCQUFPLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLEVBQUM7OztTQUNyRTtRQUVLLDhDQUFvQixHQUExQixVQUEyQixLQUFVLEVBQUUsTUFBa0M7OztvQkFDdkUsc0JBQU8sS0FBSyxJQUFJLEVBQUUsRUFBQzs7O1NBQ3BCO1FBRUssK0NBQXFCLEdBQTNCLFVBQTRCLEtBQWEsRUFBRSxNQUFtQzs7Ozs7OzRCQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQzs0QkFDOUQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7aUNBQ2hCLE1BQU0sQ0FBQyxVQUFVLEVBQWpCLHdCQUFpQjs7dUNBQ0ksTUFBTSxDQUFDLFVBQVU7Ozs7Ozs7NEJBQ3RDLEtBQUEsS0FBSyxDQUFBOzRCQUFDLEtBQUEsUUFBUSxDQUFBOzRCQUFJLHFCQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFBOzs0QkFBaEcsTUFBZSxHQUFHLFNBQThFLENBQUM7Ozs7O2dDQUdyRyxzQkFBTyxLQUFLLEVBQUM7Ozs7U0FDZDtRQXJDVSxlQUFlO1lBRDNCLDBCQUFNLENBQUMseUJBQWdCLENBQUM7NkNBR0sseUJBQWdCO1dBRmpDLGVBQWUsQ0FzQzNCO1FBQUQsc0JBQUM7S0F0Q0QsQUFzQ0MsSUFBQTtJQXRDWSwwQ0FBZSIsImZpbGUiOiJzZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7XG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hRGVmaW5pdGlvblxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUxvZ2dlcilcbmV4cG9ydCBjbGFzcyBEZWZhdWx0c1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyKSB7IH1cblxuICBhc3luYyBnZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIG1vZGVsOiBhbnkpIHtcbiAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldEFycmF5RGVmYXVsdEFzeW5jKG1vZGVsLCBzY2hlbWEuaXRlbXMpO1xuICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICBtb2RlbCA9IGF3YWl0IHRoaXMuZ2V0T2JqZWN0RGVmYXVsdEFzeW5jKG1vZGVsLCAoc2NoZW1hIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldFByaW1pdGl2ZURlZmF1bHRBc3luYyhtb2RlbCwgc2NoZW1hKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgYXN5bmMgZ2V0UHJpbWl0aXZlRGVmYXVsdEFzeW5jKG1vZGVsOiBhbnksIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uKSB7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgaWYgKHNjaGVtYS5pdGVtcy50eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5pdGVtcy5jb25zdCB8fCBzY2hlbWEuaXRlbXMuZGVmYXVsdCB8fCB2YWx1ZTtcbiAgfVxuXG4gIGFzeW5jIGdldEFycmF5RGVmYXVsdEFzeW5jKG1vZGVsOiBhbnksIHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24pOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIG1vZGVsIHx8IFtdO1xuICB9XG5cbiAgYXN5bmMgZ2V0T2JqZWN0RGVmYXVsdEFzeW5jKG1vZGVsOiBvYmplY3QsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIud2FybihcImdldE9iamVjdE1vZGVsRGVmYXVsdHNcIiwgeyBtb2RlbCwgc2NoZW1hIH0pO1xuICAgIG1vZGVsID0gbW9kZWwgfHwge307XG4gICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIG1vZGVsW3Byb3BlcnR5XSA9IGF3YWl0IHRoaXMuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XSwgbW9kZWxbcHJvcGVydHldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
