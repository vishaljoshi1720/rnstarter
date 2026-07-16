export type PhoneInputProps = {
  /** Current phone number value */
  value?: string;

  /** Callback when phone number changes */
  onChangeText?: (text: string) => void;

  /** Default country code (ISO 3166-1 alpha-2) */
  defaultCountry?: string;

  /** Label for the input */
  label?: string;

  /** Error message */
  error?: string;

  /** Helper text */
  helperText?: string;

  /** Placeholder text */
  placeholder?: string;

  /** Disabled state */
  disabled?: boolean;

  /** Test identifier */
  testID?: string;

  /** Blur callback */
  onBlur?: () => void;

  /** Focus callback */
  onFocus?: () => void;
};
