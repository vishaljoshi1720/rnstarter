import type { ViewStyle } from 'react-native';
import type { AvatarSize } from './types';
import { styles } from './styles';

type SizeConfig = {
  containerStyle: ViewStyle;
  fontSize: number;
};

export const SIZE_CONFIG: Record<AvatarSize, SizeConfig> = {
  'xs': {
    containerStyle: styles.sizeXs,
    fontSize: 10,
  },
  'sm': {
    containerStyle: styles.sizeSm,
    fontSize: 12,
  },
  'md': {
    containerStyle: styles.sizeMd,
    fontSize: 16,
  },
  'lg': {
    containerStyle: styles.sizeLg,
    fontSize: 20,
  },
  'xl': {
    containerStyle: styles.sizeXl,
    fontSize: 24,
  },
  '2xl': {
    containerStyle: styles.size2xl,
    fontSize: 32,
  },
};
