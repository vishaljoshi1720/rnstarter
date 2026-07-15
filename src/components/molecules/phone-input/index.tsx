import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import type { Country, PhoneInputProps } from './types';

import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import * as React from 'react';
import { Pressable } from 'react-native';
import { AppText, Input, View } from '@/components';
import { Modal, useModal } from '@/components/organisms/bottom-sheet';
import { ALL_COUNTRIES, POPULAR_COUNTRIES } from './countries';
import { styles } from './styles';

export type { Country, PhoneInputProps } from './types';

function CountryListItem({
  country,
  onSelect,
}: {
  country: Country;
  onSelect: (country: Country) => void;
}) {
  return (
    <Pressable
      style={styles.countryListItem}
      onPress={() => onSelect(country)}
    >
      <AppText style={styles.flag}>{country.flag}</AppText>
      <AppText variant="bodyMedium" style={styles.countryName}>
        {country.name}
      </AppText>
      <AppText variant="bodyMedium" color="secondary">
        {country.dialCode}
      </AppText>
    </Pressable>
  );
}

function CountryPicker({
  ref,
  onSelect,
}: {
  ref?: React.RefObject<BottomSheetModal | null>;
  onSelect: (country: Country) => void;
}) {
  const renderItem = React.useCallback(
    ({ item }: { item: Country }) => (
      <CountryListItem country={item} onSelect={onSelect} />
    ),
    [onSelect],
  );

  const keyExtractor = React.useCallback(
    (item: Country) => item.code,
    [],
  );

  return (
    <Modal
      ref={ref}
      snapPoints={['90%']}
      index={0}
    >
      <View style={{ flex: 1 }}>
        <AppText variant="headlineSmall" style={{ padding: 16 }}>
          Select Country
        </AppText>
        <BottomSheetFlatList
          data={ALL_COUNTRIES}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        />
      </View>
    </Modal>
  );
}

export function PhoneInput({
  value = '',
  onChangeText,
  country: countryCode = 'US',
  onCountryChange,
  label,
  error,
  helperText,
  placeholder = 'Phone number',
  disabled = false,
  testID,
  onBlur,
  onFocus,
}: PhoneInputProps) {
  const modal = useModal();
  const [selectedCountry, setSelectedCountry] = React.useState<Country>(() =>
    ALL_COUNTRIES.find(c => c.code === countryCode) || POPULAR_COUNTRIES[0],
  );

  const handleCountrySelect = React.useCallback(
    (country: Country) => {
      setSelectedCountry(country);
      onCountryChange?.(country);
      modal.dismiss();
    },
    [onCountryChange, modal],
  );

  const handlePhoneChange = React.useCallback(
    (text: string) => {
      // Remove non-digit characters
      const cleaned = text.replace(/\D/g, '');
      onChangeText?.(cleaned);
    },
    [onChangeText],
  );

  const showHelper = !error && helperText;

  return (
    <>
      <View style={styles.container}>
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
        <View style={styles.inputContainer}>
          <Pressable
            style={[
              styles.countryButton,
              Boolean(error) && styles.countryButtonError,
              disabled && styles.countryButtonDisabled,
            ]}
            onPress={modal.present}
            disabled={disabled}
            testID={testID ? `${testID}-country` : undefined}
          >
            <AppText style={styles.flag}>{selectedCountry.flag}</AppText>
            <AppText style={styles.dialCode}>{selectedCountry.dialCode}</AppText>
          </Pressable>
          <View style={styles.phoneInputWrapper}>
            <Input
              value={value}
              onChangeText={handlePhoneChange}
              onBlur={onBlur}
              onFocus={onFocus}
              placeholder={placeholder}
              keyboardType="phone-pad"
              disabled={disabled}
              error={error ? ' ' : undefined}
              testID={testID ? `${testID}-input` : undefined}
            />
          </View>
        </View>
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
      </View>
      <CountryPicker
        ref={modal.ref}
        onSelect={handleCountrySelect}
      />
    </>
  );
}

PhoneInput.displayName = 'PhoneInput';
