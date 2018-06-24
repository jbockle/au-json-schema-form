
function* guidGenerator() {
  let d: number;
  let r: number;
  while (true) {
    yield "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
      r = (new Date().getTime() + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
}

export class Guid {
  private constructor() { }

  static generator: IterableIterator<string> = guidGenerator();

  static newGuid(): string {
    return this.generator.next().value;
  }
}
