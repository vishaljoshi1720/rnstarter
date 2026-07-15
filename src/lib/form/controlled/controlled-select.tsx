import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { SelectProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { Select } from '@/components';

export type ControlledSelectProps<T extends FieldValues>
  = MakeControlled<T, SelectProps, 'value' | 'onSelect'>;

/**
 * Controlled Select component for React Hook Form.
 * Automatically connects to form state and validation.
 *
 * @example
 * const form = useForm(schema);
 * <ControlledSelect
 *   name="country"
 *   control={form.control}
 *   label="Country"
 *   options={countryOptions}
 * />
 */
export function ControlledSelect<T extends FieldValues>({
  name,
  control,
  rules,
  ...selectProps
}: ControlledSelectProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <Select
      {...selectProps}
      value={field.value}
      onSelect={field.onChange}
      error={fieldState.error?.message}
    />
  );
}

ControlledSelect.displayName = 'ControlledSelect';
