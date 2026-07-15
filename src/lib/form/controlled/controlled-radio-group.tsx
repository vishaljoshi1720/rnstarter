import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { RadioGroupProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { RadioGroup } from '@/components';

export type ControlledRadioGroupProps<T extends FieldValues>
  = MakeControlled<T, RadioGroupProps, 'value' | 'onValueChange'>;

/**
 * Controlled RadioGroup component for React Hook Form.
 * Automatically connects to form state and validation.
 *
 * @example
 * const form = useForm(schema);
 * <ControlledRadioGroup
 *   name="gender"
 *   control={form.control}
 *   label="Gender"
 *   options={[
 *     { value: 'male', label: 'Male' },
 *     { value: 'female', label: 'Female' },
 *   ]}
 * />
 */
export function ControlledRadioGroup<T extends FieldValues>({
  name,
  control,
  rules,
  ...radioGroupProps
}: ControlledRadioGroupProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <RadioGroup
      {...radioGroupProps}
      value={field.value}
      onValueChange={field.onChange}
      error={fieldState.error?.message}
    />
  );
}

ControlledRadioGroup.displayName = 'ControlledRadioGroup';
