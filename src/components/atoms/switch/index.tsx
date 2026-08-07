import type { SwitchProps } from './types';

import * as React from 'react';
import { Animated, Easing } from 'react-native';
import { useTheme } from '@/theme';
import { Pressable } from '../pressable';
import { AppText } from '../text';
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
  const { theme } = useTheme();
  const animatedValue = React.useRef(new Animated.Value(value ? 1 : 0)).current;

  const thumbTravel
    = theme.size.switch.width
      - theme.size.switch.thumb
      - theme.spacingRaw['2xs'] * 2;

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
    outputRange: [0, thumbTravel],
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
        <AppText
          variant="bodyMedium"
          color={disabled ? 'disabled' : 'primary'}
          style={styles.label}
        >
          {label}
        </AppText>
      )}
    </Pressable>
  );
}

Switch.displayName = 'Switch';
