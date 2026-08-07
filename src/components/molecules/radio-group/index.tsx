import type { RadioGroupProps } from './types';

import * as React from 'react';
import { RadioButton } from '../../atoms/radio-button';
import { View } from '../../atoms/view';
import { Field } from '../field';
import { styles } from './styles';

export type { RadioGroupProps, RadioOption } from './types';

export function RadioGroup({
  value,
  onValueChange,
  options,
  label,
  error,
  helperText,
  disabled = false,
  style,
  testID,
}: RadioGroupProps) {
  return (
    <Field
      label={label}
      error={error}
      helperText={helperText}
      style={style}
      testID={testID}
    >
      <View
        style={styles.container}
        accessibilityRole="radiogroup"
      >
        {options.map((option) => {
          const isSelected = value === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <RadioButton
              key={option.value}
              value={option.value}
              selected={isSelected}
              onSelect={onValueChange}
              label={option.label}
              disabled={isDisabled}
              accessibilityLabel={option.label}
              testID={testID ? `${testID}-${option.value}` : undefined}
              style={styles.option}
            />
          );
        })}
      </View>
    </Field>
  );
}

RadioGroup.displayName = 'RadioGroup';
