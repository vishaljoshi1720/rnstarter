import type { DividerProps } from './types';

import * as React from 'react';
import { View } from '@/components';
import { styles } from './styles';

export type { DividerOrientation, DividerProps } from './types';

export function Divider({
  orientation = 'horizontal',
  thickness,
  color,
  style,
  testID,
}: DividerProps) {
  const baseStyle = orientation === 'horizontal' ? styles.horizontal : styles.vertical;

  const customStyle = [
    baseStyle,
    thickness !== undefined && (orientation === 'horizontal' ? { height: thickness } : { width: thickness }),
    color !== undefined && { backgroundColor: color },
    style,
  ].filter(Boolean);

  return (
    <View
      style={customStyle}
      testID={testID}
      accessibilityRole="none"
    />
  );
}

Divider.displayName = 'Divider';
