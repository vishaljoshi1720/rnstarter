/**
 * Helpers kept tiny and testable — sheet sizing must not fight Gorhom defaults.
 */

export function resolveEnableDynamicSizing(
  enableDynamicSizing: boolean | undefined,
  snapPoints: unknown,
): boolean {
  if (enableDynamicSizing !== undefined)
    return enableDynamicSizing;
  return snapPoints == null;
}

export function resolveSheetBottomPadding(
  safeBottom: number,
  minPadding: number,
): number {
  return Math.max(safeBottom, minPadding);
}
