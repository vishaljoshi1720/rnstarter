import { ms, s, scaleTokens, vs } from '@/common/utils/scale';

const spacingBase = {
  'none': 0,
  'xs': 4,
  'sm': 8,
  'md': 12,
  'lg': 16,
  'xl': 24,
  '2xl': 32,
  '3xl': 48,
  '4xl': 64,
};

/** Horizontal spacing (paddingX / marginX / left / right) — s() */
export const spacingX = scaleTokens(spacingBase, s);

/** Vertical spacing (paddingY / marginY / top / bottom) — vs() */
export const spacingY = scaleTokens(spacingBase, vs);

/** Flex/grid gap — ms() */
export const gap = scaleTokens(spacingBase, ms);
