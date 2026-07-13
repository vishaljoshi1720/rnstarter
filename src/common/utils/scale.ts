import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension]
  = width < height ? [width, height] : [height, width];

/** Default guideline sizes based on a standard ~5" mobile device. */
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export function scale(size: number): number {
  return (shortDimension / guidelineBaseWidth) * size;
}

export function verticalScale(size: number): number {
  return (longDimension / guidelineBaseHeight) * size;
}

export function moderateScale(size: number, factor = 0.5): number {
  return size + (scale(size) - size) * factor;
}

export function moderateVerticalScale(size: number, factor = 0.5): number {
  return size + (verticalScale(size) - size) * factor;
}

/**
 * Scaling rules (design units → device):
 *
 * | Use                        | Helper |
 * |----------------------------|--------|
 * | Width                      | s()    |
 * | Height                     | vs()   |
 * | Horizontal spacing         | s()    |
 * | Vertical spacing           | vs()   |
 * | Font size                  | ms()   |
 * | Border radius              | ms()   |
 * | Icon size                  | ms()   |
 * | Avatar size                | ms()   |
 * | Square images              | ms()   |
 * | Rectangular images         | s()+vs()|
 * | Gap                        | ms()   |
 *
 * Ratios are capped (`MAX_SCALE` / `MAX_VERTICAL_SCALE`) so tablets
 * keep phone-like density instead of linear blow-up.
 */
export const s = scale;
export const vs = verticalScale;
export const ms = moderateScale;
export const mvs = moderateVerticalScale;

/**
 * Scale every numeric value in a token map.
 */
export function scaleTokens<T extends Record<string, number>>(
  tokens: T,
  scaler: (size: number) => number,
): { [K in keyof T]: number } {
  const result = {} as { [K in keyof T]: number };
  for (const key of Object.keys(tokens) as (keyof T)[]) {
    result[key] = scaler(tokens[key]);
  }
  return result;
}
