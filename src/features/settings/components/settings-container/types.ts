import type * as React from 'react';
import type { TxKeyPath } from '@/lib/i18n';

export type SettingsContainerProps = {
  children: React.ReactNode;
  title?: TxKeyPath;
};
