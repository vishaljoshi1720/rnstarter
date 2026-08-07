import type { DropdownItem, DropdownProps, MultiSelectDropdownProps } from './types';

import { Dropdown as RNDropdown, MultiSelect as RNMultiSelect } from '@carlos3g/element-dropdown';
import { Check } from 'lucide-react-native';
import * as React from 'react';
import { Keyboard } from 'react-native';
import { useTheme } from '@/theme';
import { AppText } from '../../atoms/text';
import { View } from '../../atoms/view';
import { Field } from '../field';
import { formatMultiSelectLabel } from './format-label';
import { styles } from './styles';

export type { DropdownItem, DropdownProps, MultiSelectDropdownProps } from './types';

/** Fixed menu cap — not density-scaled (scrollable list viewport). */
const DROPDOWN_MAX_HEIGHT = 300;

function dismissKeyboard() {
  Keyboard.dismiss();
}

function resolveValue(
  data: DropdownItem[],
  raw: string | number | undefined,
): string | number | undefined {
  if (raw == null)
    return undefined;
  const match = data.find(item => String(item.value) === String(raw));
  return match?.value ?? raw;
}

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
  search,
  searchPlaceholder = 'Search...',
  testID,
}: DropdownProps) {
  const { theme } = useTheme();
  const enableSearch = search ?? data.length > 5;

  const handleChange = (item: DropdownItem) => {
    onChange?.(resolveValue(data, item?.value) as string | number);
  };

  return (
    <Field label={label} error={error} helperText={helperText} testID={testID}>
      <RNDropdown
        data={data}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        value={value != null ? String(value) : undefined}
        onChange={handleChange}
        disable={disabled}
        onFocus={dismissKeyboard}
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
        search={enableSearch}
        searchPlaceholder={searchPlaceholder}
        testID={testID ? `${testID}-control` : undefined}
        maxHeight={DROPDOWN_MAX_HEIGHT}
        accessibilityLabel={label || placeholder}
      />
    </Field>
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
  search,
  searchPlaceholder = 'Search...',
  testID,
}: MultiSelectDropdownProps) {
  const { theme } = useTheme();
  const enableSearch = search ?? data.length > 5;
  const stringValue = value.map(v => String(v));
  const triggerLabel = formatMultiSelectLabel(value, data, placeholder);

  const handleChange = (selected: string[]) => {
    const mapped = selected.map(raw => resolveValue(data, raw) as string | number);
    onChange?.(mapped);
  };

  return (
    <Field label={label} error={error} helperText={helperText} testID={testID}>
      <RNMultiSelect
        data={data}
        labelField="label"
        valueField="value"
        placeholder={triggerLabel}
        value={stringValue}
        onChange={handleChange}
        disable={disabled}
        onFocus={dismissKeyboard}
        visibleSelectedItem={false}
        style={[
          styles.container,
          error && styles.containerError,
          disabled && styles.containerDisabled,
        ]}
        placeholderStyle={
          value.length > 0 ? styles.selectedText : styles.placeholder
        }
        selectedTextStyle={styles.selectedText}
        inputSearchStyle={styles.searchInput}
        iconStyle={styles.icon}
        containerStyle={styles.dropdownContainer}
        iconColor={theme.colors.icon.default}
        activeColor={theme.colors.background.secondary}
        itemContainerStyle={{ paddingVertical: 0, paddingHorizontal: 0 }}
        renderItem={(item, selected) => (
          <DropdownItemRow item={item} selected={selected} showCheckbox />
        )}
        search={enableSearch}
        searchPlaceholder={searchPlaceholder}
        testID={testID ? `${testID}-control` : undefined}
        maxHeight={DROPDOWN_MAX_HEIGHT}
        accessibilityLabel={label || placeholder}
      />
    </Field>
  );
}

MultiSelectDropdown.displayName = 'MultiSelectDropdown';
