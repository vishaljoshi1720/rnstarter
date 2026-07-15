import type { ViewStyle } from 'react-native';
import type { SpacerSize } from './types';
import { styles } from './styles';

type SizeConfig = {
  verticalStyle: ViewStyle;
  horizontalStyle: ViewStyle;
};

export const SIZE_CONFIG: Record<SpacerSize, SizeConfig> = {
  'xs': {
    verticalStyle: styles.verticalXs,
    horizontalStyle: styles.horizontalXs,
  },
  'sm': {
    verticalStyle: styles.verticalSm,
    horizontalStyle: styles.horizontalSm,
  },
  'md': {
    verticalStyle: styles.verticalMd,
    horizontalStyle: styles.horizontalMd,
  },
  'lg': {
    verticalStyle: styles.verticalLg,
    horizontalStyle: styles.horizontalLg,
  },
  'xl': {
    verticalStyle: styles.verticalXl,
    horizontalStyle: styles.horizontalXl,
  },
  '2xl': {
    verticalStyle: styles.vertical2xl,
    horizontalStyle: styles.horizontal2xl,
  },
};
