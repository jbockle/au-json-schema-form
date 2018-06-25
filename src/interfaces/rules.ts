export interface IRules {
  type: string;

  register(): void;

  add(): void;

  bind(ctrl): void;
}
