import type { PullToRefreshProps } from './types';

import * as React from 'react';
import { RefreshControl, ScrollView } from 'react-native';
import { useTheme } from '@/theme';

export type { PullToRefreshProps } from './types';

export function PullToRefresh({
  onRefresh,
  refreshing,
  children,
  refreshControlProps,
  testID,
  ...scrollViewProps
}: PullToRefreshProps) {
  const { theme } = useTheme();

  return (
    <ScrollView
      testID={testID}
      refreshControl={(
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={theme.colors.brand.primary}
          colors={[theme.colors.brand.primary]}
          {...refreshControlProps}
        />
      )}
      {...scrollViewProps}
    >
      {children}
    </ScrollView>
  );
}

PullToRefresh.displayName = 'PullToRefresh';
