define(["require", "exports", "aurelia-logging"], function (require, exports, aurelia_logging_1) {
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
            this.logger = aurelia_logging_1.getLogger("BootstrapValidationRenderer");
            this.logger.setLevel(aurelia_logging_1.logLevel.none);
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
            var parent = element.parentElement;
            if (parent.classList.contains("form-group")) {
                return Promise.resolve(parent);
            }
            return this.getParentElement(parent);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFHQSxJQUFLLEtBR0o7SUFIRCxXQUFLLEtBQUs7UUFDUiwyQkFBa0IsQ0FBQTtRQUNsQiwrQkFBc0IsQ0FBQTtJQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtJQUVEO1FBS0U7O1dBRUc7UUFDSCxvQ0FBb0M7UUFDcEM7WUFQUSxvQkFBZSxHQUFXLG1CQUFtQixDQUFDO1lBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO1lBTzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsMkJBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLDBCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUVEOzs7V0FHRztRQUNILDRDQUFNLEdBQU4sVUFBTyxXQUE4QjtZQUNuQywyQ0FBMkM7WUFDM0MsSUFBSSxDQUFDLFdBQVcsRUFBRTtnQkFDaEIsT0FBTzthQUNSO1lBQ0QsS0FBbUMsVUFBb0IsRUFBcEIsS0FBQSxXQUFXLENBQUMsUUFBUSxFQUFwQixjQUFvQixFQUFwQixJQUFvQixFQUFFO2dCQUE5QyxJQUFBLFdBQW9CLEVBQWxCLGtCQUFNLEVBQUUsc0JBQVE7Z0JBQzNCLEtBQXNCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO29CQUEzQixJQUFNLE9BQU8saUJBQUE7b0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO3dCQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0Y7YUFDRjtZQUVELEtBQW1DLFVBQWtCLEVBQWxCLEtBQUEsV0FBVyxDQUFDLE1BQU0sRUFBbEIsY0FBa0IsRUFBbEIsSUFBa0IsRUFBRTtnQkFBNUMsSUFBQSxXQUFvQixFQUFs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MkIiLCJmaWxlIjoicmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVySW5zdHJ1Y3Rpb24sIFZhbGlkYXRlUmVzdWx0LCBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGdldExvZ2dlciwgTG9nZ2VyLCBsb2dMZXZlbCB9IGZyb20gXCJhdXJlbGlhLWxvZ2dpbmdcIjtcclxuXHJcbmVudW0gU3RhdGUge1xyXG4gIHZhbGlkID0gXCJpcy12YWxpZFwiLFxyXG4gIGludmFsaWQgPSBcImlzLWludmFsaWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIGltcGxlbWVudHMgVmFsaWRhdGlvblJlbmRlcmVyIHtcclxuICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xyXG4gIHByaXZhdGUgbWVzc2FnZVNlbGVjdG9yOiBzdHJpbmcgPSBcIi5pbnZhbGlkLWZlZWRiYWNrXCI7XHJcbiAgcHJpdmF0ZSBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nID0gXCIuZm9ybS1ncm91cFwiO1xyXG5cclxuICAvKipcclxuICAgKiBCb290cmFwVmFsaWRhdGlvblJlbmRlcmVyIC0gU2V0cyB2YWxpZGF0aW9uIHN0YXRlL2Vycm9yIG1lc3NhZ2VzIG9uIGJvb3RzdHJhcCB2NCBmb3JtLWdyb3Vwc1xyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5sb2dnZXIgPSBnZXRMb2dnZXIoXCJCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXJcIik7XHJcbiAgICB0aGlzLmxvZ2dlci5zZXRMZXZlbChsb2dMZXZlbC5ub25lKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbmRlcmVyIGVudHJ5IHBvaW50XHJcbiAgICogQHBhcmFtIGluc3RydWN0aW9uIGxpc3Qgb2YgaW5zdHJ1Y3Rpb25zIGZyb20gdmFsaWRhdGlvbiBjb250cm9sbGVyXHJcbiAgICovXHJcbiAgcmVuZGVyKGluc3RydWN0aW9uOiBSZW5kZXJJbnN0cnVjdGlvbikge1xyXG4gICAgLy8gdGhpcy5sb2dnZXIuaW5mbyhcInJlbmRlclwiLCBpbnN0cnVjdGlvbik7XHJcbiAgICBpZiAoIWluc3RydWN0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24udW5yZW5kZXIpIHtcclxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi5yZW5kZXIpIHtcclxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcclxuICAgICAgICAgIHRoaXMuYWRkKGVsZW1lbnQsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUvYWRkIGNsYXNzIGZyb21cclxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldFxyXG4gICAqL1xyXG4gIHNldENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSkge1xyXG4gICAgY29uc3QgcmVtb3ZlID0gc3RhdGUgPT09IFN0YXRlLnZhbGlkID8gU3RhdGUuaW52YWxpZCA6IFN0YXRlLnZhbGlkO1xyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCByZW1vdmUpO1xyXG4gICAgdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGNsYXNzTmFtZSB0byBlbGVtZW50IGlmIGl0IGlzIG5vdCBhbHJlYWR5IGFkZGVkXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gYWRkIGNsYXNzIHRvXHJcbiAgICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byBhZGRcclxuICAgKi9cclxuICBhZGRDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBjbGFzc05hbWU6IFN0YXRlKSB7XHJcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGNsYXNzTmFtZSBmcm9tIGVsZW1lbnQgaWYgaXQgaXMgcHJlc2VudFxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIHJlbW92ZSBjbGFzcyBmcm9tXHJcbiAgICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byByZW1vdmVcclxuICAgKi9cclxuICByZW1vdmVDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBjbGFzc05hbWU6IFN0YXRlKSB7XHJcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZpbmRzIGNsb3Nlc3QgcGFyZW50IGVsZW1lbnQgd2l0aCBwYXJlbnRTZWxlY3RvciBjbGFzc1xyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGZpbmQgcGFyZW50IGZyb21cclxuICAgKi9cclxuICBnZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS1ncm91cFwiKSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBhcmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQYXJlbnRFbGVtZW50KHBhcmVudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXRzIGVsZW1lbnQgY2xhc3Moc3RhdGUpIGFuZCBlcnJvciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnRcclxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldCBpdCB0b1xyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoZWxlbWVudDogRWxlbWVudCwgc3RhdGU6IFN0YXRlLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAocGFyZW50OiBFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3Rvcih0aGlzLm1lc3NhZ2VTZWxlY3RvcikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoZWxlbWVudCwgc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkcyBpbnZhbGlkIHN0YXRlIHRvIGlucHV0IGVsZW1lbnQgYW5kIGFkZHMgZXJyb3IgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCBpbnZhbGlkIHN0YXRlIHRvXHJcbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcclxuICAgKi9cclxuICBhZGQoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xyXG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXHJcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUuaW52YWxpZCwgcmVzdWx0Lm1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZHMgdmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgcmVtb3ZlcyBlcnJvciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnQgdG8gc2V0IHZhbGlkIHN0YXRlIHRvXHJcbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcclxuICAgKi9cclxuICByZW1vdmUoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xyXG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXHJcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUudmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
