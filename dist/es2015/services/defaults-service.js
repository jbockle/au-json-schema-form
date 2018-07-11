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
            let value;
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFRdkQsSUFBYSxlQUFlLEdBQTVCO0lBRUUsWUFBb0IsTUFBd0I7UUFBeEIsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7SUFBSSxDQUFDO0lBRTNDLHFCQUFxQixDQUFDLE1BQTZCLEVBQUUsS0FBVTs7WUFDbkUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQTtZQUM1RCxRQUFRLE1BQU0sQ0FBQyxJQUFJLEVBQUU7Z0JBQ25CLEtBQUssT0FBTztvQkFDVixLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0QsS0FBSyxRQUFRO29CQUNYLEtBQUssR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUcsTUFBc0MsQ0FBQyxDQUFDO2dCQUMzRjtvQkFDRSxLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsd0JBQXdCLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQzlEO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7SUFFSyx3QkFBd0IsQ0FBQyxLQUFVLEVBQUUsTUFBNkI7O1lBQ3RFLElBQUksS0FBVSxDQUFDO1lBQ2YsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLFNBQVMsRUFBRTtnQkFDN0IsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUNmO1lBQ0QsT0FBTyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsT0FBTyxJQUFJLEtBQUssQ0FBQztRQUMxRCxDQUFDO0tBQUE7SUFFSyxvQkFBb0IsQ0FBQyxLQUFVLEVBQUUsTUFBa0M7O1lBQ3ZFLE9BQU8sS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNyQixDQUFDO0tBQUE7SUFFSyxxQkFBcUIsQ0FBQyxLQUFhLEVBQUUsTUFBbUM7O1lBQzVFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7WUFDOUQsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7WUFDcEIsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUNyQixLQUFLLE1BQU0sUUFBUSxJQUFJLE1BQU0sQ0FBQyxVQUFVLEVBQUU7b0JBQ3hDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxNQUFNLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNsRzthQUNGO1lBQ0QsT0FBTyxLQUFLLENBQUM7UUFDZixDQUFDO0tBQUE7Q0FDRixDQUFBO0FBdkNZLGVBQWU7SUFEM0IsTUFBTSxDQUFDLGdCQUFnQixDQUFDO3FDQUdLLGdCQUFnQjtHQUZqQyxlQUFlLENBdUMzQjtTQXZDWSxlQUFlIiwiZmlsZSI6InNlcnZpY2VzL2RlZmF1bHRzLXNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpbmplY3QgfSBmcm9tIFwiYXVyZWxpYS1mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNjaGVtYUZvcm1Mb2dnZXIgfSBmcm9tIFwiLi4vcmVzb3VyY2VzL2xvZ2dlclwiO1xuaW1wb3J0IHtcbiAgSUpzb25TY2hlbWFPYmplY3REZWZpbml0aW9uLFxuICBJSnNvblNjaGVtYUFycmF5RGVmaW5pdGlvbixcbiAgSUpzb25TY2hlbWFEZWZpbml0aW9uXG59IGZyb20gXCIuLi9pbnRlcmZhY2VzL2pzb24tc2NoZW1hLWRlZmluaXRpb25cIjtcblxuQGluamVjdChTY2hlbWFGb3JtTG9nZ2VyKVxuZXhwb3J0IGNsYXNzIERlZmF1bHRzU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsb2dnZXI6IFNjaGVtYUZvcm1Mb2dnZXIpIHsgfVxuXG4gIGFzeW5jIGdldFNjaGVtYURlZmF1bHRBc3luYyhzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbiwgbW9kZWw6IGFueSkge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJnZXRTY2hlbWFEZWZhdWx0QXN5bmNcIiwgeyBzY2hlbWEsIG1vZGVsIH0pXG4gICAgc3dpdGNoIChzY2hlbWEudHlwZSkge1xuICAgICAgY2FzZSBcImFycmF5XCI6XG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRBcnJheURlZmF1bHRBc3luYyhtb2RlbCwgc2NoZW1hLml0ZW1zKTtcbiAgICAgIGNhc2UgXCJvYmplY3RcIjpcbiAgICAgICAgbW9kZWwgPSBhd2FpdCB0aGlzLmdldE9iamVjdERlZmF1bHRBc3luYyhtb2RlbCwgKHNjaGVtYSBhcyBJSnNvblNjaGVtYU9iamVjdERlZmluaXRpb24pKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIG1vZGVsID0gYXdhaXQgdGhpcy5nZXRQcmltaXRpdmVEZWZhdWx0QXN5bmMobW9kZWwsIHNjaGVtYSk7XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxuXG4gIGFzeW5jIGdldFByaW1pdGl2ZURlZmF1bHRBc3luYyhtb2RlbDogYW55LCBzY2hlbWE6IElKc29uU2NoZW1hRGVmaW5pdGlvbikge1xuICAgIGxldCB2YWx1ZTogYW55O1xuICAgIGlmIChzY2hlbWEudHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgIHZhbHVlID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBtb2RlbCB8fCBzY2hlbWEuY29uc3QgfHwgc2NoZW1hLmRlZmF1bHQgfHwgdmFsdWU7XG4gIH1cblxuICBhc3luYyBnZXRBcnJheURlZmF1bHRBc3luYyhtb2RlbDogYW55LCBzY2hlbWE6IElKc29uU2NoZW1hQXJyYXlEZWZpbml0aW9uKTogUHJvbWlzZTxhbnlbXT4ge1xuICAgIHJldHVybiBtb2RlbCB8fCBbXTtcbiAgfVxuXG4gIGFzeW5jIGdldE9iamVjdERlZmF1bHRBc3luYyhtb2RlbDogb2JqZWN0LCBzY2hlbWE6IElKc29uU2NoZW1hT2JqZWN0RGVmaW5pdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLndhcm4oXCJnZXRPYmplY3RNb2RlbERlZmF1bHRzXCIsIHsgbW9kZWwsIHNjaGVtYSB9KTtcbiAgICBtb2RlbCA9IG1vZGVsIHx8IHt9O1xuICAgIGlmIChzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgZm9yIChjb25zdCBwcm9wZXJ0eSBpbiBzY2hlbWEucHJvcGVydGllcykge1xuICAgICAgICBtb2RlbFtwcm9wZXJ0eV0gPSBhd2FpdCB0aGlzLmdldFNjaGVtYURlZmF1bHRBc3luYyhzY2hlbWEucHJvcGVydGllc1twcm9wZXJ0eV0sIG1vZGVsW3Byb3BlcnR5XSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBtb2RlbDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
