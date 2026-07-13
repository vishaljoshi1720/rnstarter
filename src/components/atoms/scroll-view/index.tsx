import type { AppScrollViewProps } from './types';
import * as React from 'react';

import { ScrollView as RNScrollView } from 'react-native';

export type { AppScrollViewProps } from './types';

/**
 * App ScrollView wrapper — import from @/components/ui, not react-native.
 */
export function ScrollView({
  ref,
  ...props
}: AppScrollViewProps & { ref?: React.Ref<RNScrollView | null> }) {
  return <RNScrollView ref={ref} {...props} />;
}
