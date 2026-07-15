import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { PhoneInputProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { PhoneInput } from '@/components';

export type ControlledPhoneInputProps<T extends FieldValues>
  = MakeControlled<T, PhoneInputProps, 'value' | 'onChangeText'>;

/**
 * Controlled PhoneInput component for React Hook Form.
 * Automatically connects to form state and validation.
 *
 * @example
 * const form = useForm(schema);
 * <ControlledPhoneInput
 *   name="phone"
 *   control={form.control}
 *   label="Phone Number"
 * />
 */
export function ControlledPhoneInput<T extends FieldValues>({
  name,
  control,
  rules,
  ...phoneInputProps
}: ControlledPhoneInputProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <PhoneInput
      {...phoneInputProps}
      value={field.value ?? ''}
      onChangeText={field.onChange}
      error={fieldState.error?.message}
    />
  );
}

ControlledPhoneInput.displayName = 'ControlledPhoneInput';
