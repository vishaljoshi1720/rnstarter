import type { ListItemProps } from './types';

import * as React from 'react';
import { AppText, Pressable, View } from '@/components';
import { styles } from './styles';

export type { ListItemProps } from './types';

export function ListItem({
  title,
  subtitle,
  description,
  leftElement,
  rightElement,
  onPress,
  disabled = false,
  style,
  testID,
  accessibilityLabel,
  accessibilityHint,
  android_ripple,
  ...props
}: ListItemProps) {
  const containerStyle = [
    styles.container,
    disabled && styles.disabled,
    style,
  ];

  const content = (
    <>
      {leftElement && (
        <View style={styles.leftElement}>
          {leftElement}
        </View>
      )}

      <View style={styles.content}>
        <AppText variant="bodyLarge" color="primary">
          {title}
        </AppText>
        {subtitle && (
          <AppText variant="bodyMedium" color="secondary">
            {subtitle}
          </AppText>
        )}
        {description && (
          <AppText variant="bodySmall" color="tertiary">
            {description}
          </AppText>
        )}
      </View>

      {rightElement && (
        <View style={styles.rightElement}>
          {rightElement}
        </View>
      )}
    </>
  );

  if (!onPress) {
    return (
      <View
        style={containerStyle}
        testID={testID}
        accessibilityLabel={accessibilityLabel || title}
      >
        {content}
      </View>
    );
  }

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={containerStyle}
      testID={testID}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || title}
      accessibilityHint={accessibilityHint}
      accessibilityState={{ disabled }}
      android_ripple={android_ripple || { color: 'rgba(0, 0, 0, 0.05)' }}
      {...props}
    >
      {content}
    </Pressable>
  );
}

ListItem.displayName = 'ListItem';
