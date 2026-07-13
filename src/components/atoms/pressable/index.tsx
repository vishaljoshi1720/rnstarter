import type { View } from 'react-native';
import type { AppPressableProps } from './types';

import * as React from 'react';
import { Pressable as RNPressable } from 'react-native';

export type { AppPressableProps } from './types';

/**
 * App Pressable wrapper — import from @/components, not react-native.
 */
export function Pressable({
  ref,
  ...props
}: AppPressableProps & { ref?: React.Ref<View | null> }) {
  return <RNPressable ref={ref} {...props} />;
}
