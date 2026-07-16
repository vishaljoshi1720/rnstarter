import type { SettingsOption } from './settings-options-sheet';
import type { Language } from '@/lib/i18n/resources';

import * as React from 'react';
import { useModal } from '@/components';
import { translate, useSelectedLanguage } from '@/lib/i18n';
import { SettingsItem } from './settings-item';
import { SettingsOptionsSheet } from './settings-options-sheet';

export function LanguageItem() {
  const { language, setLanguage } = useSelectedLanguage();
  const modal = useModal();

  const langs = React.useMemo<SettingsOption[]>(
    () => [
      { label: translate('settings.english'), value: 'en' },
      { label: translate('settings.arabic'), value: 'ar' },
    ],
    [],
  );

  const selected = React.useMemo(
    () => langs.find(lang => lang.value === language),
    [language, langs],
  );

  const onSelect = React.useCallback(
    (option: SettingsOption) => {
      setLanguage(option.value as Language);
      modal.dismiss();
    },
    [setLanguage, modal],
  );

  return (
    <>
      <SettingsItem
        text="settings.language"
        value={selected?.label}
        onPress={modal.present}
      />
      <SettingsOptionsSheet
        ref={modal.ref}
        title={translate('settings.language')}
        options={langs}
        value={language}
        onSelect={onSelect}
      />
    </>
  );
}
