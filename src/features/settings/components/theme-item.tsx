import type { SettingsOption } from './settings-options-sheet';
import type { ColorScheme } from '@/common/types';

import * as React from 'react';
import { useSelectedTheme } from '@/common/hooks';
import { useModal } from '@/components';
import { getThemeOptions } from '@/features/settings/constants';
import { translate } from '@/lib/i18n';
import { SettingsItem } from './settings-item';
import { SettingsOptionsSheet } from './settings-options-sheet';

export function ThemeItem() {
  const { selectedTheme, setSelectedTheme } = useSelectedTheme();
  const modal = useModal();
  const themes = React.useMemo(() => getThemeOptions(), []);

  const selected = React.useMemo(
    () => themes.find(t => t.value === selectedTheme),
    [selectedTheme, themes],
  );

  const onSelect = React.useCallback(
    (option: SettingsOption) => {
      setSelectedTheme(option.value as ColorScheme);
      modal.dismiss();
    },
    [setSelectedTheme, modal],
  );

  return (
    <>
      <SettingsItem
        text="settings.theme.title"
        value={selected?.label}
        onPress={modal.present}
      />
      <SettingsOptionsSheet
        ref={modal.ref}
        title={translate('settings.theme.title')}
        options={themes}
        value={selectedTheme}
        onSelect={onSelect}
      />
    </>
  );
}
