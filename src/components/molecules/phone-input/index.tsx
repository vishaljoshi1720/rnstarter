import type { PhoneInputProps } from './types';

import * as React from 'react';
import PhoneInputLib from 'rn-international-phone-number';
import { AppText, View } from '@/components';
import { useTheme } from '@/theme';
import { modalStyles as phoneModalStyles, styles } from './styles';

export type { PhoneInputProps } from './types';
export type { ICountry } from 'rn-international-phone-number';

function FieldMessage({
  testID,
  error,
  helperText,
}: {
  testID?: string;
  error?: string;
  helperText?: string;
}) {
  if (error) {
    return (
      <AppText
        testID={testID ? `${testID}-error` : undefined}
        variant="bodySmall"
        color="error"
        style={styles.helperText}
      >
        {error}
      </AppText>
    );
  }
  if (!helperText)
    return null;
  return (
    <AppText
      testID={testID ? `${testID}-helper` : undefined}
      variant="bodySmall"
      color="secondary"
      style={styles.helperText}
    >
      {helperText}
    </AppText>
  );
}

export function PhoneInput({
  value = '',
  onChangeText,
  defaultCountry = 'US',
  label,
  error,
  helperText,
  placeholder = 'Phone number',
  disabled = false,
  testID,
  onBlur,
  onFocus,
}: PhoneInputProps) {
  const { theme } = useTheme();

  const phoneInputStyles = React.useMemo(
    () => ({
      container: {
        ...styles.phoneContainer,
        ...(disabled ? styles.phoneContainerDisabled : null),
        ...(error ? styles.phoneContainerError : null),
      },
      flagContainer: styles.flagContainer,
      flag: styles.flag,
      caret: styles.caret,
      callingCode: styles.callingCode,
      input: {
        ...styles.input,
        ...(disabled ? styles.inputDisabled : null),
      },
    }),
    [disabled, error],
  );

  const countryModalStyles = React.useMemo(
    () => ({
      backdrop: phoneModalStyles.modalBackdrop,
      content: phoneModalStyles.modalContent,
      dragHandleIndicator: phoneModalStyles.dragHandle,
      searchContainer: phoneModalStyles.searchContainer,
      searchInput: phoneModalStyles.searchInput,
      list: phoneModalStyles.countryList,
      countryItem: phoneModalStyles.countryItem,
      flag: styles.flag,
      countryName: phoneModalStyles.countryName,
      callingCode: phoneModalStyles.countryCallingCode,
      sectionTitle: phoneModalStyles.sectionTitle,
    }),
    [],
  );

  return (
    <View style={styles.wrapper} testID={testID}>
      {label && (
        <AppText
          testID={testID ? `${testID}-label` : undefined}
          variant="labelLarge"
          color="primary"
          style={styles.label}
        >
          {label}
        </AppText>
      )}
      <PhoneInputLib
        value={value}
        onChangePhoneNumber={onChangeText}
        defaultCountry={defaultCountry as any}
        placeholder={placeholder}
        disabled={disabled}
        theme={theme.colors.isDark ? 'dark' : 'light'}
        onBlur={onBlur}
        onFocus={onFocus}
        phoneInputPlaceholderTextColor={theme.colors.text.secondary}
        phoneInputSelectionColor={theme.colors.brand.primary}
        accessibilityLabelPhoneInput={label || placeholder}
        phoneInputStyles={phoneInputStyles}
        modalStyles={countryModalStyles}
      />
      <FieldMessage testID={testID} error={error} helperText={helperText} />
    </View>
  );
}

PhoneInput.displayName = 'PhoneInput';
