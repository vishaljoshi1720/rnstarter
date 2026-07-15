import type { TextStyle, ViewStyle } from 'react-native';
import type { BadgeSize, BadgeVariant } from './types';
import { styles } from './styles';

type VariantConfig = {
  containerStyle: ViewStyle;
  labelStyle: TextStyle;
  dotStyle: ViewStyle;
};

type SizeConfig = {
  containerStyle: ViewStyle;
};

export const VARIANT_CONFIG: Record<BadgeVariant, VariantConfig> = {
  default: {
    containerStyle: styles.variantDefault,
    labelStyle: styles.labelDefault,
    dotStyle: styles.dotDefault,
  },
  success: {
    containerStyle: styles.variantSuccess,
    labelStyle: styles.labelSuccess,
    dotStyle: styles.dotSuccess,
  },
  warning: {
    containerStyle: styles.variantWarning,
    labelStyle: styles.labelWarning,
    dotStyle: styles.dotWarning,
  },
  error: {
    containerStyle: styles.variantError,
    labelStyle: styles.labelError,
    dotStyle: styles.dotError,
  },
  info: {
    containerStyle: styles.variantInfo,
    labelStyle: styles.labelInfo,
    dotStyle: styles.dotInfo,
  },
  outline: {
    containerStyle: styles.variantOutline,
    labelStyle: styles.labelOutline,
    dotStyle: styles.dotOutline,
  },
};

export const SIZE_CONFIG: Record<BadgeSize, SizeConfig> = {
  sm: {
    containerStyle: styles.sizeSm,
  },
  md: {
    containerStyle: styles.sizeMd,
  },
  lg: {
    containerStyle: styles.sizeLg,
  },
};
