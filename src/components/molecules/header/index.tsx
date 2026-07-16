import type { HeaderProps } from './types';

import * as React from 'react';
import { AppText, View } from '@/components';
import { styles } from './styles';

export type { HeaderProps } from './types';

/**
 * App bar header. Left/right slots are equal width so the title stays centered.
 */
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
      <View style={styles.side}>
        {leftAction}
      </View>

      <View style={styles.centerContent}>
        <AppText variant="titleMedium" color="primary" style={styles.title} numberOfLines={1}>
          {title}
        </AppText>
        {subtitle
          ? (
              <AppText variant="bodySmall" color="secondary" style={styles.subtitle} numberOfLines={1}>
                {subtitle}
              </AppText>
            )
          : null}
      </View>

      <View style={styles.side}>
        {rightAction}
      </View>
    </View>
  );
}

Header.displayName = 'Header';
