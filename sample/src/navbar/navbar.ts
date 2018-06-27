import { bindable, DOM } from "aurelia-framework";

export class Navbar {
  themes = [
    "cerulean",
    "cosmo",
    "cyborg",
    "darkly",
    "flatly",
    "journal",
    "litera",
    "lumen",
    "lux",
    "materia",
    "minty",
    "pulse",
    "sandstone",
    "simplex",
    "sketchy",
    "slate",
    "solar",
    "spacelab",
    "superhero",
    "united",
    "yeti"
  ];

  current: string = "minty";

  themeSelected(theme) {
    this.current = theme;
    DOM
      .getElementById('linkStylesheet')
      .setAttribute("href", `css/${theme}/bootstrap.min.css`);
  }
}
