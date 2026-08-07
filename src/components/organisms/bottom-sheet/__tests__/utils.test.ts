import {
  resolveEnableDynamicSizing,
  resolveSheetBottomPadding,
} from '../utils';

describe('bottom-sheet utils', () => {
  describe('resolveEnableDynamicSizing', () => {
    it('defaults to true when snapPoints omitted', () => {
      expect(resolveEnableDynamicSizing(undefined, undefined)).toBe(true);
    });

    it('defaults to false when snapPoints provided', () => {
      expect(resolveEnableDynamicSizing(undefined, ['50%'])).toBe(false);
    });

    it('honors explicit override', () => {
      expect(resolveEnableDynamicSizing(true, ['50%'])).toBe(true);
      expect(resolveEnableDynamicSizing(false, undefined)).toBe(false);
    });
  });

  describe('resolveSheetBottomPadding', () => {
    it('uses safe-area when larger than min', () => {
      expect(resolveSheetBottomPadding(34, 16)).toBe(34);
    });

    it('falls back to min padding when safe-area is 0', () => {
      expect(resolveSheetBottomPadding(0, 16)).toBe(16);
    });
  });
});
