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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFFQSxJQUFLLEtBR0o7SUFIRCxXQUFLLEtBQUs7UUFDUiwyQkFBa0IsQ0FBQTtRQUNsQiwrQkFBc0IsQ0FBQTtJQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtJQUVEO1FBSUU7O1dBRUc7UUFDSCxvQ0FBb0M7UUFDcEM7WUFQUSxvQkFBZSxHQUFXLG1CQUFtQixDQUFDO1lBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO1FBTS9CLENBQUM7UUFFakI7OztXQUdHO1FBQ0gsNENBQU0sR0FBTixVQUFPLFdBQThCO1lBQ25DLElBQUksQ0FBQyxXQUFXLEVBQUU7Z0JBQ2hCLE9BQU87YUFDUjtZQUNELEtBQW1DLFVBQW9CLEVBQXBCLEtBQUEsV0FBVyxDQUFDLFFBQVEsRUFBcEIsY0FBb0IsRUFBcEIsSUFBb0IsRUFBRTtnQkFBOUMsSUFBQSxXQUFvQixFQUFsQixrQkFBTSxFQUFFLHNCQUFRO2dCQUMzQixLQUFzQixVQUFRLEVBQVIscUJBQVEsRUFBUixzQkFBUSxFQUFSLElBQVEsRUFBRTtvQkFBM0IsSUFBTSxPQUFPLGlCQUFBO29CQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTt3QkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7cUJBQzlCO2lCQUNGO2FBQ0Y7WUFFRCxLQUFtQyxVQUFrQixFQUFsQixLQUFBLFdBQVcsQ0FBQyxNQUFNLEVBQWxCLGNBQWtCLEVBQWxCLElBQWtCLEVBQUU7Z0JBQTVDLElBQUEsV0FBb0IsRUFBbEIsa0JBQU0sRUFBRSxzQkFBUTtnQkFDM0IsS0FBc0IsVUFBUSxFQUFSLHFCQUFRLEVBQVIsc0JBQVEsRUFBUixJQUFRLEVBQUU7b0JBQTNCLElBQU0sT0FBTyxpQkFBQTtvQkFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUU7d0JBQ2pCLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3FCQUMzQjtpQkFDRjthQUNGO1FBQ0gsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCw4Q0FBUSxHQUFSLFVBQVMsT0FBZ0IsRUFBRSxLQUFZO1lBQ3JDLElBQU0sTUFBTSxHQUFHLEtBQUssS0FBSyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsOENBQVEsR0FBUixVQUFTLE9BQWdCLEVBQUUsU0FBZ0I7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQzthQUNsQztRQUNILENBQUM7UUFFRDs7OztXQUlHO1FBQ0gsaURBQVcsR0FBWCxVQUFZLE9BQWdCLEVBQUUsU0FBZ0I7WUFDNUMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDekMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7YUFDckM7UUFDSCxDQUFDO1FBRUQ7OztXQUdHO1FBQ0gsc0RBQWdCLEdBQWhCLFVBQWlCLE9BQWdCO1lBQy9CLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1FBQy9ELENBQUM7UUFFRDs7Ozs7V0FLRztRQUNILDhDQUFRLEdBQVIsVUFBUyxPQUFnQixFQUFFLEtBQVksRUFBRSxPQUFlO1lBQXhELGlCQU9DO1lBTkMsT0FBTyxVQUFDLE1BQWU7Z0JBQ3JCLElBQUksTUFBTSxFQUFFO29CQUNWLE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7b0JBQ2pFLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMvQjtZQUNILENBQUMsQ0FBQztRQUNKLENBQUM7UUFFRDs7OztXQUlHO1FBQ0gseUNBQUcsR0FBSCxVQUFJLE9BQWdCLEVBQUUsTUFBc0I7WUFDMUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztpQkFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDakUsQ0FBQztRQUVEOzs7O1dBSUc7UUFDSCw0Q0FBTSxHQUFOLFVBQU8sT0FBZ0IsRUFBRSxNQUFzQjtZQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO2lCQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0gsa0NBQUM7SUFBRCxDQTlHQSxBQThHQyxJQUFBO0lBOUdZLGtFQUEyQiIsImZpbGUiOiJyZW5kZXJlcnMvYm9vdHN0cmFwLXZhbGlkYXRpb24tcmVuZGVyZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSZW5kZXJJbnN0cnVjdGlvbiwgVmFsaWRhdGVSZXN1bHQsIFZhbGlkYXRpb25SZW5kZXJlciB9IGZyb20gXCJhdXJlbGlhLXZhbGlkYXRpb25cIjtcblxuZW51bSBTdGF0ZSB7XG4gIHZhbGlkID0gXCJpcy12YWxpZFwiLFxuICBpbnZhbGlkID0gXCJpcy1pbnZhbGlkXCJcbn1cblxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciBpbXBsZW1lbnRzIFZhbGlkYXRpb25SZW5kZXJlciB7XG4gIHByaXZhdGUgbWVzc2FnZVNlbGVjdG9yOiBzdHJpbmcgPSBcIi5pbnZhbGlkLWZlZWRiYWNrXCI7XG4gIHByaXZhdGUgcGFyZW50U2VsZWN0b3I6IHN0cmluZyA9IFwiLmZvcm0tZ3JvdXBcIjtcblxuICAvKipcbiAgICogQm9vdHJhcFZhbGlkYXRpb25SZW5kZXJlciAtIFNldHMgdmFsaWRhdGlvbiBzdGF0ZS9lcnJvciBtZXNzYWdlcyBvbiBib290c3RyYXAgdjQgZm9ybS1ncm91cHNcbiAgICovXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eVxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIC8qKlxuICAgKiByZW5kZXJlciBlbnRyeSBwb2ludFxuICAgKiBAcGFyYW0gaW5zdHJ1Y3Rpb24gbGlzdCBvZiBpbnN0cnVjdGlvbnMgZnJvbSB2YWxpZGF0aW9uIGNvbnRyb2xsZXJcbiAgICovXG4gIHJlbmRlcihpbnN0cnVjdGlvbjogUmVuZGVySW5zdHJ1Y3Rpb24pIHtcbiAgICBpZiAoIWluc3RydWN0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24udW5yZW5kZXIpIHtcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xuICAgICAgICBpZiAoIXJlc3VsdC52YWxpZCkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQsIHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHsgcmVzdWx0LCBlbGVtZW50cyB9IG9mIGluc3RydWN0aW9uLnJlbmRlcikge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5hZGQoZWxlbWVudCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gcmVtb3ZlL2FkZCBjbGFzcyBmcm9tXG4gICAqIEBwYXJhbSBzdGF0ZSB0aGUgc3RhdGUgdG8gc2V0XG4gICAqL1xuICBzZXRDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBzdGF0ZTogU3RhdGUpIHtcbiAgICBjb25zdCByZW1vdmUgPSBzdGF0ZSA9PT0gU3RhdGUudmFsaWQgPyBTdGF0ZS5pbnZhbGlkIDogU3RhdGUudmFsaWQ7XG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCByZW1vdmUpO1xuICAgIHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgc3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY2xhc3NOYW1lIHRvIGVsZW1lbnQgaWYgaXQgaXMgbm90IGFscmVhZHkgYWRkZWRcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gYWRkIGNsYXNzIHRvXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIGNsYXNzIG5hbWUgdG8gYWRkXG4gICAqL1xuICBhZGRDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBjbGFzc05hbWU6IFN0YXRlKSB7XG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBjbGFzc05hbWUgZnJvbSBlbGVtZW50IGlmIGl0IGlzIHByZXNlbnRcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gcmVtb3ZlIGNsYXNzIGZyb21cbiAgICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byByZW1vdmVcbiAgICovXG4gIHJlbW92ZUNsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIGNsYXNzTmFtZTogU3RhdGUpIHtcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIGZpbmRzIGNsb3Nlc3QgcGFyZW50IGVsZW1lbnQgd2l0aCBwYXJlbnRTZWxlY3RvciBjbGFzc1xuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBmaW5kIHBhcmVudCBmcm9tXG4gICAqL1xuICBnZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVsZW1lbnQuY2xvc2VzdCh0aGlzLnBhcmVudFNlbGVjdG9yKSk7XG4gIH1cblxuICAvKipcbiAgICogc2V0cyBlbGVtZW50IGNsYXNzKHN0YXRlKSBhbmQgZXJyb3IgbWVzc2FnZVxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaW5wdXQgZWxlbWVudFxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldCBpdCB0b1xuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgZXJyb3IgbWVzc2FnZVxuICAgKi9cbiAgc2V0U3RhdGUoZWxlbWVudDogRWxlbWVudCwgc3RhdGU6IFN0YXRlLCBtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gKHBhcmVudDogRWxlbWVudCkgPT4ge1xuICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3Rvcih0aGlzLm1lc3NhZ2VTZWxlY3RvcikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnNldENsYXNzKGVsZW1lbnQsIHN0YXRlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZHMgaW52YWxpZCBzdGF0ZSB0byBpbnB1dCBlbGVtZW50IGFuZCBhZGRzIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnQgdG8gc2V0IGludmFsaWQgc3RhdGUgdG9cbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcbiAgICovXG4gIGFkZChlbGVtZW50OiBFbGVtZW50LCByZXN1bHQ6IFZhbGlkYXRlUmVzdWx0KSB7XG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXG4gICAgICAudGhlbih0aGlzLnNldFN0YXRlKGVsZW1lbnQsIFN0YXRlLmludmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XG4gIH1cblxuICAvKipcbiAgICogYWRkcyB2YWxpZCBzdGF0ZSB0byBpbnB1dCBlbGVtZW50IGFuZCByZW1vdmVzIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnQgdG8gc2V0IHZhbGlkIHN0YXRlIHRvXG4gICAqIEBwYXJhbSByZXN1bHQgdGhlIHZhbGlkYXRpb24gcmVzdWx0XG4gICAqL1xuICByZW1vdmUoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xuICAgIHRoaXMuZ2V0UGFyZW50RWxlbWVudChlbGVtZW50KVxuICAgICAgLnRoZW4odGhpcy5zZXRTdGF0ZShlbGVtZW50LCBTdGF0ZS52YWxpZCwgcmVzdWx0Lm1lc3NhZ2UpKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==
