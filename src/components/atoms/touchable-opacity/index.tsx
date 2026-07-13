import type { AppTouchableOpacityProps } from './types';
import * as React from 'react';
import { TouchableOpacity as RNTouchableOpacity } from 'react-native';

export type { AppTouchableOpacityProps } from './types';

/**
 * App TouchableOpacity wrapper — import from @/components/ui, not react-native.
 */
export function TouchableOpacity(props: AppTouchableOpacityProps) {
  return <RNTouchableOpacity {...props} />;
}
