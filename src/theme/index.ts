import { StyleSheet } from 'react-native-unistyles';

import { breakpoints } from './breakpoints';
import { darkTheme } from './themes/dark';
import { lightTheme } from './themes/light';

const appThemes = {
  light: lightTheme,
  dark: darkTheme,
};

type AppThemes = typeof appThemes;
type AppBreakpoints = typeof breakpoints;

declare module 'react-native-unistyles' {
  // eslint-disable-next-line ts/consistent-type-definitions
  export interface UnistylesThemes extends AppThemes {}
  // eslint-disable-next-line ts/consistent-type-definitions
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  themes: appThemes,
  breakpoints,
  settings: {
    adaptiveThemes: true,
  },
});

export { breakpoints } from './breakpoints';
export { borderWidth, radius, size, sizeH, sizeW } from './tokens/border';
export { palette } from './tokens/colors';
export { gap, spacingX, spacingY } from './tokens/spacing';
export { fontFamily, fontSize, fontWeight } from './tokens/typography';
export { useAppTheme } from './use-app-theme';
export {
  ms,
  mvs,
  s,
  scale,
  verticalScale,
  vs,
} from '@/common/utils/scale';
