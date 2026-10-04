export interface Token<T> {
  readonly key: symbol;
  readonly name: string;
  readonly _type?: T;
}
export const createToken = <T>(name: string): Token<T> => ({
  key: Symbol(name),
  name,
});

// The only cast is inside the container; registrations and callers stay typed.
export class Container {
  private readonly entries = new Map<symbol, () => unknown>();

  register<T>(token: Token<T>, value: T): void {
    this.add(token, () => value);
  }

  registerFactory<T>(token: Token<T>, factory: () => T): void {
    this.add(token, factory);
  }

  resolve<T>(token: Token<T>): T {
    const factory = this.entries.get(token.key);
    if (!factory) throw new Error('Missing dependency: ' + token.name);
    return factory() as T;
  }

  private add<T>(token: Token<T>, factory: () => unknown): void {
    if (this.entries.has(token.key))
      throw new Error('Duplicate dependency: ' + token.name);
    this.entries.set(token.key, factory);
  }
}
