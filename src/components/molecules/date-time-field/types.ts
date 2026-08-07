import type { StyleProp, ViewStyle } from 'react-native';

export type DateTimeFieldMode = 'date' | 'time' | 'datetime';

export type DateTimeFieldProps = {
  mode?: DateTimeFieldMode;
  value?: Date;
  onChange?: (date: Date) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  error?: string;
  minimumDate?: Date;
  maximumDate?: Date;
  /** date / datetime display formatter */
  formatValue?: (date: Date) => string;
  is24Hour?: boolean;
  disabled?: boolean;
  testID?: string;
  accessibilityLabel?: string;
  accessibilityHint?: string;
  style?: StyleProp<ViewStyle>;
};
