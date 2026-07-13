import { useRouter } from 'expo-router';

import { ROUTES } from '@/common/constants';

/**
 * App navigation helpers built on Expo Router.
 * Prefer these over raw `router.push('/…')` string paths.
 */
export function useAppNavigation() {
  const router = useRouter();

  return {
    router,
    goToHome: () => router.push(ROUTES.HOME),
    replaceToHome: () => router.replace(ROUTES.HOME),
    goToLogin: () => router.push(ROUTES.LOGIN),
    replaceToLogin: () => router.replace(ROUTES.LOGIN),
    goToOnboarding: () => router.push(ROUTES.ONBOARDING),
    replaceToOnboarding: () => router.replace(ROUTES.ONBOARDING),
    goToSettings: () => router.push(ROUTES.SETTINGS),
    replaceToSettings: () => router.replace(ROUTES.SETTINGS),
    goBack: () => router.back(),
    canGoBack: () => router.canGoBack(),
  };
}
