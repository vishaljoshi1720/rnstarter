import type { TextStyle } from 'react-native';
import type { AppTextColor, AppTextVariant } from './types';
import { styles } from './styles';

type ThemeColors = {
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    inverse: string;
    onBrand: string;
    onAccent: string;
    link: string;
  };
  status: {
    error: string;
    success: string;
    warning: string;
    info: string;
  };
};

type VariantConfig = {
  style: TextStyle;
};

/**
 * Typography variant → resolved style.
 * Typography tokens are theme-invariant (same in light/dark).
 */
export const VARIANT_CONFIG: Record<AppTextVariant, VariantConfig> = {
  displayLarge: { style: styles.displayLarge },
  displayMedium: { style: styles.displayMedium },
  displaySmall: { style: styles.displaySmall },
  headlineLarge: { style: styles.headlineLarge },
  headlineMedium: { style: styles.headlineMedium },
  headlineSmall: { style: styles.headlineSmall },
  titleLarge: { style: styles.titleLarge },
  titleMedium: { style: styles.titleMedium },
  titleSmall: { style: styles.titleSmall },
  bodyXL: { style: styles.bodyXL },
  bodyLarge: { style: styles.bodyLarge },
  bodyMedium: { style: styles.bodyMedium },
  bodySmall: { style: styles.bodySmall },
  labelLarge: { style: styles.labelLarge },
  labelMedium: { style: styles.labelMedium },
  labelSmall: { style: styles.labelSmall },
  caption: { style: styles.caption },
  overline: { style: styles.overline },
};

/**
 * Resolve semantic color from live theme at render time.
 * Do NOT cache Unistyles style objects here — nested refs freeze first-theme values.
 */
export const COLOR_RESOLVER: Record<
  AppTextColor,
  (colors: ThemeColors) => string
> = {
  primary: c => c.text.primary,
  secondary: c => c.text.secondary,
  tertiary: c => c.text.tertiary,
  disabled: c => c.text.disabled,
  inverse: c => c.text.inverse,
  onBrand: c => c.text.onBrand,
  onAccent: c => c.text.onAccent,
  link: c => c.text.link,
  error: c => c.status.error,
  success: c => c.status.success,
  warning: c => c.status.warning,
  info: c => c.status.info,
};
