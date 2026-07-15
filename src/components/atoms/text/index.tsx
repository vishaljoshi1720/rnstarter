import type { Text as RNText } from 'react-native';
import type { AppTextProps } from './types';

import * as React from 'react';
import { I18nManager, Text as NNText } from 'react-native';
import { translate } from '@/lib/i18n';
import { useTheme } from '@/theme';
import { COLOR_RESOLVER, VARIANT_CONFIG } from './constants';

export type { AppTextColor, AppTextProps, AppTextVariant } from './types';

export function AppText({
  ref,
  variant = 'bodyMedium',
  color = 'primary',
  style,
  tx,
  children,
  testID,
  accessibilityLabel,
  accessibilityHint,
  ...props
}: AppTextProps & { ref?: React.Ref<RNText | null> }) {
  // Always read live theme — Unistyles style refs nested in COLOR_CONFIG
  // freeze light-theme colors and stay dark on dark backgrounds.
  const { theme } = useTheme();
  const variantConfig = VARIANT_CONFIG[variant];
  const resolvedColor = COLOR_RESOLVER[color](theme.colors);

  const textStyle = [
    variantConfig.style,
    { color: resolvedColor },
    { writingDirection: (I18nManager.isRTL ? 'rtl' : 'ltr') as 'rtl' | 'ltr' },
    style,
  ];

  const content = tx ? translate(tx) : children;

  return (
    <NNText
      ref={ref}
      style={textStyle}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      {...props}
    >
      {content}
    </NNText>
  );
}

AppText.displayName = 'AppText';

export const Text = AppText;
