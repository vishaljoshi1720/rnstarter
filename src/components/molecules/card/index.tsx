import type { CardProps } from './types';

import * as React from 'react';
import { Pressable, View } from '@/components';
import { VARIANT_CONFIG } from './constants';
import { styles } from './styles';

export type { CardProps, CardVariant } from './types';

export function Card({
  variant = 'default',
  onPress,
  disabled = false,
  style,
  children,
  testID,
  accessibilityLabel,
  accessibilityHint,
  android_ripple,
  ...props
}: CardProps) {
  const variantConfig = VARIANT_CONFIG[variant];

  const containerStyle = [
    styles.base,
    variantConfig.containerStyle,
    disabled && styles.disabled,
    style,
  ];

  if (!onPress) {
    return (
      <View
        style={containerStyle}
        testID={testID}
        accessibilityLabel={accessibilityLabel}
      >
        {children}
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={containerStyle}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      android_ripple={android_ripple || { color: variantConfig.rippleColor }}
      {...props}
    >
      {children}
    </Pressable>
  );
}

Card.displayName = 'Card';
