import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { TimePickerInputProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { TimePickerInput } from '@/components';

export type ControlledTimePickerProps<T extends FieldValues>
  = MakeControlled<T, TimePickerInputProps, 'value' | 'onChange'>;

/**
 * Controlled TimePickerInput component integrated with React Hook Form.
 * Automatically handles validation, error display, and form state.
 *
 * Uses react-native-modal-datetime-picker for production-ready time selection.
 *
 * @example
 * const schema = z.object({
 *   meetingTime: z.date(),
 * });
 *
 * const form = useForm(schema);
 *
 * <ControlledTimePicker
 *   name="meetingTime"
 *   control={form.control}
 *   label="Meeting Time"
 *   placeholder="Select meeting time"
 *   is24Hour
 * />
 */
export function ControlledTimePicker<T extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: ControlledTimePickerProps<T>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <TimePickerInput
      {...props}
      value={value}
      onChange={onChange}
      error={error?.message}
    />
  );
}

ControlledTimePicker.displayName = 'ControlledTimePicker';
