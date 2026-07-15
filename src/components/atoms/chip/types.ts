import type { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ChipVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'outline';
export type ChipSize = 'sm' | 'md' | 'lg';

export type ChipProps = {
  label: string;
  variant?: ChipVariant;
  size?: ChipSize;
  selected?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  onClose?: () => void;
  leftIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  android_ripple?: PressableProps['android_ripple'];
} & Omit<PressableProps, 'disabled' | 'onPress'>;
