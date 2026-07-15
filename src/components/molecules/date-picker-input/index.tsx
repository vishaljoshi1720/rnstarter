import type { DatePickerInputProps } from './types';
import * as React from 'react';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Pressable, Text } from '@/components';
import { styles } from './styles';

export type { DatePickerInputProps } from './types';

/**
 * Date picker input using react-native-modal-datetime-picker.
 * Provides consistent cross-platform date selection experience.
 *
 * @example
 * <DatePickerInput
 *   value={date}
 *   onChange={setDate}
 *   label="Birth Date"
 *   minimumDate={new Date(1900, 0, 1)}
 *   maximumDate={new Date()}
 * />
 */
export function DatePickerInput({
  value,
  onChange,
  label,
  placeholder = 'Select date',
  helperText,
  error,
  minimumDate,
  maximumDate,
  formatDate = date => date.toLocaleDateString(),
  disabled = false,
  testID,
  accessibilityLabel,
  accessibilityHint,
  style,
}: DatePickerInputProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleConfirm = (date: Date) => {
    onChange?.(date);
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const displayText = value ? formatDate(value) : placeholder;
  const isPlaceholder = !value;

  return (
    <View style={styles.container}>
      {label && <Text variant="labelMedium" style={styles.label}>{label}</Text>}

      <Pressable
        onPress={() => !disabled && setIsVisible(true)}
        disabled={disabled}
        style={({ pressed }) => [
          styles.inputContainer,
          error && styles.inputContainerError,
          disabled && styles.inputContainerDisabled,
          pressed && styles.inputPressed,
          typeof style === 'function' ? style({ pressed, hovered: false }) : style,
        ]}
        testID={testID}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel || label}
        accessibilityHint={accessibilityHint || 'Opens date picker'}
        accessibilityState={{ disabled }}
      >
        <Text
          style={[
            styles.inputText,
            isPlaceholder && styles.placeholder,
          ]}
        >
          {displayText}
        </Text>

        <Text style={[styles.icon, error && styles.iconError]}>📅</Text>
      </Pressable>

      {helperText && !error && (
        <Text style={styles.helperText}>{helperText}</Text>
      )}
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      <DateTimePickerModal
        isVisible={isVisible}
        mode="date"
        date={value}
        minimumDate={minimumDate}
        maximumDate={maximumDate}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        testID={testID ? `${testID}-picker` : undefined}
      />
    </View>
  );
}

DatePickerInput.displayName = 'DatePickerInput';
