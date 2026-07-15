import type { TextInput as NTextInput } from 'react-native';
import type { OTPInputProps } from './types';

import * as React from 'react';
import { Pressable, TextInput } from 'react-native';
import { AppText, View } from '@/components';
import { useTheme } from '@/theme';
import { styles } from './styles';

export type { OTPInputProps } from './types';

export function OTPInput({
  length = 6,
  value,
  onChangeText,
  disabled = false,
  error = false,
  style,
  testID,
  accessibilityLabel,
  ...textInputProps
}: OTPInputProps) {
  const { theme } = useTheme();
  const inputRef = React.useRef<NTextInput>(null);
  const [focusedIndex, setFocusedIndex] = React.useState<number | null>(null);

  const digits = value.split('');

  const handlePress = () => {
    inputRef.current?.focus();
  };

  const handleChangeText = (text: string) => {
    const sanitized = text.replace(/\D/g, '').slice(0, length);
    onChangeText(sanitized);
  };

  return (
    <View style={style}>
      <Pressable
        onPress={handlePress}
        disabled={disabled}
        style={styles.container}
        testID={testID}
      >
        {Array.from({ length }).map((_, index) => {
          const isFocused = focusedIndex === index || (digits.length === index && focusedIndex !== null);
          const hasValue = Boolean(digits[index]);

          return (
            <View
              key={index}
              style={[
                styles.input,
                isFocused && styles.inputFocused,
                error && styles.inputError,
                disabled && styles.inputDisabled,
              ]}
            >
              <AppText
                variant="titleMedium"
                color="primary"
                style={{ fontWeight: theme.fontWeight.semibold }}
              >
                {hasValue ? digits[index] : ''}
              </AppText>
            </View>
          );
        })}
      </Pressable>

      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={handleChangeText}
        onFocus={() => setFocusedIndex(digits.length)}
        onBlur={() => setFocusedIndex(null)}
        keyboardType="number-pad"
        maxLength={length}
        editable={!disabled}
        style={styles.hiddenInput}
        accessibilityLabel={accessibilityLabel || 'OTP Input'}
        {...textInputProps}
      />
    </View>
  );
}

OTPInput.displayName = 'OTPInput';
