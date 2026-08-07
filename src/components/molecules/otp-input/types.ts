import type { StyleProp, ViewStyle } from 'react-native';

export type OTPInputProps = {
  length?: number;
  value: string;
  onChangeText: (text: string) => void;
  /** Called when `length` digits are filled. */
  onFilled?: (text: string) => void;
  disabled?: boolean;
  /** @deprecated Cells no longer paint error borders — use Field message. Kept for API compat. */
  error?: boolean;
  autoFocus?: boolean;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  accessibilityLabel?: string;
};
