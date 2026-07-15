import type { RadioButtonProps } from './types';

import * as React from 'react';
import { AppText, Pressable, View } from '@/components';
import { SIZE_CONFIG } from './constants';
import { styles } from './styles';

export type { RadioButtonProps, RadioButtonSize } from './types';

export function RadioButton({
  value,
  selected,
  onSelect,
  label,
  size = 'md',
  disabled = false,
  style,
  testID,
  accessibilityLabel,
  accessibilityHint,
  android_ripple,
  ...props
}: RadioButtonProps) {
  const sizeConfig = SIZE_CONFIG[size];

  const outerStyle = [
    styles.radioOuter,
    sizeConfig.outerStyle,
    selected && !disabled && styles.radioOuterSelected,
    disabled && styles.radioOuterDisabled,
  ];

  const dotStyle = [
    styles.radioDot,
    { transform: [{ scale: sizeConfig.dotScale }] },
    disabled && styles.radioDotDisabled,
  ];

  return (
    <Pressable
      onPress={() => !disabled && onSelect(value)}
      disabled={disabled}
      style={[styles.container, style]}
      testID={testID}
      accessibilityRole="radio"
      accessibilityLabel={accessibilityLabel || label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{
        disabled,
        checked: selected,
      }}
      android_ripple={android_ripple || { color: 'rgba(0, 0, 0, 0.05)', borderless: true }}
      {...props}
    >
      <View style={outerStyle}>
        {selected && <View style={dotStyle} />}
      </View>
      {label && (
        <AppText
          variant={size === 'sm' ? 'bodySmall' : size === 'lg' ? 'bodyLarge' : 'bodyMedium'}
          color={disabled ? 'disabled' : 'primary'}
        >
          {label}
        </AppText>
      )}
    </Pressable>
  );
}

RadioButton.displayName = 'RadioButton';
