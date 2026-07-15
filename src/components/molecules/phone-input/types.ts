import type { InputProps } from '@/components/atoms/input/types';

export type Country = {
  code: string;
  name: string;
  dialCode: string;
  flag: string;
};

export type PhoneInputProps = {
  /** Current phone number value */
  value?: string;

  /** Callback when phone number changes */
  onChangeText?: (text: string) => void;

  /** Selected country code */
  country?: string;

  /** Callback when country changes */
  onCountryChange?: (country: Country) => void;

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
} & Pick<InputProps, 'onBlur' | 'onFocus'>;
