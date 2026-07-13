import { Link, Stack } from 'expo-router';

import { ROUTES } from '@/common/constants';
import { Screen, Text, View } from '@/components';
import { translate } from '@/lib/i18n';
import { styles } from './styles';

export function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: translate('not_found.title') }} />
      <Screen style={styles.container}>
        <View>
          <Text style={styles.title} tx="not_found.message" />
          <Link href={ROUTES.HOME}>
            <Text style={styles.link} tx="not_found.go_home" />
          </Link>
        </View>
      </Screen>
    </>
  );
}
