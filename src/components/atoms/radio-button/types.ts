import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type RadioButtonSize = 'sm' | 'md' | 'lg';

export type RadioButtonProps = {
  value: string;
  selected: boolean;
  onSelect: (value: string) => void;
  label?: string;
  size?: RadioButtonSize;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  android_ripple?: PressableProps['android_ripple'];
} & Omit<PressableProps, 'disabled' | 'onPress'>;
