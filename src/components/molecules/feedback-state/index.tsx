import type { FeedbackStateProps } from './types';

import * as React from 'react';
import { AppText, Icon, View } from '@/components';
import { VARIANT_CONFIG } from './constants';
import { styles } from './styles';

export type { FeedbackStateProps, FeedbackVariant } from './types';

export function FeedbackState({
  variant = 'empty',
  title,
  description,
  icon,
  action,
  style,
  testID,
  accessibilityLabel,
}: FeedbackStateProps) {
  const variantConfig = VARIANT_CONFIG[variant];

  return (
    <View
      style={[styles.container, style]}
      testID={testID}
      accessibilityLabel={accessibilityLabel || `${title}. ${description || ''}`}
    >
      {icon
        ? (
            <View style={styles.icon}>
              {icon}
            </View>
          )
        : variantConfig.defaultIconName
          ? (
              <View style={styles.icon}>
                <Icon name={variantConfig.defaultIconName as any} size={48} color="secondary" />
              </View>
            )
          : null}

      <AppText variant="titleLarge" color={variantConfig.titleColor} style={styles.title}>
        {title}
      </AppText>

      {description && (
        <AppText variant="bodyMedium" color="secondary" style={styles.description}>
          {description}
        </AppText>
      )}

      {action}
    </View>
  );
}

FeedbackState.displayName = 'FeedbackState';
