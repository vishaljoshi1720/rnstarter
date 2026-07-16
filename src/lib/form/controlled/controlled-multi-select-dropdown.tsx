import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';

import type { MultiSelectDropdownProps } from '@/components/molecules/dropdown';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { MultiSelectDropdown } from '@/components';

export type ControlledMultiSelectDropdownProps<T extends FieldValues> = MakeControlled<
  T,
  Omit<MultiSelectDropdownProps, 'value' | 'onChange'>
>;

export function ControlledMultiSelectDropdown<T extends FieldValues>({
  name,
  control,
  rules,
  ...dropdownProps
}: ControlledMultiSelectDropdownProps<T>) {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
  });

  return (
    <MultiSelectDropdown
      value={field.value ?? []}
      onChange={field.onChange}
      error={fieldState.error?.message}
      {...dropdownProps}
    />
  );
}

ControlledMultiSelectDropdown.displayName = 'ControlledMultiSelectDropdown';
