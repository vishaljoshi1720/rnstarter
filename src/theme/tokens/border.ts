import { ms, s, scaleTokens, vs } from '@/common/utils/scale';

const borderWidthBase = {
  none: 0,
  hairline: 0.5,
  thin: 1,
  thick: 2,
};

/** Border widths — hairline stays physical; others moderate-scale. */
export const borderWidth = {
  none: borderWidthBase.none,
  hairline: borderWidthBase.hairline,
  thin: ms(borderWidthBase.thin),
  thick: ms(borderWidthBase.thick),
};

const radiusBase = {
  none: 0,
  xs: 4,
  sm: 5,
  md: 6,
  lg: 12,
  xl: 13,
  full: 999,
};

/** Border radius — ms() */
export const radius = scaleTokens(radiusBase, ms);

const sizeSquareBase = {
  'xs': 2,
  'sm': 20,
  'md': 24,
  'lg': 32,
  'xl': 36,
  '2xl': 40,
  '3xl': 48,
  'iconSm': 12,
  'iconMd': 24,
  'iconLg': 25,
  'radioDot': 10,
  'thumb': 22,
  'emptyIllustration': 200,
};

/**
 * Square sizes (icons, avatars, icon buttons, dots) — ms()
 */
export const size = scaleTokens(sizeSquareBase, ms);

/**
 * Width-only sizes — s()
 */
export const sizeW = {
  handle: s(48),
  switchTrack: s(50),
};

/**
 * Height-only sizes — vs()
 */
export const sizeH = {
  progress: vs(2),
  handle: vs(4),
  switchTrack: vs(28),
  buttonSm: vs(32),
  buttonMd: vs(40),
  buttonLg: vs(48),
};
