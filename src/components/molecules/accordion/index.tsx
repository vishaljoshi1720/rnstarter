import type { AccordionProps } from './types';

import * as React from 'react';
import { AppText, Pressable, View } from '@/components';
import { styles } from './styles';

export type { AccordionItem, AccordionProps } from './types';

export function Accordion({
  items,
  expandedKeys: controlledExpandedKeys,
  onToggle,
  multiple = false,
  disabled = false,
  style,
  testID,
  android_ripple,
}: AccordionProps) {
  const [uncontrolledExpandedKeys, setUncontrolledExpandedKeys] = React.useState<string[]>([]);

  const isControlled = controlledExpandedKeys !== undefined;
  const expandedKeys = isControlled ? controlledExpandedKeys : uncontrolledExpandedKeys;

  const handleToggle = (key: string) => {
    if (disabled)
      return;

    if (isControlled) {
      onToggle?.(key);
      return;
    }

    setUncontrolledExpandedKeys((prev) => {
      if (prev.includes(key)) {
        return prev.filter(k => k !== key);
      }
      return multiple ? [...prev, key] : [key];
    });

    onToggle?.(key);
  };

  return (
    <View style={[styles.container, style]} testID={testID}>
      {items.map((item, index) => {
        const isExpanded = expandedKeys.includes(item.key);
        const isLastItem = index === items.length - 1;

        return (
          <View
            key={item.key}
            style={[styles.item, isLastItem && { borderBottomWidth: 0 }]}
          >
            <Pressable
              onPress={() => handleToggle(item.key)}
              disabled={disabled}
              style={[styles.header, disabled && styles.disabled]}
              testID={testID ? `${testID}-${item.key}-header` : undefined}
              accessibilityRole="button"
              accessibilityState={{
                disabled,
                expanded: isExpanded,
              }}
              accessibilityLabel={item.title}
              android_ripple={android_ripple || { color: 'rgba(0, 0, 0, 0.05)' }}
            >
              <View style={styles.headerContent}>
                {item.icon}
                <AppText variant="bodyLarge" color="primary">
                  {item.title}
                </AppText>
              </View>

              <AppText
                style={[styles.chevron, isExpanded && styles.chevronExpanded]}
                color="secondary"
              >
                ▼
              </AppText>
            </Pressable>

            {isExpanded && (
              <View
                style={styles.content}
                testID={testID ? `${testID}-${item.key}-content` : undefined}
              >
                {item.content}
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

Accordion.displayName = 'Accordion';
