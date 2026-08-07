import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { DateTimeFieldProps } from '@/components/molecules/date-time-field';

import * as React from 'react';
import { useController } from 'react-hook-form';
import { DateTimeField } from '@/components/molecules/date-time-field';

export type ControlledDatePickerProps<T extends FieldValues> = MakeControlled<
  T,
  Omit<DateTimeFieldProps, 'mode' | 'is24Hour'>,
  'value' | 'onChange'
>;

/**
 * Controlled date field for React Hook Form (DateTimeField mode="date").
 */
export function ControlledDatePicker<T extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: ControlledDatePickerProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <DateTimeField
      {...props}
      mode="date"
      value={field.value}
      onChange={(date) => {
        field.onChange(date);
        field.onBlur();
      }}
      error={fieldState.error?.message}
    />
  );
}

ControlledDatePicker.displayName = 'ControlledDatePicker';
