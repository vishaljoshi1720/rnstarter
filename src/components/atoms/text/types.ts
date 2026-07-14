import type { StyleProp, TextProps, TextStyle } from 'react-native';
import type { TxKeyPath } from '@/lib/i18n';

export type AppTextVariant
  = | 'displayLarge'
    | 'displayMedium'
    | 'displaySmall'
    | 'headlineLarge'
    | 'headlineMedium'
    | 'headlineSmall'
    | 'titleLarge'
    | 'titleMedium'
    | 'titleSmall'
    | 'bodyXL'
    | 'bodyLarge'
    | 'bodyMedium'
    | 'bodySmall'
    | 'labelLarge'
    | 'labelMedium'
    | 'labelSmall'
    | 'caption'
    | 'overline';

export type AppTextColor
  = | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'disabled'
    | 'inverse'
    | 'onBrand'
    | 'onAccent'
    | 'link'
    | 'error'
    | 'success'
    | 'warning'
    | 'info';

export type AppTextProps = {
  /**
   * Typography token from theme (`displayLarge`, `bodyMedium`, …).
   * @default 'bodyMedium'
   */
  variant?: AppTextVariant;
  /**
   * Semantic text color.
   * @default 'primary'
   */
  color?: AppTextColor;
  /** i18n key — when set, translated string used as children. */
  tx?: TxKeyPath;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode;
} & Omit<TextProps, 'style' | 'children'>;
