System.register(["aurelia-logging"], function (exports_1, context_1) {
    "use strict";
    var aurelia_logging_1, State, BootstrapValidationRenderer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (aurelia_logging_1_1) {
                aurelia_logging_1 = aurelia_logging_1_1;
            }
        ],
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
            exports_1("BootstrapValidationRenderer", BootstrapValidationRenderer);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztZQUdBLFdBQUssS0FBSztnQkFDUiwyQkFBa0IsQ0FBQTtnQkFDbEIsK0JBQXNCLENBQUE7WUFDeEIsQ0FBQyxFQUhJLEtBQUssS0FBTCxLQUFLLFFBR1Q7WUFFRDtnQkFLRTs7bUJBRUc7Z0JBQ0gsb0NBQW9DO2dCQUNwQztvQkFQUSxvQkFBZSxHQUFXLG1CQUFtQixDQUFDO29CQUM5QyxtQkFBYyxHQUFXLGFBQWEsQ0FBQztvQkFPN0MsSUFBSSxDQUFDLE1BQU0sR0FBRywyQkFBUyxDQUFDLDZCQUE2QixDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBRUQ7OzttQkFHRztnQkFDSCw0Q0FBTSxHQUFOLFVBQU8sV0FBOEI7b0JBQ25DLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFdBQVcsRUFBRTt3QkFDaEIsT0FBTztxQkFDUjtvQkFDRCxLQUFtQyxVQUFvQixFQUFwQixLQUFBLFdBQVcsQ0FBQyxRQUFRLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CLEVBQUU7d0JBQTlDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTt3QkFDM0IsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7NEJBQTNCLElBQU0sT0FBTyxpQkFBQTs0QkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0NBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzZCQUM5Qjt5QkFDRjtxQkFDRjtvQkFFRCxLQUFtQyxVQUFrQixFQUFsQixLQUFBLFdBQVcsQ0FBQyxNQUFNLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7d0JBQTVDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTt3QkFDM0IsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7NEJBQTNCLElBQU0sT0FBTyxpQkFBQTs0QkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7Z0NBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDOzZCQUMzQjt5QkFDRjtxQkFDRjtnQkFDSCxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDhDQUFRLEdBQVIsVUFBUyxPQUFnQixFQUFFLEtBQVk7b0JBQ3JDLElBQU0sTUFBTSxHQUFHLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO29CQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztvQkFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hDLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsOENBQVEsR0FBUixVQUFTLE9BQWdCLEVBQUUsU0FBZ0I7b0JBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTt3QkFDMUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7cUJBQ2xDO2dCQUNILENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gsaURBQVcsR0FBWCxVQUFZLE9BQWdCLEVBQUUsU0FBZ0I7b0JBQzVDLElBQUksT0FBTyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7d0JBQ3pDLE9BQU8sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3FCQUNyQztnQkFDSCxDQUFDO2dCQUVEOzs7bUJBR0c7Z0JBQ0gsc0RBQWdCLEdBQWhCLFVBQWlCLE9BQWdCO29CQUMvQixPQUFPLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkFFRDs7Ozs7bUJBS0c7Z0JBQ0gsOENBQVEsR0FBUixVQUFTLE9BQWdCLEVBQUUsS0FBWSxFQUFFLE9BQWU7b0JBQXhELGlCQU9DO29CQU5DLE9BQU8sVUFBQyxNQUFlO3dCQUNyQixJQUFJLE1BQU0sRUFBRTs0QkFDVixNQUFNLENBQUMsYUFBYSxDQUFDLEtBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDOzRCQUNqRSxLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQzt5QkFDL0I7b0JBQ0gsQ0FBQyxDQUFDO2dCQUNKLENBQUM7Z0JBRUQ7Ozs7bUJBSUc7Z0JBQ0gseUNBQUcsR0FBSCxVQUFJLE9BQWdCLEVBQUUsTUFBc0I7b0JBQzFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUM7eUJBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUNqRSxDQUFDO2dCQUVEOzs7O21CQUlHO2dCQUNILDRDQUFNLEdBQU4sVUFBTyxPQUFnQixFQUFFLE1BQXNCO29CQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO3lCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDL0QsQ0FBQztnQkFDSCxrQ0FBQztZQUFELENBbEhBLEFBa0hDLElBQUE7O1FBQ0QsQ0FBQyIsImZpbGUiOiJyZW5kZXJlcnMvYm9vdHN0cmFwLXZhbGlkYXRpb24tcmVuZGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJJbnN0cnVjdGlvbiwgVmFsaWRhdGVSZXN1bHQsIFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcbmltcG9ydCB7IGdldExvZ2dlciwgTG9nZ2VyIH0gZnJvbSBcImF1cmVsaWEtbG9nZ2luZ1wiO1xuXG5lbnVtIFN0YXRlIHtcbiAgdmFsaWQgPSBcImlzLXZhbGlkXCIsXG4gIGludmFsaWQgPSBcImlzLWludmFsaWRcIlxufVxuXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIGltcGxlbWVudHMgVmFsaWRhdGlvblJlbmRlcmVyIHtcbiAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcbiAgcHJpdmF0ZSBtZXNzYWdlU2VsZWN0b3I6IHN0cmluZyA9IFwiLmludmFsaWQtZmVlZGJhY2tcIjtcbiAgcHJpdmF0ZSBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nID0gXCIuZm9ybS1ncm91cFwiO1xuXG4gIC8qKlxuICAgKiBCb290cmFwVmFsaWRhdGlvblJlbmRlcmVyIC0gU2V0cyB2YWxpZGF0aW9uIHN0YXRlL2Vycm9yIG1lc3NhZ2VzIG9uIGJvb3RzdHJhcCB2NCBmb3JtLWdyb3Vwc1xuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9nZ2VyID0gZ2V0TG9nZ2VyKFwiQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyXCIpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlcmVyIGVudHJ5IHBvaW50XG4gICAqIEBwYXJhbSBpbnN0cnVjdGlvbiBsaXN0IG9mIGluc3RydWN0aW9ucyBmcm9tIHZhbGlkYXRpb24gY29udHJvbGxlclxuICAgKi9cbiAgcmVuZGVyKGluc3RydWN0aW9uOiBSZW5kZXJJbnN0cnVjdGlvbikge1xuICAgIHRoaXMubG9nZ2VyLmluZm8oXCJyZW5kZXJcIiwgaW5zdHJ1Y3Rpb24pO1xuICAgIGlmICghaW5zdHJ1Y3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi51bnJlbmRlcikge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24ucmVuZGVyKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcbiAgICAgICAgICB0aGlzLmFkZChlbGVtZW50LCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUvYWRkIGNsYXNzIGZyb21cbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXRcbiAgICovXG4gIHNldENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSkge1xuICAgIGNvbnN0IHJlbW92ZSA9IHN0YXRlID09PSBTdGF0ZS52YWxpZCA/IFN0YXRlLmludmFsaWQgOiBTdGF0ZS52YWxpZDtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIHJlbW92ZSk7XG4gICAgdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjbGFzc05hbWUgdG8gZWxlbWVudCBpZiBpdCBpcyBub3QgYWxyZWFkeSBhZGRlZFxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBhZGQgY2xhc3MgdG9cbiAgICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byBhZGRcbiAgICovXG4gIGFkZENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIGNsYXNzTmFtZTogU3RhdGUpIHtcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGNsYXNzTmFtZSBmcm9tIGVsZW1lbnQgaWYgaXQgaXMgcHJlc2VudFxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUgY2xhc3MgZnJvbVxuICAgKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBjbGFzcyBuYW1lIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZmluZHMgY2xvc2VzdCBwYXJlbnQgZWxlbWVudCB3aXRoIHBhcmVudFNlbGVjdG9yIGNsYXNzXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGZpbmQgcGFyZW50IGZyb21cbiAgICovXG4gIGdldFBhcmVudEVsZW1lbnQoZWxlbWVudDogRWxlbWVudCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZWxlbWVudC5jbG9zZXN0KHRoaXMucGFyZW50U2VsZWN0b3IpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBzZXRzIGVsZW1lbnQgY2xhc3Moc3RhdGUpIGFuZCBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50XG4gICAqIEBwYXJhbSBzdGF0ZSB0aGUgc3RhdGUgdG8gc2V0IGl0IHRvXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBlcnJvciBtZXNzYWdlXG4gICAqL1xuICBzZXRTdGF0ZShlbGVtZW50OiBFbGVtZW50LCBzdGF0ZTogU3RhdGUsIG1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiAocGFyZW50OiBFbGVtZW50KSA9PiB7XG4gICAgICBpZiAocGFyZW50KSB7XG4gICAgICAgIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRoaXMubWVzc2FnZVNlbGVjdG9yKS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoZWxlbWVudCwgc3RhdGUpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogYWRkcyBpbnZhbGlkIHN0YXRlIHRvIGlucHV0IGVsZW1lbnQgYW5kIGFkZHMgZXJyb3IgbWVzc2FnZVxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaW5wdXQgZWxlbWVudCB0byBzZXQgaW52YWxpZCBzdGF0ZSB0b1xuICAgKiBAcGFyYW0gcmVzdWx0IHRoZSB2YWxpZGF0aW9uIHJlc3VsdFxuICAgKi9cbiAgYWRkKGVsZW1lbnQ6IEVsZW1lbnQsIHJlc3VsdDogVmFsaWRhdGVSZXN1bHQpIHtcbiAgICB0aGlzLmdldFBhcmVudEVsZW1lbnQoZWxlbWVudClcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUuaW52YWxpZCwgcmVzdWx0Lm1lc3NhZ2UpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGRzIHZhbGlkIHN0YXRlIHRvIGlucHV0IGVsZW1lbnQgYW5kIHJlbW92ZXMgZXJyb3IgbWVzc2FnZVxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaW5wdXQgZWxlbWVudCB0byBzZXQgdmFsaWQgc3RhdGUgdG9cbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcbiAgICovXG4gIHJlbW92ZShlbGVtZW50OiBFbGVtZW50LCByZXN1bHQ6IFZhbGlkYXRlUmVzdWx0KSB7XG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXG4gICAgICAudGhlbih0aGlzLnNldFN0YXRlKGVsZW1lbnQsIFN0YXRlLnZhbGlkLCByZXN1bHQubWVzc2FnZSkpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYyJ9
