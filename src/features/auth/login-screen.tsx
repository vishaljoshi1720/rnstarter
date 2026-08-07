import type { LoginFormProps } from './components/login-form';

import * as React from 'react';
import { Button, Screen } from '@/components';
import { AUTH } from '@/features/auth/constants';
import { translate } from '@/lib/i18n';
import { useAuthStore } from '@/shared/auth';
import { useAppNavigation } from '@/shared/hooks';
import { LoginForm } from './components/login-form';
import { useLoginForm } from './components/login-form/use-login-form';

export function LoginScreen() {
  const { goToHome } = useAppNavigation();
  const signIn = useAuthStore.use.signIn();

  const onSubmit: NonNullable<LoginFormProps['onSubmit']> = async (_data) => {
    await signIn({
      access: AUTH.DEMO_ACCESS_TOKEN,
      refresh: AUTH.DEMO_REFRESH_TOKEN,
    });
    goToHome();
  };

  const { control, submit, isSubmitting } = useLoginForm(onSubmit);

  return (
    <Screen
      layout="form"
      inset={{ horizontal: 'xl', vertical: '2xl' }}
      footer={{
        behavior: 'keyboard-sticky',
        content: (
          <Button
            testID="login-button"
            label={translate('login.button')}
            onPress={submit}
            loading={isSubmitting}
            fullWidth
          />
        ),
      }}
      testID="login-form-screen"
    >
      <LoginForm control={control} />
    </Screen>
  );
}
