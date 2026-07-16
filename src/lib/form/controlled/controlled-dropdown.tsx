import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { DropdownProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { Dropdown } from '@/components';

export type ControlledDropdownProps<T extends FieldValues>
  = MakeControlled<T, DropdownProps, 'value' | 'onChange'>;

/**
 * Controlled Dropdown component for React Hook Form.
 * Automatically connects to form state and validation.
 *
 * @example
 * const form = useForm(schema);
 * <ControlledDropdown
 *   name="country"
 *   control={form.control}
 *   data={countries}
 *   label="Country"
 * />
 */
export function ControlledDropdown<T extends FieldValues>({
  name,
  control,
  rules,
  ...dropdownProps
}: ControlledDropdownProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <Dropdown
      {...dropdownProps}
      value={field.value}
      onChange={field.onChange}
      error={fieldState.error?.message}
    />
  );
}

ControlledDropdown.displayName = 'ControlledDropdown';
