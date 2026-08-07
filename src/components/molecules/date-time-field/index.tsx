import type { DateTimeFieldProps } from './types';

import { Calendar, Clock } from 'lucide-react-native';
import * as React from 'react';
import { Keyboard } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useTheme } from '@/theme';
import { Pressable } from '../../atoms/pressable';
import { AppText } from '../../atoms/text';
import { View } from '../../atoms/view';
import { Field } from '../field';
import { styles } from './styles';

export type { DateTimeFieldMode, DateTimeFieldProps } from './types';

function defaultFormat(mode: NonNullable<DateTimeFieldProps['mode']>, date: Date) {
  if (mode === 'time') {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
  if (mode === 'datetime') {
    return date.toLocaleString();
  }
  return date.toLocaleDateString();
}

function defaultPlaceholder(mode: NonNullable<DateTimeFieldProps['mode']>) {
  if (mode === 'time')
    return 'Select time';
  if (mode === 'datetime')
    return 'Select date & time';
  return 'Select date';
}

function defaultHint(mode: NonNullable<DateTimeFieldProps['mode']>) {
  if (mode === 'time')
    return 'Opens time picker';
  if (mode === 'datetime')
    return 'Opens date and time picker';
  return 'Opens date picker';
}

/**
 * Date / time / datetime field. Prefer this over the thin DatePickerInput /
 * TimePickerInput wrappers.
 */
export function DateTimeField({
  mode = 'date',
  value,
  onChange,
  label,
  placeholder,
  helperText,
  error,
  minimumDate,
  maximumDate,
  formatValue,
  is24Hour = false,
  disabled = false,
  testID,
  accessibilityLabel,
  accessibilityHint,
  style,
}: DateTimeFieldProps) {
  const { theme } = useTheme();
  const [isVisible, setIsVisible] = React.useState(false);

  const displayText = value
    ? (formatValue?.(value) ?? defaultFormat(mode, value))
    : (placeholder ?? defaultPlaceholder(mode));
  const isPlaceholder = !value;
  const IconGlyph = mode === 'time' ? Clock : Calendar;
  const iconColor = error
    ? theme.colors.status.error
    : theme.colors.icon.default;

  return (
    <Field
      label={label}
      error={error}
      helperText={helperText}
      testID={testID}
    >
      <Pressable
        onPress={() => {
          if (disabled)
            return;
          Keyboard.dismiss();
          setIsVisible(true);
        }}
        disabled={disabled}
        style={[
          styles.inputContainer,
          error ? styles.inputContainerError : null,
          disabled ? styles.inputContainerDisabled : null,
          style,
        ]}
        testID={testID ? `${testID}-trigger` : undefined}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel || label || defaultPlaceholder(mode)}
        accessibilityHint={accessibilityHint || defaultHint(mode)}
        accessibilityState={{ disabled }}
      >
        <AppText
          variant="bodyMedium"
          color={isPlaceholder ? 'tertiary' : 'primary'}
          style={styles.inputText}
          numberOfLines={1}
        >
          {displayText}
        </AppText>
        <View>
          <IconGlyph size={theme.icon.md} color={iconColor} strokeWidth={2} />
        </View>
      </Pressable>

      <DateTimePickerModal
        isVisible={isVisible}
        mode={mode}
        date={value ?? new Date()}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        is24Hour={is24Hour}
        onConfirm={(date) => {
          onChange?.(date);
          setIsVisible(false);
        }}
        onCancel={() => setIsVisible(false)}
        testID={testID ? `${testID}-picker` : undefined}
      />
    </Field>
  );
}

DateTimeField.displayName = 'DateTimeField';

/** @deprecated Prefer DateTimeField with mode="date" */
export function DatePickerInput(
  props: Omit<DateTimeFieldProps, 'mode' | 'is24Hour' | 'formatValue'> & {
    formatDate?: (date: Date) => string;
  },
) {
  const { formatDate, ...rest } = props;
  return (
    <DateTimeField
      {...rest}
      mode="date"
      formatValue={formatDate}
    />
  );
}

DatePickerInput.displayName = 'DatePickerInput';

/** @deprecated Prefer DateTimeField with mode="time" */
export function TimePickerInput(
  props: Omit<DateTimeFieldProps, 'mode' | 'minimumDate' | 'maximumDate' | 'formatValue'> & {
    formatTime?: (date: Date) => string;
  },
) {
  const { formatTime, ...rest } = props;
  return (
    <DateTimeField
      {...rest}
      mode="time"
      formatValue={formatTime}
    />
  );
}

TimePickerInput.displayName = 'TimePickerInput';
