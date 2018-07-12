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
define(["require", "exports", "aurelia-framework", "../../resources/guid", "../../services/schema-form-configuration", "../../resources/logger", "../../services/form-service", "../../services/form-instances"], function (require, exports, aurelia_framework_1, guid_1, schema_form_configuration_1, logger_1, form_service_1, form_instances_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SfObject = /** @class */ (function () {
        function SfObject(configuration, formService, logger, formInstances) {
            this.configuration = configuration;
            this.formService = formService;
            this.logger = logger;
            this.formInstances = formInstances;
            this.id = guid_1.Guid.newGuid();
            this.kind = "object";
        }
        SfObject.prototype.attached = function () {
            this.logger.info("sf-object-attached");
        };
        SfObject.prototype.bind = function () {
            return __awaiter(this, void 0, void 0, function () {
                var template;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info("sf-object", { form: this.form, model: this.model });
                            this.formCtrl = this.formInstances.get(this.formInstance);
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
            aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger, form_instances_1.FormInstances),
            aurelia_framework_1.customElement("sf-object"),
            __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
                form_service_1.FormService,
                logger_1.SchemaFormLogger,
                form_instances_1.FormInstances])
        ], SfObject);
        return SfObject;
    }());
    exports.SfObject = SfObject;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWlCQTtRQWFFLGtCQUNTLGFBQXNDLEVBQ3RDLFdBQXdCLEVBQ3ZCLE1BQXdCLEVBQ3hCLGFBQTRCO1lBSDdCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtZQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtZQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtZQUN4QixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtZQVp0QyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBRTVCLFNBQUksR0FBRyxRQUFRLENBQUM7UUFXWixDQUFDO1FBRUwsMkJBQVEsR0FBUjtZQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDekMsQ0FBQztRQUVLLHVCQUFJLEdBQVY7Ozs7Ozs0QkFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7NEJBQ3RFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUN6QyxxQkFBTSxJQUFJLENBQUMsV0FBVztxQ0FDcEMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBQTs7NEJBRDlFLFFBQVEsR0FBRyxTQUNtRTs0QkFDcEYsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHNDQUFrQixDQUNoQyxlQUFhLFFBQVEsQ0FBQyxPQUFPLGdCQUFhLENBQUMsQ0FBQzs7Ozs7U0FDL0M7UUE5QlM7WUFBVCw0QkFBUTs7OENBQXFCO1FBQ3BCO1lBQVQsNEJBQVE7OytDQUFlO1FBQ2Q7WUFBVCw0QkFBUTs7c0RBQXNCO1FBSHBCLFFBQVE7WUFQcEIsMEJBQU0sQ0FDTCxtREFBdUIsRUFDdkIsMEJBQVcsRUFDWCx5QkFBZ0IsRUFDaEIsOEJBQWEsQ0FDZDtZQUNBLGlDQUFhLENBQUMsV0FBVyxDQUFDOzZDQWVELG1EQUF1QjtnQkFDekIsMEJBQVc7Z0JBQ2YseUJBQWdCO2dCQUNULDhCQUFhO1dBakIzQixRQUFRLENBZ0NwQjtRQUFELGVBQUM7S0FoQ0QsQUFnQ0MsSUFBQTtJQWhDWSw0QkFBUSIsImZpbGUiOiJmb3JtL29iamVjdC9zZi1vYmplY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjdXN0b21FbGVtZW50LCBiaW5kYWJsZSwgaW5qZWN0LCBJbmxpbmVWaWV3U3RyYXRlZ3kgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcclxuaW1wb3J0IHsgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5pbXBvcnQgeyBHdWlkIH0gZnJvbSBcIi4uLy4uL3Jlc291cmNlcy9ndWlkXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcclxuaW1wb3J0IHsgU2NoZW1hRm9ybUxvZ2dlciB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvbG9nZ2VyXCI7XHJcbmltcG9ydCB7IElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLW92ZXJyaWRlXCI7XHJcbmltcG9ydCB7IEZvcm1TZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0tc2VydmljZVwiO1xyXG5pbXBvcnQgeyBGb3JtSW5zdGFuY2VzIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL2Zvcm0taW5zdGFuY2VzXCI7XHJcbmltcG9ydCB7IElGb3JtSW5zdGFuY2UgfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtLWluc3RhbmNlXCI7XHJcblxyXG5AaW5qZWN0KFxyXG4gIFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gIEZvcm1TZXJ2aWNlLFxyXG4gIFNjaGVtYUZvcm1Mb2dnZXIsXHJcbiAgRm9ybUluc3RhbmNlc1xyXG4pXHJcbkBjdXN0b21FbGVtZW50KFwic2Ytb2JqZWN0XCIpXHJcbmV4cG9ydCBjbGFzcyBTZk9iamVjdCB7XHJcbiAgQGJpbmRhYmxlIGZvcm06IElGb3JtT3ZlcnJpZGU7XHJcbiAgQGJpbmRhYmxlIG1vZGVsOiBvYmplY3Q7XHJcbiAgQGJpbmRhYmxlIGZvcm1JbnN0YW5jZTogc3RyaW5nO1xyXG5cclxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XHJcblxyXG4gIGtpbmQgPSBcIm9iamVjdFwiO1xyXG5cclxuICB2aWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XHJcblxyXG4gIHByaXZhdGUgZm9ybUN0cmw6IElGb3JtSW5zdGFuY2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxyXG4gICAgcHVibGljIGZvcm1TZXJ2aWNlOiBGb3JtU2VydmljZSxcclxuICAgIHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyLFxyXG4gICAgcHJpdmF0ZSBmb3JtSW5zdGFuY2VzOiBGb3JtSW5zdGFuY2VzXHJcbiAgKSB7IH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2Ytb2JqZWN0LWF0dGFjaGVkXCIpO1xyXG4gIH1cclxuXHJcbiAgYXN5bmMgYmluZCgpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJzZi1vYmplY3RcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsIH0pO1xyXG4gICAgdGhpcy5mb3JtQ3RybCA9IHRoaXMuZm9ybUluc3RhbmNlcy5nZXQodGhpcy5mb3JtSW5zdGFuY2UpO1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBhd2FpdCB0aGlzLmZvcm1TZXJ2aWNlXHJcbiAgICAgIC5nZXRGb3JtVGVtcGxhdGVBc3luYyh0aGlzLmZvcm0sIHRoaXMuZm9ybS4kc2NoZW1hLCB0aGlzLm1vZGVsLCB0aGlzLmZvcm1JbnN0YW5jZSk7XHJcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KFxyXG4gICAgICBgPHRlbXBsYXRlPiR7dGVtcGxhdGUuY29udGVudH08L3RlbXBsYXRlPmApO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
