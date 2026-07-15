import type { TabsProps } from './types';

import * as React from 'react';
import { AppText, Pressable, View } from '@/components';
import { styles } from './styles';

export type { TabItem, TabsProps } from './types';

export function Tabs({
  items,
  activeKey,
  onChange,
  variant = 'underline',
  disabled = false,
  style,
  testID,
  android_ripple,
}: TabsProps) {
  const isFilled = variant === 'filled';
  const containerStyle = [
    styles.container,
    isFilled && styles.containerFilled,
    style,
  ];

  return (
    <View style={containerStyle} testID={testID}>
      {items.map((item) => {
        const isActive = item.key === activeKey;
        const tabStyle = [
          styles.tab,
          isFilled && styles.tabFilled,
          isActive && (isFilled ? styles.tabActiveFilled : styles.tabActive),
          disabled && styles.tabDisabled,
        ];

        return (
          <Pressable
            key={item.key}
            onPress={() => !disabled && onChange(item.key)}
            disabled={disabled}
            style={tabStyle}
            testID={testID ? `${testID}-${item.key}` : undefined}
            accessibilityRole="tab"
            accessibilityState={{
              disabled,
              selected: isActive,
            }}
            accessibilityLabel={item.label}
            android_ripple={android_ripple || { color: 'rgba(0, 0, 0, 0.05)' }}
          >
            {item.icon}
            <AppText
              variant="labelMedium"
              color={isActive ? 'primary' : 'secondary'}
            >
              {item.label}
            </AppText>
          </Pressable>
        );
      })}
    </View>
  );
}

Tabs.displayName = 'Tabs';
