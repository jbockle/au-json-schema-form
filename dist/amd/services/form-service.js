var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", "aurelia-framework", "../resources/logger"], function (require, exports, aurelia_framework_1, logger_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FormService = /** @class */ (function () {
        function FormService(logger) {
            this.logger = logger;
            this.containerMarker = "@";
            this.overrideMarker = "$";
        }
        FormService.prototype.buildArrayForm = function (schema, form, formKey, model) {
            this.logger.info("buildArrayForm", { schema: schema, form: form, model: model });
            form["$schema"] = schema.items;
            form["$arraySchema"] = schema;
            schema.items.title = schema.items.title || this.getTitle(formKey);
            var template = "<sf-" + schema.items.type + " model.two-way=\"model[$index]\" form.bind=\"form\"";
            if (form["$schema"].type === "object") {
                template += " schema.bind=\"form['$schema']\"";
            }
            template += "></sf-" + schema.items.type + ">";
            this.logger.info("sf-array-item template", { template: template, schema: schema, form: form, model: model });
            return template;
        };
        FormService.prototype.buildObjectForm = function (schema, form, model, segment) {
            if (segment === void 0) { segment = ""; }
            var _a, _b;
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
                        (_a = this.getContainerTemplate(segment, formKey, form, template, schema, model), segment = _a.segment, template = _a.template);
                    }
                    else {
                        // object property
                        (_b = this.getObjectPropertyTemplate(form, formKey, schema, model, template, segment), model = _b.model, template = _b.template);
                    }
                    template = this.applyEmmetEnd(wrapper, template);
                }
                this.logger.info("created template", { template: template, schema: schema });
                return template;
            }
            catch (ex) {
                this.logger.error("an error occurred building object view strategy", ex, schema, form, model, segment);
                throw ex;
            }
        };
        FormService.prototype.getContainerTemplate = function (segment, formKey, form, template, schema, model) {
            segment += "['" + formKey + "']";
            var innerForms = form[formKey];
            for (var index = 0; index < innerForms.length; index++) {
                template += this.buildObjectForm(schema, innerForms[index], model, segment + ("[" + index + "]"));
            }
            return { segment: segment, template: template };
        };
        FormService.prototype.getArrayItemDefault = function (schema, model) {
            switch (schema.items.type) {
                case "array":
                    return model || [];
                case "number":
                    return model || schema.items.const || schema.items.default || "";
                case "string":
                    return model || schema.items.const || schema.items.default || "";
                case "object":
                    return this.getObjectModelDefaults({}, schema.items);
            }
        };
        FormService.prototype.getObjectPropertyTemplate = function (form, formKey, schema, model, template, segment) {
            var override = this.getOverride(form, formKey, schema);
            model = this.getObjectModelDefaults(model, schema);
            // tslint:disable-next-line:max-line-length
            template += "<sf-" + override.$schema.type + " model.two-way=\"model." + formKey + "\" form.bind=\"form" + segment + "." + formKey + "\"";
            if (override.$schema.type === "array") {
                model[formKey] = model[formKey] || [];
                template += " schema.bind=\"schema.properties." + formKey + "\" key=\"" + formKey + "\"";
            }
            if (override.$schema.type === "object") {
                model[formKey] = model[formKey] || {};
                template += " schema.bind=\"schema.properties." + formKey + "\"";
            }
            template += "></sf-" + override.$schema.type + ">\r\n";
            return { model: model, template: template };
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0tc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFNQTtRQUtFLHFCQUFvQixNQUF3QjtZQUF4QixXQUFNLEdBQU4sTUFBTSxDQUFrQjtZQUhuQyxvQkFBZSxHQUFHLEdBQUcsQ0FBQztZQUN0QixtQkFBYyxHQUFHLEdBQUcsQ0FBQztRQUVrQixDQUFDO1FBRWpELG9DQUFjLEdBQWQsVUFBZSxNQUFrQyxFQUFFLElBQVcsRUFBRSxPQUFlLEVBQUUsS0FBWTtZQUMzRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUFFLE1BQU0sUUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztZQUUzRCxJQUFzQixDQUFDLFNBQVMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7WUFDakQsSUFBc0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxNQUFNLENBQUM7WUFFakQsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsRSxJQUFJLFFBQVEsR0FDVixTQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSx3REFBaUQsQ0FBQztZQUM1RSxJQUFLLElBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDeEQsUUFBUSxJQUFJLGtDQUFnQyxDQUFDO2FBQzlDO1lBQ0QsUUFBUSxJQUFJLFdBQVMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLE1BQUcsQ0FBQztZQUMxQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLFFBQVEsVUFBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLENBQUMsQ0FBQztZQUM5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QUM7UUFFRCxtQ0FBYSxHQUFiLFVBQWMsT0FBMEMsRUFBRSxRQUFnQjtZQUN4RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDN0MsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFO2dCQUNmLFFBQVEsSUFBSSxPQUFPLENBQUMsR0FBRyxDQUFDO2FBQ3pCO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQUVELHFDQUFlLEdBQWYsVUFBZ0IsT0FBMEMsRUFBRSxRQUFnQjtZQUMxRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUMvQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUU7Z0JBQ2pCLFFBQVEsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQzNCO1lBQ0QsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztRQXRMVSxXQUFXO1lBRHZCLDBCQUFNLENBQUMseUJBQWdCLENBQUM7NkNBTUsseUJBQWdCO1dBTGpDLFdBQVcsQ0F1THZCO1FBQUQsa0JBQUM7S0F2TEQsQUF1TEMsSUFBQTtJQXZMWSxrQ0FBVyIsImZpbGUiOiJzZXJ2aWNlcy9mb3JtLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLCBJSnNvblNjaGVtYVN0cmluZ0RlZmluaXRpb24sIElKc29uU2NoZW1hTnVtYmVyRGVmaW5pdGlvbiwgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgSUZvcm0sIElGb3JtT3ZlcnJpZGUgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9mb3JtXCI7XG5pbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuXG5AaW5qZWN0KFNjaGVtYUZvcm1Mb2dnZXIpXG5leHBvcnQgY2xhc3MgRm9ybVNlcnZpY2Uge1xuXG4gIHJlYWRvbmx5IGNvbnRhaW5lck1hcmtlciA9IFwiQFwiO1xuICByZWFkb25seSBvdmVycmlkZU1hcmtlciA9IFwiJFwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyKSB7IH1cblxuICBidWlsZEFycmF5Rm9ybShzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLCBmb3JtOiBJRm9ybSwgZm9ybUtleTogc3RyaW5nLCBtb2RlbDogYW55W10pOiBzdHJpbmcge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJidWlsZEFycmF5Rm9ybVwiLCB7IHNjaGVtYSwgZm9ybSwgbW9kZWwgfSk7XG5cbiAgICAoZm9ybSBhcyBJRm9ybU92ZXJyaWRlKVtcIiRzY2hlbWFcIl0gPSBzY2hlbWEuaXRlbXM7XG4gICAgKGZvcm0gYXMgSUZvcm1PdmVycmlkZSlbXCIkYXJyYXlTY2hlbWFcIl0gPSBzY2hlbWE7XG5cbiAgICBzY2hlbWEuaXRlbXMudGl0bGUgPSBzY2hlbWEuaXRlbXMudGl0bGUgfHwgdGhpcy5nZXRUaXRsZShmb3JtS2V5KTtcbiAgICBsZXQgdGVtcGxhdGUgPVxuICAgICAgYDxzZi0ke3NjaGVtYS5pdGVtcy50eXBlfSBtb2RlbC50d28td2F5PVwibW9kZWxbJGluZGV4XVwiIGZvcm0uYmluZD1cImZvcm1cImA7XG4gICAgaWYgKChmb3JtIGFzIElGb3JtT3ZlcnJpZGUpW1wiJHNjaGVtYVwiXS50eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICB0ZW1wbGF0ZSArPSBgIHNjaGVtYS5iaW5kPVwiZm9ybVsnJHNjaGVtYSddXCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtzY2hlbWEuaXRlbXMudHlwZX0+YDtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwic2YtYXJyYXktaXRlbSB0ZW1wbGF0ZVwiLCB7IHRlbXBsYXRlLCBzY2hlbWEsIGZvcm0sIG1vZGVsIH0pO1xuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGJ1aWxkT2JqZWN0Rm9ybShzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbiwgZm9ybTogSUZvcm0sIG1vZGVsOiBvYmplY3QsIHNlZ21lbnQgPSBcIlwiKTogc3RyaW5nIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYnVpbGRPYmplY3RGb3JtXCIsIGFyZ3VtZW50cyk7XG4gICAgbGV0IHRlbXBsYXRlID0gXCJcIjtcbiAgICB0cnkge1xuICAgICAgbGV0IHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmcsIGVuZD86IHN0cmluZyB9O1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmZvcmluXG4gICAgICBmb3IgKGNvbnN0IGZvcm1LZXkgaW4gZm9ybSkge1xuICAgICAgICB3cmFwcGVyID0gdGhpcy5nZXRFbW1ldFdyYXBwZXIoZm9ybUtleSwgd3JhcHBlcik7XG4gICAgICAgIHRlbXBsYXRlID0gdGhpcy5hcHBseUVtbWV0U3RhcnQod3JhcHBlciwgdGVtcGxhdGUpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzT3ZlcnJpZGUoZm9ybUtleSkpIHtcbiAgICAgICAgICAvLyBkbyBub3RoaW5nXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0NvbnRhaW5lcihmb3JtS2V5KSkge1xuICAgICAgICAgIC8vIGlubmVyIGVtbWV0IGNvbnRhaW5lclxuICAgICAgICAgICh7IHNlZ21lbnQsIHRlbXBsYXRlIH0gPSB0aGlzLmdldENvbnRhaW5lclRlbXBsYXRlKHNlZ21lbnQsIGZvcm1LZXksIGZvcm0sIHRlbXBsYXRlLCBzY2hlbWEsIG1vZGVsKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gb2JqZWN0IHByb3BlcnR5XG4gICAgICAgICAgKHsgbW9kZWwsIHRlbXBsYXRlIH0gPSB0aGlzLmdldE9iamVjdFByb3BlcnR5VGVtcGxhdGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hLCBtb2RlbCwgdGVtcGxhdGUsIHNlZ21lbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRlbXBsYXRlID0gdGhpcy5hcHBseUVtbWV0RW5kKHdyYXBwZXIsIHRlbXBsYXRlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9nZ2VyLmluZm8oXCJjcmVhdGVkIHRlbXBsYXRlXCIsIHsgdGVtcGxhdGUsIHNjaGVtYSB9KTtcbiAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJhbiBlcnJvciBvY2N1cnJlZCBidWlsZGluZyBvYmplY3QgdmlldyBzdHJhdGVneVwiLCBleCwgc2NoZW1hLCBmb3JtLCBtb2RlbCwgc2VnbWVudCk7XG4gICAgICB0aHJvdyBleDtcbiAgICB9XG4gIH1cblxuICBnZXRDb250YWluZXJUZW1wbGF0ZShcbiAgICBzZWdtZW50OiBzdHJpbmcsIGZvcm1LZXk6IHN0cmluZywgZm9ybTogSUZvcm0sIHRlbXBsYXRlOiBzdHJpbmcsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLCBtb2RlbDogb2JqZWN0XG4gICkge1xuICAgIHNlZ21lbnQgKz0gYFsnJHtmb3JtS2V5fSddYDtcbiAgICBjb25zdCBpbm5lckZvcm1zID0gZm9ybVtmb3JtS2V5XSBhcyBJRm9ybVtdO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbm5lckZvcm1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdGVtcGxhdGUgKz0gdGhpcy5idWlsZE9iamVjdEZvcm0oc2NoZW1hLCBpbm5lckZvcm1zW2luZGV4XSwgbW9kZWwsIHNlZ21lbnQgKyBgWyR7aW5kZXh9XWApO1xuICAgIH1cbiAgICByZXR1cm4geyBzZWdtZW50LCB0ZW1wbGF0ZSB9O1xuICB9XG5cbiAgZ2V0QXJyYXlJdGVtRGVmYXVsdChzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uLCBtb2RlbCkge1xuICAgIHN3aXRjaCAoc2NoZW1hLml0ZW1zLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJhcnJheVwiOlxuICAgICAgICByZXR1cm4gbW9kZWwgfHwgW107XG4gICAgICBjYXNlIFwibnVtYmVyXCI6XG4gICAgICAgIHJldHVybiBtb2RlbCB8fCBzY2hlbWEuaXRlbXMuY29uc3QgfHwgc2NoZW1hLml0ZW1zLmRlZmF1bHQgfHwgXCJcIjtcbiAgICAgIGNhc2UgXCJzdHJpbmdcIjpcbiAgICAgICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5pdGVtcy5jb25zdCB8fCBzY2hlbWEuaXRlbXMuZGVmYXVsdCB8fCBcIlwiO1xuICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICByZXR1cm4gdGhpcy5nZXRPYmplY3RNb2RlbERlZmF1bHRzKHt9LCBzY2hlbWEuaXRlbXMpO1xuICAgIH1cbiAgfVxuXG4gIGdldE9iamVjdFByb3BlcnR5VGVtcGxhdGUoXG4gICAgZm9ybTogSUZvcm0sIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sIG1vZGVsOiBvYmplY3QsIHRlbXBsYXRlOiBzdHJpbmcsIHNlZ21lbnQ6IHN0cmluZ1xuICApIHtcbiAgICBjb25zdCBvdmVycmlkZSA9IHRoaXMuZ2V0T3ZlcnJpZGUoZm9ybSwgZm9ybUtleSwgc2NoZW1hKTtcbiAgICBtb2RlbCA9IHRoaXMuZ2V0T2JqZWN0TW9kZWxEZWZhdWx0cyhtb2RlbCwgc2NoZW1hKTtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgdGVtcGxhdGUgKz0gYDxzZi0ke292ZXJyaWRlLiRzY2hlbWEudHlwZX0gbW9kZWwudHdvLXdheT1cIm1vZGVsLiR7Zm9ybUtleX1cIiBmb3JtLmJpbmQ9XCJmb3JtJHtzZWdtZW50fS4ke2Zvcm1LZXl9XCJgO1xuICAgIGlmIChvdmVycmlkZS4kc2NoZW1hLnR5cGUgPT09IFwiYXJyYXlcIikge1xuICAgICAgbW9kZWxbZm9ybUtleV0gPSBtb2RlbFtmb3JtS2V5XSB8fCBbXTtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCIga2V5PVwiJHtmb3JtS2V5fVwiYDtcbiAgICB9XG4gICAgaWYgKG92ZXJyaWRlLiRzY2hlbWEudHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgbW9kZWxbZm9ybUtleV0gPSBtb2RlbFtmb3JtS2V5XSB8fCB7fTtcbiAgICAgIHRlbXBsYXRlICs9IGAgc2NoZW1hLmJpbmQ9XCJzY2hlbWEucHJvcGVydGllcy4ke2Zvcm1LZXl9XCJgO1xuICAgIH1cbiAgICB0ZW1wbGF0ZSArPSBgPjwvc2YtJHtvdmVycmlkZS4kc2NoZW1hLnR5cGV9PlxcclxcbmA7XG4gICAgcmV0dXJuIHsgbW9kZWwsIHRlbXBsYXRlIH07XG4gIH1cblxuICBpc092ZXJyaWRlKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzT3ZlcnJpZGVcIiwgYXJndW1lbnRzKTtcbiAgICByZXR1cm4ga2V5LmNoYXJBdCgwKSA9PT0gdGhpcy5vdmVycmlkZU1hcmtlcjtcbiAgfVxuXG4gIGlzQ29udGFpbmVyKGtleTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImlzQ29udGFpbmVyXCIsIGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGtleS5jaGFyQXQoMCkgPT09IHRoaXMuY29udGFpbmVyTWFya2VyO1xuICB9XG5cbiAgZ2V0T3ZlcnJpZGUoZm9ybTogSUZvcm0sIGZvcm1LZXk6IHN0cmluZywgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0T3ZlcnJpZGVcIiwgeyBmb3JtS2V5LCBmb3JtLCBzY2hlbWEgfSk7XG4gICAgY29uc3Qgb3ZlcnJpZGUgPSBmb3JtW2Zvcm1LZXldIGFzIElGb3JtT3ZlcnJpZGU7XG4gICAgb3ZlcnJpZGUuJHNjaGVtYSA9IHNjaGVtYS5wcm9wZXJ0aWVzW2Zvcm1LZXldO1xuICAgIG92ZXJyaWRlLiRzY2hlbWEudGl0bGUgPSBvdmVycmlkZS4kc2NoZW1hLnRpdGxlIHx8IHRoaXMuZ2V0VGl0bGUoZm9ybUtleSk7XG4gICAgb3ZlcnJpZGUuJHJlcXVpcmVkID0gQXJyYXkuaXNBcnJheShzY2hlbWEucmVxdWlyZWQpID8gc2NoZW1hLnJlcXVpcmVkLmluZGV4T2YoZm9ybUtleSkgIT09IC0xIDogZmFsc2U7XG4gICAgcmV0dXJuIG92ZXJyaWRlO1xuICB9XG5cbiAgZ2V0VGl0bGUoa2V5OiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiZ2V0VGl0bGVcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAoa2V5KSB7XG4gICAgICByZXR1cm4ga2V5XG4gICAgICAgIC5yZXBsYWNlKC8oW0EtWl0pL2csIFwiICQxXCIpXG4gICAgICAgIC5yZXBsYWNlKC9eLi8sIChzdHIpID0+IHN0ci50b1VwcGVyQ2FzZSgpKTtcbiAgICB9XG4gIH1cblxuICBnZXRPYmplY3RNb2RlbERlZmF1bHRzKG1vZGVsOiBvYmplY3QsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldE9iamVjdE1vZGVsRGVmYXVsdHNcIiwgYXJndW1lbnRzKTtcbiAgICBtb2RlbCA9IG1vZGVsIHx8IHt9O1xuICAgIGlmIChzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXNbcHJvcGVydHldLmNvbnN0IHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5kZWZhdWx0KSB7XG4gICAgICAgICAgbW9kZWxbcHJvcGVydHldID0gbW9kZWxbcHJvcGVydHldIHx8IHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XS5jb25zdCB8fCBzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0uZGVmYXVsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbW9kZWw7XG4gIH1cblxuICBnZXRFbW1ldENvbnRhaW5lcihrZXk6IHN0cmluZyk6IHsgc3RhcnQ6IHN0cmluZywgZW5kOiBzdHJpbmcgfSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcImdldEVtbWV0Q29udGFpbmVyXCIsIGFyZ3VtZW50cyk7XG4gICAgY29uc3QgcmVnZXggPSAvXkAoW2Etei1dKykoPzooPzooPzojKFxcdyspKT8pKD86KCg/OlxcLig/OlthLXpcXGQtXSspKSspPykpJC87XG5cbiAgICBjb25zdCBtYXRjaGVzID0ga2V5Lm1hdGNoKHJlZ2V4KTtcblxuICAgIGlmICghbWF0Y2hlcykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGB0aGUgZm9ybSBrZXkgXCIke2tleX1cIiBkb2VzIG5vdCBtYXRjaCBcIl4oQGVsZW1lbnQpKCNpZCk/KCguY2xhc3MpKyk/JFwiYCk7XG4gICAgfVxuXG4gICAgY29uc3QgZWxlbWVudCA9IG1hdGNoZXNbMV07XG4gICAgY29uc3QgaWQgPSAhbWF0Y2hlc1syXSA/IFwiXCIgOiBgaWQ9XCIke21hdGNoZXNbMl19XCJgO1xuICAgIGNvbnN0IGNsYXNzZXMgPSAhbWF0Y2hlc1szXSA/IFwiXCIgOiBgY2xhc3M9XCIke21hdGNoZXNbM10uc3BsaXQoXCIuXCIpLmpvaW4oXCIgXCIpLnRyaW0oKX1cImA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhcnQ6IGA8JHtlbGVtZW50fSAke2lkfSAke2NsYXNzZXN9PmAucmVwbGFjZSgvXFxzKy8sIFwiIFwiKS50cmltKCksXG4gICAgICBlbmQ6IGA8LyR7ZWxlbWVudH0+YFxuICAgIH07XG4gIH1cblxuICBnZXRFbW1ldFdyYXBwZXIoa2V5OiBzdHJpbmcsIHdyYXBwZXI6IHsgc3RhcnQ/OiBzdHJpbmc7IGVuZD86IHN0cmluZzsgfSkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRFbW1ldFdyYXBwZXJcIiwgYXJndW1lbnRzKTtcbiAgICBpZiAodGhpcy5pc0NvbnRhaW5lcihrZXkpKSB7XG4gICAgICB3cmFwcGVyID0gdGhpcy5nZXRFbW1ldENvbnRhaW5lcihrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3cmFwcGVyID0ge307XG4gICAgfVxuICAgIHJldHVybiB3cmFwcGVyO1xuICB9XG5cbiAgYXBwbHlFbW1ldEVuZCh3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nOyBlbmQ/OiBzdHJpbmc7IH0sIHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYXBwbHlFbW1ldEVuZFwiLCBhcmd1bWVudHMpO1xuICAgIGlmICh3cmFwcGVyLmVuZCkge1xuICAgICAgdGVtcGxhdGUgKz0gd3JhcHBlci5lbmQ7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGFwcGx5RW1tZXRTdGFydCh3cmFwcGVyOiB7IHN0YXJ0Pzogc3RyaW5nOyBlbmQ/OiBzdHJpbmc7IH0sIHRlbXBsYXRlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiYXBwbHlFbW1ldFN0YXJ0XCIsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHdyYXBwZXIuc3RhcnQpIHtcbiAgICAgIHRlbXBsYXRlICs9IHdyYXBwZXIuc3RhcnQ7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
