import type { SpacerProps } from './types';

import * as React from 'react';
import { View } from '@/components';
import { SIZE_CONFIG } from './constants';

export type { SpacerProps, SpacerSize } from './types';

export function Spacer({
  size = 'md',
  horizontal = false,
  custom,
  style,
  testID,
}: SpacerProps) {
  const sizeConfig = SIZE_CONFIG[size];
  const baseStyle = horizontal ? sizeConfig.horizontalStyle : sizeConfig.verticalStyle;

  const containerStyle = [
    baseStyle,
    custom !== undefined && (horizontal ? { width: custom } : { height: custom }),
    style,
  ].filter(Boolean);

  return (
    <View
      style={containerStyle}
      testID={testID}
      accessibilityRole="none"
    />
  );
}

Spacer.displayName = 'Spacer';
