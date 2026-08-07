export { AppToaster } from './toaster';
/**
 * App toast API — re-exports sonner-native.
 *
 * Why sonner-native (not flash-message / burnt / notifee):
 * - Matches web Sonner API (low learning cost)
 * - Reanimated animations, swipe-to-dismiss
 * - Already wired in this template (`showError` uses it)
 * - Works with Expo + GestureHandlerRootView
 */
export { toast } from 'sonner-native';
