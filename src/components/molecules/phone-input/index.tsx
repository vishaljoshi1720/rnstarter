import type { PhoneInputProps } from './types';

import * as React from 'react';
import { View } from 'react-native';
import PhoneInputLib from 'rn-international-phone-number';
import { useTheme } from '@/theme';
import { Field } from '../field';
import { modalStyles as phoneModalStyles, styles } from './styles';

export type { PhoneInputProps } from './types';
export type { ICountry } from 'rn-international-phone-number';

/** Must return an element — `null` falls back to the lib caret. */
function renderHiddenSlot() {
  return <View style={styles.slotHidden} />;
}

/**
 * International phone input (optional heavy dep).
 * Deep-import: `@/components/molecules/phone-input`
 *
 * Dial code + number only — no flag, no dropdown caret.
 */
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
      flag: styles.slotHidden,
      caret: styles.slotHidden,
      divider: styles.slotHidden,
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
    <Field
      label={label}
      error={error}
      helperText={helperText}
      testID={testID}
    >
      <PhoneInputLib
        value={value}
        onChangePhoneNumber={onChangeText}
        defaultCountry={defaultCountry as any}
        placeholder={placeholder}
        disabled={disabled}
        theme={theme.colors.isDark ? 'dark' : 'light'}
        onBlur={onBlur}
        onFocus={onFocus}
        customFlag={renderHiddenSlot}
        customCaret={renderHiddenSlot}
        phoneInputPlaceholderTextColor={theme.colors.text.secondary}
        phoneInputSelectionColor={theme.colors.brand.primary}
        accessibilityLabelPhoneInput={label || placeholder}
        phoneInputStyles={phoneInputStyles}
        modalStyles={countryModalStyles}
      />
    </Field>
  );
}

PhoneInput.displayName = 'PhoneInput';
