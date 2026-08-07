import type { Edge } from 'react-native-safe-area-context';

import type {
  ScreenFooter,
  ScreenInset,
  ScreenSafeArea,
  ScreenSpacingToken,
} from './types';

/**
 * Fallback caret↔keyboard gap when theme not in scope.
 * Prefer passing theme.spacing.xl at call sites when available.
 */
export const DEFAULT_BOTTOM_OFFSET = 24;

/**
 * Ignore footer onLayout noise below this delta (px).
 * Prevents KeyboardAwareScrollView's bottomOffset sync effect from re-firing.
 */
export const FOOTER_HEIGHT_EPSILON = 2;

export const DEFAULT_SAFE_AREA: ScreenSafeArea = {
  top: true,
  bottom: true,
  left: false,
  right: false,
};

/**
 * Form footers default to keyboard-sticky (CTA rides keyboard).
 * Opt into `inline` for document-flow footers inside the scroll view.
 */
export function resolveFooterBehavior(
  footer: ScreenFooter | undefined,
): 'none' | 'inline' | 'keyboard-sticky' {
  if (!footer)
    return 'none';
  return footer.behavior === 'inline' ? 'inline' : 'keyboard-sticky';
}

export function usesStickyFooter(behavior: 'none' | 'inline' | 'keyboard-sticky') {
  return behavior === 'keyboard-sticky';
}

/**
 * Inline forms must use mode="insets".
 * mode="layout" + space-between reflows the footer every keyboard frame → visible jump.
 */
export function resolveInlineKeyboardMode(
  mode: 'insets' | 'layout' | undefined,
): 'insets' | 'layout' {
  return mode ?? 'insets';
}

/**
 * Sticky forms use mode="insets" so only KeyboardStickyView translates —
 * scroll content does not reflow under the CTA during keyboard animation.
 */
export function resolveStickyKeyboardMode(
  mode: 'insets' | 'layout' | undefined,
): 'insets' | 'layout' {
  return mode ?? 'insets';
}

/** Caret clearance above sticky CTA + keyboard. */
export function resolveStickyBottomOffset(
  gap: number,
  footerHeight: number,
): number {
  return gap + Math.max(footerHeight, 0);
}

/**
 * KeyboardStickyView `opened` offset.
 * Keep home-indicator clearance when sticky footer rises with keyboard.
 */
export function resolveStickyOpenedOffset(bottomInset: number): number {
  return bottomInset;
}

export function shouldUpdateFooterHeight(
  previous: number,
  next: number,
  epsilon: number = FOOTER_HEIGHT_EPSILON,
): boolean {
  return Math.abs(next - previous) >= epsilon;
}

export function resolveSafeAreaEdges(
  safeArea: ScreenSafeArea | false | undefined,
): Edge[] | null {
  if (safeArea === false)
    return null;

  const config = {
    ...DEFAULT_SAFE_AREA,
    ...safeArea,
  };

  const edges: Edge[] = [];
  if (config.top)
    edges.push('top');
  if (config.bottom)
    edges.push('bottom');
  if (config.left)
    edges.push('left');
  if (config.right)
    edges.push('right');

  return edges;
}

/** Sticky footer owns bottom inset — drop SafeArea bottom to avoid double-count. */
export function excludeBottomEdge(edges: Edge[] | null): Edge[] | null {
  if (edges === null)
    return null;
  const next = edges.filter(edge => edge !== 'bottom');
  return next.length > 0 ? next : null;
}

export function resolveInsetStyle(
  inset: ScreenInset | undefined,
  spacing: Record<ScreenSpacingToken, number>,
) {
  if (inset === undefined)
    return undefined;

  if (typeof inset === 'string')
    return { padding: spacing[inset] };

  return {
    ...(inset.horizontal !== undefined && {
      paddingHorizontal: spacing[inset.horizontal],
    }),
    ...(inset.vertical !== undefined && {
      paddingVertical: spacing[inset.vertical],
    }),
  };
}

export function resolveHorizontalInsetStyle(
  inset: ScreenInset | undefined,
  spacing: Record<ScreenSpacingToken, number>,
): { paddingHorizontal: number } | undefined {
  if (inset === undefined)
    return undefined;

  if (typeof inset === 'string')
    return { paddingHorizontal: spacing[inset] };

  if (inset.horizontal === undefined)
    return undefined;

  return { paddingHorizontal: spacing[inset.horizontal] };
}

/** Body inset under a fixed header — drop top so header owns that space. */
export function resolveBodyInsetStyle(
  inset: ScreenInset | undefined,
  spacing: Record<ScreenSpacingToken, number>,
) {
  if (inset === undefined)
    return undefined;

  if (typeof inset === 'string') {
    return {
      paddingHorizontal: spacing[inset],
      paddingBottom: spacing[inset],
    };
  }

  return {
    ...(inset.horizontal !== undefined && {
      paddingHorizontal: spacing[inset.horizontal],
    }),
    ...(inset.vertical !== undefined && {
      paddingBottom: spacing[inset.vertical],
    }),
  };
}

/**
 * Header content inset — horizontal only, tighter than body.
 * Nav bars use `lg` (16) even when body uses `xl`, so actions sit near edges.
 * Applied as ScreenHeader `contentStyle` so the hairline stays full-bleed.
 */
export function resolveHeaderInsetStyle(
  inset: ScreenInset | undefined,
  spacing: Record<ScreenSpacingToken, number>,
) {
  if (inset === undefined)
    return undefined;

  const horizontal
    = typeof inset === 'string' ? inset : inset.horizontal;

  if (horizontal === undefined)
    return undefined;

  return {
    paddingHorizontal: Math.min(spacing[horizontal], spacing.lg),
  };
}
