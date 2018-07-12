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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLElBQUssS0FHSjtBQUhELFdBQUssS0FBSztJQUNSLDJCQUFrQixDQUFBO0lBQ2xCLCtCQUFzQixDQUFBO0FBQ3hCLENBQUMsRUFISSxLQUFLLEtBQUwsS0FBSyxRQUdUO0FBRUQ7SUFJRTs7T0FFRztJQUNILG9DQUFvQztJQUNwQztRQVBRLG9CQUFlLEdBQVcsbUJBQW1CLENBQUM7UUFDOUMsbUJBQWMsR0FBVyxhQUFhLENBQUM7SUFNL0IsQ0FBQztJQUVqQjs7O09BR0c7SUFDSCw0Q0FBTSxHQUFOLFVBQU8sV0FBOEI7UUFDbkMsMkNBQTJDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEIsT0FBTztTQUNSO1FBQ0QsS0FBbUMsVUFBb0IsRUFBcEIsS0FBQSxXQUFXLENBQUMsUUFBUSxFQUFwQixjQUFvQixFQUFwQixJQUFvQixFQUFFO1lBQTlDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTtZQUMzQixLQUFzQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtnQkFBM0IsSUFBTSxPQUFPLGlCQUFBO2dCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDakIsSUFBSTt3QkFDRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDOUI7b0JBQUMsUUFBUSxjQUFjLElBQWhCLEVBQUUsY0FBYyxFQUFFO2lCQUMzQjthQUNGO1NBQ0Y7UUFFRCxLQUFtQyxVQUFrQixFQUFsQixLQUFBLFdBQVcsQ0FBQyxNQUFNLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7WUFBNUMsSUFBQSxXQUFvQixFQUFsQixrQkFBTSxFQUFFLHNCQUFRO1lBQzNCLEtBQXNCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO2dCQUEzQixJQUFNLE9BQU8saUJBQUE7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUNqQixJQUFJO3dCQUNGLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUMzQjtvQkFBQyxRQUFRLGNBQWMsSUFBaEIsRUFBRSxjQUFjLEVBQUU7aUJBQzNCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsOENBQVEsR0FBUixVQUFTLE9BQWdCLEVBQUUsS0FBWTtRQUNyQyxJQUFNLE1BQU0sR0FBRyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDhDQUFRLEdBQVIsVUFBUyxPQUFnQixFQUFFLFNBQWdCO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsaURBQVcsR0FBWCxVQUFZLE9BQWdCLEVBQUUsU0FBZ0I7UUFDNUMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDcEQsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsc0RBQWdCLEdBQWhCLFVBQWlCLE9BQWdCO1FBQy9CLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDhDQUFRLEdBQVIsVUFBUyxPQUFnQixFQUFFLEtBQVksRUFBRSxPQUFlO1FBQXhELGlCQU9DO1FBTkMsT0FBTyxVQUFDLE1BQWU7WUFDckIsSUFBSSxNQUFNLEVBQUU7Z0JBQ1YsTUFBTSxDQUFDLGFBQWEsQ0FBQyxLQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQztnQkFDakUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDL0I7UUFDSCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHlDQUFHLEdBQUgsVUFBSSxPQUFnQixFQUFFLE1BQXNCO1FBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7YUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDakUsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCw0Q0FBTSxHQUFOLFVBQU8sT0FBZ0IsRUFBRSxNQUFzQjtRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO2FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFDSCxrQ0FBQztBQUFELENBbkhBLEFBbUhDLElBQUE7QUFuSFksa0VBQTJCIiwiZmlsZSI6InJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlckluc3RydWN0aW9uLCBWYWxpZGF0ZVJlc3VsdCwgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xyXG5cclxuZW51bSBTdGF0ZSB7XHJcbiAgdmFsaWQgPSBcImlzLXZhbGlkXCIsXHJcbiAgaW52YWxpZCA9IFwiaXMtaW52YWxpZFwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXIgaW1wbGVtZW50cyBWYWxpZGF0aW9uUmVuZGVyZXIge1xyXG4gIHByaXZhdGUgbWVzc2FnZVNlbGVjdG9yOiBzdHJpbmcgPSBcIi5pbnZhbGlkLWZlZWRiYWNrXCI7XHJcbiAgcHJpdmF0ZSBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nID0gXCIuZm9ybS1ncm91cFwiO1xyXG5cclxuICAvKipcclxuICAgKiBCb290cmFwVmFsaWRhdGlvblJlbmRlcmVyIC0gU2V0cyB2YWxpZGF0aW9uIHN0YXRlL2Vycm9yIG1lc3NhZ2VzIG9uIGJvb3RzdHJhcCB2NCBmb3JtLWdyb3Vwc1xyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eVxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbmRlcmVyIGVudHJ5IHBvaW50XHJcbiAgICogQHBhcmFtIGluc3RydWN0aW9uIGxpc3Qgb2YgaW5zdHJ1Y3Rpb25zIGZyb20gdmFsaWRhdGlvbiBjb250cm9sbGVyXHJcbiAgICovXHJcbiAgcmVuZGVyKGluc3RydWN0aW9uOiBSZW5kZXJJbnN0cnVjdGlvbikge1xyXG4gICAgLy8gdGhpcy5sb2dnZXIuaW5mbyhcInJlbmRlclwiLCBpbnN0cnVjdGlvbik7XHJcbiAgICBpZiAoIWluc3RydWN0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24udW5yZW5kZXIpIHtcclxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQsIHJlc3VsdCk7XHJcbiAgICAgICAgICB9IGNhdGNoIHsgLypkbyBub3RoaW5nKi8gfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24ucmVuZGVyKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkKSB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZChlbGVtZW50LCByZXN1bHQpO1xyXG4gICAgICAgICAgfSBjYXRjaCB7IC8qZG8gbm90aGluZyovIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIHJlbW92ZS9hZGQgY2xhc3MgZnJvbVxyXG4gICAqIEBwYXJhbSBzdGF0ZSB0aGUgc3RhdGUgdG8gc2V0XHJcbiAgICovXHJcbiAgc2V0Q2xhc3MoZWxlbWVudDogRWxlbWVudCwgc3RhdGU6IFN0YXRlKSB7XHJcbiAgICBjb25zdCByZW1vdmUgPSBzdGF0ZSA9PT0gU3RhdGUudmFsaWQgPyBTdGF0ZS5pbnZhbGlkIDogU3RhdGUudmFsaWQ7XHJcbiAgICB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIHJlbW92ZSk7XHJcbiAgICB0aGlzLmFkZENsYXNzKGVsZW1lbnQsIHN0YXRlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgY2xhc3NOYW1lIHRvIGVsZW1lbnQgaWYgaXQgaXMgbm90IGFscmVhZHkgYWRkZWRcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBhZGQgY2xhc3MgdG9cclxuICAgKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBjbGFzcyBuYW1lIHRvIGFkZFxyXG4gICAqL1xyXG4gIGFkZENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIGNsYXNzTmFtZTogU3RhdGUpIHtcclxuICAgIGlmICghZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgY2xhc3NOYW1lIGZyb20gZWxlbWVudCBpZiBpdCBpcyBwcmVzZW50XHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gcmVtb3ZlIGNsYXNzIGZyb21cclxuICAgKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBjbGFzcyBuYW1lIHRvIHJlbW92ZVxyXG4gICAqL1xyXG4gIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIGNsYXNzTmFtZTogU3RhdGUpIHtcclxuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBmaW5kcyBjbG9zZXN0IHBhcmVudCBlbGVtZW50IHdpdGggcGFyZW50U2VsZWN0b3IgY2xhc3NcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBmaW5kIHBhcmVudCBmcm9tXHJcbiAgICovXHJcbiAgZ2V0UGFyZW50RWxlbWVudChlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsZW1lbnQuY2xvc2VzdCh0aGlzLnBhcmVudFNlbGVjdG9yKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXRzIGVsZW1lbnQgY2xhc3Moc3RhdGUpIGFuZCBlcnJvciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnRcclxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldCBpdCB0b1xyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoZWxlbWVudDogRWxlbWVudCwgc3RhdGU6IFN0YXRlLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAocGFyZW50OiBFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3Rvcih0aGlzLm1lc3NhZ2VTZWxlY3RvcikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoZWxlbWVudCwgc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkcyBpbnZhbGlkIHN0YXRlIHRvIGlucHV0IGVsZW1lbnQgYW5kIGFkZHMgZXJyb3IgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCBpbnZhbGlkIHN0YXRlIHRvXHJcbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcclxuICAgKi9cclxuICBhZGQoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xyXG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXHJcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUuaW52YWxpZCwgcmVzdWx0Lm1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZHMgdmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgcmVtb3ZlcyBlcnJvciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnQgdG8gc2V0IHZhbGlkIHN0YXRlIHRvXHJcbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcclxuICAgKi9cclxuICByZW1vdmUoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xyXG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXHJcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUudmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
