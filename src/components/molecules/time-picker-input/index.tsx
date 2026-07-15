import type { TimePickerInputProps } from './types';
import * as React from 'react';
import { View } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Pressable, Text } from '@/components';
import { styles } from './styles';

export type { TimePickerInputProps } from './types';

/**
 * Time picker input using react-native-modal-datetime-picker.
 * Provides consistent cross-platform time selection experience.
 *
 * @example
 * <TimePickerInput
 *   value={time}
 *   onChange={setTime}
 *   label="Meeting Time"
 *   is24Hour
 * />
 */
export function TimePickerInput({
  value,
  onChange,
  label,
  placeholder = 'Select time',
  helperText,
  error,
  formatTime = date => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
  is24Hour = false,
  disabled = false,
  testID,
  accessibilityLabel,
  accessibilityHint,
  style,
}: TimePickerInputProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  const handleConfirm = (date: Date) => {
    onChange?.(date);
    setIsVisible(false);
  };

  const handleCancel = () => {
    setIsVisible(false);
  };

  const displayText = value ? formatTime(value) : placeholder;
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
        accessibilityHint={accessibilityHint || 'Opens time picker'}
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

        <Text style={[styles.icon, error && styles.iconError]}>🕐</Text>
      </Pressable>

      {helperText && !error && (
        <Text style={styles.helperText}>{helperText}</Text>
      )}
      {error && (
        <Text style={styles.errorText}>{error}</Text>
      )}

      <DateTimePickerModal
        isVisible={isVisible}
        mode="time"
        date={value}
        is24Hour={is24Hour}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        testID={testID ? `${testID}-picker` : undefined}
      />
    </View>
  );
}

TimePickerInput.displayName = 'TimePickerInput';
