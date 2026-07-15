import type { FieldErrors, FieldValues, UseFormReturn } from 'react-hook-form';

/**
 * Extract the first error message from form errors object.
 * Useful for displaying a single error message at the form level.
 *
 * @param errors - Form errors from useForm
 * @returns First error message found, or undefined
 */
export function getFirstError(errors: FieldErrors): string | undefined {
  const firstKey = Object.keys(errors)[0];
  if (!firstKey)
    return undefined;

  const error = errors[firstKey];
  return error?.message as string | undefined;
}

/**
 * Reset form with optional delay (useful before navigation).
 *
 * @param form - Form instance from useForm
 * @param delay - Delay in milliseconds before reset (default: 0)
 */
export function resetFormDelayed<T extends FieldValues>(form: UseFormReturn<T>, delay = 0): void {
  if (delay === 0) {
    form.reset();
    return;
  }

  setTimeout(() => {
    form.reset();
  }, delay);
}

/**
 * Common validation rules and patterns.
 * Use these with Zod schemas for consistent validation across the app.
 */
export const validationRules = {
  email: {
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: 'Please enter a valid email address',
  },
  phone: {
    pattern: /^\+?[1-9]\d{1,14}$/,
    message: 'Please enter a valid phone number',
  },
  url: {
    pattern: /^https?:\/\/.+/,
    message: 'Please enter a valid URL',
  },
  alphanumeric: {
    pattern: /^[a-z0-9]+$/i,
    message: 'Only letters and numbers are allowed',
  },
  noSpecialChars: {
    pattern: /^[a-z0-9\s]+$/i,
    message: 'Special characters are not allowed',
  },
} as const;

/**
 * Check if form has any errors.
 *
 * @param errors - Form errors from useForm
 * @returns True if form has errors
 */
export function hasErrors(errors: FieldErrors): boolean {
  return Object.keys(errors).length > 0;
}

/**
 * Get error count from form errors.
 *
 * @param errors - Form errors from useForm
 * @returns Number of errors
 */
export function getErrorCount(errors: FieldErrors): number {
  return Object.keys(errors).length;
}
