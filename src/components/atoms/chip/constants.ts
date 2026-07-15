import type { TextStyle, ViewStyle } from 'react-native';
import type { ChipSize, ChipVariant } from './types';
import { styles } from './styles';

type VariantConfig = {
  containerStyle: ViewStyle;
  labelStyle: TextStyle;
  rippleColor: string;
};

type SizeConfig = {
  containerStyle: ViewStyle;
  iconSize: number;
};

export const VARIANT_CONFIG: Record<ChipVariant, VariantConfig> = {
  default: {
    containerStyle: styles.variantDefault,
    labelStyle: styles.labelDefault,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
  primary: {
    containerStyle: styles.variantPrimary,
    labelStyle: styles.labelPrimary,
    rippleColor: 'rgba(0, 0, 0, 0.12)',
  },
  success: {
    containerStyle: styles.variantSuccess,
    labelStyle: styles.labelSuccess,
    rippleColor: 'rgba(255, 255, 255, 0.2)',
  },
  warning: {
    containerStyle: styles.variantWarning,
    labelStyle: styles.labelWarning,
    rippleColor: 'rgba(255, 255, 255, 0.2)',
  },
  error: {
    containerStyle: styles.variantError,
    labelStyle: styles.labelError,
    rippleColor: 'rgba(255, 255, 255, 0.2)',
  },
  outline: {
    containerStyle: styles.variantOutline,
    labelStyle: styles.labelOutline,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
};

export const SIZE_CONFIG: Record<ChipSize, SizeConfig> = {
  sm: {
    containerStyle: styles.sizeSm,
    iconSize: 14,
  },
  md: {
    containerStyle: styles.sizeMd,
    iconSize: 16,
  },
  lg: {
    containerStyle: styles.sizeLg,
    iconSize: 20,
  },
};

export const DISABLED_CONFIG: VariantConfig = {
  containerStyle: styles.disabled,
  labelStyle: styles.labelDisabled,
  rippleColor: 'rgba(0, 0, 0, 0.02)',
};
