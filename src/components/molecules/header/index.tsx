import type { HeaderProps } from './types';

import * as React from 'react';
import { AppText, View } from '@/components';
import { styles } from './styles';

export type { HeaderProps } from './types';

export function Header({
  title,
  subtitle,
  leftAction,
  rightAction,
  style,
  testID,
  accessibilityLabel,
}: HeaderProps) {
  return (
    <View
      style={[styles.container, style]}
      testID={testID}
      accessibilityRole="header"
      accessibilityLabel={accessibilityLabel || title}
    >
      {leftAction && (
        <View style={styles.leftAction}>
          {leftAction}
        </View>
      )}

      <View style={styles.centerContent}>
        <AppText variant="titleMedium" color="primary">
          {title}
        </AppText>
        {subtitle && (
          <AppText variant="bodySmall" color="secondary">
            {subtitle}
          </AppText>
        )}
      </View>

      {rightAction && (
        <View style={styles.rightAction}>
          {rightAction}
        </View>
      )}
    </View>
  );
}

Header.displayName = 'Header';
