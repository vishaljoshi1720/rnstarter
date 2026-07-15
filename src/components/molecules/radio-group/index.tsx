import type { RadioGroupProps } from './types';

import * as React from 'react';
import { AppText, RadioButton, View } from '@/components';
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
  const showHelper = !error && helperText;

  return (
    <View
      style={[styles.wrapper, style]}
      testID={testID}
      accessibilityRole="radiogroup"
    >
      {label && (
        <AppText
          testID={testID ? `${testID}-label` : undefined}
          variant="labelLarge"
          color="primary"
          style={styles.label}
        >
          {label}
        </AppText>
      )}
      <View style={styles.container}>
        {options.map((option) => {
          const isSelected = value === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <View key={option.value} style={styles.option}>
              <RadioButton
                value={option.value}
                selected={isSelected}
                onSelect={onValueChange}
                disabled={isDisabled}
                testID={testID ? `${testID}-${option.value}` : undefined}
              />
              <AppText
                variant="bodyMedium"
                color={isDisabled ? 'disabled' : 'primary'}
                onPress={isDisabled ? undefined : () => onValueChange(option.value)}
              >
                {option.label}
              </AppText>
            </View>
          );
        })}
      </View>
      {error && (
        <AppText
          testID={testID ? `${testID}-error` : undefined}
          variant="bodySmall"
          color="error"
          style={styles.helperText}
        >
          {error}
        </AppText>
      )}
      {showHelper && (
        <AppText
          testID={testID ? `${testID}-helper` : undefined}
          variant="bodySmall"
          color="secondary"
          style={styles.helperText}
        >
          {helperText}
        </AppText>
      )}
    </View>
  );
}

RadioGroup.displayName = 'RadioGroup';
