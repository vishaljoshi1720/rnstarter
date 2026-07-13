import { Redirect, Tabs } from 'expo-router';
import * as React from 'react';

import { ROUTES } from '@/common/constants';
import { useIsFirstTime } from '@/common/hooks';
import { Icon } from '@/components/atoms/icon';
import { AuthStatus } from '@/features/auth/types';
import { useAuthStore as useAuth } from '@/features/auth/use-auth-store';
import { translate } from '@/lib/i18n';

export default function TabLayout() {
  const status = useAuth.use.status();
  const [isFirstTime] = useIsFirstTime();

  if (isFirstTime) {
    return <Redirect href={ROUTES.ONBOARDING} />;
  }
  if (status === AuthStatus.SignOut) {
    return <Redirect href={ROUTES.LOGIN} />;
  }
  return (
    <Tabs>
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
