var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { singleton } from "aurelia-framework";
let FormInstances = class FormInstances {
    constructor() {
        this.instances = {};
    }
    set(key, instance) {
        this.instances[key] = instance;
    }
    get(key) {
        return this.instances[key];
    }
};
FormInstances = __decorate([
    singleton()
], FormInstances);
export { FormInstances };

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQU85QyxJQUFhLGFBQWEsR0FBMUI7SUFEQTtRQUVVLGNBQVMsR0FFYixFQUFFLENBQUM7SUFTVCxDQUFDO0lBUEMsR0FBRyxDQUFDLEdBQVcsRUFBRSxRQUF1QjtRQUN0QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztJQUNqQyxDQUFDO0lBRUQsR0FBRyxDQUFDLEdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7QUFaWSxhQUFhO0lBRHpCLFNBQVMsRUFBRTtHQUNDLGFBQWEsQ0FZekI7U0FaWSxhQUFhIiwiZmlsZSI6InNlcnZpY2VzL2Zvcm0taW5zdGFuY2VzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2luZ2xldG9uIH0gZnJvbSBcImF1cmVsaWEtZnJhbWV3b3JrXCI7XG5pbXBvcnQgeyBJRm9ybUluc3RhbmNlIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvZm9ybS1pbnN0YW5jZVwiO1xuaW1wb3J0IHsgSUpzb25TY2hlbWFEZWZpbml0aW9uIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvanNvbi1zY2hlbWEtZGVmaW5pdGlvblwiO1xuaW1wb3J0IHsgSUZvcm1PdmVycmlkZSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2Zvcm0tb3ZlcnJpZGVcIjtcbmltcG9ydCB7IEZvcm1Db250cm9sbGVyIH0gZnJvbSBcIi4uL2Zvcm0vZm9ybS1jb250cm9sbGVyXCI7XG5cbkBzaW5nbGV0b24oKVxuZXhwb3J0IGNsYXNzIEZvcm1JbnN0YW5jZXMge1xuICBwcml2YXRlIGluc3RhbmNlczoge1xuICAgIFtrZXk6IHN0cmluZ106IElGb3JtSW5zdGFuY2VcbiAgfSA9IHt9O1xuXG4gIHNldChrZXk6IHN0cmluZywgaW5zdGFuY2U6IElGb3JtSW5zdGFuY2UpIHtcbiAgICB0aGlzLmluc3RhbmNlc1trZXldID0gaW5zdGFuY2U7XG4gIH1cblxuICBnZXQoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNba2V5XTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
