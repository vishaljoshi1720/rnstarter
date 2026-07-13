import type { TextStyle } from 'react-native';
import type { AppTextProps } from './types';
import * as React from 'react';

import { I18nManager, Text as NNText, StyleSheet } from 'react-native';
import { translate } from '@/lib/i18n';
import { styles } from './styles';

export type { AppTextProps } from './types';

export function Text({
  style,
  tx,
  children,
  ...props
}: AppTextProps) {
  const rtlStyle = React.useMemo(
    () =>
      StyleSheet.flatten([
        { writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr' },
        style,
      ]) as TextStyle,
    [style],
  );

  return (
    <NNText style={[styles.base, rtlStyle]} {...props}>
      {tx ? translate(tx) : children}
    </NNText>
  );
}
