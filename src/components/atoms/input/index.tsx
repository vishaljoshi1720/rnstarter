import type { TextInput as NTextInput } from 'react-native';
import type { InputProps } from './types';
import * as React from 'react';

import { I18nManager, Pressable, TextInput as RNTextInput, StyleSheet } from 'react-native';
import { useTheme } from '@/theme';
import { AppText } from '../text';
import { View } from '../view';
import { styles } from './styles';

export type { InputProps, NInputProps } from './types';

type InputMetaProps = {
  error?: string;
  helperText?: string;
  showCharacterCount?: boolean;
  maxLength?: number;
  value?: string;
  testID?: string;
};

function InputMeta({
  error,
  helperText,
  showCharacterCount,
  maxLength,
  value,
  testID,
}: InputMetaProps) {
  const currentLength = value?.length || 0;
  const showHelper = !error && helperText;
  const showCount = showCharacterCount && maxLength;

  return (
    <>
      {error && (
        <AppText
          testID={testID ? `${testID}-error` : undefined}
          variant="bodySmall"
          color="error"
          style={styles.helperText}
        >
          {error}
        </AppText>
      )}
      {(showHelper || showCount) && (
        <View style={showHelper && showCount ? styles.bottomRow : undefined}>
          {showHelper && (
            <AppText
              testID={testID ? `${testID}-helper` : undefined}
              variant="bodySmall"
              color="secondary"
              style={styles.helperText}
            >
              {helperText}
            </AppText>
          )}
          {showCount && (
            <AppText
              testID={testID ? `${testID}-count` : undefined}
              variant="bodySmall"
              color="secondary"
              style={styles.characterCount}
            >
              {currentLength}
              /
              {maxLength}
            </AppText>
          )}
        </View>
      )}
    </>
  );
}

function ClearButton({
  onPress,
  testID,
}: {
  onPress: () => void;
  testID?: string;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={styles.clearButton}
      testID={testID}
      hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
    >
      <AppText style={{ fontSize: 16 }}>✕</AppText>
    </Pressable>
  );
}

function InputLabel({
  label,
  testID,
}: {
  label?: string;
  testID?: string;
}) {
  if (!label)
    return null;
  return (
    <AppText
      testID={testID ? `${testID}-label` : undefined}
      variant="labelLarge"
      color="primary"
      style={styles.label}
    >
      {label}
    </AppText>
  );
}

export function Input({ ref, ...props }: InputProps & { ref?: React.Ref<NTextInput | null> }) {
  const {
    label,
    error,
    testID,
    onBlur: onBlurProp,
    onFocus: onFocusProp,
    leftElement,
    rightElement,
    clearable,
    onClear,
    value,
    onChangeText,
    helperText,
    showCharacterCount,
    maxLength,
    multiline,
    numberOfLines = 4,
    ...inputProps
  } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const { theme } = useTheme();
  const disabled = Boolean(props.disabled);

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

  const handleClear = React.useCallback(() => {
    onChangeText?.('');
    onClear?.();
  }, [onChangeText, onClear]);

  const showClearButton = clearable && value && value.length > 0 && !disabled;

  return (
    <View style={styles.container}>
      <InputLabel label={label} testID={testID} />
      <View
        style={[
          styles.inputContainer,
          multiline && styles.inputContainerMultiline,
          isFocussed && styles.inputContainerFocused,
          Boolean(error) && styles.inputContainerError,
          disabled && styles.inputContainerDisabled,
        ]}
      >
        {leftElement && <View style={styles.leftElement}>{leftElement}</View>}
        <RNTextInput
          testID={testID}
          ref={ref}
          placeholderTextColor={theme.colors.text.disabled}
          style={[
            styles.input,
            multiline && styles.inputMultiline,
            { color: theme.colors.text.primary },
            disabled && styles.inputDisabled,
            inputProps.style,
            StyleSheet.flatten([
              { writingDirection: (I18nManager.isRTL ? 'rtl' : 'ltr') as 'rtl' | 'ltr' },
              { textAlign: (I18nManager.isRTL ? 'right' : 'left') as 'right' | 'left' },
            ]),
          ]}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : undefined}
          maxLength={maxLength}
          {...inputProps}
        />
        {showClearButton && !multiline && (
          <ClearButton
            onPress={handleClear}
            testID={testID ? `${testID}-clear` : undefined}
          />
        )}
        {rightElement && <View style={styles.rightElement}>{rightElement}</View>}
      </View>
      <InputMeta
        error={error}
        helperText={helperText}
        showCharacterCount={showCharacterCount}
        maxLength={maxLength}
        value={value}
        testID={testID}
      />
    </View>
  );
}
