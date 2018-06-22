export class GlobalOptions {
  renderer: any;
  templates: string[];

  constructor(renderer: any, templates: string[]) {
    this.renderer = renderer;
    this.templates = templates;
  }
}
