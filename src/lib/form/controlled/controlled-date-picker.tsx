import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { DatePickerInputProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { DatePickerInput } from '@/components';

export type ControlledDatePickerProps<T extends FieldValues>
  = MakeControlled<T, DatePickerInputProps, 'value' | 'onChange'>;

/**
 * Controlled DatePickerInput component integrated with React Hook Form.
 * Automatically handles validation, error display, and form state.
 *
 * Uses react-native-modal-datetime-picker for production-ready date selection.
 *
 * @example
 * const schema = z.object({
 *   birthdate: z.date(),
 * });
 *
 * const form = useForm(schema);
 *
 * <ControlledDatePicker
 *   name="birthdate"
 *   control={form.control}
 *   label="Birth Date"
 *   placeholder="Select your birth date"
 *   maximumDate={new Date()}
 * />
 */
export function ControlledDatePicker<T extends FieldValues>({
  name,
  control,
  rules,
  ...props
}: ControlledDatePickerProps<T>) {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules,
  });

  return (
    <DatePickerInput
      {...props}
      value={value}
      onChange={onChange}
      error={error?.message}
    />
  );
}

ControlledDatePicker.displayName = 'ControlledDatePicker';
