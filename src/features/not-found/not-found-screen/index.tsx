import { Link, Stack } from 'expo-router';

import { View } from 'react-native';
import { AppText, Screen } from '@/components';
import { translate } from '@/lib/i18n';
import { ROUTES } from '@/shared/constants';
import { styles } from './styles';

export function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: translate('not_found.title') }} />
      <Screen
        inset={{ horizontal: 'xl', vertical: '2xl' }}
        contentStyle={styles.content}
      >
        <View>
          <AppText
            variant="displayMedium"
            style={styles.title}
            tx="not_found.message"
          />
          <Link href={ROUTES.HOME}>
            <AppText
              variant="bodyLarge"
              color="link"
              style={styles.link}
              tx="not_found.go_home"
            />
          </Link>
        </View>
      </Screen>
    </>
  );
}
