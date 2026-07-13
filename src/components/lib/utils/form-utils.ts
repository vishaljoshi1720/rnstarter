import type { FieldError } from 'react-hook-form';

/** Extract a human-readable error message from a react-hook-form FieldError. */
export function getFieldError(error: FieldError | undefined): string | undefined {
  return error?.message;
}
