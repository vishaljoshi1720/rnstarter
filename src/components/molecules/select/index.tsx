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
import { Icon } from '@/components/atoms/icon';
import { Pressable } from '@/components/atoms/pressable';
import { AppText } from '@/components/atoms/text';
import { View } from '@/components/atoms/view';
import { Modal, useModal } from '@/components/organisms/modal';
import { translate } from '@/lib/i18n';
import { useTheme } from '@/theme';
import { styles } from './styles';

export type { OptionsProps, OptionType, SelectProps } from './types';

const List = Platform.OS === 'web' ? FlashList : BottomSheetFlatList;

function keyExtractor(item: OptionType) {
  return `select-item-${item.value}`;
}

export function Options({ ref, options, onSelect, value, testID }: OptionsProps & { ref?: React.RefObject<BottomSheetModal | null> }) {
  const height = options.length * 70 + 100;
  const snapPoints = React.useMemo(() => [height], [height]);
  const { theme } = useTheme();

  const renderSelectItem = React.useCallback(
    ({ item }: { item: OptionType }) => (
      <Option
        key={`select-item-${item.value}`}
        label={item.label}
        selected={value === item.value}
        onPress={() => onSelect(item)}
        testID={testID ? `${testID}-item-${item.value}` : undefined}
      />
    ),
    [onSelect, value, testID],
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
      <List
        data={options}
        keyExtractor={keyExtractor}
        renderItem={renderSelectItem}
        testID={testID ? `${testID}-modal` : undefined}
        estimatedItemSize={52}
      />
    </Modal>
  );
}

const Option = React.memo(
  ({
    label,
    selected = false,
    ...props
  }: SelectOptionItemProps) => {
    return (
      <Pressable style={styles.optionRow} {...props}>
        <AppText variant="bodyMedium" style={styles.optionLabel}>{label}</AppText>
        {selected && <Check />}
      </Pressable>
    );
  },
);

export function Select(props: SelectProps) {
  const {
    label,
    value,
    error,
    options = [],
    placeholder = translate('common.select_placeholder'),
    disabled = false,
    onSelect,
    testID,
  } = props;
  const modal = useModal();

  const onSelectOption = React.useCallback(
    (option: OptionType) => {
      onSelect?.(option.value);
      modal.dismiss();
    },
    [modal, onSelect],
  );

  const textValue = React.useMemo(
    () =>
      value !== undefined
        ? (options?.filter(t => t.value === value)?.[0]?.label ?? placeholder)
        : placeholder,
    [value, options, placeholder],
  );

  return (
    <>
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
            <AppText color={error ? 'error' : 'primary'}>
              {textValue}
            </AppText>
          </View>
          <Icon name="caret-down" />
        </Pressable>
        {error && (
          <AppText
            testID={`${testID}-error`}
            variant="bodySmall"
            color="error"
          >
            {error}
          </AppText>
        )}
      </View>
      <Options
        testID={testID}
        ref={modal.ref}
        options={options}
        onSelect={onSelectOption}
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
