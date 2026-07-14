import type { FormType, LoginFormProps } from './types';
import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { Controller, useForm } from 'react-hook-form';

import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { AppText, Button, Input, View } from '@/components';
import { translate } from '@/lib/i18n';
import { schema } from './constants';
import { styles } from './styles';

export type { FormType, LoginFormProps } from './types';

export function LoginForm({ onSubmit = () => {} }: LoginFormProps) {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  return (
    <KeyboardAvoidingView
      style={styles.keyboard}
      behavior="padding"
      keyboardVerticalOffset={10}
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

        <Controller
          name="name"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              testID="name"
              label={translate('login.name')}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              testID="email-input"
              label={translate('login.email')}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <Input
              testID="password-input"
              label={translate('login.password')}
              placeholder={translate('login.password_placeholder')}
              secureTextEntry={true}
              value={field.value}
              onBlur={field.onBlur}
              onChangeText={field.onChange}
              error={fieldState.error?.message}
            />
          )}
        />

        <Button
          testID="login-button"
          label={translate('login.button')}
          onPress={handleSubmit(onSubmit)}
          loading={isSubmitting}
          variant="outline"
        />
      </View>
    </KeyboardAvoidingView>
  );
}
