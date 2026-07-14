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
 * AGENT GUIDE — when to use what:
 *
 * ws(n)  -> width, paddingHorizontal, marginHorizontal, paddingLeft/Right,
 *           marginLeft/Right, gap (horizontal), left/right position
 * hs(n)  -> height, paddingVertical, marginVertical, paddingTop/Bottom,
 *           marginTop/Bottom, top/bottom position
 * fs(n)  -> fontSize, lineHeight, iconSize, borderRadius, borderWidth (thick)
 * sp(n)  -> generic spacing when direction unclear / small-medium gap value
 * mvs(n) -> large vertical spacing: section margins, card gaps, list item
 *           gaps, anything where plain hs() would overshoot on tall screens
 *
 * Prefer theme tokens (already scaled). Call these only for one-off layout
 * numbers that have no token. Never wrap an already-scaled token (double-scale).
 *
 * Rule: layout-critical (exact size/position) -> ws/hs (raw scale).
 *       text/icon/radius -> fs (moderate, capped growth).
 *       big vertical gaps -> mvs (moderate, capped growth).
 *       small/ambiguous spacing -> sp.
 */

// ---- short aliases ----
export const ws = scale; // width, horizontal padding/margin, gaps
export const hs = verticalScale; // height, vertical padding/margin
export const fs = moderateScale; // font size, icon size, radius
export const sp = moderateScale; // generic spacing, direction-agnostic
export const mvs = moderateVerticalScale; // large vertical spacing

// ---- grouped object, for autocomplete ----
export const S = { ws, hs, fs, sp, mvs };
