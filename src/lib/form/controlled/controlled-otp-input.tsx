import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { OTPInputProps } from '@/components/molecules/otp-input';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { Field } from '@/components/molecules/field';
import { OTPInput } from '@/components/molecules/otp-input';

export type ControlledOTPInputProps<T extends FieldValues>
  = MakeControlled<T, OTPInputProps, 'value' | 'onChangeText'> & {
    label?: string;
    helperText?: string;
  };

/**
 * Controlled OTPInput for React Hook Form.
 * Errors surface via Field message only — cell borders stay neutral
 * (matches common OTP UX: WhatsApp / banking apps).
 */
export function ControlledOTPInput<T extends FieldValues>({
  name,
  control,
  rules,
  label,
  helperText,
  onFilled,
  ...otpInputProps
}: ControlledOTPInputProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <Field
      label={label}
      error={fieldState.error?.message}
      helperText={helperText}
      testID={otpInputProps.testID}
    >
      <OTPInput
        {...otpInputProps}
        value={field.value ?? ''}
        onChangeText={field.onChange}
        onFilled={(text) => {
          onFilled?.(text);
        }}
      />
    </Field>
  );
}

ControlledOTPInput.displayName = 'ControlledOTPInput';
