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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxJQUFLLEtBR0o7SUFIRCxXQUFLLEtBQUs7UUFDUiwyQkFBa0IsQ0FBQTtRQUNsQiwrQkFBc0IsQ0FBQTtJQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtJQUVEO1FBSUU7O1dBRUc7UUFDSCxvQ0FBb0M7UUFDcEM7WUFQUSxvQkFBZSxHQUFXLG1CQUFtQixDQUFDO1lBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO1FBTS9CLENBQUM7UUFFakI7OztXQUdHO1FBQ0gsNENBQU0sR0FBTixVQUFPLFdBQThCO1lBQ25DLDJDQUEyQztZQUMzQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUNoQixPQUFPO2FBQ1I7WUFDRCxLQUFtQyxVQUFvQixFQUFwQixLQUFBLFdBQVcsQ0FBQyxRQUFRLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CLEVBQUU7Z0JBQTlDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTtnQkFDM0IsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7b0JBQTNCLElBQU0sT0FBTyxpQkFBQTtvQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0JBQ2pCLElBQUk7NEJBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7eUJBQzlCO3dCQUFDLFFBQVEsY0FBYyxJQUFoQixFQUFFLGNBQWMsRUFBRTtxQkFDM0I7aUJBQ0Y7YUFDRjtZQUVELEtBQW1DLFVBQWtCLEVBQWxCLEtBQUEsV0FBVyxDQUFDLE1BQU0sRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtnQkFBNUMsSUFBQSxXQUFvQixFQUFsQixrQkFBTSxFQUFFLHNCQUFRO2dCQUMzQixLQUFzQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtvQkFBM0IsSUFBTSxPQUFPLGlCQUFBO29CQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTt3QkFDakIsSUFBSTs0QkFDRixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzt5QkFDM0I7d0JBQUMsUUFBUSxjQUFjLElBQWhCLEVBQUUsY0FBYyxFQUFFO3FCQUMzQjtpQkFDRjthQUNGO1FBQ0gsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCw4Q0FBUSxHQUFSLFVBQVMsT0FBZ0IsRUFBRSxLQUFZO1lBQ3JDLElBQU0sTUFBTSxHQUFHLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsOENBQVEsR0FBUixVQUFTLE9BQWdCLEVBQUUsU0FBZ0I7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztRQUNILENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsaURBQVcsR0FBWCxVQUFZLE9BQWdCLEVBQUUsU0FBZ0I7WUFDNUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3BELE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3JDO1FBQ0gsQ0FBQztRQUVEOzs7V0FHRztRQUNILHNEQUFnQixHQUFoQixVQUFpQixPQUFnQjtZQUMvQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBRUQ7Ozs7O1dBS0c7UUFDSCw4Q0FBUSxHQUFSLFVBQVMsT0FBZ0IsRUFBRSxLQUFZLEVBQUUsT0FBZTtZQUF4RCxpQkFPQztZQU5DLE9BQU8sVUFBQyxNQUFlO2dCQUNyQixJQUFJLE1BQU0sRUFBRTtvQkFDVixNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDO29CQUNqRSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDL0I7WUFDSCxDQUFDLENBQUM7UUFDSixDQUFDO1FBRUQ7Ozs7V0FJRztRQUNILHlDQUFHLEdBQUgsVUFBSSxPQUFnQixFQUFFLE1BQXNCO1lBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7aUJBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsNENBQU0sR0FBTixVQUFPLE9BQWdCLEVBQUUsTUFBc0I7WUFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztpQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUNILGtDQUFDO0lBQUQsQ0FuSEEsQUFtSEMsSUFBQTtJQW5IWSxrRUFBMkIiLCJmaWxlIjoicmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVySW5zdHJ1Y3Rpb24sIFZhbGlkYXRlUmVzdWx0LCBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcblxyXG5lbnVtIFN0YXRlIHtcclxuICB2YWxpZCA9IFwiaXMtdmFsaWRcIixcclxuICBpbnZhbGlkID0gXCJpcy1pbnZhbGlkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciBpbXBsZW1lbnRzIFZhbGlkYXRpb25SZW5kZXJlciB7XHJcbiAgcHJpdmF0ZSBtZXNzYWdlU2VsZWN0b3I6IHN0cmluZyA9IFwiLmludmFsaWQtZmVlZGJhY2tcIjtcclxuICBwcml2YXRlIHBhcmVudFNlbGVjdG9yOiBzdHJpbmcgPSBcIi5mb3JtLWdyb3VwXCI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJvb3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgLSBTZXRzIHZhbGlkYXRpb24gc3RhdGUvZXJyb3IgbWVzc2FnZXMgb24gYm9vdHN0cmFwIHY0IGZvcm0tZ3JvdXBzXHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVuZGVyZXIgZW50cnkgcG9pbnRcclxuICAgKiBAcGFyYW0gaW5zdHJ1Y3Rpb24gbGlzdCBvZiBpbnN0cnVjdGlvbnMgZnJvbSB2YWxpZGF0aW9uIGNvbnRyb2xsZXJcclxuICAgKi9cclxuICByZW5kZXIoaW5zdHJ1Y3Rpb246IFJlbmRlckluc3RydWN0aW9uKSB7XHJcbiAgICAvLyB0aGlzLmxvZ2dlci5pbmZvKFwicmVuZGVyXCIsIGluc3RydWN0aW9uKTtcclxuICAgIGlmICghaW5zdHJ1Y3Rpb24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi51bnJlbmRlcikge1xyXG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcclxuICAgICAgICBpZiAoIXJlc3VsdC52YWxpZCkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCwgcmVzdWx0KTtcclxuICAgICAgICAgIH0gY2F0Y2ggeyAvKmRvIG5vdGhpbmcqLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi5yZW5kZXIpIHtcclxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKGVsZW1lbnQsIHJlc3VsdCk7XHJcbiAgICAgICAgICB9IGNhdGNoIHsgLypkbyBub3RoaW5nKi8gfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gcmVtb3ZlL2FkZCBjbGFzcyBmcm9tXHJcbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXRcclxuICAgKi9cclxuICBzZXRDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBzdGF0ZTogU3RhdGUpIHtcclxuICAgIGNvbnN0IHJlbW92ZSA9IHN0YXRlID09PSBTdGF0ZS52YWxpZCA/IFN0YXRlLmludmFsaWQgOiBTdGF0ZS52YWxpZDtcclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgcmVtb3ZlKTtcclxuICAgIHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBjbGFzc05hbWUgdG8gZWxlbWVudCBpZiBpdCBpcyBub3QgYWxyZWFkeSBhZGRlZFxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGFkZCBjbGFzcyB0b1xyXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIGNsYXNzIG5hbWUgdG8gYWRkXHJcbiAgICovXHJcbiAgYWRkQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xyXG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBjbGFzc05hbWUgZnJvbSBlbGVtZW50IGlmIGl0IGlzIHByZXNlbnRcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUgY2xhc3MgZnJvbVxyXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIGNsYXNzIG5hbWUgdG8gcmVtb3ZlXHJcbiAgICovXHJcbiAgcmVtb3ZlQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xyXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZpbmRzIGNsb3Nlc3QgcGFyZW50IGVsZW1lbnQgd2l0aCBwYXJlbnRTZWxlY3RvciBjbGFzc1xyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGZpbmQgcGFyZW50IGZyb21cclxuICAgKi9cclxuICBnZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWxlbWVudC5jbG9zZXN0KHRoaXMucGFyZW50U2VsZWN0b3IpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNldHMgZWxlbWVudCBjbGFzcyhzdGF0ZSkgYW5kIGVycm9yIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaW5wdXQgZWxlbWVudFxyXG4gICAqIEBwYXJhbSBzdGF0ZSB0aGUgc3RhdGUgdG8gc2V0IGl0IHRvXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIGVycm9yIG1lc3NhZ2VcclxuICAgKi9cclxuICBzZXRTdGF0ZShlbGVtZW50OiBFbGVtZW50LCBzdGF0ZTogU3RhdGUsIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIChwYXJlbnQ6IEVsZW1lbnQpID0+IHtcclxuICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMubWVzc2FnZVNlbGVjdG9yKS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcbiAgICAgICAgdGhpcy5zZXRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGRzIGludmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgYWRkcyBlcnJvciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnQgdG8gc2V0IGludmFsaWQgc3RhdGUgdG9cclxuICAgKiBAcGFyYW0gcmVzdWx0IHRoZSB2YWxpZGF0aW9uIHJlc3VsdFxyXG4gICAqL1xyXG4gIGFkZChlbGVtZW50OiBFbGVtZW50LCByZXN1bHQ6IFZhbGlkYXRlUmVzdWx0KSB7XHJcbiAgICB0aGlzLmdldFBhcmVudEVsZW1lbnQoZWxlbWVudClcclxuICAgICAgLnRoZW4odGhpcy5zZXRTdGF0ZShlbGVtZW50LCBTdGF0ZS5pbnZhbGlkLCByZXN1bHQubWVzc2FnZSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkcyB2YWxpZCBzdGF0ZSB0byBpbnB1dCBlbGVtZW50IGFuZCByZW1vdmVzIGVycm9yIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaW5wdXQgZWxlbWVudCB0byBzZXQgdmFsaWQgc3RhdGUgdG9cclxuICAgKiBAcGFyYW0gcmVzdWx0IHRoZSB2YWxpZGF0aW9uIHJlc3VsdFxyXG4gICAqL1xyXG4gIHJlbW92ZShlbGVtZW50OiBFbGVtZW50LCByZXN1bHQ6IFZhbGlkYXRlUmVzdWx0KSB7XHJcbiAgICB0aGlzLmdldFBhcmVudEVsZW1lbnQoZWxlbWVudClcclxuICAgICAgLnRoZW4odGhpcy5zZXRTdGF0ZShlbGVtZW50LCBTdGF0ZS52YWxpZCwgcmVzdWx0Lm1lc3NhZ2UpKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
