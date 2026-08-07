import type { Control } from 'react-hook-form';

import type { FormType } from './types';

import { View } from 'react-native';
import { AppText } from '@/components';
import { ControlledInput } from '@/lib/form';
import { translate } from '@/lib/i18n';
import { styles } from './styles';

export type { FormType, LoginFormProps } from './types';

/**
 * Login form fields only — screen chrome / sticky CTA live in LoginScreen.
 */
export function LoginForm({ control }: { control: Control<FormType> }) {
  return (
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
    </View>
  );
}
