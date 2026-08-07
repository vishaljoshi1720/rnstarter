import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { PhoneInputProps } from '@/components/molecules/phone-input';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { PhoneInput } from '@/components/molecules/phone-input';

export type ControlledPhoneInputProps<T extends FieldValues>
  = MakeControlled<T, PhoneInputProps, 'value' | 'onChangeText'>;

/**
 * Controlled PhoneInput for React Hook Form.
 * Optional heavy dep — import from this file, not `@/lib/form` barrel.
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
      onChangeText={(text) => {
        field.onChange(text);
      }}
      onBlur={field.onBlur}
      error={fieldState.error?.message}
    />
  );
}

ControlledPhoneInput.displayName = 'ControlledPhoneInput';
