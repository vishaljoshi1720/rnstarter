import type { TextProps } from 'react-native';
import type { TxKeyPath } from '@/lib/i18n';

export type AppTextProps = {
  tx?: TxKeyPath;
} & TextProps;
