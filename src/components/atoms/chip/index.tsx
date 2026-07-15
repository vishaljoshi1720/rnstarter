import type { ChipProps } from './types';

import * as React from 'react';
import { AppText, Pressable, View } from '@/components';
import { DISABLED_CONFIG, SIZE_CONFIG, VARIANT_CONFIG } from './constants';
import { styles } from './styles';

export type { ChipProps, ChipSize, ChipVariant } from './types';

export function Chip({
  label,
  variant = 'default',
  size = 'md',
  selected = false,
  disabled = false,
  onPress,
  onClose,
  leftIcon,
  style,
  textStyle,
  testID,
  accessibilityLabel,
  accessibilityHint,
  android_ripple,
  ...props
}: ChipProps) {
  const variantConfig = disabled ? DISABLED_CONFIG : VARIANT_CONFIG[variant];
  const sizeConfig = SIZE_CONFIG[size];

  const containerStyle = [
    styles.base,
    variantConfig.containerStyle,
    sizeConfig.containerStyle,
    selected && !disabled && styles.selected,
    style,
  ];

  const labelStyle = [variantConfig.labelStyle, textStyle];

  const textVariant = size === 'sm' ? 'labelSmall' : size === 'lg' ? 'labelLarge' : 'labelMedium';

  const content = (
    <>
      {leftIcon && (
        <View style={styles.iconWrapper}>
          {leftIcon}
        </View>
      )}
      <AppText variant={textVariant} style={labelStyle}>
        {label}
      </AppText>
      {onClose && (
        <Pressable
          onPress={onClose}
          disabled={disabled}
          style={styles.closeButton}
          testID={testID ? `${testID}-close` : undefined}
          accessibilityRole="button"
          accessibilityLabel="Remove"
          hitSlop={8}
        >
          <AppText style={[styles.closeIcon, variantConfig.labelStyle]}>✕</AppText>
        </Pressable>
      )}
    </>
  );

  if (!onPress && !onClose) {
    return (
      <View
        style={containerStyle}
        testID={testID}
        accessibilityRole="text"
        accessibilityLabel={accessibilityLabel || label}
      >
        {content}
      </View>
    );
  }

  return (
    <Pressable
      disabled={disabled || !onPress}
      onPress={onPress}
      style={containerStyle}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{
        disabled,
        selected,
      }}
      android_ripple={android_ripple || { color: variantConfig.rippleColor }}
      {...props}
    >
      {content}
    </Pressable>
  );
}

Chip.displayName = 'Chip';
