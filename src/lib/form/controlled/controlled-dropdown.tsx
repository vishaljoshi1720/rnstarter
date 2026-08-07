import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { DropdownProps } from '@/components/molecules/dropdown';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { Dropdown } from '@/components/molecules/dropdown';

export type ControlledDropdownProps<T extends FieldValues>
  = MakeControlled<T, DropdownProps, 'value' | 'onChange'>;

/**
 * Controlled Dropdown component for React Hook Form.
 * Calls onBlur after selection so `mode: 'onTouched'` validation runs.
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
      onChange={(value) => {
        field.onChange(value);
        field.onBlur();
      }}
      error={fieldState.error?.message}
    />
  );
}

ControlledDropdown.displayName = 'ControlledDropdown';
