define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
        }
        /**
         * renderer entry point
         * @param instruction list of instructions from validation controller
         */
        BootstrapValidationRenderer.prototype.render = function (instruction) {
            // this.logger.info("render", instruction);
            if (!instruction) {
                return;
            }
            for (var _i = 0, _a = instruction.unrender; _i < _a.length; _i++) {
                var _b = _a[_i], result = _b.result, elements = _b.elements;
                for (var _c = 0, elements_1 = elements; _c < elements_1.length; _c++) {
                    var element = elements_1[_c];
                    if (!result.valid) {
                        try {
                            this.remove(element, result);
                        }
                        catch ( /*do nothing*/_d) { /*do nothing*/ }
                    }
                }
            }
            for (var _e = 0, _f = instruction.render; _e < _f.length; _e++) {
                var _g = _f[_e], result = _g.result, elements = _g.elements;
                for (var _h = 0, elements_2 = elements; _h < elements_2.length; _h++) {
                    var element = elements_2[_h];
                    if (!result.valid) {
                        try {
                            this.add(element, result);
                        }
                        catch ( /*do nothing*/_j) { /*do nothing*/ }
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
            if (element && element.classList.contains(className)) {
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxJQUFLLEtBR0o7SUFIRCxXQUFLLEtBQUs7UUFDUiwyQkFBa0IsQ0FBQTtRQUNsQiwrQkFBc0IsQ0FBQTtJQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtJQUVEO1FBSUU7O1dBRUc7UUFDSCxvQ0FBb0M7UUFDcEM7WUFQUSxvQkFBZSxHQUFXLG1CQUFtQixDQUFDO1lBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO1FBTS9CLENBQUM7UUFFakI7OztXQUdHO1FBQ0gsNENBQU0sR0FBTixVQUFPLFdBQThCO1lBQ25DLDJDQUEyQztZQUMzQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixPQUFPO2FBQ1I7WUFDRCxLQUFtQyxVQUFvQixFQUFwQixLQUFBLFdBQVcsQ0FBQyxRQUFRLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CLEVBQUU7Z0JBQTlDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTtnQkFDM0IsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7b0JBQTNCLElBQU0sT0FBTyxpQkFBQTtvQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0JBQ2pCLElBQUk7NEJBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7eUJBQzlCO3dCQUFDLFFBQVEsY0FBYyxJQUFoQixFQUFFLGNBQWMsRUFBRTtxQkFDM0I7aUJBQ0Y7YUFDRjtZQUVELEtBQW1DLFVBQWtCLEVBQWxCLEtBQUEsV0FBVyxDQUFDLE1BQU0sRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtnQkFBNUMsSUFBQSxXQUFvQixFQUFsQixrQkFBTSxFQUFFLHNCQUFRO2dCQUMzQixLQUFzQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtvQkFBM0IsSUFBTSxPQUFPLGlCQUFBO29CQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTt3QkFDakIsSUFBSTs0QkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzt5QkFDM0I7d0JBQUMsUUFBUSxjQUFjLElBQWhCLEVBQUUsY0FBYyxFQUFFO3FCQUMzQjtpQkFDRjthQUNGO1FBQ0gsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCw4Q0FBUSxHQUFSLFVBQVMsT0FBZ0IsRUFBRSxLQUFZO1lBQ3JDLElBQU0sTUFBTSxHQUFHLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsOENBQVEsR0FBUixVQUFTLE9BQWdCLEVBQUUsU0FBZ0I7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztRQUNILENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsaURBQVcsR0FBWCxVQUFZLE9BQWdCLEVBQUUsU0FBZ0I7WUFDNUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQztRQUVEOzs7V0FHRztRQUNILHNEQUFnQixHQUFoQixVQUFpQixPQUFnQjtZQUMvQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCw4Q0FBUSxHQUFSLFVBQVMsT0FBZ0IsRUFBRSxLQUFZLEVBQUUsT0FBZTtZQUF4RCxpQkFPQztZQU5DLE9BQU8sVUFBQyxNQUFlO2dCQUNyQixJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO29CQUNqRSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDL0I7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILHlDQUFHLEdBQUgsVUFBSSxPQUFnQixFQUFFLE1BQXNCO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7aUJBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsNENBQU0sR0FBTixVQUFPLE9BQWdCLEVBQUUsTUFBc0I7WUFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztpQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNILGtDQUFDO0lBQUQsQ0FuSEEsQUFtSEMsSUFBQTtJQW5IWSxrRUFBMkIiLCJmaWxlIjoicmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVySW5zdHJ1Y3Rpb24sIFZhbGlkYXRlUmVzdWx0LCBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XG5cbmVudW0gU3RhdGUge1xuICB2YWxpZCA9IFwiaXMtdmFsaWRcIixcbiAgaW52YWxpZCA9IFwiaXMtaW52YWxpZFwiXG59XG5cbmV4cG9ydCBjbGFzcyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgaW1wbGVtZW50cyBWYWxpZGF0aW9uUmVuZGVyZXIge1xuICBwcml2YXRlIG1lc3NhZ2VTZWxlY3Rvcjogc3RyaW5nID0gXCIuaW52YWxpZC1mZWVkYmFja1wiO1xuICBwcml2YXRlIHBhcmVudFNlbGVjdG9yOiBzdHJpbmcgPSBcIi5mb3JtLWdyb3VwXCI7XG5cbiAgLyoqXG4gICAqIEJvb3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgLSBTZXRzIHZhbGlkYXRpb24gc3RhdGUvZXJyb3IgbWVzc2FnZXMgb24gYm9vdHN0cmFwIHY0IGZvcm0tZ3JvdXBzXG4gICAqL1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogcmVuZGVyZXIgZW50cnkgcG9pbnRcbiAgICogQHBhcmFtIGluc3RydWN0aW9uIGxpc3Qgb2YgaW5zdHJ1Y3Rpb25zIGZyb20gdmFsaWRhdGlvbiBjb250cm9sbGVyXG4gICAqL1xuICByZW5kZXIoaW5zdHJ1Y3Rpb246IFJlbmRlckluc3RydWN0aW9uKSB7XG4gICAgLy8gdGhpcy5sb2dnZXIuaW5mbyhcInJlbmRlclwiLCBpbnN0cnVjdGlvbik7XG4gICAgaWYgKCFpbnN0cnVjdGlvbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHsgcmVzdWx0LCBlbGVtZW50cyB9IG9mIGluc3RydWN0aW9uLnVucmVuZGVyKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCwgcmVzdWx0KTtcbiAgICAgICAgICB9IGNhdGNoIHsgLypkbyBub3RoaW5nKi8gfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi5yZW5kZXIpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICBpZiAoIXJlc3VsdC52YWxpZCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmFkZChlbGVtZW50LCByZXN1bHQpO1xuICAgICAgICAgIH0gY2F0Y2ggeyAvKmRvIG5vdGhpbmcqLyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIHJlbW92ZS9hZGQgY2xhc3MgZnJvbVxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldFxuICAgKi9cbiAgc2V0Q2xhc3MoZWxlbWVudDogRWxlbWVudCwgc3RhdGU6IFN0YXRlKSB7XG4gICAgY29uc3QgcmVtb3ZlID0gc3RhdGUgPT09IFN0YXRlLnZhbGlkID8gU3RhdGUuaW52YWxpZCA6IFN0YXRlLnZhbGlkO1xuICAgIHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgcmVtb3ZlKTtcbiAgICB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIHN0YXRlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGNsYXNzTmFtZSB0byBlbGVtZW50IGlmIGl0IGlzIG5vdCBhbHJlYWR5IGFkZGVkXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGFkZCBjbGFzcyB0b1xuICAgKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBjbGFzcyBuYW1lIHRvIGFkZFxuICAgKi9cbiAgYWRkQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xuICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgY2xhc3NOYW1lIGZyb20gZWxlbWVudCBpZiBpdCBpcyBwcmVzZW50XG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIHJlbW92ZSBjbGFzcyBmcm9tXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIGNsYXNzIG5hbWUgdG8gcmVtb3ZlXG4gICAqL1xuICByZW1vdmVDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBjbGFzc05hbWU6IFN0YXRlKSB7XG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGZpbmRzIGNsb3Nlc3QgcGFyZW50IGVsZW1lbnQgd2l0aCBwYXJlbnRTZWxlY3RvciBjbGFzc1xuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBmaW5kIHBhcmVudCBmcm9tXG4gICAqL1xuICBnZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsZW1lbnQuY2xvc2VzdCh0aGlzLnBhcmVudFNlbGVjdG9yKSk7XG4gIH1cblxuICAvKipcbiAgICogc2V0cyBlbGVtZW50IGNsYXNzKHN0YXRlKSBhbmQgZXJyb3IgbWVzc2FnZVxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaW5wdXQgZWxlbWVudFxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldCBpdCB0b1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgc2V0U3RhdGUoZWxlbWVudDogRWxlbWVudCwgc3RhdGU6IFN0YXRlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKHBhcmVudDogRWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3Rvcih0aGlzLm1lc3NhZ2VTZWxlY3RvcikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnNldENsYXNzKGVsZW1lbnQsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZHMgaW52YWxpZCBzdGF0ZSB0byBpbnB1dCBlbGVtZW50IGFuZCBhZGRzIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnQgdG8gc2V0IGludmFsaWQgc3RhdGUgdG9cbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcbiAgICovXG4gIGFkZChlbGVtZW50OiBFbGVtZW50LCByZXN1bHQ6IFZhbGlkYXRlUmVzdWx0KSB7XG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXG4gICAgICAudGhlbih0aGlzLnNldFN0YXRlKGVsZW1lbnQsIFN0YXRlLmludmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogYWRkcyB2YWxpZCBzdGF0ZSB0byBpbnB1dCBlbGVtZW50IGFuZCByZW1vdmVzIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnQgdG8gc2V0IHZhbGlkIHN0YXRlIHRvXG4gICAqIEBwYXJhbSByZXN1bHQgdGhlIHZhbGlkYXRpb24gcmVzdWx0XG4gICAqL1xuICByZW1vdmUoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xuICAgIHRoaXMuZ2V0UGFyZW50RWxlbWVudChlbGVtZW50KVxuICAgICAgLnRoZW4odGhpcy5zZXRTdGF0ZShlbGVtZW50LCBTdGF0ZS52YWxpZCwgcmVzdWx0Lm1lc3NhZ2UpKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
