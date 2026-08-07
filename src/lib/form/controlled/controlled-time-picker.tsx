import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { DateTimeFieldProps } from '@/components/molecules/date-time-field';

import * as React from 'react';
import { useController } from 'react-hook-form';
import { DateTimeField } from '@/components/molecules/date-time-field';

export type ControlledTimePickerProps<T extends FieldValues> = MakeControlled<
  T,
  Omit<DateTimeFieldProps, 'mode' | 'minimumDate' | 'maximumDate'>,
  'value' | 'onChange'
>;

/**
 * Controlled time field for React Hook Form (DateTimeField mode="time").
 */
export function ControlledTimePicker<T extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: ControlledTimePickerProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <DateTimeField
      {...props}
      mode="time"
      value={field.value}
      onChange={(date) => {
        field.onChange(date);
        field.onBlur();
      }}
      error={fieldState.error?.message}
    />
  );
}

ControlledTimePicker.displayName = 'ControlledTimePicker';
