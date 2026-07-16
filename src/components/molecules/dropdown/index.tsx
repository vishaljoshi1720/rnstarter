import type { DropdownItem, DropdownProps, MultiSelectDropdownProps } from './types';

import { Dropdown as RNDropdown, MultiSelect as RNMultiSelect } from '@carlos3g/element-dropdown';
import { Check } from 'lucide-react-native';
import * as React from 'react';
import { AppText, View } from '@/components';
import { useTheme } from '@/theme';
import { styles } from './styles';

export type { DropdownItem, DropdownProps, MultiSelectDropdownProps } from './types';

function DropdownItemRow({
  item,
  selected,
  showCheckbox,
}: {
  item: DropdownItem;
  selected?: boolean;
  showCheckbox?: boolean;
}) {
  const { theme } = useTheme();

  return (
    <View style={[styles.itemRow, selected && styles.itemRowSelected]}>
      <AppText style={styles.itemLabel} numberOfLines={1}>
        {item.label}
      </AppText>
      {showCheckbox
        ? (
            <View style={[styles.checkbox, selected && styles.checkboxSelected]}>
              {selected && (
                <Check
                  size={theme.icon.sm}
                  color={theme.colors.text.onBrand}
                  strokeWidth={2.5}
                />
              )}
            </View>
          )
        : selected
          ? (
              <Check
                size={theme.icon.md}
                color={theme.colors.brand.primary}
                strokeWidth={2.5}
              />
            )
          : null}
    </View>
  );
}

export function Dropdown({
  value,
  label,
  disabled = false,
  error,
  helperText,
  data = [],
  onChange,
  placeholder = 'Select an option',
  testID,
}: DropdownProps) {
  const { theme } = useTheme();

  const handleChange = (item: DropdownItem) => {
    onChange?.(item?.value);
  };

  const showHelper = !error && helperText;

  return (
    <View style={styles.wrapper}>
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
      <RNDropdown
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value != null ? String(value) : undefined}
        onChange={handleChange}
        disable={disabled}
        style={[
          styles.container,
          error && styles.containerError,
          disabled && styles.containerDisabled,
        ]}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        inputSearchStyle={styles.searchInput}
        iconStyle={styles.icon}
        containerStyle={styles.dropdownContainer}
        iconColor={theme.colors.icon.default}
        activeColor={theme.colors.background.secondary}
        itemContainerStyle={{ paddingVertical: 0, paddingHorizontal: 0 }}
        renderItem={(item, selected) => (
          <DropdownItemRow item={item} selected={selected} />
        )}
        search={data.length > 5}
        searchPlaceholder="Search..."
        testID={testID}
        maxHeight={300}
      />
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
  );
}

Dropdown.displayName = 'Dropdown';

export function MultiSelectDropdown({
  value = [],
  label,
  disabled = false,
  error,
  helperText,
  data = [],
  onChange,
  placeholder = 'Select options',
  testID,
}: MultiSelectDropdownProps) {
  const { theme } = useTheme();

  const handleChange = (selected: string[]) => {
    onChange?.(selected as (string | number)[]);
  };

  const showHelper = !error && helperText;
  const stringValue = value.map(v => String(v));

  return (
    <View style={styles.wrapper}>
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
      <RNMultiSelect
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={stringValue}
        onChange={handleChange}
        disable={disabled}
        style={[
          styles.container,
          error && styles.containerError,
          disabled && styles.containerDisabled,
        ]}
        placeholderStyle={styles.placeholder}
        selectedTextStyle={styles.selectedText}
        inputSearchStyle={styles.searchInput}
        iconStyle={styles.icon}
        containerStyle={styles.dropdownContainer}
        iconColor={theme.colors.icon.default}
        activeColor={theme.colors.background.secondary}
        selectedStyle={styles.chip}
        itemContainerStyle={{ paddingVertical: 0, paddingHorizontal: 0 }}
        renderItem={(item, selected) => (
          <DropdownItemRow item={item} selected={selected} showCheckbox />
        )}
        search={data.length > 5}
        searchPlaceholder="Search..."
        testID={testID}
        maxHeight={300}
      />
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
  );
}

MultiSelectDropdown.displayName = 'MultiSelectDropdown';
