import type { StyleProp, ViewStyle } from 'react-native';

export type RadioOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type RadioGroupProps = {
  /** Currently selected value */
  value?: string;

  /** Callback when value changes */
  onValueChange: (value: string) => void;

  /** Radio options */
  options: RadioOption[];

  /** Group label */
  label?: string;

  /** Error message */
  error?: string;

  /** Helper text shown when no error */
  helperText?: string;

  /** Disabled state for entire group */
  disabled?: boolean;

  /** Container style */
  style?: StyleProp<ViewStyle>;

  /** Test identifier */
  testID?: string;
};
