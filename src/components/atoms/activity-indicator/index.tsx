import type { AppActivityIndicatorProps } from './types';
import * as React from 'react';
import { ActivityIndicator as RNActivityIndicator } from 'react-native';

export type { AppActivityIndicatorProps } from './types';

/**
 * App ActivityIndicator wrapper — import from @/components, not react-native.
 */
export function ActivityIndicator(props: AppActivityIndicatorProps) {
  return <RNActivityIndicator {...props} />;
}
