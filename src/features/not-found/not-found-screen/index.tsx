import { Link, Stack } from 'expo-router';

import { ROUTES } from '@/common/constants';
import { AppText, Screen, View } from '@/components';
import { translate } from '@/lib/i18n';
import { styles } from './styles';

export function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: translate('not_found.title') }} />
      <Screen style={styles.container}>
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
