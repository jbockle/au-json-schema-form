define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function fromCamelCase(text) {
        return text
            .replace(/([A-Z])/g, " $1")
            .replace(/^./, function (str) { return str.toUpperCase(); });
    }
    exports.fromCamelCase = fromCamelCase;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zdHJpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBQUEsdUJBQThCLElBQVk7UUFDeEMsT0FBTyxJQUFJO2FBQ1IsT0FBTyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUM7YUFDMUIsT0FBTyxDQUFDLElBQUksRUFBRSxVQUFDLEdBQUcsSUFBSyxPQUFBLEdBQUcsQ0FBQyxXQUFXLEVBQUUsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFKRCxzQ0FJQyIsImZpbGUiOiJyZXNvdXJjZXMvc3RyaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGZyb21DYW1lbENhc2UodGV4dDogc3RyaW5nKSB7XG4gIHJldHVybiB0ZXh0XG4gICAgLnJlcGxhY2UoLyhbQS1aXSkvZywgXCIgJDFcIilcbiAgICAucmVwbGFjZSgvXi4vLCAoc3RyKSA9PiBzdHIudG9VcHBlckNhc2UoKSk7XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
