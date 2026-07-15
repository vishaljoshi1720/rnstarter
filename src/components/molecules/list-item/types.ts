import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

export type ListItemProps = {
  title: string;
  subtitle?: string;
  description?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  onPress?: () => void;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  android_ripple?: PressableProps['android_ripple'];
} & Omit<PressableProps, 'disabled' | 'onPress'>;
