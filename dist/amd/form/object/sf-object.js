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
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../resources/logger", "../../services/form-service"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfObject = /** @class */ (function () {
        function SfObject(configuration, formService, logger) {
            this.configuration = configuration;
            this.formService = formService;
            this.logger = logger;
            this.id = guid_1.Guid.newGuid();
            this.kind = "object";
        }
        SfObject.prototype.bind = function () {
            return __awaiter(this, void 0, void 0, function () {
                var template;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info("sf-object", { form: this.form, model: this.model });
                            return [4 /*yield*/, this.formService
                                    .getFormTemplateAsync(this.form, this.form.$schema, this.model, this.formInstance)];
                        case 1:
                            template = _a.sent();
                            this.view = new aurelia_framework_1.InlineViewStrategy("<template>" + template.content + "</template>");
                            return [2 /*return*/];
                    }
                });
            });
        };
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SfObject.prototype, "form", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], SfObject.prototype, "model", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], SfObject.prototype, "formInstance", void 0);
        SfObject = __decorate([
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger),
            aurelia_framework_1.customElement("sf-object"),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                form_service_1.FormService,
                logger_1.SchemaFormLogger])
        ], SfObject);
        return SfObject;
    }());
    exports.SfObject = SfObject;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQVVBO1FBV0Usa0JBQ1MsYUFBc0MsRUFDdEMsV0FBd0IsRUFDdkIsTUFBd0I7WUFGekIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1lBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1lBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQWtCO1lBVGxDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFFNUIsU0FBSSxHQUFHLFFBQVEsQ0FBQztRQVFaLENBQUM7UUFFQyx1QkFBSSxHQUFWOzs7Ozs7NEJBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDOzRCQUNyRCxxQkFBTSxJQUFJLENBQUMsV0FBVztxQ0FDcEMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQTs7NEJBRDlFLFFBQVEsR0FBRyxTQUNtRTs0QkFDcEYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHNDQUFrQixDQUNoQyxlQUFhLFFBQVEsQ0FBQyxPQUFPLGdCQUFhLENBQUMsQ0FBQzs7Ozs7U0FDL0M7UUF0QlM7WUFBVCw0QkFBUTs7OENBQXFCO1FBQ3BCO1lBQVQsNEJBQVE7OytDQUFlO1FBQ2Q7WUFBVCw0QkFBUTs7c0RBQXNCO1FBSHBCLFFBQVE7WUFGcEIsMEJBQU0sQ0FBQyxtREFBdUIsRUFBRSwwQkFBVyxFQUFFLHlCQUFnQixDQUFDO1lBQzlELGlDQUFhLENBQUMsV0FBVyxDQUFDOzZDQWFELG1EQUF1QjtnQkFDekIsMEJBQVc7Z0JBQ2YseUJBQWdCO1dBZHZCLFFBQVEsQ0F3QnBCO1FBQUQsZUFBQztLQXhCRCxBQXdCQyxJQUFBO0lBeEJZLDRCQUFRIiwiZmlsZSI6ImZvcm0vb2JqZWN0L3NmLW9iamVjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGN1c3RvbUVsZW1lbnQsIGJpbmRhYmxlLCBpbmplY3QsIElubGluZVZpZXdTdHJhdGVneSB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XHJcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24gfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvc2NoZW1hLWZvcm0tY29uZmlndXJhdGlvblwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcclxuaW1wb3J0IHsgRm9ybVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2VydmljZXMvZm9ybS1zZXJ2aWNlXCI7XHJcblxyXG5AaW5qZWN0KFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLCBGb3JtU2VydmljZSwgU2NoZW1hRm9ybUxvZ2dlcilcclxuQGN1c3RvbUVsZW1lbnQoXCJzZi1vYmplY3RcIilcclxuZXhwb3J0IGNsYXNzIFNmT2JqZWN0IHtcclxuICBAYmluZGFibGUgZm9ybTogSUZvcm1PdmVycmlkZTtcclxuICBAYmluZGFibGUgbW9kZWw6IG9iamVjdDtcclxuICBAYmluZGFibGUgZm9ybUluc3RhbmNlOiBzdHJpbmc7XHJcblxyXG4gIGlkOiBzdHJpbmcgPSBHdWlkLm5ld0d1aWQoKTtcclxuXHJcbiAga2luZCA9IFwib2JqZWN0XCI7XHJcblxyXG4gIHZpZXc6IElubGluZVZpZXdTdHJhdGVneTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgY29uZmlndXJhdGlvbjogU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sXHJcbiAgICBwdWJsaWMgZm9ybVNlcnZpY2U6IEZvcm1TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgKSB7IH1cclxuXHJcbiAgYXN5bmMgYmluZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1vYmplY3RcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCB0aGlzLmZvcm1TZXJ2aWNlXHJcbiAgICAgIC5nZXRGb3JtVGVtcGxhdGVBc3luYyh0aGlzLmZvcm0sIHRoaXMuZm9ybS4kc2NoZW1hLCB0aGlzLm1vZGVsLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxyXG4gICAgICBgPHRlbXBsYXRlPiR7dGVtcGxhdGUuY29udGVudH08L3RlbXBsYXRlPmApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
