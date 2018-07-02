"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_logging_1 = require("aurelia-logging");
var State;
(function (State) {
    State["valid"] = "is-valid";
    State["invalid"] = "is-invalid";
})(State || (State = {}));
var BootstrapValidationRenderer = /** @class */ (function () {
    /**
     * BootrapValidationRenderer - Sets validation state/error messages on bootstrap v4 form-groups
     */
    // tslint:disable-next-line:no-empty
    function BootstrapValidationRenderer() {
        this.messageSelector = ".invalid-feedback";
        this.parentSelector = ".form-group";
        this.logger = aurelia_logging_1.getLogger("BootstrapValidationRenderer");
    }
    /**
     * renderer entry point
     * @param instruction list of instructions from validation controller
     */
    BootstrapValidationRenderer.prototype.render = function (instruction) {
        this.logger.info("render", instruction);
        if (!instruction) {
            return;
        }
        for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
            var _b = _a[_i], result = _b.result, elements = _b.elements;
            for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                var element = elements_1[_c];
                if (!result.valid) {
                    this.remove(element, result);
                }
            }
        }
        for (var _d = 0, _e = instruction.render; _d < _e.length; _d++) {
            var _f = _e[_d], result = _f.result, elements = _f.elements;
            for (var _g = 0, elements_2 = elements; _g < elements_2.length; _g++) {
                var element = elements_2[_g];
                if (!result.valid) {
                    this.add(element, result);
                }
            }
        }
    };
    /**
     *
     * @param element the element to remove/add class from
     * @param state the state to set
     */
    BootstrapValidationRenderer.prototype.setClass = function (element, state) {
        var remove = state === State.valid ? State.invalid : State.valid;
        this.removeClass(element, remove);
        this.addClass(element, state);
    };
    /**
     * Adds className to element if it is not already added
     * @param element the element to add class to
     * @param className the class name to add
     */
    BootstrapValidationRenderer.prototype.addClass = function (element, className) {
        if (!element.classList.contains(className)) {
            element.classList.add(className);
        }
    };
    /**
     * Removes className from element if it is present
     * @param element the element to remove class from
     * @param className the class name to remove
     */
    BootstrapValidationRenderer.prototype.removeClass = function (element, className) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        }
    };
    /**
     * finds closest parent element with parentSelector class
     * @param element the element to find parent from
     */
    BootstrapValidationRenderer.prototype.getParentElement = function (element) {
        return Promise.resolve(element.closest(this.parentSelector));
    };
    /**
     * sets element class(state) and error message
     * @param element the input element
     * @param state the state to set it to
     * @param message the error message
     */
    BootstrapValidationRenderer.prototype.setState = function (element, state, message) {
        var _this = this;
        return function (parent) {
            if (parent) {
                parent.querySelector(_this.messageSelector).textContent = message;
                _this.setClass(element, state);
            }
        };
    };
    /**
     * adds invalid state to input element and adds error message
     * @param element the input element to set invalid state to
     * @param result the validation result
     */
    BootstrapValidationRenderer.prototype.add = function (element, result) {
        this.getParentElement(element)
            .then(this.setState(element, State.invalid, result.message));
    };
    /**
     * adds valid state to input element and removes error message
     * @param element the input element to set valid state to
     * @param result the validation result
     */
    BootstrapValidationRenderer.prototype.remove = function (element, result) {
        this.getParentElement(element)
            .then(this.setState(element, State.valid, result.message));
    };
    return BootstrapValidationRenderer;
}());
exports.BootstrapValidationRenderer = BootstrapValidationRenderer;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUFvRDtBQUVwRCxJQUFLLEtBR0o7QUFIRCxXQUFLLEtBQUs7SUFDUiwyQkFBa0IsQ0FBQTtJQUNsQiwrQkFBc0IsQ0FBQTtBQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtBQUVEO0lBS0U7O09BRUc7SUFDSCxvQ0FBb0M7SUFDcEM7UUFQUSxvQkFBZSxHQUFXLG1CQUFtQixDQUFDO1FBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO1FBTzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsMkJBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQ3pELENBQUM7SUFFRDs7O09BR0c7SUFDSCw0Q0FBTSxHQUFOLFVBQU8sV0FBOEI7UUFDbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsS0FBbUMsVUFBb0IsRUFBcEIsS0FBQSxXQUFXLENBQUMsUUFBUSxFQUFwQixjQUFvQixFQUFwQixJQUFvQixFQUFFO1lBQTlDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTtZQUMzQixLQUFzQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtnQkFBM0IsSUFBTSxPQUFPLGlCQUFBO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRjtRQUVELEtBQW1DLFVBQWtCLEVBQWxCLEtBQUEsV0FBVyxDQUFDLE1BQU0sRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtZQUE1QyxJQUFBLFdBQW9CLEVBQWxCLGtCQUFNLEVBQUUsc0JBQVE7WUFDM0IsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7Z0JBQTNCLElBQU0sT0FBTyxpQkFBQTtnQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7b0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2lCQUMzQjthQUNGO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDhDQUFRLEdBQVIsVUFBUyxPQUFnQixFQUFFLEtBQVk7UUFDckMsSUFBTSxNQUFNLEdBQUcsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw4Q0FBUSxHQUFSLFVBQVMsT0FBZ0IsRUFBRSxTQUFnQjtRQUN6QyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDMUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDbEM7SUFDSCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGlEQUFXLEdBQVgsVUFBWSxPQUFnQixFQUFFLFNBQWdCO1FBQzVDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDekMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsc0RBQWdCLEdBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDhDQUFRLEdBQVIsVUFBUyxPQUFnQixFQUFFLEtBQVksRUFBRSxPQUFlO1FBQXhELGlCQU9DO1FBTkMsT0FBTyxVQUFDLE1BQWU7WUFDckIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztnQkFDakUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlDQUFHLEdBQUgsVUFBSSxPQUFnQixFQUFFLE1BQXNCO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7YUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw0Q0FBTSxHQUFOLFVBQU8sT0FBZ0IsRUFBRSxNQUFzQjtRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO2FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDSCxrQ0FBQztBQUFELENBbEhBLEFBa0hDLElBQUE7QUFsSFksa0VBQTJCIiwiZmlsZSI6InJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlckluc3RydWN0aW9uLCBWYWxpZGF0ZVJlc3VsdCwgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyLCBMb2dnZXIgfSBmcm9tIFwiYXVyZWxpYS1sb2dnaW5nXCI7XG5cbmVudW0gU3RhdGUge1xuICB2YWxpZCA9IFwiaXMtdmFsaWRcIixcbiAgaW52YWxpZCA9IFwiaXMtaW52YWxpZFwiXG59XG5cbmV4cG9ydCBjbGFzcyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgaW1wbGVtZW50cyBWYWxpZGF0aW9uUmVuZGVyZXIge1xuICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xuICBwcml2YXRlIG1lc3NhZ2VTZWxlY3Rvcjogc3RyaW5nID0gXCIuaW52YWxpZC1mZWVkYmFja1wiO1xuICBwcml2YXRlIHBhcmVudFNlbGVjdG9yOiBzdHJpbmcgPSBcIi5mb3JtLWdyb3VwXCI7XG5cbiAgLyoqXG4gICAqIEJvb3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgLSBTZXRzIHZhbGlkYXRpb24gc3RhdGUvZXJyb3IgbWVzc2FnZXMgb24gYm9vdHN0cmFwIHY0IGZvcm0tZ3JvdXBzXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5sb2dnZXIgPSBnZXRMb2dnZXIoXCJCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXJcIik7XG4gIH1cblxuICAvKipcbiAgICogcmVuZGVyZXIgZW50cnkgcG9pbnRcbiAgICogQHBhcmFtIGluc3RydWN0aW9uIGxpc3Qgb2YgaW5zdHJ1Y3Rpb25zIGZyb20gdmFsaWRhdGlvbiBjb250cm9sbGVyXG4gICAqL1xuICByZW5kZXIoaW5zdHJ1Y3Rpb246IFJlbmRlckluc3RydWN0aW9uKSB7XG4gICAgdGhpcy5sb2dnZXIuaW5mbyhcInJlbmRlclwiLCBpbnN0cnVjdGlvbik7XG4gICAgaWYgKCFpbnN0cnVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHsgcmVzdWx0LCBlbGVtZW50cyB9IG9mIGluc3RydWN0aW9uLnVucmVuZGVyKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50LCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi5yZW5kZXIpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICBpZiAoIXJlc3VsdC52YWxpZCkge1xuICAgICAgICAgIHRoaXMuYWRkKGVsZW1lbnQsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIHJlbW92ZS9hZGQgY2xhc3MgZnJvbVxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldFxuICAgKi9cbiAgc2V0Q2xhc3MoZWxlbWVudDogRWxlbWVudCwgc3RhdGU6IFN0YXRlKSB7XG4gICAgY29uc3QgcmVtb3ZlID0gc3RhdGUgPT09IFN0YXRlLnZhbGlkID8gU3RhdGUuaW52YWxpZCA6IFN0YXRlLnZhbGlkO1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgcmVtb3ZlKTtcbiAgICB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGNsYXNzTmFtZSB0byBlbGVtZW50IGlmIGl0IGlzIG5vdCBhbHJlYWR5IGFkZGVkXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGFkZCBjbGFzcyB0b1xuICAgKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBjbGFzcyBuYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xuICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgY2xhc3NOYW1lIGZyb20gZWxlbWVudCBpZiBpdCBpcyBwcmVzZW50XG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIHJlbW92ZSBjbGFzcyBmcm9tXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIGNsYXNzIG5hbWUgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBjbGFzc05hbWU6IFN0YXRlKSB7XG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBmaW5kcyBjbG9zZXN0IHBhcmVudCBlbGVtZW50IHdpdGggcGFyZW50U2VsZWN0b3IgY2xhc3NcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gZmluZCBwYXJlbnQgZnJvbVxuICAgKi9cbiAgZ2V0UGFyZW50RWxlbWVudChlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbGVtZW50LmNsb3Nlc3QodGhpcy5wYXJlbnRTZWxlY3RvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHMgZWxlbWVudCBjbGFzcyhzdGF0ZSkgYW5kIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnRcbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXQgaXQgdG9cbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHNldFN0YXRlKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChwYXJlbnQ6IEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5tZXNzYWdlU2VsZWN0b3IpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5zZXRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGRzIGludmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgYWRkcyBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCBpbnZhbGlkIHN0YXRlIHRvXG4gICAqIEBwYXJhbSByZXN1bHQgdGhlIHZhbGlkYXRpb24gcmVzdWx0XG4gICAqL1xuICBhZGQoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xuICAgIHRoaXMuZ2V0UGFyZW50RWxlbWVudChlbGVtZW50KVxuICAgICAgLnRoZW4odGhpcy5zZXRTdGF0ZShlbGVtZW50LCBTdGF0ZS5pbnZhbGlkLCByZXN1bHQubWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZHMgdmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgcmVtb3ZlcyBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCB2YWxpZCBzdGF0ZSB0b1xuICAgKiBAcGFyYW0gcmVzdWx0IHRoZSB2YWxpZGF0aW9uIHJlc3VsdFxuICAgKi9cbiAgcmVtb3ZlKGVsZW1lbnQ6IEVsZW1lbnQsIHJlc3VsdDogVmFsaWRhdGVSZXN1bHQpIHtcbiAgICB0aGlzLmdldFBhcmVudEVsZW1lbnQoZWxlbWVudClcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUudmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
