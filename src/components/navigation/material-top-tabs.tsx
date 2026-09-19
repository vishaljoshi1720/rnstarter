import {
  type MaterialTopTabNavigationEventMap,
  type MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from 'expo-router/js-top-tabs';

import type { ParamListBase, TabNavigationState } from 'expo-router/react-navigation';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

/**
 * Material Top Tabs navigator for Expo Router.
 *
 * Uses Expo Router's `js-top-tabs` entry point (SDK 56+).
 *
 * Features:
 * - Swipeable tabs with gesture support
 * - Animated tab indicator
 * - Scrollable tabs for many options
 * - Full Material Design 3 styling
 * - Lazy loading support
 *
 * @example
 * // app/(tabs)/_layout.tsx
 * import { MaterialTopTabs } from '@/components/navigation';
 *
 * export default function TabLayout() {
 *   return (
 *     <MaterialTopTabs>
 *       <MaterialTopTabs.Screen
 *         name="index"
 *         options={{ title: 'Home' }}
 *       />
 *       <MaterialTopTabs.Screen
 *         name="profile"
 *         options={{ title: 'Profile' }}
 *       />
 *     </MaterialTopTabs>
 *   );
 * }
 *
 * @see https://docs.expo.dev/router/migrate/sdk-55-to-56/
 */
export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);
