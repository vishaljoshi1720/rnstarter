import type { TextStyle, ViewStyle } from 'react-native';
import type { InputSize } from './types';
import { styles } from './styles';

type SizeConfig = {
  containerStyle: ViewStyle;
  inputStyle: TextStyle;
};

export const SIZE_CONFIG: Record<InputSize, SizeConfig> = {
  sm: {
    containerStyle: styles.sizeSm,
    inputStyle: styles.inputSm,
  },
  md: {
    containerStyle: styles.sizeMd,
    inputStyle: styles.inputMd,
  },
  lg: {
    containerStyle: styles.sizeLg,
    inputStyle: styles.inputLg,
  },
};
