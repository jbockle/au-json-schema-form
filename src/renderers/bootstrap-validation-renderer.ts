import { RenderInstruction, ValidateResult, ValidationRenderer } from "aurelia-validation";

enum State {
  valid = "is-valid",
  invalid = "is-invalid"
}

export class BootstrapValidationRenderer implements ValidationRenderer {
  private messageSelector: string = ".invalid-feedback";
  private parentSelector: string = ".form-group";

  /**
   * BootrapValidationRenderer - Sets validation state/error messages on bootstrap v4 form-groups
   */
  // tslint:disable-next-line:no-empty
  constructor() { }

  /**
   * renderer entry point
   * @param instruction list of instructions from validation controller
   */
  render(instruction: RenderInstruction) {
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
  setClass(element: Element, state: State) {
    const remove = state === State.valid ? State.invalid : State.valid;
    this.removeClass(element, remove);
    this.addClass(element, state);
  }

  /**
   * Adds className to element if it is not already added
   * @param element the element to add class to
   * @param className the class name to add
   */
  addClass(element: Element, className: State) {
    if (!element.classList.contains(className)) {
      element.classList.add(className);
    }
  }

  /**
   * Removes className from element if it is present
   * @param element the element to remove class from
   * @param className the class name to remove
   */
  removeClass(element: Element, className: State) {
    if (element.classList.contains(className)) {
      element.classList.remove(className);
    }
  }

  /**
   * finds closest parent element with parentSelector class
   * @param element the element to find parent from
   */
  getParentElement(element: Element) {
    return Promise.resolve(element.closest(this.parentSelector));
  }

  /**
   * sets element class(state) and error message
   * @param element the input element
   * @param state the state to set it to
   * @param message the error message
   */
  setState(element: Element, state: State, message: string) {
    return (parent: Element) => {
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
  add(element: Element, result: ValidateResult) {
    this.getParentElement(element)
      .then(this.setState(element, State.invalid, result.message));
  }

  /**
   * adds valid state to input element and removes error message
   * @param element the input element to set valid state to
   * @param result the validation result
   */
  remove(element: Element, result: ValidateResult) {
    this.getParentElement(element)
      .then(this.setState(element, State.valid, result.message));
  }
}
