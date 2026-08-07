import type { ViewStyle } from 'react-native';
import type { CheckboxSize } from './types';
import { styles } from './styles';

type SizeConfig = {
  boxStyle: ViewStyle;
  iconSize: number;
};

export const SIZE_CONFIG: Record<CheckboxSize, SizeConfig> = {
  sm: {
    boxStyle: styles.sizeSm,
    iconSize: 12,
  },
  md: {
    boxStyle: styles.sizeMd,
    iconSize: 14,
  },
  lg: {
    boxStyle: styles.sizeLg,
    iconSize: 18,
  },
};
