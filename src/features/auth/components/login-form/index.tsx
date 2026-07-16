import type { LoginFormProps } from './types';
import * as React from 'react';

import { AppText, Button, Screen, View } from '@/components';
import { ControlledInput, useForm } from '@/lib/form';
import { translate } from '@/lib/i18n';
import { schema } from './constants';
import { styles } from './styles';

export type { FormType, LoginFormProps } from './types';

/**
 * Login form uses Screen preset="scroll" so keyboard-controller
 * auto-scrolls focused fields — same pattern as production screens.
 */
export function LoginForm({ onSubmit = () => {} }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm(schema, {
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  return (
    <Screen
      preset="scroll"
      edges={['top', 'bottom']}
      contentContainerStyle={styles.scrollContent}
      keyboardMode="insets"
      keyboardToolbar
      bottomOffset={24}
      extraKeyboardSpace={64}
      testID="login-form-screen"
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText
            testID="form-title"
            variant="displaySmall"
            style={styles.title}
            tx="login.title"
          />
          <AppText
            variant="bodyLarge"
            color="secondary"
            style={styles.subtitle}
            tx="login.subtitle"
          />
        </View>

        <ControlledInput
          name="name"
          control={control}
          testID="name"
          label={translate('login.name')}
        />

        <ControlledInput
          name="email"
          control={control}
          testID="email-input"
          label={translate('login.email')}
        />

        <ControlledInput
          name="password"
          control={control}
          testID="password-input"
          label={translate('login.password')}
          placeholder={translate('login.password_placeholder')}
          secureTextEntry
        />

        <Button
          testID="login-button"
          label={translate('login.button')}
          onPress={handleSubmit(onSubmit)}
          loading={isSubmitting}
        />
      </View>
    </Screen>
  );
}
