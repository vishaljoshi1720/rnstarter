/**
 * Semantic Design Tokens
 */

import { primitive } from './primitive';

export const lightSemantic = {
  background: {
    primary: primitive.white,
    secondary: primitive.neutral50,
    tertiary: primitive.neutral100,
  },

  surface: {
    default: primitive.white,
    elevated: primitive.neutral100,
    overlay: primitive.white,
  },

  text: {
    primary: primitive.neutral900,
    secondary: primitive.neutral500,
    tertiary: primitive.neutral400,
    disabled: primitive.neutral300,
    inverse: primitive.white,
    /** Light text on indigo (primary CTA) — same in light/dark */
    onBrand: primitive.white,
    /** Light text on clay / error / solid accents — same in light/dark */
    onAccent: primitive.white,
    link: primitive.info600,
  },

  border: {
    default: primitive.neutral200,
    focus: primitive.neutral300,
    error: primitive.error600,
    disabled: primitive.neutral100,
  },

  icon: {
    default: primitive.neutral600,
    muted: primitive.neutral400,
    inverse: primitive.white,
    brand: primitive.primary500,
  },

  brand: {
    primary: primitive.primary500,
    secondary: primitive.secondary500,
    primaryHover: primitive.primary600,
    secondaryHover: primitive.secondary600,
  },

  status: {
    success: primitive.success500,
    warning: primitive.warning500,
    error: primitive.error500,
    info: primitive.info500,
    successBg: primitive.success50,
    warningBg: primitive.warning50,
    errorBg: primitive.error50,
    infoBg: primitive.info50,
  },

  overlay: {
    backdrop: 'rgba(0, 0, 0, 0.4)',
    scrim: 'rgba(0, 0, 0, 0.1)',
  },

  isDark: false,
} as const;

export const darkSemantic = {
  background: {
    primary: primitive.neutral950,
    secondary: primitive.neutral900,
    tertiary: primitive.neutral800,
  },

  surface: {
    default: primitive.neutral900,
    elevated: primitive.neutral800,
    overlay: primitive.neutral900,
  },

  text: {
    primary: primitive.neutral50,
    secondary: primitive.neutral400,
    tertiary: primitive.neutral500,
    disabled: primitive.neutral600,
    inverse: primitive.neutral950,
    onBrand: primitive.white,
    onAccent: primitive.white,
    link: primitive.info300,
  },

  border: {
    default: primitive.neutral700,
    focus: primitive.neutral500,
    error: primitive.error400,
    disabled: primitive.neutral800,
  },

  icon: {
    default: primitive.neutral300,
    muted: primitive.neutral500,
    inverse: primitive.neutral950,
    brand: primitive.primary300,
  },

  brand: {
    primary: primitive.primary300,
    secondary: primitive.secondary300,
    primaryHover: primitive.primary200,
    secondaryHover: primitive.secondary200,
  },

  status: {
    success: primitive.success300,
    warning: primitive.warning300,
    error: primitive.error300,
    info: primitive.info300,
    successBg: primitive.success950,
    warningBg: primitive.warning950,
    errorBg: primitive.error950,
    infoBg: primitive.info950,
  },

  overlay: {
    backdrop: 'rgba(0, 0, 0, 0.6)',
    scrim: 'rgba(255, 255, 255, 0.1)',
  },

  isDark: true,
} as const;
