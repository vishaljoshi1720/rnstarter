import type { View } from 'react-native';
import type { ButtonProps } from './types';

import * as React from 'react';
import { ActivityIndicator } from '../activity-indicator';
import { Pressable } from '../pressable';
import { Text } from '../text';
import { DISABLED_CONFIG, SIZE_CONFIG, VARIANT_CONFIG } from './constants';
import { IconWrapper } from './icon-wrapper';
import { styles } from './styles';

export type { ButtonProps, ButtonSize, ButtonVariant } from './types';

export function Button({
  ref,
  label,
  loading = false,
  variant = 'default',
  disabled = false,
  size = 'default',
  fullWidth = true,
  leftIcon,
  rightIcon,
  style,
  testID,
  textStyle,
  accessibilityLabel,
  accessibilityHint,
  children,
  android_ripple,
  ...props
}: ButtonProps & { ref?: React.Ref<View | null> }) {
  // Resolve configuration from constants
  const variantConfig = disabled ? DISABLED_CONFIG : VARIANT_CONFIG[variant];
  const sizeConfig = SIZE_CONFIG[size];

  // Compose styles from resolved config values
  const containerStyle = [
    styles.base,
    variantConfig.containerStyle,
    sizeConfig.containerStyle,
    !fullWidth && styles.selfCenter,
    style,
  ];

  const labelStyle = [
    styles.label,
    variantConfig.labelStyle,
    sizeConfig.labelStyle,
    textStyle,
  ];

  const effectiveAccessibilityLabel = accessibilityLabel || label;

  return (
    <Pressable
      ref={ref}
      disabled={disabled || loading}
      style={containerStyle}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={effectiveAccessibilityLabel}
      accessibilityHint={accessibilityHint}
      accessibilityState={{
        disabled: disabled || loading,
        busy: loading,
      }}
      android_ripple={
        android_ripple || {
          color: variantConfig.rippleColor,
          borderless: false,
        }
      }
      {...props}
    >
      {/* Content layer with loading indicator inline */}
      <>
        {loading && (
          <ActivityIndicator
            size="small"
            color={variantConfig.indicatorColor}
            testID={testID ? `${testID}-activity-indicator` : undefined}
            accessibilityLabel={effectiveAccessibilityLabel ? `Loading ${effectiveAccessibilityLabel}` : 'Loading'}
            style={styles.loadingSpinner}
          />
        )}

        {children || (
          <>
            <IconWrapper position="left" size={sizeConfig.iconSize}>
              {leftIcon}
            </IconWrapper>

            {label && (
              <Text testID={testID ? `${testID}-label` : undefined} style={labelStyle}>
                {label}
              </Text>
            )}

            <IconWrapper position="right" size={sizeConfig.iconSize}>
              {rightIcon}
            </IconWrapper>
          </>
        )}
      </>
    </Pressable>
  );
}

Button.displayName = 'Button';
