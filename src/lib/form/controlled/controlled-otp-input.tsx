import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { OTPInputProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { OTPInput } from '@/components';

export type ControlledOTPInputProps<T extends FieldValues>
  = MakeControlled<T, OTPInputProps, 'value' | 'onChangeText'>;

/**
 * Controlled OTPInput component for React Hook Form.
 * Automatically connects to form state and validation.
 *
 * @example
 * const form = useForm(schema);
 * <ControlledOTPInput
 *   name="otp"
 *   control={form.control}
 *   length={6}
 * />
 */
export function ControlledOTPInput<T extends FieldValues>({
  name,
  control,
  rules,
  ...otpInputProps
}: ControlledOTPInputProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <OTPInput
      {...otpInputProps}
      value={field.value ?? ''}
      onChangeText={field.onChange}
      error={Boolean(fieldState.error)}
    />
  );
}

ControlledOTPInput.displayName = 'ControlledOTPInput';
