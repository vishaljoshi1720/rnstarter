import type { IconProps } from './types';

import * as React from 'react';
import { StyleSheet } from 'react-native';

import { isRTL } from '@/lib/i18n';
import { useTheme } from '@/theme';
import { iconDefaults, icons } from './icons';

export type { IconName, IconProps } from './types';

const RTL_FLIP_ICONS = new Set(['arrow-right']);

/**
 * Typed SVG icon from the project registry.
 * Size/width/height are design units (not auto-scaled — pass theme.icon.*).
 *
 * Decorative by default: set `accessibilityLabel` to expose to screen readers.
 */
export function Icon({
  name,
  size = 24,
  width,
  height,
  color,
  style,
  testID,
  accessibilityLabel,
  accessibilityHint,
  accessible,
  ...accessibilityProps
}: IconProps) {
  const { theme } = useTheme();
  const SvgIcon = icons[name];
  const defaults = iconDefaults[name];

  const rawWidth = width ?? defaults?.width ?? size;
  const rawHeight = height ?? defaults?.height ?? size;
  const resolvedColor = color ?? theme.colors.text.primary;
  const isAccessible = accessible ?? Boolean(accessibilityLabel);

  const rtlStyle = RTL_FLIP_ICONS.has(name)
    ? { transform: [{ scaleX: isRTL ? -1 : 1 }] }
    : undefined;

  return (
    <SvgIcon
      width={rawWidth}
      height={rawHeight}
      color={resolvedColor}
      style={StyleSheet.flatten([rtlStyle, style])}
      testID={testID}
      accessible={isAccessible}
      accessibilityRole={isAccessible ? 'image' : undefined}
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
      importantForAccessibility={isAccessible ? 'yes' : 'no-hide-descendants'}
      {...accessibilityProps}
    />
  );
}
