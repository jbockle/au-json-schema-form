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
            let value;
            if (schema.items.type === "boolean") {
                value = false;
            }
            return model || schema.items.const || schema.items.default || value;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRdkQsSUFBYSxlQUFlLEdBQTVCO0lBRUUsWUFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDO0lBRTNDLHFCQUFxQixDQUFDLE1BQTZCLEVBQUUsS0FBVTs7WUFDbkUsUUFBUSxNQUFNLENBQUMsSUFBSSxFQUFFO2dCQUNuQixLQUFLLE9BQU87b0JBQ1YsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQy9ELEtBQUssUUFBUTtvQkFDWCxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFHLE1BQXNDLENBQUMsQ0FBQztnQkFDM0Y7b0JBQ0UsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQzthQUM5RDtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0lBRUssd0JBQXdCLENBQUMsS0FBVSxFQUFFLE1BQTZCOztZQUN0RSxJQUFJLEtBQVUsQ0FBQztZQUNmLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO2dCQUNuQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2FBQ2Y7WUFDRCxPQUFPLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sSUFBSSxLQUFLLENBQUM7UUFDdEUsQ0FBQztLQUFBO0lBRUssb0JBQW9CLENBQUMsS0FBVSxFQUFFLE1BQWtDOztZQUN2RSxPQUFPLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDckIsQ0FBQztLQUFBO0lBRUsscUJBQXFCLENBQUMsS0FBYSxFQUFFLE1BQW1DOztZQUM1RSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQzlELEtBQUssR0FBRyxLQUFLLElBQUksRUFBRSxDQUFDO1lBQ3BCLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDckIsS0FBSyxNQUFNLFFBQVEsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO29CQUN4QyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDbEc7YUFDRjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQztLQUFBO0NBQ0YsQ0FBQTtBQXRDWSxlQUFlO0lBRDNCLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQztxQ0FHSyxnQkFBZ0I7R0FGakMsZUFBZSxDQXNDM0I7U0F0Q1ksZUFBZSIsImZpbGUiOiJzZXJ2aWNlcy9kZWZhdWx0cy1zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5qZWN0IH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBTY2hlbWFGb3JtTG9nZ2VyIH0gZnJvbSBcIi4uL3Jlc291cmNlcy9sb2dnZXJcIjtcbmltcG9ydCB7XG4gIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24sXG4gIElKc29uU2NoZW1hRGVmaW5pdGlvblxufSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9qc29uLXNjaGVtYS1kZWZpbml0aW9uXCI7XG5cbkBpbmplY3QoU2NoZW1hRm9ybUxvZ2dlcilcbmV4cG9ydCBjbGFzcyBEZWZhdWx0c1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9nZ2VyOiBTY2hlbWFGb3JtTG9nZ2VyKSB7IH1cblxuICBhc3luYyBnZXRTY2hlbWFEZWZhdWx0QXN5bmMoc2NoZW1hOiBJSnNvblNjaGVtYURlZmluaXRpb24sIG1vZGVsOiBhbnkpIHtcbiAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XG4gICAgICBjYXNlIFwiYXJyYXlcIjpcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldEFycmF5RGVmYXVsdEFzeW5jKG1vZGVsLCBzY2hlbWEuaXRlbXMpO1xuICAgICAgY2FzZSBcIm9iamVjdFwiOlxuICAgICAgICBtb2RlbCA9IGF3YWl0IHRoaXMuZ2V0T2JqZWN0RGVmYXVsdEFzeW5jKG1vZGVsLCAoc2NoZW1hIGFzIElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldFByaW1pdGl2ZURlZmF1bHRBc3luYyhtb2RlbCwgc2NoZW1hKTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG5cbiAgYXN5bmMgZ2V0UHJpbWl0aXZlRGVmYXVsdEFzeW5jKG1vZGVsOiBhbnksIHNjaGVtYTogSUpzb25TY2hlbWFEZWZpbml0aW9uKSB7XG4gICAgbGV0IHZhbHVlOiBhbnk7XG4gICAgaWYgKHNjaGVtYS5pdGVtcy50eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgdmFsdWUgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsIHx8IHNjaGVtYS5pdGVtcy5jb25zdCB8fCBzY2hlbWEuaXRlbXMuZGVmYXVsdCB8fCB2YWx1ZTtcbiAgfVxuXG4gIGFzeW5jIGdldEFycmF5RGVmYXVsdEFzeW5jKG1vZGVsOiBhbnksIHNjaGVtYTogSUpzb25TY2hlbWFBcnJheURlZmluaXRpb24pOiBQcm9taXNlPGFueVtdPiB7XG4gICAgcmV0dXJuIG1vZGVsIHx8IFtdO1xuICB9XG5cbiAgYXN5bmMgZ2V0T2JqZWN0RGVmYXVsdEFzeW5jKG1vZGVsOiBvYmplY3QsIHNjaGVtYTogSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIud2FybihcImdldE9iamVjdE1vZGVsRGVmYXVsdHNcIiwgeyBtb2RlbCwgc2NoZW1hIH0pO1xuICAgIG1vZGVsID0gbW9kZWwgfHwge307XG4gICAgaWYgKHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICBmb3IgKGNvbnN0IHByb3BlcnR5IGluIHNjaGVtYS5wcm9wZXJ0aWVzKSB7XG4gICAgICAgIG1vZGVsW3Byb3BlcnR5XSA9IGF3YWl0IHRoaXMuZ2V0U2NoZW1hRGVmYXVsdEFzeW5jKHNjaGVtYS5wcm9wZXJ0aWVzW3Byb3BlcnR5XSwgbW9kZWxbcHJvcGVydHldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1vZGVsO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
