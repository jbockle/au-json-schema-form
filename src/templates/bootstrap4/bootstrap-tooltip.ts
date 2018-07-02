import { customAttribute, inject } from "aurelia-framework";
import * as $ from "jquery";
import "bootstrap";

@customAttribute("bootstrap-tooltip")
@inject(Element)
export class BootstrapTooltip {
  constructor(public element: Element) {
    this.element = element;
  }

  bind() {
    this.element.setAttribute("data-toggle", "tooltip");
    $(this.element).tooltip();
  }

  unbind() {
    $(this.element).tooltip("dispose");
  }
}
