import { Redirect, Tabs } from 'expo-router';
import * as React from 'react';

import { ROUTES } from '@/common/constants';
import { useIsFirstTime } from '@/common/hooks';
import { Icon } from '@/components/atoms/icon';
import { AuthStatus } from '@/features/auth/types';
import { useAuthStore as useAuth } from '@/features/auth/use-auth-store';
import { translate } from '@/lib/i18n';
import { useTheme } from '@/theme';

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();
  const { theme } = useTheme();

  if (isFirstTime) {
    return <Redirect href={ROUTES.ONBOARDING} />;
  }
  if (status === AuthStatus.SignOut) {
    return <Redirect href={ROUTES.LOGIN} />;
  }
  return (
    <Tabs
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.background.primary,
        },
        headerTintColor: theme.colors.text.primary,
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: theme.colors.background.primary,
          borderTopColor: theme.colors.border.default,
        },
        tabBarActiveTintColor: theme.colors.brand.primary,
        tabBarInactiveTintColor: theme.colors.icon.muted,
        sceneStyle: {
          backgroundColor: theme.colors.background.primary,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: translate('tabs.home'),
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
          tabBarButtonTestID: 'home-tab',
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: translate('tabs.settings'),
          headerShown: false,
          tabBarIcon: ({ color }) => <Icon name="settings" color={color} />,
          tabBarButtonTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}
