import type { Edge } from 'react-native-safe-area-context';
import type { ScreenProps } from './types';
import * as React from 'react';

import { SafeAreaView } from '@/components/atoms/safe-area-view';
import { styles } from './styles';

export type { ScreenProps } from './types';

const DEFAULT_EDGES: Edge[] = ['top', 'right', 'bottom', 'left'];

/**
 * Full-screen layout that respects notch / status bar / Android nav bar.
 * App uses edge-to-edge — always wrap screen content with this (or SafeAreaView).
 */
export function Screen({
  children,
  style,
  edges = DEFAULT_EDGES,
  testID,
}: ScreenProps) {
  return (
    <SafeAreaView
      edges={edges}
      style={[styles.root, style]}
      testID={testID}
    >
      {children}
    </SafeAreaView>
  );
}
