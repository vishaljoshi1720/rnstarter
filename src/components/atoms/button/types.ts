import type { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ButtonVariant = 'default' | 'secondary' | 'outline' | 'destructive' | 'ghost' | 'link';

export type ButtonSize = 'default' | 'lg' | 'sm' | 'icon';

export type ButtonProps = {
  label?: string;
  loading?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
} & Omit<PressableProps, 'disabled'>;
