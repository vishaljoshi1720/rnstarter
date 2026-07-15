import type { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import type { PressableProps } from 'react-native';

export type TimePickerInputProps = {
  /** Current time value */
  value?: Date;

  /** Callback when time is selected */
  onChange?: (date: Date) => void;

  /** Label text */
  label?: string;

  /** Placeholder text when no time selected */
  placeholder?: string;

  /** Helper text below input */
  helperText?: string;

  /** Error message */
  error?: string;

  /** Time format function (default: locale time string) */
  formatTime?: (date: Date) => string;

  /** Use 24-hour format */
  is24Hour?: boolean;

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
export type TimePickerEvent = DateTimePickerEvent;
