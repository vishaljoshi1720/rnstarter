import { Redirect, Tabs } from 'expo-router';
import * as React from 'react';

import { Icon } from '@/components/atoms/icon';
import { translate } from '@/lib/i18n';
import { AUTH_STATUS, useAuthStore as useAuth } from '@/shared/auth';
import { ROUTES } from '@/shared/constants';
import { useIsFirstTime } from '@/shared/hooks';
import { useTheme } from '@/theme';

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();
  const { theme } = useTheme();

  if (isFirstTime) {
    return <Redirect href={ROUTES.ONBOARDING} />;
  }
  if (status === AUTH_STATUS.SignOut) {
    return <Redirect href={ROUTES.LOGIN} />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
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
          tabBarIcon: ({ color }) => <Icon name="settings" color={color} />,
          tabBarButtonTestID: 'settings-tab',
        }}
      />
    </Tabs>
  );
}
