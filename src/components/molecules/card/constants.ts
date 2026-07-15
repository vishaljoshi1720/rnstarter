import type { ViewStyle } from 'react-native';
import type { CardVariant } from './types';
import { styles } from './styles';

type VariantConfig = {
  containerStyle: ViewStyle;
  rippleColor: string;
};

export const VARIANT_CONFIG: Record<CardVariant, VariantConfig> = {
  default: {
    containerStyle: styles.default,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
  elevated: {
    containerStyle: styles.elevated,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
  outlined: {
    containerStyle: styles.outlined,
    rippleColor: 'rgba(0, 0, 0, 0.05)',
  },
};
