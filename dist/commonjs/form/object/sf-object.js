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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var guid_1 = require("../../resources/guid");
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var logger_1 = require("../../resources/logger");
var form_service_1 = require("../../services/form-service");
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vb2JqZWN0L3NmLW9iamVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXdGO0FBRXhGLDZDQUE0QztBQUM1QyxzRkFBbUY7QUFDbkYsaURBQTBEO0FBRTFELDREQUEwRDtBQUkxRDtJQVdFLGtCQUNTLGFBQXNDLEVBQ3RDLFdBQXdCLEVBQ3ZCLE1BQXdCO1FBRnpCLGtCQUFhLEdBQWIsYUFBYSxDQUF5QjtRQUN0QyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN2QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtRQVRsQyxPQUFFLEdBQVcsV0FBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRTVCLFNBQUksR0FBRyxRQUFRLENBQUM7SUFRWixDQUFDO0lBRUMsdUJBQUksR0FBVjs7Ozs7O3dCQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQzt3QkFDckQscUJBQU0sSUFBSSxDQUFDLFdBQVc7aUNBQ3BDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUE7O3dCQUQ5RSxRQUFRLEdBQUcsU0FDbUU7d0JBQ3BGLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxzQ0FBa0IsQ0FDaEMsZUFBYSxRQUFRLENBQUMsT0FBTyxnQkFBYSxDQUFDLENBQUM7Ozs7O0tBQy9DO0lBdEJTO1FBQVQsNEJBQVE7OzBDQUFxQjtJQUNwQjtRQUFULDRCQUFROzsyQ0FBZTtJQUNkO1FBQVQsNEJBQVE7O2tEQUFzQjtJQUhwQixRQUFRO1FBRnBCLDBCQUFNLENBQUMsbURBQXVCLEVBQUUsMEJBQVcsRUFBRSx5QkFBZ0IsQ0FBQztRQUM5RCxpQ0FBYSxDQUFDLFdBQVcsQ0FBQzt5Q0FhRCxtREFBdUI7WUFDekIsMEJBQVc7WUFDZix5QkFBZ0I7T0FkdkIsUUFBUSxDQXdCcEI7SUFBRCxlQUFDO0NBeEJELEFBd0JDLElBQUE7QUF4QlksNEJBQVEiLCJmaWxlIjoiZm9ybS9vYmplY3Qvc2Ytb2JqZWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XHJcbmltcG9ydCB7IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcclxuaW1wb3J0IHsgR3VpZCB9IGZyb20gXCIuLi8uLi9yZXNvdXJjZXMvZ3VpZFwiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY2hlbWEtZm9ybS1jb25maWd1cmF0aW9uXCI7XHJcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xyXG5pbXBvcnQgeyBJRm9ybU92ZXJyaWRlIH0gZnJvbSBcIi4uLy4uL2ludGVyZmFjZXMvZm9ybS1vdmVycmlkZVwiO1xyXG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcclxuXHJcbkBpbmplY3QoU2NoZW1hRm9ybUNvbmZpZ3VyYXRpb24sIEZvcm1TZXJ2aWNlLCBTY2hlbWFGb3JtTG9nZ2VyKVxyXG5AY3VzdG9tRWxlbWVudChcInNmLW9iamVjdFwiKVxyXG5leHBvcnQgY2xhc3MgU2ZPYmplY3Qge1xyXG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybU92ZXJyaWRlO1xyXG4gIEBiaW5kYWJsZSBtb2RlbDogb2JqZWN0O1xyXG4gIEBiaW5kYWJsZSBmb3JtSW5zdGFuY2U6IHN0cmluZztcclxuXHJcbiAgaWQ6IHN0cmluZyA9IEd1aWQubmV3R3VpZCgpO1xyXG5cclxuICBraW5kID0gXCJvYmplY3RcIjtcclxuXHJcbiAgdmlldzogSW5saW5lVmlld1N0cmF0ZWd5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBjb25maWd1cmF0aW9uOiBTY2hlbWFGb3JtQ29uZmlndXJhdGlvbixcclxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIGxvZ2dlcjogU2NoZW1hRm9ybUxvZ2dlcixcclxuICApIHsgfVxyXG5cclxuICBhc3luYyBiaW5kKCkge1xyXG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInNmLW9iamVjdFwiLCB7IGZvcm06IHRoaXMuZm9ybSwgbW9kZWw6IHRoaXMubW9kZWwgfSk7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGF3YWl0IHRoaXMuZm9ybVNlcnZpY2VcclxuICAgICAgLmdldEZvcm1UZW1wbGF0ZUFzeW5jKHRoaXMuZm9ybSwgdGhpcy5mb3JtLiRzY2hlbWEsIHRoaXMubW9kZWwsIHRoaXMuZm9ybUluc3RhbmNlKTtcclxuICAgIHRoaXMudmlldyA9IG5ldyBJbmxpbmVWaWV3U3RyYXRlZ3koXHJcbiAgICAgIGA8dGVtcGxhdGU+JHt0ZW1wbGF0ZS5jb250ZW50fTwvdGVtcGxhdGU+YCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
