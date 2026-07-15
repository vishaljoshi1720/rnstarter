import type { MaterialTopTabNavigationEventMap, MaterialTopTabNavigationOptions } from '@react-navigation/material-top-tabs';
import type { ParamListBase, TabNavigationState } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { withLayoutContext } from 'expo-router';

const { Navigator } = createMaterialTopTabNavigator();

/**
 * Material Top Tabs navigator for Expo Router.
 *
 * Uses the official React Navigation Material Top Tabs implementation
 * with proper Expo Router integration (SDK 54 compatible).
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
 * @see https://reactnavigation.org/docs/material-top-tab-navigator
 */
export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);
