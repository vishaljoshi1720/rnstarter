import type { SwitchProps } from './types';

import * as React from 'react';
import { Animated, Easing, Text } from 'react-native';
import { Pressable } from '@/components';
import { styles } from './styles';

export type { SwitchProps } from './types';

export function Switch({
  value,
  onValueChange,
  disabled = false,
  label,
  style,
  testID,
  accessibilityLabel,
  accessibilityHint,
}: SwitchProps) {
  const animatedValue = React.useRef(new Animated.Value(value ? 1 : 0)).current;

  React.useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value ? 1 : 0,
      duration: 200,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, [value, animatedValue]);

  const trackStyle = [
    styles.track,
    value ? styles.trackOn : styles.trackOff,
    disabled && styles.trackDisabled,
  ];

  const thumbTranslateX = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 22],
  });

  const thumbStyle = [
    styles.thumb,
    {
      transform: [{ translateX: thumbTranslateX }],
    },
  ];

  return (
    <Pressable
      onPress={() => !disabled && onValueChange(!value)}
      disabled={disabled}
      style={[styles.container, style]}
      testID={testID}
      accessibilityRole="switch"
      accessibilityLabel={accessibilityLabel || label}
      accessibilityHint={accessibilityHint}
      accessibilityState={{
        disabled,
        checked: value,
      }}
    >
      <Animated.View style={trackStyle}>
        <Animated.View style={thumbStyle} />
      </Animated.View>
      {label && (
        <Text style={[styles.label, disabled && styles.labelDisabled]}>
          {label}
        </Text>
      )}
    </Pressable>
  );
}

Switch.displayName = 'Switch';
