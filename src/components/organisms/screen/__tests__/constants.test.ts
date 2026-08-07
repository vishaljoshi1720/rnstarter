import {
  DEFAULT_BOTTOM_OFFSET,
  excludeBottomEdge,
  resolveBodyInsetStyle,
  resolveFooterBehavior,
  resolveHeaderInsetStyle,
  resolveHorizontalInsetStyle,
  resolveInlineKeyboardMode,
  resolveInsetStyle,
  resolveSafeAreaEdges,
  resolveStickyBottomOffset,
  resolveStickyKeyboardMode,
  resolveStickyOpenedOffset,
  shouldUpdateFooterHeight,
  usesStickyFooter,
} from '../constants';

describe('screen constants', () => {
  const spacing = {
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

  it('resolves default safe area edges', () => {
    expect(resolveSafeAreaEdges(undefined)).toEqual(['top', 'bottom']);
  });

  it('disables safe area when false', () => {
    expect(resolveSafeAreaEdges(false)).toBeNull();
  });

  it('excludes bottom edge for sticky footer', () => {
    expect(excludeBottomEdge(['top', 'bottom'])).toEqual(['top']);
    expect(excludeBottomEdge(['bottom'])).toBeNull();
  });

  it('resolves inset tokens', () => {
    expect(resolveInsetStyle('lg', spacing)).toEqual({ padding: 16 });
    expect(resolveInsetStyle({ horizontal: 'xl', vertical: '2xl' }, spacing)).toEqual({
      paddingHorizontal: 24,
      paddingVertical: 32,
    });
  });

  it('resolves horizontal inset for sticky footer only', () => {
    expect(resolveHorizontalInsetStyle({ horizontal: 'xl', vertical: '2xl' }, spacing)).toEqual({
      paddingHorizontal: 24,
    });
    expect(resolveHorizontalInsetStyle('lg', spacing)).toEqual({
      paddingHorizontal: 16,
    });
    expect(resolveHorizontalInsetStyle({ vertical: '2xl' }, spacing)).toBeUndefined();
  });

  it('exports a finite default bottom offset', () => {
    expect(DEFAULT_BOTTOM_OFFSET).toBeGreaterThan(0);
  });

  it('defaults form footer to keyboard-sticky', () => {
    expect(resolveFooterBehavior({ content: null })).toBe('keyboard-sticky');
    expect(resolveFooterBehavior({ content: null, behavior: 'inline' })).toBe('inline');
    expect(resolveFooterBehavior(undefined)).toBe('none');
    expect(usesStickyFooter('keyboard-sticky')).toBe(true);
    expect(usesStickyFooter('inline')).toBe(false);
  });

  it('keeps form keyboard modes on insets by default', () => {
    expect(resolveInlineKeyboardMode(undefined)).toBe('insets');
    expect(resolveStickyKeyboardMode(undefined)).toBe('insets');
    expect(resolveInlineKeyboardMode('layout')).toBe('layout');
  });

  it('composes sticky bottom offset and ignores tiny footer layout noise', () => {
    expect(resolveStickyBottomOffset(24, 80)).toBe(104);
    expect(shouldUpdateFooterHeight(80, 81)).toBe(false);
    expect(shouldUpdateFooterHeight(80, 83)).toBe(true);
  });

  it('keeps sticky opened offset equal to home-indicator inset', () => {
    expect(resolveStickyOpenedOffset(34)).toBe(34);
    expect(resolveStickyOpenedOffset(0)).toBe(0);
  });

  it('applies capped horizontal inset on header content (full-bleed border)', () => {
    expect(resolveHeaderInsetStyle({ horizontal: 'xl', vertical: '2xl' }, spacing)).toEqual({
      paddingHorizontal: 16,
    });
    expect(resolveBodyInsetStyle({ horizontal: 'xl', vertical: '2xl' }, spacing)).toEqual({
      paddingHorizontal: 24,
      paddingBottom: 32,
    });
    expect(resolveHeaderInsetStyle('lg', spacing)).toEqual({
      paddingHorizontal: 16,
    });
    expect(resolveBodyInsetStyle('lg', spacing)).toEqual({
      paddingHorizontal: 16,
      paddingBottom: 16,
    });
    expect(resolveHeaderInsetStyle({ horizontal: 'sm' }, spacing)).toEqual({
      paddingHorizontal: 8,
    });
  });
});
