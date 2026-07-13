import type { IconProps } from './types';

import * as React from 'react';
import { StyleSheet } from 'react-native';

import { ms, s, vs } from '@/common/utils/scale';
import { isRTL } from '@/lib/i18n';
import { useAppTheme } from '@/theme';
import { iconDefaults, icons } from './icons';

export type { IconName, IconProps } from './types';

const RTL_FLIP_ICONS = new Set(['arrow-right']);

/**
 * Typed SVG icon from the project registry.
 * Pass design units — square icons use ms(); rectangular use s()+vs().
 *
 * @example
 * <Icon name="home" size={24} color={theme.colors.bodyText} />
 * <Icon name="arrow-right" accessibilityLabel={translate('common.navigate')} />
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
  accessible = true,
  ...accessibilityProps
}: IconProps) {
  const { theme } = useAppTheme();
  const SvgIcon = icons[name];
  const defaults = iconDefaults[name];

  const rawWidth = width ?? defaults?.width ?? size;
  const rawHeight = height ?? defaults?.height ?? size;
  const isSquare = rawWidth === rawHeight;
  const resolvedWidth = isSquare ? ms(rawWidth) : s(rawWidth);
  const resolvedHeight = isSquare ? ms(rawHeight) : vs(rawHeight);
  const resolvedColor = color ?? theme.colors.bodyText;

  const rtlStyle = RTL_FLIP_ICONS.has(name)
    ? { transform: [{ scaleX: isRTL ? -1 : 1 }] }
    : undefined;

  return (
    <SvgIcon
      width={resolvedWidth}
      height={resolvedHeight}
      color={resolvedColor}
      style={StyleSheet.flatten([rtlStyle, style])}
      testID={testID}
      accessible={accessible}
      accessibilityRole="image"
      accessibilityLabel={accessibilityLabel ?? name}
      accessibilityHint={accessibilityHint}
      {...accessibilityProps}
    />
  );
}
