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
var logger_1 = require("../resources/logger");
var FormService = /** @class */ (function () {
    function FormService(logger) {
        this.logger = logger;
        this.containerMarker = "@";
        this.overrideMarker = "$";
    }
    FormService.prototype.buildObjectForm = function (schema, form, model, segment) {
        if (segment === void 0) { segment = ""; }
        this.logger.info("buildObjectForm", arguments);
        var template = "";
        try {
            var wrapper = void 0;
            // tslint:disable-next-line:forin
            for (var formKey in form) {
                wrapper = this.getEmmetWrapper(formKey, wrapper);
                template = this.applyEmmetStart(wrapper, template);
                if (this.isOverride(formKey)) {
                    // do nothing
                }
                else if (this.isContainer(formKey)) {
                    // inner emmet container
                    segment += "['" + formKey + "']";
                    var innerForms = form[formKey];
                    for (var index = 0; index < innerForms.length; index++) {
                        template += this.buildObjectForm(schema, innerForms[index], model, segment + ("[" + index + "]"));
                    }
                }
                else {
                    // object property
                    var override = this.getOverride(form, formKey, schema);
                    model = this.getObjectModelDefaults(model, schema);
                    // tslint:disable-next-line:max-line-length
                    template += "<sf-" + override.$schema.type + " model.two-way=\"model." + formKey + "\" form.bind=\"form" + segment + "." + formKey + "\"";
                    if (override.$schema.type === "array") {
                        model[formKey] = [];
                        template += " schema.bind=\"schema.properties." + formKey + "\"";
                    }
                    if (override.$schema.type === "object") {
                        model[formKey] = {};
                        template += " schema.bind=\"schema.properties." + formKey + "\"";
                    }
                    template += "></sf-" + override.$schema.type + ">\r\n";
                }
                template = this.applyEmmetEnd(wrapper, template);
            }
            this.logger.info("created template", template, schema);
            return template;
        }
        catch (ex) {
            this.logger.error("an error occurred building object view strategy", ex, schema, form, model, segment);
            throw ex;
        }
    };
    FormService.prototype.isOverride = function (key) {
        this.logger.info("isOverride", arguments);
        return key.charAt(0) === this.overrideMarker;
    };
    FormService.prototype.isContainer = function (key) {
        this.logger.info("isContainer", arguments);
        return key.charAt(0) === this.containerMarker;
    };
    FormService.prototype.getOverride = function (form, formKey, schema) {
        this.logger.info("getOverride", { formKey: formKey, form: form, schema: schema });
        var override = form[formKey];
        override.$schema = schema.properties[formKey];
        override.$schema.title = override.$schema.title || this.getTitle(formKey);
        override.$required = Array.isArray(schema.required) ? schema.required.indexOf(formKey) !== -1 : false;
        return override;
    };
    FormService.prototype.getTitle = function (key) {
        this.logger.info("getTitle", arguments);
        if (key) {
            return key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, function (str) { return str.toUpperCase(); });
        }
    };
    FormService.prototype.getObjectModelDefaults = function (model, schema) {
        this.logger.info("getObjectModelDefaults", arguments);
        model = model || {};
        if (schema.properties) {
            for (var property in schema.properties) {
                if (schema.properties[property].const || schema.properties[property].default) {
                    model[property] = model[property] || schema.properties[property].const || schema.properties[property].default;
                }
            }
        }
        return model;
    };
    FormService.prototype.getEmmetContainer = function (key) {
        this.logger.info("getEmmetContainer", arguments);
        var regex = /^@([a-z-]+)(?:(?:(?:#(\w+))?)(?:((?:\.(?:[a-z\d-]+))+)?))$/;
        var matches = key.match(regex);
        if (!matches) {
            throw new Error("the form key \"" + key + "\" does not match \"^(@element)(#id)?((.class)+)?$\"");
        }
        var element = matches[1];
        var id = !matches[2] ? "" : "id=\"" + matches[2] + "\"";
        var classes = !matches[3] ? "" : "class=\"" + matches[3].split(".").join(" ").trim() + "\"";
        return {
            start: ("<" + element + " " + id + " " + classes + ">").replace(/\s+/, " ").trim(),
            end: "</" + element + ">"
        };
    };
    FormService.prototype.getEmmetWrapper = function (key, wrapper) {
        this.logger.info("getEmmetWrapper", arguments);
        if (this.isContainer(key)) {
            wrapper = this.getEmmetContainer(key);
        }
        else {
            wrapper = {};
        }
        return wrapper;
    };
    FormService.prototype.applyEmmetEnd = function (wrapper, template) {
        this.logger.info("applyEmmetEnd", arguments);
        if (wrapper.end) {
            template += wrapper.end;
        }
        return template;
    };
    FormService.prototype.applyEmmetStart = function (wrapper, template) {
        this.logger.info("applyEmmetStart", arguments);
        if (wrapper.start) {
            template += wrapper.start;
        }
        return template;
    };
    FormService = __decorate([
        aurelia_framework_1.inject(logger_1.SchemaFormLogger),
        __metadata("design:paramtypes", [logger_1.SchemaFormLogger])
    ], FormService);
    return FormService;
}());
exports.FormService = FormService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVBLHVEQUEyQztBQUMzQyw4Q0FBdUQ7QUFHdkQ7SUFLRSxxQkFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFIbkMsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsbUJBQWMsR0FBRyxHQUFHLENBQUM7SUFFa0IsQ0FBQztJQUVqRCxxQ0FBZSxHQUFmLFVBQWdCLE1BQW1DLEVBQUUsSUFBVyxFQUFFLEtBQWEsRUFBRSxPQUFZO1FBQVosd0JBQUEsRUFBQSxZQUFZO1FBQzNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQy9DLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJO1lBQ0YsSUFBSSxPQUFPLFNBQWtDLENBQUM7WUFDOUMsaUNBQWlDO1lBQ2pDLEtBQUssSUFBTSxPQUFPLElBQUksSUFBSSxFQUFFO2dCQUMxQixPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2pELFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztnQkFFbkQsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUM1QixhQUFhO2lCQUNkO3FCQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDcEMsd0JBQXdCO29CQUV4QixPQUFPLElBQUksT0FBSyxPQUFPLE9BQUksQ0FBQztvQkFDNUIsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBWSxDQUFDO29CQUM1QyxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFB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Q0FBQyxDQUFDO1FBQy9DLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUN6QixPQUFPLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxPQUFPLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7UUFDRCxPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLE9BQTBDLEVBQUUsUUFBZ0I7UUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdDLElBQUksT0FBTyxDQUFDLEdBQUcsRUFBRTtZQUNmLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxRQUFRLENBQUM7SUFDbEIsQ0FBQztJQUVELHFDQUFlLEdBQWYsVUFBZ0IsT0FBMEMsRUFBRSxRQUFnQjtRQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUMvQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7WUFDakIsUUFBUSxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUM7U0FDM0I7UUFDRCxPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0lBN0lVLFdBQVc7UUFEdkIsMEJBQU0sQ0FBQyx5QkFBZ0IsQ0FBQzt5Q0FNSyx5QkFBZ0I7T0FMakMsV0FBVyxDQThJdkI7SUFBRCxrQkFBQztDQTlJRCxBQThJQyxJQUFBO0FBOUlZLGtDQUFXIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0tc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgSUZvcm0sIElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Mb2dnZXIpXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuXG4gIHJlYWRvbmx5IGNvbnRhaW5lck1hcmtlciA9IFwiQFwiO1xuICByZWFkb25seSBvdmVycmlkZU1hcmtlciA9IFwiJFwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyKSB7IH1cblxuICBidWlsZE9iamVjdEZvcm0oc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIGZvcm06IElGb3JtLCBtb2RlbDogb2JqZWN0LCBzZWdtZW50ID0gXCJcIik6IHN0cmluZyB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImJ1aWxkT2JqZWN0Rm9ybVwiLCBhcmd1bWVudHMpO1xuICAgIGxldCB0ZW1wbGF0ZSA9IFwiXCI7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nLCBlbmQ/OiBzdHJpbmcgfTtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxuICAgICAgZm9yIChjb25zdCBmb3JtS2V5IGluIGZvcm0pIHtcbiAgICAgICAgd3JhcHBlciA9IHRoaXMuZ2V0RW1tZXRXcmFwcGVyKGZvcm1LZXksIHdyYXBwZXIpO1xuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuYXBwbHlFbW1ldFN0YXJ0KHdyYXBwZXIsIHRlbXBsYXRlKTtcblxuICAgICAgICBpZiAodGhpcy5pc092ZXJyaWRlKGZvcm1LZXkpKSB7XG4gICAgICAgICAgLy8gZG8gbm90aGluZ1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNDb250YWluZXIoZm9ybUtleSkpIHtcbiAgICAgICAgICAvLyBpbm5lciBlbW1ldCBjb250YWluZXJcblxuICAgICAgICAgIHNlZ21lbnQgKz0gYFsnJHtmb3JtS2V5fSddYDtcbiAgICAgICAgICBjb25zdCBpbm5lckZvcm1zID0gZm9ybVtmb3JtS2V5XSBhcyBJRm9ybVtdO1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbm5lckZvcm1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgdGVtcGxhdGUgKz0gdGhpcy5idWlsZE9iamVjdEZvcm0oc2NoZW1hLCBpbm5lckZvcm1zW2luZGV4XSwgbW9kZWwsIHNlZ21lbnQgKyBgWyR7aW5kZXh9XWApO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG9iamVjdCBwcm9wZXJ0eVxuXG4gICAgICAgICAgY29uc3Qgb3ZlcnJpZGUgPSB0aGlzLmdldE92ZXJyaWRlKGZvcm0sIGZvcm1LZXksIHNjaGVtYSk7XG4gICAgICAgICAgbW9kZWwgPSB0aGlzLmdldE9iamVjdE1vZGVsRGVmYXVsdHMobW9kZWwsIHNjaGVtYSk7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm1heC1saW5lLWxlbmd0aFxuICAgICAgICAgIHRlbXBsYXRlICs9IGA8c2YtJHtvdmVycmlkZS4kc2NoZW1hLnR5cGV9IG1vZGVsLnR3by13YXk9XCJtb2RlbC4ke2Zvcm1LZXl9XCIgZm9ybS5iaW5kPVwiZm9ybSR7c2VnbWVudH0uJHtmb3JtS2V5fVwiYDtcbiAgICAgICAgICBpZiAob3ZlcnJpZGUuJHNjaGVtYS50eXBlID09PSBcImFycmF5XCIpIHtcbiAgICAgICAgICAgIG1vZGVsW2Zvcm1LZXldID0gW107XG4gICAgICAgICAgICB0ZW1wbGF0ZSArPSBgIHNjaGVtYS5iaW5kPVwic2NoZW1hLnByb3BlcnRpZXMuJHtmb3JtS2V5fVwiYDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKG92ZXJyaWRlLiRzY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgbW9kZWxbZm9ybUtleV0gPSB7fTtcbiAgICAgICAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCJgO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtvdmVycmlkZS4kc2NoZW1hLnR5cGV9PlxcclxcbmA7XG4gICAgICAgIH1cblxuICAgICAgICB0ZW1wbGF0ZSA9IHRoaXMuYXBwbHlFbW1ldEVuZCh3cmFwcGVyLCB0ZW1wbGF0ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiY3JlYXRlZCB0ZW1wbGF0ZVwiLCB0ZW1wbGF0ZSwgc2NoZW1hKTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJhbiBlcnJvciBvY2N1cnJlZCBidWlsZGluZyBvYmplY3QgdmlldyBzdHJhdGVneVwiLCBleCwgc2NoZW1hLCBmb3JtLCBtb2RlbCwgc2VnbWVudCk7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH1cblxuICBpc092ZXJyaWRlKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzT3ZlcnJpZGVcIiwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4ga2V5LmNoYXJBdCgwKSA9PT0gdGhpcy5vdmVycmlkZU1hcmtlcjtcbiAgfVxuXG4gIGlzQ29udGFpbmVyKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzQ29udGFpbmVyXCIsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGtleS5jaGFyQXQoMCkgPT09IHRoaXMuY29udGFpbmVyTWFya2VyO1xuICB9XG5cbiAgZ2V0T3ZlcnJpZGUoZm9ybTogSUZvcm0sIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0T3ZlcnJpZGVcIiwgeyBmb3JtS2V5LCBmb3JtLCBzY2hlbWEgfSk7XG4gICAgY29uc3Qgb3ZlcnJpZGUgPSBmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGU7XG4gICAgb3ZlcnJpZGUuJHNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW2Zvcm1LZXldO1xuICAgIG92ZXJyaWRlLiRzY2hlbWEudGl0bGUgPSBvdmVycmlkZS4kc2NoZW1hLnRpdGxlIHx8IHRoaXMuZ2V0VGl0bGUoZm9ybUtleSk7XG4gICAgb3ZlcnJpZGUuJHJlcXVpcmVkID0gQXJyYXkuaXNBcnJheShzY2hlbWEucmVxdWlyZWQpID8gc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YoZm9ybUtleSkgIT09IC0xIDogZmFsc2U7XG4gICAgcmV0dXJuIG92ZXJyaWRlO1xuICB9XG5cbiAgZ2V0VGl0bGUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0VGl0bGVcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBnZXRPYmplY3RNb2RlbERlZmF1bHRzKG1vZGVsOiBvYmplY3QsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldE9iamVjdE1vZGVsRGVmYXVsdHNcIiwgYXJndW1lbnRzKTtcbiAgICBtb2RlbCA9IG1vZGVsIHx8IHt9O1xuICAgIGlmIChzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmNvbnN0IHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5kZWZhdWx0KSB7XG4gICAgICAgICAgbW9kZWxbcHJvcGVydHldID0gbW9kZWxbcHJvcGVydHldIHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5jb25zdCB8fCBzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0uZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBnZXRFbW1ldENvbnRhaW5lcihrZXk6IHN0cmluZyk6IHsgc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcgfSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEVtbWV0Q29udGFpbmVyXCIsIGFyZ3VtZW50cyk7XG4gICAgY29uc3QgcmVnZXggPSAvXkAoW2Etei1dKykoPzooPzooPzojKFxcdyspKT8pKD86KCg/OlxcLig/OlthLXpcXGQtXSspKSspPykpJC87XG5cbiAgICBjb25zdCBtYXRjaGVzID0ga2V5Lm1hdGNoKHJlZ2V4KTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgZm9ybSBrZXkgXCIke2tleX1cIiBkb2VzIG5vdCBtYXRjaCBcIl4oQGVsZW1lbnQpKCNpZCk/KCguY2xhc3MpKyk/JFwiYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IG1hdGNoZXNbMV07XG4gICAgY29uc3QgaWQgPSAhbWF0Y2hlc1syXSA/IFwiXCIgOiBgaWQ9XCIke21hdGNoZXNbMl19XCJgO1xuICAgIGNvbnN0IGNsYXNzZXMgPSAhbWF0Y2hlc1szXSA/IFwiXCIgOiBgY2xhc3M9XCIke21hdGNoZXNbM10uc3BsaXQoXCIuXCIpLmpvaW4oXCIgXCIpLnRyaW0oKX1cImA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IGA8JHtlbGVtZW50fSAke2lkfSAke2NsYXNzZXN9PmAucmVwbGFjZSgvXFxzKy8sIFwiIFwiKS50cmltKCksXG4gICAgICBlbmQ6IGA8LyR7ZWxlbWVudH0+YFxuICAgIH07XG4gIH1cblxuICBnZXRFbW1ldFdyYXBwZXIoa2V5OiBzdHJpbmcsIHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRFbW1ldFdyYXBwZXJcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAodGhpcy5pc0NvbnRhaW5lcihrZXkpKSB7XG4gICAgICB3cmFwcGVyID0gdGhpcy5nZXRFbW1ldENvbnRhaW5lcihrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwcGVyID0ge307XG4gICAgfVxuICAgIHJldHVybiB3cmFwcGVyO1xuICB9XG5cbiAgYXBwbHlFbW1ldEVuZCh3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nOyBlbmQ/OiBzdHJpbmc7IH0sIHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYXBwbHlFbW1ldEVuZFwiLCBhcmd1bWVudHMpO1xuICAgIGlmICh3cmFwcGVyLmVuZCkge1xuICAgICAgdGVtcGxhdGUgKz0gd3JhcHBlci5lbmQ7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGFwcGx5RW1tZXRTdGFydCh3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nOyBlbmQ/OiBzdHJpbmc7IH0sIHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYXBwbHlFbW1ldFN0YXJ0XCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHdyYXBwZXIuc3RhcnQpIHtcbiAgICAgIHRlbXBsYXRlICs9IHdyYXBwZXIuc3RhcnQ7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
