import type { PressableProps, StyleProp, TextStyle, ViewStyle } from 'react-native';

export enum ButtonVariant {
  Default = 'default',
  Secondary = 'secondary',
  Outline = 'outline',
  Destructive = 'destructive',
  Ghost = 'ghost',
  Link = 'link',
}

export enum ButtonSize {
  Default = 'default',
  Lg = 'lg',
  Sm = 'sm',
  Icon = 'icon',
}

export type ButtonProps = {
  label?: string;
  loading?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  fullWidth?: boolean;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  testID?: string;
} & Omit<PressableProps, 'disabled'>;
