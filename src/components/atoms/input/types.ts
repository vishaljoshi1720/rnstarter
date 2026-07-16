import type { TextInput, TextInputProps } from 'react-native';

export type InputSize = 'sm' | 'md' | 'lg';

export type InputProps = {
  label?: string;
  disabled?: boolean;
  error?: string;
  testID?: string;

  /** Size variant for the input */
  size?: InputSize;

  /** Element to render on the left side of the input */
  leftElement?: React.ReactNode;

  /** Element to render on the right side of the input */
  rightElement?: React.ReactNode;

  /** Show clear button when input has value */
  clearable?: boolean;

  /** Callback when clear button is pressed */
  onClear?: () => void;

  /** Helper text shown below input when no error exists */
  helperText?: string;

  /** Show character count below input (requires maxLength) */
  showCharacterCount?: boolean;

  /** Enable multiline/textarea mode */
  multiline?: boolean;

  /** Number of lines for multiline mode */
  numberOfLines?: number;
} & TextInputProps;

/** @deprecated Use InputProps */
export type NInputProps = InputProps;

export type { TextInput };
