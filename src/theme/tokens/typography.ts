/**
 * Typography Design Tokens
 *
 * Complete typography scale with semantic variants.
 * Each variant includes all 5 properties for complete text styling.
 *
 * Dual tokens:
 * - `typographyRaw` — design sizes, no screen scaling
 * - `typography`    — fontSize/lineHeight scaled with fs() (default)
 */

import { fs } from '../normalize';

/**
 * Font weight scale
 */
export const fontWeight = {
  thin: '100',
  extralight: '200',
  light: '300',
  regular: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
} as const;

export const typographyRaw = {
  // Display variants (largest, for hero sections)
  displayLarge: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 57,
    lineHeight: 64,
    letterSpacing: -0.5,
  },
  displayMedium: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: 45,
    lineHeight: 52,
    letterSpacing: -0.3,
  },
  displaySmall: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: -0.2,
  },

  // Headline variants (section headers)
  headlineLarge: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.2,
  },
  headlineMedium: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 28,
    lineHeight: 36,
    letterSpacing: -0.1,
  },
  headlineSmall: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 24,
    lineHeight: 32,
    letterSpacing: 0,
  },

  // Title variants (subsection headers, card titles)
  titleLarge: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: 22,
    lineHeight: 28,
    letterSpacing: 0,
  },
  titleMedium: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  titleSmall: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.1,
  },

  // Body variants (main content)
  bodyXL: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 18,
    lineHeight: 28,
    letterSpacing: 0,
  },
  bodyLarge: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  bodyMedium: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.2,
  },
  bodySmall: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.2,
  },

  // Label variants (buttons, form labels, badges)
  labelLarge: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    letterSpacing: 0.1,
  },
  labelMedium: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: 0.2,
  },
  labelSmall: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.3,
  },

  // Caption (helper text, timestamps, meta info)
  caption: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 11,
    lineHeight: 14,
    letterSpacing: 0.3,
  },

  // Overline (labels, categories, all caps)
  overline: {
    fontFamily: 'Inter',
    fontWeight: '500',
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.5,
  },
} as const;

type TypeVariant = {
  fontFamily: string;
  fontWeight: string;
  fontSize: number;
  lineHeight: number;
  letterSpacing: number;
};

function scaleTypeVariant<T extends TypeVariant>(variant: T) {
  return {
    ...variant,
    fontSize: fs(variant.fontSize),
    lineHeight: fs(variant.lineHeight),
  };
}

/** Typography — fontSize/lineHeight screen-scaled (default) */
export const typography = {
  displayLarge: scaleTypeVariant(typographyRaw.displayLarge),
  displayMedium: scaleTypeVariant(typographyRaw.displayMedium),
  displaySmall: scaleTypeVariant(typographyRaw.displaySmall),
  headlineLarge: scaleTypeVariant(typographyRaw.headlineLarge),
  headlineMedium: scaleTypeVariant(typographyRaw.headlineMedium),
  headlineSmall: scaleTypeVariant(typographyRaw.headlineSmall),
  titleLarge: scaleTypeVariant(typographyRaw.titleLarge),
  titleMedium: scaleTypeVariant(typographyRaw.titleMedium),
  titleSmall: scaleTypeVariant(typographyRaw.titleSmall),
  bodyXL: scaleTypeVariant(typographyRaw.bodyXL),
  bodyLarge: scaleTypeVariant(typographyRaw.bodyLarge),
  bodyMedium: scaleTypeVariant(typographyRaw.bodyMedium),
  bodySmall: scaleTypeVariant(typographyRaw.bodySmall),
  labelLarge: scaleTypeVariant(typographyRaw.labelLarge),
  labelMedium: scaleTypeVariant(typographyRaw.labelMedium),
  labelSmall: scaleTypeVariant(typographyRaw.labelSmall),
  caption: scaleTypeVariant(typographyRaw.caption),
  overline: scaleTypeVariant(typographyRaw.overline),
} as const;
