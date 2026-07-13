import type * as React from 'react';
import type { TxKeyPath } from '@/lib/i18n';

export type SettingsItemProps = {
  text: TxKeyPath;
  value?: string;
  onPress?: () => void;
  icon?: React.ReactNode;
};
