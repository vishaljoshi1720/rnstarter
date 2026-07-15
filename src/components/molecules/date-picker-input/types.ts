import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import type { PressableProps } from 'react-native';

export type DatePickerInputProps = {
  /** Current date value */
  value?: Date;

  /** Callback when date is selected */
  onChange?: (date: Date) => void;

  /** Label text */
  label?: string;

  /** Placeholder text when no date selected */
  placeholder?: string;

  /** Helper text below input */
  helperText?: string;

  /** Error message */
  error?: string;

  /** Minimum selectable date */
  minimumDate?: Date;

  /** Maximum selectable date */
  maximumDate?: Date;

  /** Date format function (default: locale date string) */
  formatDate?: (date: Date) => string;

  /** Disabled state */
  disabled?: boolean;

  /** Test ID */
  testID?: string;

  /** Accessibility label */
  accessibilityLabel?: string;

  /** Accessibility hint */
  accessibilityHint?: string;

  /** Additional styles */
  style?: PressableProps['style'];
};

/** @internal */
export type DatePickerEvent = DateTimePickerEvent;
