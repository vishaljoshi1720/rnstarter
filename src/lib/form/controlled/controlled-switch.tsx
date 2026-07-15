import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { SwitchProps } from '@/components';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { Switch } from '@/components';

export type ControlledSwitchProps<T extends FieldValues>
  = MakeControlled<T, SwitchProps, 'value' | 'onValueChange'>;

/**
 * Controlled Switch component for React Hook Form.
 * Automatically connects to form state and validation.
 *
 * @example
 * const form = useForm(schema);
 * <ControlledSwitch
 *   name="rememberMe"
 *   control={form.control}
 *   label="Remember me"
 * />
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
      onValueChange={field.onChange}
    />
  );
}

ControlledSwitch.displayName = 'ControlledSwitch';
