export class AppError extends Error {
  constructor(
    message: string,
    readonly code: string = 'UNKNOWN',
    readonly originalCause?: unknown,
  ) {
    super(message);
    this.name = 'AppError';
  }
}
