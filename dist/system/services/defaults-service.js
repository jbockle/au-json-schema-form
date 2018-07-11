System.register(["aurelia-framework", "../resources/logger"], function (exports_1, context_1) {
    "use strict";
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
    var aurelia_framework_1, logger_1, DefaultsService;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            },
            function (logger_1_1) {
                logger_1 = logger_1_1;
            }
        ],
        execute: function () {
            DefaultsService = /** @class */ (function () {
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
            exports_1("DefaultsService", DefaultsService);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBV0UseUJBQW9CLE1BQXdCO29CQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtnQkFBSSxDQUFDO2dCQUUzQywrQ0FBcUIsR0FBM0IsVUFBNEIsTUFBNkIsRUFBRSxLQUFVOzs7Ozs7b0NBQ25FLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHVCQUF1QixFQUFFLEVBQUUsTUFBTSxRQUFBLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQyxDQUFBO29DQUNwRCxLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUE7OzZDQUNaLE9BQU8sQ0FBQyxDQUFSLHdCQUFPOzZDQUVQLFFBQVEsQ0FBQyxDQUFULHdCQUFROzs7d0NBREgscUJBQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUE7O29DQUE1RCxLQUFLLEdBQUcsU0FBb0QsQ0FBQzs7d0NBRXJELHFCQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUcsTUFBc0MsQ0FBQyxFQUFBOztvQ0FBeEYsS0FBSyxHQUFHLFNBQWdGLENBQUM7O3dDQUVqRixxQkFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFBOztvQ0FBMUQsS0FBSyxHQUFHLFNBQWtELENBQUM7O3dDQUUvRCxzQkFBTyxLQUFLLEVBQUM7Ozs7aUJBQ2Q7Z0JBRUssa0RBQXdCLEdBQTlCLFVBQStCLEtBQVUsRUFBRSxNQUE2Qjs7Ozs0QkFDbEUsS0FBSyxHQUFRLEVBQUUsQ0FBQzs0QkFDcEIsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQ0FDN0IsS0FBSyxHQUFHLEtBQUssQ0FBQzs2QkFDZjs0QkFDRCxzQkFBTyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLEtBQUssRUFBQzs7O2lCQUN6RDtnQkFFSyw4Q0FBb0IsR0FBMUIsVUFBMkIsS0FBVSxFQUFFLE1BQWtDOzs7NEJBQ3ZFLHNCQUFPLEtBQUssSUFBSSxFQUFFLEVBQUM7OztpQkFDcEI7Z0JBRUssK0NBQXFCLEdBQTNCLFVBQTRCLEtBQWEsRUFBRSxNQUFtQzs7Ozs7O29DQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLENBQUMsQ0FBQztvQ0FDOUQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7eUNBQ2hCLE1BQU0sQ0FBQyxVQUFVLEVBQWpCLHdCQUFpQjs7K0NBQ0ksTUFBTSxDQUFDLFVBQVU7Ozs7Ozs7b0NBQ3RDLEtBQUEsS0FBSyxDQUFBO29DQUFDLEtBQUEsUUFBUSxDQUFBO29DQUFJLHFCQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFBOztvQ0FBaEcsTUFBZSxHQUFHLFNBQThFLENBQUM7Ozs7O3dDQUdyRyxzQkFBTyxLQUFLLEVBQUM7Ozs7aUJBQ2Q7Z0JBdENVLGVBQWU7b0JBRDNCLDBCQUFNLENBQUMseUJBQWdCLENBQUM7cURBR0sseUJBQWdCO21CQUZqQyxlQUFlLENBdUMzQjtnQkFBRCxzQkFBQzthQXZDRCxBQXVDQzs7UUFDRCxDQUFDIiwiZmlsZSI6InNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHtcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcblxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxuZXhwb3J0IGNsYXNzIERlZmF1bHRzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxuXG4gIGFzeW5jIGdldFNjaGVtYURlZmF1bHRBc3luYyhzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgbW9kZWw6IGFueSkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRTY2hlbWFEZWZhdWx0QXN5bmNcIiwgeyBzY2hlbWEsIG1vZGVsIH0pXG4gICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgY2FzZSBcImFycmF5XCI6XG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRBcnJheURlZmF1bHRBc3luYyhtb2RlbCwgc2NoZW1hLml0ZW1zKTtcbiAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldE9iamVjdERlZmF1bHRBc3luYyhtb2RlbCwgKHNjaGVtYSBhcyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRQcmltaXRpdmVEZWZhdWx0QXN5bmMobW9kZWwsIHNjaGVtYSk7XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIGFzeW5jIGdldFByaW1pdGl2ZURlZmF1bHRBc3luYyhtb2RlbDogYW55LCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbikge1xuICAgIGxldCB2YWx1ZTogYW55ID0gXCJcIjtcbiAgICBpZiAoc2NoZW1hLnR5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICB2YWx1ZSA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gbW9kZWwgfHwgc2NoZW1hLmNvbnN0IHx8IHNjaGVtYS5kZWZhdWx0IHx8IHZhbHVlO1xuICB9XG5cbiAgYXN5bmMgZ2V0QXJyYXlEZWZhdWx0QXN5bmMobW9kZWw6IGFueSwgc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbik6IFByb21pc2U8YW55W10+IHtcbiAgICByZXR1cm4gbW9kZWwgfHwgW107XG4gIH1cblxuICBhc3luYyBnZXRPYmplY3REZWZhdWx0QXN5bmMobW9kZWw6IG9iamVjdCwgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci53YXJuKFwiZ2V0T2JqZWN0TW9kZWxEZWZhdWx0c1wiLCB7IG1vZGVsLCBzY2hlbWEgfSk7XG4gICAgbW9kZWwgPSBtb2RlbCB8fCB7fTtcbiAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgIGZvciAoY29uc3QgcHJvcGVydHkgaW4gc2NoZW1hLnByb3BlcnRpZXMpIHtcbiAgICAgICAgbW9kZWxbcHJvcGVydHldID0gYXdhaXQgdGhpcy5nZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLCBtb2RlbFtwcm9wZXJ0eV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
