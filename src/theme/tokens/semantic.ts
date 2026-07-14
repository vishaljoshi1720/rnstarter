/**
 * Semantic Design Tokens
 *
 * Purpose-driven color tokens that reference primitive colors.
 * These provide meaning and context to raw colors.
 */

import { primitive } from './primitive';

export const lightSemantic = {
  // Background colors
  background: {
    primary: primitive.white,
    secondary: primitive.neutral50,
    tertiary: primitive.neutral100,
  },

  // Surface colors (cards, containers, elevated elements)
  surface: {
    default: primitive.white,
    elevated: primitive.white,
    overlay: primitive.white,
  },

  // Text colors
  text: {
    primary: primitive.neutral900,
    secondary: primitive.neutral600,
    tertiary: primitive.neutral500,
    disabled: primitive.neutral400,
    inverse: primitive.white,
    link: primitive.info600,
  },

  // Border colors
  border: {
    default: primitive.neutral300,
    focus: primitive.neutral400,
    error: primitive.error600,
    disabled: primitive.neutral200,
  },

  // Icon colors
  icon: {
    default: primitive.neutral700,
    muted: primitive.neutral400,
    inverse: primitive.white,
    brand: primitive.primary400,
  },

  // Brand colors
  brand: {
    primary: primitive.primary400,
    secondary: primitive.secondary800,
    primaryHover: primitive.primary500,
    secondaryHover: primitive.secondary900,
  },

  // Status colors
  status: {
    success: primitive.success600,
    warning: primitive.warning500,
    error: primitive.error600,
    info: primitive.info600,
    successBg: primitive.success50,
    warningBg: primitive.warning50,
    errorBg: primitive.error50,
    infoBg: primitive.info50,
  },

  // Overlay colors
  overlay: {
    backdrop: 'rgba(0, 0, 0, 0.4)',
    scrim: 'rgba(0, 0, 0, 0.1)',
  },

  // Theme indicator
  isDark: false,
} as const;

export const darkSemantic = {
  // Background colors
  background: {
    primary: primitive.neutral950,
    secondary: primitive.neutral900,
    tertiary: primitive.neutral800,
  },

  // Surface colors (cards, containers, elevated elements)
  surface: {
    default: primitive.neutral900,
    elevated: primitive.neutral800,
    overlay: primitive.neutral800,
  },

  // Text colors
  text: {
    primary: primitive.neutral50,
    secondary: primitive.neutral300,
    tertiary: primitive.neutral400,
    disabled: primitive.neutral600,
    inverse: primitive.neutral900,
    link: primitive.info400,
  },

  // Border colors
  border: {
    default: primitive.neutral700,
    focus: primitive.neutral600,
    error: primitive.error500,
    disabled: primitive.neutral800,
  },

  // Icon colors
  icon: {
    default: primitive.neutral200,
    muted: primitive.neutral500,
    inverse: primitive.neutral900,
    brand: primitive.primary400,
  },

  // Brand colors (preserve brand identity)
  brand: {
    primary: primitive.primary400,
    secondary: primitive.secondary600,
    primaryHover: primitive.primary300,
    secondaryHover: primitive.secondary500,
  },

  // Status colors
  status: {
    success: primitive.success500,
    warning: primitive.warning400,
    error: primitive.error500,
    info: primitive.info500,
    successBg: primitive.success950,
    warningBg: primitive.warning950,
    errorBg: primitive.error950,
    infoBg: primitive.info950,
  },

  // Overlay colors
  overlay: {
    backdrop: 'rgba(0, 0, 0, 0.6)',
    scrim: 'rgba(255, 255, 255, 0.1)',
  },

  // Theme indicator
  isDark: true,
} as const;
