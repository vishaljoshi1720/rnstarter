import * as React from 'react';

import { AppText, Button, Screen } from '@/components';
import { translate } from '@/lib/i18n';
import { useAuthStore as useAuth } from '@/shared/auth';
import { styles } from './styles';

export function SettingsScreen() {
  const signOut = useAuth.use.signOut();

  return (
    <Screen contentStyle={styles.content} testID="settings-screen">
      <AppText
        variant="headlineLarge"
        style={styles.title}
        tx="settings.title"
      />

      <Button
        label={translate('settings.logout')}
        variant="outline"
        fullWidth
        onPress={signOut}
        testID="settings-logout"
        style={styles.logout}
      />
    </Screen>
  );
}
