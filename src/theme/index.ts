/**
 * Theme Configuration
 *
 * Composes token files into complete light and dark themes,
 * configures Unistyles, and exports the theme hook.
 */

import { StyleSheet } from 'react-native-unistyles';
import {
  borderWidth,
  breakpoints,
  icon,
  iconRaw,
  motion,
  opacity,
  radius,
  radiusRaw,
  shadow,
  size,
  sizeRaw,
  spacing,
  spacingRaw,
  zIndex,
} from './tokens/layout';
import { darkSemantic, lightSemantic } from './tokens/semantic';
import { fontWeight, typography, typographyRaw } from './tokens/typography';

// Compose light theme from tokens
const lightTheme = {
  colors: lightSemantic,
  typography,
  typographyRaw,
  fontWeight,
  spacing,
  spacingRaw,
  radius,
  radiusRaw,
  borderWidth,
  shadow,
  opacity,
  motion,
  icon,
  iconRaw,
  size,
  sizeRaw,
  zIndex,
} as const;

// Compose dark theme from tokens
const darkTheme = {
  colors: darkSemantic,
  typography,
  typographyRaw,
  fontWeight,
  spacing,
  spacingRaw,
  radius,
  radiusRaw,
  borderWidth,
  shadow,
  opacity,
  motion,
  icon,
  iconRaw,
  size,
  sizeRaw,
  zIndex,
} as const;

// Theme collection
const themes = {
  light: lightTheme,
  dark: darkTheme,
} as const;

// Type definitions for module augmentation
type AppThemes = typeof themes;
type AppBreakpoints = typeof breakpoints;

// Augment Unistyles types
declare module 'react-native-unistyles' {
  // eslint-disable-next-line ts/consistent-type-definitions
  export interface UnistylesThemes extends AppThemes {}
  // eslint-disable-next-line ts/consistent-type-definitions
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

// Configure Unistyles
StyleSheet.configure({
  themes,
  breakpoints,
  settings: {
    adaptiveThemes: true,
  },
});

// Screen scaling helpers (one-off layout numbers only — prefer theme tokens)
export {
  fs,
  hs,
  moderateScale,
  moderateVerticalScale,
  mvs,
  S,
  scale,
  sp,
  verticalScale,
  ws,
} from './normalize';

// Export breakpoints for reference
export { breakpoints };

// Export single theme hook (aliased for clarity)
export { useUnistyles as useTheme } from 'react-native-unistyles';
