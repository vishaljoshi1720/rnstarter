import type { ReactNode } from 'react';
import type { ScrollViewProps, ViewProps, ViewStyle } from 'react-native';
import type { Edge } from 'react-native-safe-area-context';

export type ScreenPreset = 'fixed' | 'scroll' | 'auto';

export type ScreenProps = {
  /**
   * Layout preset
   * - fixed: View (no scroll)
   * - scroll: KeyboardAwareScrollView
   * - auto: detect based on contentContainerStyle
   */
  preset?: ScreenPreset;

  /** Children to render */
  children?: ReactNode;

  /** Safe area edges to respect */
  edges?: Edge[];

  /** Background color */
  backgroundColor?: string;

  /** Skip SafeAreaView wrapper for full control */
  unsafe?: boolean;

  /** Container style */
  style?: ViewProps['style'];

  /** Content container style (scroll preset only) */
  contentContainerStyle?: ViewStyle;

  /** Pull to refresh callback */
  onRefresh?: () => void | Promise<void>;

  /** Refreshing state */
  refreshing?: boolean;

  /** Keyboard persist taps (scroll preset only) */
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';

  /** Status bar style */
  statusBarStyle?: 'light' | 'dark' | 'auto';

  /** Test identifier */
  testID?: string;

  /** Additional ScrollView props (scroll preset only) */
  scrollViewProps?: Omit<ScrollViewProps, 'style' | 'contentContainerStyle' | 'refreshControl' | 'keyboardShouldPersistTaps'>;
};
