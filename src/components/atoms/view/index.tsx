import type { AppViewProps } from './types';
import * as React from 'react';

import { View as RNView } from 'react-native';

export type { AppViewProps } from './types';

/**
 * App View wrapper — import from @/components, not react-native.
 */
export function View({ ref, ...props }: AppViewProps & { ref?: React.Ref<RNView | null> }) {
  return <RNView ref={ref} {...props} />;
}
