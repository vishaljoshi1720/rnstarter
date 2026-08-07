import type { OtpInputRef } from 'react-native-otp-entry';
import type { OTPInputProps } from './types';

import * as React from 'react';
import { OtpInput } from 'react-native-otp-entry';
import { useTheme } from '@/theme';
import { View } from '../../atoms/view';
import { styles } from './styles';

export type { OTPInputProps } from './types';

const NON_DIGIT_REGEX = /\D/g;

export function OTPInput({
  length = 6,
  value = '',
  onChangeText,
  onFilled,
  disabled = false,
  error: _error = false,
  autoFocus = false,
  style,
  testID,
  accessibilityLabel,
}: OTPInputProps) {
  const { theme } = useTheme();
  const otpRef = React.useRef<OtpInputRef>(null);
  const lastEmittedRef = React.useRef(value);
  const skipNextSyncRef = React.useRef(false);

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

      if (sanitized !== text) {
        otpRef.current?.setValue(sanitized);
      }

      if (sanitized.length === length) {
        onFilled?.(sanitized);
      }
    },
    [length, onChangeText, onFilled],
  );

  return (
    <View
      style={[styles.wrapper, style]}
      testID={testID}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole="none"
    >
      <OtpInput
        ref={otpRef}
        numberOfDigits={length}
        onTextChange={handleChangeText}
        disabled={disabled}
        type="numeric"
        autoFocus={autoFocus}
        focusColor={theme.colors.brand.primary}
        theme={{
          containerStyle: styles.container,
          pinCodeContainerStyle: {
            ...styles.input,
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
