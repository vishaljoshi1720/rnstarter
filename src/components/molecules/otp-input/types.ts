import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';

export type OTPInputProps = {
  length?: number;
  value: string;
  onChangeText: (text: string) => void;
  disabled?: boolean;
  error?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  accessibilityLabel?: string;
} & Omit<TextInputProps, 'value' | 'onChangeText' | 'style' | 'disabled'>;
