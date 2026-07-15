import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type CardVariant = 'default' | 'elevated' | 'outlined';

export type CardProps = {
  variant?: CardVariant;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  android_ripple?: PressableProps['android_ripple'];
} & Omit<PressableProps, 'disabled' | 'onPress'>;
