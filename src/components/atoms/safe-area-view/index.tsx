import type { AppSafeAreaViewProps } from './types';
import * as React from 'react';
import { SafeAreaView as RNSafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

export type { AppSafeAreaViewProps } from './types';

/**
 * Safe area wrapper from `react-native-safe-area-context` (not RN core).
 * Handles notch, status bar, and Android gesture/nav bar with edge-to-edge.
 */
export function SafeAreaView({
  style,
  edges = ['top', 'right', 'bottom', 'left'],
  ...props
}: AppSafeAreaViewProps) {
  return (
    <RNSafeAreaView
      edges={edges}
      style={[styles.root, style]}
      {...props}
    />
  );
}
