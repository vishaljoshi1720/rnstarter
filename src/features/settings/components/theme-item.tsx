import type { ColorScheme } from '@/common/types';

import type { OptionType } from '@/components/ui';

import * as React from 'react';
import { useSelectedTheme } from '@/common/hooks';
import { Options, useModal } from '@/components/ui';
import { getThemeOptions } from '@/features/settings/constants';

import { SettingsItem } from './settings-item';

export function ThemeItem() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const modal = useModal();

  const onSelect = React.useCallback(
    (option: OptionType) => {
      setSelectedTheme(option.value as ColorScheme);
      modal.dismiss();
    },
    [setSelectedTheme, modal],
  );

  const themes = React.useMemo(() => getThemeOptions(), []);

  const theme = React.useMemo(
    () => themes.find(t => t.value === selectedTheme),
    [selectedTheme, themes],
  );

  return (
    <>
      <SettingsItem
        text="settings.theme.title"
        value={theme?.label}
        onPress={modal.present}
      />
      <Options
        ref={modal.ref}
        options={themes}
        onSelect={onSelect}
        value={theme?.value}
      />
    </>
  );
}
