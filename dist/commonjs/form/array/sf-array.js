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
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_framework_1 = require("aurelia-framework");
var guid_1 = require("../../resources/guid");
var schema_form_configuration_1 = require("../../services/schema-form-configuration");
var logger_1 = require("../../resources/logger");
var form_service_1 = require("../../services/form-service");
var SfArray = /** @class */ (function () {
    function SfArray(configuration, formService, logger) {
        this.configuration = configuration;
        this.formService = formService;
        this.logger = logger;
        this.id = guid_1.Guid.newGuid();
        this.kind = "array";
    }
    SfArray.prototype.bind = function () {
        this.logger.info("sf-array", { form: this.form, model: this.model, schema: this.schema.items }, arguments);
        var template = "<template>" + this.formService.buildArrayForm(this.schema, this.form, this.key, this.model) + "</template>";
        this.view = new aurelia_framework_1.InlineViewStrategy(template);
    };
    SfArray.prototype.add = function () {
        this.model.push(this.formService.getArrayItemDefault(this.schema, null));
    };
    SfArray.prototype.remove = function (index) {
        this.model.splice(index, 1);
    };
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfArray.prototype, "form", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", String)
    ], SfArray.prototype, "key", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Array)
    ], SfArray.prototype, "model", void 0);
    __decorate([
        aurelia_framework_1.bindable,
        __metadata("design:type", Object)
    ], SfArray.prototype, "schema", void 0);
    SfArray = __decorate([
        aurelia_framework_1.inject(schema_form_configuration_1.SchemaFormConfiguration, form_service_1.FormService, logger_1.SchemaFormLogger),
        aurelia_framework_1.customElement("sf-array"),
        __metadata("design:paramtypes", [schema_form_configuration_1.SchemaFormConfiguration,
            form_service_1.FormService,
            logger_1.SchemaFormLogger])
    ], SfArray);
    return SfArray;
}());
exports.SfArray = SfArray;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcm0vYXJyYXkvc2YtYXJyYXkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1REFBd0Y7QUFFeEYsNkNBQTRDO0FBQzVDLHNGQUFtRjtBQUNuRixpREFBMEQ7QUFFMUQsNERBQTBEO0FBSTFEO0lBWUUsaUJBQ1MsYUFBc0MsRUFDdEMsV0FBd0IsRUFDdkIsTUFBd0I7UUFGekIsa0JBQWEsR0FBYixhQUFhLENBQXlCO1FBQ3RDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3ZCLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBVGxDLE9BQUUsR0FBVyxXQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFNUIsU0FBSSxHQUFHLE9BQU8sQ0FBQztJQVFYLENBQUM7SUFFTCxzQkFBSSxHQUFKO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDM0csSUFBTSxRQUFRLEdBQ1osZUFBYSxJQUFJLENBQUMsV0FBVyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFhLENBQUM7UUFDMUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHNDQUFrQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRCxxQkFBRyxHQUFIO1FBQ0UsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUVELHdCQUFNLEdBQU4sVUFBTyxLQUFLO1FBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUE5QlM7UUFBVCw0QkFBUTs7eUNBQWE7SUFDWjtRQUFULDRCQUFROzt3Q0FBYTtJQUNaO1FBQVQsNEJBQVE7OzBDQUFjO0lBQ2I7UUFBVCw0QkFBUTs7MkNBQW9DO0lBSmxDLE9BQU87UUFGbkIsMEJBQU0sQ0FBQyxtREFBdUIsRUFBRSwwQkFBVyxFQUFFLHlCQUFnQixDQUFDO1FBQzlELGlDQUFhLENBQUMsVUFBVSxDQUFDO3lDQWNBLG1EQUF1QjtZQUN6QiwwQkFBVztZQUNmLHlCQUFnQjtPQWZ2QixPQUFPLENBZ0NuQjtJQUFELGNBQUM7Q0FoQ0QsQUFnQ0MsSUFBQTtBQWhDWSwwQkFBTyIsImZpbGUiOiJmb3JtL2FycmF5L3NmLWFycmF5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3VzdG9tRWxlbWVudCwgYmluZGFibGUsIGluamVjdCwgSW5saW5lVmlld1N0cmF0ZWd5IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbiB9IGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcbmltcG9ydCB7IEd1aWQgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2d1aWRcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL3NjaGVtYS1mb3JtLWNvbmZpZ3VyYXRpb25cIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHsgSUZvcm0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9mb3JtXCI7XG5pbXBvcnQgeyBGb3JtU2VydmljZSB9IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9mb3JtLXNlcnZpY2VcIjtcblxuQGluamVjdChTY2hlbWFGb3JtQ29uZmlndXJhdGlvbiwgRm9ybVNlcnZpY2UsIFNjaGVtYUZvcm1Mb2dnZXIpXG5AY3VzdG9tRWxlbWVudChcInNmLWFycmF5XCIpXG5leHBvcnQgY2xhc3MgU2ZBcnJheSB7XG4gIEBiaW5kYWJsZSBmb3JtOiBJRm9ybTtcbiAgQGJpbmRhYmxlIGtleTogc3RyaW5nO1xuICBAYmluZGFibGUgbW9kZWw6IGFueVtdO1xuICBAYmluZGFibGUgc2NoZW1hOiBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbjtcblxuICBpZDogc3RyaW5nID0gR3VpZC5uZXdHdWlkKCk7XG5cbiAga2luZCA9IFwiYXJyYXlcIjtcblxuICB2aWV3OiBJbmxpbmVWaWV3U3RyYXRlZ3k7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbmZpZ3VyYXRpb246IFNjaGVtYUZvcm1Db25maWd1cmF0aW9uLFxuICAgIHB1YmxpYyBmb3JtU2VydmljZTogRm9ybVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIsXG4gICkgeyB9XG5cbiAgYmluZCgpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXlcIiwgeyBmb3JtOiB0aGlzLmZvcm0sIG1vZGVsOiB0aGlzLm1vZGVsLCBzY2hlbWE6IHRoaXMuc2NoZW1hLml0ZW1zIH0sIGFyZ3VtZW50cyk7XG4gICAgY29uc3QgdGVtcGxhdGUgPVxuICAgICAgYDx0ZW1wbGF0ZT4ke3RoaXMuZm9ybVNlcnZpY2UuYnVpbGRBcnJheUZvcm0odGhpcy5zY2hlbWEsIHRoaXMuZm9ybSwgdGhpcy5rZXksIHRoaXMubW9kZWwpfTwvdGVtcGxhdGU+YDtcbiAgICB0aGlzLnZpZXcgPSBuZXcgSW5saW5lVmlld1N0cmF0ZWd5KHRlbXBsYXRlKTtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICB0aGlzLm1vZGVsLnB1c2godGhpcy5mb3JtU2VydmljZS5nZXRBcnJheUl0ZW1EZWZhdWx0KHRoaXMuc2NoZW1hLCBudWxsKSk7XG4gIH1cblxuICByZW1vdmUoaW5kZXgpIHtcbiAgICB0aGlzLm1vZGVsLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
