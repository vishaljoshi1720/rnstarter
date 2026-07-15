import type { BottomSheetModal } from '@gorhom/bottom-sheet';
import type { SvgProps } from 'react-native-svg';
import type { OptionsProps, OptionType, SelectOptionItemProps, SelectProps } from './types';
import {
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';
import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import { Platform } from 'react-native';

import Svg, { Path } from 'react-native-svg';
import { Button, Icon } from '@/components/atoms';
import { Pressable } from '@/components/atoms/pressable';
import { AppText } from '@/components/atoms/text';
import { View } from '@/components/atoms/view';
import { Modal, useModal } from '@/components/organisms/bottom-sheet';
import { translate } from '@/lib/i18n';
import { useTheme } from '@/theme';
import { styles } from './styles';

export type { OptionsProps, OptionType, SelectProps } from './types';

const List = Platform.OS === 'web' ? FlashList : BottomSheetFlatList;

function keyExtractor(item: OptionType) {
  return `select-item-${item.value}`;
}

function Checkbox({ selected }: { selected: boolean }) {
  return (
    <View style={[styles.checkboxContainer, selected && styles.checkboxSelected]}>
      {selected && (
        <AppText variant="bodySmall" style={styles.checkmark}>
          ✓
        </AppText>
      )}
    </View>
  );
}

function MultipleActions({
  onSelectAll,
  onClearAll,
}: {
  onSelectAll: () => void;
  onClearAll: () => void;
}) {
  return (
    <View style={styles.headerActions}>
      <Button
        label="Select All"
        variant="ghost"
        size="sm"
        onPress={onSelectAll}
        style={styles.footerButton}
      />
      <Button
        label="Clear"
        variant="ghost"
        size="sm"
        onPress={onClearAll}
        style={styles.footerButton}
      />
    </View>
  );
}

function MultipleFooter({
  onCancel,
  onConfirm,
}: {
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <View style={styles.footer}>
      <Button
        label="Cancel"
        variant="outline"
        onPress={onCancel}
        style={styles.footerButton}
      />
      <Button
        label="Confirm"
        onPress={onConfirm}
        style={styles.footerButton}
      />
    </View>
  );
}

export function Options({
  ref,
  options,
  onSelect,
  value,
  multiple = false,
  onConfirm,
  onCancel,
  testID,
}: OptionsProps & { ref?: React.RefObject<BottomSheetModal | null> }) {
  const [tempSelection, setTempSelection] = React.useState<(string | number)[]>(() => {
    if (multiple && Array.isArray(value))
      return value;
    return [];
  });

  const height = options.length * 70 + (multiple ? 200 : 100);
  const snapPoints = React.useMemo(() => [height], [height]);
  const { theme } = useTheme();

  const handleSelect = React.useCallback(
    (option: OptionType) => {
      if (multiple) {
        setTempSelection((prev) => {
          const exists = prev.includes(option.value);
          if (exists)
            return prev.filter(v => v !== option.value);
          return [...prev, option.value];
        });
      }
      else {
        onSelect(option);
      }
    },
    [multiple, onSelect],
  );

  const handleSelectAll = React.useCallback(() => {
    setTempSelection(options.map(opt => opt.value));
  }, [options]);

  const handleClearAll = React.useCallback(() => {
    setTempSelection([]);
  }, []);

  const handleConfirm = React.useCallback(() => {
    onConfirm?.(tempSelection);
  }, [onConfirm, tempSelection]);

  const handleCancel = React.useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  const isSelected = React.useCallback(
    (itemValue: string | number) => {
      if (multiple)
        return tempSelection.includes(itemValue);
      return value === itemValue;
    },
    [multiple, tempSelection, value],
  );

  const renderSelectItem = React.useCallback(
    ({ item }: { item: OptionType }) => (
      <Option
        key={`select-item-${item.value}`}
        label={item.label}
        selected={isSelected(item.value)}
        multiple={multiple}
        onPress={() => handleSelect(item)}
        testID={testID ? `${testID}-item-${item.value}` : undefined}
      />
    ),
    [handleSelect, isSelected, multiple, testID],
  );

  return (
    <Modal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backgroundStyle={{
        backgroundColor: theme.colors.surface.default,
      }}
    >
      {multiple && (
        <MultipleActions onSelectAll={handleSelectAll} onClearAll={handleClearAll} />
      )}
      <List
        data={options}
        keyExtractor={keyExtractor}
        renderItem={renderSelectItem}
        testID={testID ? `${testID}-modal` : undefined}
        estimatedItemSize={52}
      />
      {multiple && (
        <MultipleFooter onCancel={handleCancel} onConfirm={handleConfirm} />
      )}
    </Modal>
  );
}

const Option = React.memo(
  ({
    label,
    selected = false,
    multiple = false,
    ...props
  }: SelectOptionItemProps) => {
    return (
      <Pressable style={styles.optionRow} {...props}>
        {multiple && <Checkbox selected={selected} />}
        <AppText variant="bodyMedium" style={styles.optionLabel}>{label}</AppText>
        {!multiple && selected && <Check />}
      </Pressable>
    );
  },
);

function getDisplayValue({
  value,
  options,
  placeholder,
  multiple,
}: {
  value: SelectProps['value'];
  options: OptionType[];
  placeholder: string;
  multiple: boolean;
}) {
  if (multiple && Array.isArray(value)) {
    if (value.length === 0)
      return placeholder;
    if (value.length === 1) {
      const opt = options?.find(t => t.value === value[0]);
      return opt?.label ?? placeholder;
    }
    return `${value.length} selected`;
  }
  return value !== undefined
    ? (options?.filter(t => t.value === value)?.[0]?.label ?? placeholder)
    : placeholder;
}

export function Select(props: SelectProps) {
  const {
    label,
    value,
    error,
    helperText,
    options = [],
    placeholder = translate('common.select_placeholder'),
    disabled = false,
    onSelect,
    multiple = false,
    testID,
  } = props;
  const modal = useModal();

  const onSelectOption = React.useCallback(
    (option: OptionType) => {
      if (!multiple) {
        onSelect?.(option.value);
        modal.dismiss();
      }
    },
    [multiple, onSelect, modal],
  );

  const handleConfirm = React.useCallback(
    (values: (string | number)[]) => {
      onSelect?.(values);
      modal.dismiss();
    },
    [onSelect, modal],
  );

  const handleCancel = React.useCallback(() => {
    modal.dismiss();
  }, [modal]);

  const textValue = React.useMemo(
    () => getDisplayValue({ value, options, placeholder, multiple }),
    [value, options, placeholder, multiple],
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
        <Pressable
          style={[
            styles.trigger,
            Boolean(error) && styles.triggerError,
            disabled && styles.triggerDisabled,
          ]}
          disabled={disabled}
          onPress={modal.present}
          testID={testID ? `${testID}-trigger` : undefined}
        >
          <View style={styles.triggerContent}>
            <AppText color="primary">{textValue}</AppText>
          </View>
          <Icon name="caret-down" />
        </Pressable>
        {error && (
          <AppText
            testID={`${testID}-error`}
            variant="bodySmall"
            color="error"
            style={styles.helperText}
          >
            {error}
          </AppText>
        )}
        {showHelper && (
          <AppText
            testID={`${testID}-helper`}
            variant="bodySmall"
            color="secondary"
            style={styles.helperText}
          >
            {helperText}
          </AppText>
        )}
      </View>
      <Options
        testID={testID}
        ref={modal.ref}
        options={options}
        onSelect={onSelectOption}
        value={value}
        multiple={multiple}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </>
  );
}

function Check({ ...props }: SvgProps) {
  const { theme } = useTheme();
  return (
    <Svg
      width={25}
      height={24}
      fill="none"
      viewBox="0 0 25 24"
      {...props}
      stroke={theme.colors.text.primary}
    >
      <Path
        d="m20.256 6.75-10.5 10.5L4.506 12"
        strokeWidth={2.438}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
