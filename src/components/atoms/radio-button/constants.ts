import type { ViewStyle } from 'react-native';
import type { RadioButtonSize } from './types';
import { styles } from './styles';

type SizeConfig = {
  outerStyle: ViewStyle;
  dotScale: number;
};

export const SIZE_CONFIG: Record<RadioButtonSize, SizeConfig> = {
  sm: {
    outerStyle: styles.sizeSm,
    dotScale: 0.8,
  },
  md: {
    outerStyle: styles.sizeMd,
    dotScale: 1,
  },
  lg: {
    outerStyle: styles.sizeLg,
    dotScale: 1.2,
  },
};
