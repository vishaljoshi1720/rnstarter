import type { RefreshControlProps, ScrollViewProps } from 'react-native';

export type PullToRefreshProps = {
  onRefresh: () => void | Promise<void>;
  refreshing: boolean;
  children: React.ReactNode;
  refreshControlProps?: Omit<RefreshControlProps, 'refreshing' | 'onRefresh'>;
  testID?: string;
} & Omit<ScrollViewProps, 'refreshControl'>;
