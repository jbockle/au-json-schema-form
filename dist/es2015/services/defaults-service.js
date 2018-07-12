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
import { inject } from "aurelia-framework";
import { SchemaFormLogger } from "../resources/logger";
let DefaultsService = class DefaultsService {
    constructor(logger) {
        this.logger = logger;
    }
    getSchemaDefaultAsync(schema, model) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.info("getSchemaDefaultAsync", { schema, model });
            switch (schema.type) {
                case "array":
                    model = yield this.getArrayDefaultAsync(model, schema.items);
                case "object":
                    model = yield this.getObjectDefaultAsync(model, schema);
                default:
                    model = yield this.getPrimitiveDefaultAsync(model, schema);
            }
            return model;
        });
    }
    getPrimitiveDefaultAsync(model, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            let value = "";
            if (schema.type === "boolean") {
                value = false;
            }
            return model || schema.const || schema.default || value;
        });
    }
    getArrayDefaultAsync(model, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            return model || [];
        });
    }
    getObjectDefaultAsync(model, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logger.warn("getObjectModelDefaults", { model, schema });
            model = model || {};
            if (schema.properties) {
                for (const property in schema.properties) {
                    model[property] = yield this.getSchemaDefaultAsync(schema.properties[property], model[property]);
                }
            }
            return model;
        });
    }
};
DefaultsService = __decorate([
    inject(SchemaFormLogger),
    __metadata("design:paramtypes", [SchemaFormLogger])
], DefaultsService);
export { DefaultsService };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRdkQsSUFBYSxlQUFlLEdBQTVCO0lBRUUsWUFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDO0lBRTNDLHFCQUFxQixDQUFDLE1BQTZCLEVBQUUsS0FBVTs7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUM1RCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ25CLEtBQUssT0FBTztvQkFDVixLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0QsS0FBSyxRQUFRO29CQUNYLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUcsTUFBc0MsQ0FBQyxDQUFDO2dCQUMzRjtvQkFDRSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzlEO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFSyx3QkFBd0IsQ0FBQyxLQUFVLEVBQUUsTUFBNkI7O1lBQ3RFLElBQUksS0FBSyxHQUFRLEVBQUUsQ0FBQztZQUNwQixJQUFJLE1BQU0sQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUM3QixLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ2Y7WUFDRCxPQUFPLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDO1FBQzFELENBQUM7S0FBQTtJQUVLLG9CQUFvQixDQUFDLEtBQVUsRUFBRSxNQUFrQzs7WUFDdkUsT0FBTyxLQUFLLElBQUksRUFBRSxDQUFDO1FBQ3JCLENBQUM7S0FBQTtJQUVLLHFCQUFxQixDQUFDLEtBQWEsRUFBRSxNQUFtQzs7WUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztZQUM5RCxLQUFLLEdBQUcsS0FBSyxJQUFJLEVBQUUsQ0FBQztZQUNwQixJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ3JCLEtBQUssTUFBTSxRQUFRLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtvQkFDeEMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLE1BQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7aUJBQ2xHO2FBQ0Y7WUFDRCxPQUFPLEtBQUssQ0FBQztRQUNmLENBQUM7S0FBQTtDQUNGLENBQUE7QUF2Q1ksZUFBZTtJQUQzQixNQUFNLENBQUMsZ0JBQWdCLENBQUM7cUNBR0ssZ0JBQWdCO0dBRmpDLGVBQWUsQ0F1QzNCO1NBdkNZLGVBQWUiLCJmaWxlIjoic2VydmljZXMvZGVmYXVsdHMtc2VydmljZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCB9IGZyb20gXCJhdXJlbGlhLWZyYW1ld29ya1wiO1xyXG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcclxuaW1wb3J0IHtcclxuICBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sXHJcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uXHJcbn0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xyXG5cclxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxyXG5leHBvcnQgY2xhc3MgRGVmYXVsdHNTZXJ2aWNlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxyXG5cclxuICBhc3luYyBnZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIG1vZGVsOiBhbnkpIHtcclxuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRTY2hlbWFEZWZhdWx0QXN5bmNcIiwgeyBzY2hlbWEsIG1vZGVsIH0pXHJcbiAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJhcnJheVwiOlxyXG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRBcnJheURlZmF1bHRBc3luYyhtb2RlbCwgc2NoZW1hLml0ZW1zKTtcclxuICAgICAgY2FzZSBcIm9iamVjdFwiOlxyXG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRPYmplY3REZWZhdWx0QXN5bmMobW9kZWwsIChzY2hlbWEgYXMgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSk7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldFByaW1pdGl2ZURlZmF1bHRBc3luYyhtb2RlbCwgc2NoZW1hKTtcclxuICAgIH1cclxuICAgIHJldHVybiBtb2RlbDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFByaW1pdGl2ZURlZmF1bHRBc3luYyhtb2RlbDogYW55LCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbikge1xyXG4gICAgbGV0IHZhbHVlOiBhbnkgPSBcIlwiO1xyXG4gICAgaWYgKHNjaGVtYS50eXBlID09PSBcImJvb2xlYW5cIikge1xyXG4gICAgICB2YWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5jb25zdCB8fCBzY2hlbWEuZGVmYXVsdCB8fCB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEFycmF5RGVmYXVsdEFzeW5jKG1vZGVsOiBhbnksIHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24pOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgICByZXR1cm4gbW9kZWwgfHwgW107XHJcbiAgfVxyXG5cclxuICBhc3luYyBnZXRPYmplY3REZWZhdWx0QXN5bmMobW9kZWw6IG9iamVjdCwgc2NoZW1hOiBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pIHtcclxuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJnZXRPYmplY3RNb2RlbERlZmF1bHRzXCIsIHsgbW9kZWwsIHNjaGVtYSB9KTtcclxuICAgIG1vZGVsID0gbW9kZWwgfHwge307XHJcbiAgICBpZiAoc2NoZW1hLnByb3BlcnRpZXMpIHtcclxuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEucHJvcGVydGllcykge1xyXG4gICAgICAgIG1vZGVsW3Byb3BlcnR5XSA9IGF3YWl0IHRoaXMuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XSwgbW9kZWxbcHJvcGVydHldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1vZGVsO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
