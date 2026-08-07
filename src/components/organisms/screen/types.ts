import type { ReactNode } from 'react';
import type { ScrollViewProps, StyleProp, ViewStyle } from 'react-native';
import type { KeyboardAwareScrollViewMode } from 'react-native-keyboard-controller';
import type { ScreenHeaderProps } from '@/components/molecules/screen-header';

/**
 * Layout intent
 * - static: fixed content, no scroll
 * - scroll: plain ScrollView (+ optional refresh). Not keyboard-aware by default.
 * - form: KeyboardAwareScrollView (default keyboard mode="insets" for stable footers)
 *
 * Anti-patterns:
 * - Do NOT nest FlashList / FlatList inside layout="scroll"
 * - Use layout="form" when inputs must avoid the keyboard
 * - Do NOT set keyboard.mode="layout" on form + sticky footer (reflow jump)
 * - Do NOT put ScreenHeader inside children — use `header` so it stays fixed
 */
export type ScreenLayout = 'static' | 'scroll' | 'form';

export type ScreenSpacingToken
  = 'none'
    | '2xs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl';

export type ScreenBackgroundToken = 'primary' | 'secondary' | 'tertiary';

export type ScreenSafeArea = {
  top?: boolean;
  bottom?: boolean;
  left?: boolean;
  right?: boolean;
};

export type ScreenInset
  = ScreenSpacingToken
    | {
      horizontal?: ScreenSpacingToken;
      vertical?: ScreenSpacingToken;
    };

export type ScreenRefresh = {
  onRefresh: () => void | Promise<void>;
  /**
   * Controlled refreshing flag.
   * - When provided: fully controlled (Screen does not keep internal refreshing state)
   * - When omitted: Screen owns refreshing while `onRefresh` runs
   */
  refreshing?: boolean;
};

export type ScreenKeyboard = {
  persistTaps?: 'handled' | 'always' | 'never';
  /**
   * Extra gap between focused caret and the top obstruction
   * (keyboard, or keyboard + sticky CTA).
   */
  bottomOffset?: number;
  /** Extra bottom space while keyboard is open. */
  extraScrollSpace?: number;
  /**
   * KeyboardAwareScrollView mode. Prefer omitting — Screen picks a stable default:
   * form footers use `insets` (no layout reflow during keyboard animation).
   * Only set `layout` when you intentionally want flex reflow.
   */
  mode?: KeyboardAwareScrollViewMode;
};

export type ScreenFooter = {
  content: ReactNode;
  /**
   * - keyboard-sticky (default): CTA sibling via KeyboardStickyView; scroll uses
   *   mode="insets" + bottomOffset that includes measured footer height
   * - inline: footer is last child inside KeyboardAwareScrollView with mode="insets"
   *   (no layout reflow / space-between — avoids jump behind keyboard)
   */
  behavior?: 'inline' | 'keyboard-sticky';
};

/**
 * Fixed header outside scroll/form bodies.
 * Pass ScreenHeader props, a custom element, or omit for no header.
 */
export type ScreenHeaderConfig = ScreenHeaderProps | ReactNode;

export type ScreenScrollProps = Omit<
  ScrollViewProps,
  'style' | 'contentContainerStyle' | 'refreshControl' | 'keyboardShouldPersistTaps'
>;

type ScreenCommonProps = {
  children?: ReactNode;
  /**
   * Fixed header rendered above the body (never scrolls).
   * Prefer this over nesting ScreenHeader in children.
   */
  header?: ScreenHeaderConfig;
  /** Pass `false` for full-bleed. Default: top + bottom. */
  safeArea?: ScreenSafeArea | false;
  background?: ScreenBackgroundToken;
  backgroundColor?: string;
  inset?: ScreenInset;
  contentStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle>;
  testID?: string;
  /**
   * Focus-aware status bar (needs React Navigation focus).
   * Default true. Set false for screens outside a navigator.
   */
  statusBar?: boolean;
};

type ScreenStaticProps = ScreenCommonProps & {
  layout?: 'static';
};

type ScreenScrollLayoutProps = ScreenCommonProps & {
  layout: 'scroll';
  refresh?: ScreenRefresh;
  scrollProps?: ScreenScrollProps;
  /**
   * Opt into KeyboardAwareScrollView for scroll layout.
   * Default false — lists/feeds should not pay keyboard-aware cost.
   */
  keyboardAware?: boolean;
  keyboard?: ScreenKeyboard;
};

type ScreenFormLayoutProps = ScreenCommonProps & {
  layout: 'form';
  keyboard?: ScreenKeyboard;
  footer?: ScreenFooter;
  scrollProps?: ScreenScrollProps;
};

export type ScreenProps
  = ScreenStaticProps
    | ScreenScrollLayoutProps
    | ScreenFormLayoutProps;
