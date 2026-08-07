import type { TextInput as NTextInput } from 'react-native';
import type { InputProps } from './types';
import * as React from 'react';

import { I18nManager, Pressable, TextInput as RNTextInput } from 'react-native';
import { useTheme } from '@/theme';
import { AppText } from '../text';
import { View } from '../view';
import { SIZE_CONFIG } from './constants';
import { styles } from './styles';

export type { InputProps, InputSize, NInputProps } from './types';

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
      accessibilityRole="button"
      accessibilityLabel="Clear"
    >
      <AppText variant="labelMedium" color="secondary" accessible={false}>
        ✕
      </AppText>
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
    size = 'md',
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
    disabled = false,
    style,
    editable,
    ...inputProps
  } = props;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const { theme } = useTheme();

  const sizeConfig = SIZE_CONFIG[size];
  const isDisabled = disabled;
  const direction = I18nManager.isRTL ? 'rtl' : 'ltr';
  const align = I18nManager.isRTL ? 'right' : 'left';

  const onBlur = React.useCallback((e: any) => {
    setIsFocussed(false);
    onBlurProp?.(e);
  }, [onBlurProp]);

  const onFocus = React.useCallback((e: any) => {
    setIsFocussed(true);
    onFocusProp?.(e);
  }, [onFocusProp]);

  const handleClear = React.useCallback(() => {
    onChangeText?.('');
    onClear?.();
  }, [onChangeText, onClear]);

  const showClearButton = clearable && value && value.length > 0 && !isDisabled;

  return (
    <View style={styles.container}>
      <InputLabel label={label} testID={testID} />
      <View
        style={[
          styles.inputContainer,
          sizeConfig.containerStyle,
          multiline && styles.inputContainerMultiline,
          isFocussed && styles.inputContainerFocused,
          Boolean(error) && styles.inputContainerError,
          isDisabled && styles.inputContainerDisabled,
        ]}
      >
        {leftElement && <View style={styles.leftElement}>{leftElement}</View>}
        <RNTextInput
          testID={testID}
          ref={ref}
          placeholderTextColor={theme.colors.text.disabled}
          style={[
            styles.input,
            sizeConfig.inputStyle,
            multiline && styles.inputMultiline,
            { color: theme.colors.text.primary, writingDirection: direction, textAlign: align },
            isDisabled && styles.inputDisabled,
            style,
          ]}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          onChangeText={onChangeText}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : undefined}
          maxLength={maxLength}
          editable={editable ?? !isDisabled}
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
