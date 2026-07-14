/**
 * Theme Configuration
 *
 * Composes token files into complete light and dark themes,
 * configures Unistyles, and exports the theme hook.
 */

import { StyleSheet } from 'react-native-unistyles';
import { borderWidth, breakpoints, icon, motion, opacity, radius, shadow, size, spacing, zIndex } from './tokens/layout';
import { darkSemantic, lightSemantic } from './tokens/semantic';
import { typography } from './tokens/typography';

// Compose light theme from tokens
const lightTheme = {
  colors: lightSemantic,
  typography,
  spacing,
  radius,
  borderWidth,
  shadow,
  opacity,
  motion,
  icon,
  size,
  zIndex,
} as const;

// Compose dark theme from tokens
const darkTheme = {
  colors: darkSemantic,
  typography,
  spacing,
  radius,
  borderWidth,
  shadow,
  opacity,
  motion,
  icon,
  size,
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

// Export single theme hook (aliased for clarity)
export { useUnistyles as useTheme } from 'react-native-unistyles';

// Export breakpoints for reference
export { breakpoints };
