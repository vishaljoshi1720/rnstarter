import type { StyleProp, ViewStyle } from 'react-native';
import type { CheckboxSize } from '@/components/atoms/checkbox';

export type CheckboxOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type CheckboxGroupProps = {
  value?: string[];
  onValueChange: (value: string[]) => void;
  options: CheckboxOption[];
  label?: string;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  size?: CheckboxSize;
  style?: StyleProp<ViewStyle>;
  testID?: string;
};
