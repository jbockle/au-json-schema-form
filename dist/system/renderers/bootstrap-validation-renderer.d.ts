import { RenderInstruction, ValidateResult, ValidationRenderer } from "aurelia-validation";
declare enum State {
    valid = "is-valid",
    invalid = "is-invalid"
}
export declare class BootstrapValidationRenderer implements ValidationRenderer {
    private logger;
    private messageSelector;
    private parentSelector;
    /**
     * BootrapValidationRenderer - Sets validation state/error messages on bootstrap v4 form-groups
     */
    constructor();
    /**
     * renderer entry point
     * @param instruction list of instructions from validation controller
     */
    render(instruction: RenderInstruction): void;
    /**
     *
     * @param element the element to remove/add class from
     * @param state the state to set
     */
    setClass(element: Element, state: State): void;
    /**
     * Adds className to element if it is not already added
     * @param element the element to add class to
     * @param className the class name to add
     */
    addClass(element: Element, className: State): void;
    /**
     * Removes className from element if it is present
     * @param element the element to remove class from
     * @param className the class name to remove
     */
    removeClass(element: Element, className: State): void;
    /**
     * finds closest parent element with parentSelector class
     * @param element the element to find parent from
     */
    getParentElement(element: Element): any;
    /**
     * sets element class(state) and error message
     * @param element the input element
     * @param state the state to set it to
     * @param message the error message
     */
    setState(element: Element, state: State, message: string): (parent: Element) => void;
    /**
     * adds invalid state to input element and adds error message
     * @param element the input element to set invalid state to
     * @param result the validation result
     */
    add(element: Element, result: ValidateResult): void;
    /**
     * adds valid state to input element and removes error message
     * @param element the input element to set valid state to
     * @param result the validation result
     */
    remove(element: Element, result: ValidateResult): void;
}
export {};
