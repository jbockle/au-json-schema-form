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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLG1EQUE4RDtBQUU5RCxJQUFLLEtBR0o7QUFIRCxXQUFLLEtBQUs7SUFDUiwyQkFBa0IsQ0FBQTtJQUNsQiwrQkFBc0IsQ0FBQTtBQUN4QixDQUFDLEVBSEksS0FBSyxLQUFMLEtBQUssUUFHVDtBQUVEO0lBS0U7O09BRUc7SUFDSCxvQ0FBb0M7SUFDcEM7UUFQUSxvQkFBZSxHQUFXLG1CQUFtQixDQUFDO1FBQzlDLG1CQUFjLEdBQVcsYUFBYSxDQUFDO1FBTzdDLElBQUksQ0FBQyxNQUFNLEdBQUcsMkJBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLDBCQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRDQUFNLEdBQU4sVUFBTyxXQUE4QjtRQUNuQywyQ0FBMkM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNoQixPQUFPO1NBQ1I7UUFDRCxLQUFtQyxVQUFvQixFQUFwQixLQUFBLFdBQVcsQ0FBQyxRQUFRLEVBQXBCLGNBQW9CLEVBQXBCLElBQW9CLEVBQUU7WUFBOUMsSUFBQSxXQUFvQixFQUFsQixrQkFBTSxFQUFFLHNCQUFRO1lBQzNCLEtBQXNCLFVBQVEsRUFBUixxQkFBUSxFQUFSLHNCQUFRLEVBQVIsSUFBUSxFQUFFO2dCQUEzQixJQUFNLE9BQU8saUJBQUE7Z0JBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFO29CQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztpQkFDOUI7YUFDRjtTQUNGO1FBRUQsS0FBbUMsVUFBa0IsRUFBbEIsS0FBQSxXQUFXLENBQUMsTUFBTSxFQUFsQixjQUFrQixFQUFsQixJQUFrQixFQUFFO1lBQTVDLElBQUEsV0FB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IiwiZmlsZSI6InJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlbmRlckluc3RydWN0aW9uLCBWYWxpZGF0ZVJlc3VsdCwgVmFsaWRhdGlvblJlbmRlcmVyIH0gZnJvbSBcImF1cmVsaWEtdmFsaWRhdGlvblwiO1xyXG5pbXBvcnQgeyBnZXRMb2dnZXIsIExvZ2dlciwgbG9nTGV2ZWwgfSBmcm9tIFwiYXVyZWxpYS1sb2dnaW5nXCI7XHJcblxyXG5lbnVtIFN0YXRlIHtcclxuICB2YWxpZCA9IFwiaXMtdmFsaWRcIixcclxuICBpbnZhbGlkID0gXCJpcy1pbnZhbGlkXCJcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEJvb3RzdHJhcFZhbGlkYXRpb25SZW5kZXJlciBpbXBsZW1lbnRzIFZhbGlkYXRpb25SZW5kZXJlciB7XHJcbiAgcHJpdmF0ZSBsb2dnZXI6IExvZ2dlcjtcclxuICBwcml2YXRlIG1lc3NhZ2VTZWxlY3Rvcjogc3RyaW5nID0gXCIuaW52YWxpZC1mZWVkYmFja1wiO1xyXG4gIHByaXZhdGUgcGFyZW50U2VsZWN0b3I6IHN0cmluZyA9IFwiLmZvcm0tZ3JvdXBcIjtcclxuXHJcbiAgLyoqXHJcbiAgICogQm9vdHJhcFZhbGlkYXRpb25SZW5kZXJlciAtIFNldHMgdmFsaWRhdGlvbiBzdGF0ZS9lcnJvciBtZXNzYWdlcyBvbiBib290c3RyYXAgdjQgZm9ybS1ncm91cHNcclxuICAgKi9cclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tZW1wdHlcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubG9nZ2VyID0gZ2V0TG9nZ2VyKFwiQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyXCIpO1xyXG4gICAgdGhpcy5sb2dnZXIuc2V0TGV2ZWwobG9nTGV2ZWwubm9uZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiByZW5kZXJlciBlbnRyeSBwb2ludFxyXG4gICAqIEBwYXJhbSBpbnN0cnVjdGlvbiBsaXN0IG9mIGluc3RydWN0aW9ucyBmcm9tIHZhbGlkYXRpb24gY29udHJvbGxlclxyXG4gICAqL1xyXG4gIHJlbmRlcihpbnN0cnVjdGlvbjogUmVuZGVySW5zdHJ1Y3Rpb24pIHtcclxuICAgIC8vIHRoaXMubG9nZ2VyLmluZm8oXCJyZW5kZXJcIiwgaW5zdHJ1Y3Rpb24pO1xyXG4gICAgaWYgKCFpbnN0cnVjdGlvbikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHsgcmVzdWx0LCBlbGVtZW50cyB9IG9mIGluc3RydWN0aW9uLnVucmVuZGVyKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbW92ZShlbGVtZW50LCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24ucmVuZGVyKSB7XHJcbiAgICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIGlmICghcmVzdWx0LnZhbGlkKSB7XHJcbiAgICAgICAgICB0aGlzLmFkZChlbGVtZW50LCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gcmVtb3ZlL2FkZCBjbGFzcyBmcm9tXHJcbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXRcclxuICAgKi9cclxuICBzZXRDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBzdGF0ZTogU3RhdGUpIHtcclxuICAgIGNvbnN0IHJlbW92ZSA9IHN0YXRlID09PSBTdGF0ZS52YWxpZCA/IFN0YXRlLmludmFsaWQgOiBTdGF0ZS52YWxpZDtcclxuICAgIHRoaXMucmVtb3ZlQ2xhc3MoZWxlbWVudCwgcmVtb3ZlKTtcclxuICAgIHRoaXMuYWRkQ2xhc3MoZWxlbWVudCwgc3RhdGUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBjbGFzc05hbWUgdG8gZWxlbWVudCBpZiBpdCBpcyBub3QgYWxyZWFkeSBhZGRlZFxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGFkZCBjbGFzcyB0b1xyXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIGNsYXNzIG5hbWUgdG8gYWRkXHJcbiAgICovXHJcbiAgYWRkQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xyXG4gICAgaWYgKCFlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWUpKSB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBjbGFzc05hbWUgZnJvbSBlbGVtZW50IGlmIGl0IGlzIHByZXNlbnRcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUgY2xhc3MgZnJvbVxyXG4gICAqIEBwYXJhbSBjbGFzc05hbWUgdGhlIGNsYXNzIG5hbWUgdG8gcmVtb3ZlXHJcbiAgICovXHJcbiAgcmVtb3ZlQ2xhc3MoZWxlbWVudDogRWxlbWVudCwgY2xhc3NOYW1lOiBTdGF0ZSkge1xyXG4gICAgaWYgKGVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBmaW5kcyBjbG9zZXN0IHBhcmVudCBlbGVtZW50IHdpdGggcGFyZW50U2VsZWN0b3IgY2xhc3NcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byBmaW5kIHBhcmVudCBmcm9tXHJcbiAgICovXHJcbiAgZ2V0UGFyZW50RWxlbWVudChlbGVtZW50OiBFbGVtZW50KSB7XHJcbiAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XHJcbiAgICBpZiAocGFyZW50LmNsYXNzTGlzdC5jb250YWlucyhcImZvcm0tZ3JvdXBcIikpIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShwYXJlbnQpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMuZ2V0UGFyZW50RWxlbWVudChwYXJlbnQpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0cyBlbGVtZW50IGNsYXNzKHN0YXRlKSBhbmQgZXJyb3IgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50XHJcbiAgICogQHBhcmFtIHN0YXRlIHRoZSBzdGF0ZSB0byBzZXQgaXQgdG9cclxuICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgZXJyb3IgbWVzc2FnZVxyXG4gICAqL1xyXG4gIHNldFN0YXRlKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSwgbWVzc2FnZTogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gKHBhcmVudDogRWxlbWVudCkgPT4ge1xyXG4gICAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5tZXNzYWdlU2VsZWN0b3IpLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuICAgICAgICB0aGlzLnNldENsYXNzKGVsZW1lbnQsIHN0YXRlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZHMgaW52YWxpZCBzdGF0ZSB0byBpbnB1dCBlbGVtZW50IGFuZCBhZGRzIGVycm9yIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgaW5wdXQgZWxlbWVudCB0byBzZXQgaW52YWxpZCBzdGF0ZSB0b1xyXG4gICAqIEBwYXJhbSByZXN1bHQgdGhlIHZhbGlkYXRpb24gcmVzdWx0XHJcbiAgICovXHJcbiAgYWRkKGVsZW1lbnQ6IEVsZW1lbnQsIHJlc3VsdDogVmFsaWRhdGVSZXN1bHQpIHtcclxuICAgIHRoaXMuZ2V0UGFyZW50RWxlbWVudChlbGVtZW50KVxyXG4gICAgICAudGhlbih0aGlzLnNldFN0YXRlKGVsZW1lbnQsIFN0YXRlLmludmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBhZGRzIHZhbGlkIHN0YXRlIHRvIGlucHV0IGVsZW1lbnQgYW5kIHJlbW92ZXMgZXJyb3IgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCB2YWxpZCBzdGF0ZSB0b1xyXG4gICAqIEBwYXJhbSByZXN1bHQgdGhlIHZhbGlkYXRpb24gcmVzdWx0XHJcbiAgICovXHJcbiAgcmVtb3ZlKGVsZW1lbnQ6IEVsZW1lbnQsIHJlc3VsdDogVmFsaWRhdGVSZXN1bHQpIHtcclxuICAgIHRoaXMuZ2V0UGFyZW50RWxlbWVudChlbGVtZW50KVxyXG4gICAgICAudGhlbih0aGlzLnNldFN0YXRlKGVsZW1lbnQsIFN0YXRlLnZhbGlkLCByZXN1bHQubWVzc2FnZSkpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYyJ9
