import type { AppError } from './errors/AppError';

// A caller must handle either a value or an error, never an ambiguous combination.
export type Result<T> = { ok: true; value: T } | { ok: false; error: AppError };
