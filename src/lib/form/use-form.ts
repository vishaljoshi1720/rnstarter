import type { UseFormProps, UseFormReturn } from 'react-hook-form';
import type { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm as useRHFForm } from 'react-hook-form';

/**
 * Wrapper around React Hook Form's useForm with Zod validation pre-configured.
 * Provides consistent form setup across the application with 2026 best practices.
 *
 * Default configuration optimized for production UX:
 * - mode: 'onTouched' - Validates after first blur, then onChange (balanced UX)
 * - reValidateMode: 'onChange' - Fast feedback after first error appears
 * - criteriaMode: 'firstError' - Shows one error at a time (performant)
 * - delayError: 500ms - Prevents error flicker during fast typing
 * - shouldFocusError: true - Auto-focus first error (accessibility)
 * - shouldUnregister: false - Preserves values in multi-step/conditional forms
 *
 * @example
 * const loginSchema = z.object({
 *   email: z.string().email(),
 *   password: z.string().min(6),
 * });
 *
 * const form = useForm(loginSchema, {
 *   defaultValues: { email: '', password: '' },
 * });
 *
 * @example Override validation mode for heavy forms
 * const form = useForm(schema, {
 *   mode: 'onBlur', // Less aggressive for complex validation
 * });
 */
export function useForm<TSchema extends z.ZodType<any, any, any>>(
  schema: TSchema,
  options?: Omit<UseFormProps<z.infer<TSchema>>, 'resolver'>,
): UseFormReturn<z.infer<TSchema>> {
  // @ts-expect-error - zodResolver type mismatch with react-hook-form generics
  return useRHFForm<z.infer<TSchema>>({
    // @ts-expect-error - zodResolver type mismatch with react-hook-form generics
    resolver: zodResolver(schema),

    // Validation timing - 2026 best practices
    mode: 'onTouched', // Validate after first blur, then onChange
    reValidateMode: 'onChange', // Fast feedback after first error

    // Error display
    criteriaMode: 'firstError', // Show one error at a time (performant)
    delayError: 500, // Prevent flicker during fast typing

    // Focus management
    shouldFocusError: true, // Auto-focus first error (accessibility)

    // Dynamic forms
    shouldUnregister: false, // Keep values when fields unmount (multi-step, conditional)

    // Allow overrides
    ...options,
  });
}
