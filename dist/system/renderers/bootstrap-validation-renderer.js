System.register([], function (exports_1, context_1) {
    "use strict";
    var State, BootstrapValidationRenderer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            (function (State) {
                State["valid"] = "is-valid";
                State["invalid"] = "is-invalid";
            })(State || (State = {}));
            BootstrapValidationRenderer = /** @class */ (function () {
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
            exports_1("BootstrapValidationRenderer", BootstrapValidationRenderer);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBRUEsV0FBSyxLQUFLO2dCQUNSLDJCQUFrQixDQUFBO2dCQUNsQiwrQkFBc0IsQ0FBQTtZQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtZQUVEO2dCQUlFOzttQkFFRztnQkFDSCxvQ0FBb0M7Z0JBQ3BDO29CQVBRLG9CQUFlLEdBQVcsbUJBQW1CLENBQUM7b0JBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO2dCQU0vQixDQUFDO2dCQUVqQjs7O21CQUdHO2dCQUNILDRDQUFNLEdBQU4sVUFBTyxXQUE4QjtvQkFDbkMsMkNBQTJDO29CQUMzQyxJQUFJLENBQUMsV0FBVyxFQUFFO3dCQUNoQixPQUFPO3FCQUNSO29CQUNELEtBQW1DLFVBQW9CLEVBQXBCLEtBQUEsV0FBVyxDQUFDLFFBQVEsRUFBcEIsY0FBb0IsRUFBcEIsSUFBb0IsRUFBRTt3QkFBOUMsSUFBQSxXQUFvQixFQUFsQixrQkFBTSxFQUFFLHNCQUFRO3dCQUMzQixLQUFzQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTs0QkFBM0IsSUFBTSxPQUFPLGlCQUFBOzRCQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtnQ0FDakIsSUFBSTtvQ0FDRixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztpQ0FDOUI7Z0NBQUMsUUFBUSxjQUFjLElBQWhCLEVBQUUsY0FBYyxFQUFFOzZCQUMzQjt5QkFDRjtxQkFDRjtvQkFFRCxLQUFtQyxVQUFrQixFQUFsQixLQUFBLFdBQVcsQ0FBQyxNQUFNLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7d0JBQTVDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTt3QkFDM0IsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIs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ZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlckluc3RydWN0aW9uLCBWYWxpZGF0ZVJlc3VsdCwgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuXG5lbnVtIFN0YXRlIHtcbiAgdmFsaWQgPSBcImlzLXZhbGlkXCIsXG4gIGludmFsaWQgPSBcImlzLWludmFsaWRcIlxufVxuXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIGltcGxlbWVudHMgVmFsaWRhdGlvblJlbmRlcmVyIHtcbiAgcHJpdmF0ZSBtZXNzYWdlU2VsZWN0b3I6IHN0cmluZyA9IFwiLmludmFsaWQtZmVlZGJhY2tcIjtcbiAgcHJpdmF0ZSBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nID0gXCIuZm9ybS1ncm91cFwiO1xuXG4gIC8qKlxuICAgKiBCb290cmFwVmFsaWRhdGlvblJlbmRlcmVyIC0gU2V0cyB2YWxpZGF0aW9uIHN0YXRlL2Vycm9yIG1lc3NhZ2VzIG9uIGJvb3RzdHJhcCB2NCBmb3JtLWdyb3Vwc1xuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgLyoqXG4gICAqIHJlbmRlcmVyIGVudHJ5IHBvaW50XG4gICAqIEBwYXJhbSBpbnN0cnVjdGlvbiBsaXN0IG9mIGluc3RydWN0aW9ucyBmcm9tIHZhbGlkYXRpb24gY29udHJvbGxlclxuICAgKi9cbiAgcmVuZGVyKGluc3RydWN0aW9uOiBSZW5kZXJJbnN0cnVjdGlvbikge1xuICAgIC8vIHRoaXMubG9nZ2VyLmluZm8oXCJyZW5kZXJcIiwgaW5zdHJ1Y3Rpb24pO1xuICAgIGlmICghaW5zdHJ1Y3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi51bnJlbmRlcikge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkKSB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQsIHJlc3VsdCk7XG4gICAgICAgICAgfSBjYXRjaCB7IC8qZG8gbm90aGluZyovIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24ucmVuZGVyKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgdGhpcy5hZGQoZWxlbWVudCwgcmVzdWx0KTtcbiAgICAgICAgICB9IGNhdGNoIHsgLypkbyBub3RoaW5nKi8gfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUvYWRkIGNsYXNzIGZyb21cbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXRcbiAgICovXG4gIHNldENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSkge1xuICAgIGNvbnN0IHJlbW92ZSA9IHN0YXRlID09PSBTdGF0ZS52YWxpZCA/IFN0YXRlLmludmFsaWQgOiBTdGF0ZS52YWxpZDtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIHJlbW92ZSk7XG4gICAgdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjbGFzc05hbWUgdG8gZWxlbWVudCBpZiBpdCBpcyBub3QgYWxyZWFkeSBhZGRlZFxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBhZGQgY2xhc3MgdG9cbiAgICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byBhZGRcbiAgICovXG4gIGFkZENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIGNsYXNzTmFtZTogU3RhdGUpIHtcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGNsYXNzTmFtZSBmcm9tIGVsZW1lbnQgaWYgaXQgaXMgcHJlc2VudFxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUgY2xhc3MgZnJvbVxuICAgKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBjbGFzcyBuYW1lIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xuICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBmaW5kcyBjbG9zZXN0IHBhcmVudCBlbGVtZW50IHdpdGggcGFyZW50U2VsZWN0b3IgY2xhc3NcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gZmluZCBwYXJlbnQgZnJvbVxuICAgKi9cbiAgZ2V0UGFyZW50RWxlbWVudChlbGVtZW50OiBFbGVtZW50KSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbGVtZW50LmNsb3Nlc3QodGhpcy5wYXJlbnRTZWxlY3RvcikpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHMgZWxlbWVudCBjbGFzcyhzdGF0ZSkgYW5kIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnRcbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXQgaXQgdG9cbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHNldFN0YXRlKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChwYXJlbnQ6IEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5tZXNzYWdlU2VsZWN0b3IpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5zZXRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGRzIGludmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgYWRkcyBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCBpbnZhbGlkIHN0YXRlIHRvXG4gICAqIEBwYXJhbSByZXN1bHQgdGhlIHZhbGlkYXRpb24gcmVzdWx0XG4gICAqL1xuICBhZGQoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xuICAgIHRoaXMuZ2V0UGFyZW50RWxlbWVudChlbGVtZW50KVxuICAgICAgLnRoZW4odGhpcy5zZXRTdGF0ZShlbGVtZW50LCBTdGF0ZS5pbnZhbGlkLCByZXN1bHQubWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZHMgdmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgcmVtb3ZlcyBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCB2YWxpZCBzdGF0ZSB0b1xuICAgKiBAcGFyYW0gcmVzdWx0IHRoZSB2YWxpZGF0aW9uIHJlc3VsdFxuICAgKi9cbiAgcmVtb3ZlKGVsZW1lbnQ6IEVsZW1lbnQsIHJlc3VsdDogVmFsaWRhdGVSZXN1bHQpIHtcbiAgICB0aGlzLmdldFBhcmVudEVsZW1lbnQoZWxlbWVudClcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUudmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
