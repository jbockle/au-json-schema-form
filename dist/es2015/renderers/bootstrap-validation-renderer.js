import { getLogger, logLevel } from "aurelia-logging";
var State;
(function (State) {
    State["valid"] = "is-valid";
    State["invalid"] = "is-invalid";
})(State || (State = {}));
export class BootstrapValidationRenderer {
    /**
     * BootrapValidationRenderer - Sets validation state/error messages on bootstrap v4 form-groups
     */
    // tslint:disable-next-line:no-empty
    constructor() {
        this.messageSelector = ".invalid-feedback";
        this.parentSelector = ".form-group";
        this.logger = getLogger("BootstrapValidationRenderer");
        this.logger.setLevel(logLevel.none);
    }
    /**
     * renderer entry point
     * @param instruction list of instructions from validation controller
     */
    render(instruction) {
        // this.logger.info("render", instruction);
        if (!instruction) {
            return;
        }
        for (const { result, elements } of instruction.unrender) {
            for (const element of elements) {
                if (!result.valid) {
                    this.remove(element, result);
                }
            }
        }
        for (const { result, elements } of instruction.render) {
            for (const element of elements) {
                if (!result.valid) {
                    this.add(element, result);
                }
            }
        }
    }
    /**
     *
     * @param element the element to remove/add class from
     * @param state the state to set
     */
    setClass(element, state) {
        const remove = state === State.valid ? State.invalid : State.valid;
        this.removeClass(element, remove);
        this.addClass(element, state);
    }
    /**
     * Adds className to element if it is not already added
     * @param element the element to add class to
     * @param className the class name to add
     */
    addClass(element, className) {
        if (!element.classList.contains(className)) {
            element.classList.add(className);
        }
    }
    /**
     * Removes className from element if it is present
     * @param element the element to remove class from
     * @param className the class name to remove
     */
    removeClass(element, className) {
        if (element.classList.contains(className)) {
            element.classList.remove(className);
        }
    }
    /**
     * finds closest parent element with parentSelector class
     * @param element the element to find parent from
     */
    getParentElement(element) {
        const parent = element.parentElement;
        if (parent.classList.contains("form-group")) {
            return Promise.resolve(parent);
        }
        return this.getParentElement(parent);
    }
    /**
     * sets element class(state) and error message
     * @param element the input element
     * @param state the state to set it to
     * @param message the error message
     */
    setState(element, state, message) {
        return (parent) => {
            if (parent) {
                parent.querySelector(this.messageSelector).textContent = message;
                this.setClass(element, state);
            }
        };
    }
    /**
     * adds invalid state to input element and adds error message
     * @param element the input element to set invalid state to
     * @param result the validation result
     */
    add(element, result) {
        this.getParentElement(element)
            .then(this.setState(element, State.invalid, result.message));
    }
    /**
     * adds valid state to input element and removes error message
     * @param element the input element to set valid state to
     * @param result the validation result
     */
    remove(element, result) {
        this.getParentElement(element)
            .then(this.setState(element, State.valid, result.message));
    }
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbmRlcmVycy9ib290c3RyYXAtdmFsaWRhdGlvbi1yZW5kZXJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUFVLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTlELElBQUssS0FHSjtBQUhELFdBQUssS0FBSztJQUNSLDJCQUFrQixDQUFBO0lBQ2xCLCtCQUFzQixDQUFBO0FBQ3hCLENBQUMsRUFISSxLQUFLLEtBQUwsS0FBSyxRQUdUO0FBRUQsTUFBTTtJQUtKOztPQUVHO0lBQ0gsb0NBQW9DO0lBQ3BDO1FBUFEsb0JBQWUsR0FBVyxtQkFBbUIsQ0FBQztRQUM5QyxtQkFBYyxHQUFXLGFBQWEsQ0FBQztRQU83QyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsTUFBTSxDQUFDLFdBQThCO1FBQ25DLDJDQUEyQztRQUMzQyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUNELEtBQUssTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsUUFBUSxFQUFFO1lBQ3ZELEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQzlCO2FBQ0Y7U0FDRjtRQUVELEtBQUssTUFBTSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3JELEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO2dCQUM5QixJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRTtvQkFDakIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsTUFBTSxDQUFDLENBQUM7aUJBQzNCO2FBQ0Y7U0FDRjtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsUUFBUSxDQUFDLE9BQWdCLEVBQUUsS0FBWTtRQUNyQyxNQUFNLE1BQU0sR0FBRyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILFFBQVEsQ0FBQyxPQUFnQixFQUFFLFNBQWdCO1FBQ3pDLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNsQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLE9BQWdCLEVBQUUsU0FBZ0I7UUFDNUMsSUFBSSxPQUFPLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN6QyxPQUFPLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUNyQztJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0IsQ0FBQyxPQUFnQjtRQUMvQixNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQ3JDLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDM0MsT0FBTyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsUUFBUSxDQUFDLE9BQWdCLEVBQUUsS0FBWSxFQUFFLE9BQWU7UUFDdEQsT0FBTyxDQUFDLE1BQWUsRUFBRSxFQUFFO1lBQ3pCLElBQUksTUFBTSxFQUFFO2dCQUNWLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsT0FBZ0IsRUFBRSxNQUFzQjtRQUMxQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO2FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsTUFBTSxDQUFDLE9BQWdCLEVBQUUsTUFBc0I7UUFDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQzthQUMzQixJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUMvRCxDQUFDO0NBQ0YiLCJmaWxlIjoicmVuZGVyZXJzL2Jvb3RzdHJhcC12YWxpZGF0aW9uLXJlbmRlcmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVuZGVySW5zdHJ1Y3Rpb24sIFZhbGlkYXRlUmVzdWx0LCBWYWxpZGF0aW9uUmVuZGVyZXIgfSBmcm9tIFwiYXVyZWxpYS12YWxpZGF0aW9uXCI7XHJcbmltcG9ydCB7IGdldExvZ2dlciwgTG9nZ2VyLCBsb2dMZXZlbCB9IGZyb20gXCJhdXJlbGlhLWxvZ2dpbmdcIjtcclxuXHJcbmVudW0gU3RhdGUge1xyXG4gIHZhbGlkID0gXCJpcy12YWxpZFwiLFxyXG4gIGludmFsaWQgPSBcImlzLWludmFsaWRcIlxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQm9vdHN0cmFwVmFsaWRhdGlvblJlbmRlcmVyIGltcGxlbWVudHMgVmFsaWRhdGlvblJlbmRlcmVyIHtcclxuICBwcml2YXRlIGxvZ2dlcjogTG9nZ2VyO1xyXG4gIHByaXZhdGUgbWVzc2FnZVNlbGVjdG9yOiBzdHJpbmcgPSBcIi5pbnZhbGlkLWZlZWRiYWNrXCI7XHJcbiAgcHJpdmF0ZSBwYXJlbnRTZWxlY3Rvcjogc3RyaW5nID0gXCIuZm9ybS1ncm91cFwiO1xyXG5cclxuICAvKipcclxuICAgKiBCb290cmFwVmFsaWRhdGlvblJlbmRlcmVyIC0gU2V0cyB2YWxpZGF0aW9uIHN0YXRlL2Vycm9yIG1lc3NhZ2VzIG9uIGJvb3RzdHJhcCB2NCBmb3JtLWdyb3Vwc1xyXG4gICAqL1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1lbXB0eVxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5sb2dnZXIgPSBnZXRMb2dnZXIoXCJCb290c3RyYXBWYWxpZGF0aW9uUmVuZGVyZXJcIik7XHJcbiAgICB0aGlzLmxvZ2dlci5zZXRMZXZlbChsb2dMZXZlbC5ub25lKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHJlbmRlcmVyIGVudHJ5IHBvaW50XHJcbiAgICogQHBhcmFtIGluc3RydWN0aW9uIGxpc3Qgb2YgaW5zdHJ1Y3Rpb25zIGZyb20gdmFsaWRhdGlvbiBjb250cm9sbGVyXHJcbiAgICovXHJcbiAgcmVuZGVyKGluc3RydWN0aW9uOiBSZW5kZXJJbnN0cnVjdGlvbikge1xyXG4gICAgLy8gdGhpcy5sb2dnZXIuaW5mbyhcInJlbmRlclwiLCBpbnN0cnVjdGlvbik7XHJcbiAgICBpZiAoIWluc3RydWN0aW9uKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgeyByZXN1bHQsIGVsZW1lbnRzIH0gb2YgaW5zdHJ1Y3Rpb24udW5yZW5kZXIpIHtcclxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlKGVsZW1lbnQsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChjb25zdCB7IHJlc3VsdCwgZWxlbWVudHMgfSBvZiBpbnN0cnVjdGlvbi5yZW5kZXIpIHtcclxuICAgICAgZm9yIChjb25zdCBlbGVtZW50IG9mIGVsZW1lbnRzKSB7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQudmFsaWQpIHtcclxuICAgICAgICAgIHRoaXMuYWRkKGVsZW1lbnQsIHJlc3VsdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcclxuICAgKiBAcGFyYW0gZWxlbWVudCB0aGUgZWxlbWVudCB0byByZW1vdmUvYWRkIGNsYXNzIGZyb21cclxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldFxyXG4gICAqL1xyXG4gIHNldENsYXNzKGVsZW1lbnQ6IEVsZW1lbnQsIHN0YXRlOiBTdGF0ZSkge1xyXG4gICAgY29uc3QgcmVtb3ZlID0gc3RhdGUgPT09IFN0YXRlLnZhbGlkID8gU3RhdGUuaW52YWxpZCA6IFN0YXRlLnZhbGlkO1xyXG4gICAgdGhpcy5yZW1vdmVDbGFzcyhlbGVtZW50LCByZW1vdmUpO1xyXG4gICAgdGhpcy5hZGRDbGFzcyhlbGVtZW50LCBzdGF0ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIGNsYXNzTmFtZSB0byBlbGVtZW50IGlmIGl0IGlzIG5vdCBhbHJlYWR5IGFkZGVkXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGVsZW1lbnQgdG8gYWRkIGNsYXNzIHRvXHJcbiAgICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byBhZGRcclxuICAgKi9cclxuICBhZGRDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBjbGFzc05hbWU6IFN0YXRlKSB7XHJcbiAgICBpZiAoIWVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSkpIHtcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGNsYXNzTmFtZSBmcm9tIGVsZW1lbnQgaWYgaXQgaXMgcHJlc2VudFxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIHJlbW92ZSBjbGFzcyBmcm9tXHJcbiAgICogQHBhcmFtIGNsYXNzTmFtZSB0aGUgY2xhc3MgbmFtZSB0byByZW1vdmVcclxuICAgKi9cclxuICByZW1vdmVDbGFzcyhlbGVtZW50OiBFbGVtZW50LCBjbGFzc05hbWU6IFN0YXRlKSB7XHJcbiAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKSkge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGZpbmRzIGNsb3Nlc3QgcGFyZW50IGVsZW1lbnQgd2l0aCBwYXJlbnRTZWxlY3RvciBjbGFzc1xyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBlbGVtZW50IHRvIGZpbmQgcGFyZW50IGZyb21cclxuICAgKi9cclxuICBnZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQ6IEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcclxuICAgIGlmIChwYXJlbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZm9ybS1ncm91cFwiKSkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHBhcmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5nZXRQYXJlbnRFbGVtZW50KHBhcmVudCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXRzIGVsZW1lbnQgY2xhc3Moc3RhdGUpIGFuZCBlcnJvciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnRcclxuICAgKiBAcGFyYW0gc3RhdGUgdGhlIHN0YXRlIHRvIHNldCBpdCB0b1xyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBlcnJvciBtZXNzYWdlXHJcbiAgICovXHJcbiAgc2V0U3RhdGUoZWxlbWVudDogRWxlbWVudCwgc3RhdGU6IFN0YXRlLCBtZXNzYWdlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAocGFyZW50OiBFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQucXVlcnlTZWxlY3Rvcih0aGlzLm1lc3NhZ2VTZWxlY3RvcikudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG4gICAgICAgIHRoaXMuc2V0Q2xhc3MoZWxlbWVudCwgc3RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogYWRkcyBpbnZhbGlkIHN0YXRlIHRvIGlucHV0IGVsZW1lbnQgYW5kIGFkZHMgZXJyb3IgbWVzc2FnZVxyXG4gICAqIEBwYXJhbSBlbGVtZW50IHRoZSBpbnB1dCBlbGVtZW50IHRvIHNldCBpbnZhbGlkIHN0YXRlIHRvXHJcbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcclxuICAgKi9cclxuICBhZGQoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xyXG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXHJcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUuaW52YWxpZCwgcmVzdWx0Lm1lc3NhZ2UpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIGFkZHMgdmFsaWQgc3RhdGUgdG8gaW5wdXQgZWxlbWVudCBhbmQgcmVtb3ZlcyBlcnJvciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGVsZW1lbnQgdGhlIGlucHV0IGVsZW1lbnQgdG8gc2V0IHZhbGlkIHN0YXRlIHRvXHJcbiAgICogQHBhcmFtIHJlc3VsdCB0aGUgdmFsaWRhdGlvbiByZXN1bHRcclxuICAgKi9cclxuICByZW1vdmUoZWxlbWVudDogRWxlbWVudCwgcmVzdWx0OiBWYWxpZGF0ZVJlc3VsdCkge1xyXG4gICAgdGhpcy5nZXRQYXJlbnRFbGVtZW50KGVsZW1lbnQpXHJcbiAgICAgIC50aGVuKHRoaXMuc2V0U3RhdGUoZWxlbWVudCwgU3RhdGUudmFsaWQsIHJlc3VsdC5tZXNzYWdlKSk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=
