import type { ReactNode } from 'react';
import type { ScrollViewProps, ViewProps, ViewStyle } from 'react-native';
import type { KeyboardAwareScrollViewMode } from 'react-native-keyboard-controller';
import type { Edge } from 'react-native-safe-area-context';

/**
 * Layout preset
 * - fixed: SafeArea/View only — no scroll, no keyboard avoidance
 * - scroll: KeyboardAwareScrollView (react-native-keyboard-controller)
 */
export type ScreenPreset = 'fixed' | 'scroll';

export type ScreenProps = {
  /**
   * Layout preset
   * - fixed: View (no scroll, no keyboard avoidance)
   * - scroll: KeyboardAwareScrollView with auto-scroll to focused inputs
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

  /**
   * How KeyboardAwareScrollView reserves space for the keyboard.
   * - insets (default): layout-free, smooth native animation (recommended)
   * - layout: spacer participates in flex layout (sticky footers inside scroll)
   */
  keyboardMode?: KeyboardAwareScrollViewMode;

  /**
   * Extra space between keyboard and focused input (scroll preset).
   * Defaults: iOS 12, Android 20.
   */
  bottomOffset?: number;

  /**
   * Extra bottom padding when keyboard is open (scroll preset).
   * Increase when using KeyboardStickyView / KeyboardToolbar.
   */
  extraKeyboardSpace?: number;

  /**
   * Show Prev / Next / Done toolbar above the keyboard (scroll preset).
   * Uses KeyboardToolbar from react-native-keyboard-controller.
   */
  keyboardToolbar?: boolean;

  /**
   * Fixed footer below the scroll view (scroll preset).
   * Wrap with KeyboardStickyView when it should track the keyboard.
   */
  stickyFooter?: ReactNode;

  /** Status bar style */
  statusBarStyle?: 'light' | 'dark' | 'auto';

  /** Test identifier */
  testID?: string;

  /** Additional ScrollView props (scroll preset only) */
  scrollViewProps?: Omit<
    ScrollViewProps,
    'style' | 'contentContainerStyle' | 'refreshControl' | 'keyboardShouldPersistTaps'
  >;
};
