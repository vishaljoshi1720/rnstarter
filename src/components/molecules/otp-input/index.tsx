import type { OtpInputRef } from 'react-native-otp-entry';
import type { OTPInputProps } from './types';

import * as React from 'react';
import { OtpInput } from 'react-native-otp-entry';
import { View } from '@/components';
import { useTheme } from '@/theme';
import { styles } from './styles';

export type { OTPInputProps } from './types';

const NON_DIGIT_REGEX = /\D/g;

export function OTPInput({
  length = 6,
  value = '',
  onChangeText,
  disabled = false,
  error = false,
  style,
  testID,
  accessibilityLabel,
}: OTPInputProps) {
  const { theme } = useTheme();
  const otpRef = React.useRef<OtpInputRef>(null);
  const lastEmittedRef = React.useRef(value);
  const skipNextSyncRef = React.useRef(false);

  // Sync external value → library only when change came from outside (RHF reset, etc.)
  React.useEffect(() => {
    if (skipNextSyncRef.current) {
      skipNextSyncRef.current = false;
      lastEmittedRef.current = value;
      return;
    }
    if (value !== lastEmittedRef.current) {
      otpRef.current?.setValue(value);
      lastEmittedRef.current = value;
    }
  }, [value]);

  const handleChangeText = React.useCallback(
    (text: string) => {
      const sanitized = text.replace(NON_DIGIT_REGEX, '').slice(0, length);
      skipNextSyncRef.current = true;
      lastEmittedRef.current = sanitized;
      onChangeText(sanitized);

      // Keep library text in sync if sanitizer stripped characters
      if (sanitized !== text) {
        otpRef.current?.setValue(sanitized);
      }
    },
    [length, onChangeText],
  );

  return (
    <View
      style={[styles.wrapper, style]}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="text"
    >
      <OtpInput
        ref={otpRef}
        numberOfDigits={length}
        onTextChange={handleChangeText}
        disabled={disabled}
        type="numeric"
        autoFocus={false}
        focusColor={theme.colors.brand.primary}
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: {
            ...styles.input,
            ...(error ? styles.inputError : null),
            ...(disabled ? styles.inputDisabled : null),
          },
          focusedPinCodeContainerStyle: styles.inputFocused,
          pinCodeTextStyle: styles.inputText,
          focusStickStyle: {
            backgroundColor: theme.colors.brand.primary,
          },
        }}
      />
    </View>
  );
}

OTPInput.displayName = 'OTPInput';
