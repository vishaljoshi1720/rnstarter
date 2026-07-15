import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { SelectProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { Select } from '@/components';

export type ControlledMultiSelectProps<T extends FieldValues>
  = MakeControlled<T, SelectProps, 'value' | 'onSelect' | 'multiple'>;

/**
 * Controlled MultiSelect component for React Hook Form.
 * Automatically connects to form state and validation.
 * Forces multiple mode.
 *
 * @example
 * const form = useForm(schema);
 * <ControlledMultiSelect
 *   name="interests"
 *   control={form.control}
 *   label="Interests"
 *   options={interestOptions}
 * />
 */
export function ControlledMultiSelect<T extends FieldValues>({
  name,
  control,
  rules,
  ...selectProps
}: ControlledMultiSelectProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <Select
      {...selectProps}
      multiple
      value={field.value ?? []}
      onSelect={field.onChange}
      error={fieldState.error?.message}
    />
  );
}

ControlledMultiSelect.displayName = 'ControlledMultiSelect';
