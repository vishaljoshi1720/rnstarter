import type { ViewStyle } from 'react-native';
import type { IconButtonSize, IconButtonVariant } from './types';
import { styles } from './styles';

type VariantConfig = {
  containerStyle: ViewStyle;
  rippleColor: string;
};

type SizeConfig = {
  containerStyle: ViewStyle;
};

export const VARIANT_CONFIG: Record<IconButtonVariant, VariantConfig> = {
  default: {
    containerStyle: styles.variantDefault,
    rippleColor: 'rgba(0, 0, 0, 0.1)',
  },
  ghost: {
    containerStyle: styles.variantGhost,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
  outline: {
    containerStyle: styles.variantOutline,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
};

export const SIZE_CONFIG: Record<IconButtonSize, SizeConfig> = {
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

export const DISABLED_CONFIG: VariantConfig = {
  containerStyle: styles.disabled,
  rippleColor: 'rgba(0, 0, 0, 0.02)',
};
