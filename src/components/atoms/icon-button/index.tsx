import type { View } from 'react-native';
import type { IconButtonProps } from './types';

import * as React from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { Pressable } from '../pressable';
import { DISABLED_CONFIG, SIZE_CONFIG, VARIANT_CONFIG } from './constants';
import { styles } from './styles';

export type { IconButtonProps, IconButtonSize, IconButtonVariant } from './types';

export function IconButton({
  ref,
  icon,
  variant = 'default',
  size = 'md',
  loading = false,
  disabled = false,
  tooltip,
  accessibilityLabel,
  accessibilityHint,
  testID,
  style,
  android_ripple,
  ...props
}: IconButtonProps & { ref?: React.Ref<View | null> }) {
  const variantConfig = disabled ? DISABLED_CONFIG : VARIANT_CONFIG[variant];
  const sizeConfig = SIZE_CONFIG[size];

  const containerStyle = React.useMemo(() => StyleSheet.flatten([
    styles.base,
    variantConfig.containerStyle,
    sizeConfig.containerStyle,
    style,
  ]), [variantConfig, sizeConfig, style]);

  return (
    <Pressable
      ref={ref}
      disabled={disabled || loading}
      style={containerStyle}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint || tooltip}
      accessibilityState={{
        disabled: disabled || loading,
        busy: loading,
      }}
      android_ripple={android_ripple || { color: variantConfig.rippleColor }}
      {...props}
    >
      {loading ? <ActivityIndicator size="small" /> : icon}
    </Pressable>
  );
}

IconButton.displayName = 'IconButton';
