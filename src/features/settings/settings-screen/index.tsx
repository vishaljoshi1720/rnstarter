import Env from '@env';

import {
  FocusAwareStatusBar,
  Screen,
  ScrollView,
  Text,
  View,
} from '@/components';
import { Icon } from '@/components/atoms/icon';
import { useAuthStore as useAuth } from '@/features/auth/use-auth-store';
import { translate } from '@/lib/i18n';
import { useAppTheme } from '@/theme';
import { LanguageItem } from '../components/language-item';
import { SettingsContainer } from '../components/settings-container';
import { SettingsItem } from '../components/settings-item';
import { ThemeItem } from '../components/theme-item';
import { styles } from './styles';

export function SettingsScreen() {
  const signOut = useAuth.use.signOut();
  const { theme } = useAppTheme();
  const iconColor = theme.colors.isDark
    ? theme.colors.neutral400
    : theme.colors.neutral500;

  return (
    <Screen edges={['top', 'left', 'right']}>
      <FocusAwareStatusBar />
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>
            {translate('settings.title')}
          </Text>
          <SettingsContainer title="settings.generale">
            <LanguageItem />
            <ThemeItem />
          </SettingsContainer>

          <SettingsContainer title="settings.about">
            <SettingsItem
              text="settings.app_name"
              value={Env.NAME}
            />
            <SettingsItem
              text="settings.version"
              value={Env.VERSION}
            />
          </SettingsContainer>

          <SettingsContainer title="settings.support_us">
            <SettingsItem
              text="settings.share"
              icon={<Icon name="share" color={iconColor} />}
              onPress={() => {}}
            />
            <SettingsItem
              text="settings.rate"
              icon={<Icon name="rate" color={iconColor} />}
              onPress={() => {}}
            />
            <SettingsItem
              text="settings.support"
              icon={<Icon name="support" color={iconColor} />}
              onPress={() => {}}
            />
          </SettingsContainer>

          <SettingsContainer title="settings.links">
            <SettingsItem text="settings.privacy" onPress={() => {}} />
            <SettingsItem text="settings.terms" onPress={() => {}} />
            <SettingsItem
              text="settings.github"
              icon={<Icon name="github" color={iconColor} />}
              onPress={() => {}}
            />
            <SettingsItem
              text="settings.website"
              icon={<Icon name="website" color={iconColor} />}
              onPress={() => {}}
            />
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
