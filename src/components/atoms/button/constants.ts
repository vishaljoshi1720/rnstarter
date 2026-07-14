import type { TextStyle, ViewStyle } from 'react-native';
import type { ButtonSize, ButtonVariant } from './types';
import { styles } from './styles';

type VariantConfig = {
  containerStyle: ViewStyle;
  rippleColor: string;
};

type SizeConfig = {
  containerStyle: ViewStyle;
  labelStyle: TextStyle;
  iconSize: number;
};

/**
 * Container + ripple only. Label colors resolve live via useTheme in Button.
 */
export const VARIANT_CONFIG: Record<ButtonVariant, VariantConfig> = {
  default: {
    containerStyle: styles.variantDefault,
    rippleColor: 'rgba(0, 0, 0, 0.12)',
  },
  secondary: {
    containerStyle: styles.variantSecondary,
    rippleColor: 'rgba(255, 255, 255, 0.2)',
  },
  outline: {
    containerStyle: styles.variantOutline,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
  destructive: {
    containerStyle: styles.variantDestructive,
    rippleColor: 'rgba(255, 255, 255, 0.2)',
  },
  ghost: {
    containerStyle: styles.variantGhost,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
  link: {
    containerStyle: styles.variantLink,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
};

export const SIZE_CONFIG: Record<ButtonSize, SizeConfig> = {
  default: {
    containerStyle: styles.sizeDefault,
    labelStyle: styles.label,
    iconSize: 20,
  },
  lg: {
    containerStyle: styles.sizeLg,
    labelStyle: styles.labelLg,
    iconSize: 24,
  },
  sm: {
    containerStyle: styles.sizeSm,
    labelStyle: styles.labelSm,
    iconSize: 16,
  },
  icon: {
    containerStyle: styles.sizeIcon,
    labelStyle: styles.label,
    iconSize: 20,
  },
};

export const DISABLED_CONFIG: VariantConfig = {
  containerStyle: styles.disabled,
  rippleColor: 'rgba(0, 0, 0, 0.05)',
};
