import type { View } from 'react-native';
import type { AppTextColor } from '../text';
import type { ButtonProps } from './types';

import * as React from 'react';
import { useTheme } from '@/theme';
import { ActivityIndicator } from '../activity-indicator';
import { Pressable } from '../pressable';
import { AppText } from '../text';
import { COLOR_RESOLVER } from '../text/constants';
import { DISABLED_CONFIG, SIZE_CONFIG, VARIANT_CONFIG } from './constants';
import { IconWrapper } from './icon-wrapper';
import { styles } from './styles';

export type { ButtonProps, ButtonSize, ButtonVariant } from './types';

/** Live theme color keys per variant — never cache Unistyles color refs. */
const VARIANT_LABEL_COLOR: Record<
  NonNullable<ButtonProps['variant']>,
  AppTextColor
> = {
  default: 'onBrand',
  secondary: 'onAccent',
  outline: 'primary',
  destructive: 'onAccent',
  ghost: 'primary',
  link: 'link',
};

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
  const { theme } = useTheme();
  const variantConfig = disabled ? DISABLED_CONFIG : VARIANT_CONFIG[variant];
  const sizeConfig = SIZE_CONFIG[size];
  const labelColor: AppTextColor = disabled
    ? 'disabled'
    : VARIANT_LABEL_COLOR[variant];
  const indicatorColor = COLOR_RESOLVER[labelColor](theme.colors);

  const containerStyle = [
    styles.base,
    variantConfig.containerStyle,
    sizeConfig.containerStyle,
    !fullWidth && styles.selfCenter,
    style,
  ];

  const labelStyle = [
    styles.label,
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
      <>
        {loading && (
          <ActivityIndicator
            size="small"
            color={indicatorColor}
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
              <AppText
                testID={testID ? `${testID}-label` : undefined}
                variant={size === 'lg' ? 'labelLarge' : size === 'sm' ? 'labelSmall' : 'labelMedium'}
                color={labelColor}
                style={labelStyle}
              >
                {label}
              </AppText>
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
