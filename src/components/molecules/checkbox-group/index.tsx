import type { CheckboxGroupProps, CheckboxOption } from './types';

import * as React from 'react';
import { Checkbox } from '@/components/atoms/checkbox';
import { View } from '@/components/atoms/view';
import { Field } from '../field';
import { styles } from './styles';

export type { CheckboxGroupProps, CheckboxOption } from './types';

function toggleValue(values: string[], next: string, checked: boolean) {
  if (checked)
    return values.includes(next) ? values : [...values, next];
  return values.filter(v => v !== next);
}

/**
 * Multi-select checkbox list. For a single boolean, use `Checkbox` directly.
 */
export function CheckboxGroup({
  value = [],
  onValueChange,
  options,
  label,
  error,
  helperText,
  disabled = false,
  size = 'md',
  style,
  testID,
}: CheckboxGroupProps) {
  return (
    <Field
      label={label}
      error={error}
      helperText={helperText}
      testID={testID}
      style={style}
    >
      <View
        style={styles.list}
        accessibilityRole="list"
      >
        {options.map((option: CheckboxOption) => {
          const selected = value.includes(option.value);
          return (
            <Checkbox
              key={option.value}
              checked={selected}
              onCheckedChange={(checked) => {
                onValueChange(toggleValue(value, option.value, checked));
              }}
              label={option.label}
              disabled={disabled || option.disabled}
              size={size}
              testID={testID ? `${testID}-${option.value}` : undefined}
            />
          );
        })}
      </View>
    </Field>
  );
}

CheckboxGroup.displayName = 'CheckboxGroup';
