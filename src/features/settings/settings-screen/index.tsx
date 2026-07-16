import {
  AppText,
  FocusAwareStatusBar,
  Screen,
  ScrollView,
  View,
} from '@/components';
import { useAuthStore as useAuth } from '@/features/auth/use-auth-store';
import { translate } from '@/lib/i18n';
import { LanguageItem } from '../components/language-item';
import { SettingsContainer } from '../components/settings-container';
import { SettingsItem } from '../components/settings-item';
import { ThemeItem } from '../components/theme-item';
import { styles } from './styles';

export function SettingsScreen() {
  const signOut = useAuth.use.signOut();

  return (
    <Screen edges={['top', 'left', 'right']}>
      <FocusAwareStatusBar />
      <ScrollView>
        <View style={styles.container}>
          <AppText variant="displaySmall" style={styles.title}>
            {translate('settings.title')}
          </AppText>

          <SettingsContainer>
            <LanguageItem />
            <ThemeItem />
          </SettingsContainer>

          <View style={styles.logoutContainer}>
            <SettingsContainer>
              <SettingsItem text="settings.logout" onPress={signOut} />
            </SettingsContainer>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}
