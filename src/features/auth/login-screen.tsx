import type { LoginFormProps } from './components/login-form';

import * as React from 'react';
import { useAppNavigation } from '@/common/hooks';
import { FocusAwareStatusBar, Screen } from '@/components/ui';
import { AUTH } from '@/features/auth/constants';
import { LoginForm } from './components/login-form';
import { useAuthStore } from './use-auth-store';

export function LoginScreen() {
  const { goToHome } = useAppNavigation();
  const signIn = useAuthStore.use.signIn();

  const onSubmit: LoginFormProps['onSubmit'] = (data) => {
    console.log(data);
    signIn({
      access: AUTH.DEMO_ACCESS_TOKEN,
      refresh: AUTH.DEMO_REFRESH_TOKEN,
    });
    goToHome();
  };

  return (
    <Screen>
      <FocusAwareStatusBar />
      <LoginForm onSubmit={onSubmit} />
    </Screen>
  );
}
