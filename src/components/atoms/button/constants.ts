import type { TextStyle, ViewStyle } from 'react-native';
import type { ButtonSize, ButtonVariant } from './types';
import { styles } from './styles';

type VariantConfig = {
  containerStyle: ViewStyle;
  labelStyle: TextStyle;
  indicatorColor: string;
  rippleColor: string;
};

type SizeConfig = {
  containerStyle: ViewStyle;
  labelStyle: TextStyle;
  iconSize: number;
};

/**
 * Complete variant configuration.
 * Adding a new variant = add one entry here with all behavioral properties.
 */
export const VARIANT_CONFIG: Record<ButtonVariant, VariantConfig> = {
  default: {
    containerStyle: styles.variantDefault,
    labelStyle: styles.labelDefault,
    indicatorColor: styles.labelDefault.color as string,
    rippleColor: 'rgba(255, 255, 255, 0.2)',
  },
  secondary: {
    containerStyle: styles.variantSecondary,
    labelStyle: styles.labelSecondary,
    indicatorColor: styles.labelSecondary.color as string,
    rippleColor: 'rgba(255, 255, 255, 0.2)',
  },
  outline: {
    containerStyle: styles.variantOutline,
    labelStyle: styles.labelOutline,
    indicatorColor: styles.labelOutline.color as string,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
  destructive: {
    containerStyle: styles.variantDestructive,
    labelStyle: styles.labelDestructive,
    indicatorColor: styles.labelDestructive.color as string,
    rippleColor: 'rgba(255, 255, 255, 0.2)',
  },
  ghost: {
    containerStyle: styles.variantGhost,
    labelStyle: styles.labelGhost,
    indicatorColor: styles.labelGhost.color as string,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
  link: {
    containerStyle: styles.variantLink,
    labelStyle: styles.labelLink,
    indicatorColor: styles.labelLink.color as string,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
};

/**
 * Complete size configuration.
 * Adding a new size = add one entry here.
 */
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

/**
 * Disabled state overrides.
 */
export const DISABLED_CONFIG: VariantConfig = {
  containerStyle: styles.disabled,
  labelStyle: styles.labelDisabled,
  indicatorColor: styles.indicatorDisabled.color as string,
  rippleColor: 'rgba(0, 0, 0, 0.05)',
};
