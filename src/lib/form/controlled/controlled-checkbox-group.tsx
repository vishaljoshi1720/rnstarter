import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { CheckboxGroupProps } from '@/components/molecules/checkbox-group';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { CheckboxGroup } from '@/components/molecules/checkbox-group';

export type ControlledCheckboxGroupProps<T extends FieldValues>
  = MakeControlled<T, CheckboxGroupProps, 'value' | 'onValueChange'>;

export function ControlledCheckboxGroup<T extends FieldValues>({
  name,
  control,
  rules,
  ...groupProps
}: ControlledCheckboxGroupProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <CheckboxGroup
      {...groupProps}
      value={field.value ?? []}
      onValueChange={(value) => {
        field.onChange(value);
        field.onBlur();
      }}
      error={fieldState.error?.message}
    />
  );
}

ControlledCheckboxGroup.displayName = 'ControlledCheckboxGroup';
