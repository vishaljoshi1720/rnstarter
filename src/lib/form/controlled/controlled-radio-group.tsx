import type { FieldValues } from 'react-hook-form';
import type { MakeControlled } from './types';
import type { RadioGroupProps } from '@/components/molecules/radio-group';
import * as React from 'react';
import { useController } from 'react-hook-form';
import { RadioGroup } from '@/components/molecules/radio-group';

export type ControlledRadioGroupProps<T extends FieldValues>
  = MakeControlled<T, RadioGroupProps, 'value' | 'onValueChange'>;

/**
 * Controlled RadioGroup for React Hook Form.
 * Touches the field on change so `mode: 'onTouched'` validation works.
 */
export function ControlledRadioGroup<T extends FieldValues>({
  name,
  control,
  rules,
  ...radioGroupProps
}: ControlledRadioGroupProps<T>) {
  const { field, fieldState } = useController({ name, control, rules });

  return (
    <RadioGroup
      {...radioGroupProps}
      value={field.value}
      onValueChange={(value) => {
        field.onChange(value);
        field.onBlur();
      }}
      error={fieldState.error?.message}
    />
  );
}

ControlledRadioGroup.displayName = 'ControlledRadioGroup';
