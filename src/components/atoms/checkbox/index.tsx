import type { CheckboxProps } from './types';

import { Check } from 'lucide-react-native';
import * as React from 'react';
import { useTheme } from '@/theme';
import { Pressable } from '../pressable';
import { AppText } from '../text';
import { View } from '../view';
import { SIZE_CONFIG } from './constants';
import { styles } from './styles';

export type { CheckboxProps, CheckboxSize } from './types';

export function Checkbox({
  checked,
  onCheckedChange,
  label,
  indeterminate = false,
  size = 'md',
  disabled = false,
  testID,
  accessibilityLabel,
  accessibilityHint,
}: CheckboxProps) {
  const { theme } = useTheme();
  const sizeConfig = SIZE_CONFIG[size];
  const showCheck = checked && !indeterminate;
  const showDash = indeterminate;

  const boxStyle = [
    styles.box,
    sizeConfig.boxStyle,
    (checked || indeterminate) && !disabled && styles.boxChecked,
    disabled && styles.boxDisabled,
  ];

  return (
    <Pressable
      onPress={() => !disabled && onCheckedChange(!checked)}
      disabled={disabled}
      style={styles.container}
      testID={testID}
      accessibilityRole="checkbox"
      accessibilityLabel={accessibilityLabel || label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{
        disabled,
        checked: indeterminate ? 'mixed' : checked,
      }}
      android_ripple={{ color: 'rgba(0, 0, 0, 0.05)', borderless: true }}
    >
      <View style={boxStyle}>
        {showCheck
          ? (
              <Check
                size={sizeConfig.iconSize}
                color={theme.colors.text.onBrand}
                strokeWidth={3}
              />
            )
          : null}
        {showDash ? <View style={styles.dash} /> : null}
      </View>
      {label
        ? (
            <AppText
              variant={size === 'sm' ? 'bodySmall' : size === 'lg' ? 'bodyLarge' : 'bodyMedium'}
              color={disabled ? 'disabled' : 'primary'}
              style={styles.label}
            >
              {label}
            </AppText>
          )
        : null}
    </Pressable>
  );
}

Checkbox.displayName = 'Checkbox';
