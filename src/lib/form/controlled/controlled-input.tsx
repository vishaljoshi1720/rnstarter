import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { InputProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { Input } from '@/components';

export type ControlledInputProps<T extends FieldValues>
  = MakeControlled<T, InputProps, 'value' | 'onChangeText'>;

/**
 * Controlled Input component for React Hook Form.
 * Automatically connects to form state and validation.
 *
 * @example
 * const form = useForm(schema);
 * <ControlledInput
 *   name="email"
 *   control={form.control}
 *   label="Email"
 *   placeholder="Enter your email"
 * />
 */
export function ControlledInput<T extends FieldValues>({
  name,
  control,
  rules,
  ...inputProps
}: ControlledInputProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <Input
      {...inputProps}
      value={field.value ?? ''}
      onChangeText={field.onChange}
      onBlur={field.onBlur}
      error={fieldState.error?.message}
    />
  );
}

ControlledInput.displayName = 'ControlledInput';
