import type { BottomSheetModal } from '@gorhom/bottom-sheet';

import { Check } from 'lucide-react-native';
import * as React from 'react';
import { AppText, Modal, Pressable, View } from '@/components';
import { useTheme } from '@/theme';
import { styles } from './settings-options-sheet.styles';

export type SettingsOption = {
  label: string;
  value: string;
};

type SettingsOptionsSheetProps = {
  title: string;
  options: SettingsOption[];
  value?: string;
  onSelect: (option: SettingsOption) => void;
  ref?: React.RefObject<BottomSheetModal | null>;
};

/**
 * Simple single-select list in a bottom sheet Modal.
 * Used by Language and Theme (mode) settings.
 */
export function SettingsOptionsSheet({
  ref,
  title,
  options,
  value,
  onSelect,
}: SettingsOptionsSheetProps) {
  const { theme } = useTheme();
  const snapPoints = React.useMemo(
    () => [Math.min(120 + options.length * 56, 420)],
    [options.length],
  );

  return (
    <Modal ref={ref} snapPoints={snapPoints} title={title}>
      <View style={styles.list}>
        {options.map((option) => {
          const selected = option.value === value;
          return (
            <Pressable
              key={option.value}
              onPress={() => onSelect(option)}
              style={[styles.row, selected && styles.rowSelected]}
              accessibilityRole="button"
              accessibilityState={{ selected }}
              accessibilityLabel={option.label}
            >
              <AppText variant="bodyLarge" color="primary">
                {option.label}
              </AppText>
              {selected
                ? (
                    <Check
                      size={theme.icon.sm}
                      color={theme.colors.brand.primary}
                      strokeWidth={2.5}
                    />
                  )
                : null}
            </Pressable>
          );
        })}
      </View>
    </Modal>
  );
}
