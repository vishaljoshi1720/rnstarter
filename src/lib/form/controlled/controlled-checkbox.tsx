import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { CheckboxProps } from '@/components/atoms/checkbox';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { Checkbox } from '@/components/atoms/checkbox';

export type ControlledCheckboxProps<T extends FieldValues>
  = MakeControlled<T, CheckboxProps, 'checked' | 'onCheckedChange'>;

export function ControlledCheckbox<T extends FieldValues>({
  name,
  control,
  rules,
  ...checkboxProps
}: ControlledCheckboxProps<T>) {
  const { field } = useController({ name, control, rules });

  return (
    <Checkbox
      {...checkboxProps}
      checked={Boolean(field.value)}
      onCheckedChange={(checked) => {
        field.onChange(checked);
        field.onBlur();
      }}
    />
  );
}

ControlledCheckbox.displayName = 'ControlledCheckbox';
