import type { TextInput as NTextInput } from 'react-native';
import type { InputProps } from './types';
import * as React from 'react';

import { I18nManager, TextInput as RNTextInput, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';
import { AppText } from '../text';
import { View } from '../view';
import { styles } from './styles';

export type { InputProps, NInputProps } from './types';

export function Input({ ref, ...props }: InputProps & { ref?: React.Ref<NTextInput | null> }) {
  const { label, error, testID, onBlur: onBlurProp, onFocus: onFocusProp, ...inputProps } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const { theme } = useTheme();

  const onBlur = React.useCallback(
    (e: any) => {
      setIsFocussed(false);
      onBlurProp?.(e);
    },
    [onBlurProp],
  );

  const onFocus = React.useCallback(
    (e: any) => {
      setIsFocussed(true);
      onFocusProp?.(e);
    },
    [onFocusProp],
  );

  const inputStyle = [
    styles.input,
    { color: theme.colors.text.primary },
    isFocussed && styles.inputFocused,
    Boolean(error) && styles.inputError,
    Boolean(props.disabled) && styles.inputDisabled,
    inputProps.style,
    StyleSheet.flatten([
      { writingDirection: (I18nManager.isRTL ? 'rtl' : 'ltr') as 'rtl' | 'ltr' },
      { textAlign: (I18nManager.isRTL ? 'right' : 'left') as 'right' | 'left' },
    ]),
  ];

  return (
    <View style={styles.container}>
      {label && (
        <AppText
          testID={testID ? `${testID}-label` : undefined}
          variant="labelLarge"
          color={error ? 'error' : 'primary'}
          style={styles.label}
        >
          {label}
        </AppText>
      )}
      <RNTextInput
        testID={testID}
        ref={ref}
        placeholderTextColor={theme.colors.text.disabled}
        style={inputStyle}
        onBlur={onBlur}
        onFocus={onFocus}
        {...inputProps}
      />
      {error && (
        <AppText
          testID={testID ? `${testID}-error` : undefined}
          variant="bodySmall"
          color="error"
        >
          {error}
        </AppText>
      )}
    </View>
  );
}
