import type { View } from 'react-native';
import type { ButtonProps } from './types';

import * as React from 'react';
import { useAppTheme } from '@/theme';
import { ActivityIndicator } from '../activity-indicator';
import { Pressable } from '../pressable';
import { Text } from '../text';
import { styles } from './styles';
import { ButtonSize, ButtonVariant } from './types';

export { ButtonSize, ButtonVariant } from './types';
export type { ButtonProps } from './types';

export function Button({
  ref,
  label: text,
  loading = false,
  variant = ButtonVariant.Default,
  disabled = false,
  size = ButtonSize.Default,
  fullWidth = true,
  style,
  testID,
  textStyle,
  ...props
}: ButtonProps & { ref?: React.RefObject<View | null> }) {
  const { theme } = useAppTheme();

  const containerStyle = [
    styles.base,
    variant === ButtonVariant.Default && styles.variantDefault,
    variant === ButtonVariant.Secondary && styles.variantSecondary,
    variant === ButtonVariant.Outline && styles.variantOutline,
    variant === ButtonVariant.Destructive && styles.variantDestructive,
    variant === ButtonVariant.Ghost && styles.variantGhost,
    variant === ButtonVariant.Link && styles.variantLink,
    size === ButtonSize.Lg && styles.sizeLg,
    size === ButtonSize.Sm && styles.sizeSm,
    size === ButtonSize.Icon && styles.sizeIcon,
    disabled && styles.disabled,
    !fullWidth && styles.selfCenter,
    style,
  ];

  const labelStyle = [
    styles.label,
    variant === ButtonVariant.Default && styles.labelDefault,
    variant === ButtonVariant.Secondary && styles.labelSecondary,
    variant === ButtonVariant.Outline && styles.labelOutline,
    variant === ButtonVariant.Destructive && styles.labelDestructive,
    variant === ButtonVariant.Ghost && styles.labelGhost,
    variant === ButtonVariant.Link && styles.labelLink,
    size === ButtonSize.Lg && styles.labelLg,
    size === ButtonSize.Sm && styles.labelSm,
    disabled && styles.labelDisabled,
    textStyle,
  ];

  const indicatorColor = disabled
    ? theme.colors.neutral400
    : variant === ButtonVariant.Default
      ? theme.colors.buttonDefaultText
      : theme.colors.bodyText;

  return (
    <Pressable
      disabled={disabled || loading}
      style={containerStyle}
      {...props}
      ref={ref}
      testID={testID}
    >
      {props.children
        ? (
            props.children
          )
        : (
            <>
              {loading
                ? (
                    <ActivityIndicator
                      size="small"
                      color={indicatorColor}
                      testID={testID ? `${testID}-activity-indicator` : undefined}
                    />
                  )
                : (
                    <Text
                      testID={testID ? `${testID}-label` : undefined}
                      style={labelStyle}
                    >
                      {text}
                    </Text>
                  )}
            </>
          )}
    </Pressable>
  );
}
