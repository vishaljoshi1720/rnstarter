/**
 * Layout Design Tokens
 *
 * Spacing, radius, shadows, opacity, motion, sizing, z-index, and breakpoints.
 * These tokens control the physical layout and visual hierarchy.
 *
 * Dual tokens:
 * - `*Raw`  — design-system numbers, no screen scaling (escape hatch)
 * - default — scaled for the active device (use these in styles)
 */

import { Platform } from 'react-native';

import { fs, hs, sp, ws } from '../normalize';

/**
 * Spacing scale - 8pt grid system (unscaled)
 * Use for padding, margin, gap when fixed px needed
 */
export const spacingRaw = {
  'none': 0,
  '2xs': 2,
  'xs': 4,
  'sm': 8,
  'md': 12,
  'lg': 16,
  'xl': 24,
  '2xl': 32,
  '3xl': 48,
  '4xl': 64,
  '5xl': 80,
} as const;

/** Spacing scale — screen-scaled (default) */
export const spacing = {
  'none': spacingRaw.none,
  '2xs': sp(spacingRaw['2xs']),
  'xs': sp(spacingRaw.xs),
  'sm': sp(spacingRaw.sm),
  'md': sp(spacingRaw.md),
  'lg': sp(spacingRaw.lg),
  'xl': sp(spacingRaw.xl),
  '2xl': sp(spacingRaw['2xl']),
  '3xl': sp(spacingRaw['3xl']),
  '4xl': sp(spacingRaw['4xl']),
  '5xl': sp(spacingRaw['5xl']),
} as const;

/**
 * Border radius scale (unscaled)
 */
export const radiusRaw = {
  'none': 0,
  'xs': 2,
  'sm': 4,
  'md': 6,
  'lg': 8,
  'xl': 12,
  '2xl': 16,
  '3xl': 24,
  'full': 9999,
} as const;

/** Border radius — screen-scaled (default). `full` stays unscaled. */
export const radius = {
  'none': radiusRaw.none,
  'xs': fs(radiusRaw.xs),
  'sm': fs(radiusRaw.sm),
  'md': fs(radiusRaw.md),
  'lg': fs(radiusRaw.lg),
  'xl': fs(radiusRaw.xl),
  '2xl': fs(radiusRaw['2xl']),
  '3xl': fs(radiusRaw['3xl']),
  'full': radiusRaw.full,
} as const;

/**
 * Border width scale — always unscaled (hairlines must stay fixed)
 */
export const borderWidth = {
  none: 0,
  hairline: 0.5,
  thin: 1,
  default: 1,
  medium: 2,
  thick: 3,
} as const;

/**
 * Shadow scale - platform-independent elevation
 * Android uses elevation, iOS uses shadow properties
 */
export const shadow = {
  'xs': Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
    },
    android: {
      elevation: 1,
    },
    default: {},
  }),
  'sm': Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 3,
    },
    android: {
      elevation: 2,
    },
    default: {},
  }),
  'md': Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 6,
    },
    android: {
      elevation: 4,
    },
    default: {},
  }),
  'lg': Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.2,
      shadowRadius: 10,
    },
    android: {
      elevation: 8,
    },
    default: {},
  }),
  'xl': Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 12 },
      shadowOpacity: 0.25,
      shadowRadius: 16,
    },
    android: {
      elevation: 12,
    },
    default: {},
  }),
  '2xl': Platform.select({
    ios: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 24 },
      shadowOpacity: 0.3,
      shadowRadius: 24,
    },
    android: {
      elevation: 16,
    },
    default: {},
  }),
} as const;

/**
 * Opacity scale
 */
export const opacity = {
  0: 0,
  10: 0.1,
  20: 0.2,
  30: 0.3,
  40: 0.4,
  50: 0.5,
  60: 0.6,
  70: 0.7,
  80: 0.8,
  90: 0.9,
  100: 1,
  disabled: 0.5,
} as const;

/**
 * Motion/animation duration scale (in milliseconds)
 */
export const motion = {
  fast: 150,
  normal: 250,
  slow: 350,
  slower: 500,
} as const;

/**
 * Icon size scale (unscaled)
 */
export const iconRaw = {
  'xs': 12,
  'sm': 16,
  'md': 20,
  'lg': 24,
  'xl': 32,
  '2xl': 40,
  '3xl': 48,
} as const;

/** Icon size — screen-scaled (default) */
export const icon = {
  'xs': fs(iconRaw.xs),
  'sm': fs(iconRaw.sm),
  'md': fs(iconRaw.md),
  'lg': fs(iconRaw.lg),
  'xl': fs(iconRaw.xl),
  '2xl': fs(iconRaw['2xl']),
  '3xl': fs(iconRaw['3xl']),
} as const;

/**
 * Component size scale (unscaled)
 * Defines consistent dimensions for interactive components
 */
export const sizeRaw = {
  button: {
    sm: 32,
    md: 40,
    lg: 48,
  },
  input: {
    sm: 32,
    md: 40,
    lg: 48,
  },
  avatar: {
    'xs': 24,
    'sm': 32,
    'md': 40,
    'lg': 48,
    'xl': 64,
    '2xl': 96,
  },
  badge: {
    sm: 20,
    md: 24,
    lg: 28,
  },
  checkbox: {
    default: 24,
  },
  radio: {
    default: 24,
    dot: 10,
  },
  /** Keep fixed — thumb math / hit geometry */
  switch: {
    width: 50,
    height: 28,
    thumb: 22,
  },
  /** Keep fixed — hairline-ish bars */
  progressBar: {
    height: 2,
  },
  handle: {
    width: 48,
    height: 4,
  },
} as const;

/**
 * Component sizes — scaled where safe.
 * `switch`, `progressBar`, and handle height stay on raw values intentionally.
 */
export const size = {
  button: {
    sm: hs(sizeRaw.button.sm),
    md: hs(sizeRaw.button.md),
    lg: hs(sizeRaw.button.lg),
  },
  input: {
    sm: hs(sizeRaw.input.sm),
    md: hs(sizeRaw.input.md),
    lg: hs(sizeRaw.input.lg),
  },
  avatar: {
    'xs': fs(sizeRaw.avatar.xs),
    'sm': fs(sizeRaw.avatar.sm),
    'md': fs(sizeRaw.avatar.md),
    'lg': fs(sizeRaw.avatar.lg),
    'xl': fs(sizeRaw.avatar.xl),
    '2xl': fs(sizeRaw.avatar['2xl']),
  },
  badge: {
    sm: hs(sizeRaw.badge.sm),
    md: hs(sizeRaw.badge.md),
    lg: hs(sizeRaw.badge.lg),
  },
  checkbox: {
    default: fs(sizeRaw.checkbox.default),
  },
  radio: {
    default: fs(sizeRaw.radio.default),
    dot: fs(sizeRaw.radio.dot),
  },
  switch: sizeRaw.switch,
  progressBar: sizeRaw.progressBar,
  handle: {
    width: ws(sizeRaw.handle.width),
    height: sizeRaw.handle.height,
  },
} as const;

/**
 * Z-index scale for layering
 */
export const zIndex = {
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070,
} as const;

/**
 * Responsive breakpoints
 */
export const breakpoints = {
  phone: 0,
  tablet: 768,
  desktop: 1024,
} as const;
