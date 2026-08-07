import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { SwitchProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { Switch } from '@/components';

export type ControlledSwitchProps<T extends FieldValues>
  = MakeControlled<T, SwitchProps, 'value' | 'onValueChange'>;

/**
 * Controlled Switch for React Hook Form.
 * Touches the field on toggle so `mode: 'onTouched'` validation works.
 */
export function ControlledSwitch<T extends FieldValues>({
  name,
  control,
  rules,
  ...switchProps
}: ControlledSwitchProps<T>) {
  const { field } = useController({ name, control, rules });

  return (
    <Switch
      {...switchProps}
      value={field.value ?? false}
      onValueChange={(value) => {
        field.onChange(value);
        field.onBlur();
      }}
    />
  );
}

ControlledSwitch.displayName = 'ControlledSwitch';
