import type { OptionType } from '@/components';

import { ColorScheme } from '@/common/types';
import { translate } from '@/lib/i18n';

export function getThemeOptions(): OptionType[] {
  return [
    { label: translate('settings.theme.dark'), value: ColorScheme.Dark },
    { label: translate('settings.theme.light'), value: ColorScheme.Light },
    { label: translate('settings.theme.system'), value: ColorScheme.System },
  ];
}
