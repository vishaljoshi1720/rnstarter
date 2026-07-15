import type { BadgeProps } from './types';

import * as React from 'react';
import { AppText, View } from '@/components';
import { SIZE_CONFIG, VARIANT_CONFIG } from './constants';
import { styles } from './styles';

export type { BadgeProps, BadgeSize, BadgeVariant } from './types';

export function Badge({
  label,
  variant = 'default',
  size = 'md',
  dot = false,
  style,
  textStyle,
  testID,
  accessibilityLabel,
}: BadgeProps) {
  const variantConfig = VARIANT_CONFIG[variant];
  const sizeConfig = SIZE_CONFIG[size];

  const containerStyle = [
    styles.base,
    variantConfig.containerStyle,
    sizeConfig.containerStyle,
    style,
  ];

  const labelStyle = [variantConfig.labelStyle, textStyle];

  const textVariant = size === 'sm' ? 'labelSmall' : size === 'lg' ? 'labelLarge' : 'labelMedium';

  return (
    <View
      style={containerStyle}
      testID={testID}
      accessibilityRole="text"
      accessibilityLabel={accessibilityLabel || label}
    >
      {dot && <View style={[styles.dot, variantConfig.dotStyle]} />}
      <AppText variant={textVariant} style={labelStyle}>
        {label}
      </AppText>
    </View>
  );
}

Badge.displayName = 'Badge';
