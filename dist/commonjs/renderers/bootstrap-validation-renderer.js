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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUE4RDtBQUU5RCxJQUFLLEtBR0o7QUFIRCxXQUFLLEtBQUs7SUFDUiwyQkFBa0IsQ0FBQTtJQUNsQiwrQkFBc0IsQ0FBQTtBQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtBQUVEO0lBS0U7O09BRUc7SUFDSCxvQ0FBb0M7SUFDcEM7UUFQUSxvQkFBZSxHQUFXLG1CQUFtQixDQUFDO1FBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO1FBTzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsMkJBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLDBCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFNLEdBQU4sVUFBTyxXQUE4QjtRQUNuQywyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFDRCxLQUFtQyxVQUFvQixFQUFwQixLQUFBLFdBQVcsQ0FBQyxRQUFRLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CLEVBQUU7WUFBOUMsSUFBQSxXQUFvQixFQUFsQixrQkFBTSxFQUFFLHNCQUFRO1lBQzNCLEtBQXNCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO2dCQUEzQixJQUFNLE9BQU8saUJBQUE7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDOUI7YUFDRjtTQUNGO1FBRUQsS0FBbUMsVUFBa0IsRUFBbEIsS0FBQSxXQUFXLENBQUMsTUFBTSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFFO1lBQTVDLElBQUEsV0FB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IiwiZmlsZSI6InJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlckluc3RydWN0aW9uLCBWYWxpZGF0ZVJlc3VsdCwgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xuaW1wb3J0IHsgZ2V0TG9nZ2VyLCBMb2dnZXIsIGxvZ0xldmVsIH0gZnJvbSBcImF1cmVsaWEtbG9nZ2luZ1wiO1xuXG5lbnVtIFN0YXRlIHtcbiAgdmFsaWQgPSBcImlzLXZhbGlkXCIsXG4gIGludmFsaWQgPSBcImlzLWludmFsaWRcIlxufVxuXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIGltcGxlbWVudHMgVmFsaWRhdGlvblJlbmRlcmVyIHtcbiAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcbiAgcHJpdmF0ZSBtZXNzYWdlU2VsZWN0b3I6IHN0cmluZyA9IFwiLmludmFsaWQtZmVlZGJhY2tcIjtcbiAgcHJpdmF0ZSBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nID0gXCIuZm9ybS1ncm91cFwiO1xuXG4gIC8qKlxuICAgKiBCb290cmFwVmFsaWRhdGlvblJlbmRlcmVyIC0gU2V0cyB2YWxpZGF0aW9uIHN0YXRlL2Vycm9yIG1lc3NhZ2VzIG9uIGJvb3RzdHJhcCB2NCBmb3JtLWdyb3Vwc1xuICAgKi9cbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubG9nZ2VyID0gZ2V0TG9nZ2VyKFwiQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyXCIpO1xuICAgIHRoaXMubG9nZ2VyLnNldExldmVsKGxvZ0xldmVsLm5vbmUpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJlbmRlcmVyIGVudHJ5IHBvaW50XG4gICAqIEBwYXJhbSBpbnN0cnVjdGlvbiBsaXN0IG9mIGluc3RydWN0aW9ucyBmcm9tIHZhbGlkYXRpb24gY29udHJvbGxlclxuICAgKi9cbiAgcmVuZGVyKGluc3RydWN0aW9uOiBSZW5kZXJJbnN0cnVjdGlvbikge1xuICAgIC8vIHRoaXMubG9nZ2VyLmluZm8oXCJyZW5kZXJcIiwgaW5zdHJ1Y3Rpb24pO1xuICAgIGlmICghaW5zdHJ1Y3Rpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi51bnJlbmRlcikge1xuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkKSB7XG4gICAgICAgICAgdGhpcy5yZW1vdmUoZWxlbWVudCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24ucmVuZGVyKSB7XG4gICAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgZWxlbWVudHMpIHtcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcbiAgICAgICAgICB0aGlzLmFkZChlbGVtZW50LCByZXN1bHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUvYWRkIGNsYXNzIGZyb21cbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXRcbiAgICovXG4gIHNldENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSkge1xuICAgIGNvbnN0IHJlbW92ZSA9IHN0YXRlID09PSBTdGF0ZS52YWxpZCA/IFN0YXRlLmludmFsaWQgOiBTdGF0ZS52YWxpZDtcbiAgICB0aGlzLnJlbW92ZUNsYXNzKGVsZW1lbnQsIHJlbW92ZSk7XG4gICAgdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjbGFzc05hbWUgdG8gZWxlbWVudCBpZiBpdCBpcyBub3QgYWxyZWFkeSBhZGRlZFxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBhZGQgY2xhc3MgdG9cbiAgICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byBhZGRcbiAgICovXG4gIGFkZENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIGNsYXNzTmFtZTogU3RhdGUpIHtcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGNsYXNzTmFtZSBmcm9tIGVsZW1lbnQgaWYgaXQgaXMgcHJlc2VudFxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUgY2xhc3MgZnJvbVxuICAgKiBAcGFyYW0gY2xhc3NOYW1lIHRoZSBjbGFzcyBuYW1lIHRvIHJlbW92ZVxuICAgKi9cbiAgcmVtb3ZlQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xuICAgIGlmIChlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZmluZHMgY2xvc2VzdCBwYXJlbnQgZWxlbWVudCB3aXRoIHBhcmVudFNlbGVjdG9yIGNsYXNzXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGZpbmQgcGFyZW50IGZyb21cbiAgICovXG4gIGdldFBhcmVudEVsZW1lbnQoZWxlbWVudDogRWxlbWVudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0tZ3JvdXBcIikpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocGFyZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFyZW50RWxlbWVudChwYXJlbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHNldHMgZWxlbWVudCBjbGFzcyhzdGF0ZSkgYW5kIGVycm9yIG1lc3NhZ2VcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnRcbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXQgaXQgdG9cbiAgICogQHBhcmFtIG1lc3NhZ2UgdGhlIGVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHNldFN0YXRlKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSwgbWVzc2FnZTogc3RyaW5nKSB7XG4gICAgcmV0dXJuIChwYXJlbnQ6IEVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChwYXJlbnQpIHtcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5tZXNzYWdlU2VsZWN0b3IpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy5zZXRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBhZGRzIGludmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgYWRkcyBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCBpbnZhbGlkIHN0YXRlIHRvXG4gICAqIEBwYXJhbSByZXN1bHQgdGhlIHZhbGlkYXRpb24gcmVzdWx0XG4gICAqL1xuICBhZGQoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xuICAgIHRoaXMuZ2V0UGFyZW50RWxlbWVudChlbGVtZW50KVxuICAgICAgLnRoZW4odGhpcy5zZXRTdGF0ZShlbGVtZW50LCBTdGF0ZS5pbnZhbGlkLCByZXN1bHQubWVzc2FnZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIGFkZHMgdmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgcmVtb3ZlcyBlcnJvciBtZXNzYWdlXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCB2YWxpZCBzdGF0ZSB0b1xuICAgKiBAcGFyYW0gcmVzdWx0IHRoZSB2YWxpZGF0aW9uIHJlc3VsdFxuICAgKi9cbiAgcmVtb3ZlKGVsZW1lbnQ6IEVsZW1lbnQsIHJlc3VsdDogVmFsaWRhdGVSZXN1bHQpIHtcbiAgICB0aGlzLmdldFBhcmVudEVsZW1lbnQoZWxlbWVudClcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUudmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
